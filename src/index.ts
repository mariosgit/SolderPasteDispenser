import { Grid, Mouse } from 'canvas-coords' // https://github.com/CodeDraken/canvas-coords
import { Device } from './device';
import { Marlin } from './deviceMarlin';
import { PCB, Pad, PadStyle } from './pcb';
import { ParserGerber } from './parserGerber';

const body: HTMLBodyElement | null = <HTMLBodyElement | null>document.getElementsByTagName('body')[0];
const uploadButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("uploadButton");
const padsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("padsField");
const coords: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("Coords");
const coordsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("coordsField");
const dropZone: HTMLElement | null = document.getElementById("dropZone");
const canvas: HTMLCanvasElement | null = <HTMLCanvasElement | null>document.getElementById("canvas");
const debug: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("debug");
const progress: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("progress");
const progressbar: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById('progressbar');
const contextMenu: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById('contextMenu');
const progressCancel: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById('progressCancel');

const menuSetZero: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("menuSetZero");
const menuMoveTo: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("menuMoveTo");

const main: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("main");
const openSidebarButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("openSidebar");

const header = document.getElementsByTagName('header')[0];
const footer = document.getElementById('footer');

let ctx: CanvasRenderingContext2D | null = null;
let mouse: Mouse, grid: Grid;
let pcb: PCB;

let device = new Marlin();

function init() {
    if (uploadButton && menuSetZero && menuMoveTo && progressCancel && padsField && coordsField && body && canvas && footer) {
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
            if (pcb) pcb.mouseOut(event);
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

        menuSetZero.onclick = () => {
            device.setZero();
        }

        menuMoveTo.onclick = (event) => {
            // console.log(event);
            // find the coords !!!
            // !!! need to be relative to zero !!! uuuhhh
            let sel = pcb.getSelected();
            if(sel.length > 0) {
                // console.log(sel[0]);
                if(sel[0].length > 0) {
                    let pad:Pad = sel[0][0];
                    console.log(pad);
                    device.moveTo(pad.posX, pad.posY, undefined,undefined);
                }
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
        body.oncontextmenu = (ev) => {
            // console.log('oncontextmenu',ev);
            ev.preventDefault();
            if( contextMenu) {
                contextMenu.style.left = `${ev.pageX}px`;
                contextMenu.style.top = `${ev.pageY}px`;
                contextMenu.className = contextMenu.className.replace('w3-hide', 'w3-show');
            }
        }
        body.onmouseup = (ev) => {
            if( contextMenu) {
                contextMenu.className = contextMenu.className.replace('w3-show', 'w3-hide');
            }
        }


        canvas.width = innerWidth;
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height - 7;

        if(ctx) {
            pcb = new PCB(ctx, canvas);

            mouse = new Mouse(ctx, canvas);
            mouse.track();
            grid = new Grid();
            grid.step = 2;
            grid.lineWidth = 0.03;
            grid.boldWidth = 0.05;
            grid.createLines(canvas);
        }

        globalThis.resize();

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
            pcb?pcb.zoom:1, 0,
            0, pcb?pcb.zoom:1,
            0, 0);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // grid.draw(ctx, canvas);
        // grid.step = pcb?10.0/pcb.zoom:10.0;
        // grid.createLines(canvas);
        grid.lines.forEach(line => line.draw(ctx))
        mouse.draw();


        ctx.setTransform(
            1, 0,
            0, -1,
            0, canvas.height);

        // ctx.scale(1,-1); // flip display y

        if (pcb) {
            pcb.draw();
        }
    }
}

async function processGerberFile(file: File) {
    if (padsField && coordsField && ctx && canvas && progress && progressbar && progressCancel && dropZone) { // makes typescript happy...

        pcb = new PCB(ctx, canvas);
        let parser = new ParserGerber(pcb);

        padsField.innerHTML = '';
        coordsField.innerHTML = '';
        dropZone.innerText = file.name;
        progress.style.display = 'block';

        parser.padsField = padsField;
        parser.coordsField = coordsField;
        progressCancel.onclick = () => {
            parser.cancel();
        }
        parser.processCB = (value) => {
            if (progressbar) {
                progressbar.style.width = `${value}%`;
                // console.log('progress:', value);
            }
        }
        await parser.parseFile(file);

        progress.style.display = 'none';
    }
}


globalThis.accordionToggler = (id: string) => {
    var elem = document.getElementById(id);
    if (elem) {
        if (elem.className.indexOf("w3-show") == -1 && elem.className.indexOf("w3-hide") == -1) {
            elem.className += " w3-show";
        } else if (elem.className.indexOf("w3-show") != -1) {
            elem.className = elem.className.replace("w3-show", "w3-hide");
        } else {
            elem.className = elem.className.replace("w3-hide", "w3-show");
        }
    } else {
        console.warn('accordionToggler no elem with id:', id);
    }
    globalThis.resize();
}

globalThis.openSidebar = () => {
    if (main && debug && openSidebarButton) {
        main.style.marginRight = "350px";
        debug.style.width = "350px";
        debug.style.display = "block";
        openSidebarButton.style.display = 'none';
    }
}

globalThis.closeSidebar = () => {
    if (main && debug && openSidebarButton) {
        main.style.marginRight = "0px";
        debug.style.display = "none";
        openSidebarButton.style.display = "inline-block";
    }
}

globalThis.resize = () => {
    if (canvas && header && footer && debug && coords) {
        canvas.width = innerWidth;
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height;
        mouse.draw();
        grid.draw(ctx, canvas);

        // height of debug is innerHeight - margin top/bottom more or less - footer.height
        // console.log('resize: margin', debug.getBoundingClientRect().top);
        let dheight = innerHeight - footer.getBoundingClientRect().height; // canvas.height + header.getBoundingClientRect().height - 16;
        debug.style.height = `${dheight}px`; // 16 is marginTop
        // console.log('resize: inner height', innerHeight);
        // console.log('resize: debug height', dheight);

        // height of all other elements in debug
        let height = 0;
        for (let child of debug.children) {
            let elem: HTMLElement = <HTMLElement>child;
            // console.log(`resize:   ${child.id} ${elem.clientHeight}`);
            height += elem.clientHeight;
        }
        height -= coords.getBoundingClientRect().height;
        // console.log('resize: debug content height', height);

        // coords can take the rest of the space
        coords.style.height = `${dheight - height - 16}px`;

    }
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('resize', (val) => {
    console.log(`resize: ${val}`);
    globalThis.resize();
})
