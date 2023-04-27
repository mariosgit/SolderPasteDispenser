var $897ca68663b1f638$exports = {};
(function() {
    var a = {};
    function g(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function c(t, e) {
        for(var o = 0; o < e.length; o++){
            var s = e[o];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
        }
    }
    function h(t, e, o) {
        return e && c(t.prototype, e), o && c(t, o), t;
    }
    var i = function() {
        function t(e, o) {
            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gray", i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "16px Monospace", r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            g(this, t), this.x = r, this.y = n, this.ctx = e, this.canvas = o, this.color = s, this.font = i, this.setPos = this.setPos.bind(this);
        }
        return h(t, [
            {
                key: "track",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.canvas;
                    return t ? e.addEventListener("mousemove", this.setPos) : e.removeEventListener("mousemove", this.setPos), this;
                }
            },
            {
                key: "setPos",
                value: function(t) {
                    var e = this.canvas.getBoundingClientRect();
                    return this.x = Math.floor(t.clientX - e.left), this.y = Math.floor(t.clientY - e.top), this;
                }
            },
            {
                key: "draw",
                value: function() {
                    var t = this.x, e = this.y, o = this.canvas, s = this.ctx, i = this.font, r = this.color, n = "X: ".concat(t, ", Y: ").concat(e);
                    s.save(), s.fillStyle = r, s.font = i;
                    var a = t < o.width / 2 ? 20 : -s.measureText(n).width - 20, v = e < o.height / 2 ? 25 : -18;
                    return s.fillText(n, this.x + a, this.y + v), s.restore(), this;
                }
            }
        ]), t;
    }();
    function d(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function f(t, e) {
        for(var i = 0; i < e.length; i++){
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
        }
    }
    function e(t, e, i) {
        return e && f(t.prototype, e), i && f(t, i), t;
    }
    var b = function() {
        function t(e, i, s, r, l, n) {
            d(this, t), this.color = e, this.lineWidth = i, this.startX = s, this.startY = r, this.endX = l, this.endY = n;
        }
        return e(t, [
            {
                key: "draw",
                value: function(t) {
                    var e = this.color, i = this.lineWidth, s = this.startX, r = this.startY, l = this.endX, n = this.endY;
                    t.save(), t.beginPath(), t.strokeStyle = e, t.lineWidth = i, t.moveTo(s, r), t.lineTo(l, n), t.stroke(), t.restore();
                }
            }
        ]), t;
    }(), j = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "gray", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5, l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "DarkGray", n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .5, o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "16px Monospace";
            d(this, t), this.color = e, this.lineWidth = i, this.step = s, this.boldNth = r, this.boldColor = l, this.boldWidth = n, this.font = o, this.lines = null;
        }
        return e(t, [
            {
                key: "createLines",
                value: function(t) {
                    for(var e = this.color, i = this.lineWidth, s = this.step, r = this.boldNth, l = this.boldColor, n = this.boldWidth, o = [], a = r * s, h = 0; h < t.width; h += s){
                        var v = h % a == 0;
                        o.push(v ? new b(l, n, h, 0, h, t.height) : new b(e, i, h, 0, h, t.height));
                    }
                    for(var $ = 0; $ < t.height; $ += s){
                        var d = $ % a == 0;
                        o.push(d ? new b(l, n, 0, $, t.width, $) : new b(e, i, 0, $, t.width, $));
                    }
                    this.lines = o;
                }
            },
            {
                key: "drawText",
                value: function(t, e) {
                    var i = this.step, s = this.boldNth, r = this.boldColor, l = this.font;
                    t.save(), t.font = l, t.fillStyle = r, t.fillText("0", 1, 15);
                    for(var n = i * s; n < e.width; n += i * s)t.fillText(n, n, 15);
                    for(var o = i * s; o < e.height; o += i * s)t.fillText(o, 0, o + 15);
                    t.restore();
                }
            },
            {
                key: "draw",
                value: function(t, e) {
                    this.lines || this.createLines(e), this.lines.forEach(function(e) {
                        return e.draw(t);
                    }), this.drawText(t, e);
                }
            }
        ]), t;
    }();
    a.Mouse = i, a.Grid = j;
    $897ca68663b1f638$exports = a;
})();


// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream
class $66c36f122a80174e$export$292a9937fd0445c5 {
    erate = 50;
    inite = 10;
    pade = 1;
    retracte = -10;
    zhop = 3;
}
class $66c36f122a80174e$export$8215d14a63d9fb10 {
    inputLast = "";
    inputQueue = [];
    constructor(){
        this.deviceCheck = document.getElementById("deviceCheck");
        this.deviceConnect = document.getElementById("deviceConnect");
        this.deviceDisconnect = document.getElementById("deviceDisconnect");
        this.deviceInput = document.getElementById("deviceInput");
        this.deviceInputForm = document.getElementById("deviceInputForm");
        this.deviceInfo = document.getElementById("deviceInfo");
        this.deviceLog = document.getElementById("deviceLog");
        this.deviceSerial = document.getElementById("deviceSerial");
        this.port = null;
        this.textDecoder = new TextDecoderStream();
        if (this.deviceCheck && this.deviceConnect && this.deviceDisconnect && this.deviceInput && this.deviceInputForm) {
            this.deviceCheck.onclick = this.serialCheck.bind(this);
            this.deviceConnect.onclick = this.serialConnect.bind(this);
            this.deviceDisconnect.onclick = this.serialDisconnect.bind(this);
            // this.deviceDosome.onclick = this.serialDosome.bind(this);
            // this.deviceInput.onchange = this.serialInputChange.bind(this);
            this.deviceInputForm.onsubmit = this.serialInputForm.bind(this);
        }
        this.serialCheck();
    }
    /**
     * Opens a dialog where user can select a device to connect.
     */ async serialConnect() {
        // opens dialog where user can select a device
        navigator.serial.requestPort().then((port)=>{
            console.log("serialConnect", port);
            this.serialPortOpen(port);
        }).catch((reason)=>{
            // console.warn('serialConnect',reason);
            this.serialError(reason);
        });
    }
    async serialConnectDevice(vid, pid) {
        for (let port of this.ports){
            console.log(`serialConnectDevice: serial available, ports: `, port.getInfo());
            const { usbProductId: usbProductId , usbVendorId: usbVendorId  } = port.getInfo();
            if (usbProductId == pid && usbVendorId == vid) {
                this.serialPortOpen(port);
                break;
            }
        }
    }
    /**
     * Disconnect from device
     */ async serialDisconnect() {
        if (this.port) // this.reader.releaseLock(); // does'nt do it :(
        this.port.close().then(()=>{
            this.port = null;
            console.log("port closed");
        }).catch((error)=>{
            console.warn(error);
        });
    }
    /**
     *  Wait until some response or timeout, returns response or 'timeout' or might fail with 'busy' or 'disconnected'
     */ async serialWriteWait(value, timeout = 10000) {
        // clean serial input
        this.inputQueue = [];
        return new Promise(async (resolve, reject)=>{
            if (this.port) try {
                this.serialWrite(value);
                // wait until some response or timeout
                let available = false;
                const timestep = 10;
                let maxtime = timeout;
                while(!available){
                    available = await this.serialAvail(timestep);
                    maxtime = maxtime - timestep;
                    if (maxtime <= 0) break;
                }
                // console.log(`serialWriteWait avail:${available} time:${timeout - maxtime}`);
                // console.log(`serialWriteWait check: ${this.inputQueue.length}`);
                if (this.inputQueue.length > 0) {
                    const inp = this.inputQueue.pop();
                    // console.log(`serialWriteWait resolve: ${inp}`);
                    resolve(inp);
                } else // console.log(`serialWriteWait reject: `);
                reject("timeout");
            } catch (err) {
                // console.warn(err);
                reject("busy");
            }
            else // console.warn(this.port);
            reject("disconnected");
        });
    }
    /**
     * Helper function to write anything to the device.
     * @param event
     */ serialInputForm(event) {
        if (this.deviceInput) {
            event.preventDefault(); // form will do strange things !
            // console.log(event);
            this.serialInputChange(event);
        }
    }
    /**
     * Helper function to write anything to the device.
     * @param event
     */ async serialInputChange(event) {
        if (this.deviceInput) {
            if (this.port) {
                let text = this.deviceInput.value;
                if (text.length > 0) this.serialWrite(text);
            } else console.warn("serialInputChange - no port open");
        }
    }
    /* ***************** private stuff **************************** */ async serialCheck() {
        let result = false;
        if ("serial" in navigator) {
            this.updatePorts();
            navigator.serial.addEventListener("connect", (event)=>{
                // TODO: Automatically open event.target or warn user a port is available.
                console.log("serialCheck:connect", event);
                this.updatePorts();
            });
            navigator.serial.addEventListener("disconnect", (event)=>{
                // TODO: Remove |event.target| from the UI.
                // If the serial port was opened, a stream error would be observed as well.
                console.log("serialCheck:disconnect", event);
            });
            result = true;
        } else // console.warn('No serial API available, try another browser');
        this.serialError("This browser does not support the serial port. Connection to device impossible! Use Chrome!");
        return result;
    }
    updatePorts() {
        // lists all recently used ports, could just open one then.
        navigator.serial.getPorts().then((ports)=>{
            console.log("updatePorts:", ports);
            this.ports = ports;
            let html = ""; //devices:<br>';
            for (let port of ports){
                console.log(`serial available, ports: `, port.getInfo());
                const { usbProductId: usbProductId , usbVendorId: usbVendorId  } = port.getInfo();
                console.log(`updatePorts port pid:${usbProductId} vid:${usbVendorId}`);
                html += `<div class="w3-container"><i class="fa-solid fa-microchip"></i> pid:${usbProductId} vid:${usbVendorId} <button class="w3-btn w3-round w3-light-grey w3-tiny" id="${usbVendorId}-${usbProductId}"><i class="fa fa-plug"></i> connect </button></div>`;
            }
            if (this.deviceInfo) {
                this.deviceInfo.innerHTML = html;
                const btns = this.deviceInfo.getElementsByTagName("button");
                for (const btn of btns)btn.onclick = ()=>{
                    const ids = btn.id.split("-");
                    console.log(ids);
                    this.serialConnectDevice(parseInt(ids[0]), parseInt(ids[1]));
                };
            }
            if (this.deviceConnect && (this.ports == null || this.ports.length == 0)) // console.log('updatePorts: open dev buttons!!!', this.deviceConnect.className);
            this.deviceConnect.className = this.deviceConnect.className.replace("w3-hide", "w3-show");
        });
    }
    /**
     * Opens a givven port. Can be used after queriing ports with updatePorts.
     * @param port
     */ serialPortOpen(port) {
        port.onconnect = ()=>{
            console.log(`CONNECTED`);
        };
        port.ondisconnect = ()=>{
            console.log(`DISCONNECTED`);
            if (this.onSerialDisconnected) this.onSerialDisconnected();
        };
        port.open({
            baudRate: 250000
        }).then((val)=>{
            this.port = port;
            if (this.deviceLog) this.deviceLog.innerHTML = "connected<br>";
            console.log("port opened ? ", this.port);
            if (this.onSerialConnected) this.onSerialConnected();
            setTimeout(this.serialRead.bind(this), 0); // start read loop
        }).catch((error)=>{
            // console.warn(error);
            this.serialError(error.toString());
        });
    }
    serialError(error) {
        console.warn("serialError", error);
        if (this.deviceLog) this.deviceLog.innerHTML = `<span class="w3-red">${error}</span><br>`;
    }
    /**
     * Internal, starts the read line loop.
     */ async serialRead() {
        if (this.port) {
            const readableStreamClosed = this.port.readable.pipeTo(this.textDecoder.writable);
            this.reader = this.textDecoder.readable.getReader();
            // Listen to data coming from the serial device.
            setTimeout(this.serialReadon.bind(this), 1); // will loop there
        }
    }
    /**
     * Internal, handles the read line loop.
     */ async serialReadon() {
        try {
            const { value: value , done: done  } = await this.reader.read();
            if (done) {
                // Allow the serial port to be closed later. // Does not happen !
                this.reader.releaseLock();
                console.log("serialRead - done");
            } else {
                let pushedStuff = false;
                // value is a string.
                if (value.indexOf("\n") != -1) {
                    const values = value.split("\n");
                    // console.log(values);
                    if (values.length <= 1) console.error("Assertion failed ", values);
                    for(let i = 0; i < values.length - 1; i++){
                        this.inputLast += values[i];
                        this.inputQueue.push(this.inputLast);
                        this.serialLog(this.inputLast, true);
                        this.inputLast = "";
                        pushedStuff = true;
                    }
                    this.inputLast = values[values.length - 1];
                // console.log(`serialReadon last: "${this.inputLast}"`);
                } else // no \n
                this.inputLast += value;
                if (pushedStuff) setTimeout(this.serialCallback.bind(this), 5);
                setTimeout(this.serialReadon.bind(this), 1); // will loop there
            }
        } catch (error) {
            console.warn(error);
            this.serialError(error.toString());
        }
    }
    serialCallback() {
    // const elem = document.getElementById('deviceLog');
    // if (elem) {
    //     let latest = this.inputQueue.pop();
    //     while (latest) {
    //         elem.innerHTML += `${latest}<br>`;
    //         latest = this.inputQueue.pop();
    //     }
    // }
    }
    async serialWrite(value) {
        this.serialLog(value, false);
        // write...
        let utf8Encode = new TextEncoder();
        const writer = this.port.writable.getWriter();
        await writer.write(utf8Encode.encode(`${value}\n`));
        writer.releaseLock();
    }
    /**
     * Waits until data was read or timeout
     * @param timeout
     * @returns
     */ serialAvail(timeout = 10) {
        return new Promise((resolve)=>{
            if (this.inputQueue.length > 0) resolve(true);
            else setTimeout(()=>{
                resolve(false);
            }, timeout);
        });
    }
    serialLog(text, incomming) {
        if (this.deviceSerial) {
            while(this.deviceSerial.childElementCount > 20){
                let ch = this.deviceSerial.firstChild;
                if (ch) this.deviceSerial.removeChild(ch);
            }
            if (incomming) this.deviceSerial.innerHTML += `<div><i class="fa-solid fa-arrow-right-to-bracket"></i> ${text}</div>`;
            else this.deviceSerial.innerHTML += `<div><i class="fa-solid fa-arrow-up-right-from-square"></i> ${text}</div>`;
            globalThis.resize();
        }
    }
}


/**
 * Marlin: Device specific implementation.
*/ var $467041f85a1988c8$exports = {};
/**
 * k-d Tree JavaScript - V 1.01
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */ (function(root, factory) {
    if (typeof define === "function" && define.amd) define([
        "exports"
    ], factory);
    else factory($467041f85a1988c8$exports);
})($467041f85a1988c8$exports, function(exports1) {
    function Node(obj, dimension, parent) {
        this.obj = obj;
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.dimension = dimension;
    }
    function kdTree(points, metric, dimensions) {
        var self = this;
        function buildTree(points, depth, parent) {
            var dim = depth % dimensions.length, median, node;
            if (points.length === 0) return null;
            if (points.length === 1) return new Node(points[0], dim, parent);
            points.sort(function(a, b) {
                return a[dimensions[dim]] - b[dimensions[dim]];
            });
            median = Math.floor(points.length / 2);
            // avoid having same coords on left and right tree !!!
            while(median > 0){
                let newmedian = median - 1;
                if (points[median][dimensions[dim]] === points[newmedian][dimensions[dim]]) median -= 1;
                else break;
            }
            node = new Node(points[median], dim, parent);
            node.left = buildTree(points.slice(0, median), depth + 1, node);
            node.right = buildTree(points.slice(median + 1), depth + 1, node);
            return node;
        }
        // Reloads a serialied tree
        function loadTree(data) {
            // Just need to restore the `parent` parameter
            self.root = data;
            function restoreParent(root) {
                if (root.left) {
                    root.left.parent = root;
                    restoreParent(root.left);
                }
                if (root.right) {
                    root.right.parent = root;
                    restoreParent(root.right);
                }
            }
            restoreParent(self.root);
        }
        // console.warn('using mariosgit:kd-tree v1.0.4');
        // If points is not an array, assume we're loading a pre-built tree
        if (!Array.isArray(points)) loadTree(points, metric, dimensions);
        else this.root = buildTree(points, 0, null);
        // Convert to a JSON serializable structure; this just requires removing
        // the `parent` property
        this.toJSON = function(src) {
            if (!src) src = this.root;
            var dest = new Node(src.obj, src.dimension, null);
            if (src.left) dest.left = self.toJSON(src.left);
            if (src.right) dest.right = self.toJSON(src.right);
            return dest;
        };
        /** returns a list of points in the subtree, exclusive the given node ! */ this.toArray = function(src) {
            let result = [];
            if (src === null) return result;
            if (src.left) {
                result.push(src.left.obj);
                result = [
                    ...result,
                    ...this.toArray(src.left)
                ];
            }
            if (src.right) {
                result.push(src.right.obj);
                result = [
                    ...result,
                    ...this.toArray(src.right)
                ];
            }
            return result;
        };
        this.insert = function(point) {
            function innerSearch(node, parent) {
                if (node === null) return parent;
                var dimension = dimensions[node.dimension];
                if (point[dimension] < node.obj[dimension]) return innerSearch(node.left, node);
                else return innerSearch(node.right, node);
            }
            var insertPosition = innerSearch(this.root, null), newNode, dimension;
            if (insertPosition === null) {
                this.root = new Node(point, 0, null);
                return;
            }
            newNode = new Node(point, (insertPosition.dimension + 1) % dimensions.length, insertPosition);
            dimension = dimensions[insertPosition.dimension];
            if (point[dimension] < insertPosition.obj[dimension]) insertPosition.left = newNode;
            else insertPosition.right = newNode;
        };
        this.remove = function(point) {
            var node;
            function nodeSearch(node) {
                if (node === null) return null;
                if (node.obj === point) return node;
                var dimension = dimensions[node.dimension];
                if (point[dimension] < node.obj[dimension]) return nodeSearch(node.left);
                else return nodeSearch(node.right);
            }
            function removeNode(node) {
                var nextNode, nextObj, pDimension;
                function findMin(node, dim) {
                    var dimension, own, left, right, min;
                    if (node === null) return null;
                    dimension = dimensions[dim];
                    if (node.dimension === dim) {
                        if (node.left !== null) return findMin(node.left, dim);
                        return node;
                    }
                    own = node.obj[dimension];
                    left = findMin(node.left, dim);
                    right = findMin(node.right, dim);
                    min = node;
                    if (left !== null && left.obj[dimension] < own) min = left;
                    if (right !== null && right.obj[dimension] < min.obj[dimension]) min = right;
                    return min;
                }
                if (node.left === null && node.right === null) {
                    if (node.parent === null) {
                        self.root = null;
                        return;
                    }
                    pDimension = dimensions[node.parent.dimension];
                    if (node.obj[pDimension] < node.parent.obj[pDimension]) node.parent.left = null;
                    else node.parent.right = null;
                    return;
                }
                // If the right subtree is not empty, swap with the minimum element on the
                // node's dimension. If it is empty, we swap the left and right subtrees and
                // do the same.
                if (node.right !== null) {
                    nextNode = findMin(node.right, node.dimension);
                    nextObj = nextNode.obj;
                    removeNode(nextNode);
                    node.obj = nextObj;
                } else {
                    nextNode = findMin(node.left, node.dimension);
                    nextObj = nextNode.obj;
                    removeNode(nextNode);
                    node.right = node.left;
                    node.left = null;
                    node.obj = nextObj;
                }
            }
            node = nodeSearch(self.root);
            if (node === null) {
                console.warn("kdtree:remove could not remove node ! internal error !");
                return;
            }
            // removeNode(node); // buggi
            // wikipedia says: just rebuild the subtree
            const allchilds = this.toArray(node);
            let newnode = buildTree(allchilds, node.dimension, node.parent);
            if (node.parent) {
                if (node.parent.left === node) node.parent.left = newnode;
                else if (node.parent.right === node) node.parent.right = newnode;
            } else self.root = newnode;
        };
        this.nearest = function(point, maxNodes, maxDistance) {
            var i, result, bestNodes;
            bestNodes = new BinaryHeap(function(e) {
                return -e[1];
            });
            function nearestSearch(node) {
                var bestChild, dimension = dimensions[node.dimension], ownDistance = metric(point, node.obj), linearPoint = {}, linearDistance, otherChild, i;
                function saveNode(node, distance) {
                    bestNodes.push([
                        node,
                        distance
                    ]);
                    if (bestNodes.size() > maxNodes) bestNodes.pop();
                }
                for(i = 0; i < dimensions.length; i += 1)if (i === node.dimension) linearPoint[dimensions[i]] = point[dimensions[i]];
                else linearPoint[dimensions[i]] = node.obj[dimensions[i]];
                linearDistance = metric(linearPoint, node.obj);
                if (node.right === null && node.left === null) {
                    if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) saveNode(node, ownDistance);
                    return;
                }
                if (node.right === null) bestChild = node.left;
                else if (node.left === null) bestChild = node.right;
                else if (point[dimension] < node.obj[dimension]) bestChild = node.left;
                else bestChild = node.right;
                nearestSearch(bestChild);
                if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) saveNode(node, ownDistance);
                if (bestNodes.size() < maxNodes || Math.abs(linearDistance) < bestNodes.peek()[1]) {
                    if (bestChild === node.left) otherChild = node.right;
                    else otherChild = node.left;
                    if (otherChild !== null) nearestSearch(otherChild);
                }
            }
            if (maxDistance) for(i = 0; i < maxNodes; i += 1)bestNodes.push([
                null,
                maxDistance
            ]);
            if (self.root) nearestSearch(self.root);
            result = [];
            for(i = 0; i < Math.min(maxNodes, bestNodes.content.length); i += 1)if (bestNodes.content[i][0]) result.push([
                bestNodes.content[i][0].obj,
                bestNodes.content[i][1]
            ]);
            return result;
        };
        this.balanceFactor = function() {
            function height(node) {
                if (node === null) return 0;
                return Math.max(height(node.left), height(node.right)) + 1;
            }
            function count(node) {
                if (node === null) return 0;
                return count(node.left) + count(node.right) + 1;
            }
            return height(self.root) / (Math.log(count(self.root)) / Math.log(2));
        };
    }
    // Binary heap implementation from:
    // http://eloquentjavascript.net/appendix2.html
    function BinaryHeap(scoreFunction) {
        this.content = [];
        this.scoreFunction = scoreFunction;
    }
    BinaryHeap.prototype = {
        push: function(element) {
            // Add the new element to the end of the array.
            this.content.push(element);
            // Allow it to bubble up.
            this.bubbleUp(this.content.length - 1);
        },
        pop: function() {
            // Store the first element so we can return it later.
            var result = this.content[0];
            // Get the element at the end of the array.
            var end = this.content.pop();
            // If there are any elements left, put the end element at the
            // start, and let it sink down.
            if (this.content.length > 0) {
                this.content[0] = end;
                this.sinkDown(0);
            }
            return result;
        },
        peek: function() {
            return this.content[0];
        },
        remove: function(node) {
            var len = this.content.length;
            // To remove a value, we must search through the array to find
            // it.
            for(var i = 0; i < len; i++)if (this.content[i] == node) {
                // When it is found, the process seen in 'pop' is repeated
                // to fill up the hole.
                var end = this.content.pop();
                if (i != len - 1) {
                    this.content[i] = end;
                    if (this.scoreFunction(end) < this.scoreFunction(node)) this.bubbleUp(i);
                    else this.sinkDown(i);
                }
                return;
            }
            throw new Error("Node not found.");
        },
        size: function() {
            return this.content.length;
        },
        bubbleUp: function(n) {
            // Fetch the element that has to be moved.
            var element = this.content[n];
            // When at 0, an element can not go up any further.
            while(n > 0){
                // Compute the parent element's index, and fetch it.
                var parentN = Math.floor((n + 1) / 2) - 1, parent = this.content[parentN];
                // Swap the elements if the parent is greater.
                if (this.scoreFunction(element) < this.scoreFunction(parent)) {
                    this.content[parentN] = element;
                    this.content[n] = parent;
                    // Update 'n' to continue at the new position.
                    n = parentN;
                } else break;
            }
        },
        sinkDown: function(n) {
            // Look up the target element and its score.
            var length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
            while(true){
                // Compute the indices of the child elements.
                var child2N = (n + 1) * 2, child1N = child2N - 1;
                // This is used to store the new position of the element,
                // if any.
                var swap = null;
                // If the first child exists (is inside the array)...
                if (child1N < length) {
                    // Look it up and compute its score.
                    var child1 = this.content[child1N], child1Score = this.scoreFunction(child1);
                    // If the score is less than our element's, we need to swap.
                    if (child1Score < elemScore) swap = child1N;
                }
                // Do the same checks for the other child.
                if (child2N < length) {
                    var child2 = this.content[child2N], child2Score = this.scoreFunction(child2);
                    if (child2Score < (swap == null ? elemScore : child1Score)) swap = child2N;
                }
                // If the element needs to be moved, swap it, and continue.
                if (swap != null) {
                    this.content[n] = this.content[swap];
                    this.content[swap] = element;
                    n = swap;
                } else break;
            }
        }
    };
    exports1.kdTree = kdTree;
    exports1.BinaryHeap = BinaryHeap;
});




// import {kdTree, kdTreeObject} from './kdTree';
class $38e49bb257334d2a$var$BoundingBox {
    minx = 99999;
    miny = 99999;
    maxx = -99999;
    maxy = -99999;
    constructor(){}
    updateFromPad(pad) {
        this.update(pad.posX, pad.posY);
    }
    update(x, y) {
        if (x < this.minx) this.minx = x;
        if (y < this.miny) this.miny = y;
        if (x > this.maxx) this.maxx = x;
        if (y > this.maxy) this.maxy = y;
    // console.log(`bb: ${this.miny} ${this.maxy} ${this.center()[1]}`);
    }
    center(zoom = 1.0) {
        return [
            (this.minx + (this.maxx - this.minx) / 2) * zoom,
            (this.miny + (this.maxy - this.miny) / 2) * zoom
        ];
    }
    zero(zoom = 1.0) {
        return [
            this.minx * zoom,
            this.miny * zoom
        ];
    }
    size(zoom = 1.0) {
        return [
            (this.maxx - this.minx) * zoom,
            (this.maxy - this.miny) * zoom
        ];
    }
    diagonal(zoom = 1.0) {
        const size = this.size(zoom);
        return Math.sqrt(size[0] * size[0] + size[1] * size[1]);
    }
    /** Check if pad is inside the boundingbox */ inside(pad) {
        return pad.posX >= this.minx && pad.posX <= this.maxx && pad.posY >= this.miny && pad.posY <= this.maxy;
    }
}
class $38e49bb257334d2a$export$138f967feff4fb19 {
    constructor(form, w, h){
        this.form = form;
        this.width = w;
        this.height = h;
    }
}
class $38e49bb257334d2a$export$4b43d51f29457384 {
    constructor(style, x, y){
        this.posX = x;
        this.posY = y;
        this.style = style;
    }
    asTuple() {
        return [
            this.posX,
            this.posY
        ];
    }
}
class $38e49bb257334d2a$export$bdf465113f979d8f {
    fileName = "";
    mouseFlag = false;
    mouseStartX = 0;
    mouseStartY = 0;
    mouseOffX = 0;
    mouseOffY = 0;
    zoom = 5.0;
    nearest = [];
    constructor(){
        // super();
        this.mapStyles = new Map();
        this.mapPads = new Map();
        this.bbPcb = new $38e49bb257334d2a$var$BoundingBox();
        this.bbZero = new $38e49bb257334d2a$var$BoundingBox();
        this.bbSelection = new $38e49bb257334d2a$var$BoundingBox();
    }
    setCanvas(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
    }
    /**
     * Sets the Zero position to the lower left of selection rectangle.
     */ setZero() {
        let result = false;
        // use last selection ???
        this.bbZero = this.bbSelection;
        result = true;
        console.log(`Pcb:setZero: ${this.bbZero.zero()}`);
    }
    /**
     * @returns Zero position relative to Origin(0,0).
     */ getZero() {
        return this.bbZero.zero(); // lower left ?? better when .center() ??
    }
    /**
     * @returns All Pads in selection.
     */ getSelected() {
        let result = [];
        for (let near of this.nearest)// console.log(near);
        if (near.length > 0) result.push(near[0]);
        return result;
    }
    /**
     * @returns Lower left of selection as tuple
     */ getSelectedZero() {
        return this.bbSelection.zero();
    }
    getPadCount() {
        let result = 0;
        for (let padset of this.mapPads)result += padset[1].size;
        return result;
    }
    zoomToFit(size) {
        let psize = this.bbPcb.size();
        let zw = size[0] / psize[0];
        let zh = size[1] / psize[1];
        this.zoom = (zw > zh ? zh : zw) * .9;
        console.log(`Pcb:zoomToFit zoom ${this.zoom}`, psize);
        this.center();
    }
    center() {
        if (this.canvas) {
            this.mouseOffX = -(this.bbPcb.center()[0] * this.zoom) + this.canvas.width / 2;
            this.mouseOffY = -(this.bbPcb.center()[1] * this.zoom) + this.canvas.height / 2;
        }
    }
    addPadStyle(name, form, w, h) {
        this.mapStyles.set(name, new $38e49bb257334d2a$export$138f967feff4fb19(form, w, h));
    }
    addPad(style, x, y) {
        if (!this.mapPads.has(style)) this.mapPads.set(style, new Set());
        let padset = this.mapPads.get(style);
        if (padset) {
            const newpad = new $38e49bb257334d2a$export$4b43d51f29457384(style, x, y);
            padset.add(newpad);
            this.bbPcb.update(x, y);
        }
    }
    retree() {
        try {
            let pads = [];
            for (let padsets of this.mapPads.values())for (let pad of padsets)pads.push(pad);
            this.tree = new (0, $467041f85a1988c8$exports.kdTree)(pads, $38e49bb257334d2a$export$bdf465113f979d8f.distance, [
                "posX",
                "posY"
            ]);
            // this.tree = new kdTree(PCB, pads, PCB.distance, ["posX", "posY"]); // ts version
            console.log("tree bf:", this.tree.balanceFactor());
        } catch (err) {
            console.error(err);
        }
    }
    mouseDown(event) {
        // console.event.buttons
        const trans = this.ctx.getTransform();
        if (event.button == 0) {
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height - (event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseStartX = mx;
            this.mouseStartY = my;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
            this.mouseSelect = true;
        // console.log(`Pcb:mouseDown: x:${this.mouseStartX} y:${this.mouseStartY}`);
        }
        if (event.button != 0) {
            this.mouseStartX = event.clientX * trans.a - this.mouseOffX;
            this.mouseStartY = event.clientY * trans.d - this.mouseOffY;
            this.mouseFlag = true;
        }
    }
    mouseUp(event) {
        const trans = this.ctx.getTransform();
        // console.log('pcb:mouseUp event:', event);
        if (event.button != 0) this.mouseFlag = false;
        if (event.button == 0) {
            this.mouseSelect = false;
            // console.log(trans, event);
            // console.log('', this.canvas.height-(event.clientY-this.canvas.offsetTop), this.mouseOffY);
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height - (event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
            // bb = selected rectangle
            this.bbSelection = new $38e49bb257334d2a$var$BoundingBox();
            this.bbSelection.update(this.mouseStartX, this.mouseStartY);
            this.bbSelection.update(this.mouseSelectX, this.mouseSelectY);
            let pad = new $38e49bb257334d2a$export$4b43d51f29457384("", this.bbSelection.center()[0], this.bbSelection.center()[1]);
            // console.log(`Pcb:mouseUp cx:${pad.posX} cy:${pad.posY} diagonal:${this.bbSelection.diagonal()}`);
            if (this.tree) {
                let found = [];
                let dist = this.bbSelection.diagonal();
                if (dist < 0.1) {
                    found = this.tree.nearest(pad, 1, dist);
                    this.nearest = found;
                } else {
                    dist = dist / 2 * (dist / 2); // search require square distance ?
                    found = this.tree.nearest(pad, this.getPadCount(), dist); // uuuhhh use pad count !?
                    if (!event.shiftKey) this.nearest = [];
                    for (const near of found)// console.log(`m:${mx},${my} nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
                    /// uuuhhh check if inside the box
                    if (this.bbSelection.inside(near[0])) this.nearest.push(near);
                }
                // need a bb for actual selected points to get zero right
                let bbNewSelection = new $38e49bb257334d2a$var$BoundingBox();
                for (const near of this.nearest)bbNewSelection.updateFromPad(near[0]);
                this.bbSelection = bbNewSelection;
                console.log(`Pcb:mouseUp selection found #${found.length}`);
            }
        }
    }
    mouseMove(event) {
        // ooohhh do not trust event.button, it's always 0 here !
        // console.log('pcb:mouseMove',event);
        const trans = this.ctx.getTransform();
        if (this.mouseFlag) {
            this.mouseOffX = event.clientX * trans.a - this.mouseStartX;
            this.mouseOffY = event.clientY * trans.d - this.mouseStartY;
        }
        if (this.mouseSelect) {
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height - (event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
        }
    }
    mouseWheel(event) {
        const trans = this.ctx.getTransform();
        const mx = event.clientX * trans.a - this.mouseOffX;
        const my = this.canvas.height - (event.clientY - this.canvas.offsetTop) - this.mouseOffY;
        // console.log(`mouseWheel pos: x:${mx} y:${my}`);
        let oldX = mx / this.zoom;
        let oldY = my / this.zoom;
        if (event.deltaY > 0) this.zoom *= 1.1;
        else this.zoom *= 0.9;
        // korrect the drift around current mouse position...
        let newX = oldX * this.zoom;
        let newY = oldY * this.zoom;
        let offX = newX - mx;
        let offY = newY - my;
        // console.log(`mouseWheel offset: x:${offX} (${this.mouseOffX}) y:${offY} (${this.mouseOffY})`);
        this.mouseOffX -= offX;
        this.mouseOffY -= offY;
    }
    mouseOut(event) {}
    static distance(a, b) {
        return (a.posX - b.posX) * (a.posX - b.posX) + (a.posY - b.posY) * (a.posY - b.posY);
    }
    draw() {
        // theoretisch so...
        // this.ctx.fillStyle = 'orangered';
        this.ctx.fillStyle = "antiquewhite";
        // draw bb center
        this.ctx.strokeStyle = "red";
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
        for (let padstyle of this.mapPads.keys()){
            const sty = this.mapStyles.get(padstyle);
            const padset = this.mapPads.get(padstyle);
            if (sty && padset) {
                const sw = sty.width * this.zoom;
                const sh = sty.height * this.zoom;
                for (let pad of padset.values()){
                    if (sty.form == "R" || sty.form == "O" || sty.form == "RoundRect") {
                        this.ctx.beginPath();
                        this.ctx.fillRect(pad.posX * this.zoom - sw / 2.0 + this.mouseOffX, pad.posY * this.zoom - sh / 2.0 + this.mouseOffY, sw, sh);
                        this.ctx.fill();
                    } else if (sty.form == "C") {
                        this.ctx.beginPath();
                        this.ctx.ellipse(pad.posX * this.zoom + this.mouseOffX, pad.posY * this.zoom + this.mouseOffY, sw / 2, sw / 2, 0, 0, 2 * Math.PI);
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
        this.ctx.strokeStyle = "purple";
        this.ctx.beginPath();
        let csize = .5;
        for (const near of this.nearest){
            this.ctx.moveTo((near[0].posX - csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.lineTo((near[0].posX + csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.moveTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY + csize) * this.zoom + this.mouseOffY);
            this.ctx.lineTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY - csize) * this.zoom + this.mouseOffY);
        // console.log(`nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
        }
        this.ctx.stroke();
        // draw selection lower left = zero kandidate
        let zero = [
            0,
            0
        ];
        if (this.bbSelection) {
            csize = 2 * this.zoom;
            zero = this.bbSelection.zero(this.zoom);
            this.ctx.beginPath();
            this.ctx.moveTo(zero[0] - csize + this.mouseOffX, zero[1] + this.mouseOffY);
            this.ctx.lineTo(zero[0] + csize + this.mouseOffX, zero[1] + this.mouseOffY);
            this.ctx.moveTo(zero[0] + this.mouseOffX, zero[1] - csize + this.mouseOffY);
            this.ctx.lineTo(zero[0] + this.mouseOffX, zero[1] + csize + this.mouseOffY);
            this.ctx.stroke();
        }
        // draw origin
        this.ctx.strokeStyle = "black";
        zero = this.bbZero.center(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(-csize + this.mouseOffX, this.mouseOffY);
        this.ctx.lineTo(+csize + this.mouseOffX, this.mouseOffY);
        this.ctx.moveTo(this.mouseOffX, -csize + this.mouseOffY);
        this.ctx.lineTo(this.mouseOffX, +csize + this.mouseOffY);
        this.ctx.stroke();
        // draw zero
        this.ctx.strokeStyle = "black";
        zero = this.bbZero.zero(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(zero[0] - csize + this.mouseOffX, zero[1] + this.mouseOffY);
        this.ctx.lineTo(zero[0] + csize + this.mouseOffX, zero[1] + this.mouseOffY);
        this.ctx.moveTo(zero[0] + this.mouseOffX, zero[1] - csize + this.mouseOffY);
        this.ctx.lineTo(zero[0] + this.mouseOffX, zero[1] + csize + this.mouseOffY);
        this.ctx.stroke();
        // draw selectionRectangle
        if (this.mouseSelect) {
            this.ctx.strokeStyle = "purple";
            this.ctx.beginPath();
            this.ctx.moveTo(this.mouseStartX * this.zoom + this.mouseOffX, this.mouseStartY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseSelectX * this.zoom + this.mouseOffX, this.mouseStartY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseSelectX * this.zoom + this.mouseOffX, this.mouseSelectY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseStartX * this.zoom + this.mouseOffX, this.mouseSelectY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseStartX * this.zoom + this.mouseOffX, this.mouseStartY * this.zoom + this.mouseOffY);
            this.ctx.stroke();
        }
    }
}


let $f20d29129c6828fa$var$Status;
(function(Status) {
    Status[Status["Undefined"] = 1] = "Undefined";
    Status[Status["Ready"] = 2] = "Ready";
    Status[Status["Busy"] = 3] = "Busy";
    Status[Status["NC"] = 4] = "NC";
})($f20d29129c6828fa$var$Status || ($f20d29129c6828fa$var$Status = {}));
class $f20d29129c6828fa$export$6d4db5538ef246e9 extends (0, $66c36f122a80174e$export$8215d14a63d9fb10) {
    zero = [
        0,
        0
    ];
    constructor(){
        super();
        this.marlinDiv = document.getElementById("Marlin");
        this.movementSettings = new (0, $66c36f122a80174e$export$292a9937fd0445c5)();
        this.initHtml();
    }
    applyMoveSettings(movementSettings) {
        this.movementSettings = movementSettings;
    }
    /**
     * Overwrite! Set the current position to Zero. All further commands will be relative to this position.
     */ setZero(point) {
        this.zero = point;
        this.onBtnAbs().then(()=>{
            this.serialWriteWait("G92 X0 Y0 Z0").then(()=>{
                this.onBtnPos();
            });
        });
    }
    /**
     * Overwrite! Move to position. If one coordinate is undefined, it's ignored
     */ moveTo(x, y, z, e) {
        let cmd = "G0 ";
        if (x != undefined) cmd += `X${x - this.zero[0]} `;
        if (y != undefined) cmd += `Y${y - this.zero[1]} `;
        if (z != undefined) cmd += `Z${z} `;
        this.serialWriteWait(cmd).then(()=>{
            this.onBtnPos();
        });
    }
    async moveToAll(plist, start) {
        console.log("Marlin:moveToAll", plist.length);
        // console.log(plist);
        const tree = new (0, $467041f85a1988c8$exports.kdTree)(plist, (0, $38e49bb257334d2a$export$bdf465113f979d8f).distance, [
            "posX",
            "posY"
        ]);
        // const tree = new kdTree(PCB, plist, PCB.distance, ["posX", "posY"]);
        let startpad = new (0, $38e49bb257334d2a$export$4b43d51f29457384)("", start[0], start[1]);
        let search = tree.nearest(startpad, 1);
        let foundpad = search[0][0];
        let foundpads = []; // just for log
        this.onBtnAbs().then(async ()=>{
            // initial extrude
            await this.extrude(this.movementSettings.inite);
            try {
                let treeshot = "";
                // console.log('tree dump:');
                // console.log(JSON.stringify(tree.toJSON(), undefined, 4)); // dump tree
                for(let i = 0; i < plist.length; i++){
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
                for (let fpad of foundpads)console.log(`Marlin:moveToAll pad:${fpad.posX};\t${fpad.posY}`);
            } catch (what) {
                // if serialWriteWait fails, do something ?
                console.warn("Marlin:moveToAll: failed", what);
            }
            // retract
            await this.extrude(this.movementSettings.retracte);
        });
    }
    async extrude(value) {
        return new Promise((resolve)=>{
            this.serialWriteWait(`G0 E${value}`).then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    async moveAndBlob(foundpad) {
        return new Promise(async (resolve, reject)=>{
            let cmd = "G0 ";
            cmd += `X${foundpad.posX - this.zero[0]} `;
            cmd += `Y${foundpad.posY - this.zero[1]} `;
            try {
                let response = await this.serialWriteWait(cmd).then(()=>{
                    this.serialWriteWait("M83").then(()=>{
                        this.serialWriteWait(`G0 Z${this.movementSettings.zhop}`).then(()=>{
                            this.serialWriteWait(`G0 E${this.movementSettings.pade}`).then(()=>{
                                this.serialWriteWait("G0 Z0").then(()=>{
                                    this.serialWriteWait(`G0 Z${this.movementSettings.zhop}`).then(()=>{
                                        resolve("jo");
                                    });
                                });
                            });
                        });
                    });
                });
            // console.log('Marlin:moveToAll', response);
            } catch (what) {} // ignore disconnected for debugging
        });
    }
    blob() {
        this.onBtnAbs().then(()=>{
            this.serialWriteWait("M83").then(()=>{
                this.serialWriteWait("G0 Z3").then(()=>{
                    this.serialWriteWait("G0 E10").then(()=>{
                        this.serialWriteWait("G0 Z0").then(()=>{
                            this.serialWriteWait("G0 Z3");
                        });
                    });
                });
            });
        });
    }
    onSerialConnected() {
        console.log("Marlin: onSerialConnected");
        // read over first messages
        // setTimeout(() => {
        //     while(this.inputQueue.length > 0) {
        //         if (this.marlinDivPosition) {
        //             this.marlinDivPosition.innerHTML += `${this.inputQueue.pop()}`;
        //         }
        //     }
        this.setStatus($f20d29129c6828fa$var$Status.Ready);
        if (this.marlinDivStatus && this.marlinDivCommands) {
            this.setStatus($f20d29129c6828fa$var$Status.Ready);
            this.marlinDivCommands.className = this.marlinDivCommands.className.replace("w3-hide", "w3-show");
        }
        // }, 1000);
        // wait 3sec, run commands 'cold extrude','relative positioning','report position'
        setTimeout(()=>{
            this.onBtnCold().then(()=>{
                this.onBtnRel().then(()=>{
                    this.onBtnPos().then(()=>{
                        console.log("Marlin: onSerialConnected init sequence finished");
                    });
                });
            });
        }, 3000);
    }
    onSerialDisconnected() {
        console.log("Marlin: onSerialDisconnected");
        if (this.marlinDivStatus && this.marlinDivCommands) {
            this.setStatus($f20d29129c6828fa$var$Status.NC);
            this.marlinDivCommands.className = this.marlinDivCommands.className.replace("w3-show", "w3-hide");
        }
    }
    /**
     * Inherited from Device, adds Status message updates.
     * @param value
     * @param timeout
     * @returns
     */ async serialWriteWait(value, timeout = 10000) {
        return new Promise(async (resolve, reject)=>{
            this.setStatus($f20d29129c6828fa$var$Status.Busy);
            super.serialWriteWait(value, timeout).then((result)=>{
                resolve(result);
            }).catch((reason)=>{
                reject(reason);
            }).finally(()=>{
                this.setStatus($f20d29129c6828fa$var$Status.Ready);
            });
        });
    }
    setStatus(status) {
        let html = `unknown status ${status}`;
        switch(status){
            case $f20d29129c6828fa$var$Status.Ready:
                html = 'Status: <i class="fa-solid fa-plug"></i> ready';
                break;
            case $f20d29129c6828fa$var$Status.Busy:
                html = 'Status: <i class="fa-solid fa-plug-circle-bolt"></i> busy';
                break;
            case $f20d29129c6828fa$var$Status.NC:
                html = 'Status: <i class="fa-solid fa-plug-circle-xmark"></i> not connected';
                break;
        }
        if (this.marlinDivStatus) this.marlinDivStatus.innerHTML = html;
    }
    onBtnHome() {
        return new Promise((resolve)=>{
            this.serialWriteWait("G28").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
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
    }
    onBtnPos() {
        return new Promise((resolve)=>{
            this.serialWriteWait("M114").then((value)=>{
                // hier kommt eine zeile mit zahlen und eine mit ok
                console.log("onBtnPos", value);
                if (this.marlinDivPosition) this.marlinDivPosition.innerText = value;
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnAbs() {
        return new Promise((resolve)=>{
            this.serialWriteWait("G90").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnRel() {
        return new Promise((resolve)=>{
            this.serialWriteWait("G91").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnCold() {
        return new Promise((resolve)=>{
            this.serialWriteWait("M302 S0").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnXP() {
        this.serialWriteWait("G0 X10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnXM() {
        this.serialWriteWait("G0 X-10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnYP() {
        this.serialWriteWait("G0 Y10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnYM() {
        this.serialWriteWait("G0 Y-10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnZP() {
        this.serialWriteWait("G0 Z10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnZM() {
        this.serialWriteWait("G0 Z-10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnEP() {
        this.serialWriteWait("G0 E10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnEM() {
        this.serialWriteWait("G0 E-10").then((value)=>{
            this.onBtnPos();
        });
    }
    calcXY(event, canvas) {
        const factor = event.getModifierState("Shift") ? 0.05 : 0.5;
        const rect = canvas.getBoundingClientRect();
        // calculate the mouse click position
        const mouseX = (event.clientX - rect.left - rect.width / 2) * factor;
        const mouseY = (event.clientY - rect.top - rect.height / 2) * -1 * factor;
        return [
            mouseX,
            mouseY
        ];
    }
    onPadXYhover(event) {
        // console.log("onPadXYhover ", mouseX, mouseY);
        const pos = this.calcXY(event, this.padXY);
        if (this.marlinDivPosition) this.marlinDivPosition.innerHTML = `x:${pos[0].toFixed(2)} y:${pos[1].toFixed(2)} z:---`;
    }
    onPadXYclick(event) {
        const pos = this.calcXY(event, this.padXY);
        console.log("onPadXYclick ", pos[0], pos[1]);
        this.onBtnRel().then(()=>{
            this.moveTo(pos[0], pos[1], undefined, undefined);
        });
    }
    onPadZhover(event) {
        // console.log("onPadXYhover ", mouseX, mouseY);
        const pos = this.calcXY(event, this.padZ);
        if (this.marlinDivPosition) this.marlinDivPosition.innerHTML = `x:--- y:--- z:${pos[1].toFixed(2)}`;
    }
    onPadZclick(event) {
        console.log("onPadZ: ", event);
        const pos = this.calcXY(event, this.padZ);
        console.log("onPadZclick ", pos[0], pos[1]);
        this.onBtnRel().then(()=>{
            this.moveTo(0, 0, pos[1], undefined);
        });
    }
    /**
     * Creates some buttons for Marlin specific actions...
     */ initHtml() {
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
            `;
            this.marlinDivStatus = document.getElementById("marlinStatus");
            this.marlinDivPosition = document.getElementById("marlinPosition");
            this.marlinDivCommands = document.getElementById("marlinCommands");
            this.setStatus($f20d29129c6828fa$var$Status.NC);
            const marlinBtnHome = document.getElementById("marlinHome");
            if (marlinBtnHome) marlinBtnHome.onclick = this.onBtnHome.bind(this);
            const marlinBtnPos = document.getElementById("marlinPos");
            if (marlinBtnPos) marlinBtnPos.onclick = this.onBtnPos.bind(this);
            const marlinBtnRel = document.getElementById("marlinRel");
            if (marlinBtnRel) marlinBtnRel.onclick = this.onBtnRel.bind(this);
            const marlinBtnAbs = document.getElementById("marlinAbs");
            if (marlinBtnAbs) marlinBtnAbs.onclick = this.onBtnAbs.bind(this);
            const marlinBtnCold = document.getElementById("marlinCold");
            if (marlinBtnCold) marlinBtnCold.onclick = this.onBtnCold.bind(this);
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
            if (marlinBtnEP) marlinBtnEP.onclick = this.onBtnEP.bind(this);
            const marlinBtnEM = document.getElementById("marlinEM");
            if (marlinBtnEM) marlinBtnEM.onclick = this.onBtnEM.bind(this);
            const movePadXY = document.getElementById("marlinMovePadXY");
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
                } else console.warn("no context on movePadXY");
            } else console.warn("no movePadXY");
            const movePadZ = document.getElementById("marlinMovePadZ");
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
                } else console.warn("no context on movePadZ");
            } else console.warn("no movePadZ");
        }
    }
}



class $e520db273add8f05$export$7acfa6ed01010e37 {
    constructor(pcb){
        this.pcb = pcb;
    }
}


class $b9ff7f25c95f0c7d$export$fc5d4ca282e021b1 extends (0, $e520db273add8f05$export$7acfa6ed01010e37) {
    reNumFormat = /^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/;
    reMatchPad = /^(%AD)(D[0-9]+)([A-Za-z]+)[,]([-0-9.]+)[X]?([-0-9.]+)?[X]?([-0-9.]+)?/;
    reMatchPadCoordInit = /^([DG][0-9]+)[*]/;
    reMatchPadCoord = /^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/;
    _cancel = false;
    floatFracts = 1;
    floatDezis = 1;
    lastPad = "";
    constructor(pcb){
        super(pcb);
    }
    parseFile(file) {
        return new Promise((resolve)=>{
            file.arrayBuffer().then((buf)=>{
                $b9ff7f25c95f0c7d$var$arrayBufferToString(buf, "UTF-8", (text)=>{
                    this.processGerberText(text).finally(()=>{
                        resolve();
                    });
                });
            });
        });
    }
    cancel() {
        this._cancel = true;
    }
    async processGerberText(text) {
        // console.log(text);
        // translate line ends...
        text = text.replace(/\r/g, ""); // remove windows trash
        const lines = text.split("\n");
        let lineNr = 1;
        for (let line of lines){
            lineNr++;
            if (this._cancel) {
                this._cancel = false;
                break;
            }
            // console.log(`gerber(${lineNr}/${lines.length}): `);
            await this.processGerberLine(line);
            if (this.processCB) this.processCB(lineNr * 100 / lines.length);
        } // for
        this.pcb.retree();
    }
    async processGerberLine(line) {
        return new Promise((resolve)=>{
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
                if (this.padsField) this.padsField.innerHTML += `${matchPad[2]} ${matchPad[3]} ${matchPad[4]} ${matchPad[5]}<br>`;
                if (matchPad[3] == "RoundRect") // kicad macro schnulli
                this.pcb.addPadStyle(matchPad[2], matchPad[3], Math.abs(parseFloat(matchPad[5])), Math.abs(parseFloat(matchPad[6])));
                else this.pcb.addPadStyle(matchPad[2], matchPad[3], parseFloat(matchPad[4]), parseFloat(matchPad[5]));
            }
            // Dxx* command - should be pad draw
            const matchPadCoordInit = this.reMatchPadCoordInit.exec(line); //line.match();///);
            if (matchPadCoordInit) // console.log(matchPadCoordInit);
            this.lastPad = matchPadCoordInit[1];
            // a pad line: "X379984Y963930D03*"
            const matchPadCoord = this.reMatchPadCoord.exec(line); // line.match();///);
            if (matchPadCoord) {
                if (this.lastPad.startsWith("D")) {
                    // if (1) {
                    // ignore and return ...
                    // resolve();
                    // console.log(matchPadCoord);
                    let sx = matchPadCoord[2];
                    let sy = matchPadCoord[4];
                    const len = this.floatDezis + this.floatFracts;
                    // fill freak's leading zeros
                    while(sx.length < len)sx = `0${sx}`;
                    while(sy.length < len)sy = `0${sy}`;
                    // make a freak'n float
                    let fx = 0.0;
                    let fy = 0.0;
                    sx = `${sx.substring(0, this.floatDezis)}.${sx.substring(this.floatDezis)}`;
                    sy = `${sy.substring(0, this.floatDezis)}.${sy.substring(this.floatDezis)}`;
                    fx = parseFloat(sx);
                    fy = parseFloat(sy);
                    if (matchPadCoord[1] == "-") fx = fx * -1;
                    if (matchPadCoord[3] == "-") fy = fy * -1;
                    fy;
                    if (this.coordsField) this.coordsField.innerHTML += `${this.lastPad}:  x:${fx} y:${fy} <br>`;
                    this.pcb.addPad(this.lastPad, fx, fy);
                // console.log(`gerber: pad ${lastPad}, ${fx}, ${fy}`);
                } else console.log(`ignoring ${this.lastPad}`);
            }
            this.pcb.center();
            setTimeout(resolve, 0); // this enables the progressbar / UI updates !
        });
    }
}
// found on se web...
function $b9ff7f25c95f0c7d$var$arrayBufferToString(buffer, encoding, callback) {
    var blob = new Blob([
        buffer
    ], {
        type: "text/plain"
    });
    var reader = new FileReader();
    reader.onload = (evt)=>{
        if (evt.target) callback(evt.target.result);
    };
    reader.readAsText(blob, encoding);
}
function $b9ff7f25c95f0c7d$var$stringToArrayBuffer(string, encoding, callback) {
    var blob = new Blob([
        string
    ], {
        type: "text/plain;charset=" + encoding
    });
    var reader = new FileReader();
    reader.onload = (evt)=>{
        if (evt.target) callback(evt.target.result);
    };
    reader.readAsArrayBuffer(blob);
}


// simpler !!! const infoDropDown = document.querySelector<HTMLDivElement>('#infoDropDown');
const $7f3876a5f3d47d5a$var$body = document.getElementsByTagName("body")[0];
const $7f3876a5f3d47d5a$var$messageElem = document.getElementById("messageElem");
const $7f3876a5f3d47d5a$var$uploadButton = document.getElementById("uploadButton");
const $7f3876a5f3d47d5a$var$testFileButton = document.getElementById("testFileButton");
const $7f3876a5f3d47d5a$var$padsField = document.getElementById("padsField");
const $7f3876a5f3d47d5a$var$coords = document.getElementById("Coords");
const $7f3876a5f3d47d5a$var$coordsField = document.getElementById("coordsField");
const $7f3876a5f3d47d5a$var$dropZone = document.getElementById("dropZone");
const $7f3876a5f3d47d5a$var$canvas = document.getElementById("canvas");
const $7f3876a5f3d47d5a$var$debug = document.getElementById("debug");
const $7f3876a5f3d47d5a$var$progress = document.getElementById("progress");
const $7f3876a5f3d47d5a$var$progressbar = document.getElementById("progressbar");
const $7f3876a5f3d47d5a$var$contextMenu = document.getElementById("contextMenu");
const $7f3876a5f3d47d5a$var$progressCancel = document.getElementById("progressCancel");
const $7f3876a5f3d47d5a$var$menuSetZero = document.getElementById("menuSetZero");
const $7f3876a5f3d47d5a$var$menuMoveTo = document.getElementById("menuMoveTo");
const $7f3876a5f3d47d5a$var$menuMoveAll = document.getElementById("menuMoveAll");
const $7f3876a5f3d47d5a$var$menuBlob = document.getElementById("menuBlob");
const $7f3876a5f3d47d5a$var$main = document.getElementById("main");
const $7f3876a5f3d47d5a$var$openSidebarButton = document.getElementById("openSidebar");
const $7f3876a5f3d47d5a$var$header = document.getElementsByTagName("header")[0];
const $7f3876a5f3d47d5a$var$footer = document.getElementById("footer");
let $7f3876a5f3d47d5a$var$messageClearTimeout = undefined;
let $7f3876a5f3d47d5a$var$ctx = null;
let $7f3876a5f3d47d5a$var$mouse, $7f3876a5f3d47d5a$var$grid;
let $7f3876a5f3d47d5a$var$pcb;
let $7f3876a5f3d47d5a$var$device = new (0, $f20d29129c6828fa$export$6d4db5538ef246e9)();
let $7f3876a5f3d47d5a$var$movementSettings = new (0, $66c36f122a80174e$export$292a9937fd0445c5)();
function $7f3876a5f3d47d5a$var$init() {
    if ($7f3876a5f3d47d5a$var$testFileButton && $7f3876a5f3d47d5a$var$uploadButton && $7f3876a5f3d47d5a$var$menuSetZero && $7f3876a5f3d47d5a$var$menuMoveTo && $7f3876a5f3d47d5a$var$menuMoveAll && $7f3876a5f3d47d5a$var$menuBlob && $7f3876a5f3d47d5a$var$progressCancel && $7f3876a5f3d47d5a$var$padsField && $7f3876a5f3d47d5a$var$coordsField && $7f3876a5f3d47d5a$var$body && $7f3876a5f3d47d5a$var$canvas && $7f3876a5f3d47d5a$var$footer) {
        $7f3876a5f3d47d5a$var$ctx = $7f3876a5f3d47d5a$var$canvas.getContext("2d");
        $7f3876a5f3d47d5a$var$canvas.addEventListener("mousemove", (event)=>{
            if ($7f3876a5f3d47d5a$var$pcb) $7f3876a5f3d47d5a$var$pcb.mouseMove(event);
            event.preventDefault();
        }, false);
        $7f3876a5f3d47d5a$var$canvas.addEventListener("mousedown", (event)=>{
            if ($7f3876a5f3d47d5a$var$pcb) $7f3876a5f3d47d5a$var$pcb.mouseDown(event);
            event.preventDefault();
        }, false);
        $7f3876a5f3d47d5a$var$canvas.addEventListener("mouseup", (event)=>{
            if ($7f3876a5f3d47d5a$var$pcb) $7f3876a5f3d47d5a$var$pcb.mouseUp(event);
            event.preventDefault();
        }, false);
        $7f3876a5f3d47d5a$var$canvas.addEventListener("mouseout", (event)=>{
            if ($7f3876a5f3d47d5a$var$pcb) $7f3876a5f3d47d5a$var$pcb.mouseOut(event);
            event.preventDefault();
        }, false);
        $7f3876a5f3d47d5a$var$canvas.addEventListener("wheel", (event)=>{
            if ($7f3876a5f3d47d5a$var$pcb) $7f3876a5f3d47d5a$var$pcb.mouseWheel(event);
            event.preventDefault();
        }, false);
        $7f3876a5f3d47d5a$var$uploadButton.onclick = ()=>{
            var uploadFileEle = document.createElement("input");
            uploadFileEle.type = "file";
            uploadFileEle.click();
            uploadFileEle.addEventListener("change", (ev)=>{
                console.log(ev);
                // check if user had selected a file
                if (uploadFileEle.files && uploadFileEle.files.length > 0) {
                    let file = uploadFileEle.files[0];
                    console.log(file);
                    console.log(`file: ${file.name} size:${file.size}`);
                    $7f3876a5f3d47d5a$var$processGerberFile(file);
                } else {
                    alert("please choose a file");
                    return;
                }
            });
            return false;
        };
        $7f3876a5f3d47d5a$var$testFileButton.onclick = ()=>{
            fetch("https://raw.githubusercontent.com/mariosgit/SolderPasteDispenser/main/tests/blades_v40-PasteTop.gbr").then((res)=>res.blob()).then((blob)=>{
                var file = new File([
                    blob
                ], "blades_v40-PasteTop.gbr");
                $7f3876a5f3d47d5a$var$processGerberFile(file);
            }).catch((reason)=>{
                console.warn(reason);
            });
        };
        $7f3876a5f3d47d5a$var$menuSetZero.onclick = (event)=>{
            if ($7f3876a5f3d47d5a$var$contextMenu) $7f3876a5f3d47d5a$var$contextMenu.className = $7f3876a5f3d47d5a$var$contextMenu.className.replace("w3-show", "w3-hide");
            $7f3876a5f3d47d5a$var$pcb.setZero();
            $7f3876a5f3d47d5a$var$device.setZero($7f3876a5f3d47d5a$var$pcb.getZero()); // device must substract "zero" from all coords
        };
        $7f3876a5f3d47d5a$var$menuMoveTo.onclick = (event)=>{
            if ($7f3876a5f3d47d5a$var$contextMenu) $7f3876a5f3d47d5a$var$contextMenu.className = $7f3876a5f3d47d5a$var$contextMenu.className.replace("w3-show", "w3-hide");
            // console.log(event);
            // find the coords !!!
            // !!! need to be relative to zero !!! uuuhhh
            // let pads = pcb.getSelected();
            // if (pads.length > 0) {
            //     let pad: Pad = pads[0];
            //     console.log(pad);
            //     device.moveTo(pad.posX, pad.posY, undefined, undefined);
            // }
            let pos = $7f3876a5f3d47d5a$var$pcb.getSelectedZero(); // lower left of selection
            $7f3876a5f3d47d5a$var$device.moveTo(pos[0], pos[1], undefined, undefined);
        };
        $7f3876a5f3d47d5a$var$menuMoveAll.onclick = (event)=>{
            if ($7f3876a5f3d47d5a$var$contextMenu) $7f3876a5f3d47d5a$var$contextMenu.className = $7f3876a5f3d47d5a$var$contextMenu.className.replace("w3-show", "w3-hide");
            let plist = $7f3876a5f3d47d5a$var$pcb.getSelected();
            let pzero = $7f3876a5f3d47d5a$var$pcb.getSelectedZero();
            $7f3876a5f3d47d5a$var$device.moveToAll(plist, pzero);
        };
        $7f3876a5f3d47d5a$var$menuBlob.onclick = ()=>{
            if ($7f3876a5f3d47d5a$var$contextMenu) $7f3876a5f3d47d5a$var$contextMenu.className = $7f3876a5f3d47d5a$var$contextMenu.className.replace("w3-show", "w3-hide");
            $7f3876a5f3d47d5a$var$device.blob();
        };
        $7f3876a5f3d47d5a$var$body.ondrop = (ev)=>{
            ev.preventDefault();
            console.log(ev);
            if (ev.dataTransfer && ev.dataTransfer.items) // Use DataTransferItemList interface to access the file(s)
            [
                ...ev.dataTransfer.items
            ].forEach((item, i)=>{
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        console.log(`… item[${i}].name = ${file.name}`);
                        $7f3876a5f3d47d5a$var$processGerberFile(file);
                    }
                }
            });
            else if (ev.dataTransfer) // Use DataTransfer interface to access the file(s)
            [
                ...ev.dataTransfer.files
            ].forEach((file, i)=>{
                if (file) {
                    console.log(`… file[${i}].name = ${file.name}`);
                    $7f3876a5f3d47d5a$var$processGerberFile(file);
                }
            });
        };
        $7f3876a5f3d47d5a$var$body.ondragover = (ev)=>{
            // console.log('File(s) in drop zone');
            // Prevent default behavior (Prevent file from being opened)
            ev.preventDefault();
        };
        $7f3876a5f3d47d5a$var$canvas.oncontextmenu = (ev)=>{
            // console.log('oncontextmenu',ev);
            ev.preventDefault();
            if ($7f3876a5f3d47d5a$var$contextMenu) {
                $7f3876a5f3d47d5a$var$contextMenu.style.left = `${ev.pageX}px`;
                $7f3876a5f3d47d5a$var$contextMenu.style.top = `${ev.pageY}px`;
                $7f3876a5f3d47d5a$var$contextMenu.className = $7f3876a5f3d47d5a$var$contextMenu.className.replace("w3-hide", "w3-show");
            }
        };
        $7f3876a5f3d47d5a$var$canvas.onmouseup = (ev)=>{
            if ($7f3876a5f3d47d5a$var$contextMenu) $7f3876a5f3d47d5a$var$contextMenu.className = $7f3876a5f3d47d5a$var$contextMenu.className.replace("w3-show", "w3-hide");
        };
        if ($7f3876a5f3d47d5a$var$ctx) {
            $7f3876a5f3d47d5a$var$pcb = new (0, $38e49bb257334d2a$export$bdf465113f979d8f)();
            $7f3876a5f3d47d5a$var$pcb.setCanvas($7f3876a5f3d47d5a$var$ctx, $7f3876a5f3d47d5a$var$canvas);
            $7f3876a5f3d47d5a$var$mouse = new (0, $897ca68663b1f638$exports.Mouse)($7f3876a5f3d47d5a$var$ctx, $7f3876a5f3d47d5a$var$canvas);
            $7f3876a5f3d47d5a$var$mouse.track();
            $7f3876a5f3d47d5a$var$grid = new (0, $897ca68663b1f638$exports.Grid)();
            $7f3876a5f3d47d5a$var$grid.step = 2;
            $7f3876a5f3d47d5a$var$grid.lineWidth = 0.03;
            $7f3876a5f3d47d5a$var$grid.boldWidth = 0.05;
            $7f3876a5f3d47d5a$var$grid.createLines($7f3876a5f3d47d5a$var$canvas);
        }
        globalThis.resize();
        window.requestAnimationFrame($7f3876a5f3d47d5a$var$update);
    } else console.error("missing html elements !");
}
function $7f3876a5f3d47d5a$var$message(text) {
    if ($7f3876a5f3d47d5a$var$messageClearTimeout) window.clearTimeout($7f3876a5f3d47d5a$var$messageClearTimeout);
    if ($7f3876a5f3d47d5a$var$messageElem) {
        $7f3876a5f3d47d5a$var$messageElem.innerHTML = `${text}`;
        $7f3876a5f3d47d5a$var$messageClearTimeout = window.setTimeout($7f3876a5f3d47d5a$var$messageClear, 10000);
    }
}
function $7f3876a5f3d47d5a$var$messageClear() {
    $7f3876a5f3d47d5a$var$messageClearTimeout = undefined;
    if ($7f3876a5f3d47d5a$var$messageElem) $7f3876a5f3d47d5a$var$messageElem.innerHTML = "";
}
function $7f3876a5f3d47d5a$var$update() {
    if ($7f3876a5f3d47d5a$var$canvas && $7f3876a5f3d47d5a$var$ctx) {
        window.requestAnimationFrame($7f3876a5f3d47d5a$var$update);
        $7f3876a5f3d47d5a$var$ctx.setTransform($7f3876a5f3d47d5a$var$pcb ? $7f3876a5f3d47d5a$var$pcb.zoom : 1, 0, 0, $7f3876a5f3d47d5a$var$pcb ? $7f3876a5f3d47d5a$var$pcb.zoom : 1, 0, 0);
        $7f3876a5f3d47d5a$var$ctx.clearRect(0, 0, $7f3876a5f3d47d5a$var$canvas.width, $7f3876a5f3d47d5a$var$canvas.height);
        // grid.draw(ctx, canvas);
        // grid.step = pcb?10.0/pcb.zoom:10.0;
        // grid.createLines(canvas);
        $7f3876a5f3d47d5a$var$grid.lines.forEach((line)=>line.draw($7f3876a5f3d47d5a$var$ctx));
        $7f3876a5f3d47d5a$var$mouse.draw();
        $7f3876a5f3d47d5a$var$ctx.setTransform(1, 0, 0, -1, 0, $7f3876a5f3d47d5a$var$canvas.height);
        // ctx.scale(1,-1); // flip display y
        if ($7f3876a5f3d47d5a$var$pcb) $7f3876a5f3d47d5a$var$pcb.draw();
    }
}
async function $7f3876a5f3d47d5a$var$processGerberFile(file) {
    if ($7f3876a5f3d47d5a$var$padsField && $7f3876a5f3d47d5a$var$coordsField && $7f3876a5f3d47d5a$var$ctx && $7f3876a5f3d47d5a$var$canvas && $7f3876a5f3d47d5a$var$progress && $7f3876a5f3d47d5a$var$progressbar && $7f3876a5f3d47d5a$var$progressCancel && $7f3876a5f3d47d5a$var$dropZone) {
        $7f3876a5f3d47d5a$var$pcb = new (0, $38e49bb257334d2a$export$bdf465113f979d8f)();
        $7f3876a5f3d47d5a$var$pcb.setCanvas($7f3876a5f3d47d5a$var$ctx, $7f3876a5f3d47d5a$var$canvas);
        let parser = new (0, $b9ff7f25c95f0c7d$export$fc5d4ca282e021b1)($7f3876a5f3d47d5a$var$pcb);
        $7f3876a5f3d47d5a$var$padsField.innerHTML = "";
        $7f3876a5f3d47d5a$var$coordsField.innerHTML = "";
        $7f3876a5f3d47d5a$var$dropZone.innerText = file.name;
        $7f3876a5f3d47d5a$var$progress.style.display = "block";
        parser.padsField = $7f3876a5f3d47d5a$var$padsField;
        parser.coordsField = $7f3876a5f3d47d5a$var$coordsField;
        $7f3876a5f3d47d5a$var$progressCancel.onclick = ()=>{
            parser.cancel();
        };
        parser.processCB = (value)=>{
            if ($7f3876a5f3d47d5a$var$progressbar) $7f3876a5f3d47d5a$var$progressbar.style.width = `${value}%`;
        };
        await parser.parseFile(file);
        $7f3876a5f3d47d5a$var$pcb.zoomToFit([
            $7f3876a5f3d47d5a$var$canvas.width,
            $7f3876a5f3d47d5a$var$canvas.height
        ]);
        $7f3876a5f3d47d5a$var$progress.style.display = "none";
    }
}
globalThis.accordionToggler = (id)=>{
    var elem = document.getElementById(id);
    if (elem) {
        if (elem.className.indexOf("w3-show") == -1 && elem.className.indexOf("w3-hide") == -1) elem.className += " w3-show";
        else if (elem.className.indexOf("w3-show") != -1) elem.className = elem.className.replace("w3-show", "w3-hide");
        else elem.className = elem.className.replace("w3-hide", "w3-show");
    } else console.warn("accordionToggler no elem with id:", id);
    globalThis.resize();
};
globalThis.openSidebar = ()=>{
    if ($7f3876a5f3d47d5a$var$main && $7f3876a5f3d47d5a$var$debug && $7f3876a5f3d47d5a$var$openSidebarButton) {
        $7f3876a5f3d47d5a$var$main.style.marginRight = "350px";
        $7f3876a5f3d47d5a$var$debug.style.width = "350px";
        $7f3876a5f3d47d5a$var$debug.style.display = "block";
        $7f3876a5f3d47d5a$var$openSidebarButton.style.display = "none";
    }
};
globalThis.closeSidebar = ()=>{
    if ($7f3876a5f3d47d5a$var$main && $7f3876a5f3d47d5a$var$debug && $7f3876a5f3d47d5a$var$openSidebarButton) {
        $7f3876a5f3d47d5a$var$main.style.marginRight = "0px";
        $7f3876a5f3d47d5a$var$debug.style.display = "none";
        $7f3876a5f3d47d5a$var$openSidebarButton.style.display = "inline-block";
    }
};
globalThis.zoomToFit = ()=>{
    if ($7f3876a5f3d47d5a$var$pcb && $7f3876a5f3d47d5a$var$canvas) $7f3876a5f3d47d5a$var$pcb.zoomToFit([
        $7f3876a5f3d47d5a$var$canvas.width,
        $7f3876a5f3d47d5a$var$canvas.height
    ]);
};
globalThis.rotateRight = ()=>{
    $7f3876a5f3d47d5a$var$pcb && $7f3876a5f3d47d5a$var$canvas;
    $7f3876a5f3d47d5a$var$message("m\xfcsste ma einer implementieren, ne");
};
globalThis.moveSettings = ()=>{
    // set values !!!
    const erate = document.getElementById("moveSetERate");
    const inite = document.getElementById("moveSetInitE");
    const pade = document.getElementById("moveSetPadE");
    const retracte = document.getElementById("moveSetRetractE");
    const zhop = document.getElementById("moveSetZHop");
    erate.value = `${$7f3876a5f3d47d5a$var$movementSettings.erate}`;
    inite.value = `${$7f3876a5f3d47d5a$var$movementSettings.inite}`;
    pade.value = `${$7f3876a5f3d47d5a$var$movementSettings.pade}`;
    retracte.value = `${$7f3876a5f3d47d5a$var$movementSettings.retracte}`;
    zhop.value = `${$7f3876a5f3d47d5a$var$movementSettings.zhop}`;
    globalThis.accordionToggler("moveSettingsPanel");
};
globalThis.defaultMoveSettings = ()=>{
    $7f3876a5f3d47d5a$var$movementSettings = new (0, $66c36f122a80174e$export$292a9937fd0445c5)();
    if ($7f3876a5f3d47d5a$var$device.applyMoveSettings) $7f3876a5f3d47d5a$var$device.applyMoveSettings($7f3876a5f3d47d5a$var$movementSettings);
    globalThis.accordionToggler("moveSettingsPanel");
    console.log("applyMoveSettings", $7f3876a5f3d47d5a$var$movementSettings);
};
globalThis.applyMoveSettings = ()=>{
    // get values !!!
    const erate = document.getElementById("moveSetERate");
    const inite = document.getElementById("moveSetInitE");
    const pade = document.getElementById("moveSetPadE");
    const retracte = document.getElementById("moveSetRetractE");
    const zhop = document.getElementById("moveSetZHop");
    $7f3876a5f3d47d5a$var$movementSettings.erate = parseFloat(erate.value);
    $7f3876a5f3d47d5a$var$movementSettings.inite = parseFloat(inite.value);
    $7f3876a5f3d47d5a$var$movementSettings.pade = parseFloat(pade.value);
    $7f3876a5f3d47d5a$var$movementSettings.retracte = parseFloat(retracte.value);
    $7f3876a5f3d47d5a$var$movementSettings.zhop = parseFloat(zhop.value);
    if ($7f3876a5f3d47d5a$var$device.applyMoveSettings) $7f3876a5f3d47d5a$var$device.applyMoveSettings($7f3876a5f3d47d5a$var$movementSettings);
    globalThis.accordionToggler("moveSettingsPanel");
    console.log("applyMoveSettings", $7f3876a5f3d47d5a$var$movementSettings);
};
globalThis.resize = ()=>{
    if ($7f3876a5f3d47d5a$var$canvas && $7f3876a5f3d47d5a$var$header && $7f3876a5f3d47d5a$var$footer && $7f3876a5f3d47d5a$var$debug && $7f3876a5f3d47d5a$var$coords) {
        $7f3876a5f3d47d5a$var$canvas.width = innerWidth;
        $7f3876a5f3d47d5a$var$canvas.height = innerHeight - $7f3876a5f3d47d5a$var$header.getBoundingClientRect().height - $7f3876a5f3d47d5a$var$footer.getBoundingClientRect().height;
        $7f3876a5f3d47d5a$var$mouse.draw();
        $7f3876a5f3d47d5a$var$grid.draw($7f3876a5f3d47d5a$var$ctx, $7f3876a5f3d47d5a$var$canvas);
        // height of debug is innerHeight - margin top/bottom more or less - footer.height
        // console.log('resize: margin', debug.getBoundingClientRect().top);
        let dmaxheight = innerHeight - $7f3876a5f3d47d5a$var$footer.getBoundingClientRect().height; // canvas.height + header.getBoundingClientRect().height - 16;
        // debug.style.height = `${dheight}px`; // 16 is marginTop
        // console.log('resize: inner height', innerHeight);
        // console.log('resize: debug height', dheight);
        // height of all other elements in debug
        let height = 0;
        for (let child of $7f3876a5f3d47d5a$var$debug.children){
            let elem = child;
            // console.log(`resize:   ${child.id} ${elem.clientHeight} ${elem.className}`);
            if (elem.className.indexOf("w3-hide") != -1) continue;
            height += elem.clientHeight;
        }
        // console.log('resize: debug content height', height);
        // so far so good
        // if coords is shown, set debug size to max
        // if coords is shown, give it all the rest of the space
        // console.log('resize coords ', coords.className.indexOf('w3-hide'));
        if ($7f3876a5f3d47d5a$var$coords.className.indexOf("w3-hide") != -1) {
            // console.log('resize coords is NOT visible');
            $7f3876a5f3d47d5a$var$debug.style.height = `${height + 16}px`;
            $7f3876a5f3d47d5a$var$coords.style.height = `${16}px`; // egal ?
        } else {
            // console.log('resize coords is visible');
            height -= $7f3876a5f3d47d5a$var$coords.getBoundingClientRect().height; // do not count coords to hight
            $7f3876a5f3d47d5a$var$debug.style.height = `${dmaxheight}px`;
            $7f3876a5f3d47d5a$var$coords.style.height = `${dmaxheight - height - 16}px`;
        }
    }
};
document.addEventListener("DOMContentLoaded", $7f3876a5f3d47d5a$var$init);
window.addEventListener("resize", (val)=>{
    // console.log(`resize: ${val}`);
    globalThis.resize();
});


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEVBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsTUFBTSxNQUFNLENBQUMsR0FBRSxTQUFTLE1BQU0sQ0FBQztvQkFBRyxFQUFFLElBQUksSUFBRyxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsSUFBSSxHQUFDLENBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUUsRUFBRSxLQUFLLEdBQUMsSUFBRSxLQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRyxLQUFLLEdBQUMsRUFBRSxFQUFDLElBQUUsSUFBRSxFQUFFLE1BQU0sR0FBQyxJQUFFLEtBQUcsR0FBRztvQkFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBRyxFQUFFLE9BQU8sSUFBRyxJQUFJO2dCQUFBO1lBQUM7U0FBRSxHQUFFLENBQUM7SUFBQTtJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBRyxDQUFFLENBQUEsYUFBYSxDQUFBLEdBQUcsTUFBTSxJQUFJLFVBQVUscUNBQW9DO0lBQUE7SUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFO1lBQUMsRUFBRSxVQUFVLEdBQUMsRUFBRSxVQUFVLElBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBWSxHQUFDLENBQUMsR0FBRSxXQUFVLEtBQUksQ0FBQSxFQUFFLFFBQVEsR0FBQyxDQUFDLENBQUEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUU7UUFBQTtJQUFDO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsT0FBTyxLQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUMsSUFBRyxLQUFHLEVBQUUsR0FBRSxJQUFHLENBQUM7SUFBQTtJQUFDLElBQUksSUFBRSxXQUFVO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztRQUFBO1FBQUMsT0FBTyxFQUFFLEdBQUU7WUFBQztnQkFBQyxLQUFJO2dCQUFPLE9BQU0sU0FBUyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUk7b0JBQUMsRUFBRSxJQUFJLElBQUcsRUFBRSxTQUFTLElBQUcsRUFBRSxXQUFXLEdBQUMsR0FBRSxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsSUFBRyxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUcsRUFBRSxNQUFNLElBQUcsRUFBRSxPQUFPLEVBQUU7Z0JBQUE7WUFBQztTQUFFLEdBQUUsQ0FBQztJQUFBLEtBQUksSUFBRSxXQUFVO1FBQUMsU0FBUyxJQUFHO1lBQUMsSUFBSSxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxNQUFNLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsVUFBVSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxnQkFBZ0I7WUFBQyxFQUFFLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUk7UUFBQTtRQUFDLE9BQU8sRUFBRSxHQUFFO1lBQUM7Z0JBQUMsS0FBSTtnQkFBYyxPQUFNLFNBQVMsQ0FBQyxFQUFDO29CQUFDLElBQUksSUFBSSxJQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLEVBQUUsRUFBQyxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxLQUFHLEVBQUU7d0JBQUMsSUFBSSxJQUFFLElBQUUsS0FBRzt3QkFBRSxFQUFFLElBQUksQ0FBQyxJQUFFLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxNQUFNLElBQUUsSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLE1BQU0sQ0FBQztvQkFBQztvQkFBQyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsS0FBRyxFQUFFO3dCQUFDLElBQUksSUFBRSxJQUFFLEtBQUc7d0JBQUUsRUFBRSxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEtBQUssRUFBQyxLQUFHLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsS0FBSyxFQUFDLEVBQUU7b0JBQUM7b0JBQUMsSUFBSSxDQUFDLEtBQUssR0FBQztnQkFBQztZQUFDO1lBQUU7Z0JBQUMsS0FBSTtnQkFBVyxPQUFNLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUk7b0JBQUMsRUFBRSxJQUFJLElBQUcsRUFBRSxJQUFJLEdBQUMsR0FBRSxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsUUFBUSxDQUFDLEtBQUksR0FBRSxHQUFHO29CQUFDLElBQUksSUFBSSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsS0FBSyxFQUFDLEtBQUcsSUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUUsR0FBRTtvQkFBSSxJQUFJLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQyxLQUFHLElBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFFLEdBQUUsSUFBRTtvQkFBSSxFQUFFLE9BQU87Z0JBQUU7WUFBQztZQUFFO2dCQUFDLEtBQUk7Z0JBQU8sT0FBTSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUM7d0JBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztvQkFBRSxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRSxFQUFFO2dCQUFBO1lBQUM7U0FBRSxHQUFFLENBQUM7SUFBQTtJQUFJLEVBQUUsS0FBSyxHQUFDLEdBQUUsRUFBRSxJQUFJLEdBQUMsQ0FBQztJQUE0RCw0QkFBZTtBQUErRSxDQUFBOztBREFubUg7QUVBQSxRQUFRO0FBQ1IsdUVBQXVFO0FBQ3ZFLFFBQVE7QUFDUiwwRkFBMEY7QUFXbkYsTUFBTTtJQUNULFFBQVEsR0FBRztJQUNYLFFBQVEsR0FBRztJQUNYLE9BQVEsRUFBRTtJQUNWLFdBQVcsSUFBSTtJQUNmLE9BQU8sRUFBRTtBQUNiO0FBRU8sTUFBTTtJQWFULFlBQW9CLEdBQUc7SUFFYixhQUF1QixFQUFFLENBQUM7SUFFcEMsYUFBYztRQUNWLElBQUksQ0FBQyxXQUFXLEdBQTZCLFNBQVMsY0FBYyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLEdBQTZCLFNBQVMsY0FBYyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxnQkFBZ0IsR0FBNkIsU0FBUyxjQUFjLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBNEIsU0FBUyxjQUFjLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBMkIsU0FBUyxjQUFjLENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBMEIsU0FBUyxjQUFjLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsR0FBMEIsU0FBUyxjQUFjLENBQUM7UUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBMEIsU0FBUyxjQUFjLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSTtRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzdHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUMvRCw0REFBNEQ7WUFDNUQsaUVBQWlFO1lBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUk7UUFDbEUsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXO0lBQ3BCO0lBd0JBOztLQUVDLEdBQ0QsTUFBYSxnQkFBZ0I7UUFDekIsOENBQThDO1FBQ3hDLFVBQVcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFTO1lBQ2pELFFBQVEsR0FBRyxDQUFDLGlCQUFpQjtZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3hCLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBVztZQUNqQix3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQjtJQUNKO0lBRUEsTUFBYSxvQkFBb0IsR0FBVyxFQUFFLEdBQVcsRUFBRTtRQUN2RCxLQUFLLElBQUksUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFFO1lBQ3pCLFFBQVEsR0FBRyxDQUFDLENBQUMsOENBQThDLENBQUMsRUFBRSxLQUFLLE9BQU87WUFDMUUsTUFBTSxnQkFBRSxhQUFZLGVBQUUsWUFBVyxFQUFFLEdBQUcsS0FBSyxPQUFPO1lBQ2xELElBQUksZ0JBQWdCLE9BQU8sZUFBZSxLQUFLO2dCQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUNwQixLQUFNO1lBQ1YsQ0FBQztRQUNMO0lBQ0o7SUFFQTs7S0FFQyxHQUNELE1BQWEsbUJBQW1CO1FBQzVCLElBQUksSUFBSSxDQUFDLElBQUksRUFDVCxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQU07WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2hCLFFBQVEsR0FBRyxDQUFDO1FBQ2hCLEdBQUcsS0FBSyxDQUFDLENBQUMsUUFBVTtZQUNoQixRQUFRLElBQUksQ0FBQztRQUNqQjtJQUVSO0lBRUE7O0tBRUMsR0FDRCxNQUFhLGdCQUFnQixLQUFhLEVBQUUsVUFBa0IsS0FBSyxFQUFtQjtRQUNsRixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxRQUFnQixPQUFPLFNBQVMsU0FBVztZQUNsRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSTtnQkFDQSxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNqQixzQ0FBc0M7Z0JBQ3RDLElBQUksWUFBWSxLQUFLO2dCQUNyQixNQUFNLFdBQVc7Z0JBQ2pCLElBQUksVUFBVTtnQkFDZCxNQUFPLENBQUMsVUFBVztvQkFDZixZQUFZLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDbkMsVUFBVSxVQUFVO29CQUNwQixJQUFJLFdBQVcsR0FDWCxLQUFNO2dCQUNkO2dCQUNBLCtFQUErRTtnQkFDL0UsbUVBQW1FO2dCQUNuRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUc7b0JBQzVCLE1BQU0sTUFBYyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7b0JBQ3ZDLGtEQUFrRDtvQkFDbEQsUUFBUTtnQkFDWixPQUNJLDJDQUEyQztnQkFDM0MsT0FBTztZQUVmLEVBQUUsT0FBTyxLQUFLO2dCQUNWLHFCQUFxQjtnQkFDckIsT0FBTztZQUNYO2lCQUVBLDJCQUEyQjtZQUMzQixPQUFPO1FBR2Y7SUFDSjtJQUdBOzs7S0FHQyxHQUNELEFBQU8sZ0JBQWdCLEtBQWlCLEVBQUU7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLE1BQU0sY0FBYyxJQUFJLGdDQUFnQztZQUN4RCxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7SUFDTDtJQUVBOzs7S0FHQyxHQUNELE1BQWEsa0JBQWtCLEtBQWlCLEVBQUU7UUFDOUMsSUFBSSxJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztnQkFDakMsSUFBSSxLQUFLLE1BQU0sR0FBRyxHQUNkLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFekIsT0FDSSxRQUFRLElBQUksQ0FBQztTQUVwQjtJQUNMO0lBRUEsZ0VBQWdFLEdBRWhFLE1BQWMsY0FBYztRQUN4QixJQUFJLFNBQVMsS0FBSztRQUNsQixJQUFJLFlBQVksV0FBVztZQUN2QixJQUFJLENBQUMsV0FBVztZQUNWLFVBQVcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFVO2dCQUMzRCwwRUFBMEU7Z0JBQzFFLFFBQVEsR0FBRyxDQUFDLHVCQUF1QjtnQkFDbkMsSUFBSSxDQUFDLFdBQVc7WUFDcEI7WUFDTSxVQUFXLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsUUFBVTtnQkFDOUQsMkNBQTJDO2dCQUMzQywyRUFBMkU7Z0JBQzNFLFFBQVEsR0FBRyxDQUFDLDBCQUEwQjtZQUMxQztZQUNBLFNBQVMsSUFBSTtRQUNqQixPQUNJLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXJCLE9BQU87SUFDWDtJQUVRLGNBQWM7UUFDbEIsMkRBQTJEO1FBQ3JELFVBQVcsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFVO1lBQy9DLFFBQVEsR0FBRyxDQUFDLGdCQUFnQjtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ2IsSUFBSSxPQUFPLElBQUcsZ0JBQWdCO1lBQzlCLEtBQUssSUFBSSxRQUFRLE1BQU87Z0JBQ3BCLFFBQVEsR0FBRyxDQUFDLENBQUMseUJBQXlCLENBQUMsRUFBRSxLQUFLLE9BQU87Z0JBQ3JELE1BQU0sZ0JBQUUsYUFBWSxlQUFFLFlBQVcsRUFBRSxHQUFHLEtBQUssT0FBTztnQkFDbEQsUUFBUSxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLEtBQUssRUFBRSxZQUFZLENBQUM7Z0JBQ3JFLFFBQVEsQ0FBQyxvRUFBb0UsRUFBRSxhQUFhLEtBQUssRUFBRSxZQUFZLDJEQUEyRCxFQUFFLFlBQVksQ0FBQyxFQUFFLGFBQWEsb0RBQW9ELENBQUM7WUFDalE7WUFDQSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHO2dCQUM1QixNQUFNLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDbEQsS0FBSyxNQUFNLE9BQU8sS0FDZCxJQUFJLE9BQU8sR0FBRyxJQUFNO29CQUFFLE1BQU0sTUFBTSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQU0sUUFBUSxHQUFHLENBQUM7b0JBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUFHO1lBRTVJLENBQUM7WUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUssQ0FBQSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFBLEdBQ2xFLGlGQUFpRjtZQUNqRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVztRQUV2RjtJQUNKO0lBRUE7OztLQUdDLEdBQ0QsQUFBUSxlQUFlLElBQVMsRUFBRTtRQUM5QixLQUFLLFNBQVMsR0FBRyxJQUFNO1lBQ25CLFFBQVEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNCO1FBQ0EsS0FBSyxZQUFZLEdBQUcsSUFBTTtZQUN0QixRQUFRLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUMxQixJQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFDeEIsSUFBSSxDQUFDLG9CQUFvQjtRQUVqQztRQUNBLEtBQUssSUFBSSxDQUFDO1lBQUUsVUFBVTtRQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBUTtZQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHO1lBRS9CLFFBQVEsR0FBRyxDQUFDLGtCQUFrQixJQUFJLENBQUMsSUFBSTtZQUN2QyxJQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFDckIsSUFBSSxDQUFDLGlCQUFpQjtZQUcxQixXQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFrQjtRQUNqRSxHQUFHLEtBQUssQ0FBQyxDQUFDLFFBQVU7WUFDaEIsdUJBQXVCO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxRQUFRO1FBQ25DO0lBQ0o7SUFFVSxZQUFZLEtBQWEsRUFBRTtRQUNqQyxRQUFRLElBQUksQ0FBQyxlQUFlO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0lBRTdFO0lBRUE7O0tBRUMsR0FDRCxNQUFjLGFBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsTUFBTSx1QkFBdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTtZQUNoRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDakQsZ0RBQWdEO1lBQ2hELFdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksa0JBQWtCO1FBQ25FLENBQUM7SUFDTDtJQUVBOztLQUVDLEdBQ0QsTUFBYyxlQUFlO1FBQ3pCLElBQUk7WUFDQSxNQUFNLFNBQUUsTUFBSyxRQUFFLEtBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQzlDLElBQUksTUFBTTtnQkFDTixpRUFBaUU7Z0JBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztnQkFDdkIsUUFBUSxHQUFHLENBQUM7WUFDaEIsT0FBTztnQkFDSCxJQUFJLGNBQWMsS0FBSztnQkFDdkIscUJBQXFCO2dCQUNyQixJQUFJLE1BQU0sT0FBTyxDQUFDLFNBQVMsSUFBSTtvQkFDM0IsTUFBTSxTQUFTLE1BQU0sS0FBSyxDQUFDO29CQUMzQix1QkFBdUI7b0JBQ3ZCLElBQUksT0FBTyxNQUFNLElBQUksR0FDakIsUUFBUSxLQUFLLENBQUMscUJBQXFCO29CQUV2QyxJQUFLLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxNQUFNLEdBQUcsR0FBRyxJQUFLO3dCQUN4QyxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxFQUFFO3dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzt3QkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUk7d0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUc7d0JBQ2pCLGNBQWMsSUFBSTtvQkFDdEI7b0JBQ0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxNQUFNLEdBQUcsRUFBRTtnQkFDMUMseURBQXlEO2dCQUM3RCxPQUNJLFFBQVE7Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsSUFBSTtnQkFJdEIsSUFBSSxhQUNBLFdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHO2dCQUUvQyxXQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFrQjtZQUNuRSxDQUFDO1FBQ0wsRUFBRSxPQUFPLE9BQU87WUFDWixRQUFRLElBQUksQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxRQUFRO1FBQ25DO0lBQ0o7SUFFUSxpQkFBaUI7SUFDckIscURBQXFEO0lBQ3JELGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsUUFBUTtJQUNSLElBQUk7SUFDUjtJQUVBLE1BQWMsWUFBWSxLQUFhLEVBQUU7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUs7UUFFM0IsV0FBVztRQUNYLElBQUksYUFBYSxJQUFJO1FBQ3JCLE1BQU0sU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1FBQzNDLE1BQU0sT0FBTyxLQUFLLENBQUMsV0FBVyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ2pELE9BQU8sV0FBVztJQUN0QjtJQUVBOzs7O0tBSUMsR0FDRCxBQUFRLFlBQVksVUFBa0IsRUFBRSxFQUFvQjtRQUN4RCxPQUFPLElBQUksUUFBaUIsQ0FBQyxVQUFZO1lBQ3JDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FDekIsUUFBUSxJQUFJO2lCQUVaLFdBQVcsSUFBTTtnQkFDYixRQUFRLEtBQUs7WUFDakIsR0FBRztRQUVYO0lBQ0o7SUFFUSxVQUFVLElBQVksRUFBRSxTQUFrQixFQUFFO1FBQ2hELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixNQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEdBQUcsR0FBSTtnQkFDN0MsSUFBSSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVTtnQkFDckMsSUFBSSxJQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO1lBRXRDO1lBQ0EsSUFBSSxXQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsd0RBQXdELEVBQUUsS0FBSyxNQUFNLENBQUM7aUJBRXRHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsNERBQTRELEVBQUUsS0FBSyxNQUFNLENBQUM7WUFFOUcsV0FBVyxNQUFNO1FBQ3JCLENBQUM7SUFDTDtBQUNKOzs7QUMxWUE7OztBQ0FBOzs7Ozs7Ozs7Q0FTQyxHQUVBLENBQUEsU0FBVSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ3hCLElBQUksT0FBTyxXQUFXLGNBQWMsT0FBTyxHQUFHLEVBQzVDLE9BQU87UUFBQztLQUFVLEVBQUU7U0FFcEIsUUFBUTtBQUlaLENBQUEsRUFBRSwyQkFBTSxTQUFVLFFBQU8sRUFBRTtJQUN6QixTQUFTLEtBQUssR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7UUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUc7SUFDbkI7SUFFQSxTQUFTLE9BQU8sTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7UUFFMUMsSUFBSSxPQUFPLElBQUk7UUFFZixTQUFTLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDeEMsSUFBSSxNQUFNLFFBQVEsV0FBVyxNQUFNLEVBQ2pDLFFBQ0E7WUFFRixJQUFJLE9BQU8sTUFBTSxLQUFLLEdBQ3BCLE9BQU8sSUFBSTtZQUViLElBQUksT0FBTyxNQUFNLEtBQUssR0FDcEIsT0FBTyxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLO1lBR2xDLE9BQU8sSUFBSSxDQUFDLFNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2hEO1lBRUEsU0FBUyxLQUFLLEtBQUssQ0FBQyxPQUFPLE1BQU0sR0FBRztZQUVwQyxzREFBc0Q7WUFDdEQsTUFBTyxTQUFTLEVBQUc7Z0JBQ2pCLElBQUksWUFBWSxTQUFTO2dCQUN6QixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUN4RSxVQUFVO3FCQUVWLEtBQU07WUFFVjtZQUVBLE9BQU8sSUFBSSxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSztZQUNyQyxLQUFLLElBQUksR0FBRyxVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsU0FBUyxRQUFRLEdBQUc7WUFDMUQsS0FBSyxLQUFLLEdBQUcsVUFBVSxPQUFPLEtBQUssQ0FBQyxTQUFTLElBQUksUUFBUSxHQUFHO1lBRTVELE9BQU87UUFDVDtRQUVBLDJCQUEyQjtRQUMzQixTQUFTLFNBQVMsSUFBSSxFQUFFO1lBQ3RCLDhDQUE4QztZQUM5QyxLQUFLLElBQUksR0FBRztZQUVaLFNBQVMsY0FBYyxJQUFJLEVBQUU7Z0JBQzNCLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ2IsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHO29CQUNuQixjQUFjLEtBQUssSUFBSTtnQkFDekIsQ0FBQztnQkFFRCxJQUFJLEtBQUssS0FBSyxFQUFFO29CQUNkLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRztvQkFDcEIsY0FBYyxLQUFLLEtBQUs7Z0JBQzFCLENBQUM7WUFDSDtZQUVBLGNBQWMsS0FBSyxJQUFJO1FBQ3pCO1FBRUEsa0RBQWtEO1FBQ2xELG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsTUFBTSxPQUFPLENBQUMsU0FBUyxTQUFTLFFBQVEsUUFBUTthQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsUUFBUSxHQUFHLElBQUk7UUFFMUMsd0VBQXdFO1FBQ3hFLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVUsR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLE1BQU0sSUFBSSxDQUFDLElBQUk7WUFDekIsSUFBSSxPQUFPLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLFNBQVMsRUFBRSxJQUFJO1lBQ2hELElBQUksSUFBSSxJQUFJLEVBQUUsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJO1lBQzlDLElBQUksSUFBSSxLQUFLLEVBQUUsS0FBSyxLQUFLLEdBQUcsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLO1lBQ2pELE9BQU87UUFDVDtRQUVBLHdFQUF3RSxHQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVUsR0FBRyxFQUFFO1lBQzVCLElBQUksU0FBUyxFQUFFO1lBQ2YsSUFBSSxRQUFRLElBQUksRUFDZCxPQUFPO1lBRVQsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDWixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHO2dCQUN4QixTQUFTO3VCQUFJO3VCQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJO2lCQUFFO1lBQ2pELENBQUM7WUFDRCxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUc7Z0JBQ3pCLFNBQVM7dUJBQUk7dUJBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUs7aUJBQUU7WUFDbEQsQ0FBQztZQUNELE9BQU87UUFDVDtRQUVBLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBVSxLQUFLLEVBQUU7WUFDN0IsU0FBUyxZQUFZLElBQUksRUFBRSxNQUFNLEVBQUU7Z0JBRWpDLElBQUksU0FBUyxJQUFJLEVBQ2YsT0FBTztnQkFHVCxJQUFJLFlBQVksVUFBVSxDQUFDLEtBQUssU0FBUyxDQUFDO2dCQUMxQyxJQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsVUFBVSxFQUN4QyxPQUFPLFlBQVksS0FBSyxJQUFJLEVBQUU7cUJBRTlCLE9BQU8sWUFBWSxLQUFLLEtBQUssRUFBRTtZQUVuQztZQUVBLElBQUksaUJBQWlCLFlBQVksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQzlDLFNBQ0E7WUFFRixJQUFJLG1CQUFtQixJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sR0FBRyxJQUFJO2dCQUNuQztZQUNGLENBQUM7WUFFRCxVQUFVLElBQUksS0FBSyxPQUFPLEFBQUMsQ0FBQSxlQUFlLFNBQVMsR0FBRyxDQUFBLElBQUssV0FBVyxNQUFNLEVBQUU7WUFDOUUsWUFBWSxVQUFVLENBQUMsZUFBZSxTQUFTLENBQUM7WUFFaEQsSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLGVBQWUsR0FBRyxDQUFDLFVBQVUsRUFDbEQsZUFBZSxJQUFJLEdBQUc7aUJBRXRCLGVBQWUsS0FBSyxHQUFHO1FBRTNCO1FBRUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFVLEtBQUssRUFBRTtZQUM3QixJQUFJO1lBRUosU0FBUyxXQUFXLElBQUksRUFBRTtnQkFDeEIsSUFBSSxTQUFTLElBQUksRUFDZixPQUFPLElBQUk7Z0JBR2IsSUFBSSxLQUFLLEdBQUcsS0FBSyxPQUNmLE9BQU87Z0JBR1QsSUFBSSxZQUFZLFVBQVUsQ0FBQyxLQUFLLFNBQVMsQ0FBQztnQkFFMUMsSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDLFVBQVUsRUFDeEMsT0FBTyxXQUFXLEtBQUssSUFBSTtxQkFFM0IsT0FBTyxXQUFXLEtBQUssS0FBSztZQUVoQztZQUVBLFNBQVMsV0FBVyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksVUFDRixTQUNBO2dCQUVGLFNBQVMsUUFBUSxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMxQixJQUFJLFdBQ0YsS0FDQSxNQUNBLE9BQ0E7b0JBRUYsSUFBSSxTQUFTLElBQUksRUFDZixPQUFPLElBQUk7b0JBR2IsWUFBWSxVQUFVLENBQUMsSUFBSTtvQkFFM0IsSUFBSSxLQUFLLFNBQVMsS0FBSyxLQUFLO3dCQUMxQixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFDcEIsT0FBTyxRQUFRLEtBQUssSUFBSSxFQUFFO3dCQUU1QixPQUFPO29CQUNULENBQUM7b0JBRUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxVQUFVO29CQUN6QixPQUFPLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQzFCLFFBQVEsUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDNUIsTUFBTTtvQkFFTixJQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUN6QyxNQUFNO29CQUVSLElBQUksVUFBVSxJQUFJLElBQUksTUFBTSxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFDN0QsTUFBTTtvQkFFUixPQUFPO2dCQUNUO2dCQUVBLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDN0MsSUFBSSxLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUU7d0JBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUk7d0JBQ2hCO29CQUNGLENBQUM7b0JBRUQsYUFBYSxVQUFVLENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUU5QyxJQUFJLEtBQUssR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUNwRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSTt5QkFFdkIsS0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUk7b0JBRTFCO2dCQUNGLENBQUM7Z0JBRUQsMEVBQTBFO2dCQUMxRSw0RUFBNEU7Z0JBQzVFLGVBQWU7Z0JBQ2YsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQ3ZCLFdBQVcsUUFBUSxLQUFLLEtBQUssRUFBRSxLQUFLLFNBQVM7b0JBQzdDLFVBQVUsU0FBUyxHQUFHO29CQUN0QixXQUFXO29CQUNYLEtBQUssR0FBRyxHQUFHO2dCQUNiLE9BQU87b0JBQ0wsV0FBVyxRQUFRLEtBQUssSUFBSSxFQUFFLEtBQUssU0FBUztvQkFDNUMsVUFBVSxTQUFTLEdBQUc7b0JBQ3RCLFdBQVc7b0JBQ1gsS0FBSyxLQUFLLEdBQUcsS0FBSyxJQUFJO29CQUN0QixLQUFLLElBQUksR0FBRyxJQUFJO29CQUNoQixLQUFLLEdBQUcsR0FBRztnQkFDYixDQUFDO1lBQ0g7WUFFQSxPQUFPLFdBQVcsS0FBSyxJQUFJO1lBRTNCLElBQUksU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCLFFBQVEsSUFBSSxDQUFDO2dCQUNiO1lBQ0YsQ0FBQztZQUVELDZCQUE2QjtZQUU3QiwyQ0FBMkM7WUFDM0MsTUFBTSxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0IsSUFBSSxVQUFVLFVBQVUsV0FBVyxLQUFLLFNBQVMsRUFBRSxLQUFLLE1BQU07WUFDOUQsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDZixJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxNQUN2QixLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUc7cUJBQ2QsSUFBSSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFDL0IsS0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHO1lBRXhCLE9BQ0UsS0FBSyxJQUFJLEdBQUc7UUFHaEI7UUFFQSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7WUFDckQsSUFBSSxHQUNGLFFBQ0E7WUFFRixZQUFZLElBQUksV0FDZCxTQUFVLENBQUMsRUFBRTtnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRTtZQUcvQixTQUFTLGNBQWMsSUFBSSxFQUFFO2dCQUMzQixJQUFJLFdBQ0YsWUFBWSxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUMsRUFDdEMsY0FBYyxPQUFPLE9BQU8sS0FBSyxHQUFHLEdBQ3BDLGNBQWMsQ0FBQyxHQUNmLGdCQUNBLFlBQ0E7Z0JBRUYsU0FBUyxTQUFTLElBQUksRUFBRSxRQUFRLEVBQUU7b0JBQ2hDLFVBQVUsSUFBSSxDQUFDO3dCQUFDO3dCQUFNO3FCQUFTO29CQUMvQixJQUFJLFVBQVUsSUFBSSxLQUFLLFVBQ3JCLFVBQVUsR0FBRztnQkFFakI7Z0JBRUEsSUFBSyxJQUFJLEdBQUcsSUFBSSxXQUFXLE1BQU0sRUFBRSxLQUFLLEVBQ3RDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFDdEIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztxQkFFakQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUl4RCxpQkFBaUIsT0FBTyxhQUFhLEtBQUssR0FBRztnQkFFN0MsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUM3QyxJQUFJLFVBQVUsSUFBSSxLQUFLLFlBQVksY0FBYyxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsRUFDbEUsU0FBUyxNQUFNO29CQUVqQjtnQkFDRixDQUFDO2dCQUVELElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxFQUNyQixZQUFZLEtBQUssSUFBSTtxQkFDaEIsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQzNCLFlBQVksS0FBSyxLQUFLO3FCQUV0QixJQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsVUFBVSxFQUN4QyxZQUFZLEtBQUssSUFBSTtxQkFFckIsWUFBWSxLQUFLLEtBQUs7Z0JBSTFCLGNBQWM7Z0JBRWQsSUFBSSxVQUFVLElBQUksS0FBSyxZQUFZLGNBQWMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQ2xFLFNBQVMsTUFBTTtnQkFHakIsSUFBSSxVQUFVLElBQUksS0FBSyxZQUFZLEtBQUssR0FBRyxDQUFDLGtCQUFrQixVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDakYsSUFBSSxjQUFjLEtBQUssSUFBSSxFQUN6QixhQUFhLEtBQUssS0FBSzt5QkFFdkIsYUFBYSxLQUFLLElBQUk7b0JBRXhCLElBQUksZUFBZSxJQUFJLEVBQ3JCLGNBQWM7Z0JBRWxCLENBQUM7WUFDSDtZQUVBLElBQUksYUFDRixJQUFLLElBQUksR0FBRyxJQUFJLFVBQVUsS0FBSyxFQUM3QixVQUFVLElBQUksQ0FBQztnQkFBQyxJQUFJO2dCQUFFO2FBQVk7WUFJdEMsSUFBSSxLQUFLLElBQUksRUFDWCxjQUFjLEtBQUssSUFBSTtZQUV6QixTQUFTLEVBQUU7WUFFWCxJQUFLLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLFVBQVUsVUFBVSxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssRUFDakUsSUFBSSxVQUFVLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUN6QixPQUFPLElBQUksQ0FBQztnQkFBQyxVQUFVLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUc7Z0JBQUUsVUFBVSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7YUFBQztZQUd0RSxPQUFPO1FBQ1Q7UUFFQSxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVk7WUFDL0IsU0FBUyxPQUFPLElBQUksRUFBRTtnQkFDcEIsSUFBSSxTQUFTLElBQUksRUFDZixPQUFPO2dCQUVULE9BQU8sS0FBSyxHQUFHLENBQUMsT0FBTyxLQUFLLElBQUksR0FBRyxPQUFPLEtBQUssS0FBSyxLQUFLO1lBQzNEO1lBRUEsU0FBUyxNQUFNLElBQUksRUFBRTtnQkFDbkIsSUFBSSxTQUFTLElBQUksRUFDZixPQUFPO2dCQUVULE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJO1lBQ2hEO1lBRUEsT0FBTyxPQUFPLEtBQUssSUFBSSxJQUFLLENBQUEsS0FBSyxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFDO1FBQ3JFO0lBQ0Y7SUFFQSxtQ0FBbUM7SUFDbkMsK0NBQStDO0lBRS9DLFNBQVMsV0FBVyxhQUFhLEVBQUU7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUc7SUFDdkI7SUFFQSxXQUFXLFNBQVMsR0FBRztRQUNyQixNQUFNLFNBQVUsT0FBTyxFQUFFO1lBQ3ZCLCtDQUErQztZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNsQix5QkFBeUI7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRztRQUN0QztRQUVBLEtBQUssV0FBWTtZQUNmLHFEQUFxRDtZQUNyRCxJQUFJLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLDJDQUEyQztZQUMzQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHO1lBQzFCLDZEQUE2RDtZQUM3RCwrQkFBK0I7WUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHO2dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoQixDQUFDO1lBQ0QsT0FBTztRQUNUO1FBRUEsTUFBTSxXQUFZO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3hCO1FBRUEsUUFBUSxTQUFVLElBQUksRUFBRTtZQUN0QixJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQzdCLDhEQUE4RDtZQUM5RCxNQUFNO1lBQ04sSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxNQUFNO2dCQUMzQiwwREFBMEQ7Z0JBQzFELHVCQUF1QjtnQkFDdkIsSUFBSSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDMUIsSUFBSSxLQUFLLE1BQU0sR0FBRztvQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUc7b0JBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFFZCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNsQixDQUFDO2dCQUNEO1lBQ0YsQ0FBQztZQUVILE1BQU0sSUFBSSxNQUFNLG1CQUFtQjtRQUNyQztRQUVBLE1BQU0sV0FBWTtZQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUM1QjtRQUVBLFVBQVUsU0FBVSxDQUFDLEVBQUU7WUFDckIsMENBQTBDO1lBQzFDLElBQUksVUFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsbURBQW1EO1lBQ25ELE1BQU8sSUFBSSxFQUFHO2dCQUNaLG9EQUFvRDtnQkFDcEQsSUFBSSxVQUFVLEtBQUssS0FBSyxDQUFDLEFBQUMsQ0FBQSxJQUFJLENBQUEsSUFBSyxLQUFLLEdBQ3RDLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUNoQyw4Q0FBOEM7Z0JBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUztvQkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUc7b0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHO29CQUNsQiw4Q0FBOEM7b0JBQzlDLElBQUk7Z0JBQ04sT0FHRSxLQUFNO1lBRVY7UUFDRjtRQUVBLFVBQVUsU0FBVSxDQUFDLEVBQUU7WUFDckIsNENBQTRDO1lBQzVDLElBQUksU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDOUIsVUFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFDekIsWUFBWSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRWpDLE1BQU8sSUFBSSxDQUFFO2dCQUNYLDZDQUE2QztnQkFDN0MsSUFBSSxVQUFVLEFBQUMsQ0FBQSxJQUFJLENBQUEsSUFBSyxHQUFHLFVBQVUsVUFBVTtnQkFDL0MseURBQXlEO2dCQUN6RCxVQUFVO2dCQUNWLElBQUksT0FBTyxJQUFJO2dCQUNmLHFEQUFxRDtnQkFDckQsSUFBSSxVQUFVLFFBQVE7b0JBQ3BCLG9DQUFvQztvQkFDcEMsSUFBSSxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUNoQyxjQUFjLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ25DLDREQUE0RDtvQkFDNUQsSUFBSSxjQUFjLFdBQ2hCLE9BQU87Z0JBQ1gsQ0FBQztnQkFDRCwwQ0FBMEM7Z0JBQzFDLElBQUksVUFBVSxRQUFRO29CQUNwQixJQUFJLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ2hDLGNBQWMsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDbkMsSUFBSSxjQUFlLENBQUEsUUFBUSxJQUFJLEdBQUcsWUFBWSxXQUFXLEFBQUQsR0FDdEQsT0FBTztnQkFFWCxDQUFDO2dCQUVELDJEQUEyRDtnQkFDM0QsSUFBSSxRQUFRLElBQUksRUFBRTtvQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO29CQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRztvQkFDckIsSUFBSTtnQkFDTixPQUdFLEtBQU07WUFFVjtRQUNGO0lBQ0Y7SUFFQSxTQUFRLE1BQU0sR0FBRztJQUNqQixTQUFRLFVBQVUsR0FBRztBQUN2Qjs7QUQzZkEsR0FFQTs7QUVKQTtBQUNBLGlEQUFpRDtBQUVqRCxNQUFNO0lBQ0YsT0FBZSxNQUFNO0lBQ3JCLE9BQWUsTUFBTTtJQUNyQixPQUFlLE9BQU87SUFDdEIsT0FBZSxPQUFPO0lBQ3RCLGFBQWMsQ0FBRTtJQUNoQixjQUFjLEdBQU8sRUFBRTtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSTtJQUNsQztJQUNBLE9BQU8sQ0FBUyxFQUFFLENBQVMsRUFBRTtRQUN6QixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHO1FBQy9CLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUc7UUFDL0IsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRztRQUMvQixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHO0lBQy9CLG9FQUFvRTtJQUN4RTtJQUNBLE9BQU8sT0FBZSxHQUFHLEVBQTBCO1FBQy9DLE9BQU87WUFBRSxDQUFBLElBQUksQ0FBQyxJQUFJLEdBQUcsQUFBQyxDQUFBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQUFBRCxJQUFLLENBQUEsSUFBSztZQUFPLENBQUEsSUFBSSxDQUFDLElBQUksR0FBRyxBQUFDLENBQUEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxBQUFELElBQUssQ0FBQSxJQUFLO1NBQUs7SUFDL0c7SUFDQSxLQUFLLE9BQWUsR0FBRyxFQUEwQjtRQUM3QyxPQUFPO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRztZQUFNLElBQUksQ0FBQyxJQUFJLEdBQUc7U0FBSztJQUMvQztJQUNBLEtBQUssT0FBZSxHQUFHLEVBQTBCO1FBQzdDLE9BQU87WUFBRSxDQUFBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQUFBRCxJQUFLO1lBQU8sQ0FBQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEFBQUQsSUFBSztTQUFLO0lBQzNFO0lBQ0EsU0FBUyxPQUFlLEdBQUcsRUFBVTtRQUNqQyxNQUFNLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3REO0lBQ0EsMkNBQTJDLEdBQzNDLE9BQU8sR0FBUSxFQUFVO1FBQ3JCLE9BQU8sQUFBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSTtJQUM5RztBQUNKO0FBRU8sTUFBTTtJQUlULFlBQVksSUFBWSxFQUFFLENBQVMsRUFBRSxDQUFTLENBQUU7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHO0lBQ2xCO0FBQ0o7QUFFTyxNQUFNO0lBSVQsWUFBWSxLQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVMsQ0FBRTtRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7SUFDakI7SUFDQSxVQUEwQjtRQUN0QixPQUFPO1lBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSTtTQUFDO0lBQ2pDO0FBQ0o7QUFFTyxNQUFNO0lBS1QsV0FBbUIsR0FBRztJQUV0QixZQUFxQixLQUFLLENBQUM7SUFDM0IsY0FBc0IsRUFBRTtJQUN4QixjQUFzQixFQUFFO0lBQ3hCLFlBQW9CLEVBQUU7SUFDdEIsWUFBb0IsRUFBRTtJQU90QixPQUFlLElBQUk7SUFNbkIsVUFBMEIsRUFBRSxDQUFDO0lBRTdCLGFBQWM7UUFDVixXQUFXO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSTtJQUMzQjtJQUVBLFVBQVUsR0FBNkIsRUFBRSxNQUF5QixFQUFFO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUc7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHO0lBQ2xCO0lBRUE7O0tBRUMsR0FDRCxBQUFPLFVBQWU7UUFDbEIsSUFBSSxTQUFTLEtBQUs7UUFDbEIseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDOUIsU0FBUyxJQUFJO1FBQ2IsUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNwRDtJQUVBOztLQUVDLEdBQ0QsQUFBTyxVQUEwQjtRQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLHlDQUF5QztJQUN4RTtJQUVBOztLQUVDLEdBQ0QsQUFBTyxjQUFvQjtRQUN2QixJQUFJLFNBQWUsRUFBRTtRQUNyQixLQUFJLElBQUksUUFBUSxJQUFJLENBQUMsT0FBTyxDQUN4QixxQkFBcUI7UUFDckIsSUFBRyxLQUFLLE1BQU0sR0FBRyxHQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBRzNCLE9BQU87SUFDWDtJQUVBOztLQUVDLEdBQ0QsQUFBTyxrQkFBa0M7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7SUFDaEM7SUFFTyxjQUFxQjtRQUN4QixJQUFJLFNBQVM7UUFDYixLQUFJLElBQUksVUFBVSxJQUFJLENBQUMsT0FBTyxDQUMxQixVQUFVLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUU1QixPQUFPO0lBQ1g7SUFFTyxVQUFVLElBQW9CLEVBQUU7UUFDbkMsSUFBSSxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUMzQixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUMzQixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLEFBQUMsQ0FBQSxBQUFDLEtBQUssS0FBSyxLQUFLLEVBQUUsQUFBRCxJQUFLO1FBQ25DLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDL0MsSUFBSSxDQUFDLE1BQU07SUFDZjtJQUVPLFNBQVM7UUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUUsQ0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxBQUFELElBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUc7WUFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFFLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQUFBRCxJQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHO1FBQ2xGLENBQUM7SUFDTDtJQUdBLFlBQVksSUFBWSxFQUFFLElBQVksRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSwwQ0FBUyxNQUFNLEdBQUc7SUFDbkQ7SUFFQSxPQUFPLEtBQWEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUk7UUFFaEMsSUFBSSxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzlCLElBQUksUUFBUTtZQUNSLE1BQU0sU0FBUyxJQUFJLDBDQUFJLE9BQU8sR0FBRztZQUNqQyxPQUFPLEdBQUcsQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUc7UUFDekIsQ0FBQztJQUNMO0lBRUEsU0FBUztRQUNMLElBQUk7WUFDQSxJQUFJLE9BQWUsRUFBRTtZQUNyQixLQUFLLElBQUksV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FDbkMsS0FBSyxJQUFJLE9BQU8sUUFDWixLQUFLLElBQUksQ0FBQztZQUlsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQSxHQUFBLGdDQUFLLEVBQUUsTUFBTSwwQ0FBSSxRQUFRLEVBQUU7Z0JBQUM7Z0JBQVE7YUFBTztZQUMzRCxtRkFBbUY7WUFDbkYsUUFBUSxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7UUFFbkQsRUFBRSxPQUFNLEtBQUs7WUFBRSxRQUFRLEtBQUssQ0FBQztRQUFNO0lBQ3ZDO0lBRUEsVUFBVSxLQUFpQixFQUFFO1FBQ3pCLHdCQUF3QjtRQUN4QixNQUFNLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQ25DLElBQUcsTUFBTSxNQUFNLElBQUksR0FBRztZQUNsQixNQUFNLEtBQUssQUFBQyxDQUFBLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEFBQUQsSUFBSyxJQUFJLENBQUMsSUFBSTtZQUNqRSxNQUFNLEtBQUssQUFBQyxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFFLENBQUEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEFBQUQsSUFBSyxJQUFJLENBQUMsU0FBUyxBQUFELElBQUssSUFBSSxDQUFDLElBQUk7WUFDcEcsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUk7UUFDdkIsNkVBQTZFO1FBQ2pGLENBQUM7UUFDRCxJQUFHLE1BQU0sTUFBTSxJQUFJLEdBQUc7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUztZQUMzRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtRQUN6QixDQUFDO0lBQ0w7SUFDQSxRQUFRLEtBQWlCLEVBQUU7UUFDdkIsTUFBTSxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUNuQyw0Q0FBNEM7UUFDNUMsSUFBRyxNQUFNLE1BQU0sSUFBSSxHQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSztRQUUxQixJQUFHLE1BQU0sTUFBTSxJQUFJLEdBQUc7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO1lBQ3hCLDZCQUE2QjtZQUM3Qiw2RkFBNkY7WUFDN0YsTUFBTSxLQUFLLEFBQUMsQ0FBQSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxBQUFELElBQUssSUFBSSxDQUFDLElBQUk7WUFDakUsTUFBTSxLQUFLLEFBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRSxDQUFBLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxBQUFELElBQUssSUFBSSxDQUFDLFNBQVMsQUFBRCxJQUFLLElBQUksQ0FBQyxJQUFJO1lBQ3BHLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRztZQUVwQiwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUU1RCxJQUFJLE1BQU0sSUFBSSwwQ0FBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUNoRixvR0FBb0c7WUFFcEcsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNWLElBQUksUUFBd0IsRUFBRTtnQkFDOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTtnQkFDcEMsSUFBRyxPQUFPLEtBQUs7b0JBQ1gsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUc7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ25CLE9BQU87b0JBQ0gsT0FBTyxBQUFDLE9BQUssSUFBTSxDQUFBLE9BQUssQ0FBQSxHQUFJLG1DQUFtQztvQkFDL0QsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTywwQkFBMEI7b0JBQ3BGLElBQUcsQ0FBQyxNQUFNLFFBQVEsRUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7b0JBRXJCLEtBQUksTUFBTSxRQUFRLE1BQ2Qsb0dBQW9HO29CQUNwRyxrQ0FBa0M7b0JBQ2xDLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBRzlCLENBQUM7Z0JBRUQseURBQXlEO2dCQUN6RCxJQUFJLGlCQUFpQixJQUFJO2dCQUN6QixLQUFJLE1BQU0sUUFBUSxJQUFJLENBQUMsT0FBTyxDQUMxQixlQUFlLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFFeEMsSUFBSSxDQUFDLFdBQVcsR0FBRztnQkFFbkIsUUFBUSxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLE1BQU0sQ0FBQyxDQUFDO1lBQzlELENBQUM7UUFDTCxDQUFDO0lBQ0w7SUFDQSxVQUFVLEtBQWlCLEVBQUU7UUFDekIseURBQXlEO1FBQ3pELHNDQUFzQztRQUN0QyxNQUFNLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQ25DLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztRQUMvRCxDQUFDO1FBQ0QsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFHO1lBQ2xCLE1BQU0sS0FBSyxBQUFDLENBQUEsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQUFBRCxJQUFLLElBQUksQ0FBQyxJQUFJO1lBQ2pFLE1BQU0sS0FBSyxBQUFDLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUUsQ0FBQSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQUFBRCxJQUFLLElBQUksQ0FBQyxTQUFTLEFBQUQsSUFBSyxJQUFJLENBQUMsSUFBSTtZQUNwRyxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUc7UUFDeEIsQ0FBQztJQUNMO0lBQ0EsV0FBVyxLQUFpQixFQUFFO1FBQzFCLE1BQU0sUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDbkMsTUFBTSxLQUFNLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQ3BELE1BQU0sS0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRSxDQUFBLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxBQUFELElBQUssSUFBSSxDQUFDLFNBQVM7UUFDdkYsa0RBQWtEO1FBQ2xELElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJO1FBQ3pCLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJO1FBQ3pCLElBQUksTUFBTSxNQUFNLEdBQUcsR0FDZixJQUFJLENBQUMsSUFBSSxJQUFJO2FBRWIsSUFBSSxDQUFDLElBQUksSUFBSTtRQUVqQixxREFBcUQ7UUFDckQsSUFBSSxPQUFPLE9BQU8sSUFBSSxDQUFDLElBQUk7UUFDM0IsSUFBSSxPQUFPLE9BQU8sSUFBSSxDQUFDLElBQUk7UUFDM0IsSUFBSSxPQUFRLE9BQU87UUFDbkIsSUFBSSxPQUFRLE9BQU87UUFDbkIsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxTQUFTLElBQUk7UUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBSTtJQUN0QjtJQUNBLFNBQVMsS0FBaUIsRUFBRSxDQUM1QjtJQUVBLE9BQU8sU0FBUyxDQUFLLEVBQUUsQ0FBSyxFQUFFO1FBQzFCLE9BQU8sQUFBQyxDQUFBLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSSxBQUFELElBQUksQ0FBQSxFQUFFLElBQUksR0FBRyxFQUFFLElBQUksQUFBRCxJQUFNLEFBQUMsQ0FBQSxFQUFFLElBQUksR0FBRyxFQUFFLElBQUksQUFBRCxJQUFJLENBQUEsRUFBRSxJQUFJLEdBQUcsRUFBRSxJQUFJLEFBQUQ7SUFDbkY7SUFFTyxPQUFPO1FBQ1Ysb0JBQW9CO1FBQ3BCLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRztRQUVyQixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUc7UUFDdkIsSUFBSSxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsU0FBUztRQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTO1FBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtRQUNmLFVBQVU7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQzFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtRQUVmLEtBQUssSUFBSSxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFJO1lBRXRDLE1BQU0sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUMvQixNQUFNLFNBQVMsSUFB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QUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFNLElBQUksQ0FBQyxFQUFFLEdBQUMsUUFBUSxJQUFJLENBQUMsU0FBUztRQUM1RSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07UUFHZiwwQkFBMEI7UUFDMUIsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDOUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQzlHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUztZQUM5RyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDOUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcs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QUcsTUFBTSxFQUFFLCtCQUErQjtZQUNoRiw0QkFBTSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUN0Qyw2QkFBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxhQUFhLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7QUFDTDtBQUVBLFNBQVMsZ0JBQWdCLENBQUMsb0JBQW9CO0FBRTlDLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQVE7SUFDdkMsaUNBQWlDO0lBQ2pDLFdBQVcsTUFBTTtBQUNyQiIsInNvdXJjZXMiOlsic3JjL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1jb29yZHMvZGlzdC9pbmRleC5qcyIsInNyYy9kZXZpY2UudHMiLCJzcmMvZGV2aWNlTWFybGluLnRzIiwibm9kZV9tb2R1bGVzL2tkLXRyZWUtamF2YXNjcmlwdC9rZFRyZWUuanMiLCJzcmMvcGNiLnRzIiwic3JjL3BhcnNlckdlcmJlci50cyIsInNyYy9wYXJzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgTW91c2UgfSBmcm9tICdjYW52YXMtY29vcmRzJyAvLyBodHRwczovL2dpdGh1Yi5jb20vQ29kZURyYWtlbi9jYW52YXMtY29vcmRzXHJcbmltcG9ydCB7IERldmljZSwgTW92ZW1lbnRTZXR0aW5ncyB9IGZyb20gJy4vZGV2aWNlJztcclxuaW1wb3J0IHsgTWFybGluIH0gZnJvbSAnLi9kZXZpY2VNYXJsaW4nO1xyXG5pbXBvcnQgeyBQQ0IsIFBhZCwgUGFkU3R5bGUgfSBmcm9tICcuL3BjYic7XHJcbmltcG9ydCB7IFBhcnNlckdlcmJlciB9IGZyb20gJy4vcGFyc2VyR2VyYmVyJztcclxuXHJcbi8vIHNpbXBsZXIgISEhIGNvbnN0IGluZm9Ecm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjaW5mb0Ryb3BEb3duJyk7XHJcblxyXG5jb25zdCBib2R5OiBIVE1MQm9keUVsZW1lbnQgfCBudWxsID0gPEhUTUxCb2R5RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuY29uc3QgbWVzc2FnZUVsZW06IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlRWxlbVwiKTtcclxuY29uc3QgdXBsb2FkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkQnV0dG9uXCIpO1xyXG5jb25zdCB0ZXN0RmlsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RGaWxlQnV0dG9uXCIpO1xyXG5jb25zdCBwYWRzRmllbGQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWRzRmllbGRcIik7XHJcbmNvbnN0IGNvb3JkczogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNvb3Jkc1wiKTtcclxuY29uc3QgY29vcmRzRmllbGQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29yZHNGaWVsZFwiKTtcclxuY29uc3QgZHJvcFpvbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcFpvbmVcIik7XHJcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuY29uc3QgZGVidWc6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z1wiKTtcclxuY29uc3QgcHJvZ3Jlc3M6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcclxuY29uc3QgcHJvZ3Jlc3NiYXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzYmFyJyk7XHJcbmNvbnN0IGNvbnRleHRNZW51OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZXh0TWVudScpO1xyXG5jb25zdCBwcm9ncmVzc0NhbmNlbDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NDYW5jZWwnKTtcclxuXHJcbmNvbnN0IG1lbnVTZXRaZXJvOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVNldFplcm9cIik7XHJcbmNvbnN0IG1lbnVNb3ZlVG86IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51TW92ZVRvXCIpO1xyXG5jb25zdCBtZW51TW92ZUFsbDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVNb3ZlQWxsXCIpO1xyXG5jb25zdCBtZW51QmxvYjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCbG9iXCIpO1xyXG5cclxuXHJcbmNvbnN0IG1haW46IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG5jb25zdCBvcGVuU2lkZWJhckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5TaWRlYmFyXCIpO1xyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XHJcblxyXG5sZXQgbWVzc2FnZUNsZWFyVGltZW91dDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5sZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcclxubGV0IG1vdXNlOiBNb3VzZSwgZ3JpZDogR3JpZDtcclxubGV0IHBjYjogUENCO1xyXG5cclxubGV0IGRldmljZSA9IG5ldyBNYXJsaW4oKTtcclxuXHJcbmxldCBtb3ZlbWVudFNldHRpbmdzID0gbmV3IE1vdmVtZW50U2V0dGluZ3MoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAodGVzdEZpbGVCdXR0b24gJiYgdXBsb2FkQnV0dG9uICYmIG1lbnVTZXRaZXJvICYmIG1lbnVNb3ZlVG8gJiYgbWVudU1vdmVBbGwgJiYgbWVudUJsb2IgJiYgcHJvZ3Jlc3NDYW5jZWwgJiYgcGFkc0ZpZWxkICYmIGNvb3Jkc0ZpZWxkICYmIGJvZHkgJiYgY2FudmFzICYmIGZvb3Rlcikge1xyXG4gICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VNb3ZlKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZURvd24oZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZVVwKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlT3V0KGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlV2hlZWwoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB1cGxvYWRGaWxlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdXBsb2FkRmlsZUVsZS50eXBlID0gXCJmaWxlXCI7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGVFbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgdXBsb2FkRmlsZUVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldjogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHVzZXIgaGFkIHNlbGVjdGVkIGEgZmlsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHVwbG9hZEZpbGVFbGUuZmlsZXMgJiYgdXBsb2FkRmlsZUVsZS5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSB1cGxvYWRGaWxlRWxlLmZpbGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpbGU6ICR7ZmlsZS5uYW1lfSBzaXplOiR7ZmlsZS5zaXplfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzR2VyYmVyRmlsZShmaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwbGVhc2UgY2hvb3NlIGEgZmlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRlc3RGaWxlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbWFyaW9zZ2l0L1NvbGRlclBhc3RlRGlzcGVuc2VyL21haW4vdGVzdHMvYmxhZGVzX3Y0MC1QYXN0ZVRvcC5nYnInKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihibG9iID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IG5ldyBGaWxlKFtibG9iXSwgXCJibGFkZXNfdjQwLVBhc3RlVG9wLmdiclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzR2VyYmVyRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtjb25zb2xlLndhcm4ocmVhc29uKX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudVNldFplcm8ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwY2Iuc2V0WmVybygpO1xyXG4gICAgICAgICAgICBkZXZpY2Uuc2V0WmVybyhwY2IuZ2V0WmVybygpKTsgLy8gZGV2aWNlIG11c3Qgc3Vic3RyYWN0IFwiemVyb1wiIGZyb20gYWxsIGNvb3Jkc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudU1vdmVUby5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgY29vcmRzICEhIVxyXG4gICAgICAgICAgICAvLyAhISEgbmVlZCB0byBiZSByZWxhdGl2ZSB0byB6ZXJvICEhISB1dXVoaGhcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBwYWRzID0gcGNiLmdldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChwYWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBwYWQ6IFBhZCA9IHBhZHNbMF07XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwYWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgZGV2aWNlLm1vdmVUbyhwYWQucG9zWCwgcGFkLnBvc1ksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBjYi5nZXRTZWxlY3RlZFplcm8oKTsgLy8gbG93ZXIgbGVmdCBvZiBzZWxlY3Rpb25cclxuICAgICAgICAgICAgZGV2aWNlLm1vdmVUbyhwb3NbMF0sIHBvc1sxXSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51TW92ZUFsbC5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwbGlzdCA9IHBjYi5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICBsZXQgcHplcm8gPSBwY2IuZ2V0U2VsZWN0ZWRaZXJvKCk7XHJcbiAgICAgICAgICAgIGRldmljZS5tb3ZlVG9BbGwocGxpc3QsIHB6ZXJvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudUJsb2Iub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGV2aWNlLmJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHkub25kcm9wID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgICAgICAgICAgaWYgKGV2LmRhdGFUcmFuc2ZlciAmJiBldi5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXHJcbiAgICAgICAgICAgICAgICBbLi4uZXYuZGF0YVRyYW5zZmVyLml0ZW1zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZHJvcHBlZCBpdGVtcyBhcmVuJ3QgZmlsZXMsIHJlamVjdCB0aGVtXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKApiBpdGVtWyR7aX1dLm5hbWUgPSAke2ZpbGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVc2UgRGF0YVRyYW5zZmVyIGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcclxuICAgICAgICAgICAgICAgIFsuLi5ldi5kYXRhVHJhbnNmZXIuZmlsZXNdLmZvckVhY2goKGZpbGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4oCmIGZpbGVbJHtpfV0ubmFtZSA9ICR7ZmlsZS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzR2VyYmVyRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5Lm9uZHJhZ292ZXIgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZpbGUocykgaW4gZHJvcCB6b25lJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IgKFByZXZlbnQgZmlsZSBmcm9tIGJlaW5nIG9wZW5lZClcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbnZhcy5vbmNvbnRleHRtZW51ID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmNvbnRleHRtZW51Jyxldik7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuc3R5bGUubGVmdCA9IGAke2V2LnBhZ2VYfXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LnN0eWxlLnRvcCA9IGAke2V2LnBhZ2VZfXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMub25tb3VzZXVwID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHBjYiA9IG5ldyBQQ0IoKTtcclxuICAgICAgICAgICAgcGNiLnNldENhbnZhcyhjdHgsIGNhbnZhcyk7XHJcblxyXG4gICAgICAgICAgICBtb3VzZSA9IG5ldyBNb3VzZShjdHgsIGNhbnZhcyk7XHJcbiAgICAgICAgICAgIG1vdXNlLnRyYWNrKCk7XHJcbiAgICAgICAgICAgIGdyaWQgPSBuZXcgR3JpZCgpO1xyXG4gICAgICAgICAgICBncmlkLnN0ZXAgPSAyO1xyXG4gICAgICAgICAgICBncmlkLmxpbmVXaWR0aCA9IDAuMDM7XHJcbiAgICAgICAgICAgIGdyaWQuYm9sZFdpZHRoID0gMC4wNTtcclxuICAgICAgICAgICAgZ3JpZC5jcmVhdGVMaW5lcyhjYW52YXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignbWlzc2luZyBodG1sIGVsZW1lbnRzICEnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVzc2FnZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmIChtZXNzYWdlQ2xlYXJUaW1lb3V0KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChtZXNzYWdlQ2xlYXJUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIGlmIChtZXNzYWdlRWxlbSkge1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtLmlubmVySFRNTCA9IGAke3RleHR9YDtcclxuICAgICAgICBtZXNzYWdlQ2xlYXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQobWVzc2FnZUNsZWFyLCAxMDAwMCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWVzc2FnZUNsZWFyKCkge1xyXG4gICAgbWVzc2FnZUNsZWFyVGltZW91dCA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChtZXNzYWdlRWxlbSkge1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICBpZiAoY2FudmFzICYmIGN0eCkge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuXHJcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybShcclxuICAgICAgICAgICAgcGNiID8gcGNiLnpvb20gOiAxLCAwLFxyXG4gICAgICAgICAgICAwLCBwY2IgPyBwY2Iuem9vbSA6IDEsXHJcbiAgICAgICAgICAgIDAsIDApO1xyXG5cclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgLy8gZ3JpZC5kcmF3KGN0eCwgY2FudmFzKTtcclxuICAgICAgICAvLyBncmlkLnN0ZXAgPSBwY2I/MTAuMC9wY2Iuem9vbToxMC4wO1xyXG4gICAgICAgIC8vIGdyaWQuY3JlYXRlTGluZXMoY2FudmFzKTtcclxuICAgICAgICBncmlkLmxpbmVzLmZvckVhY2gobGluZSA9PiBsaW5lLmRyYXcoY3R4KSlcclxuICAgICAgICBtb3VzZS5kcmF3KCk7XHJcblxyXG5cclxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKFxyXG4gICAgICAgICAgICAxLCAwLFxyXG4gICAgICAgICAgICAwLCAtMSxcclxuICAgICAgICAgICAgMCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIGN0eC5zY2FsZSgxLC0xKTsgLy8gZmxpcCBkaXNwbGF5IHlcclxuXHJcbiAgICAgICAgaWYgKHBjYikge1xyXG4gICAgICAgICAgICBwY2IuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0dlcmJlckZpbGUoZmlsZTogRmlsZSkge1xyXG4gICAgaWYgKHBhZHNGaWVsZCAmJiBjb29yZHNGaWVsZCAmJiBjdHggJiYgY2FudmFzICYmIHByb2dyZXNzICYmIHByb2dyZXNzYmFyICYmIHByb2dyZXNzQ2FuY2VsICYmIGRyb3Bab25lKSB7IC8vIG1ha2VzIHR5cGVzY3JpcHQgaGFwcHkuLi5cclxuXHJcbiAgICAgICAgcGNiID0gbmV3IFBDQigpO1xyXG4gICAgICAgIHBjYi5zZXRDYW52YXMoY3R4LCBjYW52YXMpO1xyXG4gICAgICAgIGxldCBwYXJzZXIgPSBuZXcgUGFyc2VyR2VyYmVyKHBjYik7XHJcblxyXG4gICAgICAgIHBhZHNGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb29yZHNGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkcm9wWm9uZS5pbm5lclRleHQgPSBmaWxlLm5hbWU7XHJcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHBhcnNlci5wYWRzRmllbGQgPSBwYWRzRmllbGQ7XHJcbiAgICAgICAgcGFyc2VyLmNvb3Jkc0ZpZWxkID0gY29vcmRzRmllbGQ7XHJcbiAgICAgICAgcHJvZ3Jlc3NDYW5jZWwub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgcGFyc2VyLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZXIucHJvY2Vzc0NCID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc2Jhci5zdHlsZS53aWR0aCA9IGAke3ZhbHVlfSVgO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Byb2dyZXNzOicsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBwYXJzZXIucGFyc2VGaWxlKGZpbGUpO1xyXG5cclxuICAgICAgICBwY2Iuem9vbVRvRml0KFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdKTtcclxuXHJcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmdsb2JhbFRoaXMuYWNjb3JkaW9uVG9nZ2xlciA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJ3My1zaG93XCIpID09IC0xICYmIGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJ3My1oaWRlXCIpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lICs9IFwiIHczLXNob3dcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJ3My1zaG93XCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZShcInczLXNob3dcIiwgXCJ3My1oaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZShcInczLWhpZGVcIiwgXCJ3My1zaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdhY2NvcmRpb25Ub2dnbGVyIG5vIGVsZW0gd2l0aCBpZDonLCBpZCk7XHJcbiAgICB9XHJcbiAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG59XHJcblxyXG5nbG9iYWxUaGlzLm9wZW5TaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgaWYgKG1haW4gJiYgZGVidWcgJiYgb3BlblNpZGViYXJCdXR0b24pIHtcclxuICAgICAgICBtYWluLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIzNTBweFwiO1xyXG4gICAgICAgIGRlYnVnLnN0eWxlLndpZHRoID0gXCIzNTBweFwiO1xyXG4gICAgICAgIGRlYnVnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgb3BlblNpZGViYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuZ2xvYmFsVGhpcy5jbG9zZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobWFpbiAmJiBkZWJ1ZyAmJiBvcGVuU2lkZWJhckJ1dHRvbikge1xyXG4gICAgICAgIG1haW4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgIGRlYnVnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBvcGVuU2lkZWJhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH1cclxufVxyXG5cclxuZ2xvYmFsVGhpcy56b29tVG9GaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAocGNiICYmIGNhbnZhcykge1xyXG4gICAgICAgIHBjYi56b29tVG9GaXQoW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5nbG9iYWxUaGlzLnJvdGF0ZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHBjYiAmJiBjYW52YXMpIHtcclxuICAgICAgICAvLyBwY2Iuem9vbVRvRml0KFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdKTtcclxuICAgIH1cclxuICAgIG1lc3NhZ2UoJ23DvHNzdGUgbWEgZWluZXIgaW1wbGVtZW50aWVyZW4sIG5lJyk7XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMubW92ZVNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IHZhbHVlcyAhISFcclxuICAgIGNvbnN0IGVyYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZlU2V0RVJhdGVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGluaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZlU2V0SW5pdEVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHBhZGUgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZlU2V0UGFkRVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcmV0cmFjdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVTZXRSZXRyYWN0RVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgemhvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldFpIb3BcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBlcmF0ZS52YWx1ZSA9IGAke21vdmVtZW50U2V0dGluZ3MuZXJhdGV9YDtcclxuICAgIGluaXRlLnZhbHVlID0gYCR7bW92ZW1lbnRTZXR0aW5ncy5pbml0ZX1gO1xyXG4gICAgcGFkZS52YWx1ZSA9IGAke21vdmVtZW50U2V0dGluZ3MucGFkZX1gO1xyXG4gICAgcmV0cmFjdGUudmFsdWUgPSBgJHttb3ZlbWVudFNldHRpbmdzLnJldHJhY3RlfWA7XHJcbiAgICB6aG9wLnZhbHVlID0gYCR7bW92ZW1lbnRTZXR0aW5ncy56aG9wfWA7XHJcbiAgICBcclxuICAgIGdsb2JhbFRoaXMuYWNjb3JkaW9uVG9nZ2xlcignbW92ZVNldHRpbmdzUGFuZWwnKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5kZWZhdWx0TW92ZVNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgbW92ZW1lbnRTZXR0aW5ncyA9IG5ldyBNb3ZlbWVudFNldHRpbmdzKCk7XHJcblxyXG4gICAgaWYoZGV2aWNlLmFwcGx5TW92ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgZGV2aWNlLmFwcGx5TW92ZVNldHRpbmdzKG1vdmVtZW50U2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsb2JhbFRoaXMuYWNjb3JkaW9uVG9nZ2xlcignbW92ZVNldHRpbmdzUGFuZWwnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnYXBwbHlNb3ZlU2V0dGluZ3MnLCBtb3ZlbWVudFNldHRpbmdzKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5hcHBseU1vdmVTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIC8vIGdldCB2YWx1ZXMgISEhXHJcbiAgICBjb25zdCBlcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldEVSYXRlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbml0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldEluaXRFXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwYWRlICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldFBhZEVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHJldHJhY3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZlU2V0UmV0cmFjdEVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHpob3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVTZXRaSG9wXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBcclxuICAgIG1vdmVtZW50U2V0dGluZ3MuZXJhdGUgICAgPSBwYXJzZUZsb2F0KGVyYXRlLnZhbHVlKTtcclxuICAgIG1vdmVtZW50U2V0dGluZ3MuaW5pdGUgICAgPSBwYXJzZUZsb2F0KGluaXRlLnZhbHVlKTtcclxuICAgIG1vdmVtZW50U2V0dGluZ3MucGFkZSAgICAgPSBwYXJzZUZsb2F0KHBhZGUudmFsdWUpO1xyXG4gICAgbW92ZW1lbnRTZXR0aW5ncy5yZXRyYWN0ZSA9IHBhcnNlRmxvYXQocmV0cmFjdGUudmFsdWUpO1xyXG4gICAgbW92ZW1lbnRTZXR0aW5ncy56aG9wICAgICA9IHBhcnNlRmxvYXQoemhvcC52YWx1ZSk7XHJcblxyXG4gICAgaWYoZGV2aWNlLmFwcGx5TW92ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgZGV2aWNlLmFwcGx5TW92ZVNldHRpbmdzKG1vdmVtZW50U2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsb2JhbFRoaXMuYWNjb3JkaW9uVG9nZ2xlcignbW92ZVNldHRpbmdzUGFuZWwnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnYXBwbHlNb3ZlU2V0dGluZ3MnLCBtb3ZlbWVudFNldHRpbmdzKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5yZXNpemUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2FudmFzICYmIGhlYWRlciAmJiBmb290ZXIgJiYgZGVidWcgJiYgY29vcmRzKSB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQgLSBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgICBtb3VzZS5kcmF3KCk7XHJcbiAgICAgICAgZ3JpZC5kcmF3KGN0eCwgY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0IG9mIGRlYnVnIGlzIGlubmVySGVpZ2h0IC0gbWFyZ2luIHRvcC9ib3R0b20gbW9yZSBvciBsZXNzIC0gZm9vdGVyLmhlaWdodFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IG1hcmdpbicsIGRlYnVnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgICAgbGV0IGRtYXhoZWlnaHQgPSBpbm5lckhlaWdodCAtIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7IC8vIGNhbnZhcy5oZWlnaHQgKyBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gMTY7XHJcbiAgICAgICAgLy8gZGVidWcuc3R5bGUuaGVpZ2h0ID0gYCR7ZGhlaWdodH1weGA7IC8vIDE2IGlzIG1hcmdpblRvcFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IGlubmVyIGhlaWdodCcsIGlubmVySGVpZ2h0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBkZWJ1ZyBoZWlnaHQnLCBkaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0IG9mIGFsbCBvdGhlciBlbGVtZW50cyBpbiBkZWJ1Z1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGRlYnVnLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5jaGlsZDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHJlc2l6ZTogICAke2NoaWxkLmlkfSAke2VsZW0uY2xpZW50SGVpZ2h0fSAke2VsZW0uY2xhc3NOYW1lfWApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbS5jbGFzc05hbWUuaW5kZXhPZigndzMtaGlkZScpICE9IC0xKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGhlaWdodCArPSBlbGVtLmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IGRlYnVnIGNvbnRlbnQgaGVpZ2h0JywgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gc28gZmFyIHNvIGdvb2RcclxuXHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGlzIHNob3duLCBzZXQgZGVidWcgc2l6ZSB0byBtYXhcclxuICAgICAgICAvLyBpZiBjb29yZHMgaXMgc2hvd24sIGdpdmUgaXQgYWxsIHRoZSByZXN0IG9mIHRoZSBzcGFjZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgY29vcmRzICcsIGNvb3Jkcy5jbGFzc05hbWUuaW5kZXhPZigndzMtaGlkZScpKTtcclxuICAgICAgICBpZiAoY29vcmRzLmNsYXNzTmFtZS5pbmRleE9mKCd3My1oaWRlJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSBjb29yZHMgaXMgTk9UIHZpc2libGUnKTtcclxuICAgICAgICAgICAgZGVidWcuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0ICsgMTZ9cHhgO1xyXG4gICAgICAgICAgICBjb29yZHMuc3R5bGUuaGVpZ2h0ID0gYCR7MTZ9cHhgOyAvLyBlZ2FsID9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplIGNvb3JkcyBpcyB2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBjb29yZHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBkbyBub3QgY291bnQgY29vcmRzIHRvIGhpZ2h0XHJcbiAgICAgICAgICAgIGRlYnVnLnN0eWxlLmhlaWdodCA9IGAke2RtYXhoZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb29yZHMuc3R5bGUuaGVpZ2h0ID0gYCR7ZG1heGhlaWdodCAtIGhlaWdodCAtIDE2fXB4YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAodmFsKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgcmVzaXplOiAke3ZhbH1gKTtcclxuICAgIGdsb2JhbFRoaXMucmVzaXplKCk7XHJcbn0pXHJcbiIsIihmdW5jdGlvbiAoKSB7dmFyIGE9e307ZnVuY3Rpb24gZyh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gYyh0LGUpe2Zvcih2YXIgbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgcz1lW29dO3MuZW51bWVyYWJsZT1zLmVudW1lcmFibGV8fCExLHMuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHMmJihzLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLmtleSxzKX19ZnVuY3Rpb24gaCh0LGUsbyl7cmV0dXJuIGUmJmModC5wcm90b3R5cGUsZSksbyYmYyh0LG8pLHR9dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsbyl7dmFyIHM9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOlwiZ3JheVwiLGk9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOlwiMTZweCBNb25vc3BhY2VcIixyPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTowLG49YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOjA7Zyh0aGlzLHQpLHRoaXMueD1yLHRoaXMueT1uLHRoaXMuY3R4PWUsdGhpcy5jYW52YXM9byx0aGlzLmNvbG9yPXMsdGhpcy5mb250PWksdGhpcy5zZXRQb3M9dGhpcy5zZXRQb3MuYmluZCh0aGlzKX1yZXR1cm4gaCh0LFt7a2V5OlwidHJhY2tcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PSEoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0pfHxhcmd1bWVudHNbMF0sZT10aGlzLmNhbnZhcztyZXR1cm4gdD9lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLnNldFBvcyk6ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5zZXRQb3MpLHRoaXN9fSx7a2V5Olwic2V0UG9zXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIHRoaXMueD1NYXRoLmZsb29yKHQuY2xpZW50WC1lLmxlZnQpLHRoaXMueT1NYXRoLmZsb29yKHQuY2xpZW50WS1lLnRvcCksdGhpc319LHtrZXk6XCJkcmF3XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLngsZT10aGlzLnksbz10aGlzLmNhbnZhcyxzPXRoaXMuY3R4LGk9dGhpcy5mb250LHI9dGhpcy5jb2xvcixuPVwiWDogXCIuY29uY2F0KHQsXCIsIFk6IFwiKS5jb25jYXQoZSk7cy5zYXZlKCkscy5maWxsU3R5bGU9cixzLmZvbnQ9aTt2YXIgYT10PG8ud2lkdGgvMj8yMDotcy5tZWFzdXJlVGV4dChuKS53aWR0aC0yMCx2PWU8by5oZWlnaHQvMj8yNTotMTg7cmV0dXJuIHMuZmlsbFRleHQobix0aGlzLngrYSx0aGlzLnkrdikscy5yZXN0b3JlKCksdGhpc319XSksdH0oKTtmdW5jdGlvbiBkKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBmKHQsZSl7Zm9yKHZhciBpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBzPWVbaV07cy5lbnVtZXJhYmxlPXMuZW51bWVyYWJsZXx8ITEscy5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gcyYmKHMud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHMua2V5LHMpfX1mdW5jdGlvbiBlKHQsZSxpKXtyZXR1cm4gZSYmZih0LnByb3RvdHlwZSxlKSxpJiZmKHQsaSksdH12YXIgYj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxpLHMscixsLG4pe2QodGhpcyx0KSx0aGlzLmNvbG9yPWUsdGhpcy5saW5lV2lkdGg9aSx0aGlzLnN0YXJ0WD1zLHRoaXMuc3RhcnRZPXIsdGhpcy5lbmRYPWwsdGhpcy5lbmRZPW59cmV0dXJuIGUodCxbe2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNvbG9yLGk9dGhpcy5saW5lV2lkdGgscz10aGlzLnN0YXJ0WCxyPXRoaXMuc3RhcnRZLGw9dGhpcy5lbmRYLG49dGhpcy5lbmRZO3Quc2F2ZSgpLHQuYmVnaW5QYXRoKCksdC5zdHJva2VTdHlsZT1lLHQubGluZVdpZHRoPWksdC5tb3ZlVG8ocyxyKSx0LmxpbmVUbyhsLG4pLHQuc3Ryb2tlKCksdC5yZXN0b3JlKCl9fV0pLHR9KCksaj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJncmF5XCIsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06LjMscz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MTAscj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106NSxsPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTpcIkRhcmtHcmF5XCIsbj1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06LjUsbz1hcmd1bWVudHMubGVuZ3RoPjYmJnZvaWQgMCE9PWFyZ3VtZW50c1s2XT9hcmd1bWVudHNbNl06XCIxNnB4IE1vbm9zcGFjZVwiO2QodGhpcyx0KSx0aGlzLmNvbG9yPWUsdGhpcy5saW5lV2lkdGg9aSx0aGlzLnN0ZXA9cyx0aGlzLmJvbGROdGg9cix0aGlzLmJvbGRDb2xvcj1sLHRoaXMuYm9sZFdpZHRoPW4sdGhpcy5mb250PW8sdGhpcy5saW5lcz1udWxsfXJldHVybiBlKHQsW3trZXk6XCJjcmVhdGVMaW5lc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLmNvbG9yLGk9dGhpcy5saW5lV2lkdGgscz10aGlzLnN0ZXAscj10aGlzLmJvbGROdGgsbD10aGlzLmJvbGRDb2xvcixuPXRoaXMuYm9sZFdpZHRoLG89W10sYT1yKnMsaD0wO2g8dC53aWR0aDtoKz1zKXt2YXIgdj1oJWE9PTA7by5wdXNoKHY/bmV3IGIobCxuLGgsMCxoLHQuaGVpZ2h0KTpuZXcgYihlLGksaCwwLGgsdC5oZWlnaHQpKX1mb3IodmFyICQ9MDskPHQuaGVpZ2h0OyQrPXMpe3ZhciBkPSQlYT09MDtvLnB1c2goZD9uZXcgYihsLG4sMCwkLHQud2lkdGgsJCk6bmV3IGIoZSxpLDAsJCx0LndpZHRoLCQpKX10aGlzLmxpbmVzPW99fSx7a2V5OlwiZHJhd1RleHRcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuc3RlcCxzPXRoaXMuYm9sZE50aCxyPXRoaXMuYm9sZENvbG9yLGw9dGhpcy5mb250O3Quc2F2ZSgpLHQuZm9udD1sLHQuZmlsbFN0eWxlPXIsdC5maWxsVGV4dChcIjBcIiwxLDE1KTtmb3IodmFyIG49aSpzO248ZS53aWR0aDtuKz1pKnMpdC5maWxsVGV4dChuLG4sMTUpO2Zvcih2YXIgbz1pKnM7bzxlLmhlaWdodDtvKz1pKnMpdC5maWxsVGV4dChvLDAsbysxNSk7dC5yZXN0b3JlKCl9fSx7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dGhpcy5saW5lc3x8dGhpcy5jcmVhdGVMaW5lcyhlKSx0aGlzLmxpbmVzLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUuZHJhdyh0KX0pLHRoaXMuZHJhd1RleHQodCxlKX19XSksdH0oKTthLk1vdXNlPWksYS5HcmlkPWo7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9YX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShmdW5jdGlvbigpe3JldHVybiBhfSl9fSkoKTsiLCIvLyB0b2RvOlxyXG4vLyAgIG1vdmUgb3V0IHNlcmlhbCA/IE9yIGxvb2sgZm9yIGEgc2VyaWFsIHJlYWRsaW5lIGltcGxlbWVudGF0aW9uID8/P1xyXG4vLyBidWdzOlxyXG4vLyAgIGRpc2Nvbm5lY3QgLSBGYWlsZWQgdG8gZXhlY3V0ZSAnY2xvc2UnIG9uICdTZXJpYWxQb3J0JzogQ2Fubm90IGNhbmNlbCBhIGxvY2tlZCBzdHJlYW1cclxuXHJcbmltcG9ydCB7IFBhZCB9IGZyb20gXCIuL3BjYlwiO1xyXG5cclxuLyoqXHJcbiAqIERldmljZTogYWJzdHJhY3RzIGFjY2VzcyB0byBtYWNoaW5lLlxyXG4gKiBJdCBcInNpbXBsaWZpZXNcIiBzZXJpYWwgcG9ydCBhY2Nlc3MuIEF0IHRoZSBtb21lbnQgaXQgb25seSBvbGxvd3MgXCJ3cml0ZSBhbmQgcmVzcG9uc2VcIiBzdHlsZSBjb21tdW5pY2F0aW9uLlxyXG4gKiBUaGUgc2VyaWFsIHBvcnQgaXMgb3BlbmVkLCB0aGVuIGEgcmVhZGVyIGxvb3AgaXMgc3RhcnRldCwgd2hpY2ggcHVzaGVzIGVhY2ggbmV3IGxpbmUgaW50byB0aGUgaW5wdXRRdWV1ZS5cclxuICogRnVuY3Rpb24gc2VyaWFsV3JpdGVXYWl0IGlzIHVzZWQgdG8gaXNzdWUgY29tbWFuZHMgYW5kIHdhaXQgZm9yIHRoZSBkZXZpY2UgdG8gYWtub3dsZWRnZS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZW1lbnRTZXR0aW5ncyB7XHJcbiAgICBlcmF0ZSA9IDUwO1xyXG4gICAgaW5pdGUgPSAxMDtcclxuICAgIHBhZGUgID0gMTtcclxuICAgIHJldHJhY3RlID0gLTEwO1xyXG4gICAgemhvcCA9IDM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2Uge1xyXG4gICAgZGV2aWNlQ2hlY2s6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUNvbm5lY3Q6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZURpc2Nvbm5lY3Q6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUlucHV0Rm9ybTogSFRNTEZvcm1FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUluZm86IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUxvZzogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlU2VyaWFsOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgICBwb3J0czogYW55O1xyXG4gICAgcG9ydDogYW55O1xyXG4gICAgdGV4dERlY29kZXI6IFRleHREZWNvZGVyU3RyZWFtO1xyXG4gICAgcmVhZGVyOiBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXI8c3RyaW5nPjtcclxuICAgIGlucHV0TGFzdDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgcHJvdGVjdGVkIGlucHV0UXVldWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VDaGVjayA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VDaGVja1wiKTtcclxuICAgICAgICB0aGlzLmRldmljZUNvbm5lY3QgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlQ29ubmVjdFwiKTtcclxuICAgICAgICB0aGlzLmRldmljZURpc2Nvbm5lY3QgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlRGlzY29ubmVjdFwiKTtcclxuICAgICAgICB0aGlzLmRldmljZUlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlSW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJbnB1dEZvcm0gPSA8SFRNTEZvcm1FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUlucHV0Rm9ybVwiKTtcclxuICAgICAgICB0aGlzLmRldmljZUluZm8gPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlSW5mb1wiKTtcclxuICAgICAgICB0aGlzLmRldmljZUxvZyA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VMb2dcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlU2VyaWFsXCIpO1xyXG4gICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlclN0cmVhbSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZUNoZWNrICYmIHRoaXMuZGV2aWNlQ29ubmVjdCAmJiB0aGlzLmRldmljZURpc2Nvbm5lY3QgJiYgdGhpcy5kZXZpY2VJbnB1dCAmJiB0aGlzLmRldmljZUlucHV0Rm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUNoZWNrLm9uY2xpY2sgPSB0aGlzLnNlcmlhbENoZWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlQ29ubmVjdC5vbmNsaWNrID0gdGhpcy5zZXJpYWxDb25uZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlRGlzY29ubmVjdC5vbmNsaWNrID0gdGhpcy5zZXJpYWxEaXNjb25uZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGV2aWNlRG9zb21lLm9uY2xpY2sgPSB0aGlzLnNlcmlhbERvc29tZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRldmljZUlucHV0Lm9uY2hhbmdlID0gdGhpcy5zZXJpYWxJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUlucHV0Rm9ybS5vbnN1Ym1pdCA9IHRoaXMuc2VyaWFsSW5wdXRGb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VyaWFsQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwbHlNb3ZlU2V0dGluZ3M/KHNldHRpbmdzOiBNb3ZlbWVudFNldHRpbmdzKTtcclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBTZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gdG8gWmVyby4gQWxsIGZ1cnRoZXIgY29tbWFuZHMgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzIHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0WmVybz8ocG9pbnQ6W251bWJlcixudW1iZXJdKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBNb3ZlIHRvIHBvc2l0aW9uLiBJZiBvbmUgY29vcmRpbmF0ZSBpcyB1bmRlZmluZWQsIGl0J3MgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZVRvPyh4Om51bWJlcnx1bmRlZmluZWQsIHk6bnVtYmVyfHVuZGVmaW5lZCwgejpudW1iZXJ8dW5kZWZpbmVkLCBlOiBudW1iZXIgfCB1bmRlZmluZWQpOiB2b2lkXHJcbiAgICBwdWJsaWMgbW92ZVRvQWxsPyhwbGlzdDogUGFkW10sIHN0YXJ0OltudW1iZXIsbnVtYmVyXSk7XHJcblxyXG4gICAgcHVibGljIGJsb2I/KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVyd3JpdGUgdGhpcyBpbiBkZXJpdmVkIGNsYXNzIHRvIGdldCBub3RpZmljYXRpb24gd2hlbiBzb21lIGRldmljZSB3YXMgY29ubmVjdGVkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxDb25uZWN0ZWQ/KCk6dm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlIHRoaXMgaW4gZGVyaXZlZCBjbGFzcyB0byBnZXQgbm90aWZpY2F0aW9uIHdoZW4gc29tZSBkZXZpY2Ugd2FzIGRpc2Nvbm5lY3RlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU2VyaWFsRGlzY29ubmVjdGVkPygpOnZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVucyBhIGRpYWxvZyB3aGVyZSB1c2VyIGNhbiBzZWxlY3QgYSBkZXZpY2UgdG8gY29ubmVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbENvbm5lY3QoKSB7XHJcbiAgICAgICAgLy8gb3BlbnMgZGlhbG9nIHdoZXJlIHVzZXIgY2FuIHNlbGVjdCBhIGRldmljZVxyXG4gICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLnJlcXVlc3RQb3J0KCkudGhlbigocG9ydCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VyaWFsQ29ubmVjdCcsIHBvcnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFBvcnRPcGVuKHBvcnQpO1xyXG4gICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdzZXJpYWxDb25uZWN0JyxyZWFzb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbEVycm9yKHJlYXNvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbENvbm5lY3REZXZpY2UodmlkOiBudW1iZXIsIHBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcG9ydCBvZiB0aGlzLnBvcnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXJpYWxDb25uZWN0RGV2aWNlOiBzZXJpYWwgYXZhaWxhYmxlLCBwb3J0czogYCwgcG9ydC5nZXRJbmZvKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzYlByb2R1Y3RJZCwgdXNiVmVuZG9ySWQgfSA9IHBvcnQuZ2V0SW5mbygpO1xyXG4gICAgICAgICAgICBpZiAodXNiUHJvZHVjdElkID09IHBpZCAmJiB1c2JWZW5kb3JJZCA9PSB2aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsUG9ydE9wZW4ocG9ydCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgZnJvbSBkZXZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbERpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlYWRlci5yZWxlYXNlTG9jaygpOyAvLyBkb2VzJ250IGRvIGl0IDooXHJcbiAgICAgICAgICAgIHRoaXMucG9ydC5jbG9zZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3J0IGNsb3NlZCcpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBXYWl0IHVudGlsIHNvbWUgcmVzcG9uc2Ugb3IgdGltZW91dCwgcmV0dXJucyByZXNwb25zZSBvciAndGltZW91dCcgb3IgbWlnaHQgZmFpbCB3aXRoICdidXN5JyBvciAnZGlzY29ubmVjdGVkJ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsV3JpdGVXYWl0KHZhbHVlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICAvLyBjbGVhbiBzZXJpYWwgaW5wdXRcclxuICAgICAgICB0aGlzLmlucHV0UXVldWUgPSBbXTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCB1bnRpbCBzb21lIHJlc3BvbnNlIG9yIHRpbWVvdXRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXN0ZXAgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4dGltZSA9IHRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFhdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gYXdhaXQgdGhpcy5zZXJpYWxBdmFpbCh0aW1lc3RlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heHRpbWUgPSBtYXh0aW1lIC0gdGltZXN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXh0aW1lIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFdyaXRlV2FpdCBhdmFpbDoke2F2YWlsYWJsZX0gdGltZToke3RpbWVvdXQgLSBtYXh0aW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgY2hlY2s6ICR7dGhpcy5pbnB1dFF1ZXVlLmxlbmd0aH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wID0gPHN0cmluZz50aGlzLmlucHV0UXVldWUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgcmVzb2x2ZTogJHtpbnB9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5wKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IHJlamVjdDogYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgndGltZW91dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnYnVzeScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKHRoaXMucG9ydCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoJ2Rpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byB3cml0ZSBhbnl0aGluZyB0byB0aGUgZGV2aWNlLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxJbnB1dEZvcm0oZXZlbnQ6IElucHV0RXZlbnQpIHsgLy8gZmlyZXMgd2hlbiByZXR1cm4gaXMgZW50ZXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmRldmljZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGZvcm0gd2lsbCBkbyBzdHJhbmdlIHRoaW5ncyAhXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxJbnB1dENoYW5nZShldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHdyaXRlIGFueXRoaW5nIHRvIHRoZSBkZXZpY2UuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbElucHV0Q2hhbmdlKGV2ZW50OiBJbnB1dEV2ZW50KSB7IC8vIGZpcmVzIHdoZW4gcmV0dXJuIGlzIGVudGVyZWRcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VJbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZGV2aWNlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2VyaWFsSW5wdXRDaGFuZ2UgLSBubyBwb3J0IG9wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKiBwcml2YXRlIHN0dWZmICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbENoZWNrKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoXCJzZXJpYWxcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3J0cygpO1xyXG4gICAgICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5hZGRFdmVudExpc3RlbmVyKFwiY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEF1dG9tYXRpY2FsbHkgb3BlbiBldmVudC50YXJnZXQgb3Igd2FybiB1c2VyIGEgcG9ydCBpcyBhdmFpbGFibGUuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VyaWFsQ2hlY2s6Y29ubmVjdCcsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUG9ydHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHxldmVudC50YXJnZXR8IGZyb20gdGhlIFVJLlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlcmlhbCBwb3J0IHdhcyBvcGVuZWQsIGEgc3RyZWFtIGVycm9yIHdvdWxkIGJlIG9ic2VydmVkIGFzIHdlbGwuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VyaWFsQ2hlY2s6ZGlzY29ubmVjdCcsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdObyBzZXJpYWwgQVBJIGF2YWlsYWJsZSwgdHJ5IGFub3RoZXIgYnJvd3NlcicpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbEVycm9yKFwiVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHNlcmlhbCBwb3J0LiBDb25uZWN0aW9uIHRvIGRldmljZSBpbXBvc3NpYmxlISBVc2UgQ2hyb21lIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBvcnRzKCkge1xyXG4gICAgICAgIC8vIGxpc3RzIGFsbCByZWNlbnRseSB1c2VkIHBvcnRzLCBjb3VsZCBqdXN0IG9wZW4gb25lIHRoZW4uXHJcbiAgICAgICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJpYWwuZ2V0UG9ydHMoKS50aGVuKChwb3J0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlUG9ydHM6JywgcG9ydHMpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRzID0gcG9ydHM7XHJcbiAgICAgICAgICAgIGxldCBodG1sID0gJyc7Ly9kZXZpY2VzOjxicj4nO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3J0IG9mIHBvcnRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VyaWFsIGF2YWlsYWJsZSwgcG9ydHM6IGAsIHBvcnQuZ2V0SW5mbygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgdXNiUHJvZHVjdElkLCB1c2JWZW5kb3JJZCB9ID0gcG9ydC5nZXRJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdXBkYXRlUG9ydHMgcG9ydCBwaWQ6JHt1c2JQcm9kdWN0SWR9IHZpZDoke3VzYlZlbmRvcklkfWApO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWljcm9jaGlwXCI+PC9pPiBwaWQ6JHt1c2JQcm9kdWN0SWR9IHZpZDoke3VzYlZlbmRvcklkfSA8YnV0dG9uIGNsYXNzPVwidzMtYnRuIHczLXJvdW5kIHczLWxpZ2h0LWdyZXkgdzMtdGlueVwiIGlkPVwiJHt1c2JWZW5kb3JJZH0tJHt1c2JQcm9kdWN0SWR9XCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVnXCI+PC9pPiBjb25uZWN0IDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VJbmZvLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidG5zID0gdGhpcy5kZXZpY2VJbmZvLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYnRuIG9mIGJ0bnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHsgY29uc3QgaWRzID0gYnRuLmlkLnNwbGl0KCctJyk7IGNvbnNvbGUubG9nKGlkcyk7IHRoaXMuc2VyaWFsQ29ubmVjdERldmljZShwYXJzZUludChpZHNbMF0pLCBwYXJzZUludChpZHNbMV0pKSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUNvbm5lY3QgJiYgKHRoaXMucG9ydHMgPT0gbnVsbCB8fCB0aGlzLnBvcnRzLmxlbmd0aCA9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVBvcnRzOiBvcGVuIGRldiBidXR0b25zISEhJywgdGhpcy5kZXZpY2VDb25uZWN0LmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUNvbm5lY3QuY2xhc3NOYW1lID0gdGhpcy5kZXZpY2VDb25uZWN0LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYSBnaXZ2ZW4gcG9ydC4gQ2FuIGJlIHVzZWQgYWZ0ZXIgcXVlcmlpbmcgcG9ydHMgd2l0aCB1cGRhdGVQb3J0cy5cclxuICAgICAqIEBwYXJhbSBwb3J0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2VyaWFsUG9ydE9wZW4ocG9ydDogYW55KSB7XHJcbiAgICAgICAgcG9ydC5vbmNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDT05ORUNURURgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHBvcnQub25kaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRElTQ09OTkVDVEVEYCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25TZXJpYWxEaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZXJpYWxEaXNjb25uZWN0ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcG9ydC5vcGVuKHsgYmF1ZFJhdGU6IDI1MDAwMCB9KS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlTG9nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUxvZy5pbm5lckhUTUwgPSBcImNvbm5lY3RlZDxicj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9ydCBvcGVuZWQgPyAnLCB0aGlzLnBvcnQpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uU2VyaWFsQ29ubmVjdGVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZXJpYWxDb25uZWN0ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNlcmlhbFJlYWQuYmluZCh0aGlzKSwgMCk7IC8vIHN0YXJ0IHJlYWQgbG9vcFxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbEVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXJpYWxFcnJvcihlcnJvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdzZXJpYWxFcnJvcicsIGVycm9yKTtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VMb2cpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VMb2cuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidzMtcmVkXCI+JHtlcnJvcn08L3NwYW4+PGJyPmBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCwgc3RhcnRzIHRoZSByZWFkIGxpbmUgbG9vcC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxSZWFkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGFibGVTdHJlYW1DbG9zZWQgPSB0aGlzLnBvcnQucmVhZGFibGUucGlwZVRvKHRoaXMudGV4dERlY29kZXIud3JpdGFibGUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRlciA9IHRoaXMudGV4dERlY29kZXIucmVhZGFibGUuZ2V0UmVhZGVyKCk7XHJcbiAgICAgICAgICAgIC8vIExpc3RlbiB0byBkYXRhIGNvbWluZyBmcm9tIHRoZSBzZXJpYWwgZGV2aWNlLlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsUmVhZG9uLmJpbmQodGhpcyksIDEpOyAvLyB3aWxsIGxvb3AgdGhlcmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCwgaGFuZGxlcyB0aGUgcmVhZCBsaW5lIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc2VyaWFsUmVhZG9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGF3YWl0IHRoaXMucmVhZGVyLnJlYWQoKTtcclxuICAgICAgICAgICAgaWYgKGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSBzZXJpYWwgcG9ydCB0byBiZSBjbG9zZWQgbGF0ZXIuIC8vIERvZXMgbm90IGhhcHBlbiAhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRlci5yZWxlYXNlTG9jaygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbFJlYWQgLSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHVzaGVkU3R1ZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlIGlzIGEgc3RyaW5nLlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ1xcbicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBc3NlcnRpb24gZmFpbGVkICcsIHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTsgLy8gdGhlcmUgaXMgYSBcXG4gaW4gaXQgIVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCArPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRRdWV1ZS5wdXNoKHRoaXMuaW5wdXRMYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxMb2codGhpcy5pbnB1dExhc3QsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoZWRTdHVmZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRMYXN0ID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsUmVhZG9uIGxhc3Q6IFwiJHt0aGlzLmlucHV0TGFzdH1cImApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyBcXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsUmVhZG9uIGxhc3Q6IFwiJHt0aGlzLmlucHV0TGFzdH1cImApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwdXNoZWRTdHVmZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxDYWxsYmFjay5iaW5kKHRoaXMpLCA1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxSZWFkb24uYmluZCh0aGlzKSwgMSk7IC8vIHdpbGwgbG9vcCB0aGVyZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJpYWxDYWxsYmFjaygpIHtcclxuICAgICAgICAvLyBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmljZUxvZycpO1xyXG4gICAgICAgIC8vIGlmIChlbGVtKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBsYXRlc3QgPSB0aGlzLmlucHV0UXVldWUucG9wKCk7XHJcbiAgICAgICAgLy8gICAgIHdoaWxlIChsYXRlc3QpIHtcclxuICAgICAgICAvLyAgICAgICAgIGVsZW0uaW5uZXJIVE1MICs9IGAke2xhdGVzdH08YnI+YDtcclxuICAgICAgICAvLyAgICAgICAgIGxhdGVzdCA9IHRoaXMuaW5wdXRRdWV1ZS5wb3AoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbFdyaXRlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbExvZyh2YWx1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyB3cml0ZS4uLlxyXG4gICAgICAgIGxldCB1dGY4RW5jb2RlID0gbmV3IFRleHRFbmNvZGVyKCk7XHJcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gdGhpcy5wb3J0LndyaXRhYmxlLmdldFdyaXRlcigpO1xyXG4gICAgICAgIGF3YWl0IHdyaXRlci53cml0ZSh1dGY4RW5jb2RlLmVuY29kZShgJHt2YWx1ZX1cXG5gKSk7XHJcbiAgICAgICAgd3JpdGVyLnJlbGVhc2VMb2NrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXYWl0cyB1bnRpbCBkYXRhIHdhcyByZWFkIG9yIHRpbWVvdXRcclxuICAgICAqIEBwYXJhbSB0aW1lb3V0XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlcmlhbEF2YWlsKHRpbWVvdXQ6IG51bWJlciA9IDEwKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0UXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcmlhbExvZyh0ZXh0OiBzdHJpbmcsIGluY29tbWluZzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZVNlcmlhbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5kZXZpY2VTZXJpYWwuY2hpbGRFbGVtZW50Q291bnQgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoID0gdGhpcy5kZXZpY2VTZXJpYWwuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgIGlmIChjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsLnJlbW92ZUNoaWxkKGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5jb21taW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZVNlcmlhbC5pbm5lckhUTUwgKz0gYDxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hcnJvdy1yaWdodC10by1icmFja2V0XCI+PC9pPiAke3RleHR9PC9kaXY+YFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwuaW5uZXJIVE1MICs9IGA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcIj48L2k+ICR7dGV4dH08L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBNYXJsaW46IERldmljZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbi5cclxuKi9cclxuXHJcbmltcG9ydCB7IGtkVHJlZSB9IGZyb20gJ2tkLXRyZWUtamF2YXNjcmlwdCc7IC8vIG5vZGUgbW9kdWxlXHJcbi8vIGltcG9ydCB7IGtkVHJlZSB9IGZyb20gJy4va2RUcmVlJztcclxuaW1wb3J0IHsgRGV2aWNlLCBNb3ZlbWVudFNldHRpbmdzIH0gZnJvbSBcIi4vZGV2aWNlXCI7XHJcbmltcG9ydCB7IFBDQiwgUGFkIH0gZnJvbSBcIi4vcGNiXCI7XHJcblxyXG5lbnVtIFN0YXR1cyB7XHJcbiAgICBVbmRlZmluZWQgPSAxLFxyXG4gICAgUmVhZHksXHJcbiAgICBCdXN5LFxyXG4gICAgTkNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmxpbiBleHRlbmRzIERldmljZSB7XHJcbiAgICBtYXJsaW5EaXY6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdlN0YXR1czogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbWFybGluRGl2UG9zaXRpb246IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdkNvbW1hbmRzOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgemVybzogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuICAgIHBhZFhZOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHBhZFo6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgbW92ZW1lbnRTZXR0aW5nczogTW92ZW1lbnRTZXR0aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWFybGluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJsaW5cIik7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudFNldHRpbmdzID0gbmV3IE1vdmVtZW50U2V0dGluZ3MoKTtcclxuICAgICAgICB0aGlzLmluaXRIdG1sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGx5TW92ZVNldHRpbmdzKG1vdmVtZW50U2V0dGluZ3M6IE1vdmVtZW50U2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLm1vdmVtZW50U2V0dGluZ3MgPSBtb3ZlbWVudFNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBTZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gdG8gWmVyby4gQWxsIGZ1cnRoZXIgY29tbWFuZHMgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzIHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0WmVybyhwb2ludDogW251bWJlciwgbnVtYmVyXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuemVybyA9IHBvaW50O1xyXG4gICAgICAgIHRoaXMub25CdG5BYnMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0c5MiBYMCBZMCBaMCcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ0blBvcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVyd3JpdGUhIE1vdmUgdG8gcG9zaXRpb24uIElmIG9uZSBjb29yZGluYXRlIGlzIHVuZGVmaW5lZCwgaXQncyBpZ25vcmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyIHwgdW5kZWZpbmVkLCB5OiBudW1iZXIgfCB1bmRlZmluZWQsIHo6IG51bWJlciB8IHVuZGVmaW5lZCwgZTogbnVtYmVyIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNtZCA9ICdHMCAnO1xyXG4gICAgICAgIGlmICh4ICE9IHVuZGVmaW5lZCkgY21kICs9IGBYJHt4IC0gdGhpcy56ZXJvWzBdfSBgO1xyXG4gICAgICAgIGlmICh5ICE9IHVuZGVmaW5lZCkgY21kICs9IGBZJHt5IC0gdGhpcy56ZXJvWzFdfSBgO1xyXG4gICAgICAgIGlmICh6ICE9IHVuZGVmaW5lZCkgY21kICs9IGBaJHt6fSBgO1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KGNtZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25CdG5Qb3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1vdmVUb0FsbChwbGlzdDogUGFkW10sIHN0YXJ0OiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmxpbjptb3ZlVG9BbGwnLCBwbGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBsaXN0KTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJlZSA9IG5ldyBrZFRyZWUocGxpc3QsIFBDQi5kaXN0YW5jZSwgW1wicG9zWFwiLCBcInBvc1lcIl0pO1xyXG4gICAgICAgIC8vIGNvbnN0IHRyZWUgPSBuZXcga2RUcmVlKFBDQiwgcGxpc3QsIFBDQi5kaXN0YW5jZSwgW1wicG9zWFwiLCBcInBvc1lcIl0pO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRwYWQgPSBuZXcgUGFkKCcnLCBzdGFydFswXSwgc3RhcnRbMV0pO1xyXG4gICAgICAgIGxldCBzZWFyY2ggPSB0cmVlLm5lYXJlc3Qoc3RhcnRwYWQsIDEpO1xyXG4gICAgICAgIGxldCBmb3VuZHBhZCA9IHNlYXJjaFswXVswXTtcclxuXHJcbiAgICAgICAgbGV0IGZvdW5kcGFkczogUGFkW10gPSBbXTsgLy8ganVzdCBmb3IgbG9nXHJcblxyXG4gICAgICAgIHRoaXMub25CdG5BYnMoKS50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgLy8gaW5pdGlhbCBleHRydWRlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZXh0cnVkZSh0aGlzLm1vdmVtZW50U2V0dGluZ3MuaW5pdGUpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVzaG90ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHJlZSBkdW1wOicpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodHJlZS50b0pTT04oKSwgdW5kZWZpbmVkLCA0KSk7IC8vIGR1bXAgdHJlZVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gdHJlZS5uZWFyZXN0KGZvdW5kcGFkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kcGFkID0gc2VhcmNoWzBdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kcGFkcy5wdXNoKGZvdW5kcGFkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3ZlQW5kQmxvYihmb3VuZHBhZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbWQgKz0gYFgke2ZvdW5kcGFkLnBvc1ggLSB0aGlzLnplcm9bMF19IGA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY21kICs9IGBZJHtmb3VuZHBhZC5wb3NZIC0gdGhpcy56ZXJvWzFdfSBgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VyaWFsV3JpdGVXYWl0KGNtZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gY2F0Y2ggKHdoYXQpIHsgfSAvLyBpZ25vcmUgZGlzY29ubmVjdGVkIGZvciBkZWJ1Z2dpbmdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vIHJlbW92ZSBzZWVtcyB0byBiZSBidWdpIDooKChcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2sgPSB0cmVlLnJlbW92ZShmb3VuZHBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYob2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYE1hcmxpbjptb3ZlVG9BbGwgcmVtb3ZlZCBwYWRgLCBmb3VuZHBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKGBNYXJsaW46bW92ZVRvQWxsIE5PVCByZW1vdmVkIHBhZCwgdGhhcyBiYWQgOihgLCBmb3VuZHBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyZWVzaG90ID0gSlNPTi5zdHJpbmdpZnkodHJlZS50b0pTT04oKSwgdW5kZWZpbmVkLCA0KTsgLy8ga2VlcCB0cmVlIGZvciBkZWJ1ZyAhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJlZXNob3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZwYWQgb2YgZm91bmRwYWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1hcmxpbjptb3ZlVG9BbGwgcGFkOiR7ZnBhZC5wb3NYfTtcXHQke2ZwYWQucG9zWX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHdoYXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHNlcmlhbFdyaXRlV2FpdCBmYWlscywgZG8gc29tZXRoaW5nID9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1hcmxpbjptb3ZlVG9BbGw6IGZhaWxlZFwiLCB3aGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByZXRyYWN0XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZXh0cnVkZSh0aGlzLm1vdmVtZW50U2V0dGluZ3MucmV0cmFjdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleHRydWRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoYEcwIEUke3ZhbHVlfWApLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1vdmVBbmRCbG9iKGZvdW5kcGFkOiBQYWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICAgICAgY21kICs9IGBYJHtmb3VuZHBhZC5wb3NYIC0gdGhpcy56ZXJvWzBdfSBgO1xyXG4gICAgICAgICAgICBjbWQgKz0gYFkke2ZvdW5kcGFkLnBvc1kgLSB0aGlzLnplcm9bMV19IGA7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdNODMnKS50aGVuKCgpID0+IHsgLy8gZXh0cnVkZXIgcmVsYXRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdChgRzAgWiR7dGhpcy5tb3ZlbWVudFNldHRpbmdzLnpob3B9YCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdChgRzAgRSR7dGhpcy5tb3ZlbWVudFNldHRpbmdzLnBhZGV9YCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFowJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KGBHMCBaJHt0aGlzLm1vdmVtZW50U2V0dGluZ3MuemhvcH1gKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ2pvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAod2hhdCkgeyB9IC8vIGlnbm9yZSBkaXNjb25uZWN0ZWQgZm9yIGRlYnVnZ2luZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGJsb2IoKSB7XHJcbiAgICAgICAgdGhpcy5vbkJ0bkFicygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTgzJykudGhlbigoKSA9PiB7IC8vIGV4dHJ1ZGVyIHJlbGF0aXZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBFMTAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFowJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbENvbm5lY3RlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOiBvblNlcmlhbENvbm5lY3RlZCcpO1xyXG4gICAgICAgIC8vIHJlYWQgb3ZlciBmaXJzdCBtZXNzYWdlc1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB3aGlsZSh0aGlzLmlucHV0UXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMubWFybGluRGl2UG9zaXRpb24pIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uLmlubmVySFRNTCArPSBgJHt0aGlzLmlucHV0UXVldWUucG9wKCl9YDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5SZWFkeSlcclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZTdGF0dXMgJiYgdGhpcy5tYXJsaW5EaXZDb21tYW5kcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuUmVhZHkpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzLmNsYXNzTmFtZSA9IHRoaXMubWFybGluRGl2Q29tbWFuZHMuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLWhpZGUnLCAndzMtc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgLy8gd2FpdCAzc2VjLCBydW4gY29tbWFuZHMgJ2NvbGQgZXh0cnVkZScsJ3JlbGF0aXZlIHBvc2l0aW9uaW5nJywncmVwb3J0IHBvc2l0aW9uJ1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuQ29sZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ0blJlbCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5Qb3MoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01hcmxpbjogb25TZXJpYWxDb25uZWN0ZWQgaW5pdCBzZXF1ZW5jZSBmaW5pc2hlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uU2VyaWFsRGlzY29ubmVjdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46IG9uU2VyaWFsRGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2U3RhdHVzICYmIHRoaXMubWFybGluRGl2Q29tbWFuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLk5DKTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUgPSB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzLmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmhlcml0ZWQgZnJvbSBEZXZpY2UsIGFkZHMgU3RhdHVzIG1lc3NhZ2UgdXBkYXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHRpbWVvdXRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxXcml0ZVdhaXQodmFsdWU6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gMTAwMDApOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLkJ1c3kpO1xyXG4gICAgICAgICAgICBzdXBlci5zZXJpYWxXcml0ZVdhaXQodmFsdWUsIHRpbWVvdXQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuUmVhZHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0YXR1cyhzdGF0dXM6IFN0YXR1cykge1xyXG4gICAgICAgIGxldCBodG1sID0gYHVua25vd24gc3RhdHVzICR7c3RhdHVzfWA7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuUmVhZHk6XHJcbiAgICAgICAgICAgICAgICBodG1sID0gJ1N0YXR1czogPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVnXCI+PC9pPiByZWFkeSc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5CdXN5OlxyXG4gICAgICAgICAgICAgICAgaHRtbCA9ICdTdGF0dXM6IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1Zy1jaXJjbGUtYm9sdFwiPjwvaT4gYnVzeSc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5OQzpcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnU3RhdHVzOiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdWctY2lyY2xlLXhtYXJrXCI+PC9pPiBub3QgY29ubmVjdGVkJzsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlN0YXR1cykge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlN0YXR1cy5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkhvbWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMjgnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKVxyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vLy8gdGltZW91dCB0b28gc21hbGwgZm9yIHRoaXMgY29tbWFuZCwgc2VlIHdoYXQgaGFwcGVuc1xyXG4gICAgICAgIC8vIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMjgnLCAxMDApLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAvLyB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgIC8vICAgICAvLyB0cnkgYWdhaW4gKGRlZmF1bHQgdGltZW91dCBpcyAxMHNlYylcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cyOCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm9uQnRuUG9zKCk7XHJcbiAgICAgICAgLy8gICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHsgY29uc29sZS53YXJuKHJlYXNvbikgfSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5Qb3MoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdNMTE0JykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGhpZXIga29tbXQgZWluZSB6ZWlsZSBtaXQgemFobGVuIHVuZCBlaW5lIG1pdCBva1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQnRuUG9zJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFybGluRGl2UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuQWJzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzkwJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQnRuUmVsKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzkxJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQnRuQ29sZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ00zMDIgUzAnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuWFAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFgxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5YTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWC0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5ZUCgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bllNKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBZLTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0blpQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWk0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFotMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuRVAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIEUxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5FTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRS0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbGNYWShldmVudDogUG9pbnRlckV2ZW50LCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yID0gKGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoXCJTaGlmdFwiKSkgPyAwLjA1IDogMC41O1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBtb3VzZSBjbGljayBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IG1vdXNlWCA9IChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gcmVjdC53aWR0aCAvIDIpICogZmFjdG9yO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlWSA9IChldmVudC5jbGllbnRZIC0gcmVjdC50b3AgLSByZWN0LmhlaWdodCAvIDIpICogLTEgKiBmYWN0b3I7XHJcblxyXG4gICAgICAgIHJldHVybiBbbW91c2VYLCBtb3VzZVldO1xyXG4gICAgfVxyXG4gICAgb25QYWRYWWhvdmVyKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uUGFkWFlob3ZlciBcIiwgbW91c2VYLCBtb3VzZVkpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuY2FsY1hZKGV2ZW50LCB0aGlzLnBhZFhZKTtcclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZQb3NpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uLmlubmVySFRNTCA9IGB4OiR7cG9zWzBdLnRvRml4ZWQoMil9IHk6JHtwb3NbMV0udG9GaXhlZCgyKX0gejotLS1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uUGFkWFljbGljayhldmVudDogUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5jYWxjWFkoZXZlbnQsIHRoaXMucGFkWFkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25QYWRYWWNsaWNrIFwiLCBwb3NbMF0sIHBvc1sxXSk7XHJcblxyXG4gICAgICAgIHRoaXMub25CdG5SZWwoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG8ocG9zWzBdLCBwb3NbMV0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uUGFkWmhvdmVyKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uUGFkWFlob3ZlciBcIiwgbW91c2VYLCBtb3VzZVkpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuY2FsY1hZKGV2ZW50LCB0aGlzLnBhZFopO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2UG9zaXRpb24uaW5uZXJIVE1MID0gYHg6LS0tIHk6LS0tIHo6JHtwb3NbMV0udG9GaXhlZCgyKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uUGFkWmNsaWNrKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uUGFkWjogXCIsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5jYWxjWFkoZXZlbnQsIHRoaXMucGFkWik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvblBhZFpjbGljayBcIiwgcG9zWzBdLCBwb3NbMV0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uQnRuUmVsKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRvKDAsIDAsIHBvc1sxXSwgdW5kZWZpbmVkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBzb21lIGJ1dHRvbnMgZm9yIE1hcmxpbiBzcGVjaWZpYyBhY3Rpb25zLi4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdEh0bWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInczLWJvcmRlciB3My1ib3JkZXItZGFyay1ncmV5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFybGluU3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFybGluUG9zaXRpb25cIiBjbGFzcz1cInczLXRpbnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibWFybGluTW92ZVwiIGNsYXNzPVwidzMtc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJtYXJsaW5Nb3ZlUGFkWFlcIiB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMTUwcHhcIj48L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwibWFybGluTW92ZVBhZFpcIiB3aWR0aD1cIjEyMHB4XCIgaGVpZ2h0PVwiMTUwcHhcIj48L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXJsaW5Db21tYW5kc1wiIGNsYXNzPVwidzMtdGlueSB3My1oaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkhvbWVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+aG9tZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5Qb3NcIiAgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnBvcz88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluUmVsXCIgIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5yZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluQWJzXCIgIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5hYnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluQ29sZFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5jb2xkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWFBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eCs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWE1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eC08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWVBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eSs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWU1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eS08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWlBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWk1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+ei08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkVQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmUrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkVNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmUtPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2U3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5TdGF0dXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2UG9zaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Db21tYW5kc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLk5DKTtcclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluSG9tZVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkhvbWUpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkhvbWUub25jbGljayA9IHRoaXMub25CdG5Ib21lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuUG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Qb3NcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5Qb3MpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blBvcy5vbmNsaWNrID0gdGhpcy5vbkJ0blBvcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluUmVsXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuUmVsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5SZWwub25jbGljayA9IHRoaXMub25CdG5SZWwuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5BYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkFic1wiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkFicykge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuQWJzLm9uY2xpY2sgPSB0aGlzLm9uQnRuQWJzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuQ29sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluQ29sZFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkNvbGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkNvbGQub25jbGljayA9IHRoaXMub25CdG5Db2xkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IG1hcmxpbkJ0blhQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5YUFwiKTtcclxuICAgICAgICAgICAgLy8gaWYgKG1hcmxpbkJ0blhQKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJsaW5CdG5YUC5vbmNsaWNrID0gdGhpcy5vbkJ0blhQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gY29uc3QgbWFybGluQnRuWE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblhNXCIpO1xyXG4gICAgICAgICAgICAvLyBpZiAobWFybGluQnRuWE0pIHtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmxpbkJ0blhNLm9uY2xpY2sgPSB0aGlzLm9uQnRuWE0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBtYXJsaW5CdG5ZUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWVBcIik7XHJcbiAgICAgICAgICAgIC8vIGlmIChtYXJsaW5CdG5ZUCkge1xyXG4gICAgICAgICAgICAvLyAgICAgbWFybGluQnRuWVAub25jbGljayA9IHRoaXMub25CdG5ZUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IG1hcmxpbkJ0bllNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5ZTVwiKTtcclxuICAgICAgICAgICAgLy8gaWYgKG1hcmxpbkJ0bllNKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJsaW5CdG5ZTS5vbmNsaWNrID0gdGhpcy5vbkJ0bllNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gY29uc3QgbWFybGluQnRuWlAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblpQXCIpO1xyXG4gICAgICAgICAgICAvLyBpZiAobWFybGluQnRuWlApIHtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmxpbkJ0blpQLm9uY2xpY2sgPSB0aGlzLm9uQnRuWlAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBtYXJsaW5CdG5aTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWk1cIik7XHJcbiAgICAgICAgICAgIC8vIGlmIChtYXJsaW5CdG5aTSkge1xyXG4gICAgICAgICAgICAvLyAgICAgbWFybGluQnRuWk0ub25jbGljayA9IHRoaXMub25CdG5aTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkVQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5FUFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkVQKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5FUC5vbmNsaWNrID0gdGhpcy5vbkJ0bkVQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuRU0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkVNXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuRU0pIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkVNLm9uY2xpY2sgPSB0aGlzLm9uQnRuRU0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbW92ZVBhZFhZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Nb3ZlUGFkWFlcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChtb3ZlUGFkWFkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFkWFkgPSBtb3ZlUGFkWFk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlUGFkWFkub25jbGljayA9IHRoaXMub25QYWRYWWNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlUGFkWFkub25tb3VzZW1vdmUgPSB0aGlzLm9uUGFkWFlob3Zlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gbW92ZVBhZFhZLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIG1vdmVQYWRYWS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKG1vdmVQYWRYWS53aWR0aCAtIDEsIG1vdmVQYWRYWS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKG1vdmVQYWRYWS53aWR0aCAvIDIsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8obW92ZVBhZFhZLndpZHRoIC8gMiwgbW92ZVBhZFhZLmhlaWdodCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJ4eVwiLCAwLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5vIGNvbnRleHQgb24gbW92ZVBhZFhZXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gbW92ZVBhZFhZXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVQYWRaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Nb3ZlUGFkWlwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKG1vdmVQYWRaKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZFogPSBtb3ZlUGFkWjtcclxuICAgICAgICAgICAgICAgIG1vdmVQYWRaLm9uY2xpY2sgPSB0aGlzLm9uUGFkWmNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlUGFkWi5vbm1vdXNlbW92ZSA9IHRoaXMub25QYWRaaG92ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG1vdmVQYWRaLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIG1vdmVQYWRaLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8obW92ZVBhZFoud2lkdGggLSAxLCBtb3ZlUGFkWi5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwielwiLCAwLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5vIGNvbnRleHQgb24gbW92ZVBhZFpcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJubyBtb3ZlUGFkWlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIGstZCBUcmVlIEphdmFTY3JpcHQgLSBWIDEuMDFcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdWJpbGFicy9rZC10cmVlLWphdmFzY3JpcHRcbiAqXG4gKiBAYXV0aG9yIE1pcmNlYSBQcmljb3AgPHByaWNvcEB1YmlsYWJzLm5ldD4sIDIwMTJcbiAqIEBhdXRob3IgTWFydGluIEtsZXBwZSA8a2xlcHBlQHViaWxhYnMubmV0PiwgMjAxMlxuICogQGF1dGhvciBVYmlsYWJzIGh0dHA6Ly91YmlsYWJzLm5ldCwgMjAxMlxuICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgPGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwPlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgZnVuY3Rpb24gTm9kZShvYmosIGRpbWVuc2lvbiwgcGFyZW50KSB7XG4gICAgdGhpcy5vYmogPSBvYmo7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtkVHJlZShwb2ludHMsIG1ldHJpYywgZGltZW5zaW9ucykge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRUcmVlKHBvaW50cywgZGVwdGgsIHBhcmVudCkge1xuICAgICAgdmFyIGRpbSA9IGRlcHRoICUgZGltZW5zaW9ucy5sZW5ndGgsXG4gICAgICAgIG1lZGlhbixcbiAgICAgICAgbm9kZTtcblxuICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUocG9pbnRzWzBdLCBkaW0sIHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhW2RpbWVuc2lvbnNbZGltXV0gLSBiW2RpbWVuc2lvbnNbZGltXV07XG4gICAgICB9KTtcblxuICAgICAgbWVkaWFuID0gTWF0aC5mbG9vcihwb2ludHMubGVuZ3RoIC8gMik7XG5cbiAgICAgIC8vIGF2b2lkIGhhdmluZyBzYW1lIGNvb3JkcyBvbiBsZWZ0IGFuZCByaWdodCB0cmVlICEhIVxuICAgICAgd2hpbGUgKG1lZGlhbiA+IDApIHtcbiAgICAgICAgbGV0IG5ld21lZGlhbiA9IG1lZGlhbiAtIDE7XG4gICAgICAgIGlmIChwb2ludHNbbWVkaWFuXVtkaW1lbnNpb25zW2RpbV1dID09PSBwb2ludHNbbmV3bWVkaWFuXVtkaW1lbnNpb25zW2RpbV1dKSB7XG4gICAgICAgICAgbWVkaWFuIC09IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5ldyBOb2RlKHBvaW50c1ttZWRpYW5dLCBkaW0sIHBhcmVudCk7XG4gICAgICBub2RlLmxlZnQgPSBidWlsZFRyZWUocG9pbnRzLnNsaWNlKDAsIG1lZGlhbiksIGRlcHRoICsgMSwgbm9kZSk7XG4gICAgICBub2RlLnJpZ2h0ID0gYnVpbGRUcmVlKHBvaW50cy5zbGljZShtZWRpYW4gKyAxKSwgZGVwdGggKyAxLCBub2RlKTtcblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLy8gUmVsb2FkcyBhIHNlcmlhbGllZCB0cmVlXG4gICAgZnVuY3Rpb24gbG9hZFRyZWUoZGF0YSkge1xuICAgICAgLy8gSnVzdCBuZWVkIHRvIHJlc3RvcmUgdGhlIGBwYXJlbnRgIHBhcmFtZXRlclxuICAgICAgc2VsZi5yb290ID0gZGF0YTtcblxuICAgICAgZnVuY3Rpb24gcmVzdG9yZVBhcmVudChyb290KSB7XG4gICAgICAgIGlmIChyb290LmxlZnQpIHtcbiAgICAgICAgICByb290LmxlZnQucGFyZW50ID0gcm9vdDtcbiAgICAgICAgICByZXN0b3JlUGFyZW50KHJvb3QubGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5yaWdodCkge1xuICAgICAgICAgIHJvb3QucmlnaHQucGFyZW50ID0gcm9vdDtcbiAgICAgICAgICByZXN0b3JlUGFyZW50KHJvb3QucmlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVQYXJlbnQoc2VsZi5yb290KTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ3VzaW5nIG1hcmlvc2dpdDprZC10cmVlIHYxLjAuNCcpO1xuICAgIC8vIElmIHBvaW50cyBpcyBub3QgYW4gYXJyYXksIGFzc3VtZSB3ZSdyZSBsb2FkaW5nIGEgcHJlLWJ1aWx0IHRyZWVcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnRzKSkgbG9hZFRyZWUocG9pbnRzLCBtZXRyaWMsIGRpbWVuc2lvbnMpO1xuICAgIGVsc2UgdGhpcy5yb290ID0gYnVpbGRUcmVlKHBvaW50cywgMCwgbnVsbCk7XG5cbiAgICAvLyBDb252ZXJ0IHRvIGEgSlNPTiBzZXJpYWxpemFibGUgc3RydWN0dXJlOyB0aGlzIGp1c3QgcmVxdWlyZXMgcmVtb3ZpbmdcbiAgICAvLyB0aGUgYHBhcmVudGAgcHJvcGVydHlcbiAgICB0aGlzLnRvSlNPTiA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIGlmICghc3JjKSBzcmMgPSB0aGlzLnJvb3Q7XG4gICAgICB2YXIgZGVzdCA9IG5ldyBOb2RlKHNyYy5vYmosIHNyYy5kaW1lbnNpb24sIG51bGwpO1xuICAgICAgaWYgKHNyYy5sZWZ0KSBkZXN0LmxlZnQgPSBzZWxmLnRvSlNPTihzcmMubGVmdCk7XG4gICAgICBpZiAoc3JjLnJpZ2h0KSBkZXN0LnJpZ2h0ID0gc2VsZi50b0pTT04oc3JjLnJpZ2h0KTtcbiAgICAgIHJldHVybiBkZXN0O1xuICAgIH07XG5cbiAgICAvKiogcmV0dXJucyBhIGxpc3Qgb2YgcG9pbnRzIGluIHRoZSBzdWJ0cmVlLCBleGNsdXNpdmUgdGhlIGdpdmVuIG5vZGUgISAqL1xuICAgIHRoaXMudG9BcnJheSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGlmIChzcmMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmIChzcmMubGVmdCkge1xuICAgICAgICByZXN1bHQucHVzaChzcmMubGVmdC5vYmopO1xuICAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi50aGlzLnRvQXJyYXkoc3JjLmxlZnQpXTtcbiAgICAgIH1cbiAgICAgIGlmIChzcmMucmlnaHQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3JjLnJpZ2h0Lm9iaik7XG4gICAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIC4uLnRoaXMudG9BcnJheShzcmMucmlnaHQpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgIGZ1bmN0aW9uIGlubmVyU2VhcmNoKG5vZGUsIHBhcmVudCkge1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXTtcbiAgICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBub2RlLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyU2VhcmNoKG5vZGUubGVmdCwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyU2VhcmNoKG5vZGUucmlnaHQsIG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnNlcnRQb3NpdGlvbiA9IGlubmVyU2VhcmNoKHRoaXMucm9vdCwgbnVsbCksXG4gICAgICAgIG5ld05vZGUsXG4gICAgICAgIGRpbWVuc2lvbjtcblxuICAgICAgaWYgKGluc2VydFBvc2l0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBOb2RlKHBvaW50LCAwLCBudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXdOb2RlID0gbmV3IE5vZGUocG9pbnQsIChpbnNlcnRQb3NpdGlvbi5kaW1lbnNpb24gKyAxKSAlIGRpbWVuc2lvbnMubGVuZ3RoLCBpbnNlcnRQb3NpdGlvbik7XG4gICAgICBkaW1lbnNpb24gPSBkaW1lbnNpb25zW2luc2VydFBvc2l0aW9uLmRpbWVuc2lvbl07XG5cbiAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgaW5zZXJ0UG9zaXRpb24ub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgaW5zZXJ0UG9zaXRpb24ubGVmdCA9IG5ld05vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnNlcnRQb3NpdGlvbi5yaWdodCA9IG5ld05vZGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICB2YXIgbm9kZTtcblxuICAgICAgZnVuY3Rpb24gbm9kZVNlYXJjaChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5vYmogPT09IHBvaW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl07XG5cbiAgICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBub2RlLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVTZWFyY2gobm9kZS5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVNlYXJjaChub2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgICAgICAgdmFyIG5leHROb2RlLFxuICAgICAgICAgIG5leHRPYmosXG4gICAgICAgICAgcERpbWVuc2lvbjtcblxuICAgICAgICBmdW5jdGlvbiBmaW5kTWluKG5vZGUsIGRpbSkge1xuICAgICAgICAgIHZhciBkaW1lbnNpb24sXG4gICAgICAgICAgICBvd24sXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICBtaW47XG5cbiAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGltZW5zaW9uID0gZGltZW5zaW9uc1tkaW1dO1xuXG4gICAgICAgICAgaWYgKG5vZGUuZGltZW5zaW9uID09PSBkaW0pIHtcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbmRNaW4obm9kZS5sZWZ0LCBkaW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3duID0gbm9kZS5vYmpbZGltZW5zaW9uXTtcbiAgICAgICAgICBsZWZ0ID0gZmluZE1pbihub2RlLmxlZnQsIGRpbSk7XG4gICAgICAgICAgcmlnaHQgPSBmaW5kTWluKG5vZGUucmlnaHQsIGRpbSk7XG4gICAgICAgICAgbWluID0gbm9kZTtcblxuICAgICAgICAgIGlmIChsZWZ0ICE9PSBudWxsICYmIGxlZnQub2JqW2RpbWVuc2lvbl0gPCBvd24pIHtcbiAgICAgICAgICAgIG1pbiA9IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyaWdodCAhPT0gbnVsbCAmJiByaWdodC5vYmpbZGltZW5zaW9uXSA8IG1pbi5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgICAgbWluID0gcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICBpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGYucm9vdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcERpbWVuc2lvbiA9IGRpbWVuc2lvbnNbbm9kZS5wYXJlbnQuZGltZW5zaW9uXTtcblxuICAgICAgICAgIGlmIChub2RlLm9ialtwRGltZW5zaW9uXSA8IG5vZGUucGFyZW50Lm9ialtwRGltZW5zaW9uXSkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQubGVmdCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50LnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHJpZ2h0IHN1YnRyZWUgaXMgbm90IGVtcHR5LCBzd2FwIHdpdGggdGhlIG1pbmltdW0gZWxlbWVudCBvbiB0aGVcbiAgICAgICAgLy8gbm9kZSdzIGRpbWVuc2lvbi4gSWYgaXQgaXMgZW1wdHksIHdlIHN3YXAgdGhlIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWVzIGFuZFxuICAgICAgICAvLyBkbyB0aGUgc2FtZS5cbiAgICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IGZpbmRNaW4obm9kZS5yaWdodCwgbm9kZS5kaW1lbnNpb24pO1xuICAgICAgICAgIG5leHRPYmogPSBuZXh0Tm9kZS5vYmo7XG4gICAgICAgICAgcmVtb3ZlTm9kZShuZXh0Tm9kZSk7XG4gICAgICAgICAgbm9kZS5vYmogPSBuZXh0T2JqO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHROb2RlID0gZmluZE1pbihub2RlLmxlZnQsIG5vZGUuZGltZW5zaW9uKTtcbiAgICAgICAgICBuZXh0T2JqID0gbmV4dE5vZGUub2JqO1xuICAgICAgICAgIHJlbW92ZU5vZGUobmV4dE5vZGUpO1xuICAgICAgICAgIG5vZGUucmlnaHQgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgbm9kZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICBub2RlLm9iaiA9IG5leHRPYmo7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGVTZWFyY2goc2VsZi5yb290KTtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdrZHRyZWU6cmVtb3ZlIGNvdWxkIG5vdCByZW1vdmUgbm9kZSAhIGludGVybmFsIGVycm9yICEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmVOb2RlKG5vZGUpOyAvLyBidWdnaVxuXG4gICAgICAvLyB3aWtpcGVkaWEgc2F5czoganVzdCByZWJ1aWxkIHRoZSBzdWJ0cmVlXG4gICAgICBjb25zdCBhbGxjaGlsZHMgPSB0aGlzLnRvQXJyYXkobm9kZSk7XG4gICAgICBsZXQgbmV3bm9kZSA9IGJ1aWxkVHJlZShhbGxjaGlsZHMsIG5vZGUuZGltZW5zaW9uLCBub2RlLnBhcmVudCk7XG4gICAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgICAgaWYgKG5vZGUucGFyZW50LmxlZnQgPT09IG5vZGUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudC5sZWZ0ID0gbmV3bm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLnBhcmVudC5yaWdodCA9PT0gbm9kZSkge1xuICAgICAgICAgIG5vZGUucGFyZW50LnJpZ2h0ID0gbmV3bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yb290ID0gbmV3bm9kZTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLm5lYXJlc3QgPSBmdW5jdGlvbiAocG9pbnQsIG1heE5vZGVzLCBtYXhEaXN0YW5jZSkge1xuICAgICAgdmFyIGksXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYmVzdE5vZGVzO1xuXG4gICAgICBiZXN0Tm9kZXMgPSBuZXcgQmluYXJ5SGVhcChcbiAgICAgICAgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIC1lWzFdOyB9XG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBuZWFyZXN0U2VhcmNoKG5vZGUpIHtcbiAgICAgICAgdmFyIGJlc3RDaGlsZCxcbiAgICAgICAgICBkaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXSxcbiAgICAgICAgICBvd25EaXN0YW5jZSA9IG1ldHJpYyhwb2ludCwgbm9kZS5vYmopLFxuICAgICAgICAgIGxpbmVhclBvaW50ID0ge30sXG4gICAgICAgICAgbGluZWFyRGlzdGFuY2UsXG4gICAgICAgICAgb3RoZXJDaGlsZCxcbiAgICAgICAgICBpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVOb2RlKG5vZGUsIGRpc3RhbmNlKSB7XG4gICAgICAgICAgYmVzdE5vZGVzLnB1c2goW25vZGUsIGRpc3RhbmNlXSk7XG4gICAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPiBtYXhOb2Rlcykge1xuICAgICAgICAgICAgYmVzdE5vZGVzLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGkgPT09IG5vZGUuZGltZW5zaW9uKSB7XG4gICAgICAgICAgICBsaW5lYXJQb2ludFtkaW1lbnNpb25zW2ldXSA9IHBvaW50W2RpbWVuc2lvbnNbaV1dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lYXJQb2ludFtkaW1lbnNpb25zW2ldXSA9IG5vZGUub2JqW2RpbWVuc2lvbnNbaV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmVhckRpc3RhbmNlID0gbWV0cmljKGxpbmVhclBvaW50LCBub2RlLm9iaik7XG5cbiAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPCBtYXhOb2RlcyB8fCBvd25EaXN0YW5jZSA8IGJlc3ROb2Rlcy5wZWVrKClbMV0pIHtcbiAgICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLmxlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5yaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IG5vZGUub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgICAgIGJlc3RDaGlsZCA9IG5vZGUubGVmdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5yaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZWFyZXN0U2VhcmNoKGJlc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPCBtYXhOb2RlcyB8fCBvd25EaXN0YW5jZSA8IGJlc3ROb2Rlcy5wZWVrKClbMV0pIHtcbiAgICAgICAgICBzYXZlTm9kZShub2RlLCBvd25EaXN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVzdE5vZGVzLnNpemUoKSA8IG1heE5vZGVzIHx8IE1hdGguYWJzKGxpbmVhckRpc3RhbmNlKSA8IGJlc3ROb2Rlcy5wZWVrKClbMV0pIHtcbiAgICAgICAgICBpZiAoYmVzdENoaWxkID09PSBub2RlLmxlZnQpIHtcbiAgICAgICAgICAgIG90aGVyQ2hpbGQgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlckNoaWxkID0gbm9kZS5sZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3RoZXJDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmVhcmVzdFNlYXJjaChvdGhlckNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heERpc3RhbmNlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXhOb2RlczsgaSArPSAxKSB7XG4gICAgICAgICAgYmVzdE5vZGVzLnB1c2goW251bGwsIG1heERpc3RhbmNlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYucm9vdClcbiAgICAgICAgbmVhcmVzdFNlYXJjaChzZWxmLnJvb3QpO1xuXG4gICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGgubWluKG1heE5vZGVzLCBiZXN0Tm9kZXMuY29udGVudC5sZW5ndGgpOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJlc3ROb2Rlcy5jb250ZW50W2ldWzBdKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goW2Jlc3ROb2Rlcy5jb250ZW50W2ldWzBdLm9iaiwgYmVzdE5vZGVzLmNvbnRlbnRbaV1bMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpcy5iYWxhbmNlRmFjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gaGVpZ2h0KG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoaGVpZ2h0KG5vZGUubGVmdCksIGhlaWdodChub2RlLnJpZ2h0KSkgKyAxO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjb3VudChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50KG5vZGUubGVmdCkgKyBjb3VudChub2RlLnJpZ2h0KSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWlnaHQoc2VsZi5yb290KSAvIChNYXRoLmxvZyhjb3VudChzZWxmLnJvb3QpKSAvIE1hdGgubG9nKDIpKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gQmluYXJ5IGhlYXAgaW1wbGVtZW50YXRpb24gZnJvbTpcbiAgLy8gaHR0cDovL2Vsb3F1ZW50amF2YXNjcmlwdC5uZXQvYXBwZW5kaXgyLmh0bWxcblxuICBmdW5jdGlvbiBCaW5hcnlIZWFwKHNjb3JlRnVuY3Rpb24pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLnNjb3JlRnVuY3Rpb24gPSBzY29yZUZ1bmN0aW9uO1xuICB9XG5cbiAgQmluYXJ5SGVhcC5wcm90b3R5cGUgPSB7XG4gICAgcHVzaDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIC8vIEFkZCB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICB0aGlzLmNvbnRlbnQucHVzaChlbGVtZW50KTtcbiAgICAgIC8vIEFsbG93IGl0IHRvIGJ1YmJsZSB1cC5cbiAgICAgIHRoaXMuYnViYmxlVXAodGhpcy5jb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgIH0sXG5cbiAgICBwb3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBmaXJzdCBlbGVtZW50IHNvIHdlIGNhbiByZXR1cm4gaXQgbGF0ZXIuXG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb250ZW50WzBdO1xuICAgICAgLy8gR2V0IHRoZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgdmFyIGVuZCA9IHRoaXMuY29udGVudC5wb3AoKTtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgZWxlbWVudHMgbGVmdCwgcHV0IHRoZSBlbmQgZWxlbWVudCBhdCB0aGVcbiAgICAgIC8vIHN0YXJ0LCBhbmQgbGV0IGl0IHNpbmsgZG93bi5cbiAgICAgIGlmICh0aGlzLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRbMF0gPSBlbmQ7XG4gICAgICAgIHRoaXMuc2lua0Rvd24oMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBwZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50WzBdO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgbGVuID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcbiAgICAgIC8vIFRvIHJlbW92ZSBhIHZhbHVlLCB3ZSBtdXN0IHNlYXJjaCB0aHJvdWdoIHRoZSBhcnJheSB0byBmaW5kXG4gICAgICAvLyBpdC5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudFtpXSA9PSBub2RlKSB7XG4gICAgICAgICAgLy8gV2hlbiBpdCBpcyBmb3VuZCwgdGhlIHByb2Nlc3Mgc2VlbiBpbiAncG9wJyBpcyByZXBlYXRlZFxuICAgICAgICAgIC8vIHRvIGZpbGwgdXAgdGhlIGhvbGUuXG4gICAgICAgICAgdmFyIGVuZCA9IHRoaXMuY29udGVudC5wb3AoKTtcbiAgICAgICAgICBpZiAoaSAhPSBsZW4gLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRbaV0gPSBlbmQ7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZUZ1bmN0aW9uKGVuZCkgPCB0aGlzLnNjb3JlRnVuY3Rpb24obm9kZSkpXG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlVXAoaSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHRoaXMuc2lua0Rvd24oaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBub3QgZm91bmQuXCIpO1xuICAgIH0sXG5cbiAgICBzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDtcbiAgICB9LFxuXG4gICAgYnViYmxlVXA6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAvLyBGZXRjaCB0aGUgZWxlbWVudCB0aGF0IGhhcyB0byBiZSBtb3ZlZC5cbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dO1xuICAgICAgLy8gV2hlbiBhdCAwLCBhbiBlbGVtZW50IGNhbiBub3QgZ28gdXAgYW55IGZ1cnRoZXIuXG4gICAgICB3aGlsZSAobiA+IDApIHtcbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFyZW50IGVsZW1lbnQncyBpbmRleCwgYW5kIGZldGNoIGl0LlxuICAgICAgICB2YXIgcGFyZW50TiA9IE1hdGguZmxvb3IoKG4gKyAxKSAvIDIpIC0gMSxcbiAgICAgICAgICBwYXJlbnQgPSB0aGlzLmNvbnRlbnRbcGFyZW50Tl07XG4gICAgICAgIC8vIFN3YXAgdGhlIGVsZW1lbnRzIGlmIHRoZSBwYXJlbnQgaXMgZ3JlYXRlci5cbiAgICAgICAgaWYgKHRoaXMuc2NvcmVGdW5jdGlvbihlbGVtZW50KSA8IHRoaXMuc2NvcmVGdW5jdGlvbihwYXJlbnQpKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50W3BhcmVudE5dID0gZWxlbWVudDtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbbl0gPSBwYXJlbnQ7XG4gICAgICAgICAgLy8gVXBkYXRlICduJyB0byBjb250aW51ZSBhdCB0aGUgbmV3IHBvc2l0aW9uLlxuICAgICAgICAgIG4gPSBwYXJlbnROO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvdW5kIGEgcGFyZW50IHRoYXQgaXMgbGVzcywgbm8gbmVlZCB0byBtb3ZlIGl0IGZ1cnRoZXIuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNpbmtEb3duOiBmdW5jdGlvbiAobikge1xuICAgICAgLy8gTG9vayB1cCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGl0cyBzY29yZS5cbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoLFxuICAgICAgICBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dLFxuICAgICAgICBlbGVtU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oZWxlbWVudCk7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIENvbXB1dGUgdGhlIGluZGljZXMgb2YgdGhlIGNoaWxkIGVsZW1lbnRzLlxuICAgICAgICB2YXIgY2hpbGQyTiA9IChuICsgMSkgKiAyLCBjaGlsZDFOID0gY2hpbGQyTiAtIDE7XG4gICAgICAgIC8vIFRoaXMgaXMgdXNlZCB0byBzdG9yZSB0aGUgbmV3IHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LFxuICAgICAgICAvLyBpZiBhbnkuXG4gICAgICAgIHZhciBzd2FwID0gbnVsbDtcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGNoaWxkIGV4aXN0cyAoaXMgaW5zaWRlIHRoZSBhcnJheSkuLi5cbiAgICAgICAgaWYgKGNoaWxkMU4gPCBsZW5ndGgpIHtcbiAgICAgICAgICAvLyBMb29rIGl0IHVwIGFuZCBjb21wdXRlIGl0cyBzY29yZS5cbiAgICAgICAgICB2YXIgY2hpbGQxID0gdGhpcy5jb250ZW50W2NoaWxkMU5dLFxuICAgICAgICAgICAgY2hpbGQxU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oY2hpbGQxKTtcbiAgICAgICAgICAvLyBJZiB0aGUgc2NvcmUgaXMgbGVzcyB0aGFuIG91ciBlbGVtZW50J3MsIHdlIG5lZWQgdG8gc3dhcC5cbiAgICAgICAgICBpZiAoY2hpbGQxU2NvcmUgPCBlbGVtU2NvcmUpXG4gICAgICAgICAgICBzd2FwID0gY2hpbGQxTjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyB0aGUgc2FtZSBjaGVja3MgZm9yIHRoZSBvdGhlciBjaGlsZC5cbiAgICAgICAgaWYgKGNoaWxkMk4gPCBsZW5ndGgpIHtcbiAgICAgICAgICB2YXIgY2hpbGQyID0gdGhpcy5jb250ZW50W2NoaWxkMk5dLFxuICAgICAgICAgICAgY2hpbGQyU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oY2hpbGQyKTtcbiAgICAgICAgICBpZiAoY2hpbGQyU2NvcmUgPCAoc3dhcCA9PSBudWxsID8gZWxlbVNjb3JlIDogY2hpbGQxU2NvcmUpKSB7XG4gICAgICAgICAgICBzd2FwID0gY2hpbGQyTjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBuZWVkcyB0byBiZSBtb3ZlZCwgc3dhcCBpdCwgYW5kIGNvbnRpbnVlLlxuICAgICAgICBpZiAoc3dhcCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50W25dID0gdGhpcy5jb250ZW50W3N3YXBdO1xuICAgICAgICAgIHRoaXMuY29udGVudFtzd2FwXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgbiA9IHN3YXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgZG9uZS5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZXhwb3J0cy5rZFRyZWUgPSBrZFRyZWU7XG4gIGV4cG9ydHMuQmluYXJ5SGVhcCA9IEJpbmFyeUhlYXA7XG59KSk7XG4iLCJpbXBvcnQge2tkVHJlZX0gZnJvbSAna2QtdHJlZS1qYXZhc2NyaXB0JzsgLy8gbm9kZSBtb2R1bGVcclxuLy8gaW1wb3J0IHtrZFRyZWUsIGtkVHJlZU9iamVjdH0gZnJvbSAnLi9rZFRyZWUnO1xyXG5cclxuY2xhc3MgQm91bmRpbmdCb3gge1xyXG4gICAgbWlueDogbnVtYmVyID0gOTk5OTk7XHJcbiAgICBtaW55OiBudW1iZXIgPSA5OTk5OTtcclxuICAgIG1heHg6IG51bWJlciA9IC05OTk5OTtcclxuICAgIG1heHk6IG51bWJlciA9IC05OTk5OTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICB1cGRhdGVGcm9tUGFkKHBhZDpQYWQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShwYWQucG9zWCwgcGFkLnBvc1kpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHggPCB0aGlzLm1pbngpIHRoaXMubWlueCA9IHg7XHJcbiAgICAgICAgaWYgKHkgPCB0aGlzLm1pbnkpIHRoaXMubWlueSA9IHk7XHJcbiAgICAgICAgaWYgKHggPiB0aGlzLm1heHgpIHRoaXMubWF4eCA9IHg7XHJcbiAgICAgICAgaWYgKHkgPiB0aGlzLm1heHkpIHRoaXMubWF4eSA9IHk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGJiOiAke3RoaXMubWlueX0gJHt0aGlzLm1heHl9ICR7dGhpcy5jZW50ZXIoKVsxXX1gKTtcclxuICAgIH1cclxuICAgIGNlbnRlcih6b29tOiBudW1iZXIgPSAxLjApOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gWyh0aGlzLm1pbnggKyAodGhpcy5tYXh4IC0gdGhpcy5taW54KSAvIDIpICogem9vbSwgKHRoaXMubWlueSArICh0aGlzLm1heHkgLSB0aGlzLm1pbnkpIC8gMikgKiB6b29tXTtcclxuICAgIH1cclxuICAgIHplcm8oem9vbTogbnVtYmVyID0gMS4wKTogW3g6IG51bWJlciwgeTogbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLm1pbnggKiB6b29tLCB0aGlzLm1pbnkgKiB6b29tXTtcclxuICAgIH1cclxuICAgIHNpemUoem9vbTogbnVtYmVyID0gMS4wKTogW3g6IG51bWJlciwgeTogbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFsodGhpcy5tYXh4IC0gdGhpcy5taW54KSAqIHpvb20sICh0aGlzLm1heHkgLSB0aGlzLm1pbnkpICogem9vbV07XHJcbiAgICB9XHJcbiAgICBkaWFnb25hbCh6b29tOiBudW1iZXIgPSAxLjApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemUoem9vbSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChzaXplWzBdKnNpemVbMF0gKyBzaXplWzFdKnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgLyoqIENoZWNrIGlmIHBhZCBpcyBpbnNpZGUgdGhlIGJvdW5kaW5nYm94ICovXHJcbiAgICBpbnNpZGUocGFkOiBQYWQpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAocGFkLnBvc1ggPj0gdGhpcy5taW54ICYmIHBhZC5wb3NYIDw9IHRoaXMubWF4eCkgJiYgKHBhZC5wb3NZID49IHRoaXMubWlueSAmJiBwYWQucG9zWSA8PSB0aGlzLm1heHkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWRTdHlsZSB7XHJcbiAgICBwdWJsaWMgZm9ybTogc3RyaW5nO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWQge1xyXG4gICAgcG9zWDogbnVtYmVyO1xyXG4gICAgcG9zWTogbnVtYmVyO1xyXG4gICAgc3R5bGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHN0eWxlOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0geDtcclxuICAgICAgICB0aGlzLnBvc1kgPSB5O1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIH1cclxuICAgIGFzVHVwbGUoKTpbbnVtYmVyLG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5wb3NYLCB0aGlzLnBvc1ldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUENCIHsgLy9leHRlbmRzIGtkVHJlZU9iamVjdCB7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBtYXBTdHlsZXM6IE1hcDxzdHJpbmcsIFBhZFN0eWxlPjtcclxuICAgIG1hcFBhZHM6IE1hcDxzdHJpbmcsIFNldDxQYWQ+PjtcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIG1vdXNlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbW91c2VTdGFydFg6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZVN0YXJ0WTogbnVtYmVyID0gMDtcclxuICAgIG1vdXNlT2ZmWDogbnVtYmVyID0gMDtcclxuICAgIG1vdXNlT2ZmWTogbnVtYmVyID0gMDtcclxuICAgIG1vdXNlU2VsZWN0OiBib29sZWFuO1xyXG4gICAgbW91c2VTZWxlY3RYOiBudW1iZXI7XHJcbiAgICBtb3VzZVNlbGVjdFk6IG51bWJlcjtcclxuXHJcbiAgICBwb3NaZXJvOiBudW1iZXJbXTtcclxuXHJcbiAgICB6b29tOiBudW1iZXIgPSA1LjA7XHJcbiAgICBiYlBjYjogQm91bmRpbmdCb3g7XHJcbiAgICBiYlNlbGVjdGlvbjogQm91bmRpbmdCb3g7XHJcbiAgICBiYlplcm86IEJvdW5kaW5nQm94OyAvLyB1c2UgY2VudGVyIGFzIHplcm9cclxuXHJcbiAgICB0cmVlOiBrZFRyZWU8UGFkPjtcclxuICAgIG5lYXJlc3Q6W1BhZCwgbnVtYmVyXVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1hcFN0eWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBQYWRTdHlsZT4oKTtcclxuICAgICAgICB0aGlzLm1hcFBhZHMgPSBuZXcgTWFwPHN0cmluZywgU2V0PFBhZD4+KCk7XHJcbiAgICAgICAgdGhpcy5iYlBjYiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHRoaXMuYmJaZXJvID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgdGhpcy5iYlNlbGVjdGlvbiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbnZhcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgWmVybyBwb3NpdGlvbiB0byB0aGUgbG93ZXIgbGVmdCBvZiBzZWxlY3Rpb24gcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0WmVybygpOnZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAvLyB1c2UgbGFzdCBzZWxlY3Rpb24gPz8/XHJcbiAgICAgICAgdGhpcy5iYlplcm8gPSB0aGlzLmJiU2VsZWN0aW9uO1xyXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBjYjpzZXRaZXJvOiAke3RoaXMuYmJaZXJvLnplcm8oKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIFplcm8gcG9zaXRpb24gcmVsYXRpdmUgdG8gT3JpZ2luKDAsMCkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRaZXJvKCk6W251bWJlcixudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYlplcm8uemVybygpOyAvLyBsb3dlciBsZWZ0ID8/IGJldHRlciB3aGVuIC5jZW50ZXIoKSA/P1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgQWxsIFBhZHMgaW4gc2VsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKTpQYWRbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDpQYWRbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgbmVhciBvZiB0aGlzLm5lYXJlc3QpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmVhcik7XHJcbiAgICAgICAgICAgIGlmKG5lYXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmVhclswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIExvd2VyIGxlZnQgb2Ygc2VsZWN0aW9uIGFzIHR1cGxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTZWxlY3RlZFplcm8oKTpbbnVtYmVyLG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJiU2VsZWN0aW9uLnplcm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFkQ291bnQoKTpudW1iZXIge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgcGFkc2V0IG9mIHRoaXMubWFwUGFkcykge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gcGFkc2V0WzFdLnNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHpvb21Ub0ZpdChzaXplOltudW1iZXIsbnVtYmVyXSkge1xyXG4gICAgICAgIGxldCBwc2l6ZSA9IHRoaXMuYmJQY2Iuc2l6ZSgpO1xyXG4gICAgICAgIGxldCB6dyA9IHNpemVbMF0gLyBwc2l6ZVswXTtcclxuICAgICAgICBsZXQgemggPSBzaXplWzFdIC8gcHNpemVbMV07XHJcbiAgICAgICAgdGhpcy56b29tID0gKCh6dyA+IHpoKT8gemggOiB6dykgKiAuOTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUGNiOnpvb21Ub0ZpdCB6b29tICR7dGhpcy56b29tfWAsIHBzaXplKTtcclxuICAgICAgICB0aGlzLmNlbnRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjZW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZYID0gLSh0aGlzLmJiUGNiLmNlbnRlcigpWzBdICogdGhpcy56b29tKSArIHRoaXMuY2FudmFzLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU9mZlkgPSAtKHRoaXMuYmJQY2IuY2VudGVyKClbMV0gKiB0aGlzLnpvb20pICsgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZFBhZFN0eWxlKG5hbWU6IHN0cmluZywgZm9ybTogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubWFwU3R5bGVzLnNldChuYW1lLCBuZXcgUGFkU3R5bGUoZm9ybSwgdywgaCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBhZChzdHlsZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXBQYWRzLmhhcyhzdHlsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBQYWRzLnNldChzdHlsZSwgbmV3IFNldDxQYWQ+KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFkc2V0ID0gdGhpcy5tYXBQYWRzLmdldChzdHlsZSk7XHJcbiAgICAgICAgaWYgKHBhZHNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdwYWQgPSBuZXcgUGFkKHN0eWxlLCB4LCB5KTtcclxuICAgICAgICAgICAgcGFkc2V0LmFkZChuZXdwYWQpO1xyXG4gICAgICAgICAgICB0aGlzLmJiUGNiLnVwZGF0ZSh4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmVlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYWRzIDogUGFkW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFkc2V0cyBvZiB0aGlzLm1hcFBhZHMudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBhZCBvZiBwYWRzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkcy5wdXNoKHBhZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJlZSA9IG5ldyBrZFRyZWUocGFkcywgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudHJlZSA9IG5ldyBrZFRyZWUoUENCLCBwYWRzLCBQQ0IuZGlzdGFuY2UsIFtcInBvc1hcIiwgXCJwb3NZXCJdKTsgLy8gdHMgdmVyc2lvblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHJlZSBiZjonLCB0aGlzLnRyZWUuYmFsYW5jZUZhY3RvcigpKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5ldmVudC5idXR0b25zXHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICBpZihldmVudC5idXR0b24gPT0gMCkgeyAvLyBzdGFydCBzZWxlY3RcclxuICAgICAgICAgICAgY29uc3QgbXggPSAoZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWCkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGNvbnN0IG15ID0gKHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCkgLSB0aGlzLm1vdXNlT2ZmWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WSA9IG15O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WSA9IG15O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBjYjptb3VzZURvd246IHg6JHt0aGlzLm1vdXNlU3RhcnRYfSB5OiR7dGhpcy5tb3VzZVN0YXJ0WX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uICE9IDApIHsgLy8gcGFuIGFyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRYID0gZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgKiB0cmFucy5kIC0gdGhpcy5tb3VzZU9mZlk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VGbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGNiOm1vdXNlVXAgZXZlbnQ6JywgZXZlbnQpO1xyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiA9PSAwKSB7IC8vIHNlbGVjdFxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRyYW5zLCBldmVudCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcnLCB0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFktdGhpcy5jYW52YXMub2Zmc2V0VG9wKSwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICBjb25zdCBteCA9IChldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgY29uc3QgbXkgPSAodGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wKSAtIHRoaXMubW91c2VPZmZZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFkgPSBteTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJiID0gc2VsZWN0ZWQgcmVjdGFuZ2xlXHJcbiAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbi51cGRhdGUodGhpcy5tb3VzZVN0YXJ0WCwgdGhpcy5tb3VzZVN0YXJ0WSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24udXBkYXRlKHRoaXMubW91c2VTZWxlY3RYLCB0aGlzLm1vdXNlU2VsZWN0WSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFkID0gbmV3IFBhZCgnJywgdGhpcy5iYlNlbGVjdGlvbi5jZW50ZXIoKVswXSwgdGhpcy5iYlNlbGVjdGlvbi5jZW50ZXIoKVsxXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQY2I6bW91c2VVcCBjeDoke3BhZC5wb3NYfSBjeToke3BhZC5wb3NZfSBkaWFnb25hbDoke3RoaXMuYmJTZWxlY3Rpb24uZGlhZ29uYWwoKX1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMudHJlZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kOltQYWQsIG51bWJlcl1bXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3QgPSB0aGlzLmJiU2VsZWN0aW9uLmRpYWdvbmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZihkaXN0IDwgMC4xKSB7IC8vIG5vIGRyYWcgLSBvbmx5IG9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdGhpcy50cmVlLm5lYXJlc3QocGFkLCAxLCBkaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3QgPSBmb3VuZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IChkaXN0LzIpICogKGRpc3QvMik7IC8vIHNlYXJjaCByZXF1aXJlIHNxdWFyZSBkaXN0YW5jZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLnRyZWUubmVhcmVzdChwYWQsIHRoaXMuZ2V0UGFkQ291bnQoKSwgZGlzdCk7IC8vIHV1dWhoaCB1c2UgcGFkIGNvdW50ICE/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgbmVhciBvZiBmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbToke214fSwke215fSBuZWFyZXN0OiR7bmVhclswXS5wb3NYfSwke25lYXJbMF0ucG9zWX0gIGRpc3Q6JHtNYXRoLnNxcnQobmVhclsxXSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLyB1dXVoaGggY2hlY2sgaWYgaW5zaWRlIHRoZSBib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5iYlNlbGVjdGlvbi5pbnNpZGUobmVhclswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdC5wdXNoKG5lYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG5lZWQgYSBiYiBmb3IgYWN0dWFsIHNlbGVjdGVkIHBvaW50cyB0byBnZXQgemVybyByaWdodFxyXG4gICAgICAgICAgICAgICAgbGV0IGJiTmV3U2VsZWN0aW9uID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgbmVhciBvZiB0aGlzLm5lYXJlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYk5ld1NlbGVjdGlvbi51cGRhdGVGcm9tUGFkKG5lYXJbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbiA9IGJiTmV3U2VsZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQY2I6bW91c2VVcCBzZWxlY3Rpb24gZm91bmQgIyR7Zm91bmQubGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgLy8gb29vaGhoIGRvIG5vdCB0cnVzdCBldmVudC5idXR0b24sIGl0J3MgYWx3YXlzIDAgaGVyZSAhXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BjYjptb3VzZU1vdmUnLGV2ZW50KTtcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIGlmKHRoaXMubW91c2VGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZYID0gZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlU3RhcnRYO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWSA9IGV2ZW50LmNsaWVudFkgKiB0cmFucy5kIC0gdGhpcy5tb3VzZVN0YXJ0WTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5tb3VzZVNlbGVjdCApIHtcclxuICAgICAgICAgICAgY29uc3QgbXggPSAoZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWCkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGNvbnN0IG15ID0gKHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCkgLSB0aGlzLm1vdXNlT2ZmWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RZID0gbXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgY29uc3QgbXggPSAoZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWCk7XHJcbiAgICAgICAgY29uc3QgbXkgPSAodGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wKSAtIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgbW91c2VXaGVlbCBwb3M6IHg6JHtteH0geToke215fWApO1xyXG4gICAgICAgIGxldCBvbGRYID0gbXggLyB0aGlzLnpvb207XHJcbiAgICAgICAgbGV0IG9sZFkgPSBteSAvIHRoaXMuem9vbTtcclxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpvb20gKj0gMS4xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSAqPSAwLjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGtvcnJlY3QgdGhlIGRyaWZ0IGFyb3VuZCBjdXJyZW50IG1vdXNlIHBvc2l0aW9uLi4uXHJcbiAgICAgICAgbGV0IG5ld1ggPSBvbGRYICogdGhpcy56b29tO1xyXG4gICAgICAgIGxldCBuZXdZID0gb2xkWSAqIHRoaXMuem9vbTtcclxuICAgICAgICBsZXQgb2ZmWCA9IChuZXdYIC0gbXgpO1xyXG4gICAgICAgIGxldCBvZmZZID0gKG5ld1kgLSBteSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG1vdXNlV2hlZWwgb2Zmc2V0OiB4OiR7b2ZmWH0gKCR7dGhpcy5tb3VzZU9mZlh9KSB5OiR7b2ZmWX0gKCR7dGhpcy5tb3VzZU9mZll9KWApO1xyXG4gICAgICAgIHRoaXMubW91c2VPZmZYIC09IG9mZlg7XHJcbiAgICAgICAgdGhpcy5tb3VzZU9mZlkgLT0gb2ZmWTtcclxuICAgIH1cclxuICAgIG1vdXNlT3V0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3RhbmNlKGE6UGFkLCBiOlBhZCkge1xyXG4gICAgICAgIHJldHVybiAoYS5wb3NYIC0gYi5wb3NYKSooYS5wb3NYIC0gYi5wb3NYKSArICAoYS5wb3NZIC0gYi5wb3NZKSooYS5wb3NZIC0gYi5wb3NZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICAvLyB0aGVvcmV0aXNjaCBzby4uLlxyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdvcmFuZ2VyZWQnO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdhbnRpcXVld2hpdGUnO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGJiIGNlbnRlclxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMuYmJQY2IuY2VudGVyKHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGNlbnRlclswXSAtIDEwICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oY2VudGVyWzBdICsgMTAgKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhjZW50ZXJbMF0gKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdIC0gMTAgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGNlbnRlclswXSArIHRoaXMubW91c2VPZmZYLCBjZW50ZXJbMV0gKyAxMCArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAvLyBkcmF3IGJiXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmJiUGNiLnplcm8odGhpcy56b29tKVswXSArIHRoaXMubW91c2VPZmZYLCB0aGlzLmJiUGNiLnplcm8odGhpcy56b29tKVsxXSArIHRoaXMubW91c2VPZmZZLCB0aGlzLmJiUGNiLnNpemUodGhpcy56b29tKVswXSwgdGhpcy5iYlBjYi5zaXplKHRoaXMuem9vbSlbMV0pO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwYWRzdHlsZSBvZiB0aGlzLm1hcFBhZHMua2V5cygpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHkgPSB0aGlzLm1hcFN0eWxlcy5nZXQocGFkc3R5bGUpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWRzZXQgPSB0aGlzLm1hcFBhZHMuZ2V0KHBhZHN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHN0eSAmJiBwYWRzZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN3ID0gc3R5LndpZHRoICogdGhpcy56b29tO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2ggPSBzdHkuaGVpZ2h0ICogdGhpcy56b29tO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFkIG9mIHBhZHNldC52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHkuZm9ybSA9PSAnUicgfHwgc3R5LmZvcm0gPT0gJ08nIHx8IHN0eS5mb3JtID09ICdSb3VuZFJlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWCAqIHRoaXMuem9vbSAtIHN3IC8gMi4wICsgdGhpcy5tb3VzZU9mZlgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWSAqIHRoaXMuem9vbSAtIHNoIC8gMi4wICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdywgc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5LmZvcm0gPT0gJ0MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1ggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZC5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZC5wb3NYICogdGhpcy56b29tIC0gc3cgLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZC5wb3NZICogdGhpcy56b29tIC0gc2ggLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN0eS53aWR0aCAqIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkcmF3IHF1YXRzY2ggJHtzdHkuZm9ybX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBmb3IgcGFkc3R5bGVcclxuXHJcbiAgICAgICAgLy8gZHJhdyBzZWxlY3Rpb25Dcm9zcyhlcylcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdwdXJwbGUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGxldCBjc2l6ZSA9IC41O1xyXG4gICAgICAgIGZvcihjb25zdCBuZWFyIG9mIHRoaXMubmVhcmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oKG5lYXJbMF0ucG9zWC1jc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgbmVhclswXS5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oKG5lYXJbMF0ucG9zWCtjc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgbmVhclswXS5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8obmVhclswXS5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIChuZWFyWzBdLnBvc1krY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obmVhclswXS5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIChuZWFyWzBdLnBvc1ktY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmVhcmVzdDoke25lYXJbMF0ucG9zWH0sJHtuZWFyWzBdLnBvc1l9ICBkaXN0OiR7TWF0aC5zcXJ0KG5lYXJbMV0pfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBzZWxlY3Rpb24gbG93ZXIgbGVmdCA9IHplcm8ga2FuZGlkYXRlXHJcbiAgICAgICAgbGV0IHplcm8gPSBbMCwwXTtcclxuICAgICAgICBpZih0aGlzLmJiU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNzaXplID0gMiAqIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgemVybyA9IHRoaXMuYmJTZWxlY3Rpb24uemVybyh0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gLWNzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh6ZXJvWzBdICtjc2l6ZSArIHRoaXMubW91c2VPZmZYLCB6ZXJvWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXS1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0rY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyBvcmlnaW5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgemVybyA9IHRoaXMuYmJaZXJvLmNlbnRlcih0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygrY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLm1vdXNlT2ZmWCwgICAgICAgLWNzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlT2ZmWCwgICAgICAgK2NzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHplcm9cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgemVybyA9IHRoaXMuYmJaZXJvLnplcm8odGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSAtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXS1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXStjc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2VsZWN0aW9uUmVjdGFuZ2xlXHJcbiAgICAgICAgaWYodGhpcy5tb3VzZVNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdwdXJwbGUnO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTdGFydFkgICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVNlbGVjdFggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVN0YXJ0WSAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlU2VsZWN0WCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU2VsZWN0WSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTZWxlY3RZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVN0YXJ0WCAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVN0YXJ0WSAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCB7IFBDQiB9IGZyb20gXCIuL3BjYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlckdlcmJlciBleHRlbmRzIFBhcnNlciB7XHJcbiAgICByZU51bUZvcm1hdCA9IC9eJUZTTEFYKFswLTldKShbMC05XSlZKFswLTldKShbMC05XSlbKl0lLztcclxuICAgIHJlTWF0Y2hQYWQgPSAvXiglQUQpKERbMC05XSspKFtBLVphLXpdKylbLF0oWy0wLTkuXSspW1hdPyhbLTAtOS5dKyk/W1hdPyhbLTAtOS5dKyk/LztcclxuICAgIHJlTWF0Y2hQYWRDb29yZEluaXQgPSAvXihbREddWzAtOV0rKVsqXS87XHJcbiAgICByZU1hdGNoUGFkQ29vcmQgPSAvXlgoWy1dPykoWzAtOV0rKVkoWy1dPykoWzAtOV0rKUQoWzAtOV0rKVsqXS87XHJcbiAgICBfY2FuY2VsID0gZmFsc2U7XHJcbiAgICBmbG9hdEZyYWN0cyA9IDE7XHJcbiAgICBmbG9hdERlemlzID0gMTtcclxuICAgIGxhc3RQYWQgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBjYjogUENCKSB7XHJcbiAgICAgICAgc3VwZXIocGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2VGaWxlKGZpbGU6IEZpbGUpOlByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBmaWxlLmFycmF5QnVmZmVyKCkudGhlbigoYnVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZiwgJ1VURi04JywgKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0dlcmJlclRleHQodGV4dCkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcHJvY2Vzc0dlcmJlclRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlIGxpbmUgZW5kcy4uLlxyXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcci9nLCAnJyk7IC8vIHJlbW92ZSB3aW5kb3dzIHRyYXNoXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVOciA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICBsaW5lTnIrKztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdlcmJlcigke2xpbmVOcn0vJHtsaW5lcy5sZW5ndGh9KTogYCk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NHZXJiZXJMaW5lKGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc0NCKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NDQihsaW5lTnIgKiAxMDAgLyBsaW5lcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gLy8gZm9yXHJcblxyXG4gICAgICAgIHRoaXMucGNiLnJldHJlZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBwcm9jZXNzR2VyYmVyTGluZShsaW5lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGxpbmUgPSBsaW5lLnJlcGxhY2UoL1xcbi9nLCc8YnI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gWmFobGVuZm9ybWF0IGluZm8gbGluZSBcIiVGU0xBWDM0WTM0KiVcIlxyXG4gICAgICAgICAgICAgICAgLy8gICAlRlNMQVgyNVkyNSolIENvb3JkaW5hdGUgZm9ybWF0IHNwZWNpZmljYXRpb246XHJcbiAgICAgICAgICAgICAgICAvLyAgIENvb3JkaW5hdGVzIGZvcm1hdCBpcyAyLjU6XHJcbiAgICAgICAgICAgICAgICAvLyAgIDIgZGlnaXRzIGluIHRoZSBpbnRlZ2VyIHBhcnRcclxuICAgICAgICAgICAgICAgIC8vICAgNSBkaWdpdHMgaW4gdGhlIGZyYWN0aW9uYWwgcGFydFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hOdW1Gb3JtYXQgPSB0aGlzLnJlTnVtRm9ybWF0LmV4ZWMobGluZSk7IC8vbGluZS5tYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoTnVtRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hOdW1Gb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXREZXppcyA9IHBhcnNlSW50KG1hdGNoTnVtRm9ybWF0WzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0RnJhY3RzID0gcGFyc2VJbnQobWF0Y2hOdW1Gb3JtYXRbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnZXJiZXI6IGZsb2F0IGRpZ2l0cyA9ICR7dGhpcy5mbG9hdERlemlzfSAke3RoaXMuZmxvYXRGcmFjdHN9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHBhZCBkZWZpbml0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gJUFERDIxUiwwLjYwMDAwMFgxLjA1MDAwMColXHJcbiAgICAgICAgICAgICAgICAvLyAlQUREMTBSb3VuZFJlY3QsMC4xMjAwMDAgWCAtMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgWCAwLjY4MDAwMCBYIC0wLjE4MDAwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgIFggLTAuNjgwMDAwIFggMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICBYIC0wLjY4MDAwMCBYIDAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIFggMC42ODAwMDAgWCAwKiVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoUGFkID0gdGhpcy5yZU1hdGNoUGFkLmV4ZWMobGluZSk7IC8vIGxpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgLy8gV2VubiBcIkNcIiBkYW5uIGdpYnRzIG51ciBlaW5lIGNvb3JkXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaFBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFkc0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFkc0ZpZWxkLmlubmVySFRNTCArPSBgJHttYXRjaFBhZFsyXX0gJHttYXRjaFBhZFszXX0gJHttYXRjaFBhZFs0XX0gJHttYXRjaFBhZFs1XX08YnI+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkWzNdID09ICdSb3VuZFJlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpY2FkIG1hY3JvIHNjaG51bGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGNiLmFkZFBhZFN0eWxlKG1hdGNoUGFkWzJdLCBtYXRjaFBhZFszXSwgTWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs1XSkpLCBNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzZdKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyOiBzdHlsZSAke21hdGNoUGFkWzJdfSwke21hdGNoUGFkWzNdfSwgJHtNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKSl9LCAke01hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hQYWRbNl0pKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBjYi5hZGRQYWRTdHlsZShtYXRjaFBhZFsyXSwgbWF0Y2hQYWRbM10sIHBhcnNlRmxvYXQobWF0Y2hQYWRbNF0pLCBwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXI6IHN0eWxlICR7bWF0Y2hQYWRbMl19LCR7bWF0Y2hQYWRbM119LCAke3BhcnNlRmxvYXQobWF0Y2hQYWRbNF0pfSwgJHtwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHh4KiBjb21tYW5kIC0gc2hvdWxkIGJlIHBhZCBkcmF3XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFBhZENvb3JkSW5pdCA9IHRoaXMucmVNYXRjaFBhZENvb3JkSW5pdC5leGVjKGxpbmUpOyAvL2xpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmRJbml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hQYWRDb29yZEluaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZCA9IG1hdGNoUGFkQ29vcmRJbml0WzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gYSBwYWQgbGluZTogXCJYMzc5OTg0WTk2MzkzMEQwMypcIlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hQYWRDb29yZCA9IHRoaXMucmVNYXRjaFBhZENvb3JkLmV4ZWMobGluZSk7IC8vIGxpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0UGFkLnN0YXJ0c1dpdGgoJ0QnKSkgeyAvLyBpZ25vcmUgRzM2IG9yIHNvIGNvbW1hbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBhbmQgcmV0dXJuIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoUGFkQ29vcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ggPSBtYXRjaFBhZENvb3JkWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3kgPSBtYXRjaFBhZENvb3JkWzRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmZsb2F0RGV6aXMgKyB0aGlzLmZsb2F0RnJhY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIGZyZWFrJ3MgbGVhZGluZyB6ZXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3gubGVuZ3RoIDwgbGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeCA9IGAwJHtzeH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzeS5sZW5ndGggPCBsZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5ID0gYDAke3N5fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBhIGZyZWFrJ24gZmxvYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnkgPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4ID0gYCR7c3guc3Vic3RyaW5nKDAsIHRoaXMuZmxvYXREZXppcyl9LiR7c3guc3Vic3RyaW5nKHRoaXMuZmxvYXREZXppcyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3kgPSBgJHtzeS5zdWJzdHJpbmcoMCwgdGhpcy5mbG9hdERlemlzKX0uJHtzeS5zdWJzdHJpbmcodGhpcy5mbG9hdERlemlzKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeCA9IHBhcnNlRmxvYXQoc3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeSA9IHBhcnNlRmxvYXQoc3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRDb29yZFsxXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4ID0gZnggKiAtMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkWzNdID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnkgPSBmeSAqIC0xLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ5ID0gZnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3Jkc0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc0ZpZWxkLmlubmVySFRNTCArPSBgJHt0aGlzLmxhc3RQYWR9OiAgeDoke2Z4fSB5OiR7Znl9IDxicj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGNiLmFkZFBhZCh0aGlzLmxhc3RQYWQsIGZ4LCBmeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXI6IHBhZCAke2xhc3RQYWR9LCAke2Z4fSwgJHtmeX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaWdub3JpbmcgJHt0aGlzLmxhc3RQYWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihsaW5lTnIgPiAxNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrOyAvLyBmb3IgdGVzdGluZyAhISFcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGNiLmNlbnRlcigpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDApOyAvLyB0aGlzIGVuYWJsZXMgdGhlIHByb2dyZXNzYmFyIC8gVUkgdXBkYXRlcyAhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZvdW5kIG9uIHNlIHdlYi4uLlxyXG5cclxuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIsIGVuY29kaW5nLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZ0KSA9PiB7IGlmKGV2dC50YXJnZXQpIGNhbGxiYWNrKGV2dC50YXJnZXQucmVzdWx0KTsgfTtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IsIGVuY29kaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9BcnJheUJ1ZmZlcihzdHJpbmcsIGVuY29kaW5nLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbc3RyaW5nXSwgeyB0eXBlOiAndGV4dC9wbGFpbjtjaGFyc2V0PScgKyBlbmNvZGluZyB9KTtcclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChldnQpID0+IHsgaWYoZXZ0LnRhcmdldCkgY2FsbGJhY2soZXZ0LnRhcmdldC5yZXN1bHQpOyB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xyXG59XHJcbiIsImltcG9ydCB7IFBDQiB9IGZyb20gJy4vcGNiJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgcHVibGljIHByb2Nlc3NDQjogRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIHBhZHNGaWVsZDogSFRNTEVsZW1lbnR8bnVsbDtcclxuICAgIHB1YmxpYyBjb29yZHNGaWVsZDogSFRNTEVsZW1lbnR8bnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGNiOiBQQ0I7XHJcbiAgICBjb25zdHJ1Y3RvcihwY2I6IFBDQikge1xyXG4gICAgICAgIHRoaXMucGNiID0gcGNiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZUZpbGU/KGZpbGU6IEZpbGUpOlByb21pc2U8dm9pZD47IC8vIHZpcnR1YWwgIVxyXG4gICAgcHVibGljIGNhbmNlbD8oKTogdm9pZDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguSEFTSF9SRUZfN2MwYWY4MWFmNDI2ZTE4My5qcy5tYXAifQ==
