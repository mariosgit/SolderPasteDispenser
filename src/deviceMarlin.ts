import { Device } from "./device";

export class Marlin extends Device {
    marlinDiv: HTMLElement | null;
    constructor() {
        super();
        this.marlinDiv = document.getElementById("Marlin");
        if(this.marlinDiv) {
            this.marlinDiv.innerHTML = 'Status: <span class="w3-badge w3-grey">💭</span>';
        }
    }
    protected onSerialConnected() {
        console.log('Marlin: onSerialConnected');
        if(this.marlinDiv) {
            this.marlinDiv.innerHTML = 'Status: <span class="w3-badge w3-grey">👍</span>';
        }
    }
    protected onSerialDisconnected() {
        console.log('Marlin: onSerialDisconnected');
        if(this.marlinDiv) {
            this.marlinDiv.innerHTML = 'Status: <span class="w3-badge w3-grey">👎</span>';
        }
    }
}
