/**
 * Marlin: Device specific implementation.
*/

import { Device } from "./device";

export class Marlin extends Device {
    marlinDiv: HTMLElement | null;
    marlinDivStatus: HTMLElement | null;
    marlinDivPosition: HTMLElement | null;
    constructor() {
        super();
        this.marlinDiv = document.getElementById("Marlin");
        this.initHtml();
    }
    protected onSerialConnected() {
        console.log('Marlin: onSerialConnected');
        // read over first messages
        // setTimeout(() => {
        //     while(this.inputQueue.length > 0) {
        //         if (this.marlinDivPosition) {
        //             this.marlinDivPosition.innerHTML += `${this.inputQueue.pop()}`;
        //         }
        //     }
        //     if (this.marlinDivStatus) {
        //         this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">👍</span> ready';
        //     }
        // }, 1000);
    }
    protected onSerialDisconnected() {
        console.log('Marlin: onSerialDisconnected');
        if (this.marlinDivStatus) {
            this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">👎</span> disconnected';
        }
    }

    /**
     * Inherited from Device, adds Status message updates.
     * @param value
     * @param timeout
     * @returns
     */
    public async serialWriteWait(value: string, timeout: number = 10000): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            if (this.marlinDivStatus) {
                this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">🎉</span> busy';
            }
            super.serialWriteWait(value, timeout).then((result) => {
                resolve(result);
            }).catch((reason) => {
                reject(reason);
            }).finally(() => {
                if (this.marlinDivStatus) {
                    this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">👍</span> ready';
                }
            });
        });
    }
    onBtnHome() {
        // timeout too small for this command, see what happens
        this.serialWriteWait('G28', 100).then((value) => {
            console.log(value);
        }).catch((reason) => {
            console.warn(reason);
            // try again (default timeout is 10sec)
            this.serialWriteWait('G28').then((value) => {
                console.log(value);
                this.onBtnPos();
            }).catch((reason) => { console.warn(reason) });
        });
    };
    onBtnPos() {
        this.serialWriteWait('M114').then((value) => {
            console.log(value);
            if (this.marlinDivPosition) {
                this.marlinDivPosition.innerText = value;
            }
        }).catch((reason) => {
            console.warn(reason);
        });
    };
    onBtnRel() {
        this.serialWriteWait('G91');
    };
    onBtnCold() {
        this.serialWriteWait('M302 S0');
    };

    onBtnXP() {
        this.serialWriteWait('G0 X10').then((value) =>  { this.onBtnPos(); });
    };
    onBtnXM() {
        this.serialWriteWait('G0 X-10').then((value) => { this.onBtnPos(); });
    };
    onBtnYP() {
        this.serialWriteWait('G0 Y10').then((value) =>  { this.onBtnPos(); });
    };
    onBtnYM() {
        this.serialWriteWait('G0 Y-10').then((value) => { this.onBtnPos(); });
    };
    onBtnZP() {
        this.serialWriteWait('G0 Z10').then((value) =>  { this.onBtnPos(); });
    };
    onBtnZM() {
        this.serialWriteWait('G0 Z-10').then((value) => { this.onBtnPos(); });
    };
    onBtnEP() {
        this.serialWriteWait('G0 E10').then((value) =>  { this.onBtnPos(); });
    };
    onBtnEM() {
        this.serialWriteWait('G0 E-10').then((value) => { this.onBtnPos(); });
    };

    private initHtml() {
        if (this.marlinDiv) {
            this.marlinDiv.innerHTML = `
            <div id="marlinStatus"></div>
            <div id="marlinPosition" class="w3-tiny"></div>
            <div >
            <button id="marlinHome" class="w3-button w3-grey">home</button>
            <button id="marlinPos" class="w3-button w3-grey">pos?</button>
            <button id="marlinRel" class="w3-button w3-grey">rel</button>
            <button id="marlinCold" class="w3-button w3-grey">cold</button>
            <br>
            <button id="marlinXP" class="w3-button w3-grey">x+</button>
            <button id="marlinXM" class="w3-button w3-grey">x-</button>
            <button id="marlinYP" class="w3-button w3-grey">y+</button>
            <button id="marlinYM" class="w3-button w3-grey">y-</button>
            <button id="marlinZP" class="w3-button w3-grey">z+</button>
            <button id="marlinZM" class="w3-button w3-grey">z-</button>
            <button id="marlinEP" class="w3-button w3-grey">e+</button>
            <button id="marlinEM" class="w3-button w3-grey">e-</button>
            </div>
            `
            this.marlinDivStatus = document.getElementById("marlinStatus");
            this.marlinDivPosition = document.getElementById("marlinPosition");
            if (this.marlinDivStatus) {
                this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">💭</span> not connected';
            }
            const marlinBtnHome = document.getElementById("marlinHome");
            if (marlinBtnHome) {
                marlinBtnHome.onclick = this.onBtnHome.bind(this);
            }
            const marlinBtnPos = document.getElementById("marlinPos");
            if (marlinBtnPos) {
                marlinBtnPos.onclick = this.onBtnPos.bind(this);
            }
            const marlinBtnRel = document.getElementById("marlinRel");
            if (marlinBtnRel) {
                marlinBtnRel.onclick = this.onBtnRel.bind(this);
            }
            const marlinBtnCold = document.getElementById("marlinCold");
            if (marlinBtnCold) {
                marlinBtnCold.onclick = this.onBtnCold.bind(this);
            }

            const marlinBtnXP = document.getElementById("marlinXP");
            if (marlinBtnXP) {
                marlinBtnXP.onclick = this.onBtnXP.bind(this);
            }
            const marlinBtnXM = document.getElementById("marlinXM");
            if (marlinBtnXM) {
                marlinBtnXM.onclick = this.onBtnXM.bind(this);
            }
            const marlinBtnYP = document.getElementById("marlinYP");
            if (marlinBtnYP) {
                marlinBtnYP.onclick = this.onBtnYP.bind(this);
            }
            const marlinBtnYM = document.getElementById("marlinYM");
            if (marlinBtnYM) {
                marlinBtnYM.onclick = this.onBtnYM.bind(this);
            }
            const marlinBtnZP = document.getElementById("marlinZP");
            if (marlinBtnZP) {
                marlinBtnZP.onclick = this.onBtnZP.bind(this);
            }
            const marlinBtnZM = document.getElementById("marlinZM");
            if (marlinBtnZM) {
                marlinBtnZM.onclick = this.onBtnZM.bind(this);
            }
            const marlinBtnEP = document.getElementById("marlinEP");
            if (marlinBtnEP) {
                marlinBtnEP.onclick = this.onBtnEP.bind(this);
            }
            const marlinBtnEM = document.getElementById("marlinEM");
            if (marlinBtnEM) {
                marlinBtnEM.onclick = this.onBtnEM.bind(this);
            }
        }
    }
}
