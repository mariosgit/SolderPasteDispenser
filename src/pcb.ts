import {kdTree} from 'kd-tree-javascript';

class BoundingBox {
    minx: number = 99999;
    miny: number = 99999;
    maxx: number = -99999;
    maxy: number = -99999;
    constructor() { }
    update(x: number, y: number) {
        if (x < this.minx) this.minx = x;
        if (y < this.miny) this.miny = y;
        if (x > this.maxx) this.maxx = x;
        if (y > this.maxy) this.maxy = y;
        // console.log(`bb: ${this.miny} ${this.maxy} ${this.center()[1]}`);
    }
    center(zoom: number = 1.0): [x: number, y: number] {
        return [(this.minx + (this.maxx - this.minx) / 2) * zoom, (this.miny + (this.maxy - this.miny) / 2) * zoom];
    }
    zero(zoom: number = 1.0): [x: number, y: number] {
        return [this.minx * zoom, this.miny * zoom];
    }
    size(zoom: number = 1.0): [x: number, y: number] {
        return [(this.maxx - this.minx) * zoom, (this.maxy - this.miny) * zoom];
    }
}
class PadStyle {
    public form: string;
    public width: number;
    public height: number;
    constructor(form: string, w: number, h: number) {
        this.form = form;
        this.width = w;
        this.height = h;
    }
}
class Pad {
    posX: number;
    posY: number;
    style: string;
    constructor(style: string, x: number, y: number) {
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
    fileName: string = "";

    mouseFlag: boolean = false;
    mouseStartX: number = 0;
    mouseStartY: number = 0;
    mouseOffX: number = 0;
    mouseOffY: number = 0;

    zoom: number = 6.0;
    bb: BoundingBox;

    tree: any;
    nearest: any = [];

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.mapStyles = new Map<string, PadStyle>();
        this.mapPads = new Map<string, Set<Pad>>();
        this.bb = new BoundingBox();
    }

    draw() {
        // theoretisch so...
        // this.ctx.fillStyle = 'orangered';
        this.ctx.fillStyle = 'antiquewhite';

        // draw zero
        this.ctx.strokeStyle = 'black';
        this.ctx.beginPath();
        this.ctx.moveTo(-10 + this.mouseOffX, 0 + this.mouseOffY);
        this.ctx.lineTo(10 + this.mouseOffX, 0 + this.mouseOffY);
        this.ctx.moveTo(0 + this.mouseOffX, -10 + this.mouseOffY);
        this.ctx.lineTo(0 + this.mouseOffX, 10 + this.mouseOffY);
        this.ctx.stroke();

        // draw bb center
        this.ctx.strokeStyle = 'red';
        let center = this.bb.center(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(center[0] - 10 + this.mouseOffX, center[1] + this.mouseOffY);
        this.ctx.lineTo(center[0] + 10 + this.mouseOffX, center[1] + this.mouseOffY);
        this.ctx.moveTo(center[0] + this.mouseOffX, center[1] - 10 + this.mouseOffY);
        this.ctx.lineTo(center[0] + this.mouseOffX, center[1] + 10 + this.mouseOffY);
        this.ctx.stroke();
        // draw bb
        this.ctx.beginPath();
        this.ctx.rect(this.bb.zero(this.zoom)[0] + this.mouseOffX, this.bb.zero(this.zoom)[1] + this.mouseOffY, this.bb.size(this.zoom)[0], this.bb.size(this.zoom)[1]);
        this.ctx.stroke();

        for (let padstyle of this.mapPads.keys()) {

            const sty = this.mapStyles.get(padstyle);
            const padset = this.mapPads.get(padstyle);
            if (sty && padset) {
                const sw = sty.width * this.zoom;
                const sh = sty.height * this.zoom;
                for (let pad of padset.values()) {
                    if (sty.form == 'R' || sty.form == 'O' || sty.form == 'RoundRect') {
                        this.ctx.beginPath();

                        this.ctx.fillRect(
                            pad.posX * this.zoom - sw / 2.0 + this.mouseOffX,
                            pad.posY * this.zoom - sh / 2.0 + this.mouseOffY,
                            sw, sh);
                        this.ctx.fill();

                    } else if (sty.form == 'C') {
                        this.ctx.beginPath();
                        this.ctx.ellipse(
                            pad.posX * this.zoom + this.mouseOffX,
                            pad.posY * this.zoom + this.mouseOffY,
                            sw / 2,
                            sw / 2,
                            0, 0, 2 * Math.PI);
                        // this.ctx.arc(
                        //     pad.posX * this.zoom - sw / 2.0 + this.mouseOffX,
                        //     pad.posY * this.zoom - sh / 2.0 + this.mouseOffY,
                        //     sty.width * this.zoom,
                        //     0, 2 * Math.PI);
                        this.ctx.fill();
                    } else {
                        console.log(`draw quatsch ${sty.form}`);
                        break;
                    }
                }
            }
        } // for padstyle
        this.ctx.strokeStyle = 'purple';
        this.ctx.beginPath();
        const csize = 5;
        for(const near of this.nearest) {
            this.ctx.moveTo((near[0].posX-csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.lineTo((near[0].posX+csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.moveTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY+csize) * this.zoom + this.mouseOffY);
            this.ctx.lineTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY-csize) * this.zoom + this.mouseOffY);

            // console.log(`nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
        }
        this.ctx.stroke();

    }

    addPadStyle(name: string, form: string, w: number, h: number) {
        this.mapStyles.set(name, new PadStyle(form, w, h));
    }

    addPad(style: string, x: number, y: number) {
        if (!this.mapPads.has(style)) {
            this.mapPads.set(style, new Set<Pad>());
        }
        let padset = this.mapPads.get(style);
        if (padset) {
            const newpad = new Pad(style, x, y);
            padset.add(newpad);
            this.bb.update(x, y);
        }
    }

    center() {
        if (this.canvas) {
            this.mouseOffX = -(this.bb.center()[0] * this.zoom) + this.canvas.width / 2;
            this.mouseOffY = -(this.bb.center()[1] * this.zoom) + this.canvas.height / 2;
        }
    }

    retree() {
        try {
            let pads : Pad[] = [];
            for (let padsets of this.mapPads.values()) {
                for (let pad of padsets) {
                    pads.push(pad);
                }
            }
            
            this.tree = new kdTree(pads, PCB.distance, ["posX", "posY"]);
            console.log('tree bf:', this.tree.balanceFactor());
    
        } catch(err) { console.error(err); }
    }

    mouseDown(event: MouseEvent) {
        const trans = this.ctx.getTransform();
        console.log(trans);
        this.mouseStartX = event.clientX * trans.a - this.mouseOffX;
        this.mouseStartY = event.clientY * trans.d - this.mouseOffY;
        this.mouseFlag = true;
    }
    mouseUp(event: MouseEvent) {
        this.mouseFlag = false;

        const trans = this.ctx.getTransform();
        console.log(trans, event);
        console.log('', this.canvas.height-(event.clientY-this.canvas.offsetTop), this.mouseOffY);
        const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
        const my = (this.canvas.height-(event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
        if(this.tree) {
            this.nearest = this.tree.nearest({ posX: mx, posY: my }, 1);
            for(const near of this.nearest) {
                console.log(`m:${mx},${my} nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
            }
        }
    }
    mouseMove(event: MouseEvent) {
        const trans = this.ctx.getTransform();
        if (this.mouseFlag) {
            this.mouseOffX = event.clientX * trans.a - this.mouseStartX;
            this.mouseOffY = event.clientY * trans.d - this.mouseStartY;
        }
    }
    mouseWheel(event: WheelEvent) {
        // console.log(event.deltaY);
        if (event.deltaY > 0) {
            this.zoom *= 1.1;
        } else {
            this.zoom *= 0.9;
        }
    }

    static distance(a:Pad, b:Pad) {
        return Math.pow(a.posX - b.posX, 2) +  Math.pow(a.posY - b.posY, 2);
    }
}
