import { Grid, Mouse } from 'canvas-coords' // https://github.com/CodeDraken/canvas-coords

const body:HTMLBodyElement | null = <HTMLBodyElement | null>document.getElementsByTagName('body')[0];
const uploadFileEle: HTMLInputElement | null = <HTMLInputElement | null>document.getElementById("fileInput");
const uploadButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("uploadButton");
const padsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("padsField");
const coordsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("coordsField");
const dropZone: HTMLElement | null = document.getElementById("dropZone");
const canvas: HTMLCanvasElement | null = <HTMLCanvasElement | null>document.getElementById("canvas");
const progress: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("progress");

const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];

let ctx:CanvasRenderingContext2D | null = null;
let mouse: Mouse, grid: Grid;
let pcb: PCB;

export class PadStyle {
    public form:string;
    public width:number;
    public height:number;
    constructor(form:string, w:number, h:number) {
        this.form = form;
        this.width = w;
        this.height = h;
    }
}
export class Pad {
    posX: number;
    posY: number;
    style: string;
    constructor(style:string, x:number, y:number) {
        this.posX = x;
        this.posY = y;
        this.style = style;
    }
}
export class PCB {
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    mapStyles: Map<string, PadStyle>;
    mapPads: Map<string, Set<Pad>>;
    fileName:string = "";

    mouseFlag: boolean = false;
    mouseStartX: number = 0;
    mouseStartY: number = 0;
    mouseOffX: number = 0;
    mouseOffY: number = 0;

    zoom:number = 6.0;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.mapStyles = new Map<string, PadStyle>();
        this.mapPads = new Map<string, Set<Pad>>();
    }

    draw() {
        // theoretisch so...
        // this.ctx.fillStyle = 'orangered';
        this.ctx.fillStyle = 'antiquewhite';

        // draw zero
        this.ctx.beginPath();
        this.ctx.moveTo(-10 + this.mouseOffX,0 + this.mouseOffY);
        this.ctx.lineTo(10 + this.mouseOffX,0 + this.mouseOffY);
        this.ctx.moveTo(0 + this.mouseOffX,-10 + this.mouseOffY);
        this.ctx.lineTo(0 + this.mouseOffX,10 + this.mouseOffY);
        this.ctx.stroke();

        this.ctx.beginPath();
        for(let padstyle of this.mapPads.keys()) {

            const sty = this.mapStyles.get(padstyle);
            const padset = this.mapPads.get(padstyle);
            if(sty && padset) {
                const sw = sty.width * this.zoom;
                const sh = sty.height * this.zoom;
                for(let pad of padset.values()) {
                    if(sty.form == 'R' || sty.form == 'O') {
                        this.ctx.fillRect(
                            pad.posX * this.zoom - sw/2.0 + this.mouseOffX,
                            pad.posY * this.zoom -sh/2.0 + this.mouseOffY,
                            sw, sh);
                    } else if (sty.form == 'C') {
                        this.ctx.arc(
                            pad.posX * this.zoom - sw/2.0 + this.mouseOffX,
                            pad.posY * this.zoom -sh/2.0 + this.mouseOffY,
                            sty.width * this.zoom,
                            0,359);
                    } else {
                        console.log(`draw quatsch ${sty}`);
                        break;
                    }
                }
            }
        }
        this.ctx.fill();
    }

    addPadStyle(name:string, form:string, w:number, h:number) {
        this.mapStyles.set(name, new PadStyle(form,w,h));
    }

    addPad(style:string, x:number, y:number) {
        if(!this.mapPads.has(style)) {
            this.mapPads.set(style, new Set<Pad>());
        }
        let padset = this.mapPads.get(style);
        if(padset) {
            padset.add(new Pad(style,x,y));
        }
    }
    mouseDown(event:MouseEvent) {
        this.mouseStartX = event.clientX - this.mouseOffX;
        this.mouseStartY = event.clientY - this.mouseOffY;
        this.mouseFlag = true;
    }
    mouseUp(event:MouseEvent) {
        this.mouseFlag = false;
    }
    mouseMove(event:MouseEvent) {
        if(this.mouseFlag) {
            this.mouseOffX = event.clientX - this.mouseStartX;
            this.mouseOffY = event.clientY - this.mouseStartY;
        }
    }
    mouseWheel(event:WheelEvent) {
        console.log(event.deltaY);
        if(event.deltaY > 0) {
            this.zoom *= 1.1;
        } else {
            this.zoom *= 0.9;
        }
    }
}

function init() {
    console.log('moinsen');

    if (uploadFileEle && uploadButton && padsField && coordsField && body && canvas) {
        ctx = canvas.getContext("2d");

        canvas.addEventListener("mousemove", (event) => {
            if(pcb)
                pcb.mouseMove(event);
        }, false);
        canvas.addEventListener("mousedown", (event) => {
            if(pcb)
                pcb.mouseDown(event);
        }, false);
        canvas.addEventListener("mouseup", (event) => {
            if(pcb)
                pcb.mouseUp(event);
        }, false);
        canvas.addEventListener("mouseout", (event) => {
            if(pcb)
                pcb.mouseUp(event);
        }, false);
        canvas.addEventListener("wheel", (event) => {
            if(pcb)
                pcb.mouseWheel(event);
        }, false);

        uploadButton.onclick = () => {
            // check if user had selected a file
            if (uploadFileEle.files && uploadFileEle.files.length > 0) {
                let file = uploadFileEle.files[0]
                console.log(file);
                console.log(`file: ${file.name} size:${file.size}`);

                processGerberFile(file);

            } else {
                alert('please choose a file')
                return
            }
        }

        body.ondrop = (ev) => {
            ev.preventDefault();
            console.log(ev);
            if (ev.dataTransfer.items) {
                // Use DataTransferItemList interface to access the file(s)
                [...ev.dataTransfer.items].forEach((item, i) => {
                    // If dropped items aren't files, reject them
                    if (item.kind === 'file') {
                        const file = item.getAsFile();
                        if (file) {
                            console.log(`… item[${i}].name = ${file.name}`);
                            processGerberFile(file);
                        }
                    }
                });
            } else {
                // Use DataTransfer interface to access the file(s)
                [...ev.dataTransfer.files].forEach((file, i) => {
                    if (file) {
                        console.log(`… file[${i}].name = ${file.name}`);
                        processGerberFile(file);
                    }
                });
            }
        }
        body.ondragover = (ev) => {
            console.log('File(s) in drop zone');

            // Prevent default behavior (Prevent file from being opened)
            ev.preventDefault();
        }

        canvas.width = innerWidth;
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height -7;

        mouse = new Mouse(ctx, canvas);
        mouse.track();
        grid = new Grid();
        window.requestAnimationFrame(update);
    }
    else {
        console.error('missing html elements !');
    }
}

function update() {
    if (canvas && ctx) {
        window.requestAnimationFrame(update);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        grid.draw(ctx, canvas);
        mouse.draw();

        if(pcb) {
            pcb.draw();
        }
    }
}

function processGerberFile(file: File) {
    if (uploadFileEle && uploadButton && padsField && coordsField && body && ctx && progress) { // makes typescript happy...
        file.arrayBuffer().then((buf) => {
            arrayBufferToString(buf, 'UTF-8', (text: string) => {

                progress.style.display = 'block';
                const progressbar = document.getElementById('progressbar');

                pcb = new PCB(ctx, canvas);

                if(dropZone)
                    dropZone.innerText = file.name;

                // console.log(text);
                // translate line ends...
                text = text.replace(/\r/g, ''); // remove windows trash
                const lines = text.split('\n');
                let floatFracts = 1;
                let floatDezis = 1;
                let lastPad = "";

                let lineNr = 1;
                for (let line of lines) {
                    lineNr++;
                    // line = line.replace(/\n/g,'<br>');

                    // Zahlenformat info line "%FSLAX34Y34*%"
                    //   %FSLAX25Y25*% Coordinate format specification:
                    //   Coordinates format is 2.5:
                    //   2 digits in the integer part
                    //   5 digits in the fractional part
                    const matchNumFormat = line.match(/^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/);
                    if (matchNumFormat) {
                        // console.log(matchNumFormat);
                        floatDezis = parseInt(matchNumFormat[1]);
                        floatFracts = parseInt(matchNumFormat[2]);
                        console.log(`gerber: float digits = ${floatDezis} ${floatFracts}`);
                    }

                    // check for pad definitions
                    const matchPad = line.match(/^(%AD)(D[0-9]+)([A-Za-z])[,]([0-9.]+)[X]?([0-9.]+)?/);///);
                    // console.log(matchPad);
                    // Wenn "C" dann gibts nur eine coord
                    if (matchPad) {
                        padsField.innerHTML += `${matchPad[2]} ${matchPad[4]} ${matchPad[5]}<br>`;
                        pcb.addPadStyle(matchPad[2], matchPad[3], parseFloat(matchPad[4]), parseFloat(matchPad[5]));
                        console.log(`gerber: style ${matchPad[2]},${matchPad[3]}, ${parseFloat(matchPad[4])}, ${parseFloat(matchPad[5])}`);
                    }

                    // a pad line: "X379984Y963930D03*"
                    const matchPadCoord = line.match(/^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/);///);
                    const matchPadCoordInit = line.match(/^(D[0-9]+)[*]/);///);
                    if (matchPadCoordInit) {
                        // console.log(matchPadCoordInit);
                        lastPad = matchPadCoordInit[1];
                    }
                    if (matchPadCoord) {
                        // console.log(matchPadCoord);
                        let sx = matchPadCoord[2];
                        let sy = matchPadCoord[4];
                        const len = floatDezis + floatFracts;
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
                        sx = `${sx.substring(0, floatDezis)}.${sx.substring(floatDezis)}`;
                        sy = `${sy.substring(0, floatDezis)}.${sy.substring(floatDezis)}`;
                        fx = parseFloat(sx);
                        fy = parseFloat(sy);
                        if(matchPadCoord[1] == '-') {
                            fx = fx * -1.0;
                        }
                        if(matchPadCoord[3] == '-') {
                            fy = fy * -1.0;
                        }

                        coordsField.innerHTML += `${lastPad}:  x:${fx} y:${fy} <br>`;

                        pcb.addPad(lastPad, fx,fy);
                        console.log(`gerber(${lineNr}/${lines.length}): pad ${lastPad}, ${fx}, ${fy}`);
                        if(progressbar) {
                            progressbar.style.width = `${lineNr*100/lines.length}%`;
                        }

                        if(lineNr > 1500) {
                            break; // for testing !!!
                        }
                    }

                } // for
                progress.style.display = 'none';

            });
        })
    }
}

// found on se web...

function arrayBufferToString(buffer, encoding, callback) {
    var blob = new Blob([buffer], { type: 'text/plain' });
    var reader = new FileReader();
    reader.onload = (evt) => { callback(evt.target.result); };
    reader.readAsText(blob, encoding);
}

function stringToArrayBuffer(string, encoding, callback) {
    var blob = new Blob([string], { type: 'text/plain;charset=' + encoding });
    var reader = new FileReader();
    reader.onload = (evt) => { callback(evt.target.result); };
    reader.readAsArrayBuffer(blob);
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('resize', (val) => {
    console.log(`resize: ${val}`);
    if (canvas && header && footer) {
        canvas.width = innerWidth;
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height -7;
        mouse.draw();
        grid.draw(ctx, canvas);
    }
})
