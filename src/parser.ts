import { PCB } from './pcb';

export class Parser {
    public processCB: Function;

    public padsField: HTMLElement|null;
    public coordsField: HTMLElement|null;

    public pcb: PCB;
    constructor(pcb: PCB) {
        this.pcb = pcb;
    }

    public parseFile?(file: File):Promise<void>; // virtual !
    public cancel?(): void;
}
