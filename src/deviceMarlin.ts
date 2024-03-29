/**
 * Marlin: Device specific implementation.
*/

import { kdTree } from 'kd-tree-javascript'; // node module
// import { kdTree } from './kdTree';
import { Device, MovementSettings } from "./device";
import { PCB, Pad } from "./pcb";

enum Status {
    Undefined = 1,
    Ready,
    Busy,
    NC
}

export class Marlin extends Device {
    marlinDiv: HTMLElement | null;
    marlinDivStatus: HTMLElement | null;
    marlinDivPosition: HTMLElement | null;
    marlinDivCommands: HTMLElement | null;

    zero: [number, number] = [0, 0];
    padXY: HTMLCanvasElement;
    padZ: HTMLCanvasElement;
    movementSettings: MovementSettings;

    constructor() {
        super();
        this.marlinDiv = document.getElementById("Marlin");
        this.movementSettings = new MovementSettings();
        this.initHtml();
    }

    public applyMoveSettings(movementSettings: MovementSettings) {
        this.movementSettings = movementSettings;
    }

    /**
     * Overwrite! Set the current position to Zero. All further commands will be relative to this position.
     */
    public setZero(point: [number, number]): void {
        this.zero = point;
        this.onBtnAbs().then(() => {
            this.serialWriteWait('G92 X0 Y0 Z0').then(() => {
                this.onBtnPos();
            });
        })
    }
    /**
     * Overwrite! Move to position. If one coordinate is undefined, it's ignored
     */
    public moveTo(x: number | undefined, y: number | undefined, z: number | undefined, e: number | undefined): void {
        let cmd = 'G0 ';
        if (x != undefined) cmd += `X${x - this.zero[0]} `;
        if (y != undefined) cmd += `Y${y - this.zero[1]} `;
        if (z != undefined) cmd += `Z${z} `;
        this.serialWriteWait(cmd).then(() => {
            this.onBtnPos();
        });
    }


    public async moveToAll(plist: Pad[], start: [number, number]) {
        console.log('Marlin:moveToAll', plist.length);
        // console.log(plist);

        const tree = new kdTree(plist, PCB.distance, ["posX", "posY"]);
        // const tree = new kdTree(PCB, plist, PCB.distance, ["posX", "posY"]);

        let startpad = new Pad('', start[0], start[1]);
        let search = tree.nearest(startpad, 1);
        let foundpad = search[0][0];

        let foundpads: Pad[] = []; // just for log

        this.onBtnAbs().then(async () => {
            // initial extrude
            await this.extrude(this.movementSettings.inite);
            try {
                let treeshot = '';
                // console.log('tree dump:');
                // console.log(JSON.stringify(tree.toJSON(), undefined, 4)); // dump tree

                for (let i = 0; i < plist.length; i++) {

                    search = tree.nearest(foundpad, 1);
                    // console.log('Marlin:moveToAll', search);

                    foundpad = search[0][0];
                    foundpads.push(foundpad);

                    await this.moveAndBlob(foundpad);

                    // let cmd = 'G0 ';
                    // cmd += `X${foundpad.posX - this.zero[0]} `;
                    // cmd += `Y${foundpad.posY - this.zero[1]} `;
                    // try {
                    //     let response = await this.serialWriteWait(cmd);
                    //     // console.log('Marlin:moveToAll', response);
                    // } catch (what) { } // ignore disconnected for debugging

                    /// remove seems to be bugi :(((
                    let ok = tree.remove(foundpad);
                    // if(ok) {
                    //     // console.log(`Marlin:moveToAll removed pad`, foundpad);
                    // } else {
                    //     console.warn(`Marlin:moveToAll NOT removed pad, thas bad :(`, foundpad);
                    // }
                    // treeshot = JSON.stringify(tree.toJSON(), undefined, 4); // keep tree for debug !
                    // console.log(treeshot);
                }

                for (let fpad of foundpads) {
                    console.log(`Marlin:moveToAll pad:${fpad.posX};\t${fpad.posY}`);
                }

            } catch (what) {
                // if serialWriteWait fails, do something ?
                console.warn("Marlin:moveToAll: failed", what);
            }
            // retract
            await this.extrude(this.movementSettings.retracte);
        });
    }

    public async extrude(value: number) {
        return new Promise<void>((resolve) => {
            this.serialWriteWait(`G0 E${value}`).then((value) => {
                console.log(value);
            }).catch((reason) => {
                console.warn(reason);
            }).finally(() => {
                resolve();
            });
        });
    }

    public async moveAndBlob(foundpad: Pad) {
        return new Promise<string>(async (resolve, reject) => {
            let cmd = 'G0 ';
            cmd += `X${foundpad.posX - this.zero[0]} `;
            cmd += `Y${foundpad.posY - this.zero[1]} `;
            try {
                let response = await this.serialWriteWait(cmd).then(() => {
                    this.serialWriteWait('M83').then(() => { // extruder relativ
                        this.serialWriteWait(`G0 Z${this.movementSettings.zhop}`).then(() => {
                            this.serialWriteWait(`G0 E${this.movementSettings.pade}`).then(() => {
                                this.serialWriteWait('G0 Z0').then(() => {
                                    this.serialWriteWait(`G0 Z${this.movementSettings.zhop}`).then(() => {
                                        resolve('jo');
                                    })
                                })
                            })
                        })
                    })
                })
                // console.log('Marlin:moveToAll', response);
            } catch (what) { } // ignore disconnected for debugging
        });
    }
    public blob() {
        this.onBtnAbs().then(() => {
            this.serialWriteWait('M83').then(() => { // extruder relativ
                this.serialWriteWait('G0 Z3').then(() => {
                    this.serialWriteWait('G0 E10').then(() => {
                        this.serialWriteWait('G0 Z0').then(() => {
                            this.serialWriteWait('G0 Z3')
                        })
                    })
                })
            })
        });
    }

    protected onSerialConnected() {
        console.log('Marlin: onSerialConnected');
        // read over first messages
        // setTimeout(() => {
        //     while(this.inputQueue.length > 0) {
        //         if (this.marlinDivPosition) {
        //             this.marlinDivPosition.innerHTML += `${this.inputQueue.pop()}`;
        //         }
        //     }
        this.setStatus(Status.Ready)
        if (this.marlinDivStatus && this.marlinDivCommands) {
            this.setStatus(Status.Ready);
            this.marlinDivCommands.className = this.marlinDivCommands.className.replace('w3-hide', 'w3-show');
        }
        // }, 1000);

        // wait 3sec, run commands 'cold extrude','relative positioning','report position'
        setTimeout(() => {
            this.onBtnCold().then(() => {
                this.onBtnRel().then(() => {
                    this.onBtnPos().then(() => {
                        console.log('Marlin: onSerialConnected init sequence finished');
                    });
                });
            });
        }, 3000);
    }
    protected onSerialDisconnected() {
        console.log('Marlin: onSerialDisconnected');
        if (this.marlinDivStatus && this.marlinDivCommands) {
            this.setStatus(Status.NC);
            this.marlinDivCommands.className = this.marlinDivCommands.className.replace('w3-show', 'w3-hide');
        }
    }

    /**
     * Inherited from Device, adds Status message updates.
     * @param value
     * @param timeout
     * @returns
     */
    public async serialWriteWait(value: string, timeout: number = 10000): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            this.setStatus(Status.Busy);
            super.serialWriteWait(value, timeout).then((result) => {
                resolve(result);
            }).catch((reason) => {
                reject(reason);
            }).finally(() => {
                this.setStatus(Status.Ready);
            });
        });
    }

    private setStatus(status: Status) {
        let html = `unknown status ${status}`;
        switch (status) {
            case Status.Ready:
                html = 'Status: <i class="fa-solid fa-plug"></i> ready'; break;
            case Status.Busy:
                html = 'Status: <i class="fa-solid fa-plug-circle-bolt"></i> busy'; break;
            case Status.NC:
                html = 'Status: <i class="fa-solid fa-plug-circle-xmark"></i> not connected'; break;
        }
        if (this.marlinDivStatus) {
            this.marlinDivStatus.innerHTML = html;
        }
    }

    onBtnHome(): Promise<void> {
        return new Promise<void>((resolve) => {
            this.serialWriteWait('G28').then((value) => {
                console.log(value);
            }).catch((reason) => {
                console.warn(reason)
            }).finally(() => {
                resolve();
            });
        });

        //// timeout too small for this command, see what happens
        // this.serialWriteWait('G28', 100).then((value) => {
        //     console.log(value);
        // }).catch((reason) => {
        //     console.warn(reason);
        //     // try again (default timeout is 10sec)
        //     this.serialWriteWait('G28').then((value) => {
        //         console.log(value);
        //         this.onBtnPos();
        //     }).catch((reason) => { console.warn(reason) });
        // });
    };
    onBtnPos(): Promise<void> {
        return new Promise<void>((resolve) => {
            this.serialWriteWait('M114').then((value) => {
                // hier kommt eine zeile mit zahlen und eine mit ok
                console.log('onBtnPos', value);
                if (this.marlinDivPosition) {
                    this.marlinDivPosition.innerText = value;
                }
            }).catch((reason) => {
                console.warn(reason);
            }).finally(() => {
                resolve();
            });
        });
    };
    onBtnAbs() {
        return new Promise<void>((resolve) => {
            this.serialWriteWait('G90').then((value) => {
                console.log(value);
            }).catch((reason) => {
                console.warn(reason);
            }).finally(() => {
                resolve();
            });
        });
    }
    onBtnRel() {
        return new Promise<void>((resolve) => {
            this.serialWriteWait('G91').then((value) => {
                console.log(value);
            }).catch((reason) => {
                console.warn(reason);
            }).finally(() => {
                resolve();
            });
        });
    }
    onBtnCold() {
        return new Promise<void>((resolve) => {
            this.serialWriteWait('M302 S0').then((value) => {
                console.log(value);
            }).catch((reason) => {
                console.warn(reason);
            }).finally(() => {
                resolve();
            });
        });
    }

    onBtnXP() {
        this.serialWriteWait('G0 X10').then((value) => { this.onBtnPos(); });
    };
    onBtnXM() {
        this.serialWriteWait('G0 X-10').then((value) => { this.onBtnPos(); });
    };
    onBtnYP() {
        this.serialWriteWait('G0 Y10').then((value) => { this.onBtnPos(); });
    };
    onBtnYM() {
        this.serialWriteWait('G0 Y-10').then((value) => { this.onBtnPos(); });
    };
    onBtnZP() {
        this.serialWriteWait('G0 Z10').then((value) => { this.onBtnPos(); });
    };
    onBtnZM() {
        this.serialWriteWait('G0 Z-10').then((value) => { this.onBtnPos(); });
    };
    onBtnEP() {
        this.serialWriteWait('G0 E10').then((value) => { this.onBtnPos(); });
    };
    onBtnEM() {
        this.serialWriteWait('G0 E-10').then((value) => { this.onBtnPos(); });
    };

    calcXY(event: PointerEvent, canvas: HTMLCanvasElement) {
        const factor = (event.getModifierState("Shift")) ? 0.05 : 0.5;
        const rect = canvas.getBoundingClientRect();
        // calculate the mouse click position
        const mouseX = (event.clientX - rect.left - rect.width / 2) * factor;
        const mouseY = (event.clientY - rect.top - rect.height / 2) * -1 * factor;

        return [mouseX, mouseY];
    }
    onPadXYhover(event: PointerEvent) {
        // console.log("onPadXYhover ", mouseX, mouseY);
        const pos = this.calcXY(event, this.padXY);
        if (this.marlinDivPosition) {
            this.marlinDivPosition.innerHTML = `x:${pos[0].toFixed(2)} y:${pos[1].toFixed(2)} z:---`;
        }
    }
    onPadXYclick(event: PointerEvent) {
        const pos = this.calcXY(event, this.padXY);
        console.log("onPadXYclick ", pos[0], pos[1]);

        this.onBtnRel().then(() => {
            this.moveTo(pos[0], pos[1], undefined, undefined);
        })
    }

    onPadZhover(event: PointerEvent) {
        // console.log("onPadXYhover ", mouseX, mouseY);
        const pos = this.calcXY(event, this.padZ);
        if (this.marlinDivPosition) {
            this.marlinDivPosition.innerHTML = `x:--- y:--- z:${pos[1].toFixed(2)}`;
        }
    }
    onPadZclick(event: PointerEvent) {
        console.log("onPadZ: ", event);

        const pos = this.calcXY(event, this.padZ);
        console.log("onPadZclick ", pos[0], pos[1]);

        this.onBtnRel().then(() => {
            this.moveTo(0, 0, pos[1], undefined);
        })
    }

    /**
     * Creates some buttons for Marlin specific actions...
     */
    private initHtml() {
        if (this.marlinDiv) {
            this.marlinDiv.innerHTML = `
            <div class="w3-border w3-border-dark-grey">
                <div id="marlinStatus"></div>
                <div id="marlinPosition" class="w3-tiny"></div>
                <span id="marlinMove" class="w3-show">
                    <canvas id="marlinMovePadXY" width="200px" height="150px"></canvas>
                    <canvas id="marlinMovePadZ" width="120px" height="150px"></canvas>
                </span>
                <div id="marlinCommands" class="w3-tiny w3-hide">
                    <p>
                    <button id="marlinHome" class="w3-button w3-round w3-light-grey">home</button>
                    <button id="marlinPos"  class="w3-button w3-round w3-light-grey">pos?</button>
                    <button id="marlinRel"  class="w3-button w3-round w3-light-grey">rel</button>
                    <button id="marlinAbs"  class="w3-button w3-round w3-light-grey">abs</button>
                    <button id="marlinCold" class="w3-button w3-round w3-light-grey">cold</button>
                    </p>
                    <!--
                    <p>
                    <button id="marlinXP" class="w3-button w3-round w3-light-grey">x+</button>
                    <button id="marlinXM" class="w3-button w3-round w3-light-grey">x-</button>
                    <button id="marlinYP" class="w3-button w3-round w3-light-grey">y+</button>
                    <button id="marlinYM" class="w3-button w3-round w3-light-grey">y-</button>
                    <button id="marlinZP" class="w3-button w3-round w3-light-grey">z+</button>
                    <button id="marlinZM" class="w3-button w3-round w3-light-grey">z-</button>
                    </p>
                    -->
                    <p>
                    <button id="marlinEP" class="w3-button w3-round w3-light-grey">e+</button>
                    <button id="marlinEM" class="w3-button w3-round w3-light-grey">e-</button>
                    </p>
                </div>
            </div>
            `
            this.marlinDivStatus = document.getElementById("marlinStatus");
            this.marlinDivPosition = document.getElementById("marlinPosition");
            this.marlinDivCommands = document.getElementById("marlinCommands");
            this.setStatus(Status.NC);
            const marlinBtnHome = document.getElementById("marlinHome");
            if (marlinBtnHome) {
                marlinBtnHome.onclick = this.onBtnHome.bind(this);
            }
            const marlinBtnPos = document.getElementById("marlinPos");
            if (marlinBtnPos) {
                marlinBtnPos.onclick = this.onBtnPos.bind(this);
            }
            const marlinBtnRel = document.getElementById("marlinRel");
            if (marlinBtnRel) {
                marlinBtnRel.onclick = this.onBtnRel.bind(this);
            }
            const marlinBtnAbs = document.getElementById("marlinAbs");
            if (marlinBtnAbs) {
                marlinBtnAbs.onclick = this.onBtnAbs.bind(this);
            }
            const marlinBtnCold = document.getElementById("marlinCold");
            if (marlinBtnCold) {
                marlinBtnCold.onclick = this.onBtnCold.bind(this);
            }

            // const marlinBtnXP = document.getElementById("marlinXP");
            // if (marlinBtnXP) {
            //     marlinBtnXP.onclick = this.onBtnXP.bind(this);
            // }
            // const marlinBtnXM = document.getElementById("marlinXM");
            // if (marlinBtnXM) {
            //     marlinBtnXM.onclick = this.onBtnXM.bind(this);
            // }
            // const marlinBtnYP = document.getElementById("marlinYP");
            // if (marlinBtnYP) {
            //     marlinBtnYP.onclick = this.onBtnYP.bind(this);
            // }
            // const marlinBtnYM = document.getElementById("marlinYM");
            // if (marlinBtnYM) {
            //     marlinBtnYM.onclick = this.onBtnYM.bind(this);
            // }
            // const marlinBtnZP = document.getElementById("marlinZP");
            // if (marlinBtnZP) {
            //     marlinBtnZP.onclick = this.onBtnZP.bind(this);
            // }
            // const marlinBtnZM = document.getElementById("marlinZM");
            // if (marlinBtnZM) {
            //     marlinBtnZM.onclick = this.onBtnZM.bind(this);
            // }
            const marlinBtnEP = document.getElementById("marlinEP");
            if (marlinBtnEP) {
                marlinBtnEP.onclick = this.onBtnEP.bind(this);
            }
            const marlinBtnEM = document.getElementById("marlinEM");
            if (marlinBtnEM) {
                marlinBtnEM.onclick = this.onBtnEM.bind(this);
            }

            const movePadXY = document.getElementById("marlinMovePadXY") as HTMLCanvasElement;
            if (movePadXY) {
                this.padXY = movePadXY;
                movePadXY.onclick = this.onPadXYclick.bind(this);
                movePadXY.onmousemove = this.onPadXYhover.bind(this);
                const ctx = movePadXY.getContext("2d");
                if (ctx) {
                    ctx.strokeStyle = "white";
                    ctx.fillStyle = "white";
                    ctx.moveTo(0, movePadXY.height / 2);
                    ctx.lineTo(movePadXY.width - 1, movePadXY.height / 2);
                    ctx.moveTo(movePadXY.width / 2, 0);
                    ctx.lineTo(movePadXY.width / 2, movePadXY.height - 1);
                    ctx.stroke();
                    ctx.fillText("xy", 0, 10);
                } else {
                    console.warn("no context on movePadXY");
                }
            } else {
                console.warn("no movePadXY");
            }
            const movePadZ = document.getElementById("marlinMovePadZ") as HTMLCanvasElement;
            if (movePadZ) {
                this.padZ = movePadZ;
                movePadZ.onclick = this.onPadZclick.bind(this);
                movePadZ.onmousemove = this.onPadZhover.bind(this);
                const ctx = movePadZ.getContext("2d");
                if (ctx) {
                    ctx.strokeStyle = "white";
                    ctx.fillStyle = "white";
                    ctx.moveTo(0, movePadZ.height / 2);
                    ctx.lineTo(movePadZ.width - 1, movePadZ.height / 2);
                    ctx.stroke();
                    ctx.fillText("z", 0, 10);
                } else {
                    console.warn("no context on movePadZ");
                }
            } else {
                console.warn("no movePadZ");
            }
        }
    }
}
