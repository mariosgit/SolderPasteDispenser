/*
Todo:
 * SerialWrite += wait for "ok" !!! 
*/
import { Device } from "./device";

export class Marlin extends Device {
    marlinDiv: HTMLElement | null;
    marlinDivStatus: HTMLElement | null;
    constructor() {
        super();
        this.marlinDiv = document.getElementById("Marlin");
        console.log('hallo');
        if(this.marlinDiv) {
            this.marlinDiv.innerHTML = `
            <div id="marlinStatus"></div>
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
            if(this.marlinDivStatus) {
                this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">💭</span> horst';
            }
            const marlinBtnHome = document.getElementById("marlinHome");
            if(marlinBtnHome) {
                marlinBtnHome.onclick = this.onBtnHome.bind(this);
            }
            const marlinBtnPos = document.getElementById("marlinPos");
            if(marlinBtnPos) {
                marlinBtnPos.onclick = this.onBtnPos.bind(this);
            }
            const marlinBtnRel = document.getElementById("marlinRel");
            if(marlinBtnRel) {
                marlinBtnRel.onclick = this.onBtnRel.bind(this);
            }
            const marlinBtnCold = document.getElementById("marlinCold");
            if(marlinBtnCold) {
                marlinBtnCold.onclick = this.onBtnCold.bind(this);
            }

            const marlinBtnXP = document.getElementById("marlinXP");
            if(marlinBtnXP) {
                marlinBtnXP.onclick = this.onBtnXP.bind(this);
            }
            const marlinBtnXM = document.getElementById("marlinXM");
            if(marlinBtnXM) {
                marlinBtnXM.onclick = this.onBtnXM.bind(this);
            }
            const marlinBtnYP = document.getElementById("marlinYP");
            if(marlinBtnYP) {
                marlinBtnYP.onclick = this.onBtnYP.bind(this);
            }
            const marlinBtnYM = document.getElementById("marlinYM");
            if(marlinBtnYM) {
                marlinBtnYM.onclick = this.onBtnYM.bind(this);
            }
            const marlinBtnZP = document.getElementById("marlinZP");
            if(marlinBtnZP) {
                marlinBtnZP.onclick = this.onBtnZP.bind(this);
            }
            const marlinBtnZM = document.getElementById("marlinZM");
            if(marlinBtnZM) {
                marlinBtnZM.onclick = this.onBtnZM.bind(this);
            }
            const marlinBtnEP = document.getElementById("marlinEP");
            if(marlinBtnEP) {
                marlinBtnEP.onclick = this.onBtnEP.bind(this);
            }
            const marlinBtnEM = document.getElementById("marlinEM");
            if(marlinBtnEM) {
                marlinBtnEM.onclick = this.onBtnEM.bind(this);
            }
        }
    }
    protected onSerialConnected() {
        console.log('Marlin: onSerialConnected');
        if(this.marlinDivStatus) {
            this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">👍</span>';
        }
    }
    protected onSerialDisconnected() {
        console.log('Marlin: onSerialDisconnected');
        if(this.marlinDivStatus) {
            this.marlinDivStatus.innerHTML = 'Status: <span class="w3-badge w3-grey">👎</span>';
        }
    }

    onBtnHome() {
        console.log('click home');
        this.serialWrite('G28'); // all relative
    };
    onBtnPos() {
        console.log('click pos');
        this.serialWrite('M114');
    };
    onBtnRel() {
        this.serialWrite('G91');
    };
    onBtnCold() {
        this.serialWrite('M302 S0');
    };


    onBtnXP() {
        this.serialWrite('G0 X10');
    };
    onBtnXM() {
        this.serialWrite('G0 X-10');
    };
    onBtnYP() {
        this.serialWrite('G0 Y10');
    };
    onBtnYM() {
        this.serialWrite('G0 Y-10');
    };
    onBtnZP() {
        this.serialWrite('G0 Z10');
    };
    onBtnZM() {
        this.serialWrite('G0 Z-10');
    };
    onBtnEP() {
        this.serialWrite('G0 E10');
    };
    onBtnEM() {
        this.serialWrite('G0 E-10');
    };
}
