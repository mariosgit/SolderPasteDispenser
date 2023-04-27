import { Parser } from "./parser";
import { PCB } from "./pcb";

export class ParserGerber extends Parser {
    reNumFormat = /^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/;
    reMatchPad = /^(%AD)(D[0-9]+)([A-Za-z]+)[,]([-0-9.]+)[X]?([-0-9.]+)?[X]?([-0-9.]+)?/;
    reMatchPadCoordInit = /^([DG][0-9]+)[*]/;
    reMatchPadCoord = /^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/;
    _cancel = false;
    floatFracts = 1;
    floatDezis = 1;
    lastPad = "";

    constructor(pcb: PCB) {
        super(pcb);
    }

    public parseFile(file: File):Promise<void> {
        return new Promise<void>((resolve) => {
            file.arrayBuffer().then((buf) => {
                arrayBufferToString(buf, 'UTF-8', (text: string) => {
                    this.processGerberText(text).finally(() => {
                        resolve();
                    });
                });
            });
        });
    }

    public cancel(): void {
        this._cancel = true;
    }

    async processGerberText(text: string) {
        // console.log(text);
        // translate line ends...
        text = text.replace(/\r/g, ''); // remove windows trash
        const lines = text.split('\n');

        let lineNr = 1;
        for (let line of lines) {
            lineNr++;

            if (this._cancel) {
                this._cancel = false;
                break;
            }
            // console.log(`gerber(${lineNr}/${lines.length}): `);

            await this.processGerberLine(line);

            if (this.processCB) {
                this.processCB(lineNr * 100 / lines.length);
            }

        } // for

        this.pcb.retree();
        this.pcb.store();
    }


    async processGerberLine(line: string) {
        return new Promise<void>((resolve) => {
                // line = line.replace(/\n/g,'<br>');

                // Zahlenformat info line "%FSLAX34Y34*%"
                //   %FSLAX25Y25*% Coordinate format specification:
                //   Coordinates format is 2.5:
                //   2 digits in the integer part
                //   5 digits in the fractional part
                const matchNumFormat = this.reNumFormat.exec(line); //line.match();
                if (matchNumFormat) {
                    // console.log(matchNumFormat);
                    this.floatDezis = parseInt(matchNumFormat[1]);
                    this.floatFracts = parseInt(matchNumFormat[2]);
                    console.log(`gerber: float digits = ${this.floatDezis} ${this.floatFracts}`);
                }

                // check for pad definitions
                // %ADD21R,0.600000X1.050000*%
                // %ADD10RoundRect,0.120000 X -0.180000
                //               X 0.680000 X -0.180000
                //              X -0.680000 X 0.180000
                //              X -0.680000 X 0.180000
                //               X 0.680000 X 0*%
                const matchPad = this.reMatchPad.exec(line); // line.match();///);
                // Wenn "C" dann gibts nur eine coord
                if (matchPad) {
                    // console.log(matchPad);
                    if (this.padsField) {
                        this.padsField.innerHTML += `${matchPad[2]} ${matchPad[3]} ${matchPad[4]} ${matchPad[5]}<br>`;
                    }
                    if (matchPad[3] == 'RoundRect') {
                        // kicad macro schnulli
                        this.pcb.addPadStyle(matchPad[2], matchPad[3], Math.abs(parseFloat(matchPad[5])), Math.abs(parseFloat(matchPad[6])));
                        // console.log(`gerber: style ${matchPad[2]},${matchPad[3]}, ${Math.abs(parseFloat(matchPad[5]))}, ${Math.abs(parseFloat(matchPad[6]))}`);
                    } else {
                        this.pcb.addPadStyle(matchPad[2], matchPad[3], parseFloat(matchPad[4]), parseFloat(matchPad[5]));
                        // console.log(`gerber: style ${matchPad[2]},${matchPad[3]}, ${parseFloat(matchPad[4])}, ${parseFloat(matchPad[5])}`);
                    }
                }

                // Dxx* command - should be pad draw
                const matchPadCoordInit = this.reMatchPadCoordInit.exec(line); //line.match();///);
                if (matchPadCoordInit) {
                    // console.log(matchPadCoordInit);
                    this.lastPad = matchPadCoordInit[1];
                }
                // a pad line: "X379984Y963930D03*"
                const matchPadCoord = this.reMatchPadCoord.exec(line); // line.match();///);
                if (matchPadCoord) {
                    if (this.lastPad.startsWith('D')) { // ignore G36 or so commands
                        // if (1) {
                        // ignore and return ...
                        // resolve();
                        // console.log(matchPadCoord);
                        let sx = matchPadCoord[2];
                        let sy = matchPadCoord[4];
                        const len = this.floatDezis + this.floatFracts;
                        // fill freak's leading zeros
                        while (sx.length < len) {
                            sx = `0${sx}`;
                        }
                        while (sy.length < len) {
                            sy = `0${sy}`;
                        }
                        // make a freak'n float
                        let fx = 0.0;
                        let fy = 0.0;
                        sx = `${sx.substring(0, this.floatDezis)}.${sx.substring(this.floatDezis)}`;
                        sy = `${sy.substring(0, this.floatDezis)}.${sy.substring(this.floatDezis)}`;
                        fx = parseFloat(sx);
                        fy = parseFloat(sy);
                        if (matchPadCoord[1] == '-') {
                            fx = fx * -1.0;
                        }
                        if (matchPadCoord[3] == '-') {
                            fy = fy * -1.0;
                        }

                        fy = fy;
                        if (this.coordsField) {
                            this.coordsField.innerHTML += `${this.lastPad}:  x:${fx} y:${fy} <br>`;
                        }
                        this.pcb.addPad(this.lastPad, fx, fy);
                        // console.log(`gerber: pad ${lastPad}, ${fx}, ${fy}`);
                    } else {
                        console.log(`ignoring ${this.lastPad}`);
                    }

                    // if(lineNr > 1500) {
                    //     break; // for testing !!!
                    // }
                }
            this.pcb.center();
            setTimeout(resolve, 0); // this enables the progressbar / UI updates !
        });
    }
}

// found on se web...

function arrayBufferToString(buffer, encoding, callback) {
    var blob = new Blob([buffer], { type: 'text/plain' });
    var reader = new FileReader();
    reader.onload = (evt) => { if(evt.target) callback(evt.target.result); };
    reader.readAsText(blob, encoding);
}

function stringToArrayBuffer(string, encoding, callback) {
    var blob = new Blob([string], { type: 'text/plain;charset=' + encoding });
    var reader = new FileReader();
    reader.onload = (evt) => { if(evt.target) callback(evt.target.result); };
    reader.readAsArrayBuffer(blob);
}
