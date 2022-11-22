import { Grid, Mouse } from 'canvas-coords' // https://github.com/CodeDraken/canvas-coords
import { Device } from './device';
import { PCB } from './pcb';

const body: HTMLBodyElement | null = <HTMLBodyElement | null>document.getElementsByTagName('body')[0];
const uploadButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("uploadButton");
const padsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("padsField");
const coordsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("coordsField");
const dropZone: HTMLElement | null = document.getElementById("dropZone");
const canvas: HTMLCanvasElement | null = <HTMLCanvasElement | null>document.getElementById("canvas");
const progress: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("progress");
const progressbar: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById('progressbar');
const progressCancel: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById('progressCancel');

const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];

let ctx: CanvasRenderingContext2D | null = null;
let mouse: Mouse, grid: Grid;
let pcb: PCB;
let floatFracts = 1;
let floatDezis = 1;
let lastPad = "";

let cancel = false;

const reNumFormat = /^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/;
const reMatchPad = /^(%AD)(D[0-9]+)([A-Za-z]+)[,]([-0-9.]+)[X]?([-0-9.]+)?[X]?([-0-9.]+)?/;
const reMatchPadCoordInit = /^([DG][0-9]+)[*]/;
const reMatchPadCoord = /^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/;

let device = new Device();

function init() {
    console.log('moinsen');

    if (uploadButton && progressCancel && padsField && coordsField && body && canvas) {
        ctx = canvas.getContext("2d");

        canvas.addEventListener("mousemove", (event) => {
            if (pcb) pcb.mouseMove(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("mousedown", (event) => {
            if (pcb) pcb.mouseDown(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("mouseup", (event) => {
            if (pcb) pcb.mouseUp(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("mouseout", (event) => {
            if (pcb) pcb.mouseUp(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("wheel", (event) => {
            if (pcb) pcb.mouseWheel(event);
            event.preventDefault();
        }, false);

        uploadButton.onclick = () => {
            var uploadFileEle = document.createElement('input');
            uploadFileEle.type = "file";
            uploadFileEle.click();
            uploadFileEle.addEventListener("change", (ev: Event) => {
                console.log(ev);
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
            })
            return false;
        }
        progressCancel.onclick = () => {
            cancel = true;
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
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height - 7;

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

        ctx.setTransform(
            1, 0,
            0, -1,
            0, canvas.height);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        grid.draw(ctx, canvas);
        mouse.draw();

        // ctx.scale(1,-1); // flip display y

        if (pcb) {
            pcb.draw();
        }
    }
}

function processGerberFile(file: File) {
    if (uploadButton && padsField && coordsField && body && ctx && progress) { // makes typescript happy...
        file.arrayBuffer().then((buf) => {
            arrayBufferToString(buf, 'UTF-8', (text: string) => {

                padsField.innerHTML = '';
                coordsField.innerHTML = '';

                if (dropZone)
                    dropZone.innerText = file.name;

                processGerberText(text);
            });
        });
    }
}

async function processGerberText(text: string) {
    if (uploadButton && padsField && coordsField && body && canvas && ctx && progress) { // makes typescript happy...

        progress.style.display = 'block';

        pcb = new PCB(ctx, canvas);

        // console.log(text);
        // translate line ends...
        text = text.replace(/\r/g, ''); // remove windows trash
        const lines = text.split('\n');

        let lineNr = 1;
        for (let line of lines) {
            lineNr++;

            if(cancel) {
                cancel = false;
                break;
            }
            // console.log(`gerber(${lineNr}/${lines.length}): `);

            await processGerberLine(line);

            if (progressbar) {
                progressbar.style.width = `${lineNr * 100 / lines.length}%`;
            }

        } // for

        pcb.retree();

        progress.style.display = 'none';
    }
}


async function processGerberLine(line: string) {
    return new Promise<void>((resolve) => {
        if (uploadButton && padsField && coordsField && body && ctx && progress) { // makes typescript happy...

            // line = line.replace(/\n/g,'<br>');

            // Zahlenformat info line "%FSLAX34Y34*%"
            //   %FSLAX25Y25*% Coordinate format specification:
            //   Coordinates format is 2.5:
            //   2 digits in the integer part
            //   5 digits in the fractional part
            const matchNumFormat = reNumFormat.exec(line); //line.match();
            if (matchNumFormat) {
                // console.log(matchNumFormat);
                floatDezis = parseInt(matchNumFormat[1]);
                floatFracts = parseInt(matchNumFormat[2]);
                console.log(`gerber: float digits = ${floatDezis} ${floatFracts}`);
            }

            // check for pad definitions
            // %ADD21R,0.600000X1.050000*%
            // %ADD10RoundRect,0.120000 X -0.180000
            //               X 0.680000 X -0.180000
            //              X -0.680000 X 0.180000
            //              X -0.680000 X 0.180000
            //               X 0.680000 X 0*%
            const matchPad = reMatchPad.exec(line); // line.match();///);
            // Wenn "C" dann gibts nur eine coord
            if (matchPad) {
                // console.log(matchPad);
                padsField.innerHTML += `${matchPad[2]} ${matchPad[3]} ${matchPad[4]} ${matchPad[5]}<br>`;
                if(matchPad[3] == 'RoundRect') {
                    // kicad macro schnulli
                    pcb.addPadStyle(matchPad[2], matchPad[3], Math.abs(parseFloat(matchPad[5])), Math.abs(parseFloat(matchPad[6])));
                    // console.log(`gerber: style ${matchPad[2]},${matchPad[3]}, ${Math.abs(parseFloat(matchPad[5]))}, ${Math.abs(parseFloat(matchPad[6]))}`);
                } else {
                    pcb.addPadStyle(matchPad[2], matchPad[3], parseFloat(matchPad[4]), parseFloat(matchPad[5]));
                    // console.log(`gerber: style ${matchPad[2]},${matchPad[3]}, ${parseFloat(matchPad[4])}, ${parseFloat(matchPad[5])}`);
                }
            }

            // Dxx* command - should be pad draw
            const matchPadCoordInit = reMatchPadCoordInit.exec(line); //line.match();///);
            if (matchPadCoordInit) {
                // console.log(matchPadCoordInit);
                lastPad = matchPadCoordInit[1];
            }
            // a pad line: "X379984Y963930D03*"
            const matchPadCoord = reMatchPadCoord.exec(line); // line.match();///);
            if (matchPadCoord) {
                if (lastPad.startsWith('D')) { // ignore G36 or so commands
                // if (1) {
                    // ignore and return ...
                    // resolve();
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
                    if (matchPadCoord[1] == '-') {
                        fx = fx * -1.0;
                    }
                    if (matchPadCoord[3] == '-') {
                        fy = fy * -1.0;
                    }

                    fy = fy;
                    coordsField.innerHTML += `${lastPad}:  x:${fx} y:${fy} <br>`;

                    pcb.addPad(lastPad, fx, fy);
                    // console.log(`gerber: pad ${lastPad}, ${fx}, ${fy}`);
                } else {
                    console.log(`ignoring ${lastPad}`);
                }

                // if(lineNr > 1500) {
                //     break; // for testing !!!
                // }
            }
        } // if
        pcb.center();
        setTimeout(resolve, 0); // this enables the progressbar / UI updates !
    });
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

globalThis.accordionToggler = (id) => {
    var elem = document.getElementById(id);
    if (elem) {
        if (elem.className.indexOf("w3-show") == -1) {
            elem.className += " w3-show";
        } else {
            elem.className = elem.className.replace(" w3-show", "");
        }
    }
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('resize', (val) => {
    console.log(`resize: ${val}`);
    if (canvas && header && footer) {
        canvas.width = innerWidth;
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height - 7;
        mouse.draw();
        grid.draw(ctx, canvas);
    }
})
