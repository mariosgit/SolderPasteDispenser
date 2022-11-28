// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream

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
    deviceDosome: HTMLButtonElement | null;
    deviceInput: HTMLInputElement | null;
    deviceInputForm: HTMLFormElement | null;
    deviceInfo: HTMLDivElement | null;
    deviceLog: HTMLDivElement | null;
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
        this.deviceDosome = <HTMLButtonElement | null>document.getElementById("deviceDosome");
        this.deviceInput = <HTMLInputElement | null>document.getElementById("deviceInput");
        this.deviceInputForm = <HTMLFormElement | null>document.getElementById("deviceInputForm");
        this.deviceInfo = <HTMLDivElement | null>document.getElementById("deviceInfo");
        this.deviceLog = <HTMLDivElement | null>document.getElementById("deviceLog");
        this.port = null;
        this.textDecoder = new TextDecoderStream();
        if (this.deviceCheck && this.deviceConnect && this.deviceDisconnect && this.deviceDosome && this.deviceInput && this.deviceInputForm) {
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
     * Overwrite this in derived class to get notification when some device was connected.
     */
    protected onSerialConnected() {
        console.log('Device: onSerialConnected')
    }
    /**
     * Overwrite this in derived class to get notification when some device was disconnected.
     */
    protected onSerialDisconnected() {
        console.log('Device: onSerialDisconnected')
    }

    /**
     * Opens a dialog where user can select a device to connect.
     */
    public async serialConnect() {
        // opens dialog where user can select a device
        const port = await navigator.serial.requestPort();
        this.serialPortOpen(port);
    }

    public async serialConnectDevice(vid: number, pid: number) {
        for (let port of this.ports) {
            console.log(`serial available, ports: `, port.getInfo());
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
            if(this.port) {
                try {
                    // write...
                    let utf8Encode = new TextEncoder();
                    const writer = this.port.writable.getWriter();
                    await writer.write(utf8Encode.encode(`${value}\n`));
                    writer.releaseLock();

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
                    console.warn(err);
                    reject('busy');
                }
            } else {
                console.warn(this.port);
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
                    let utf8Encode = new TextEncoder();
                    const writer = this.port.writable.getWriter();
                    await writer.write(utf8Encode.encode(`${text}\n`));
                    writer.releaseLock();
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
            navigator.serial.addEventListener("connect", (event) => {
                // TODO: Automatically open event.target or warn user a port is available.
                console.log(event);
                this.updatePorts();
                this.onSerialConnected();
            });
            navigator.serial.addEventListener("disconnect", (event) => {
                // TODO: Remove |event.target| from the UI.
                // If the serial port was opened, a stream error would be observed as well.
                console.log(event);
                this.onSerialDisconnected();
            });
            result = true;
        } else {
            console.warn('No serial API available, try onother browser');
        }
        return result;
    }

    private updatePorts() {
        // lists all recently used ports, could just open one then.
        navigator.serial.getPorts().then((ports) => {
            this.ports = ports;
            let html = 'devices:<br>';
            for (let port of ports) {
                console.log(`serial available, ports: `, port.getInfo());
                const { usbProductId, usbVendorId } = port.getInfo();
                console.log(`updatePorts port pid:${usbProductId} vid:${usbVendorId}`);
                html += `pid:${usbProductId} vid:${usbVendorId} <button class="w3-btn w3-grey w3-tiny" id="${usbVendorId}-${usbProductId}">connect</button>`;
            }
            if (this.deviceInfo) {
                this.deviceInfo.innerHTML = html;
                const btns = this.deviceInfo.getElementsByTagName('button');
                for (const btn of btns) {
                    btn.onclick = () => { const ids = btn.id.split('-'); console.log(ids); this.serialConnectDevice(ids[0], ids[1]) };
                }
            }
        });
    }

    /**
     * Opens a givven port. Can be used after queriing ports with updatePorts.
     * @param port
     */
    private async serialPortOpen(port: any) {
        await port.open({ baudRate: 250000 }).then((val) => {
            this.port = port;
            console.log('port opened ? ', this.port);
            if (this.deviceLog) {
                this.deviceLog.innerHTML = "connected<br>";
            }
            this.port.onconnect = () => { console.log(`CONNECTED`); };
            this.port.ondisconnect = () => { console.log(`DISCONNECTED`); this.onSerialDisconnected(); };
            setTimeout(this.serialRead.bind(this), 0); // start read loop
            this.onSerialConnected(); // signal derived class
        }).catch((error) => {
            console.warn(error);
            this.serialError(error.toString());
        });
    }

    private serialError(error: string) {
        if (this.deviceLog) {
            this.deviceLog.innerHTML += `<span class="w3-red">${error}</span>`
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


}