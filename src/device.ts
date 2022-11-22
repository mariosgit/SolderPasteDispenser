export class Device {
    deviceCheck: HTMLButtonElement | null;
    deviceConnect: HTMLButtonElement | null;
    deviceDisconnect: HTMLButtonElement | null;
    deviceDosome: HTMLButtonElement | null;
    port: any;
    textDecoder: TextDecoderStream;
    reader: ReadableStreamDefaultReader<string>;
    constructor() {
        this.deviceCheck = <HTMLButtonElement | null>document.getElementById("deviceCheck");
        this.deviceConnect = <HTMLButtonElement | null>document.getElementById("deviceConnect");
        this.deviceDisconnect = <HTMLButtonElement | null>document.getElementById("deviceDisconnect");
        this.deviceDosome = <HTMLButtonElement | null>document.getElementById("deviceDosome");
        this.port = null;
        this.textDecoder = new TextDecoderStream();
        if (this.deviceCheck && this.deviceConnect && this.deviceDisconnect && this.deviceDosome) {
            this.deviceCheck.onclick = this.serialCheck.bind(this);
            this.deviceConnect.onclick = this.serialConnect.bind(this);
            this.deviceDisconnect.onclick = this.serialDisconnect.bind(this);
            this.deviceDosome.onclick = this.serialDosome.bind(this);
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
    async serialConnect() {
        // opens dialog where user can select a device
        this.port = await navigator.serial.requestPort();
        await this.port.open({ baudRate: 115200 }).then((val) => {
            console.log('port opened ? ', this.port);
            setTimeout(this.serialRead.bind(this), 0);
        });
    }
    async serialRead() {
        if (this.port) {
            const readableStreamClosed = this.port.readable.pipeTo(this.textDecoder.writable);
            this.reader = this.textDecoder.readable.getReader();
            try {
                // Listen to data coming from the serial device.
                while (true) {
                    const { value, done } = await this.reader.read();
                    if (done) {
                        // Allow the serial port to be closed later.
                        this.reader.releaseLock();
                        console.log('serialRead - done')
                        break;
                    }
                    // value is a string.
                    console.log(value);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
    serialWrite() {
        const writer: WritableStream = this.port.writable.getWriter();

    }
    async serialDisconnect() {
        if (this.port) {
            this.port.close().then(() => {
                this.port = null;
                console.log('port closed');
            });
        }
    }
    async serialDosome() {
        const { usbProductId, usbVendorId } = this.port.getInfo();
        console.log(`serialDosome info ${usbProductId} ${usbVendorId}`);
    }
}
