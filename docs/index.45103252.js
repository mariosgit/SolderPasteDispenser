(function () {
var $c259ef6f81906ef9$exports = {};
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
    $c259ef6f81906ef9$exports = a;
})();


// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream
class $f0fdef5ffc0f8d37$export$292a9937fd0445c5 {
    erate = 50;
    inite = 10;
    pade = 1;
    retracte = -10;
    zhop = 3;
}
class $f0fdef5ffc0f8d37$export$8215d14a63d9fb10 {
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
*/ var $9baf13ce784079cb$exports = {};
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
    else factory($9baf13ce784079cb$exports);
})($9baf13ce784079cb$exports, function(exports1) {
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
class $65795f14da45d35b$var$BoundingBox {
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
class $65795f14da45d35b$export$138f967feff4fb19 {
    constructor(form, w, h){
        this.form = form;
        this.width = w;
        this.height = h;
    }
}
class $65795f14da45d35b$export$4b43d51f29457384 {
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
class $65795f14da45d35b$export$bdf465113f979d8f {
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
        this.bbPcb = new $65795f14da45d35b$var$BoundingBox();
        this.bbZero = new $65795f14da45d35b$var$BoundingBox();
        this.bbSelection = new $65795f14da45d35b$var$BoundingBox();
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
        this.mapStyles.set(name, new $65795f14da45d35b$export$138f967feff4fb19(form, w, h));
    }
    addPad(style, x, y) {
        if (!this.mapPads.has(style)) this.mapPads.set(style, new Set());
        let padset = this.mapPads.get(style);
        if (padset) {
            const newpad = new $65795f14da45d35b$export$4b43d51f29457384(style, x, y);
            padset.add(newpad);
            this.bbPcb.update(x, y);
        }
    }
    retree() {
        try {
            let pads = [];
            for (let padsets of this.mapPads.values())for (let pad of padsets)pads.push(pad);
            this.tree = new (0, $9baf13ce784079cb$exports.kdTree)(pads, $65795f14da45d35b$export$bdf465113f979d8f.distance, [
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
            this.bbSelection = new $65795f14da45d35b$var$BoundingBox();
            this.bbSelection.update(this.mouseStartX, this.mouseStartY);
            this.bbSelection.update(this.mouseSelectX, this.mouseSelectY);
            let pad = new $65795f14da45d35b$export$4b43d51f29457384("", this.bbSelection.center()[0], this.bbSelection.center()[1]);
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
                let bbNewSelection = new $65795f14da45d35b$var$BoundingBox();
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


let $9e29816a9c20d59c$var$Status;
(function(Status) {
    Status[Status["Undefined"] = 1] = "Undefined";
    Status[Status["Ready"] = 2] = "Ready";
    Status[Status["Busy"] = 3] = "Busy";
    Status[Status["NC"] = 4] = "NC";
})($9e29816a9c20d59c$var$Status || ($9e29816a9c20d59c$var$Status = {}));
class $9e29816a9c20d59c$export$6d4db5538ef246e9 extends (0, $f0fdef5ffc0f8d37$export$8215d14a63d9fb10) {
    zero = [
        0,
        0
    ];
    constructor(){
        super();
        this.marlinDiv = document.getElementById("Marlin");
        this.movementSettings = new (0, $f0fdef5ffc0f8d37$export$292a9937fd0445c5)();
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
        const tree = new (0, $9baf13ce784079cb$exports.kdTree)(plist, (0, $65795f14da45d35b$export$bdf465113f979d8f).distance, [
            "posX",
            "posY"
        ]);
        // const tree = new kdTree(PCB, plist, PCB.distance, ["posX", "posY"]);
        let startpad = new (0, $65795f14da45d35b$export$4b43d51f29457384)("", start[0], start[1]);
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
        this.setStatus($9e29816a9c20d59c$var$Status.Ready);
        if (this.marlinDivStatus && this.marlinDivCommands) {
            this.setStatus($9e29816a9c20d59c$var$Status.Ready);
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
            this.setStatus($9e29816a9c20d59c$var$Status.NC);
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
            this.setStatus($9e29816a9c20d59c$var$Status.Busy);
            super.serialWriteWait(value, timeout).then((result)=>{
                resolve(result);
            }).catch((reason)=>{
                reject(reason);
            }).finally(()=>{
                this.setStatus($9e29816a9c20d59c$var$Status.Ready);
            });
        });
    }
    setStatus(status) {
        let html = `unknown status ${status}`;
        switch(status){
            case $9e29816a9c20d59c$var$Status.Ready:
                html = 'Status: <i class="fa-solid fa-plug"></i> ready';
                break;
            case $9e29816a9c20d59c$var$Status.Busy:
                html = 'Status: <i class="fa-solid fa-plug-circle-bolt"></i> busy';
                break;
            case $9e29816a9c20d59c$var$Status.NC:
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
            this.setStatus($9e29816a9c20d59c$var$Status.NC);
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



class $7a31232c24806873$export$7acfa6ed01010e37 {
    constructor(pcb){
        this.pcb = pcb;
    }
}


class $c7f23bed5a4fa419$export$fc5d4ca282e021b1 extends (0, $7a31232c24806873$export$7acfa6ed01010e37) {
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
                $c7f23bed5a4fa419$var$arrayBufferToString(buf, "UTF-8", (text)=>{
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
function $c7f23bed5a4fa419$var$arrayBufferToString(buffer, encoding, callback) {
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
function $c7f23bed5a4fa419$var$stringToArrayBuffer(string, encoding, callback) {
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
const $cc5081ad433ea591$var$body = document.getElementsByTagName("body")[0];
const $cc5081ad433ea591$var$messageElem = document.getElementById("messageElem");
const $cc5081ad433ea591$var$uploadButton = document.getElementById("uploadButton");
const $cc5081ad433ea591$var$testFileButton = document.getElementById("testFileButton");
const $cc5081ad433ea591$var$padsField = document.getElementById("padsField");
const $cc5081ad433ea591$var$coords = document.getElementById("Coords");
const $cc5081ad433ea591$var$coordsField = document.getElementById("coordsField");
const $cc5081ad433ea591$var$dropZone = document.getElementById("dropZone");
const $cc5081ad433ea591$var$canvas = document.getElementById("canvas");
const $cc5081ad433ea591$var$debug = document.getElementById("debug");
const $cc5081ad433ea591$var$progress = document.getElementById("progress");
const $cc5081ad433ea591$var$progressbar = document.getElementById("progressbar");
const $cc5081ad433ea591$var$contextMenu = document.getElementById("contextMenu");
const $cc5081ad433ea591$var$progressCancel = document.getElementById("progressCancel");
const $cc5081ad433ea591$var$menuSetZero = document.getElementById("menuSetZero");
const $cc5081ad433ea591$var$menuMoveTo = document.getElementById("menuMoveTo");
const $cc5081ad433ea591$var$menuMoveAll = document.getElementById("menuMoveAll");
const $cc5081ad433ea591$var$menuBlob = document.getElementById("menuBlob");
const $cc5081ad433ea591$var$main = document.getElementById("main");
const $cc5081ad433ea591$var$openSidebarButton = document.getElementById("openSidebar");
const $cc5081ad433ea591$var$header = document.getElementsByTagName("header")[0];
const $cc5081ad433ea591$var$footer = document.getElementById("footer");
let $cc5081ad433ea591$var$messageClearTimeout = undefined;
let $cc5081ad433ea591$var$ctx = null;
let $cc5081ad433ea591$var$mouse, $cc5081ad433ea591$var$grid;
let $cc5081ad433ea591$var$pcb;
let $cc5081ad433ea591$var$device = new (0, $9e29816a9c20d59c$export$6d4db5538ef246e9)();
let $cc5081ad433ea591$var$movementSettings = new (0, $f0fdef5ffc0f8d37$export$292a9937fd0445c5)();
function $cc5081ad433ea591$var$init() {
    if ($cc5081ad433ea591$var$testFileButton && $cc5081ad433ea591$var$uploadButton && $cc5081ad433ea591$var$menuSetZero && $cc5081ad433ea591$var$menuMoveTo && $cc5081ad433ea591$var$menuMoveAll && $cc5081ad433ea591$var$menuBlob && $cc5081ad433ea591$var$progressCancel && $cc5081ad433ea591$var$padsField && $cc5081ad433ea591$var$coordsField && $cc5081ad433ea591$var$body && $cc5081ad433ea591$var$canvas && $cc5081ad433ea591$var$footer) {
        $cc5081ad433ea591$var$ctx = $cc5081ad433ea591$var$canvas.getContext("2d");
        $cc5081ad433ea591$var$canvas.addEventListener("mousemove", (event)=>{
            if ($cc5081ad433ea591$var$pcb) $cc5081ad433ea591$var$pcb.mouseMove(event);
            event.preventDefault();
        }, false);
        $cc5081ad433ea591$var$canvas.addEventListener("mousedown", (event)=>{
            if ($cc5081ad433ea591$var$pcb) $cc5081ad433ea591$var$pcb.mouseDown(event);
            event.preventDefault();
        }, false);
        $cc5081ad433ea591$var$canvas.addEventListener("mouseup", (event)=>{
            if ($cc5081ad433ea591$var$pcb) $cc5081ad433ea591$var$pcb.mouseUp(event);
            event.preventDefault();
        }, false);
        $cc5081ad433ea591$var$canvas.addEventListener("mouseout", (event)=>{
            if ($cc5081ad433ea591$var$pcb) $cc5081ad433ea591$var$pcb.mouseOut(event);
            event.preventDefault();
        }, false);
        $cc5081ad433ea591$var$canvas.addEventListener("wheel", (event)=>{
            if ($cc5081ad433ea591$var$pcb) $cc5081ad433ea591$var$pcb.mouseWheel(event);
            event.preventDefault();
        }, false);
        $cc5081ad433ea591$var$uploadButton.onclick = ()=>{
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
                    $cc5081ad433ea591$var$processGerberFile(file);
                } else {
                    alert("please choose a file");
                    return;
                }
            });
            return false;
        };
        $cc5081ad433ea591$var$testFileButton.onclick = ()=>{
            fetch("https://raw.githubusercontent.com/mariosgit/SolderPasteDispenser/main/tests/blades_v40-PasteTop.gbr").then((res)=>res.blob()).then((blob)=>{
                var file = new File([
                    blob
                ], "blades_v40-PasteTop.gbr");
                $cc5081ad433ea591$var$processGerberFile(file);
            }).catch((reason)=>{
                console.warn(reason);
            });
        };
        $cc5081ad433ea591$var$menuSetZero.onclick = (event)=>{
            if ($cc5081ad433ea591$var$contextMenu) $cc5081ad433ea591$var$contextMenu.className = $cc5081ad433ea591$var$contextMenu.className.replace("w3-show", "w3-hide");
            $cc5081ad433ea591$var$pcb.setZero();
            $cc5081ad433ea591$var$device.setZero($cc5081ad433ea591$var$pcb.getZero()); // device must substract "zero" from all coords
        };
        $cc5081ad433ea591$var$menuMoveTo.onclick = (event)=>{
            if ($cc5081ad433ea591$var$contextMenu) $cc5081ad433ea591$var$contextMenu.className = $cc5081ad433ea591$var$contextMenu.className.replace("w3-show", "w3-hide");
            // console.log(event);
            // find the coords !!!
            // !!! need to be relative to zero !!! uuuhhh
            // let pads = pcb.getSelected();
            // if (pads.length > 0) {
            //     let pad: Pad = pads[0];
            //     console.log(pad);
            //     device.moveTo(pad.posX, pad.posY, undefined, undefined);
            // }
            let pos = $cc5081ad433ea591$var$pcb.getSelectedZero(); // lower left of selection
            $cc5081ad433ea591$var$device.moveTo(pos[0], pos[1], undefined, undefined);
        };
        $cc5081ad433ea591$var$menuMoveAll.onclick = (event)=>{
            if ($cc5081ad433ea591$var$contextMenu) $cc5081ad433ea591$var$contextMenu.className = $cc5081ad433ea591$var$contextMenu.className.replace("w3-show", "w3-hide");
            let plist = $cc5081ad433ea591$var$pcb.getSelected();
            let pzero = $cc5081ad433ea591$var$pcb.getSelectedZero();
            $cc5081ad433ea591$var$device.moveToAll(plist, pzero);
        };
        $cc5081ad433ea591$var$menuBlob.onclick = ()=>{
            if ($cc5081ad433ea591$var$contextMenu) $cc5081ad433ea591$var$contextMenu.className = $cc5081ad433ea591$var$contextMenu.className.replace("w3-show", "w3-hide");
            $cc5081ad433ea591$var$device.blob();
        };
        $cc5081ad433ea591$var$body.ondrop = (ev)=>{
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
                        $cc5081ad433ea591$var$processGerberFile(file);
                    }
                }
            });
            else if (ev.dataTransfer) // Use DataTransfer interface to access the file(s)
            [
                ...ev.dataTransfer.files
            ].forEach((file, i)=>{
                if (file) {
                    console.log(`… file[${i}].name = ${file.name}`);
                    $cc5081ad433ea591$var$processGerberFile(file);
                }
            });
        };
        $cc5081ad433ea591$var$body.ondragover = (ev)=>{
            // console.log('File(s) in drop zone');
            // Prevent default behavior (Prevent file from being opened)
            ev.preventDefault();
        };
        $cc5081ad433ea591$var$canvas.oncontextmenu = (ev)=>{
            // console.log('oncontextmenu',ev);
            ev.preventDefault();
            if ($cc5081ad433ea591$var$contextMenu) {
                $cc5081ad433ea591$var$contextMenu.style.left = `${ev.pageX}px`;
                $cc5081ad433ea591$var$contextMenu.style.top = `${ev.pageY}px`;
                $cc5081ad433ea591$var$contextMenu.className = $cc5081ad433ea591$var$contextMenu.className.replace("w3-hide", "w3-show");
            }
        };
        $cc5081ad433ea591$var$canvas.onmouseup = (ev)=>{
            if ($cc5081ad433ea591$var$contextMenu) $cc5081ad433ea591$var$contextMenu.className = $cc5081ad433ea591$var$contextMenu.className.replace("w3-show", "w3-hide");
        };
        if ($cc5081ad433ea591$var$ctx) {
            $cc5081ad433ea591$var$pcb = new (0, $65795f14da45d35b$export$bdf465113f979d8f)();
            $cc5081ad433ea591$var$pcb.setCanvas($cc5081ad433ea591$var$ctx, $cc5081ad433ea591$var$canvas);
            $cc5081ad433ea591$var$mouse = new (0, $c259ef6f81906ef9$exports.Mouse)($cc5081ad433ea591$var$ctx, $cc5081ad433ea591$var$canvas);
            $cc5081ad433ea591$var$mouse.track();
            $cc5081ad433ea591$var$grid = new (0, $c259ef6f81906ef9$exports.Grid)();
            $cc5081ad433ea591$var$grid.step = 2;
            $cc5081ad433ea591$var$grid.lineWidth = 0.03;
            $cc5081ad433ea591$var$grid.boldWidth = 0.05;
            $cc5081ad433ea591$var$grid.createLines($cc5081ad433ea591$var$canvas);
        }
        globalThis.resize();
        window.requestAnimationFrame($cc5081ad433ea591$var$update);
    } else console.error("missing html elements !");
}
function $cc5081ad433ea591$var$message(text) {
    if ($cc5081ad433ea591$var$messageClearTimeout) window.clearTimeout($cc5081ad433ea591$var$messageClearTimeout);
    if ($cc5081ad433ea591$var$messageElem) {
        $cc5081ad433ea591$var$messageElem.innerHTML = `${text}`;
        $cc5081ad433ea591$var$messageClearTimeout = window.setTimeout($cc5081ad433ea591$var$messageClear, 10000);
    }
}
function $cc5081ad433ea591$var$messageClear() {
    $cc5081ad433ea591$var$messageClearTimeout = undefined;
    if ($cc5081ad433ea591$var$messageElem) $cc5081ad433ea591$var$messageElem.innerHTML = "";
}
function $cc5081ad433ea591$var$update() {
    if ($cc5081ad433ea591$var$canvas && $cc5081ad433ea591$var$ctx) {
        window.requestAnimationFrame($cc5081ad433ea591$var$update);
        $cc5081ad433ea591$var$ctx.setTransform($cc5081ad433ea591$var$pcb ? $cc5081ad433ea591$var$pcb.zoom : 1, 0, 0, $cc5081ad433ea591$var$pcb ? $cc5081ad433ea591$var$pcb.zoom : 1, 0, 0);
        $cc5081ad433ea591$var$ctx.clearRect(0, 0, $cc5081ad433ea591$var$canvas.width, $cc5081ad433ea591$var$canvas.height);
        // grid.draw(ctx, canvas);
        // grid.step = pcb?10.0/pcb.zoom:10.0;
        // grid.createLines(canvas);
        $cc5081ad433ea591$var$grid.lines.forEach((line)=>line.draw($cc5081ad433ea591$var$ctx));
        $cc5081ad433ea591$var$mouse.draw();
        $cc5081ad433ea591$var$ctx.setTransform(1, 0, 0, -1, 0, $cc5081ad433ea591$var$canvas.height);
        // ctx.scale(1,-1); // flip display y
        if ($cc5081ad433ea591$var$pcb) $cc5081ad433ea591$var$pcb.draw();
    }
}
async function $cc5081ad433ea591$var$processGerberFile(file) {
    if ($cc5081ad433ea591$var$padsField && $cc5081ad433ea591$var$coordsField && $cc5081ad433ea591$var$ctx && $cc5081ad433ea591$var$canvas && $cc5081ad433ea591$var$progress && $cc5081ad433ea591$var$progressbar && $cc5081ad433ea591$var$progressCancel && $cc5081ad433ea591$var$dropZone) {
        $cc5081ad433ea591$var$pcb = new (0, $65795f14da45d35b$export$bdf465113f979d8f)();
        $cc5081ad433ea591$var$pcb.setCanvas($cc5081ad433ea591$var$ctx, $cc5081ad433ea591$var$canvas);
        let parser = new (0, $c7f23bed5a4fa419$export$fc5d4ca282e021b1)($cc5081ad433ea591$var$pcb);
        $cc5081ad433ea591$var$padsField.innerHTML = "";
        $cc5081ad433ea591$var$coordsField.innerHTML = "";
        $cc5081ad433ea591$var$dropZone.innerText = file.name;
        $cc5081ad433ea591$var$progress.style.display = "block";
        parser.padsField = $cc5081ad433ea591$var$padsField;
        parser.coordsField = $cc5081ad433ea591$var$coordsField;
        $cc5081ad433ea591$var$progressCancel.onclick = ()=>{
            parser.cancel();
        };
        parser.processCB = (value)=>{
            if ($cc5081ad433ea591$var$progressbar) $cc5081ad433ea591$var$progressbar.style.width = `${value}%`;
        };
        await parser.parseFile(file);
        $cc5081ad433ea591$var$pcb.zoomToFit([
            $cc5081ad433ea591$var$canvas.width,
            $cc5081ad433ea591$var$canvas.height
        ]);
        $cc5081ad433ea591$var$progress.style.display = "none";
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
    if ($cc5081ad433ea591$var$main && $cc5081ad433ea591$var$debug && $cc5081ad433ea591$var$openSidebarButton) {
        $cc5081ad433ea591$var$main.style.marginRight = "350px";
        $cc5081ad433ea591$var$debug.style.width = "350px";
        $cc5081ad433ea591$var$debug.style.display = "block";
        $cc5081ad433ea591$var$openSidebarButton.style.display = "none";
    }
};
globalThis.closeSidebar = ()=>{
    if ($cc5081ad433ea591$var$main && $cc5081ad433ea591$var$debug && $cc5081ad433ea591$var$openSidebarButton) {
        $cc5081ad433ea591$var$main.style.marginRight = "0px";
        $cc5081ad433ea591$var$debug.style.display = "none";
        $cc5081ad433ea591$var$openSidebarButton.style.display = "inline-block";
    }
};
globalThis.zoomToFit = ()=>{
    if ($cc5081ad433ea591$var$pcb && $cc5081ad433ea591$var$canvas) $cc5081ad433ea591$var$pcb.zoomToFit([
        $cc5081ad433ea591$var$canvas.width,
        $cc5081ad433ea591$var$canvas.height
    ]);
};
globalThis.rotateRight = ()=>{
    $cc5081ad433ea591$var$pcb && $cc5081ad433ea591$var$canvas;
    $cc5081ad433ea591$var$message("m\xfcsste ma einer implementieren, ne");
};
globalThis.moveSettings = ()=>{
    // set values !!!
    const erate = document.getElementById("moveSetERate");
    const inite = document.getElementById("moveSetInitE");
    const pade = document.getElementById("moveSetPadE");
    const retracte = document.getElementById("moveSetRetractE");
    const zhop = document.getElementById("moveSetZHop");
    erate.value = `${$cc5081ad433ea591$var$movementSettings.erate}`;
    inite.value = `${$cc5081ad433ea591$var$movementSettings.inite}`;
    pade.value = `${$cc5081ad433ea591$var$movementSettings.pade}`;
    retracte.value = `${$cc5081ad433ea591$var$movementSettings.retracte}`;
    zhop.value = `${$cc5081ad433ea591$var$movementSettings.zhop}`;
    globalThis.accordionToggler("moveSettingsPanel");
};
globalThis.defaultMoveSettings = ()=>{
    $cc5081ad433ea591$var$movementSettings = new (0, $f0fdef5ffc0f8d37$export$292a9937fd0445c5)();
    if ($cc5081ad433ea591$var$device.applyMoveSettings) $cc5081ad433ea591$var$device.applyMoveSettings($cc5081ad433ea591$var$movementSettings);
    globalThis.accordionToggler("moveSettingsPanel");
    console.log("applyMoveSettings", $cc5081ad433ea591$var$movementSettings);
};
globalThis.applyMoveSettings = ()=>{
    // get values !!!
    const erate = document.getElementById("moveSetERate");
    const inite = document.getElementById("moveSetInitE");
    const pade = document.getElementById("moveSetPadE");
    const retracte = document.getElementById("moveSetRetractE");
    const zhop = document.getElementById("moveSetZHop");
    $cc5081ad433ea591$var$movementSettings.erate = parseFloat(erate.value);
    $cc5081ad433ea591$var$movementSettings.inite = parseFloat(inite.value);
    $cc5081ad433ea591$var$movementSettings.pade = parseFloat(pade.value);
    $cc5081ad433ea591$var$movementSettings.retracte = parseFloat(retracte.value);
    $cc5081ad433ea591$var$movementSettings.zhop = parseFloat(zhop.value);
    if ($cc5081ad433ea591$var$device.applyMoveSettings) $cc5081ad433ea591$var$device.applyMoveSettings($cc5081ad433ea591$var$movementSettings);
    globalThis.accordionToggler("moveSettingsPanel");
    console.log("applyMoveSettings", $cc5081ad433ea591$var$movementSettings);
};
globalThis.resize = ()=>{
    if ($cc5081ad433ea591$var$canvas && $cc5081ad433ea591$var$header && $cc5081ad433ea591$var$footer && $cc5081ad433ea591$var$debug && $cc5081ad433ea591$var$coords) {
        $cc5081ad433ea591$var$canvas.width = innerWidth;
        $cc5081ad433ea591$var$canvas.height = innerHeight - $cc5081ad433ea591$var$header.getBoundingClientRect().height - $cc5081ad433ea591$var$footer.getBoundingClientRect().height;
        $cc5081ad433ea591$var$mouse.draw();
        $cc5081ad433ea591$var$grid.draw($cc5081ad433ea591$var$ctx, $cc5081ad433ea591$var$canvas);
        // height of debug is innerHeight - margin top/bottom more or less - footer.height
        // console.log('resize: margin', debug.getBoundingClientRect().top);
        let dmaxheight = innerHeight - $cc5081ad433ea591$var$footer.getBoundingClientRect().height; // canvas.height + header.getBoundingClientRect().height - 16;
        // debug.style.height = `${dheight}px`; // 16 is marginTop
        // console.log('resize: inner height', innerHeight);
        // console.log('resize: debug height', dheight);
        // height of all other elements in debug
        let height = 0;
        for (let child of $cc5081ad433ea591$var$debug.children){
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
        if ($cc5081ad433ea591$var$coords.className.indexOf("w3-hide") != -1) {
            // console.log('resize coords is NOT visible');
            $cc5081ad433ea591$var$debug.style.height = `${height + 16}px`;
            $cc5081ad433ea591$var$coords.style.height = `${16}px`; // egal ?
        } else {
            // console.log('resize coords is visible');
            height -= $cc5081ad433ea591$var$coords.getBoundingClientRect().height; // do not count coords to hight
            $cc5081ad433ea591$var$debug.style.height = `${dmaxheight}px`;
            $cc5081ad433ea591$var$coords.style.height = `${dmaxheight - height - 16}px`;
        }
    }
};
document.addEventListener("DOMContentLoaded", $cc5081ad433ea591$var$init);
window.addEventListener("resize", (val)=>{
    // console.log(`resize: ${val}`);
    globalThis.resize();
});

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFFLE1BQU0sTUFBTSxDQUFDLEdBQUUsU0FBUyxNQUFNLENBQUM7b0JBQUcsRUFBRSxJQUFJLElBQUcsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLElBQUksR0FBQyxDQUFDO29CQUFDLElBQUksSUFBRSxJQUFFLEVBQUUsS0FBSyxHQUFDLElBQUUsS0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxHQUFDLEVBQUUsRUFBQyxJQUFFLElBQUUsRUFBRSxNQUFNLEdBQUMsSUFBRSxLQUFHLEdBQUc7b0JBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUcsRUFBRSxPQUFPLElBQUcsSUFBSTtnQkFBQTtZQUFDO1NBQUUsR0FBRSxDQUFDO0lBQUE7SUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUcsQ0FBRSxDQUFBLGFBQWEsQ0FBQSxHQUFHLE1BQU0sSUFBSSxVQUFVLHFDQUFvQztJQUFBO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSTtZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTtZQUFDLEVBQUUsVUFBVSxHQUFDLEVBQUUsVUFBVSxJQUFFLENBQUMsR0FBRSxFQUFFLFlBQVksR0FBQyxDQUFDLEdBQUUsV0FBVSxLQUFJLENBQUEsRUFBRSxRQUFRLEdBQUMsQ0FBQyxDQUFBLEdBQUcsT0FBTyxjQUFjLENBQUMsR0FBRSxFQUFFLEdBQUcsRUFBQyxFQUFFO1FBQUE7SUFBQztJQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLE9BQU8sS0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFDLElBQUcsS0FBRyxFQUFFLEdBQUUsSUFBRyxDQUFDO0lBQUE7SUFBQyxJQUFJLElBQUUsV0FBVTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsSUFBSSxFQUFDLElBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7UUFBQTtRQUFDLE9BQU8sRUFBRSxHQUFFO1lBQUM7Z0JBQUMsS0FBSTtnQkFBTyxPQUFNLFNBQVMsQ0FBQyxFQUFDO29CQUFDLElBQUksSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJO29CQUFDLEVBQUUsSUFBSSxJQUFHLEVBQUUsU0FBUyxJQUFHLEVBQUUsV0FBVyxHQUFDLEdBQUUsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUcsRUFBRSxNQUFNLENBQUMsR0FBRSxJQUFHLEVBQUUsTUFBTSxJQUFHLEVBQUUsT0FBTyxFQUFFO2dCQUFBO1lBQUM7U0FBRSxHQUFFLENBQUM7SUFBQSxLQUFJLElBQUUsV0FBVTtRQUFDLFNBQVMsSUFBRztZQUFDLElBQUksSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsTUFBTSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLFVBQVUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsZ0JBQWdCO1lBQUMsRUFBRSxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJO1FBQUE7UUFBQyxPQUFPLEVBQUUsR0FBRTtZQUFDO2dCQUFDLEtBQUk7Z0JBQWMsT0FBTSxTQUFTLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUksSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBRSxFQUFFLEVBQUMsSUFBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxLQUFLLEVBQUMsS0FBRyxFQUFFO3dCQUFDLElBQUksSUFBRSxJQUFFLEtBQUc7d0JBQUUsRUFBRSxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsTUFBTSxJQUFFLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxNQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxFQUFDLEtBQUcsRUFBRTt3QkFBQyxJQUFJLElBQUUsSUFBRSxLQUFHO3dCQUFFLEVBQUUsSUFBSSxDQUFDLElBQUUsSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxLQUFLLEVBQUMsS0FBRyxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEtBQUssRUFBQyxFQUFFO29CQUFDO29CQUFDLElBQUksQ0FBQyxLQUFLLEdBQUM7Z0JBQUM7WUFBQztZQUFFO2dCQUFDLEtBQUk7Z0JBQVcsT0FBTSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJO29CQUFDLEVBQUUsSUFBSSxJQUFHLEVBQUUsSUFBSSxHQUFDLEdBQUUsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLFFBQVEsQ0FBQyxLQUFJLEdBQUUsR0FBRztvQkFBQyxJQUFJLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxLQUFHLElBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFFLEdBQUU7b0JBQUksSUFBSSxJQUFJLElBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxN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U0FBUztRQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsU0FBUztRQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07UUFDZixVQUFVO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUMxSyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07UUFFZixLQUFLLElBQUksWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBSTtZQUV0QyxNQUFNLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDL0IsTUFBTSxTQUFTLElB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Q0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1FBR2YsMEJBQTBCO1FBQzFCLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRztZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQzlHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUztZQUM5RyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDOUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQzlHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFX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QUFHLE1BQU0sRUFBRSwrQkFBK0I7WUFDaEYsNEJBQU0sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdEMsNkJBQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsYUFBYSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0FBQ0w7QUFFQSxTQUFTLGdCQUFnQixDQUFDLG9CQUFvQjtBQUU5QyxPQUFPLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFRO0lBQ3ZDLGlDQUFpQztJQUNqQyxXQUFXLE1BQU07QUFDckIiLCJzb3VyY2VzIjpbInNyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtY29vcmRzL2Rpc3QvaW5kZXguanMiLCJzcmMvZGV2aWNlLnRzIiwic3JjL2RldmljZU1hcmxpbi50cyIsIm5vZGVfbW9kdWxlcy9rZC10cmVlLWphdmFzY3JpcHQva2RUcmVlLmpzIiwic3JjL3BjYi50cyIsInNyYy9wYXJzZXJHZXJiZXIudHMiLCJzcmMvcGFyc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIE1vdXNlIH0gZnJvbSAnY2FudmFzLWNvb3JkcycgLy8gaHR0cHM6Ly9naXRodWIuY29tL0NvZGVEcmFrZW4vY2FudmFzLWNvb3Jkc1xyXG5pbXBvcnQgeyBEZXZpY2UsIE1vdmVtZW50U2V0dGluZ3MgfSBmcm9tICcuL2RldmljZSc7XHJcbmltcG9ydCB7IE1hcmxpbiB9IGZyb20gJy4vZGV2aWNlTWFybGluJztcclxuaW1wb3J0IHsgUENCLCBQYWQsIFBhZFN0eWxlIH0gZnJvbSAnLi9wY2InO1xyXG5pbXBvcnQgeyBQYXJzZXJHZXJiZXIgfSBmcm9tICcuL3BhcnNlckdlcmJlcic7XHJcblxyXG4vLyBzaW1wbGVyICEhISBjb25zdCBpbmZvRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignI2luZm9Ecm9wRG93bicpO1xyXG5cclxuY29uc3QgYm9keTogSFRNTEJvZHlFbGVtZW50IHwgbnVsbCA9IDxIVE1MQm9keUVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbmNvbnN0IG1lc3NhZ2VFbGVtOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUVsZW1cIik7XHJcbmNvbnN0IHVwbG9hZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZEJ1dHRvblwiKTtcclxuY29uc3QgdGVzdEZpbGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0RmlsZUJ1dHRvblwiKTtcclxuY29uc3QgcGFkc0ZpZWxkOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFkc0ZpZWxkXCIpO1xyXG5jb25zdCBjb29yZHM6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDb29yZHNcIik7XHJcbmNvbnN0IGNvb3Jkc0ZpZWxkOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29vcmRzRmllbGRcIik7XHJcbmNvbnN0IGRyb3Bab25lOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bab25lXCIpO1xyXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCA9IDxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbmNvbnN0IGRlYnVnOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdcIik7XHJcbmNvbnN0IHByb2dyZXNzOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XHJcbmNvbnN0IHByb2dyZXNzYmFyOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc2JhcicpO1xyXG5jb25zdCBjb250ZXh0TWVudTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGV4dE1lbnUnKTtcclxuY29uc3QgcHJvZ3Jlc3NDYW5jZWw6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQ2FuY2VsJyk7XHJcblxyXG5jb25zdCBtZW51U2V0WmVybzogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVTZXRaZXJvXCIpO1xyXG5jb25zdCBtZW51TW92ZVRvOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudU1vdmVUb1wiKTtcclxuY29uc3QgbWVudU1vdmVBbGw6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51TW92ZUFsbFwiKTtcclxuY29uc3QgbWVudUJsb2I6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QmxvYlwiKTtcclxuXHJcblxyXG5jb25zdCBtYWluOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuY29uc3Qgb3BlblNpZGViYXJCdXR0b246IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuU2lkZWJhclwiKTtcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG5cclxubGV0IG1lc3NhZ2VDbGVhclRpbWVvdXQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxubGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IG51bGw7XHJcbmxldCBtb3VzZTogTW91c2UsIGdyaWQ6IEdyaWQ7XHJcbmxldCBwY2I6IFBDQjtcclxuXHJcbmxldCBkZXZpY2UgPSBuZXcgTWFybGluKCk7XHJcblxyXG5sZXQgbW92ZW1lbnRTZXR0aW5ncyA9IG5ldyBNb3ZlbWVudFNldHRpbmdzKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKHRlc3RGaWxlQnV0dG9uICYmIHVwbG9hZEJ1dHRvbiAmJiBtZW51U2V0WmVybyAmJiBtZW51TW92ZVRvICYmIG1lbnVNb3ZlQWxsICYmIG1lbnVCbG9iICYmIHByb2dyZXNzQ2FuY2VsICYmIHBhZHNGaWVsZCAmJiBjb29yZHNGaWVsZCAmJiBib2R5ICYmIGNhbnZhcyAmJiBmb290ZXIpIHtcclxuICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlTW92ZShldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VEb3duKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VVcChldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZU91dChldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZVdoZWVsKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHVwbG9hZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdXBsb2FkRmlsZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGVFbGUudHlwZSA9IFwiZmlsZVwiO1xyXG4gICAgICAgICAgICB1cGxvYWRGaWxlRWxlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGVFbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXY6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB1c2VyIGhhZCBzZWxlY3RlZCBhIGZpbGVcclxuICAgICAgICAgICAgICAgIGlmICh1cGxvYWRGaWxlRWxlLmZpbGVzICYmIHVwbG9hZEZpbGVFbGUuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gdXBsb2FkRmlsZUVsZS5maWxlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaWxlOiAke2ZpbGUubmFtZX0gc2l6ZToke2ZpbGUuc2l6ZX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0dlcmJlckZpbGUoZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxlYXNlIGNob29zZSBhIGZpbGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXN0RmlsZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21hcmlvc2dpdC9Tb2xkZXJQYXN0ZURpc3BlbnNlci9tYWluL3Rlc3RzL2JsYWRlc192NDAtUGFzdGVUb3AuZ2JyJylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuYmxvYigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYmxvYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBuZXcgRmlsZShbYmxvYl0sIFwiYmxhZGVzX3Y0MC1QYXN0ZVRvcC5nYnJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0dlcmJlckZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7Y29uc29sZS53YXJuKHJlYXNvbil9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVTZXRaZXJvLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGNiLnNldFplcm8oKTtcclxuICAgICAgICAgICAgZGV2aWNlLnNldFplcm8ocGNiLmdldFplcm8oKSk7IC8vIGRldmljZSBtdXN0IHN1YnN0cmFjdCBcInplcm9cIiBmcm9tIGFsbCBjb29yZHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVNb3ZlVG8ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGNvb3JkcyAhISFcclxuICAgICAgICAgICAgLy8gISEhIG5lZWQgdG8gYmUgcmVsYXRpdmUgdG8gemVybyAhISEgdXV1aGhoXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgcGFkcyA9IHBjYi5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICAvLyBpZiAocGFkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcGFkOiBQYWQgPSBwYWRzWzBdO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocGFkKTtcclxuICAgICAgICAgICAgLy8gICAgIGRldmljZS5tb3ZlVG8ocGFkLnBvc1gsIHBhZC5wb3NZLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwY2IuZ2V0U2VsZWN0ZWRaZXJvKCk7IC8vIGxvd2VyIGxlZnQgb2Ygc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGRldmljZS5tb3ZlVG8ocG9zWzBdLCBwb3NbMV0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudU1vdmVBbGwub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcGxpc3QgPSBwY2IuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICAgICAgbGV0IHB6ZXJvID0gcGNiLmdldFNlbGVjdGVkWmVybygpO1xyXG4gICAgICAgICAgICBkZXZpY2UubW92ZVRvQWxsKHBsaXN0LCBwemVybyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnVCbG9iLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRldmljZS5ibG9iKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib2R5Lm9uZHJvcCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgICAgICAgICAgIGlmIChldi5kYXRhVHJhbnNmZXIgJiYgZXYuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxyXG4gICAgICAgICAgICAgICAgWy4uLmV2LmRhdGFUcmFuc2Zlci5pdGVtc10uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGRyb3BwZWQgaXRlbXMgYXJlbid0IGZpbGVzLCByZWplY3QgdGhlbVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmtpbmQgPT09ICdmaWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDigKYgaXRlbVske2l9XS5uYW1lID0gJHtmaWxlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzR2VyYmVyRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIERhdGFUcmFuc2ZlciBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXHJcbiAgICAgICAgICAgICAgICBbLi4uZXYuZGF0YVRyYW5zZmVyLmZpbGVzXS5mb3JFYWNoKChmaWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKApiBmaWxlWyR7aX1dLm5hbWUgPSAke2ZpbGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0dlcmJlckZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keS5vbmRyYWdvdmVyID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdGaWxlKHMpIGluIGRyb3Agem9uZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIChQcmV2ZW50IGZpbGUgZnJvbSBiZWluZyBvcGVuZWQpXHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMub25jb250ZXh0bWVudSA9IChldikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25jb250ZXh0bWVudScsZXYpO1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LnN0eWxlLmxlZnQgPSBgJHtldi5wYWdlWH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5zdHlsZS50b3AgPSBgJHtldi5wYWdlWX1weGA7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtaGlkZScsICd3My1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FudmFzLm9ubW91c2V1cCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICBwY2IgPSBuZXcgUENCKCk7XHJcbiAgICAgICAgICAgIHBjYi5zZXRDYW52YXMoY3R4LCBjYW52YXMpO1xyXG5cclxuICAgICAgICAgICAgbW91c2UgPSBuZXcgTW91c2UoY3R4LCBjYW52YXMpO1xyXG4gICAgICAgICAgICBtb3VzZS50cmFjaygpO1xyXG4gICAgICAgICAgICBncmlkID0gbmV3IEdyaWQoKTtcclxuICAgICAgICAgICAgZ3JpZC5zdGVwID0gMjtcclxuICAgICAgICAgICAgZ3JpZC5saW5lV2lkdGggPSAwLjAzO1xyXG4gICAgICAgICAgICBncmlkLmJvbGRXaWR0aCA9IDAuMDU7XHJcbiAgICAgICAgICAgIGdyaWQuY3JlYXRlTGluZXMoY2FudmFzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsb2JhbFRoaXMucmVzaXplKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ21pc3NpbmcgaHRtbCBlbGVtZW50cyAhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lc3NhZ2UodGV4dDogc3RyaW5nKSB7XHJcbiAgICBpZiAobWVzc2FnZUNsZWFyVGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobWVzc2FnZUNsZWFyVGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBpZiAobWVzc2FnZUVsZW0pIHtcclxuICAgICAgICBtZXNzYWdlRWxlbS5pbm5lckhUTUwgPSBgJHt0ZXh0fWA7XHJcbiAgICAgICAgbWVzc2FnZUNsZWFyVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KG1lc3NhZ2VDbGVhciwgMTAwMDApO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1lc3NhZ2VDbGVhcigpIHtcclxuICAgIG1lc3NhZ2VDbGVhclRpbWVvdXQgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAobWVzc2FnZUVsZW0pIHtcclxuICAgICAgICBtZXNzYWdlRWxlbS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgaWYgKGNhbnZhcyAmJiBjdHgpIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcblxyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIHBjYiA/IHBjYi56b29tIDogMSwgMCxcclxuICAgICAgICAgICAgMCwgcGNiID8gcGNiLnpvb20gOiAxLFxyXG4gICAgICAgICAgICAwLCAwKTtcclxuXHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIC8vIGdyaWQuZHJhdyhjdHgsIGNhbnZhcyk7XHJcbiAgICAgICAgLy8gZ3JpZC5zdGVwID0gcGNiPzEwLjAvcGNiLnpvb206MTAuMDtcclxuICAgICAgICAvLyBncmlkLmNyZWF0ZUxpbmVzKGNhbnZhcyk7XHJcbiAgICAgICAgZ3JpZC5saW5lcy5mb3JFYWNoKGxpbmUgPT4gbGluZS5kcmF3KGN0eCkpXHJcbiAgICAgICAgbW91c2UuZHJhdygpO1xyXG5cclxuXHJcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybShcclxuICAgICAgICAgICAgMSwgMCxcclxuICAgICAgICAgICAgMCwgLTEsXHJcbiAgICAgICAgICAgIDAsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBjdHguc2NhbGUoMSwtMSk7IC8vIGZsaXAgZGlzcGxheSB5XHJcblxyXG4gICAgICAgIGlmIChwY2IpIHtcclxuICAgICAgICAgICAgcGNiLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGU6IEZpbGUpIHtcclxuICAgIGlmIChwYWRzRmllbGQgJiYgY29vcmRzRmllbGQgJiYgY3R4ICYmIGNhbnZhcyAmJiBwcm9ncmVzcyAmJiBwcm9ncmVzc2JhciAmJiBwcm9ncmVzc0NhbmNlbCAmJiBkcm9wWm9uZSkgeyAvLyBtYWtlcyB0eXBlc2NyaXB0IGhhcHB5Li4uXHJcblxyXG4gICAgICAgIHBjYiA9IG5ldyBQQ0IoKTtcclxuICAgICAgICBwY2Iuc2V0Q2FudmFzKGN0eCwgY2FudmFzKTtcclxuICAgICAgICBsZXQgcGFyc2VyID0gbmV3IFBhcnNlckdlcmJlcihwY2IpO1xyXG5cclxuICAgICAgICBwYWRzRmllbGQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29vcmRzRmllbGQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZHJvcFpvbmUuaW5uZXJUZXh0ID0gZmlsZS5uYW1lO1xyXG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBwYXJzZXIucGFkc0ZpZWxkID0gcGFkc0ZpZWxkO1xyXG4gICAgICAgIHBhcnNlci5jb29yZHNGaWVsZCA9IGNvb3Jkc0ZpZWxkO1xyXG4gICAgICAgIHByb2dyZXNzQ2FuY2VsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnNlci5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VyLnByb2Nlc3NDQiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2Jhcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIuc3R5bGUud2lkdGggPSBgJHt2YWx1ZX0lYDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9ncmVzczonLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgcGFyc2VyLnBhcnNlRmlsZShmaWxlKTtcclxuXHJcbiAgICAgICAgcGNiLnpvb21Ub0ZpdChbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSk7XHJcblxyXG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5nbG9iYWxUaGlzLmFjY29yZGlvblRvZ2dsZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtc2hvd1wiKSA9PSAtMSAmJiBlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtaGlkZVwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSArPSBcIiB3My1zaG93XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtc2hvd1wiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoXCJ3My1zaG93XCIsIFwidzMtaGlkZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoXCJ3My1oaWRlXCIsIFwidzMtc2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignYWNjb3JkaW9uVG9nZ2xlciBubyBlbGVtIHdpdGggaWQ6JywgaWQpO1xyXG4gICAgfVxyXG4gICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5vcGVuU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGlmIChtYWluICYmIGRlYnVnICYmIG9wZW5TaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMzUwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS53aWR0aCA9IFwiMzUwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIG9wZW5TaWRlYmFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuY2xvc2VTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgaWYgKG1haW4gJiYgZGVidWcgJiYgb3BlblNpZGViYXJCdXR0b24pIHtcclxuICAgICAgICBtYWluLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgb3BlblNpZGViYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuem9vbVRvRml0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHBjYiAmJiBjYW52YXMpIHtcclxuICAgICAgICBwY2Iuem9vbVRvRml0KFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdKTtcclxuICAgIH1cclxufVxyXG5cclxuZ2xvYmFsVGhpcy5yb3RhdGVSaWdodCA9ICgpID0+IHtcclxuICAgIGlmIChwY2IgJiYgY2FudmFzKSB7XHJcbiAgICAgICAgLy8gcGNiLnpvb21Ub0ZpdChbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdlKCdtw7xzc3RlIG1hIGVpbmVyIGltcGxlbWVudGllcmVuLCBuZScpO1xyXG59XHJcblxyXG5nbG9iYWxUaGlzLm1vdmVTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIC8vIHNldCB2YWx1ZXMgISEhXHJcbiAgICBjb25zdCBlcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldEVSYXRlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbml0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldEluaXRFXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwYWRlICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldFBhZEVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHJldHJhY3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZlU2V0UmV0cmFjdEVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHpob3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVTZXRaSG9wXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgZXJhdGUudmFsdWUgPSBgJHttb3ZlbWVudFNldHRpbmdzLmVyYXRlfWA7XHJcbiAgICBpbml0ZS52YWx1ZSA9IGAke21vdmVtZW50U2V0dGluZ3MuaW5pdGV9YDtcclxuICAgIHBhZGUudmFsdWUgPSBgJHttb3ZlbWVudFNldHRpbmdzLnBhZGV9YDtcclxuICAgIHJldHJhY3RlLnZhbHVlID0gYCR7bW92ZW1lbnRTZXR0aW5ncy5yZXRyYWN0ZX1gO1xyXG4gICAgemhvcC52YWx1ZSA9IGAke21vdmVtZW50U2V0dGluZ3MuemhvcH1gO1xyXG4gICAgXHJcbiAgICBnbG9iYWxUaGlzLmFjY29yZGlvblRvZ2dsZXIoJ21vdmVTZXR0aW5nc1BhbmVsJyk7XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuZGVmYXVsdE1vdmVTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIG1vdmVtZW50U2V0dGluZ3MgPSBuZXcgTW92ZW1lbnRTZXR0aW5ncygpO1xyXG5cclxuICAgIGlmKGRldmljZS5hcHBseU1vdmVTZXR0aW5ncykge1xyXG4gICAgICAgIGRldmljZS5hcHBseU1vdmVTZXR0aW5ncyhtb3ZlbWVudFNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBnbG9iYWxUaGlzLmFjY29yZGlvblRvZ2dsZXIoJ21vdmVTZXR0aW5nc1BhbmVsJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2FwcGx5TW92ZVNldHRpbmdzJywgbW92ZW1lbnRTZXR0aW5ncyk7XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuYXBwbHlNb3ZlU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICAvLyBnZXQgdmFsdWVzICEhIVxyXG4gICAgY29uc3QgZXJhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVTZXRFUmF0ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaW5pdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVTZXRJbml0RVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcGFkZSAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVTZXRQYWRFXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCByZXRyYWN0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVNldFJldHJhY3RFXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCB6aG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZlU2V0WkhvcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgXHJcbiAgICBtb3ZlbWVudFNldHRpbmdzLmVyYXRlICAgID0gcGFyc2VGbG9hdChlcmF0ZS52YWx1ZSk7XHJcbiAgICBtb3ZlbWVudFNldHRpbmdzLmluaXRlICAgID0gcGFyc2VGbG9hdChpbml0ZS52YWx1ZSk7XHJcbiAgICBtb3ZlbWVudFNldHRpbmdzLnBhZGUgICAgID0gcGFyc2VGbG9hdChwYWRlLnZhbHVlKTtcclxuICAgIG1vdmVtZW50U2V0dGluZ3MucmV0cmFjdGUgPSBwYXJzZUZsb2F0KHJldHJhY3RlLnZhbHVlKTtcclxuICAgIG1vdmVtZW50U2V0dGluZ3MuemhvcCAgICAgPSBwYXJzZUZsb2F0KHpob3AudmFsdWUpO1xyXG5cclxuICAgIGlmKGRldmljZS5hcHBseU1vdmVTZXR0aW5ncykge1xyXG4gICAgICAgIGRldmljZS5hcHBseU1vdmVTZXR0aW5ncyhtb3ZlbWVudFNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBnbG9iYWxUaGlzLmFjY29yZGlvblRvZ2dsZXIoJ21vdmVTZXR0aW5nc1BhbmVsJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2FwcGx5TW92ZVNldHRpbmdzJywgbW92ZW1lbnRTZXR0aW5ncyk7XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMucmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhbnZhcyAmJiBoZWFkZXIgJiYgZm9vdGVyICYmIGRlYnVnICYmIGNvb3Jkcykge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0IC0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgbW91c2UuZHJhdygpO1xyXG4gICAgICAgIGdyaWQuZHJhdyhjdHgsIGNhbnZhcyk7XHJcblxyXG4gICAgICAgIC8vIGhlaWdodCBvZiBkZWJ1ZyBpcyBpbm5lckhlaWdodCAtIG1hcmdpbiB0b3AvYm90dG9tIG1vcmUgb3IgbGVzcyAtIGZvb3Rlci5oZWlnaHRcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBtYXJnaW4nLCBkZWJ1Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICAgIGxldCBkbWF4aGVpZ2h0ID0gaW5uZXJIZWlnaHQgLSBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBjYW52YXMuaGVpZ2h0ICsgaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIDE2O1xyXG4gICAgICAgIC8vIGRlYnVnLnN0eWxlLmhlaWdodCA9IGAke2RoZWlnaHR9cHhgOyAvLyAxNiBpcyBtYXJnaW5Ub3BcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBpbm5lciBoZWlnaHQnLCBpbm5lckhlaWdodCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZTogZGVidWcgaGVpZ2h0JywgZGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIGhlaWdodCBvZiBhbGwgb3RoZXIgZWxlbWVudHMgaW4gZGVidWdcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBkZWJ1Zy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgZWxlbTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+Y2hpbGQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGByZXNpemU6ICAgJHtjaGlsZC5pZH0gJHtlbGVtLmNsaWVudEhlaWdodH0gJHtlbGVtLmNsYXNzTmFtZX1gKTtcclxuICAgICAgICAgICAgaWYgKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoJ3czLWhpZGUnKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBoZWlnaHQgKz0gZWxlbS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBkZWJ1ZyBjb250ZW50IGhlaWdodCcsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHNvIGZhciBzbyBnb29kXHJcblxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBpcyBzaG93biwgc2V0IGRlYnVnIHNpemUgdG8gbWF4XHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGlzIHNob3duLCBnaXZlIGl0IGFsbCB0aGUgcmVzdCBvZiB0aGUgc3BhY2VcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplIGNvb3JkcyAnLCBjb29yZHMuY2xhc3NOYW1lLmluZGV4T2YoJ3czLWhpZGUnKSk7XHJcbiAgICAgICAgaWYgKGNvb3Jkcy5jbGFzc05hbWUuaW5kZXhPZigndzMtaGlkZScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgY29vcmRzIGlzIE5PVCB2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGRlYnVnLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCArIDE2fXB4YDtcclxuICAgICAgICAgICAgY29vcmRzLnN0eWxlLmhlaWdodCA9IGAkezE2fXB4YDsgLy8gZWdhbCA/XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSBjb29yZHMgaXMgdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gY29vcmRzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDsgLy8gZG8gbm90IGNvdW50IGNvb3JkcyB0byBoaWdodFxyXG4gICAgICAgICAgICBkZWJ1Zy5zdHlsZS5oZWlnaHQgPSBgJHtkbWF4aGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29vcmRzLnN0eWxlLmhlaWdodCA9IGAke2RtYXhoZWlnaHQgLSBoZWlnaHQgLSAxNn1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKHZhbCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYHJlc2l6ZTogJHt2YWx9YCk7XHJcbiAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG59KVxyXG4iLCIoZnVuY3Rpb24gKCkge3ZhciBhPXt9O2Z1bmN0aW9uIGcodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGModCxlKXtmb3IodmFyIG89MDtvPGUubGVuZ3RoO28rKyl7dmFyIHM9ZVtvXTtzLmVudW1lcmFibGU9cy5lbnVtZXJhYmxlfHwhMSxzLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBzJiYocy53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscy5rZXkscyl9fWZ1bmN0aW9uIGgodCxlLG8pe3JldHVybiBlJiZjKHQucHJvdG90eXBlLGUpLG8mJmModCxvKSx0fXZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG8pe3ZhciBzPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpcImdyYXlcIixpPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpcIjE2cHggTW9ub3NwYWNlXCIscj1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCxuPWFyZ3VtZW50cy5sZW5ndGg+NSYmdm9pZCAwIT09YXJndW1lbnRzWzVdP2FyZ3VtZW50c1s1XTowO2codGhpcyx0KSx0aGlzLng9cix0aGlzLnk9bix0aGlzLmN0eD1lLHRoaXMuY2FudmFzPW8sdGhpcy5jb2xvcj1zLHRoaXMuZm9udD1pLHRoaXMuc2V0UG9zPXRoaXMuc2V0UG9zLmJpbmQodGhpcyl9cmV0dXJuIGgodCxbe2tleTpcInRyYWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdKXx8YXJndW1lbnRzWzBdLGU9dGhpcy5jYW52YXM7cmV0dXJuIHQ/ZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5zZXRQb3MpOmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuc2V0UG9zKSx0aGlzfX0se2tleTpcInNldFBvc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybiB0aGlzLng9TWF0aC5mbG9vcih0LmNsaWVudFgtZS5sZWZ0KSx0aGlzLnk9TWF0aC5mbG9vcih0LmNsaWVudFktZS50b3ApLHRoaXN9fSx7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy54LGU9dGhpcy55LG89dGhpcy5jYW52YXMscz10aGlzLmN0eCxpPXRoaXMuZm9udCxyPXRoaXMuY29sb3Isbj1cIlg6IFwiLmNvbmNhdCh0LFwiLCBZOiBcIikuY29uY2F0KGUpO3Muc2F2ZSgpLHMuZmlsbFN0eWxlPXIscy5mb250PWk7dmFyIGE9dDxvLndpZHRoLzI/MjA6LXMubWVhc3VyZVRleHQobikud2lkdGgtMjAsdj1lPG8uaGVpZ2h0LzI/MjU6LTE4O3JldHVybiBzLmZpbGxUZXh0KG4sdGhpcy54K2EsdGhpcy55K3YpLHMucmVzdG9yZSgpLHRoaXN9fV0pLHR9KCk7ZnVuY3Rpb24gZCh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gZih0LGUpe2Zvcih2YXIgaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgcz1lW2ldO3MuZW51bWVyYWJsZT1zLmVudW1lcmFibGV8fCExLHMuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHMmJihzLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLmtleSxzKX19ZnVuY3Rpb24gZSh0LGUsaSl7cmV0dXJuIGUmJmYodC5wcm90b3R5cGUsZSksaSYmZih0LGkpLHR9dmFyIGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsaSxzLHIsbCxuKXtkKHRoaXMsdCksdGhpcy5jb2xvcj1lLHRoaXMubGluZVdpZHRoPWksdGhpcy5zdGFydFg9cyx0aGlzLnN0YXJ0WT1yLHRoaXMuZW5kWD1sLHRoaXMuZW5kWT1ufXJldHVybiBlKHQsW3trZXk6XCJkcmF3XCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb2xvcixpPXRoaXMubGluZVdpZHRoLHM9dGhpcy5zdGFydFgscj10aGlzLnN0YXJ0WSxsPXRoaXMuZW5kWCxuPXRoaXMuZW5kWTt0LnNhdmUoKSx0LmJlZ2luUGF0aCgpLHQuc3Ryb2tlU3R5bGU9ZSx0LmxpbmVXaWR0aD1pLHQubW92ZVRvKHMsciksdC5saW5lVG8obCxuKSx0LnN0cm9rZSgpLHQucmVzdG9yZSgpfX1dKSx0fSgpLGo9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZ3JheVwiLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOi4zLHM9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjEwLHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOjUsbD1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06XCJEYXJrR3JheVwiLG49YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOi41LG89YXJndW1lbnRzLmxlbmd0aD42JiZ2b2lkIDAhPT1hcmd1bWVudHNbNl0/YXJndW1lbnRzWzZdOlwiMTZweCBNb25vc3BhY2VcIjtkKHRoaXMsdCksdGhpcy5jb2xvcj1lLHRoaXMubGluZVdpZHRoPWksdGhpcy5zdGVwPXMsdGhpcy5ib2xkTnRoPXIsdGhpcy5ib2xkQ29sb3I9bCx0aGlzLmJvbGRXaWR0aD1uLHRoaXMuZm9udD1vLHRoaXMubGluZXM9bnVsbH1yZXR1cm4gZSh0LFt7a2V5OlwiY3JlYXRlTGluZXNcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy5jb2xvcixpPXRoaXMubGluZVdpZHRoLHM9dGhpcy5zdGVwLHI9dGhpcy5ib2xkTnRoLGw9dGhpcy5ib2xkQ29sb3Isbj10aGlzLmJvbGRXaWR0aCxvPVtdLGE9cipzLGg9MDtoPHQud2lkdGg7aCs9cyl7dmFyIHY9aCVhPT0wO28ucHVzaCh2P25ldyBiKGwsbixoLDAsaCx0LmhlaWdodCk6bmV3IGIoZSxpLGgsMCxoLHQuaGVpZ2h0KSl9Zm9yKHZhciAkPTA7JDx0LmhlaWdodDskKz1zKXt2YXIgZD0kJWE9PTA7by5wdXNoKGQ/bmV3IGIobCxuLDAsJCx0LndpZHRoLCQpOm5ldyBiKGUsaSwwLCQsdC53aWR0aCwkKSl9dGhpcy5saW5lcz1vfX0se2tleTpcImRyYXdUZXh0XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLnN0ZXAscz10aGlzLmJvbGROdGgscj10aGlzLmJvbGRDb2xvcixsPXRoaXMuZm9udDt0LnNhdmUoKSx0LmZvbnQ9bCx0LmZpbGxTdHlsZT1yLHQuZmlsbFRleHQoXCIwXCIsMSwxNSk7Zm9yKHZhciBuPWkqcztuPGUud2lkdGg7bis9aSpzKXQuZmlsbFRleHQobixuLDE1KTtmb3IodmFyIG89aSpzO288ZS5oZWlnaHQ7bys9aSpzKXQuZmlsbFRleHQobywwLG8rMTUpO3QucmVzdG9yZSgpfX0se2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3RoaXMubGluZXN8fHRoaXMuY3JlYXRlTGluZXMoZSksdGhpcy5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmRyYXcodCl9KSx0aGlzLmRyYXdUZXh0KHQsZSl9fV0pLHR9KCk7YS5Nb3VzZT1pLGEuR3JpZD1qO2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWF9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gYX0pfX0pKCk7IiwiLy8gdG9kbzpcclxuLy8gICBtb3ZlIG91dCBzZXJpYWwgPyBPciBsb29rIGZvciBhIHNlcmlhbCByZWFkbGluZSBpbXBsZW1lbnRhdGlvbiA/Pz9cclxuLy8gYnVnczpcclxuLy8gICBkaXNjb25uZWN0IC0gRmFpbGVkIHRvIGV4ZWN1dGUgJ2Nsb3NlJyBvbiAnU2VyaWFsUG9ydCc6IENhbm5vdCBjYW5jZWwgYSBsb2NrZWQgc3RyZWFtXHJcblxyXG5pbXBvcnQgeyBQYWQgfSBmcm9tIFwiLi9wY2JcIjtcclxuXHJcbi8qKlxyXG4gKiBEZXZpY2U6IGFic3RyYWN0cyBhY2Nlc3MgdG8gbWFjaGluZS5cclxuICogSXQgXCJzaW1wbGlmaWVzXCIgc2VyaWFsIHBvcnQgYWNjZXNzLiBBdCB0aGUgbW9tZW50IGl0IG9ubHkgb2xsb3dzIFwid3JpdGUgYW5kIHJlc3BvbnNlXCIgc3R5bGUgY29tbXVuaWNhdGlvbi5cclxuICogVGhlIHNlcmlhbCBwb3J0IGlzIG9wZW5lZCwgdGhlbiBhIHJlYWRlciBsb29wIGlzIHN0YXJ0ZXQsIHdoaWNoIHB1c2hlcyBlYWNoIG5ldyBsaW5lIGludG8gdGhlIGlucHV0UXVldWUuXHJcbiAqIEZ1bmN0aW9uIHNlcmlhbFdyaXRlV2FpdCBpcyB1c2VkIHRvIGlzc3VlIGNvbW1hbmRzIGFuZCB3YWl0IGZvciB0aGUgZGV2aWNlIHRvIGFrbm93bGVkZ2UuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVtZW50U2V0dGluZ3Mge1xyXG4gICAgZXJhdGUgPSA1MDtcclxuICAgIGluaXRlID0gMTA7XHJcbiAgICBwYWRlICA9IDE7XHJcbiAgICByZXRyYWN0ZSA9IC0xMDtcclxuICAgIHpob3AgPSAzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGV2aWNlIHtcclxuICAgIGRldmljZUNoZWNrOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VDb25uZWN0OiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VEaXNjb25uZWN0OiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VJbnB1dEZvcm06IEhUTUxGb3JtRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VJbmZvOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VMb2c6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZVNlcmlhbDogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gICAgcG9ydHM6IGFueTtcclxuICAgIHBvcnQ6IGFueTtcclxuICAgIHRleHREZWNvZGVyOiBUZXh0RGVjb2RlclN0cmVhbTtcclxuICAgIHJlYWRlcjogUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyPHN0cmluZz47XHJcbiAgICBpbnB1dExhc3Q6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIHByb3RlY3RlZCBpbnB1dFF1ZXVlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlQ2hlY2sgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlQ2hlY2tcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VDb25uZWN0ID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUNvbm5lY3RcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VEaXNjb25uZWN0ID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZURpc2Nvbm5lY3RcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSW5wdXRGb3JtID0gPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VJbnB1dEZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJbmZvID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUluZm9cIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VMb2cgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlTG9nXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZVNlcmlhbFwiKTtcclxuICAgICAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXJTdHJlYW0oKTtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VDaGVjayAmJiB0aGlzLmRldmljZUNvbm5lY3QgJiYgdGhpcy5kZXZpY2VEaXNjb25uZWN0ICYmIHRoaXMuZGV2aWNlSW5wdXQgJiYgdGhpcy5kZXZpY2VJbnB1dEZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VDaGVjay5vbmNsaWNrID0gdGhpcy5zZXJpYWxDaGVjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUNvbm5lY3Qub25jbGljayA9IHRoaXMuc2VyaWFsQ29ubmVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZURpc2Nvbm5lY3Qub25jbGljayA9IHRoaXMuc2VyaWFsRGlzY29ubmVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRldmljZURvc29tZS5vbmNsaWNrID0gdGhpcy5zZXJpYWxEb3NvbWUuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kZXZpY2VJbnB1dC5vbmNoYW5nZSA9IHRoaXMuc2VyaWFsSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VJbnB1dEZvcm0ub25zdWJtaXQgPSB0aGlzLnNlcmlhbElucHV0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlcmlhbENoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGx5TW92ZVNldHRpbmdzPyhzZXR0aW5nczogTW92ZW1lbnRTZXR0aW5ncyk7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgU2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIFplcm8uIEFsbCBmdXJ0aGVyIGNvbW1hbmRzIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcyBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8/KHBvaW50OltudW1iZXIsbnVtYmVyXSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgTW92ZSB0byBwb3NpdGlvbi4gSWYgb25lIGNvb3JkaW5hdGUgaXMgdW5kZWZpbmVkLCBpdCdzIGlnbm9yZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmVUbz8oeDpudW1iZXJ8dW5kZWZpbmVkLCB5Om51bWJlcnx1bmRlZmluZWQsIHo6bnVtYmVyfHVuZGVmaW5lZCwgZTogbnVtYmVyIHwgdW5kZWZpbmVkKTogdm9pZFxyXG4gICAgcHVibGljIG1vdmVUb0FsbD8ocGxpc3Q6IFBhZFtdLCBzdGFydDpbbnVtYmVyLG51bWJlcl0pO1xyXG5cclxuICAgIHB1YmxpYyBibG9iPygpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlIHRoaXMgaW4gZGVyaXZlZCBjbGFzcyB0byBnZXQgbm90aWZpY2F0aW9uIHdoZW4gc29tZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU2VyaWFsQ29ubmVjdGVkPygpOnZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSB0aGlzIGluIGRlcml2ZWQgY2xhc3MgdG8gZ2V0IG5vdGlmaWNhdGlvbiB3aGVuIHNvbWUgZGV2aWNlIHdhcyBkaXNjb25uZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbERpc2Nvbm5lY3RlZD8oKTp2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYSBkaWFsb2cgd2hlcmUgdXNlciBjYW4gc2VsZWN0IGEgZGV2aWNlIHRvIGNvbm5lY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxDb25uZWN0KCkge1xyXG4gICAgICAgIC8vIG9wZW5zIGRpYWxvZyB3aGVyZSB1c2VyIGNhbiBzZWxlY3QgYSBkZXZpY2VcclxuICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5yZXF1ZXN0UG9ydCgpLnRoZW4oKHBvcnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENvbm5lY3QnLCBwb3J0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxQb3J0T3Blbihwb3J0KTtcclxuICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybignc2VyaWFsQ29ubmVjdCcscmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihyZWFzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxDb25uZWN0RGV2aWNlKHZpZDogbnVtYmVyLCBwaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHBvcnQgb2YgdGhpcy5wb3J0cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VyaWFsQ29ubmVjdERldmljZTogc2VyaWFsIGF2YWlsYWJsZSwgcG9ydHM6IGAsIHBvcnQuZ2V0SW5mbygpKTtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2JQcm9kdWN0SWQsIHVzYlZlbmRvcklkIH0gPSBwb3J0LmdldEluZm8oKTtcclxuICAgICAgICAgICAgaWYgKHVzYlByb2R1Y3RJZCA9PSBwaWQgJiYgdXNiVmVuZG9ySWQgPT0gdmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFBvcnRPcGVuKHBvcnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IGZyb20gZGV2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxEaXNjb25uZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWFkZXIucmVsZWFzZUxvY2soKTsgLy8gZG9lcydudCBkbyBpdCA6KFxyXG4gICAgICAgICAgICB0aGlzLnBvcnQuY2xvc2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9ydCBjbG9zZWQnKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgV2FpdCB1bnRpbCBzb21lIHJlc3BvbnNlIG9yIHRpbWVvdXQsIHJldHVybnMgcmVzcG9uc2Ugb3IgJ3RpbWVvdXQnIG9yIG1pZ2h0IGZhaWwgd2l0aCAnYnVzeScgb3IgJ2Rpc2Nvbm5lY3RlZCdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbFdyaXRlV2FpdCh2YWx1ZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAxMDAwMCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgLy8gY2xlYW4gc2VyaWFsIGlucHV0XHJcbiAgICAgICAgdGhpcy5pbnB1dFF1ZXVlID0gW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgc29tZSByZXNwb25zZSBvciB0aW1lb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVzdGVwID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heHRpbWUgPSB0aW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICghYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IGF3YWl0IHRoaXMuc2VyaWFsQXZhaWwodGltZXN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXh0aW1lID0gbWF4dGltZSAtIHRpbWVzdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4dGltZSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgYXZhaWw6JHthdmFpbGFibGV9IHRpbWU6JHt0aW1lb3V0IC0gbWF4dGltZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IGNoZWNrOiAke3RoaXMuaW5wdXRRdWV1ZS5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucCA9IDxzdHJpbmc+dGhpcy5pbnB1dFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IHJlc29sdmU6ICR7aW5wfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlucCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFdyaXRlV2FpdCByZWplY3Q6IGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ3RpbWVvdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2J1c3knKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybih0aGlzLnBvcnQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gd3JpdGUgYW55dGhpbmcgdG8gdGhlIGRldmljZS5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsSW5wdXRGb3JtKGV2ZW50OiBJbnB1dEV2ZW50KSB7IC8vIGZpcmVzIHdoZW4gcmV0dXJuIGlzIGVudGVyZWRcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VJbnB1dCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBmb3JtIHdpbGwgZG8gc3RyYW5nZSB0aGluZ3MgIVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsSW5wdXRDaGFuZ2UoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byB3cml0ZSBhbnl0aGluZyB0byB0aGUgZGV2aWNlLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxJbnB1dENoYW5nZShldmVudDogSW5wdXRFdmVudCkgeyAvLyBmaXJlcyB3aGVuIHJldHVybiBpcyBlbnRlcmVkXHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9ydCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLmRldmljZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGUodGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcmlhbElucHV0Q2hhbmdlIC0gbm8gcG9ydCBvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKiogcHJpdmF0ZSBzdHVmZiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxDaGVjaygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFwic2VyaWFsXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9ydHMoKTtcclxuICAgICAgICAgICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJpYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNvbm5lY3RcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBdXRvbWF0aWNhbGx5IG9wZW4gZXZlbnQudGFyZ2V0IG9yIHdhcm4gdXNlciBhIHBvcnQgaXMgYXZhaWxhYmxlLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENoZWNrOmNvbm5lY3QnLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcnRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5hZGRFdmVudExpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB8ZXZlbnQudGFyZ2V0fCBmcm9tIHRoZSBVSS5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZXJpYWwgcG9ydCB3YXMgb3BlbmVkLCBhIHN0cmVhbSBlcnJvciB3b3VsZCBiZSBvYnNlcnZlZCBhcyB3ZWxsLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENoZWNrOmRpc2Nvbm5lY3QnLCBldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTm8gc2VyaWFsIEFQSSBhdmFpbGFibGUsIHRyeSBhbm90aGVyIGJyb3dzZXInKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBzZXJpYWwgcG9ydC4gQ29ubmVjdGlvbiB0byBkZXZpY2UgaW1wb3NzaWJsZSEgVXNlIENocm9tZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQb3J0cygpIHtcclxuICAgICAgICAvLyBsaXN0cyBhbGwgcmVjZW50bHkgdXNlZCBwb3J0cywgY291bGQganVzdCBvcGVuIG9uZSB0aGVuLlxyXG4gICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLmdldFBvcnRzKCkudGhlbigocG9ydHMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZVBvcnRzOicsIHBvcnRzKTtcclxuICAgICAgICAgICAgdGhpcy5wb3J0cyA9IHBvcnRzO1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9ICcnOy8vZGV2aWNlczo8YnI+JztcclxuICAgICAgICAgICAgZm9yIChsZXQgcG9ydCBvZiBwb3J0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlcmlhbCBhdmFpbGFibGUsIHBvcnRzOiBgLCBwb3J0LmdldEluZm8oKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzYlByb2R1Y3RJZCwgdXNiVmVuZG9ySWQgfSA9IHBvcnQuZ2V0SW5mbygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVwZGF0ZVBvcnRzIHBvcnQgcGlkOiR7dXNiUHJvZHVjdElkfSB2aWQ6JHt1c2JWZW5kb3JJZH1gKTtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLW1pY3JvY2hpcFwiPjwvaT4gcGlkOiR7dXNiUHJvZHVjdElkfSB2aWQ6JHt1c2JWZW5kb3JJZH0gPGJ1dHRvbiBjbGFzcz1cInczLWJ0biB3My1yb3VuZCB3My1saWdodC1ncmV5IHczLXRpbnlcIiBpZD1cIiR7dXNiVmVuZG9ySWR9LSR7dXNiUHJvZHVjdElkfVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1Z1wiPjwvaT4gY29ubmVjdCA8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRucyA9IHRoaXMuZGV2aWNlSW5mby5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJ0biBvZiBidG5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7IGNvbnN0IGlkcyA9IGJ0bi5pZC5zcGxpdCgnLScpOyBjb25zb2xlLmxvZyhpZHMpOyB0aGlzLnNlcmlhbENvbm5lY3REZXZpY2UocGFyc2VJbnQoaWRzWzBdKSwgcGFyc2VJbnQoaWRzWzFdKSkgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VDb25uZWN0ICYmICh0aGlzLnBvcnRzID09IG51bGwgfHwgdGhpcy5wb3J0cy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVQb3J0czogb3BlbiBkZXYgYnV0dG9ucyEhIScsIHRoaXMuZGV2aWNlQ29ubmVjdC5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VDb25uZWN0LmNsYXNzTmFtZSA9IHRoaXMuZGV2aWNlQ29ubmVjdC5jbGFzc05hbWUucmVwbGFjZSgndzMtaGlkZScsICd3My1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgZ2l2dmVuIHBvcnQuIENhbiBiZSB1c2VkIGFmdGVyIHF1ZXJpaW5nIHBvcnRzIHdpdGggdXBkYXRlUG9ydHMuXHJcbiAgICAgKiBAcGFyYW0gcG9ydFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlcmlhbFBvcnRPcGVuKHBvcnQ6IGFueSkge1xyXG4gICAgICAgIHBvcnQub25jb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ09OTkVDVEVEYCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb3J0Lm9uZGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERJU0NPTk5FQ1RFRGApO1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uU2VyaWFsRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VyaWFsRGlzY29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHBvcnQub3Blbih7IGJhdWRSYXRlOiAyNTAwMDAgfSkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VMb2cuaW5uZXJIVE1MID0gXCJjb25uZWN0ZWQ8YnI+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvcnQgb3BlbmVkID8gJywgdGhpcy5wb3J0KTtcclxuICAgICAgICAgICAgaWYodGhpcy5vblNlcmlhbENvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VyaWFsQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxSZWFkLmJpbmQodGhpcyksIDApOyAvLyBzdGFydCByZWFkIGxvb3BcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2VyaWFsRXJyb3IoZXJyb3I6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybignc2VyaWFsRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlTG9nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlTG9nLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInczLXJlZFwiPiR7ZXJyb3J9PC9zcGFuPjxicj5gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwsIHN0YXJ0cyB0aGUgcmVhZCBsaW5lIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc2VyaWFsUmVhZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRhYmxlU3RyZWFtQ2xvc2VkID0gdGhpcy5wb3J0LnJlYWRhYmxlLnBpcGVUbyh0aGlzLnRleHREZWNvZGVyLndyaXRhYmxlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWFkZXIgPSB0aGlzLnRleHREZWNvZGVyLnJlYWRhYmxlLmdldFJlYWRlcigpO1xyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gZGF0YSBjb21pbmcgZnJvbSB0aGUgc2VyaWFsIGRldmljZS5cclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNlcmlhbFJlYWRvbi5iaW5kKHRoaXMpLCAxKTsgLy8gd2lsbCBsb29wIHRoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwsIGhhbmRsZXMgdGhlIHJlYWQgbGluZSBsb29wLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbFJlYWRvbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCB0aGlzLnJlYWRlci5yZWFkKCk7XHJcbiAgICAgICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgc2VyaWFsIHBvcnQgdG8gYmUgY2xvc2VkIGxhdGVyLiAvLyBEb2VzIG5vdCBoYXBwZW4gIVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkZXIucmVsZWFzZUxvY2soKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJpYWxSZWFkIC0gZG9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHB1c2hlZFN0dWZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpcyBhIHN0cmluZy5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdcXG4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQXNzZXJ0aW9uIGZhaWxlZCAnLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07IC8vIHRoZXJlIGlzIGEgXFxuIGluIGl0ICFcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgKz0gdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0UXVldWUucHVzaCh0aGlzLmlucHV0TGFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsTG9nKHRoaXMuaW5wdXRMYXN0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaGVkU3R1ZmYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFJlYWRvbiBsYXN0OiBcIiR7dGhpcy5pbnB1dExhc3R9XCJgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gXFxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFJlYWRvbiBsYXN0OiBcIiR7dGhpcy5pbnB1dExhc3R9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHVzaGVkU3R1ZmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsQ2FsbGJhY2suYmluZCh0aGlzKSwgNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsUmVhZG9uLmJpbmQodGhpcyksIDEpOyAvLyB3aWxsIGxvb3AgdGhlcmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsRXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VyaWFsQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXZpY2VMb2cnKTtcclxuICAgICAgICAvLyBpZiAoZWxlbSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgbGF0ZXN0ID0gdGhpcy5pbnB1dFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgIC8vICAgICB3aGlsZSAobGF0ZXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmlubmVySFRNTCArPSBgJHtsYXRlc3R9PGJyPmA7XHJcbiAgICAgICAgLy8gICAgICAgICBsYXRlc3QgPSB0aGlzLmlucHV0UXVldWUucG9wKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxXcml0ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxMb2codmFsdWUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gd3JpdGUuLi5cclxuICAgICAgICBsZXQgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgIGNvbnN0IHdyaXRlciA9IHRoaXMucG9ydC53cml0YWJsZS5nZXRXcml0ZXIoKTtcclxuICAgICAgICBhd2FpdCB3cml0ZXIud3JpdGUodXRmOEVuY29kZS5lbmNvZGUoYCR7dmFsdWV9XFxuYCkpO1xyXG4gICAgICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgdW50aWwgZGF0YSB3YXMgcmVhZCBvciB0aW1lb3V0XHJcbiAgICAgKiBAcGFyYW0gdGltZW91dFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXJpYWxBdmFpbCh0aW1lb3V0OiBudW1iZXIgPSAxMCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJpYWxMb2codGV4dDogc3RyaW5nLCBpbmNvbW1pbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VTZXJpYWwpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZGV2aWNlU2VyaWFsLmNoaWxkRWxlbWVudENvdW50ID4gMjApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaCA9IHRoaXMuZGV2aWNlU2VyaWFsLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZVNlcmlhbC5yZW1vdmVDaGlsZChjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGluY29tbWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwuaW5uZXJIVE1MICs9IGA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYXJyb3ctcmlnaHQtdG8tYnJhY2tldFwiPjwvaT4gJHt0ZXh0fTwvZGl2PmBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsLmlubmVySFRNTCArPSBgPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFycm93LXVwLXJpZ2h0LWZyb20tc3F1YXJlXCI+PC9pPiAke3RleHR9PC9kaXY+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogTWFybGluOiBEZXZpY2Ugc3BlY2lmaWMgaW1wbGVtZW50YXRpb24uXHJcbiovXHJcblxyXG5pbXBvcnQgeyBrZFRyZWUgfSBmcm9tICdrZC10cmVlLWphdmFzY3JpcHQnOyAvLyBub2RlIG1vZHVsZVxyXG4vLyBpbXBvcnQgeyBrZFRyZWUgfSBmcm9tICcuL2tkVHJlZSc7XHJcbmltcG9ydCB7IERldmljZSwgTW92ZW1lbnRTZXR0aW5ncyB9IGZyb20gXCIuL2RldmljZVwiO1xyXG5pbXBvcnQgeyBQQ0IsIFBhZCB9IGZyb20gXCIuL3BjYlwiO1xyXG5cclxuZW51bSBTdGF0dXMge1xyXG4gICAgVW5kZWZpbmVkID0gMSxcclxuICAgIFJlYWR5LFxyXG4gICAgQnVzeSxcclxuICAgIE5DXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJsaW4gZXh0ZW5kcyBEZXZpY2Uge1xyXG4gICAgbWFybGluRGl2OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBtYXJsaW5EaXZTdGF0dXM6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdlBvc2l0aW9uOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBtYXJsaW5EaXZDb21tYW5kczogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICAgIHplcm86IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XHJcbiAgICBwYWRYWTogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwYWRaOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIG1vdmVtZW50U2V0dGluZ3M6IE1vdmVtZW50U2V0dGluZ3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1hcmxpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFybGluXCIpO1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnRTZXR0aW5ncyA9IG5ldyBNb3ZlbWVudFNldHRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SHRtbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBseU1vdmVTZXR0aW5ncyhtb3ZlbWVudFNldHRpbmdzOiBNb3ZlbWVudFNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudFNldHRpbmdzID0gbW92ZW1lbnRTZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgU2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIFplcm8uIEFsbCBmdXJ0aGVyIGNvbW1hbmRzIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcyBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8ocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnplcm8gPSBwb2ludDtcclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHOTIgWDAgWTAgWjAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5Qb3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBNb3ZlIHRvIHBvc2l0aW9uLiBJZiBvbmUgY29vcmRpbmF0ZSBpcyB1bmRlZmluZWQsIGl0J3MgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciB8IHVuZGVmaW5lZCwgeTogbnVtYmVyIHwgdW5kZWZpbmVkLCB6OiBudW1iZXIgfCB1bmRlZmluZWQsIGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICBpZiAoeCAhPSB1bmRlZmluZWQpIGNtZCArPSBgWCR7eCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICBpZiAoeSAhPSB1bmRlZmluZWQpIGNtZCArPSBgWSR7eSAtIHRoaXMuemVyb1sxXX0gYDtcclxuICAgICAgICBpZiAoeiAhPSB1bmRlZmluZWQpIGNtZCArPSBgWiR7en0gYDtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtb3ZlVG9BbGwocGxpc3Q6IFBhZFtdLCBzdGFydDogW251bWJlciwgbnVtYmVyXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgcGxpc3QubGVuZ3RoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGlzdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyZWUgPSBuZXcga2RUcmVlKHBsaXN0LCBQQ0IuZGlzdGFuY2UsIFtcInBvc1hcIiwgXCJwb3NZXCJdKTtcclxuICAgICAgICAvLyBjb25zdCB0cmVlID0gbmV3IGtkVHJlZShQQ0IsIHBsaXN0LCBQQ0IuZGlzdGFuY2UsIFtcInBvc1hcIiwgXCJwb3NZXCJdKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0cGFkID0gbmV3IFBhZCgnJywgc3RhcnRbMF0sIHN0YXJ0WzFdKTtcclxuICAgICAgICBsZXQgc2VhcmNoID0gdHJlZS5uZWFyZXN0KHN0YXJ0cGFkLCAxKTtcclxuICAgICAgICBsZXQgZm91bmRwYWQgPSBzZWFyY2hbMF1bMF07XHJcblxyXG4gICAgICAgIGxldCBmb3VuZHBhZHM6IFBhZFtdID0gW107IC8vIGp1c3QgZm9yIGxvZ1xyXG5cclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGluaXRpYWwgZXh0cnVkZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV4dHJ1ZGUodGhpcy5tb3ZlbWVudFNldHRpbmdzLmluaXRlKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCB0cmVlc2hvdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RyZWUgZHVtcDonKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRyZWUudG9KU09OKCksIHVuZGVmaW5lZCwgNCkpOyAvLyBkdW1wIHRyZWVcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9IHRyZWUubmVhcmVzdChmb3VuZHBhZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ01hcmxpbjptb3ZlVG9BbGwnLCBzZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3VuZHBhZCA9IHNlYXJjaFswXVswXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZHBhZHMucHVzaChmb3VuZHBhZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubW92ZUFuZEJsb2IoZm91bmRwYWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY21kID0gJ0cwICc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY21kICs9IGBYJHtmb3VuZHBhZC5wb3NYIC0gdGhpcy56ZXJvWzBdfSBgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNtZCArPSBgWSR7Zm91bmRwYWQucG9zWSAtIHRoaXMuemVyb1sxXX0gYDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGNhdGNoICh3aGF0KSB7IH0gLy8gaWdub3JlIGRpc2Nvbm5lY3RlZCBmb3IgZGVidWdnaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vLyByZW1vdmUgc2VlbXMgdG8gYmUgYnVnaSA6KCgoXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9rID0gdHJlZS5yZW1vdmUoZm91bmRwYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKG9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGBNYXJsaW46bW92ZVRvQWxsIHJlbW92ZWQgcGFkYCwgZm91bmRwYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUud2FybihgTWFybGluOm1vdmVUb0FsbCBOT1QgcmVtb3ZlZCBwYWQsIHRoYXMgYmFkIDooYCwgZm91bmRwYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0cmVlc2hvdCA9IEpTT04uc3RyaW5naWZ5KHRyZWUudG9KU09OKCksIHVuZGVmaW5lZCwgNCk7IC8vIGtlZXAgdHJlZSBmb3IgZGVidWcgIVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRyZWVzaG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmcGFkIG9mIGZvdW5kcGFkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNYXJsaW46bW92ZVRvQWxsIHBhZDoke2ZwYWQucG9zWH07XFx0JHtmcGFkLnBvc1l9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoICh3aGF0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBzZXJpYWxXcml0ZVdhaXQgZmFpbHMsIGRvIHNvbWV0aGluZyA/XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNYXJsaW46bW92ZVRvQWxsOiBmYWlsZWRcIiwgd2hhdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcmV0cmFjdFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV4dHJ1ZGUodGhpcy5tb3ZlbWVudFNldHRpbmdzLnJldHJhY3RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXh0cnVkZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KGBHMCBFJHt2YWx1ZX1gKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtb3ZlQW5kQmxvYihmb3VuZHBhZDogUGFkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY21kID0gJ0cwICc7XHJcbiAgICAgICAgICAgIGNtZCArPSBgWCR7Zm91bmRwYWQucG9zWCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICAgICAgY21kICs9IGBZJHtmb3VuZHBhZC5wb3NZIC0gdGhpcy56ZXJvWzFdfSBgO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJpYWxXcml0ZVdhaXQoY21kKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTgzJykudGhlbigoKSA9PiB7IC8vIGV4dHJ1ZGVyIHJlbGF0aXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoYEcwIFoke3RoaXMubW92ZW1lbnRTZXR0aW5ncy56aG9wfWApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoYEcwIEUke3RoaXMubW92ZW1lbnRTZXR0aW5ncy5wYWRlfWApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMCcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdChgRzAgWiR7dGhpcy5tb3ZlbWVudFNldHRpbmdzLnpob3B9YCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdqbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ01hcmxpbjptb3ZlVG9BbGwnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHdoYXQpIHsgfSAvLyBpZ25vcmUgZGlzY29ubmVjdGVkIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBibG9iKCkge1xyXG4gICAgICAgIHRoaXMub25CdG5BYnMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ004MycpLnRoZW4oKCkgPT4geyAvLyBleHRydWRlciByZWxhdGl2XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRTEwJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMCcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFozJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxDb25uZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmxpbjogb25TZXJpYWxDb25uZWN0ZWQnKTtcclxuICAgICAgICAvLyByZWFkIG92ZXIgZmlyc3QgbWVzc2FnZXNcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgd2hpbGUodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlBvc2l0aW9uKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbi5pbm5lckhUTUwgKz0gYCR7dGhpcy5pbnB1dFF1ZXVlLnBvcCgpfWA7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuUmVhZHkpXHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2U3RhdHVzICYmIHRoaXMubWFybGluRGl2Q29tbWFuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUgPSB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzLmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIC8vIHdhaXQgM3NlYywgcnVuIGNvbW1hbmRzICdjb2xkIGV4dHJ1ZGUnLCdyZWxhdGl2ZSBwb3NpdGlvbmluZycsJ3JlcG9ydCBwb3NpdGlvbidcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ0bkNvbGQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5SZWwoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46IG9uU2VyaWFsQ29ubmVjdGVkIGluaXQgc2VxdWVuY2UgZmluaXNoZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbERpc2Nvbm5lY3RlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOiBvblNlcmlhbERpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlN0YXR1cyAmJiB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5OQyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2Q29tbWFuZHMuY2xhc3NOYW1lID0gdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5oZXJpdGVkIGZyb20gRGV2aWNlLCBhZGRzIFN0YXR1cyBtZXNzYWdlIHVwZGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB0aW1lb3V0XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsV3JpdGVXYWl0KHZhbHVlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5CdXN5KTtcclxuICAgICAgICAgICAgc3VwZXIuc2VyaWFsV3JpdGVXYWl0KHZhbHVlLCB0aW1lb3V0KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdGF0dXMoc3RhdHVzOiBTdGF0dXMpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGB1bmtub3duIHN0YXR1cyAke3N0YXR1c31gO1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlJlYWR5OlxyXG4gICAgICAgICAgICAgICAgaHRtbCA9ICdTdGF0dXM6IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1Z1wiPjwvaT4gcmVhZHknOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuQnVzeTpcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnU3RhdHVzOiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdWctY2lyY2xlLWJvbHRcIj48L2k+IGJ1c3knOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuTkM6XHJcbiAgICAgICAgICAgICAgICBodG1sID0gJ1N0YXR1czogPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVnLWNpcmNsZS14bWFya1wiPjwvaT4gbm90IGNvbm5lY3RlZCc7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZTdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZTdGF0dXMuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5Ib21lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbilcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLy8vIHRpbWVvdXQgdG9vIHNtYWxsIGZvciB0aGlzIGNvbW1hbmQsIHNlZSB3aGF0IGhhcHBlbnNcclxuICAgICAgICAvLyB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JywgMTAwKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAvLyAgICAgLy8gdHJ5IGFnYWluIChkZWZhdWx0IHRpbWVvdXQgaXMgMTBzZWMpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMjgnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkJ0blBvcygpO1xyXG4gICAgICAgIC8vICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7IGNvbnNvbGUud2FybihyZWFzb24pIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuUG9zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTExNCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWVyIGtvbW10IGVpbmUgemVpbGUgbWl0IHphaGxlbiB1bmQgZWluZSBtaXQgb2tcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkJ0blBvcycsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbi5pbm5lclRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bkFicygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0c5MCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkJ0blJlbCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0c5MScpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkNvbGQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdNMzAyIFMwJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blhQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBYMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWE0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFgtMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWVAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFkxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5ZTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWS0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5aUCgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0blpNKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaLTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bkVQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBFMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuRU0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIEUtMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjYWxjWFkoZXZlbnQ6IFBvaW50ZXJFdmVudCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvciA9IChldmVudC5nZXRNb2RpZmllclN0YXRlKFwiU2hpZnRcIikpID8gMC4wNSA6IDAuNTtcclxuICAgICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbW91c2UgY2xpY2sgcG9zaXRpb25cclxuICAgICAgICBjb25zdCBtb3VzZVggPSAoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIHJlY3Qud2lkdGggLyAyKSAqIGZhY3RvcjtcclxuICAgICAgICBjb25zdCBtb3VzZVkgPSAoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gcmVjdC5oZWlnaHQgLyAyKSAqIC0xICogZmFjdG9yO1xyXG5cclxuICAgICAgICByZXR1cm4gW21vdXNlWCwgbW91c2VZXTtcclxuICAgIH1cclxuICAgIG9uUGFkWFlob3ZlcihldmVudDogUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvblBhZFhZaG92ZXIgXCIsIG1vdXNlWCwgbW91c2VZKTtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmNhbGNYWShldmVudCwgdGhpcy5wYWRYWSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbi5pbm5lckhUTUwgPSBgeDoke3Bvc1swXS50b0ZpeGVkKDIpfSB5OiR7cG9zWzFdLnRvRml4ZWQoMil9IHo6LS0tYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblBhZFhZY2xpY2soZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuY2FsY1hZKGV2ZW50LCB0aGlzLnBhZFhZKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uUGFkWFljbGljayBcIiwgcG9zWzBdLCBwb3NbMV0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uQnRuUmVsKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRvKHBvc1swXSwgcG9zWzFdLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblBhZFpob3ZlcihldmVudDogUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvblBhZFhZaG92ZXIgXCIsIG1vdXNlWCwgbW91c2VZKTtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmNhbGNYWShldmVudCwgdGhpcy5wYWRaKTtcclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZQb3NpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uLmlubmVySFRNTCA9IGB4Oi0tLSB5Oi0tLSB6OiR7cG9zWzFdLnRvRml4ZWQoMil9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblBhZFpjbGljayhldmVudDogUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvblBhZFo6IFwiLCBldmVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuY2FsY1hZKGV2ZW50LCB0aGlzLnBhZFopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25QYWRaY2xpY2sgXCIsIHBvc1swXSwgcG9zWzFdKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkJ0blJlbCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVUbygwLCAwLCBwb3NbMV0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgc29tZSBidXR0b25zIGZvciBNYXJsaW4gc3BlY2lmaWMgYWN0aW9ucy4uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRIdG1sKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdikge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3My1ib3JkZXIgdzMtYm9yZGVyLWRhcmstZ3JleVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcmxpblN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcmxpblBvc2l0aW9uXCIgY2xhc3M9XCJ3My10aW55XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm1hcmxpbk1vdmVcIiBjbGFzcz1cInczLXNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwibWFybGluTW92ZVBhZFhZXCIgd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjE1MHB4XCI+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBpZD1cIm1hcmxpbk1vdmVQYWRaXCIgd2lkdGg9XCIxMjBweFwiIGhlaWdodD1cIjE1MHB4XCI+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFybGluQ29tbWFuZHNcIiBjbGFzcz1cInczLXRpbnkgdzMtaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5Ib21lXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmhvbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluUG9zXCIgIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5wb3M/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblJlbFwiICBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+cmVsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkFic1wiICBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+YWJzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkNvbGRcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+Y29sZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblhQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPngrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblhNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPngtPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbllQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnkrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbllNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnktPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblpQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnorPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblpNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnotPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5FUFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5lKzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5FTVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5lLTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluU3RhdHVzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Qb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZDb21tYW5kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluQ29tbWFuZHNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5OQyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkhvbWVcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5Ib21lKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5Ib21lLm9uY2xpY2sgPSB0aGlzLm9uQnRuSG9tZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluUG9zXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5Qb3Mub25jbGljayA9IHRoaXMub25CdG5Qb3MuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5SZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblJlbFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blJlbCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuUmVsLm9uY2xpY2sgPSB0aGlzLm9uQnRuUmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuQWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5BYnNcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5BYnMpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkFicy5vbmNsaWNrID0gdGhpcy5vbkJ0bkFicy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkNvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkNvbGRcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5Db2xkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5Db2xkLm9uY2xpY2sgPSB0aGlzLm9uQnRuQ29sZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zdCBtYXJsaW5CdG5YUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWFBcIik7XHJcbiAgICAgICAgICAgIC8vIGlmIChtYXJsaW5CdG5YUCkge1xyXG4gICAgICAgICAgICAvLyAgICAgbWFybGluQnRuWFAub25jbGljayA9IHRoaXMub25CdG5YUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IG1hcmxpbkJ0blhNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5YTVwiKTtcclxuICAgICAgICAgICAgLy8gaWYgKG1hcmxpbkJ0blhNKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJsaW5CdG5YTS5vbmNsaWNrID0gdGhpcy5vbkJ0blhNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gY29uc3QgbWFybGluQnRuWVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbllQXCIpO1xyXG4gICAgICAgICAgICAvLyBpZiAobWFybGluQnRuWVApIHtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmxpbkJ0bllQLm9uY2xpY2sgPSB0aGlzLm9uQnRuWVAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBtYXJsaW5CdG5ZTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWU1cIik7XHJcbiAgICAgICAgICAgIC8vIGlmIChtYXJsaW5CdG5ZTSkge1xyXG4gICAgICAgICAgICAvLyAgICAgbWFybGluQnRuWU0ub25jbGljayA9IHRoaXMub25CdG5ZTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IG1hcmxpbkJ0blpQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5aUFwiKTtcclxuICAgICAgICAgICAgLy8gaWYgKG1hcmxpbkJ0blpQKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJsaW5CdG5aUC5vbmNsaWNrID0gdGhpcy5vbkJ0blpQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gY29uc3QgbWFybGluQnRuWk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblpNXCIpO1xyXG4gICAgICAgICAgICAvLyBpZiAobWFybGluQnRuWk0pIHtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmxpbkJ0blpNLm9uY2xpY2sgPSB0aGlzLm9uQnRuWk0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5FUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluRVBcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5FUCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuRVAub25jbGljayA9IHRoaXMub25CdG5FUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkVNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5FTVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkVNKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5FTS5vbmNsaWNrID0gdGhpcy5vbkJ0bkVNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVQYWRYWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluTW92ZVBhZFhZXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAobW92ZVBhZFhZKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZFhZID0gbW92ZVBhZFhZO1xyXG4gICAgICAgICAgICAgICAgbW92ZVBhZFhZLm9uY2xpY2sgPSB0aGlzLm9uUGFkWFljbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZVBhZFhZLm9ubW91c2Vtb3ZlID0gdGhpcy5vblBhZFhZaG92ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG1vdmVQYWRYWS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBtb3ZlUGFkWFkuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhtb3ZlUGFkWFkud2lkdGggLSAxLCBtb3ZlUGFkWFkuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhtb3ZlUGFkWFkud2lkdGggLyAyLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKG1vdmVQYWRYWS53aWR0aCAvIDIsIG1vdmVQYWRYWS5oZWlnaHQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwieHlcIiwgMCwgMTApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJubyBjb250ZXh0IG9uIG1vdmVQYWRYWVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5vIG1vdmVQYWRYWVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlUGFkWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluTW92ZVBhZFpcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChtb3ZlUGFkWikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWRaID0gbW92ZVBhZFo7XHJcbiAgICAgICAgICAgICAgICBtb3ZlUGFkWi5vbmNsaWNrID0gdGhpcy5vblBhZFpjbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZVBhZFoub25tb3VzZW1vdmUgPSB0aGlzLm9uUGFkWmhvdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBtb3ZlUGFkWi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBtb3ZlUGFkWi5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKG1vdmVQYWRaLndpZHRoIC0gMSwgbW92ZVBhZFouaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChcInpcIiwgMCwgMTApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJubyBjb250ZXh0IG9uIG1vdmVQYWRaXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gbW92ZVBhZFpcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBrLWQgVHJlZSBKYXZhU2NyaXB0IC0gViAxLjAxXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3ViaWxhYnMva2QtdHJlZS1qYXZhc2NyaXB0XG4gKlxuICogQGF1dGhvciBNaXJjZWEgUHJpY29wIDxwcmljb3BAdWJpbGFicy5uZXQ+LCAyMDEyXG4gKiBAYXV0aG9yIE1hcnRpbiBLbGVwcGUgPGtsZXBwZUB1YmlsYWJzLm5ldD4sIDIwMTJcbiAqIEBhdXRob3IgVWJpbGFicyBodHRwOi8vdWJpbGFicy5uZXQsIDIwMTJcbiAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIDxodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocD5cbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgZmFjdG9yeShleHBvcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KHJvb3QpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIGZ1bmN0aW9uIE5vZGUob2JqLCBkaW1lbnNpb24sIHBhcmVudCkge1xuICAgIHRoaXMub2JqID0gb2JqO1xuICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb247XG4gIH1cblxuICBmdW5jdGlvbiBrZFRyZWUocG9pbnRzLCBtZXRyaWMsIGRpbWVuc2lvbnMpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShwb2ludHMsIGRlcHRoLCBwYXJlbnQpIHtcbiAgICAgIHZhciBkaW0gPSBkZXB0aCAlIGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICBtZWRpYW4sXG4gICAgICAgIG5vZGU7XG5cbiAgICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKHBvaW50c1swXSwgZGltLCBwYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVtkaW1lbnNpb25zW2RpbV1dIC0gYltkaW1lbnNpb25zW2RpbV1dO1xuICAgICAgfSk7XG5cbiAgICAgIG1lZGlhbiA9IE1hdGguZmxvb3IocG9pbnRzLmxlbmd0aCAvIDIpO1xuXG4gICAgICAvLyBhdm9pZCBoYXZpbmcgc2FtZSBjb29yZHMgb24gbGVmdCBhbmQgcmlnaHQgdHJlZSAhISFcbiAgICAgIHdoaWxlIChtZWRpYW4gPiAwKSB7XG4gICAgICAgIGxldCBuZXdtZWRpYW4gPSBtZWRpYW4gLSAxO1xuICAgICAgICBpZiAocG9pbnRzW21lZGlhbl1bZGltZW5zaW9uc1tkaW1dXSA9PT0gcG9pbnRzW25ld21lZGlhbl1bZGltZW5zaW9uc1tkaW1dXSkge1xuICAgICAgICAgIG1lZGlhbiAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBuZXcgTm9kZShwb2ludHNbbWVkaWFuXSwgZGltLCBwYXJlbnQpO1xuICAgICAgbm9kZS5sZWZ0ID0gYnVpbGRUcmVlKHBvaW50cy5zbGljZSgwLCBtZWRpYW4pLCBkZXB0aCArIDEsIG5vZGUpO1xuICAgICAgbm9kZS5yaWdodCA9IGJ1aWxkVHJlZShwb2ludHMuc2xpY2UobWVkaWFuICsgMSksIGRlcHRoICsgMSwgbm9kZSk7XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8vIFJlbG9hZHMgYSBzZXJpYWxpZWQgdHJlZVxuICAgIGZ1bmN0aW9uIGxvYWRUcmVlKGRhdGEpIHtcbiAgICAgIC8vIEp1c3QgbmVlZCB0byByZXN0b3JlIHRoZSBgcGFyZW50YCBwYXJhbWV0ZXJcbiAgICAgIHNlbGYucm9vdCA9IGRhdGE7XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQYXJlbnQocm9vdCkge1xuICAgICAgICBpZiAocm9vdC5sZWZ0KSB7XG4gICAgICAgICAgcm9vdC5sZWZ0LnBhcmVudCA9IHJvb3Q7XG4gICAgICAgICAgcmVzdG9yZVBhcmVudChyb290LmxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3QucmlnaHQpIHtcbiAgICAgICAgICByb290LnJpZ2h0LnBhcmVudCA9IHJvb3Q7XG4gICAgICAgICAgcmVzdG9yZVBhcmVudChyb290LnJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN0b3JlUGFyZW50KHNlbGYucm9vdCk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS53YXJuKCd1c2luZyBtYXJpb3NnaXQ6a2QtdHJlZSB2MS4wLjQnKTtcbiAgICAvLyBJZiBwb2ludHMgaXMgbm90IGFuIGFycmF5LCBhc3N1bWUgd2UncmUgbG9hZGluZyBhIHByZS1idWlsdCB0cmVlXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBvaW50cykpIGxvYWRUcmVlKHBvaW50cywgbWV0cmljLCBkaW1lbnNpb25zKTtcbiAgICBlbHNlIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShwb2ludHMsIDAsIG51bGwpO1xuXG4gICAgLy8gQ29udmVydCB0byBhIEpTT04gc2VyaWFsaXphYmxlIHN0cnVjdHVyZTsgdGhpcyBqdXN0IHJlcXVpcmVzIHJlbW92aW5nXG4gICAgLy8gdGhlIGBwYXJlbnRgIHByb3BlcnR5XG4gICAgdGhpcy50b0pTT04gPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBpZiAoIXNyYykgc3JjID0gdGhpcy5yb290O1xuICAgICAgdmFyIGRlc3QgPSBuZXcgTm9kZShzcmMub2JqLCBzcmMuZGltZW5zaW9uLCBudWxsKTtcbiAgICAgIGlmIChzcmMubGVmdCkgZGVzdC5sZWZ0ID0gc2VsZi50b0pTT04oc3JjLmxlZnQpO1xuICAgICAgaWYgKHNyYy5yaWdodCkgZGVzdC5yaWdodCA9IHNlbGYudG9KU09OKHNyYy5yaWdodCk7XG4gICAgICByZXR1cm4gZGVzdDtcbiAgICB9O1xuXG4gICAgLyoqIHJldHVybnMgYSBsaXN0IG9mIHBvaW50cyBpbiB0aGUgc3VidHJlZSwgZXhjbHVzaXZlIHRoZSBnaXZlbiBub2RlICEgKi9cbiAgICB0aGlzLnRvQXJyYXkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICBpZiAoc3JjID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBpZiAoc3JjLmxlZnQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3JjLmxlZnQub2JqKTtcbiAgICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgLi4udGhpcy50b0FycmF5KHNyYy5sZWZ0KV07XG4gICAgICB9XG4gICAgICBpZiAoc3JjLnJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNyYy5yaWdodC5vYmopO1xuICAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi50aGlzLnRvQXJyYXkoc3JjLnJpZ2h0KV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRoaXMuaW5zZXJ0ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICBmdW5jdGlvbiBpbm5lclNlYXJjaChub2RlLCBwYXJlbnQpIHtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl07XG4gICAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgbm9kZS5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgIHJldHVybiBpbm5lclNlYXJjaChub2RlLmxlZnQsIG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpbm5lclNlYXJjaChub2RlLnJpZ2h0LCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0UG9zaXRpb24gPSBpbm5lclNlYXJjaCh0aGlzLnJvb3QsIG51bGwpLFxuICAgICAgICBuZXdOb2RlLFxuICAgICAgICBkaW1lbnNpb247XG5cbiAgICAgIGlmIChpbnNlcnRQb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgTm9kZShwb2ludCwgMCwgbnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV3Tm9kZSA9IG5ldyBOb2RlKHBvaW50LCAoaW5zZXJ0UG9zaXRpb24uZGltZW5zaW9uICsgMSkgJSBkaW1lbnNpb25zLmxlbmd0aCwgaW5zZXJ0UG9zaXRpb24pO1xuICAgICAgZGltZW5zaW9uID0gZGltZW5zaW9uc1tpbnNlcnRQb3NpdGlvbi5kaW1lbnNpb25dO1xuXG4gICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IGluc2VydFBvc2l0aW9uLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgIGluc2VydFBvc2l0aW9uLmxlZnQgPSBuZXdOb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zZXJ0UG9zaXRpb24ucmlnaHQgPSBuZXdOb2RlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgdmFyIG5vZGU7XG5cbiAgICAgIGZ1bmN0aW9uIG5vZGVTZWFyY2gobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUub2JqID09PSBwb2ludCkge1xuICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbbm9kZS5kaW1lbnNpb25dO1xuXG4gICAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgbm9kZS5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgIHJldHVybiBub2RlU2VhcmNoKG5vZGUubGVmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVTZWFyY2gobm9kZS5yaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgICAgIHZhciBuZXh0Tm9kZSxcbiAgICAgICAgICBuZXh0T2JqLFxuICAgICAgICAgIHBEaW1lbnNpb247XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZE1pbihub2RlLCBkaW0pIHtcbiAgICAgICAgICB2YXIgZGltZW5zaW9uLFxuICAgICAgICAgICAgb3duLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgICAgbWluO1xuXG4gICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbZGltXTtcblxuICAgICAgICAgIGlmIChub2RlLmRpbWVuc2lvbiA9PT0gZGltKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmaW5kTWluKG5vZGUubGVmdCwgZGltKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG93biA9IG5vZGUub2JqW2RpbWVuc2lvbl07XG4gICAgICAgICAgbGVmdCA9IGZpbmRNaW4obm9kZS5sZWZ0LCBkaW0pO1xuICAgICAgICAgIHJpZ2h0ID0gZmluZE1pbihub2RlLnJpZ2h0LCBkaW0pO1xuICAgICAgICAgIG1pbiA9IG5vZGU7XG5cbiAgICAgICAgICBpZiAobGVmdCAhPT0gbnVsbCAmJiBsZWZ0Lm9ialtkaW1lbnNpb25dIDwgb3duKSB7XG4gICAgICAgICAgICBtaW4gPSBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmlnaHQgIT09IG51bGwgJiYgcmlnaHQub2JqW2RpbWVuc2lvbl0gPCBtaW4ub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgICAgIG1pbiA9IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZWxmLnJvb3QgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBEaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUucGFyZW50LmRpbWVuc2lvbl07XG5cbiAgICAgICAgICBpZiAobm9kZS5vYmpbcERpbWVuc2lvbl0gPCBub2RlLnBhcmVudC5vYmpbcERpbWVuc2lvbl0pIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50LmxlZnQgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudC5yaWdodCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSByaWdodCBzdWJ0cmVlIGlzIG5vdCBlbXB0eSwgc3dhcCB3aXRoIHRoZSBtaW5pbXVtIGVsZW1lbnQgb24gdGhlXG4gICAgICAgIC8vIG5vZGUncyBkaW1lbnNpb24uIElmIGl0IGlzIGVtcHR5LCB3ZSBzd2FwIHRoZSBsZWZ0IGFuZCByaWdodCBzdWJ0cmVlcyBhbmRcbiAgICAgICAgLy8gZG8gdGhlIHNhbWUuXG4gICAgICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgbmV4dE5vZGUgPSBmaW5kTWluKG5vZGUucmlnaHQsIG5vZGUuZGltZW5zaW9uKTtcbiAgICAgICAgICBuZXh0T2JqID0gbmV4dE5vZGUub2JqO1xuICAgICAgICAgIHJlbW92ZU5vZGUobmV4dE5vZGUpO1xuICAgICAgICAgIG5vZGUub2JqID0gbmV4dE9iajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IGZpbmRNaW4obm9kZS5sZWZ0LCBub2RlLmRpbWVuc2lvbik7XG4gICAgICAgICAgbmV4dE9iaiA9IG5leHROb2RlLm9iajtcbiAgICAgICAgICByZW1vdmVOb2RlKG5leHROb2RlKTtcbiAgICAgICAgICBub2RlLnJpZ2h0ID0gbm9kZS5sZWZ0O1xuICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7XG4gICAgICAgICAgbm9kZS5vYmogPSBuZXh0T2JqO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlU2VhcmNoKHNlbGYucm9vdCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybigna2R0cmVlOnJlbW92ZSBjb3VsZCBub3QgcmVtb3ZlIG5vZGUgISBpbnRlcm5hbCBlcnJvciAhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlTm9kZShub2RlKTsgLy8gYnVnZ2lcblxuICAgICAgLy8gd2lraXBlZGlhIHNheXM6IGp1c3QgcmVidWlsZCB0aGUgc3VidHJlZVxuICAgICAgY29uc3QgYWxsY2hpbGRzID0gdGhpcy50b0FycmF5KG5vZGUpO1xuICAgICAgbGV0IG5ld25vZGUgPSBidWlsZFRyZWUoYWxsY2hpbGRzLCBub2RlLmRpbWVuc2lvbiwgbm9kZS5wYXJlbnQpO1xuICAgICAgaWYgKG5vZGUucGFyZW50KSB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudC5sZWZ0ID09PSBub2RlKSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnQubGVmdCA9IG5ld25vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnQucmlnaHQgPT09IG5vZGUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudC5yaWdodCA9IG5ld25vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucm9vdCA9IG5ld25vZGU7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5uZWFyZXN0ID0gZnVuY3Rpb24gKHBvaW50LCBtYXhOb2RlcywgbWF4RGlzdGFuY2UpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIGJlc3ROb2RlcztcblxuICAgICAgYmVzdE5vZGVzID0gbmV3IEJpbmFyeUhlYXAoXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7IHJldHVybiAtZVsxXTsgfVxuICAgICAgKTtcblxuICAgICAgZnVuY3Rpb24gbmVhcmVzdFNlYXJjaChub2RlKSB7XG4gICAgICAgIHZhciBiZXN0Q2hpbGQsXG4gICAgICAgICAgZGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl0sXG4gICAgICAgICAgb3duRGlzdGFuY2UgPSBtZXRyaWMocG9pbnQsIG5vZGUub2JqKSxcbiAgICAgICAgICBsaW5lYXJQb2ludCA9IHt9LFxuICAgICAgICAgIGxpbmVhckRpc3RhbmNlLFxuICAgICAgICAgIG90aGVyQ2hpbGQsXG4gICAgICAgICAgaTtcblxuICAgICAgICBmdW5jdGlvbiBzYXZlTm9kZShub2RlLCBkaXN0YW5jZSkge1xuICAgICAgICAgIGJlc3ROb2Rlcy5wdXNoKFtub2RlLCBkaXN0YW5jZV0pO1xuICAgICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpID4gbWF4Tm9kZXMpIHtcbiAgICAgICAgICAgIGJlc3ROb2Rlcy5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChpID09PSBub2RlLmRpbWVuc2lvbikge1xuICAgICAgICAgICAgbGluZWFyUG9pbnRbZGltZW5zaW9uc1tpXV0gPSBwb2ludFtkaW1lbnNpb25zW2ldXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZWFyUG9pbnRbZGltZW5zaW9uc1tpXV0gPSBub2RlLm9ialtkaW1lbnNpb25zW2ldXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaW5lYXJEaXN0YW5jZSA9IG1ldHJpYyhsaW5lYXJQb2ludCwgbm9kZS5vYmopO1xuXG4gICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpIDwgbWF4Tm9kZXMgfHwgb3duRGlzdGFuY2UgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgICAgICBzYXZlTm9kZShub2RlLCBvd25EaXN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5sZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgIGJlc3RDaGlsZCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBub2RlLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlc3RDaGlsZCA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmVhcmVzdFNlYXJjaChiZXN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpIDwgbWF4Tm9kZXMgfHwgb3duRGlzdGFuY2UgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgICAgc2F2ZU5vZGUobm9kZSwgb3duRGlzdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPCBtYXhOb2RlcyB8fCBNYXRoLmFicyhsaW5lYXJEaXN0YW5jZSkgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgICAgaWYgKGJlc3RDaGlsZCA9PT0gbm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICBvdGhlckNoaWxkID0gbm9kZS5yaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3RoZXJDaGlsZCA9IG5vZGUubGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG90aGVyQ2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5lYXJlc3RTZWFyY2gob3RoZXJDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhEaXN0YW5jZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWF4Tm9kZXM7IGkgKz0gMSkge1xuICAgICAgICAgIGJlc3ROb2Rlcy5wdXNoKFtudWxsLCBtYXhEaXN0YW5jZV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnJvb3QpXG4gICAgICAgIG5lYXJlc3RTZWFyY2goc2VsZi5yb290KTtcblxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLm1pbihtYXhOb2RlcywgYmVzdE5vZGVzLmNvbnRlbnQubGVuZ3RoKTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChiZXN0Tm9kZXMuY29udGVudFtpXVswXSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFtiZXN0Tm9kZXMuY29udGVudFtpXVswXS5vYmosIGJlc3ROb2Rlcy5jb250ZW50W2ldWzFdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRoaXMuYmFsYW5jZUZhY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIGhlaWdodChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGhlaWdodChub2RlLmxlZnQpLCBoZWlnaHQobm9kZS5yaWdodCkpICsgMTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY291bnQobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudChub2RlLmxlZnQpICsgY291bnQobm9kZS5yaWdodCkgKyAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVpZ2h0KHNlbGYucm9vdCkgLyAoTWF0aC5sb2coY291bnQoc2VsZi5yb290KSkgLyBNYXRoLmxvZygyKSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIEJpbmFyeSBoZWFwIGltcGxlbWVudGF0aW9uIGZyb206XG4gIC8vIGh0dHA6Ly9lbG9xdWVudGphdmFzY3JpcHQubmV0L2FwcGVuZGl4Mi5odG1sXG5cbiAgZnVuY3Rpb24gQmluYXJ5SGVhcChzY29yZUZ1bmN0aW9uKSB7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5zY29yZUZ1bmN0aW9uID0gc2NvcmVGdW5jdGlvbjtcbiAgfVxuXG4gIEJpbmFyeUhlYXAucHJvdG90eXBlID0ge1xuICAgIHB1c2g6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAvLyBBZGQgdGhlIG5ldyBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgdGhpcy5jb250ZW50LnB1c2goZWxlbWVudCk7XG4gICAgICAvLyBBbGxvdyBpdCB0byBidWJibGUgdXAuXG4gICAgICB0aGlzLmJ1YmJsZVVwKHRoaXMuY29udGVudC5sZW5ndGggLSAxKTtcbiAgICB9LFxuXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgZmlyc3QgZWxlbWVudCBzbyB3ZSBjYW4gcmV0dXJuIGl0IGxhdGVyLlxuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuY29udGVudFswXTtcbiAgICAgIC8vIEdldCB0aGUgZWxlbWVudCBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgYW55IGVsZW1lbnRzIGxlZnQsIHB1dCB0aGUgZW5kIGVsZW1lbnQgYXQgdGhlXG4gICAgICAvLyBzdGFydCwgYW5kIGxldCBpdCBzaW5rIGRvd24uXG4gICAgICBpZiAodGhpcy5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jb250ZW50WzBdID0gZW5kO1xuICAgICAgICB0aGlzLnNpbmtEb3duKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgcGVlazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudFswXTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGxlbiA9IHRoaXMuY29udGVudC5sZW5ndGg7XG4gICAgICAvLyBUbyByZW1vdmUgYSB2YWx1ZSwgd2UgbXVzdCBzZWFyY2ggdGhyb3VnaCB0aGUgYXJyYXkgdG8gZmluZFxuICAgICAgLy8gaXQuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRbaV0gPT0gbm9kZSkge1xuICAgICAgICAgIC8vIFdoZW4gaXQgaXMgZm91bmQsIHRoZSBwcm9jZXNzIHNlZW4gaW4gJ3BvcCcgaXMgcmVwZWF0ZWRcbiAgICAgICAgICAvLyB0byBmaWxsIHVwIHRoZSBob2xlLlxuICAgICAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XG4gICAgICAgICAgaWYgKGkgIT0gbGVuIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50W2ldID0gZW5kO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmVGdW5jdGlvbihlbmQpIDwgdGhpcy5zY29yZUZ1bmN0aW9uKG5vZGUpKVxuICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVVwKGkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB0aGlzLnNpbmtEb3duKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vZGUgbm90IGZvdW5kLlwiKTtcbiAgICB9LFxuXG4gICAgc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7XG4gICAgfSxcblxuICAgIGJ1YmJsZVVwOiBmdW5jdGlvbiAobikge1xuICAgICAgLy8gRmV0Y2ggdGhlIGVsZW1lbnQgdGhhdCBoYXMgdG8gYmUgbW92ZWQuXG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXTtcbiAgICAgIC8vIFdoZW4gYXQgMCwgYW4gZWxlbWVudCBjYW4gbm90IGdvIHVwIGFueSBmdXJ0aGVyLlxuICAgICAgd2hpbGUgKG4gPiAwKSB7XG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHBhcmVudCBlbGVtZW50J3MgaW5kZXgsIGFuZCBmZXRjaCBpdC5cbiAgICAgICAgdmFyIHBhcmVudE4gPSBNYXRoLmZsb29yKChuICsgMSkgLyAyKSAtIDEsXG4gICAgICAgICAgcGFyZW50ID0gdGhpcy5jb250ZW50W3BhcmVudE5dO1xuICAgICAgICAvLyBTd2FwIHRoZSBlbGVtZW50cyBpZiB0aGUgcGFyZW50IGlzIGdyZWF0ZXIuXG4gICAgICAgIGlmICh0aGlzLnNjb3JlRnVuY3Rpb24oZWxlbWVudCkgPCB0aGlzLnNjb3JlRnVuY3Rpb24ocGFyZW50KSkge1xuICAgICAgICAgIHRoaXMuY29udGVudFtwYXJlbnROXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5jb250ZW50W25dID0gcGFyZW50O1xuICAgICAgICAgIC8vIFVwZGF0ZSAnbicgdG8gY29udGludWUgYXQgdGhlIG5ldyBwb3NpdGlvbi5cbiAgICAgICAgICBuID0gcGFyZW50TjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3VuZCBhIHBhcmVudCB0aGF0IGlzIGxlc3MsIG5vIG5lZWQgdG8gbW92ZSBpdCBmdXJ0aGVyLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaW5rRG93bjogZnVuY3Rpb24gKG4pIHtcbiAgICAgIC8vIExvb2sgdXAgdGhlIHRhcmdldCBlbGVtZW50IGFuZCBpdHMgc2NvcmUuXG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aCxcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXSxcbiAgICAgICAgZWxlbVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGVsZW1lbnQpO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAvLyBDb21wdXRlIHRoZSBpbmRpY2VzIG9mIHRoZSBjaGlsZCBlbGVtZW50cy5cbiAgICAgICAgdmFyIGNoaWxkMk4gPSAobiArIDEpICogMiwgY2hpbGQxTiA9IGNoaWxkMk4gLSAxO1xuICAgICAgICAvLyBUaGlzIGlzIHVzZWQgdG8gc3RvcmUgdGhlIG5ldyBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCxcbiAgICAgICAgLy8gaWYgYW55LlxuICAgICAgICB2YXIgc3dhcCA9IG51bGw7XG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBjaGlsZCBleGlzdHMgKGlzIGluc2lkZSB0aGUgYXJyYXkpLi4uXG4gICAgICAgIGlmIChjaGlsZDFOIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gTG9vayBpdCB1cCBhbmQgY29tcHV0ZSBpdHMgc2NvcmUuXG4gICAgICAgICAgdmFyIGNoaWxkMSA9IHRoaXMuY29udGVudFtjaGlsZDFOXSxcbiAgICAgICAgICAgIGNoaWxkMVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMSk7XG4gICAgICAgICAgLy8gSWYgdGhlIHNjb3JlIGlzIGxlc3MgdGhhbiBvdXIgZWxlbWVudCdzLCB3ZSBuZWVkIHRvIHN3YXAuXG4gICAgICAgICAgaWYgKGNoaWxkMVNjb3JlIDwgZWxlbVNjb3JlKVxuICAgICAgICAgICAgc3dhcCA9IGNoaWxkMU47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gdGhlIHNhbWUgY2hlY2tzIGZvciB0aGUgb3RoZXIgY2hpbGQuXG4gICAgICAgIGlmIChjaGlsZDJOIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGNoaWxkMiA9IHRoaXMuY29udGVudFtjaGlsZDJOXSxcbiAgICAgICAgICAgIGNoaWxkMlNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMik7XG4gICAgICAgICAgaWYgKGNoaWxkMlNjb3JlIDwgKHN3YXAgPT0gbnVsbCA/IGVsZW1TY29yZSA6IGNoaWxkMVNjb3JlKSkge1xuICAgICAgICAgICAgc3dhcCA9IGNoaWxkMk47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgbmVlZHMgdG8gYmUgbW92ZWQsIHN3YXAgaXQsIGFuZCBjb250aW51ZS5cbiAgICAgICAgaWYgKHN3YXAgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY29udGVudFtuXSA9IHRoaXMuY29udGVudFtzd2FwXTtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbc3dhcF0gPSBlbGVtZW50O1xuICAgICAgICAgIG4gPSBzd2FwO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIGRvbmUuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydHMua2RUcmVlID0ga2RUcmVlO1xuICBleHBvcnRzLkJpbmFyeUhlYXAgPSBCaW5hcnlIZWFwO1xufSkpO1xuIiwiaW1wb3J0IHtrZFRyZWV9IGZyb20gJ2tkLXRyZWUtamF2YXNjcmlwdCc7IC8vIG5vZGUgbW9kdWxlXHJcbi8vIGltcG9ydCB7a2RUcmVlLCBrZFRyZWVPYmplY3R9IGZyb20gJy4va2RUcmVlJztcclxuXHJcbmNsYXNzIEJvdW5kaW5nQm94IHtcclxuICAgIG1pbng6IG51bWJlciA9IDk5OTk5O1xyXG4gICAgbWlueTogbnVtYmVyID0gOTk5OTk7XHJcbiAgICBtYXh4OiBudW1iZXIgPSAtOTk5OTk7XHJcbiAgICBtYXh5OiBudW1iZXIgPSAtOTk5OTk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgdXBkYXRlRnJvbVBhZChwYWQ6UGFkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUocGFkLnBvc1gsIHBhZC5wb3NZKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh4IDwgdGhpcy5taW54KSB0aGlzLm1pbnggPSB4O1xyXG4gICAgICAgIGlmICh5IDwgdGhpcy5taW55KSB0aGlzLm1pbnkgPSB5O1xyXG4gICAgICAgIGlmICh4ID4gdGhpcy5tYXh4KSB0aGlzLm1heHggPSB4O1xyXG4gICAgICAgIGlmICh5ID4gdGhpcy5tYXh5KSB0aGlzLm1heHkgPSB5O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBiYjogJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fSAke3RoaXMuY2VudGVyKClbMV19YCk7XHJcbiAgICB9XHJcbiAgICBjZW50ZXIoem9vbTogbnVtYmVyID0gMS4wKTogW3g6IG51bWJlciwgeTogbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFsodGhpcy5taW54ICsgKHRoaXMubWF4eCAtIHRoaXMubWlueCkgLyAyKSAqIHpvb20sICh0aGlzLm1pbnkgKyAodGhpcy5tYXh5IC0gdGhpcy5taW55KSAvIDIpICogem9vbV07XHJcbiAgICB9XHJcbiAgICB6ZXJvKHpvb206IG51bWJlciA9IDEuMCk6IFt4OiBudW1iZXIsIHk6IG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5taW54ICogem9vbSwgdGhpcy5taW55ICogem9vbV07XHJcbiAgICB9XHJcbiAgICBzaXplKHpvb206IG51bWJlciA9IDEuMCk6IFt4OiBudW1iZXIsIHk6IG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbKHRoaXMubWF4eCAtIHRoaXMubWlueCkgKiB6b29tLCAodGhpcy5tYXh5IC0gdGhpcy5taW55KSAqIHpvb21dO1xyXG4gICAgfVxyXG4gICAgZGlhZ29uYWwoem9vbTogbnVtYmVyID0gMS4wKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplKHpvb20pO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc2l6ZVswXSpzaXplWzBdICsgc2l6ZVsxXSpzaXplWzFdKTtcclxuICAgIH1cclxuICAgIC8qKiBDaGVjayBpZiBwYWQgaXMgaW5zaWRlIHRoZSBib3VuZGluZ2JveCAqL1xyXG4gICAgaW5zaWRlKHBhZDogUGFkKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHBhZC5wb3NYID49IHRoaXMubWlueCAmJiBwYWQucG9zWCA8PSB0aGlzLm1heHgpICYmIChwYWQucG9zWSA+PSB0aGlzLm1pbnkgJiYgcGFkLnBvc1kgPD0gdGhpcy5tYXh5KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFkU3R5bGUge1xyXG4gICAgcHVibGljIGZvcm06IHN0cmluZztcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoZm9ybTogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFkIHtcclxuICAgIHBvc1g6IG51bWJlcjtcclxuICAgIHBvc1k6IG51bWJlcjtcclxuICAgIHN0eWxlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHlsZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHg7XHJcbiAgICAgICAgdGhpcy5wb3NZID0geTtcclxuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICB9XHJcbiAgICBhc1R1cGxlKCk6W251bWJlcixudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucG9zWCwgdGhpcy5wb3NZXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBDQiB7IC8vZXh0ZW5kcyBrZFRyZWVPYmplY3Qge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBQYWRTdHlsZT47XHJcbiAgICBtYXBQYWRzOiBNYXA8c3RyaW5nLCBTZXQ8UGFkPj47XHJcbiAgICBmaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBtb3VzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG1vdXNlU3RhcnRYOiBudW1iZXIgPSAwO1xyXG4gICAgbW91c2VTdGFydFk6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZU9mZlg6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZU9mZlk6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZVNlbGVjdDogYm9vbGVhbjtcclxuICAgIG1vdXNlU2VsZWN0WDogbnVtYmVyO1xyXG4gICAgbW91c2VTZWxlY3RZOiBudW1iZXI7XHJcblxyXG4gICAgcG9zWmVybzogbnVtYmVyW107XHJcblxyXG4gICAgem9vbTogbnVtYmVyID0gNS4wO1xyXG4gICAgYmJQY2I6IEJvdW5kaW5nQm94O1xyXG4gICAgYmJTZWxlY3Rpb246IEJvdW5kaW5nQm94O1xyXG4gICAgYmJaZXJvOiBCb3VuZGluZ0JveDsgLy8gdXNlIGNlbnRlciBhcyB6ZXJvXHJcblxyXG4gICAgdHJlZToga2RUcmVlPFBhZD47XHJcbiAgICBuZWFyZXN0OltQYWQsIG51bWJlcl1bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tYXBTdHlsZXMgPSBuZXcgTWFwPHN0cmluZywgUGFkU3R5bGU+KCk7XHJcbiAgICAgICAgdGhpcy5tYXBQYWRzID0gbmV3IE1hcDxzdHJpbmcsIFNldDxQYWQ+PigpO1xyXG4gICAgICAgIHRoaXMuYmJQY2IgPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICB0aGlzLmJiWmVybyA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHRoaXMuYmJTZWxlY3Rpb24gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW52YXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIFplcm8gcG9zaXRpb24gdG8gdGhlIGxvd2VyIGxlZnQgb2Ygc2VsZWN0aW9uIHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8oKTp2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdXNlIGxhc3Qgc2VsZWN0aW9uID8/P1xyXG4gICAgICAgIHRoaXMuYmJaZXJvID0gdGhpcy5iYlNlbGVjdGlvbjtcclxuICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQY2I6c2V0WmVybzogJHt0aGlzLmJiWmVyby56ZXJvKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBaZXJvIHBvc2l0aW9uIHJlbGF0aXZlIHRvIE9yaWdpbigwLDApLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0WmVybygpOltudW1iZXIsbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmJaZXJvLnplcm8oKTsgLy8gbG93ZXIgbGVmdCA/PyBiZXR0ZXIgd2hlbiAuY2VudGVyKCkgPz9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIEFsbCBQYWRzIGluIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNlbGVjdGVkKCk6UGFkW10ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6UGFkW10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IG5lYXIgb2YgdGhpcy5uZWFyZXN0KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5lYXIpO1xyXG4gICAgICAgICAgICBpZihuZWFyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5lYXJbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBMb3dlciBsZWZ0IG9mIHNlbGVjdGlvbiBhcyB0dXBsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWRaZXJvKCk6W251bWJlcixudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYlNlbGVjdGlvbi56ZXJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZENvdW50KCk6bnVtYmVyIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICBmb3IobGV0IHBhZHNldCBvZiB0aGlzLm1hcFBhZHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHBhZHNldFsxXS5zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tVG9GaXQoc2l6ZTpbbnVtYmVyLG51bWJlcl0pIHtcclxuICAgICAgICBsZXQgcHNpemUgPSB0aGlzLmJiUGNiLnNpemUoKTtcclxuICAgICAgICBsZXQgencgPSBzaXplWzBdIC8gcHNpemVbMF07XHJcbiAgICAgICAgbGV0IHpoID0gc2l6ZVsxXSAvIHBzaXplWzFdO1xyXG4gICAgICAgIHRoaXMuem9vbSA9ICgoencgPiB6aCk/IHpoIDogencpICogLjk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBjYjp6b29tVG9GaXQgem9vbSAke3RoaXMuem9vbX1gLCBwc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWCA9IC0odGhpcy5iYlBjYi5jZW50ZXIoKVswXSAqIHRoaXMuem9vbSkgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZZID0gLSh0aGlzLmJiUGNiLmNlbnRlcigpWzFdICogdGhpcy56b29tKSArIHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRQYWRTdHlsZShuYW1lOiBzdHJpbmcsIGZvcm06IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1hcFN0eWxlcy5zZXQobmFtZSwgbmV3IFBhZFN0eWxlKGZvcm0sIHcsIGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYWQoc3R5bGU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWFwUGFkcy5oYXMoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwUGFkcy5zZXQoc3R5bGUsIG5ldyBTZXQ8UGFkPigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhZHNldCA9IHRoaXMubWFwUGFkcy5nZXQoc3R5bGUpO1xyXG4gICAgICAgIGlmIChwYWRzZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3cGFkID0gbmV3IFBhZChzdHlsZSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHBhZHNldC5hZGQobmV3cGFkKTtcclxuICAgICAgICAgICAgdGhpcy5iYlBjYi51cGRhdGUoeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJlZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFkcyA6IFBhZFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhZHNldHMgb2YgdGhpcy5tYXBQYWRzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwYWQgb2YgcGFkc2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZHMucHVzaChwYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyZWUgPSBuZXcga2RUcmVlKHBhZHMsIFBDQi5kaXN0YW5jZSwgW1wicG9zWFwiLCBcInBvc1lcIl0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRyZWUgPSBuZXcga2RUcmVlKFBDQiwgcGFkcywgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7IC8vIHRzIHZlcnNpb25cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RyZWUgYmY6JywgdGhpcy50cmVlLmJhbGFuY2VGYWN0b3IoKSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXZlbnQuYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uID09IDApIHsgLy8gc3RhcnQgc2VsZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IG14ID0gKGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlgpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBjb25zdCBteSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApIC0gdGhpcy5tb3VzZU9mZlkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFkgPSBteTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFkgPSBteTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQY2I6bW91c2VEb3duOiB4OiR7dGhpcy5tb3VzZVN0YXJ0WH0geToke3RoaXMubW91c2VTdGFydFl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiAhPSAwKSB7IC8vIHBhbiBhcm91bmRcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WCA9IGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFkgPSBldmVudC5jbGllbnRZICogdHJhbnMuZCAtIHRoaXMubW91c2VPZmZZO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BjYjptb3VzZVVwIGV2ZW50OicsIGV2ZW50KTtcclxuICAgICAgICBpZihldmVudC5idXR0b24gIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5idXR0b24gPT0gMCkgeyAvLyBzZWxlY3RcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmFucywgZXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnJywgdGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZLXRoaXMuY2FudmFzLm9mZnNldFRvcCksIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgY29uc3QgbXggPSAoZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWCkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGNvbnN0IG15ID0gKHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCkgLSB0aGlzLm1vdXNlT2ZmWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RZID0gbXk7XHJcblxyXG4gICAgICAgICAgICAvLyBiYiA9IHNlbGVjdGVkIHJlY3RhbmdsZVxyXG4gICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24udXBkYXRlKHRoaXMubW91c2VTdGFydFgsIHRoaXMubW91c2VTdGFydFkpO1xyXG4gICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uLnVwZGF0ZSh0aGlzLm1vdXNlU2VsZWN0WCwgdGhpcy5tb3VzZVNlbGVjdFkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhZCA9IG5ldyBQYWQoJycsIHRoaXMuYmJTZWxlY3Rpb24uY2VudGVyKClbMF0sIHRoaXMuYmJTZWxlY3Rpb24uY2VudGVyKClbMV0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGNiOm1vdXNlVXAgY3g6JHtwYWQucG9zWH0gY3k6JHtwYWQucG9zWX0gZGlhZ29uYWw6JHt0aGlzLmJiU2VsZWN0aW9uLmRpYWdvbmFsKCl9YCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnRyZWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZDpbUGFkLCBudW1iZXJdW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gdGhpcy5iYlNlbGVjdGlvbi5kaWFnb25hbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGlzdCA8IDAuMSkgeyAvLyBubyBkcmFnIC0gb25seSBvbmVcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRoaXMudHJlZS5uZWFyZXN0KHBhZCwgMSwgZGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0ID0gZm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3QgPSAoZGlzdC8yKSAqIChkaXN0LzIpOyAvLyBzZWFyY2ggcmVxdWlyZSBzcXVhcmUgZGlzdGFuY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdGhpcy50cmVlLm5lYXJlc3QocGFkLCB0aGlzLmdldFBhZENvdW50KCksIGRpc3QpOyAvLyB1dXVoaGggdXNlIHBhZCBjb3VudCAhP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IG5lYXIgb2YgZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG06JHtteH0sJHtteX0gbmVhcmVzdDoke25lYXJbMF0ucG9zWH0sJHtuZWFyWzBdLnBvc1l9ICBkaXN0OiR7TWF0aC5zcXJ0KG5lYXJbMV0pfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8gdXV1aGhoIGNoZWNrIGlmIGluc2lkZSB0aGUgYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYmJTZWxlY3Rpb24uaW5zaWRlKG5lYXJbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3QucHVzaChuZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBuZWVkIGEgYmIgZm9yIGFjdHVhbCBzZWxlY3RlZCBwb2ludHMgdG8gZ2V0IHplcm8gcmlnaHRcclxuICAgICAgICAgICAgICAgIGxldCBiYk5ld1NlbGVjdGlvbiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IG5lYXIgb2YgdGhpcy5uZWFyZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmJOZXdTZWxlY3Rpb24udXBkYXRlRnJvbVBhZChuZWFyWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24gPSBiYk5ld1NlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGNiOm1vdXNlVXAgc2VsZWN0aW9uIGZvdW5kICMke2ZvdW5kLmxlbmd0aH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIC8vIG9vb2hoaCBkbyBub3QgdHJ1c3QgZXZlbnQuYnV0dG9uLCBpdCdzIGFsd2F5cyAwIGhlcmUgIVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwY2I6bW91c2VNb3ZlJyxldmVudCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICBpZih0aGlzLm1vdXNlRmxhZykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWCA9IGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZVN0YXJ0WDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU9mZlkgPSBldmVudC5jbGllbnRZICogdHJhbnMuZCAtIHRoaXMubW91c2VTdGFydFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubW91c2VTZWxlY3QgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG14ID0gKGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlgpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBjb25zdCBteSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApIC0gdGhpcy5tb3VzZU9mZlkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WSA9IG15O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlV2hlZWwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIGNvbnN0IG14ID0gKGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlgpO1xyXG4gICAgICAgIGNvbnN0IG15ID0gKHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCkgLSB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG1vdXNlV2hlZWwgcG9zOiB4OiR7bXh9IHk6JHtteX1gKTtcclxuICAgICAgICBsZXQgb2xkWCA9IG14IC8gdGhpcy56b29tO1xyXG4gICAgICAgIGxldCBvbGRZID0gbXkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56b29tICo9IDEuMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnpvb20gKj0gMC45O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBrb3JyZWN0IHRoZSBkcmlmdCBhcm91bmQgY3VycmVudCBtb3VzZSBwb3NpdGlvbi4uLlxyXG4gICAgICAgIGxldCBuZXdYID0gb2xkWCAqIHRoaXMuem9vbTtcclxuICAgICAgICBsZXQgbmV3WSA9IG9sZFkgKiB0aGlzLnpvb207XHJcbiAgICAgICAgbGV0IG9mZlggPSAobmV3WCAtIG14KTtcclxuICAgICAgICBsZXQgb2ZmWSA9IChuZXdZIC0gbXkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBtb3VzZVdoZWVsIG9mZnNldDogeDoke29mZlh9ICgke3RoaXMubW91c2VPZmZYfSkgeToke29mZll9ICgke3RoaXMubW91c2VPZmZZfSlgKTtcclxuICAgICAgICB0aGlzLm1vdXNlT2ZmWCAtPSBvZmZYO1xyXG4gICAgICAgIHRoaXMubW91c2VPZmZZIC09IG9mZlk7XHJcbiAgICB9XHJcbiAgICBtb3VzZU91dChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXN0YW5jZShhOlBhZCwgYjpQYWQpIHtcclxuICAgICAgICByZXR1cm4gKGEucG9zWCAtIGIucG9zWCkqKGEucG9zWCAtIGIucG9zWCkgKyAgKGEucG9zWSAtIGIucG9zWSkqKGEucG9zWSAtIGIucG9zWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgLy8gdGhlb3JldGlzY2ggc28uLi5cclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAnb3JhbmdlcmVkJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYW50aXF1ZXdoaXRlJztcclxuXHJcbiAgICAgICAgLy8gZHJhdyBiYiBjZW50ZXJcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLmJiUGNiLmNlbnRlcih0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhjZW50ZXJbMF0gLSAxMCArIHRoaXMubW91c2VPZmZYLCBjZW50ZXJbMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGNlbnRlclswXSArIDEwICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oY2VudGVyWzBdICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSAtIDEwICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhjZW50ZXJbMF0gKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdICsgMTAgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgLy8gZHJhdyBiYlxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5iYlBjYi56ZXJvKHRoaXMuem9vbSlbMF0gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5iYlBjYi56ZXJvKHRoaXMuem9vbSlbMV0gKyB0aGlzLm1vdXNlT2ZmWSwgdGhpcy5iYlBjYi5zaXplKHRoaXMuem9vbSlbMF0sIHRoaXMuYmJQY2Iuc2l6ZSh0aGlzLnpvb20pWzFdKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGFkc3R5bGUgb2YgdGhpcy5tYXBQYWRzLmtleXMoKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5ID0gdGhpcy5tYXBTdHlsZXMuZ2V0KHBhZHN0eWxlKTtcclxuICAgICAgICAgICAgY29uc3QgcGFkc2V0ID0gdGhpcy5tYXBQYWRzLmdldChwYWRzdHlsZSk7XHJcbiAgICAgICAgICAgIGlmIChzdHkgJiYgcGFkc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdyA9IHN0eS53aWR0aCAqIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoID0gc3R5LmhlaWdodCAqIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBhZCBvZiBwYWRzZXQudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5LmZvcm0gPT0gJ1InIHx8IHN0eS5mb3JtID09ICdPJyB8fCBzdHkuZm9ybSA9PSAnUm91bmRSZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1ggKiB0aGlzLnpvb20gLSBzdyAvIDIuMCArIHRoaXMubW91c2VPZmZYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1kgKiB0aGlzLnpvb20gLSBzaCAvIDIuMCArIHRoaXMubW91c2VPZmZZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3csIHNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0eS5mb3JtID09ICdDJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZC5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3cgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3cgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWQucG9zWCAqIHRoaXMuem9vbSAtIHN3IC8gMi4wICsgdGhpcy5tb3VzZU9mZlgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWQucG9zWSAqIHRoaXMuem9vbSAtIHNoIC8gMi4wICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzdHkud2lkdGggKiB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZHJhdyBxdWF0c2NoICR7c3R5LmZvcm19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gZm9yIHBhZHN0eWxlXHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2VsZWN0aW9uQ3Jvc3MoZXMpXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncHVycGxlJztcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBsZXQgY3NpemUgPSAuNTtcclxuICAgICAgICBmb3IoY29uc3QgbmVhciBvZiB0aGlzLm5lYXJlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKChuZWFyWzBdLnBvc1gtY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIG5lYXJbMF0ucG9zWSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKChuZWFyWzBdLnBvc1grY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIG5lYXJbMF0ucG9zWSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKG5lYXJbMF0ucG9zWCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCAobmVhclswXS5wb3NZK2NzaXplKSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKG5lYXJbMF0ucG9zWCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCAobmVhclswXS5wb3NZLWNzaXplKSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5lYXJlc3Q6JHtuZWFyWzBdLnBvc1h9LCR7bmVhclswXS5wb3NZfSAgZGlzdDoke01hdGguc3FydChuZWFyWzFdKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2VsZWN0aW9uIGxvd2VyIGxlZnQgPSB6ZXJvIGthbmRpZGF0ZVxyXG4gICAgICAgIGxldCB6ZXJvID0gWzAsMF07XHJcbiAgICAgICAgaWYodGhpcy5iYlNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBjc2l6ZSA9IDIgKiB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHplcm8gPSB0aGlzLmJiU2VsZWN0aW9uLnplcm8odGhpcy56b29tKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh6ZXJvWzBdIC1jc2l6ZSArIHRoaXMubW91c2VPZmZYLCB6ZXJvWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0tY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh6ZXJvWzBdICsgdGhpcy5tb3VzZU9mZlgsICAgICB6ZXJvWzFdK2NzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRyYXcgb3JpZ2luXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIHplcm8gPSB0aGlzLmJiWmVyby5jZW50ZXIodGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oLWNzaXplICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oK2NzaXplICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5tb3VzZU9mZlgsICAgICAgIC1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZU9mZlgsICAgICAgICtjc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyB6ZXJvXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIHplcm8gPSB0aGlzLmJiWmVyby56ZXJvKHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gLWNzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gK2NzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0tY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0rY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBkcmF3IHNlbGVjdGlvblJlY3RhbmdsZVxyXG4gICAgICAgIGlmKHRoaXMubW91c2VTZWxlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncHVycGxlJztcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLm1vdXNlU3RhcnRYICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU3RhcnRZICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTZWxlY3RYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTdGFydFkgICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVNlbGVjdFggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVNlbGVjdFkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlU3RhcnRYICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU2VsZWN0WSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTdGFydFkgICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuL3BhcnNlclwiO1xyXG5pbXBvcnQgeyBQQ0IgfSBmcm9tIFwiLi9wY2JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXJHZXJiZXIgZXh0ZW5kcyBQYXJzZXIge1xyXG4gICAgcmVOdW1Gb3JtYXQgPSAvXiVGU0xBWChbMC05XSkoWzAtOV0pWShbMC05XSkoWzAtOV0pWypdJS87XHJcbiAgICByZU1hdGNoUGFkID0gL14oJUFEKShEWzAtOV0rKShbQS1aYS16XSspWyxdKFstMC05Ll0rKVtYXT8oWy0wLTkuXSspP1tYXT8oWy0wLTkuXSspPy87XHJcbiAgICByZU1hdGNoUGFkQ29vcmRJbml0ID0gL14oW0RHXVswLTldKylbKl0vO1xyXG4gICAgcmVNYXRjaFBhZENvb3JkID0gL15YKFstXT8pKFswLTldKylZKFstXT8pKFswLTldKylEKFswLTldKylbKl0vO1xyXG4gICAgX2NhbmNlbCA9IGZhbHNlO1xyXG4gICAgZmxvYXRGcmFjdHMgPSAxO1xyXG4gICAgZmxvYXREZXppcyA9IDE7XHJcbiAgICBsYXN0UGFkID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwY2I6IFBDQikge1xyXG4gICAgICAgIHN1cGVyKHBjYik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlRmlsZShmaWxlOiBGaWxlKTpQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgZmlsZS5hcnJheUJ1ZmZlcigpLnRoZW4oKGJ1ZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlCdWZmZXJUb1N0cmluZyhidWYsICdVVEYtOCcsICh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NHZXJiZXJUZXh0KHRleHQpLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYW5jZWwgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByb2Nlc3NHZXJiZXJUZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZSBsaW5lIGVuZHMuLi5cclxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHIvZywgJycpOyAvLyByZW1vdmUgd2luZG93cyB0cmFzaFxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lTnIgPSAxO1xyXG4gICAgICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgbGluZU5yKys7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXIoJHtsaW5lTnJ9LyR7bGluZXMubGVuZ3RofSk6IGApO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzR2VyYmVyTGluZShsaW5lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2Nlc3NDQikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ0IobGluZU5yICogMTAwIC8gbGluZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IC8vIGZvclxyXG5cclxuICAgICAgICB0aGlzLnBjYi5yZXRyZWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgcHJvY2Vzc0dlcmJlckxpbmUobGluZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBsaW5lID0gbGluZS5yZXBsYWNlKC9cXG4vZywnPGJyPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFphaGxlbmZvcm1hdCBpbmZvIGxpbmUgXCIlRlNMQVgzNFkzNColXCJcclxuICAgICAgICAgICAgICAgIC8vICAgJUZTTEFYMjVZMjUqJSBDb29yZGluYXRlIGZvcm1hdCBzcGVjaWZpY2F0aW9uOlxyXG4gICAgICAgICAgICAgICAgLy8gICBDb29yZGluYXRlcyBmb3JtYXQgaXMgMi41OlxyXG4gICAgICAgICAgICAgICAgLy8gICAyIGRpZ2l0cyBpbiB0aGUgaW50ZWdlciBwYXJ0XHJcbiAgICAgICAgICAgICAgICAvLyAgIDUgZGlnaXRzIGluIHRoZSBmcmFjdGlvbmFsIHBhcnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTnVtRm9ybWF0ID0gdGhpcy5yZU51bUZvcm1hdC5leGVjKGxpbmUpOyAvL2xpbmUubWF0Y2goKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaE51bUZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTnVtRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0RGV6aXMgPSBwYXJzZUludChtYXRjaE51bUZvcm1hdFsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdEZyYWN0cyA9IHBhcnNlSW50KG1hdGNoTnVtRm9ybWF0WzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2VyYmVyOiBmbG9hdCBkaWdpdHMgPSAke3RoaXMuZmxvYXREZXppc30gJHt0aGlzLmZsb2F0RnJhY3RzfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBwYWQgZGVmaW5pdGlvbnNcclxuICAgICAgICAgICAgICAgIC8vICVBREQyMVIsMC42MDAwMDBYMS4wNTAwMDAqJVxyXG4gICAgICAgICAgICAgICAgLy8gJUFERDEwUm91bmRSZWN0LDAuMTIwMDAwIFggLTAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIFggMC42ODAwMDAgWCAtMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICBYIC0wLjY4MDAwMCBYIDAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgWCAtMC42ODAwMDAgWCAwLjE4MDAwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBYIDAuNjgwMDAwIFggMColXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFBhZCA9IHRoaXMucmVNYXRjaFBhZC5leGVjKGxpbmUpOyAvLyBsaW5lLm1hdGNoKCk7Ly8vKTtcclxuICAgICAgICAgICAgICAgIC8vIFdlbm4gXCJDXCIgZGFubiBnaWJ0cyBudXIgZWluZSBjb29yZFxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hQYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZHNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZHNGaWVsZC5pbm5lckhUTUwgKz0gYCR7bWF0Y2hQYWRbMl19ICR7bWF0Y2hQYWRbM119ICR7bWF0Y2hQYWRbNF19ICR7bWF0Y2hQYWRbNV19PGJyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZFszXSA9PSAnUm91bmRSZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBraWNhZCBtYWNybyBzY2hudWxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBjYi5hZGRQYWRTdHlsZShtYXRjaFBhZFsyXSwgbWF0Y2hQYWRbM10sIE1hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hQYWRbNV0pKSwgTWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs2XSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdlcmJlcjogc3R5bGUgJHttYXRjaFBhZFsyXX0sJHttYXRjaFBhZFszXX0sICR7TWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs1XSkpfSwgJHtNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzZdKSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wY2IuYWRkUGFkU3R5bGUobWF0Y2hQYWRbMl0sIG1hdGNoUGFkWzNdLCBwYXJzZUZsb2F0KG1hdGNoUGFkWzRdKSwgcGFyc2VGbG9hdChtYXRjaFBhZFs1XSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyOiBzdHlsZSAke21hdGNoUGFkWzJdfSwke21hdGNoUGFkWzNdfSwgJHtwYXJzZUZsb2F0KG1hdGNoUGFkWzRdKX0sICR7cGFyc2VGbG9hdChtYXRjaFBhZFs1XSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIER4eCogY29tbWFuZCAtIHNob3VsZCBiZSBwYWQgZHJhd1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hQYWRDb29yZEluaXQgPSB0aGlzLnJlTWF0Y2hQYWRDb29yZEluaXQuZXhlYyhsaW5lKTsgLy9saW5lLm1hdGNoKCk7Ly8vKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoUGFkQ29vcmRJbml0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWQgPSBtYXRjaFBhZENvb3JkSW5pdFsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGEgcGFkIGxpbmU6IFwiWDM3OTk4NFk5NjM5MzBEMDMqXCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoUGFkQ29vcmQgPSB0aGlzLnJlTWF0Y2hQYWRDb29yZC5leGVjKGxpbmUpOyAvLyBsaW5lLm1hdGNoKCk7Ly8vKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdFBhZC5zdGFydHNXaXRoKCdEJykpIHsgLy8gaWdub3JlIEczNiBvciBzbyBjb21tYW5kc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgYW5kIHJldHVybiAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaFBhZENvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN4ID0gbWF0Y2hQYWRDb29yZFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN5ID0gbWF0Y2hQYWRDb29yZFs0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5mbG9hdERlemlzICsgdGhpcy5mbG9hdEZyYWN0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlsbCBmcmVhaydzIGxlYWRpbmcgemVyb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN4Lmxlbmd0aCA8IGxlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ggPSBgMCR7c3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3kubGVuZ3RoIDwgbGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeSA9IGAwJHtzeX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYSBmcmVhayduIGZsb2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmeCA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ5ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeCA9IGAke3N4LnN1YnN0cmluZygwLCB0aGlzLmZsb2F0RGV6aXMpfS4ke3N4LnN1YnN0cmluZyh0aGlzLmZsb2F0RGV6aXMpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5ID0gYCR7c3kuc3Vic3RyaW5nKDAsIHRoaXMuZmxvYXREZXppcyl9LiR7c3kuc3Vic3RyaW5nKHRoaXMuZmxvYXREZXppcyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnggPSBwYXJzZUZsb2F0KHN4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnkgPSBwYXJzZUZsb2F0KHN5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmRbMV0gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeCA9IGZ4ICogLTEuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRDb29yZFszXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ5ID0gZnkgKiAtMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeSA9IGZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29yZHNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZHNGaWVsZC5pbm5lckhUTUwgKz0gYCR7dGhpcy5sYXN0UGFkfTogIHg6JHtmeH0geToke2Z5fSA8YnI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBjYi5hZGRQYWQodGhpcy5sYXN0UGFkLCBmeCwgZnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyOiBwYWQgJHtsYXN0UGFkfSwgJHtmeH0sICR7Znl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlnbm9yaW5nICR7dGhpcy5sYXN0UGFkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYobGluZU5yID4gMTUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBicmVhazsgLy8gZm9yIHRlc3RpbmcgISEhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBjYi5jZW50ZXIoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCAwKTsgLy8gdGhpcyBlbmFibGVzIHRoZSBwcm9ncmVzc2JhciAvIFVJIHVwZGF0ZXMgIVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBmb3VuZCBvbiBzZSB3ZWIuLi5cclxuXHJcbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyLCBlbmNvZGluZywgY2FsbGJhY2spIHtcclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pO1xyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKGV2dCkgPT4geyBpZihldnQudGFyZ2V0KSBjYWxsYmFjayhldnQudGFyZ2V0LnJlc3VsdCk7IH07XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iLCBlbmNvZGluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXlCdWZmZXIoc3RyaW5nLCBlbmNvZGluZywgY2FsbGJhY2spIHtcclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3N0cmluZ10sIHsgdHlwZTogJ3RleHQvcGxhaW47Y2hhcnNldD0nICsgZW5jb2RpbmcgfSk7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZ0KSA9PiB7IGlmKGV2dC50YXJnZXQpIGNhbGxiYWNrKGV2dC50YXJnZXQucmVzdWx0KTsgfTtcclxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQQ0IgfSBmcm9tICcuL3BjYic7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIHB1YmxpYyBwcm9jZXNzQ0I6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBwYWRzRmllbGQ6IEhUTUxFbGVtZW50fG51bGw7XHJcbiAgICBwdWJsaWMgY29vcmRzRmllbGQ6IEhUTUxFbGVtZW50fG51bGw7XHJcblxyXG4gICAgcHVibGljIHBjYjogUENCO1xyXG4gICAgY29uc3RydWN0b3IocGNiOiBQQ0IpIHtcclxuICAgICAgICB0aGlzLnBjYiA9IHBjYjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2VGaWxlPyhmaWxlOiBGaWxlKTpQcm9taXNlPHZvaWQ+OyAvLyB2aXJ0dWFsICFcclxuICAgIHB1YmxpYyBjYW5jZWw/KCk6IHZvaWQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LkhBU0hfUkVGX2Y3YzEyMmE3ZTAyMTUwMTYuanMubWFwIn0=
