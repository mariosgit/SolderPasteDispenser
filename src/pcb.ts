import {kdTree} from 'kd-tree-javascript';

class BoundingBox {
    minx: number = 99999;
    miny: number = 99999;
    maxx: number = -99999;
    maxy: number = -99999;
    constructor() { }
    updateFromPad(pad:Pad) {
        this.update(pad.posX, pad.posY);
    }
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
    diagonal(zoom: number = 1.0): number {
        const size = this.size(zoom);
        return Math.sqrt(size[0]*size[0] + size[1]*size[1]);
    }
    /** Check if pad is inside the boundingbox */
    inside(pad: Pad):boolean {
        return (pad.posX >= this.minx && pad.posX <= this.maxx) && (pad.posY >= this.miny && pad.posY <= this.maxy)
    }
}

export class PadStyle {
    public form: string;
    public width: number;
    public height: number;
    constructor(form: string, w: number, h: number) {
        this.form = form;
        this.width = w;
        this.height = h;
    }
}

export class Pad {
    posX: number;
    posY: number;
    style: string;
    constructor(style: string, x: number, y: number) {
        this.posX = x;
        this.posY = y;
        this.style = style;
    }
    asTuple():[number,number] {
        return [this.posX, this.posY];
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
    mouseSelect: boolean;
    mouseSelectX: number;
    mouseSelectY: number;

    posZero: number[];

    zoom: number = 5.0;
    bbPcb: BoundingBox;
    bbSelection: BoundingBox;
    bbZero: BoundingBox; // use center as zero

    tree: kdTree<Pad>;
    nearest:[Pad, number][] = [];

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.mapStyles = new Map<string, PadStyle>();
        this.mapPads = new Map<string, Set<Pad>>();
        this.bbPcb = new BoundingBox();
        this.bbZero = new BoundingBox();
        this.bbSelection = new BoundingBox();
    }

    /**
     * Sets the Zero position to the lower left of selection rectangle.
     */
    public setZero():void {
        let result = false;
        // use last selection ???
        this.bbZero = this.bbSelection;
        result = true;
        console.log(`Pcb:setZero: ${this.bbZero.zero()}`);
    }

    /**
     * @returns Zero position relative to Origin(0,0).
     */
    public getZero():[number,number] {
        return this.bbZero.zero(); // lower left ?? better when .center() ??
    }

    /**
     * @returns All Pads in selection.
     */
    public getSelected():Pad[] {
        let result:Pad[] = [];
        for(let near of this.nearest) {
            // console.log(near);
            if(near.length > 0) {
                result.push(near[0]);
            }
        }
        return result;
    }

    /**
     * @returns Lower left of selection as tuple
     */
    public getSelectedZero():[number,number] {
        return this.bbSelection.zero();
    }

    public zoomToFit(size:[number,number]) {
        let psize = this.bbPcb.size();
        let zw = size[0] / psize[0];
        let zh = size[1] / psize[1];
        this.zoom = ((zw > zh)? zh : zw) * .9;
        console.log(`Pcb:zoomToFit zoom ${this.zoom}`, psize);
        this.center();
    }

    public center() {
        if (this.canvas) {
            this.mouseOffX = -(this.bbPcb.center()[0] * this.zoom) + this.canvas.width / 2;
            this.mouseOffY = -(this.bbPcb.center()[1] * this.zoom) + this.canvas.height / 2;
        }
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
            this.bbPcb.update(x, y);
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
        // console.event.buttons
        const trans = this.ctx.getTransform();
        if(event.button == 0) { // start select
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height-(event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseStartX = mx;
            this.mouseStartY = my;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
            this.mouseSelect = true;
            console.log(`Pcb:mouseDown: x:${this.mouseStartX} y:${this.mouseStartY}`);
        }
        if(event.button != 0) { // pan around
            this.mouseStartX = event.clientX * trans.a - this.mouseOffX;
            this.mouseStartY = event.clientY * trans.d - this.mouseOffY;
            this.mouseFlag = true;
        }
    }
    mouseUp(event: MouseEvent) {
        const trans = this.ctx.getTransform();
        console.log('pcb:mouseUp event:', event);
        if(event.button != 0) {
            this.mouseFlag = false;
        }
        if(event.button == 0) { // select
            this.mouseSelect = false;
            // console.log(trans, event);
            // console.log('', this.canvas.height-(event.clientY-this.canvas.offsetTop), this.mouseOffY);
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height-(event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;

            // bb = selected rectangle
            this.bbSelection = new BoundingBox();
            this.bbSelection.update(this.mouseStartX, this.mouseStartY);
            this.bbSelection.update(this.mouseSelectX, this.mouseSelectY);

            let pad = new Pad('', this.bbSelection.center()[0], this.bbSelection.center()[1]);
            // console.log(`Pcb:mouseUp cx:${pad.posX} cy:${pad.posY} diagonal:${this.bbSelection.diagonal()}`);

            if(this.tree) {
                let found:[Pad, number][] = [];
                let dist = this.bbSelection.diagonal();
                if(dist < 0.1) { // no drag - only one
                    found = this.tree.nearest(pad, 1, dist);
                    this.nearest = found;
                } else {
                    dist = (dist/2) * (dist/2); // search require square distance ?
                    found = this.tree.nearest(pad, 99999, dist);
                    if(!event.shiftKey) {
                        this.nearest = [];
                    }
                    for(const near of found) {
                        // console.log(`m:${mx},${my} nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
                        /// uuuhhh check if inside the box
                        if(this.bbSelection.inside(near[0])) {
                            this.nearest.push(near);
                        }
                    }
                }

                // need a bb for actual selected points to get zero right
                let bbNewSelection = new BoundingBox();
                for(const near of this.nearest) {
                    bbNewSelection.updateFromPad(near[0]);
                }
                this.bbSelection = bbNewSelection;

                console.log(`Pcb:mouseUp found #${found.length}`);
            }
        }
    }
    mouseMove(event: MouseEvent) {
        // ooohhh do not trust event.button, it's always 0 here !
        // console.log('pcb:mouseMove',event);
        const trans = this.ctx.getTransform();
        if(this.mouseFlag) {
            this.mouseOffX = event.clientX * trans.a - this.mouseStartX;
            this.mouseOffY = event.clientY * trans.d - this.mouseStartY;
        }
        if(this.mouseSelect ) {
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height-(event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
        }
    }
    mouseWheel(event: WheelEvent) {
        const trans = this.ctx.getTransform();
        // console.log(event.deltaY);
        if (event.deltaY > 0) {
            this.zoom *= 1.1;
            // this.mouseOffX *= 0.9;
            // this.mouseOffY *= 0.9;
        } else {
            this.zoom *= 0.9;
            // this.mouseOffX *= 1.1;
            // this.mouseOffY *= 1.1;
        }
    }
    mouseOut(event: MouseEvent) {
    }

    static distance(a:Pad, b:Pad) {
        return Math.pow(a.posX - b.posX, 2) +  Math.pow(a.posY - b.posY, 2);
    }

    public draw() {
        // theoretisch so...
        // this.ctx.fillStyle = 'orangered';
        this.ctx.fillStyle = 'antiquewhite';

        // draw bb center
        this.ctx.strokeStyle = 'red';
        let center = this.bbPcb.center(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(center[0] - 10 + this.mouseOffX, center[1] + this.mouseOffY);
        this.ctx.lineTo(center[0] + 10 + this.mouseOffX, center[1] + this.mouseOffY);
        this.ctx.moveTo(center[0] + this.mouseOffX, center[1] - 10 + this.mouseOffY);
        this.ctx.lineTo(center[0] + this.mouseOffX, center[1] + 10 + this.mouseOffY);
        this.ctx.stroke();
        // draw bb
        this.ctx.beginPath();
        this.ctx.rect(this.bbPcb.zero(this.zoom)[0] + this.mouseOffX, this.bbPcb.zero(this.zoom)[1] + this.mouseOffY, this.bbPcb.size(this.zoom)[0], this.bbPcb.size(this.zoom)[1]);
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

        // draw selectionCross(es)
        this.ctx.strokeStyle = 'purple';
        this.ctx.beginPath();
        let csize = .5;
        for(const near of this.nearest) {
            this.ctx.moveTo((near[0].posX-csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.lineTo((near[0].posX+csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.moveTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY+csize) * this.zoom + this.mouseOffY);
            this.ctx.lineTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY-csize) * this.zoom + this.mouseOffY);
            // console.log(`nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
        }
        this.ctx.stroke();

        // draw selection lower left = zero kandidate
        let zero = [0,0];
        if(this.bbSelection) {
            csize = 2 * this.zoom;
            zero = this.bbSelection.zero(this.zoom);
            this.ctx.beginPath();
            this.ctx.moveTo(zero[0] -csize + this.mouseOffX, zero[1] + this.mouseOffY);
            this.ctx.lineTo(zero[0] +csize + this.mouseOffX, zero[1] + this.mouseOffY);
            this.ctx.moveTo(zero[0] + this.mouseOffX,     zero[1]-csize + this.mouseOffY);
            this.ctx.lineTo(zero[0] + this.mouseOffX,     zero[1]+csize + this.mouseOffY);
            this.ctx.stroke();
        }

        // draw origin
        this.ctx.strokeStyle = 'black';
        zero = this.bbZero.center(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(-csize + this.mouseOffX, this.mouseOffY);
        this.ctx.lineTo(+csize + this.mouseOffX, this.mouseOffY);
        this.ctx.moveTo(this.mouseOffX,       -csize + this.mouseOffY);
        this.ctx.lineTo(this.mouseOffX,       +csize + this.mouseOffY);
        this.ctx.stroke();

        // draw zero
        this.ctx.strokeStyle = 'black';
        zero = this.bbZero.zero(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(zero[0] -csize + this.mouseOffX, zero[1] + this.mouseOffY);
        this.ctx.lineTo(zero[0] +csize + this.mouseOffX, zero[1] + this.mouseOffY);
        this.ctx.moveTo(zero[0] + this.mouseOffX,     zero[1]-csize + this.mouseOffY);
        this.ctx.lineTo(zero[0] + this.mouseOffX,     zero[1]+csize + this.mouseOffY);
        this.ctx.stroke();


        // draw selectionRectangle
        if(this.mouseSelect) {
            this.ctx.strokeStyle = 'purple';
            this.ctx.beginPath();
            this.ctx.moveTo(this.mouseStartX  * this.zoom + this.mouseOffX, this.mouseStartY  * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseSelectX * this.zoom + this.mouseOffX, this.mouseStartY  * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseSelectX * this.zoom + this.mouseOffX, this.mouseSelectY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseStartX  * this.zoom + this.mouseOffX, this.mouseSelectY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseStartX  * this.zoom + this.mouseOffX, this.mouseStartY  * this.zoom + this.mouseOffY);
            this.ctx.stroke();
        }
    }

}
