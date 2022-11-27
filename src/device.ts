// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream

export class Device {
    deviceCheck: HTMLButtonElement | null;
    deviceConnect: HTMLButtonElement | null;
    deviceDisconnect: HTMLButtonElement | null;
    deviceDosome: HTMLButtonElement | null;
    deviceInput: HTMLInputElement | null;
    deviceInputForm: HTMLFormElement | null;
    deviceLog: HTMLDivElement | null;
    port: any;
    textDecoder: TextDecoderStream;
    reader: ReadableStreamDefaultReader<string>;
    inputQueue: string[] = [];
    inputLast: string = '';
    constructor() {
        this.deviceCheck = <HTMLButtonElement | null>document.getElementById("deviceCheck");
        this.deviceConnect = <HTMLButtonElement | null>document.getElementById("deviceConnect");
        this.deviceDisconnect = <HTMLButtonElement | null>document.getElementById("deviceDisconnect");
        this.deviceDosome = <HTMLButtonElement | null>document.getElementById("deviceDosome");
        this.deviceInput = <HTMLInputElement | null>document.getElementById("deviceInput");
        this.deviceInputForm = <HTMLFormElement | null>document.getElementById("deviceInputForm");
        this.deviceLog = <HTMLDivElement | null>document.getElementById("deviceLog");
        this.port = null;
        this.textDecoder = new TextDecoderStream();
        if (this.deviceCheck && this.deviceConnect && this.deviceDisconnect && this.deviceDosome && this.deviceInput && this.deviceInputForm) {
            this.deviceCheck.onclick = this.serialCheck.bind(this);
            this.deviceConnect.onclick = this.serialConnect.bind(this);
            this.deviceDisconnect.onclick = this.serialDisconnect.bind(this);
            this.deviceDosome.onclick = this.serialDosome.bind(this);
            // this.deviceInput.onchange = this.serialInputChange.bind(this);
            this.deviceInputForm.onsubmit = this.serialInputForm.bind(this);
        }
        this.serialCheck();
    }
    async serialCheck() {
        let result = false;
        if ("serial" in navigator) {
            this.updatePorts();
            navigator.serial.addEventListener("connect", (event) => {
                // TODO: Automatically open event.target or warn user a port is available.
                console.log(event);
                this.updatePorts();
            });
            navigator.serial.addEventListener("disconnect", (event) => {
                // TODO: Remove |event.target| from the UI.
                // If the serial port was opened, a stream error would be observed as well.
                console.log(event);
            });
            result = true;
        } else {
            console.warn('No serial API available, try onother browser');
        }
        return result;
    }
    updatePorts() {
        // lists all recently used ports, could just open one then.
        navigator.serial.getPorts().then((ports) => {
            for (let port of ports) {
                // console.log(`serial available, ports: `, port);
                const { usbProductId, usbVendorId } = port.getInfo();
                console.log(`updatePorts port pid:${usbProductId} vid:${usbVendorId}`);
            }
        });
    }
    serialError(error:string) {
        if(this.deviceLog) {
            this.deviceLog.innerHTML += `<span class="w3-red">${error}</span>`
        }
    }

    protected onSerialConnected() {
        console.log('Device: onSerialConnected')
    }
    protected onSerialDisconnected() {
        console.log('Device: onSerialDisconnected')
    }

    async serialConnect() {
        // opens dialog where user can select a device
        this.port = await navigator.serial.requestPort();
        await this.port.open({ baudRate: 250000 }).then((val) => {
            console.log('port opened ? ', this.port);
            if(this.deviceLog) {
                this.deviceLog.innerHTML = "connected<br>";
            }
            this.port.onconnect = () => { console.log(`CONNECTED`); };
            this.port.ondisconnect = () => { console.log(`DISCONNECTED`); this.onSerialDisconnected(); };
            setTimeout(this.serialRead.bind(this), 0);
            this.onSerialConnected(); // signal derived class
        }).catch((error) => {
            console.warn(error);
            this.serialError(error.toString());
        });
    }
    async serialRead() {
        if (this.port) {
            const readableStreamClosed = this.port.readable.pipeTo(this.textDecoder.writable);
            this.reader = this.textDecoder.readable.getReader();
            // Listen to data coming from the serial device.
            setTimeout(this.serialReadon.bind(this), 1); // will loop there
        }
    }
    async serialReadon() {
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
    serialCallback() {
        const elem = document.getElementById('deviceLog');
        if (elem) {
            let latest = this.inputQueue.pop();
            while (latest) {
                elem.innerHTML += `${latest}<br>`;
                latest = this.inputQueue.pop();
            }
        }
    }
    async serialWrite(value:string) {
        let utf8Encode = new TextEncoder();
        const writer = this.port.writable.getWriter();
        await writer.write(utf8Encode.encode(`${value}\n`));
        writer.releaseLock();
    }
    async serialDisconnect() {
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
    async serialDosome() {
        // const { usbProductId, usbVendorId } = this.port.getInfo();
        // console.log(`serialDosome info ${usbProductId} ${usbVendorId}`);

        // send some nonsense
        let utf8Encode = new TextEncoder();
        const writer = this.port.writable.getWriter();
        await writer.write(utf8Encode.encode("hiho\n"));
        writer.releaseLock();
    }
    async serialInputForm(event: InputEvent) { // fires when return is entered
        if (this.deviceInput) {
            event.preventDefault(); // form will do strange things !
            // console.log(event);
            this.serialInputChange(event);
        }
    }

    async serialInputChange(event: InputEvent) { // fires when return is entered
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
}