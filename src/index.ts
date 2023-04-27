import { Grid, Mouse } from 'canvas-coords' // https://github.com/CodeDraken/canvas-coords
import { Device, MovementSettings } from './device';
import { Marlin } from './deviceMarlin';
import { PCB, Pad, PadStyle } from './pcb';
import { ParserGerber } from './parserGerber';

// simpler !!! const infoDropDown = document.querySelector<HTMLDivElement>('#infoDropDown');

const body: HTMLBodyElement | null = <HTMLBodyElement | null>document.getElementsByTagName('body')[0];
const messageElem: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("messageElem");
const uploadButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("uploadButton");
const testFileButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("testFileButton");
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
const menuMoveAll: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("menuMoveAll");
const menuBlob: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("menuBlob");


const main: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("main");
const openSidebarButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("openSidebar");

const header = document.getElementsByTagName('header')[0];
const footer = document.getElementById('footer');

let messageClearTimeout: number | undefined = undefined;
let ctx: CanvasRenderingContext2D | null = null;
let mouse: Mouse, grid: Grid;
let pcb: PCB;

let device = new Marlin();

let movementSettings = new MovementSettings();

function init() {
    if (testFileButton && uploadButton && menuSetZero && menuMoveTo && menuMoveAll && menuBlob && progressCancel && padsField && coordsField && body && canvas && footer) {
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

        testFileButton.onclick = () => {
            fetch('https://raw.githubusercontent.com/mariosgit/SolderPasteDispenser/main/tests/blades_v40-PasteTop.gbr')
                .then(res => res.blob())
                .then(blob => {
                    var file = new File([blob], "blades_v40-PasteTop.gbr");
                    processGerberFile(file);
                }).catch((reason) => {console.warn(reason)});
        }

        menuSetZero.onclick = (event: MouseEvent) => {
            if (contextMenu) {
                contextMenu.className = contextMenu.className.replace('w3-show', 'w3-hide');
            }
            pcb.setZero();
            device.setZero(pcb.getZero()); // device must substract "zero" from all coords
        }

        menuMoveTo.onclick = (event: MouseEvent) => {
            if (contextMenu) {
                contextMenu.className = contextMenu.className.replace('w3-show', 'w3-hide');
            }
            // console.log(event);
            // find the coords !!!
            // !!! need to be relative to zero !!! uuuhhh

            // let pads = pcb.getSelected();
            // if (pads.length > 0) {
            //     let pad: Pad = pads[0];
            //     console.log(pad);
            //     device.moveTo(pad.posX, pad.posY, undefined, undefined);
            // }

            let pos = pcb.getSelectedZero(); // lower left of selection
            device.moveTo(pos[0], pos[1], undefined, undefined);
        }
        menuMoveAll.onclick = (event: MouseEvent) => {
            if (contextMenu) {
                contextMenu.className = contextMenu.className.replace('w3-show', 'w3-hide');
            }
            let plist = pcb.getSelected();
            let pzero = pcb.getSelectedZero();
            device.moveToAll(plist, pzero);
        }
        menuBlob.onclick = () => {
            if (contextMenu) {
                contextMenu.className = contextMenu.className.replace('w3-show', 'w3-hide');
            }
            device.blob();
        }

        body.ondrop = (ev) => {
            ev.preventDefault();
            console.log(ev);
            if (ev.dataTransfer && ev.dataTransfer.items) {
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
            } else if (ev.dataTransfer) {
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
            // console.log('File(s) in drop zone');

            // Prevent default behavior (Prevent file from being opened)
            ev.preventDefault();
        }

        canvas.oncontextmenu = (ev) => {
            // console.log('oncontextmenu',ev);
            ev.preventDefault();
            if (contextMenu) {
                contextMenu.style.left = `${ev.pageX}px`;
                contextMenu.style.top = `${ev.pageY}px`;
                contextMenu.className = contextMenu.className.replace('w3-hide', 'w3-show');
            }
        }
        canvas.onmouseup = (ev) => {
            if (contextMenu) {
                contextMenu.className = contextMenu.className.replace('w3-show', 'w3-hide');
            }
        }

        if (ctx) {
            pcb = new PCB();
            pcb.setCanvas(ctx, canvas);

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

function message(text: string) {
    if (messageClearTimeout) {
        window.clearTimeout(messageClearTimeout);
    }
    if (messageElem) {
        messageElem.innerHTML = `${text}`;
        messageClearTimeout = window.setTimeout(messageClear, 10000);
    }
}
function messageClear() {
    messageClearTimeout = undefined;
    if (messageElem) {
        messageElem.innerHTML = '';
    }
}
globalThis.message = message;

function update() {
    if (canvas && ctx) {
        window.requestAnimationFrame(update);

        ctx.setTransform(
            pcb ? pcb.zoom : 1, 0,
            0, pcb ? pcb.zoom : 1,
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

        pcb = new PCB();
        pcb.setCanvas(ctx, canvas);
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
        parser.processCB = (value: number) => {
            if (progressbar) {
                progressbar.style.width = `${value}%`;
                // console.log('progress:', value);
            }
        }
        await parser.parseFile(file);

        pcb.zoomToFit([canvas.width, canvas.height]);

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

globalThis.zoomToFit = () => {
    if (pcb && canvas) {
        pcb.zoomToFit([canvas.width, canvas.height]);
    }
}

globalThis.rotateRight = () => {
    if (pcb && canvas) {
        // pcb.zoomToFit([canvas.width, canvas.height]);
    }
    globalThis.message('müsste ma einer implementieren, ne');
}

globalThis.moveSettings = () => {
    // set values !!!
    const erate = document.getElementById("moveSetERate") as HTMLInputElement;
    const inite = document.getElementById("moveSetInitE") as HTMLInputElement;
    const pade  = document.getElementById("moveSetPadE") as HTMLInputElement;
    const retracte = document.getElementById("moveSetRetractE") as HTMLInputElement;
    const zhop = document.getElementById("moveSetZHop") as HTMLInputElement;

    erate.value = `${movementSettings.erate}`;
    inite.value = `${movementSettings.inite}`;
    pade.value = `${movementSettings.pade}`;
    retracte.value = `${movementSettings.retracte}`;
    zhop.value = `${movementSettings.zhop}`;
    
    globalThis.accordionToggler('moveSettingsPanel');
}

globalThis.defaultMoveSettings = () => {
    movementSettings = new MovementSettings();

    if(device.applyMoveSettings) {
        device.applyMoveSettings(movementSettings);
    }

    globalThis.accordionToggler('moveSettingsPanel');

    console.log('applyMoveSettings', movementSettings);
}

globalThis.applyMoveSettings = () => {
    // get values !!!
    const erate = document.getElementById("moveSetERate") as HTMLInputElement;
    const inite = document.getElementById("moveSetInitE") as HTMLInputElement;
    const pade  = document.getElementById("moveSetPadE") as HTMLInputElement;
    const retracte = document.getElementById("moveSetRetractE") as HTMLInputElement;
    const zhop = document.getElementById("moveSetZHop") as HTMLInputElement;
    
    movementSettings.erate    = parseFloat(erate.value);
    movementSettings.inite    = parseFloat(inite.value);
    movementSettings.pade     = parseFloat(pade.value);
    movementSettings.retracte = parseFloat(retracte.value);
    movementSettings.zhop     = parseFloat(zhop.value);

    if(device.applyMoveSettings) {
        device.applyMoveSettings(movementSettings);
    }

    globalThis.accordionToggler('moveSettingsPanel');

    console.log('applyMoveSettings', movementSettings);
}

globalThis.resize = () => {
    if (canvas && header && footer && debug && coords) {
        canvas.width = innerWidth;
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height;
        mouse.draw();
        grid.draw(ctx, canvas);

        // height of debug is innerHeight - margin top/bottom more or less - footer.height
        // console.log('resize: margin', debug.getBoundingClientRect().top);
        let dmaxheight = innerHeight - footer.getBoundingClientRect().height; // canvas.height + header.getBoundingClientRect().height - 16;
        // debug.style.height = `${dheight}px`; // 16 is marginTop
        // console.log('resize: inner height', innerHeight);
        // console.log('resize: debug height', dheight);

        // height of all other elements in debug
        let height = 0;
        for (let child of debug.children) {
            let elem: HTMLElement = <HTMLElement>child;
            // console.log(`resize:   ${child.id} ${elem.clientHeight} ${elem.className}`);
            if (elem.className.indexOf('w3-hide') != -1)
                continue;
            height += elem.clientHeight;
        }

        // console.log('resize: debug content height', height);

        // so far so good

        // if coords is shown, set debug size to max
        // if coords is shown, give it all the rest of the space
        // console.log('resize coords ', coords.className.indexOf('w3-hide'));
        if (coords.className.indexOf('w3-hide') != -1) {
            // console.log('resize coords is NOT visible');
            debug.style.height = `${height + 16}px`;
            coords.style.height = `${16}px`; // egal ?
        } else {
            // console.log('resize coords is visible');
            height -= coords.getBoundingClientRect().height; // do not count coords to hight
            debug.style.height = `${dmaxheight}px`;
            coords.style.height = `${dmaxheight - height - 16}px`;
        }
    }
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('resize', (val) => {
    // console.log(`resize: ${val}`);
    globalThis.resize();
})
