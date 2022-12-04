// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream

import { Pad } from "./pcb";

/**
 * Device: abstracts access to machine.
 * It "simplifies" serial port access. At the moment it only ollows "write and response" style communication.
 * The serial port is opened, then a reader loop is startet, which pushes each new line into the inputQueue.
 * Function serialWriteWait is used to issue commands and wait for the device to aknowledge.
 */

export class Device {
    deviceCheck: HTMLButtonElement | null;
    deviceConnect: HTMLButtonElement | null;
    deviceDisconnect: HTMLButtonElement | null;
    deviceInput: HTMLInputElement | null;
    deviceInputForm: HTMLFormElement | null;
    deviceInfo: HTMLDivElement | null;
    deviceLog: HTMLDivElement | null;
    deviceSerial: HTMLDivElement | null;
    ports: any;
    port: any;
    textDecoder: TextDecoderStream;
    reader: ReadableStreamDefaultReader<string>;
    inputLast: string = '';

    protected inputQueue: string[] = [];

    constructor() {
        this.deviceCheck = <HTMLButtonElement | null>document.getElementById("deviceCheck");
        this.deviceConnect = <HTMLButtonElement | null>document.getElementById("deviceConnect");
        this.deviceDisconnect = <HTMLButtonElement | null>document.getElementById("deviceDisconnect");
        this.deviceInput = <HTMLInputElement | null>document.getElementById("deviceInput");
        this.deviceInputForm = <HTMLFormElement | null>document.getElementById("deviceInputForm");
        this.deviceInfo = <HTMLDivElement | null>document.getElementById("deviceInfo");
        this.deviceLog = <HTMLDivElement | null>document.getElementById("deviceLog");
        this.deviceSerial = <HTMLDivElement | null>document.getElementById("deviceSerial");
        this.port = null;
        this.textDecoder = new TextDecoderStream();
        if (this.deviceCheck && this.deviceConnect && this.deviceDisconnect && this.deviceInput && this.deviceInputForm) {
            this.deviceCheck.onclick = this.serialCheck.bind(this);
            this.deviceConnect.onclick = this.serialConnect.bind(this);
            this.deviceDisconnect.onclick = this.serialDisconnect.bind(this);
            // this.deviceDosome.onclick = this.serialDosome.bind(this);
            // this.deviceInput.onchange = this.serialInputChange.bind(this);
            this.deviceInputForm.onsubmit = this.serialInputForm.bind(this);
        }
        this.serialCheck();
    }

    /**
     * Overwrite! Set the current position to Zero. All further commands will be relative to this position.
     */
    public setZero?(point:[number,number]): void;
        /**
     * Overwrite! Move to position. If one coordinate is undefined, it's ignored
     */
    public moveTo?(x:number|undefined, y:number|undefined, z:number|undefined, e: number | undefined): void
    public moveToAll?(plist: Pad[]);

    public blob?();

    /**
     * Overwrite this in derived class to get notification when some device was connected.
     */
    protected onSerialConnected?():void;
    /**
     * Overwrite this in derived class to get notification when some device was disconnected.
     */
    protected onSerialDisconnected?():void;

    /**
     * Opens a dialog where user can select a device to connect.
     */
    public async serialConnect() {
        // opens dialog where user can select a device
        (<any>navigator).serial.requestPort().then((port) => {
            console.log('serialConnect', port);
            this.serialPortOpen(port);
        }).catch((reason) => {
            // console.warn('serialConnect',reason);
            this.serialError(reason);
        });
    }

    public async serialConnectDevice(vid: number, pid: number) {
        for (let port of this.ports) {
            console.log(`serialConnectDevice: serial available, ports: `, port.getInfo());
            const { usbProductId, usbVendorId } = port.getInfo();
            if (usbProductId == pid && usbVendorId == vid) {
                this.serialPortOpen(port);
                break;
            }
        }
    }

    /**
     * Disconnect from device
     */
    public async serialDisconnect() {
        if (this.port) {
            // this.reader.releaseLock(); // does'nt do it :(
            this.port.close().then(() => {
                this.port = null;
                console.log('port closed');
            }).catch((error) => {
                console.warn(error);
            });
        }
    }

    /**
     *  Wait until some response or timeout, returns response or 'timeout' or might fail with 'busy' or 'disconnected'
     */
    public async serialWriteWait(value: string, timeout: number = 10000): Promise<string> {
        // clean serial input
        this.inputQueue = [];
        return new Promise<string>(async (resolve, reject) => {
            if (this.port) {
                try {
                    this.serialWrite(value);
                    // wait until some response or timeout
                    let available = false;
                    const timestep = 10;
                    let maxtime = timeout;
                    while (!available) {
                        available = await this.serialAvail(timestep);
                        maxtime = maxtime - timestep;
                        if (maxtime <= 0)
                            break;
                    }
                    console.log(`serialWriteWait avail:${available} time:${timeout - maxtime}`);

                    console.log(`serialWriteWait check: ${this.inputQueue.length}`);
                    if (this.inputQueue.length > 0) {
                        const inp = <string>this.inputQueue.pop();
                        // console.log(`serialWriteWait resolve: ${inp}`);
                        resolve(inp);
                    } else {
                        // console.log(`serialWriteWait reject: `);
                        reject('timeout');
                    }
                } catch (err) {
                    // console.warn(err);
                    reject('busy');
                }
            } else {
                // console.warn(this.port);
                reject('disconnected');
            }

        });
    }


    /**
     * Helper function to write anything to the device.
     * @param event
     */
    public serialInputForm(event: InputEvent) { // fires when return is entered
        if (this.deviceInput) {
            event.preventDefault(); // form will do strange things !
            // console.log(event);
            this.serialInputChange(event);
        }
    }

    /**
     * Helper function to write anything to the device.
     * @param event
     */
    public async serialInputChange(event: InputEvent) { // fires when return is entered
        if (this.deviceInput) {
            if (this.port) {
                let text = this.deviceInput.value;
                if (text.length > 0) {
                    this.serialWrite(text);
                }
            } else {
                console.warn('serialInputChange - no port open');
            }
        }
    }

    /* ***************** private stuff **************************** */

    private async serialCheck() {
        let result = false;
        if ("serial" in navigator) {
            this.updatePorts();
            (<any>navigator).serial.addEventListener("connect", (event) => {
                // TODO: Automatically open event.target or warn user a port is available.
                console.log('serialCheck:connect', event);
                this.updatePorts();
            });
            (<any>navigator).serial.addEventListener("disconnect", (event) => {
                // TODO: Remove |event.target| from the UI.
                // If the serial port was opened, a stream error would be observed as well.
                console.log('serialCheck:disconnect', event);
            });
            result = true;
        } else {
            // console.warn('No serial API available, try another browser');
            this.serialError("This browser does not support the serial port. Connection to device impossible! Use Chrome!");
        }
        return result;
    }

    private updatePorts() {
        // lists all recently used ports, could just open one then.
        (<any>navigator).serial.getPorts().then((ports) => {
            console.log('updatePorts:', ports);
            this.ports = ports;
            let html = '';//devices:<br>';
            for (let port of ports) {
                console.log(`serial available, ports: `, port.getInfo());
                const { usbProductId, usbVendorId } = port.getInfo();
                console.log(`updatePorts port pid:${usbProductId} vid:${usbVendorId}`);
                html += `<div class="w3-container"><i class="fa-solid fa-microchip"></i> pid:${usbProductId} vid:${usbVendorId} <button class="w3-btn w3-round w3-light-grey w3-tiny" id="${usbVendorId}-${usbProductId}"><i class="fa fa-plug"></i> connect </button></div>`;
            }
            if (this.deviceInfo) {
                this.deviceInfo.innerHTML = html;
                const btns = this.deviceInfo.getElementsByTagName('button');
                for (const btn of btns) {
                    btn.onclick = () => { const ids = btn.id.split('-'); console.log(ids); this.serialConnectDevice(parseInt(ids[0]), parseInt(ids[1])) };
                }
            }
            if (this.deviceConnect && (this.ports == null || this.ports.length == 0)) {
                // console.log('updatePorts: open dev buttons!!!', this.deviceConnect.className);
                this.deviceConnect.className = this.deviceConnect.className.replace('w3-hide', 'w3-show');
            }
        });
    }

    /**
     * Opens a givven port. Can be used after queriing ports with updatePorts.
     * @param port
     */
    private serialPortOpen(port: any) {
        port.onconnect = () => {
            console.log(`CONNECTED`);
        };
        port.ondisconnect = () => {
            console.log(`DISCONNECTED`);
            if(this.onSerialDisconnected) {
                this.onSerialDisconnected();
            }
        };
        port.open({ baudRate: 250000 }).then((val) => {
            this.port = port;
            if (this.deviceLog) {
                this.deviceLog.innerHTML = "connected<br>";
            }
            console.log('port opened ? ', this.port);
            if(this.onSerialConnected){
                this.onSerialConnected();
            }

            setTimeout(this.serialRead.bind(this), 0); // start read loop
        }).catch((error) => {
            // console.warn(error);
            this.serialError(error.toString());
        });
    }

    protected serialError(error: string) {
        console.warn('serialError', error);
        if (this.deviceLog) {
            this.deviceLog.innerHTML = `<span class="w3-red">${error}</span><br>`
        }
    }

    /**
     * Internal, starts the read line loop.
     */
    private async serialRead() {
        if (this.port) {
            const readableStreamClosed = this.port.readable.pipeTo(this.textDecoder.writable);
            this.reader = this.textDecoder.readable.getReader();
            // Listen to data coming from the serial device.
            setTimeout(this.serialReadon.bind(this), 1); // will loop there
        }
    }

    /**
     * Internal, handles the read line loop.
     */
    private async serialReadon() {
        try {
            const { value, done } = await this.reader.read();
            if (done) {
                // Allow the serial port to be closed later. // Does not happen !
                this.reader.releaseLock();
                console.log('serialRead - done');
            } else {
                let pushedStuff = false;
                // value is a string.
                if (value.indexOf('\n') != -1) {
                    const values = value.split('\n');
                    // console.log(values);
                    if (values.length <= 1) {
                        console.error('Assertion failed ', values);
                    }; // there is a \n in it !
                    for (let i = 0; i < values.length - 1; i++) {
                        this.inputLast += values[i];
                        this.inputQueue.push(this.inputLast);
                        this.serialLog(this.inputLast, true);
                        this.inputLast = '';
                        pushedStuff = true;
                    }
                    this.inputLast = values[values.length - 1];
                    // console.log(`serialReadon last: "${this.inputLast}"`);
                } else {
                    // no \n
                    this.inputLast += value;
                    // console.log(`serialReadon last: "${this.inputLast}"`);
                }

                if (pushedStuff) {
                    setTimeout(this.serialCallback.bind(this), 5);
                }
                setTimeout(this.serialReadon.bind(this), 1); // will loop there
            }
        } catch (error) {
            console.warn(error);
            this.serialError(error.toString());
        }
    }

    private serialCallback() {
        // const elem = document.getElementById('deviceLog');
        // if (elem) {
        //     let latest = this.inputQueue.pop();
        //     while (latest) {
        //         elem.innerHTML += `${latest}<br>`;
        //         latest = this.inputQueue.pop();
        //     }
        // }
    }

    private async serialWrite(value: string) {
        this.serialLog(value, false);

        // write...
        let utf8Encode = new TextEncoder();
        const writer = this.port.writable.getWriter();
        await writer.write(utf8Encode.encode(`${value}\n`));
        writer.releaseLock();
    }

    /**
     * Waits until data was read or timeout
     * @param timeout
     * @returns
     */
    private serialAvail(timeout: number = 10): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (this.inputQueue.length > 0) {
                resolve(true);
            } else {
                setTimeout(() => {
                    resolve(false);
                }, timeout);
            }
        });
    }

    private serialLog(text: string, incomming: boolean) {
        if (this.deviceSerial) {
            while (this.deviceSerial.childElementCount > 20) {
                let ch = this.deviceSerial.firstChild;
                if (ch) {
                    this.deviceSerial.removeChild(ch);
                }
            }
            if (incomming) {
                this.deviceSerial.innerHTML += `<div><i class="fa-solid fa-arrow-right-to-bracket"></i> ${text}</div>`
            } else {
                this.deviceSerial.innerHTML += `<div><i class="fa-solid fa-arrow-up-right-from-square"></i> ${text}</div>`;
            }
            globalThis.resize();
        }
    }
}
