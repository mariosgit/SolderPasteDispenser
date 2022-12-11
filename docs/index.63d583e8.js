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


/**
 * Marlin: Device specific implementation.
*/ function $1e92455d8718f53e$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


var $9baf13ce784079cb$exports = {};
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


// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream

class $f0fdef5ffc0f8d37$export$8215d14a63d9fb10 {
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
    constructor(){
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "inputLast", "");
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "inputQueue", []);
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
}




// import {kdTree, kdTreeObject} from './kdTree';
class $65795f14da45d35b$var$BoundingBox {
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
    constructor(){
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "minx", 99999);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "miny", 99999);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "maxx", -99999);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "maxy", -99999);
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
    asTuple() {
        return [
            this.posX,
            this.posY
        ];
    }
    constructor(style, x, y){
        this.posX = x;
        this.posY = y;
        this.style = style;
    }
}
class $65795f14da45d35b$export$bdf465113f979d8f {
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
                for (const near1 of this.nearest)bbNewSelection.updateFromPad(near1[0]);
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
        // console.log(event.deltaY);
        if (event.deltaY > 0) this.zoom *= 1.1;
        else this.zoom *= 0.9;
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
    constructor(){
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "fileName", "");
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "mouseFlag", false);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "mouseStartX", 0);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "mouseStartY", 0);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "mouseOffX", 0);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "mouseOffY", 0);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "zoom", 5.0);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "nearest", []);
        // super();
        this.mapStyles = new Map();
        this.mapPads = new Map();
        this.bbPcb = new $65795f14da45d35b$var$BoundingBox();
        this.bbZero = new $65795f14da45d35b$var$BoundingBox();
        this.bbSelection = new $65795f14da45d35b$var$BoundingBox();
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
                        this.serialWriteWait("G0 Z3").then(()=>{
                            this.serialWriteWait("G0 E10").then(()=>{
                                this.serialWriteWait("G0 Z0").then(()=>{
                                    this.serialWriteWait("G0 Z3").then(()=>{
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
    /**
     * Creates some buttons for Marlin specific actions...
     */ initHtml() {
        if (this.marlinDiv) {
            this.marlinDiv.innerHTML = `
            <div class="w3-border w3-border-dark-grey">
            <div id="marlinStatus"></div>
            <div id="marlinPosition" class="w3-tiny"></div>
            <div id="marlinCommands" class="w3-tiny w3-hide">
            <p>
            <button id="marlinHome" class="w3-button w3-round w3-light-grey">home</button>
            <button id="marlinPos"  class="w3-button w3-round w3-light-grey">pos?</button>
            <button id="marlinRel"  class="w3-button w3-round w3-light-grey">rel</button>
            <button id="marlinAbs"  class="w3-button w3-round w3-light-grey">abs</button>
            <button id="marlinCold" class="w3-button w3-round w3-light-grey">cold</button>
            </p>
            <p>
            <button id="marlinXP" class="w3-button w3-round w3-light-grey">x+</button>
            <button id="marlinXM" class="w3-button w3-round w3-light-grey">x-</button>
            <button id="marlinYP" class="w3-button w3-round w3-light-grey">y+</button>
            <button id="marlinYM" class="w3-button w3-round w3-light-grey">y-</button>
            <button id="marlinZP" class="w3-button w3-round w3-light-grey">z+</button>
            <button id="marlinZM" class="w3-button w3-round w3-light-grey">z-</button>
            </p>
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
            const marlinBtnXP = document.getElementById("marlinXP");
            if (marlinBtnXP) marlinBtnXP.onclick = this.onBtnXP.bind(this);
            const marlinBtnXM = document.getElementById("marlinXM");
            if (marlinBtnXM) marlinBtnXM.onclick = this.onBtnXM.bind(this);
            const marlinBtnYP = document.getElementById("marlinYP");
            if (marlinBtnYP) marlinBtnYP.onclick = this.onBtnYP.bind(this);
            const marlinBtnYM = document.getElementById("marlinYM");
            if (marlinBtnYM) marlinBtnYM.onclick = this.onBtnYM.bind(this);
            const marlinBtnZP = document.getElementById("marlinZP");
            if (marlinBtnZP) marlinBtnZP.onclick = this.onBtnZP.bind(this);
            const marlinBtnZM = document.getElementById("marlinZM");
            if (marlinBtnZM) marlinBtnZM.onclick = this.onBtnZM.bind(this);
            const marlinBtnEP = document.getElementById("marlinEP");
            if (marlinBtnEP) marlinBtnEP.onclick = this.onBtnEP.bind(this);
            const marlinBtnEM = document.getElementById("marlinEM");
            if (marlinBtnEM) marlinBtnEM.onclick = this.onBtnEM.bind(this);
        }
    }
    constructor(){
        super();
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "zero", [
            0,
            0
        ]);
        this.marlinDiv = document.getElementById("Marlin");
        this.initHtml();
    }
}




class $7a31232c24806873$export$7acfa6ed01010e37 {
    constructor(pcb){
        this.pcb = pcb;
    }
}


class $c7f23bed5a4fa419$export$fc5d4ca282e021b1 extends (0, $7a31232c24806873$export$7acfa6ed01010e37) {
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
    constructor(pcb){
        super(pcb);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "reNumFormat", /^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "reMatchPad", /^(%AD)(D[0-9]+)([A-Za-z]+)[,]([-0-9.]+)[X]?([-0-9.]+)?[X]?([-0-9.]+)?/);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "reMatchPadCoordInit", /^([DG][0-9]+)[*]/);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "reMatchPadCoord", /^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "_cancel", false);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "floatFracts", 1);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "floatDezis", 1);
        (0, $1e92455d8718f53e$export$2e2bcd8739ae039)(this, "lastPad", "");
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
function $cc5081ad433ea591$var$init() {
    if ($cc5081ad433ea591$var$uploadButton && $cc5081ad433ea591$var$menuSetZero && $cc5081ad433ea591$var$menuMoveTo && $cc5081ad433ea591$var$menuMoveAll && $cc5081ad433ea591$var$menuBlob && $cc5081ad433ea591$var$progressCancel && $cc5081ad433ea591$var$padsField && $cc5081ad433ea591$var$coordsField && $cc5081ad433ea591$var$body && $cc5081ad433ea591$var$canvas && $cc5081ad433ea591$var$footer) {
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
            console.log("File(s) in drop zone");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFFLE1BQU0sTUFBTSxDQUFDLEdBQUUsU0FBUyxNQUFNLENBQUM7b0JBQUcsRUFBRSxJQUFJLElBQUcsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLElBQUksR0FBQyxDQUFDO29CQUFDLElBQUksSUFBRSxJQUFFLEVBQUUsS0FBSyxHQUFDLElBQUUsS0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxHQUFDLEVBQUUsRUFBQyxJQUFFLElBQUUsRUFBRSxNQUFNLEdBQUMsSUFBRSxLQUFHLEdBQUc7b0JBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUcsRUFBRSxPQUFPLElBQUcsSUFBSTtnQkFBQTtZQUFDO1NBQUUsR0FBRSxDQUFDO0lBQUE7SUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUcsQ0FBRSxDQUFBLGFBQWEsQ0FBQSxHQUFHLE1BQU0sSUFBSSxVQUFVLHFDQUFvQztJQUFBO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSTtZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTtZQUFDLEVBQUUsVUFBVSxHQUFDLEVBQUUsVUFBVSxJQUFFLENBQUMsR0FBRSxFQUFFLFlBQVksR0FBQyxDQUFDLEdBQUUsV0FBVSxLQUFJLENBQUEsRUFBRSxRQUFRLEdBQUMsQ0FBQyxDQUFBLEdBQUcsT0FBTyxjQUFjLENBQUMsR0FBRSxFQUFFLEdBQUcsRUFBQyxFQUFFO1FBQUE7SUFBQztJQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLE9BQU8sS0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFDLElBQUcsS0FBRyxFQUFFLEdBQUUsSUFBRyxDQUFDO0lBQUE7SUFBQyxJQUFJLElBQUUsV0FBVTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsSUFBSSxFQUFDLElBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7UUFBQTtRQUFDLE9BQU8sRUFBRSxHQUFFO1lBQUM7Z0JBQUMsS0FBSTtnQkFBTyxPQUFNLFNBQVMsQ0FBQyxFQUFDO29CQUFDLElBQUksSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJO29CQUFDLEVBQUUsSUFBSSxJQUFHLEVBQUUsU0FBUyxJQUFHLEVBQUUsV0FBVyxHQUFDLEdBQUUsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUcsRUFBRSxNQUFNLENBQUMsR0FBRSxJQUFHLEVBQUUsTUFBTSxJQUFHLEVBQUUsT0FBTyxFQUFFO2dCQUFBO1lBQUM7U0FBRSxHQUFFLENBQUM7SUFBQSxLQUFJLElBQUUsV0FBVTtRQUFDLFNBQVMsSUFBRztZQUFDLElBQUksSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsTUFBTSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLFVBQVUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsZ0JBQWdCO1lBQUMsRUFBRSxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJO1FBQUE7UUFBQyxPQUFPLEVBQUUsR0FBRTtZQUFDO2dCQUFDLEtBQUk7Z0JBQWMsT0FBTSxTQUFTLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUksSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBRSxFQUFFLEVBQUMsSUFBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxLQUFLLEVBQUMsS0FBRyxFQUFFO3dCQUFDLElBQUksSUFBRSxJQUFFLEtBQUc7d0JBQUUsRUFBRSxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsTUFBTSxJQUFFLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxNQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxFQUFDLEtBQUcsRUFBRTt3QkFBQyxJQUFJLElBQUUsSUFBRSxLQUFHO3dCQUFFLEVBQUUsSUFBSSxDQUFDLElBQUUsSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxLQUFLLEVBQUMsS0FBRyxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEtBQUssRUFBQyxFQUFFO29CQUFDO29CQUFDLElBQUksQ0FBQyxLQUFLLEdBQUM7Z0JBQUM7WUFBQztZQUFFO2dCQUFDLEtBQUk7Z0JBQVcsT0FBTSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJO29CQUFDLEVBQUUsSUFBSSxJQUFHLEVBQUUsSUFBSSxHQUFDLEdBQUUsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLFFBQVEsQ0FBQyxLQUFJLEdBQUUsR0FBRztvQkFBQyxJQUFJLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxLQUFHLElBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFFLEdBQUU7b0JBQUksSUFBSSxJQUFJLElBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxN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QUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHO1FBRXJCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRztRQUN2QixJQUFJLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUztRQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTO1FBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1FBQ2YsVUFBVTtRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMs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LHFCQUFxQixHQUFHLE1BQU0sRUFBRSwrQkFBK0I7WUFDaEYsNEJBQU0sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdEMsNkJBQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsYUFBYSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0FBQ0w7QUFFQSxTQUFTLGdCQUFnQixDQUFDLG9CQUFvQjtBQUU5QyxPQUFPLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFRO0lBQ3ZDLGlDQUFpQztJQUNqQyxXQUFXLE1BQU07QUFDckIiLCJzb3VyY2VzIjpbInNyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtY29vcmRzL2Rpc3QvaW5kZXguanMiLCJzcmMvZGV2aWNlTWFybGluLnRzIiwibm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX2RlZmluZV9wcm9wZXJ0eS5tanMiLCJub2RlX21vZHVsZXMva2QtdHJlZS1qYXZhc2NyaXB0L2tkVHJlZS5qcyIsInNyYy9kZXZpY2UudHMiLCJzcmMvcGNiLnRzIiwic3JjL3BhcnNlckdlcmJlci50cyIsInNyYy9wYXJzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgTW91c2UgfSBmcm9tICdjYW52YXMtY29vcmRzJyAvLyBodHRwczovL2dpdGh1Yi5jb20vQ29kZURyYWtlbi9jYW52YXMtY29vcmRzXHJcbmltcG9ydCB7IERldmljZSB9IGZyb20gJy4vZGV2aWNlJztcclxuaW1wb3J0IHsgTWFybGluIH0gZnJvbSAnLi9kZXZpY2VNYXJsaW4nO1xyXG5pbXBvcnQgeyBQQ0IsIFBhZCwgUGFkU3R5bGUgfSBmcm9tICcuL3BjYic7XHJcbmltcG9ydCB7IFBhcnNlckdlcmJlciB9IGZyb20gJy4vcGFyc2VyR2VyYmVyJztcclxuXHJcbi8vIHNpbXBsZXIgISEhIGNvbnN0IGluZm9Ecm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjaW5mb0Ryb3BEb3duJyk7XHJcblxyXG5jb25zdCBib2R5OiBIVE1MQm9keUVsZW1lbnQgfCBudWxsID0gPEhUTUxCb2R5RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuY29uc3QgbWVzc2FnZUVsZW06IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlRWxlbVwiKTtcclxuY29uc3QgdXBsb2FkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkQnV0dG9uXCIpO1xyXG5jb25zdCBwYWRzRmllbGQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWRzRmllbGRcIik7XHJcbmNvbnN0IGNvb3JkczogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNvb3Jkc1wiKTtcclxuY29uc3QgY29vcmRzRmllbGQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29yZHNGaWVsZFwiKTtcclxuY29uc3QgZHJvcFpvbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcFpvbmVcIik7XHJcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuY29uc3QgZGVidWc6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z1wiKTtcclxuY29uc3QgcHJvZ3Jlc3M6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcclxuY29uc3QgcHJvZ3Jlc3NiYXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzYmFyJyk7XHJcbmNvbnN0IGNvbnRleHRNZW51OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZXh0TWVudScpO1xyXG5jb25zdCBwcm9ncmVzc0NhbmNlbDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NDYW5jZWwnKTtcclxuXHJcbmNvbnN0IG1lbnVTZXRaZXJvOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVNldFplcm9cIik7XHJcbmNvbnN0IG1lbnVNb3ZlVG86IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51TW92ZVRvXCIpO1xyXG5jb25zdCBtZW51TW92ZUFsbDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVNb3ZlQWxsXCIpO1xyXG5jb25zdCBtZW51QmxvYjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCbG9iXCIpO1xyXG5cclxuXHJcbmNvbnN0IG1haW46IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG5jb25zdCBvcGVuU2lkZWJhckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5TaWRlYmFyXCIpO1xyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XHJcblxyXG5sZXQgbWVzc2FnZUNsZWFyVGltZW91dDpudW1iZXJ8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5sZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcclxubGV0IG1vdXNlOiBNb3VzZSwgZ3JpZDogR3JpZDtcclxubGV0IHBjYjogUENCO1xyXG5cclxubGV0IGRldmljZSA9IG5ldyBNYXJsaW4oKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAodXBsb2FkQnV0dG9uICYmIG1lbnVTZXRaZXJvICYmIG1lbnVNb3ZlVG8gJiYgbWVudU1vdmVBbGwgJiYgbWVudUJsb2IgJiYgcHJvZ3Jlc3NDYW5jZWwgJiYgcGFkc0ZpZWxkICYmIGNvb3Jkc0ZpZWxkICYmIGJvZHkgJiYgY2FudmFzICYmIGZvb3Rlcikge1xyXG4gICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VNb3ZlKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZURvd24oZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZVVwKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlT3V0KGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlV2hlZWwoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB1cGxvYWRGaWxlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdXBsb2FkRmlsZUVsZS50eXBlID0gXCJmaWxlXCI7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGVFbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgdXBsb2FkRmlsZUVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldjogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHVzZXIgaGFkIHNlbGVjdGVkIGEgZmlsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHVwbG9hZEZpbGVFbGUuZmlsZXMgJiYgdXBsb2FkRmlsZUVsZS5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSB1cGxvYWRGaWxlRWxlLmZpbGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpbGU6ICR7ZmlsZS5uYW1lfSBzaXplOiR7ZmlsZS5zaXplfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzR2VyYmVyRmlsZShmaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwbGVhc2UgY2hvb3NlIGEgZmlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVTZXRaZXJvLm9uY2xpY2sgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBjYi5zZXRaZXJvKCk7XHJcbiAgICAgICAgICAgIGRldmljZS5zZXRaZXJvKHBjYi5nZXRaZXJvKCkpOyAvLyBkZXZpY2UgbXVzdCBzdWJzdHJhY3QgXCJ6ZXJvXCIgZnJvbSBhbGwgY29vcmRzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51TW92ZVRvLm9uY2xpY2sgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgY29vcmRzICEhIVxyXG4gICAgICAgICAgICAvLyAhISEgbmVlZCB0byBiZSByZWxhdGl2ZSB0byB6ZXJvICEhISB1dXVoaGhcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBwYWRzID0gcGNiLmdldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChwYWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBwYWQ6IFBhZCA9IHBhZHNbMF07XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwYWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgZGV2aWNlLm1vdmVUbyhwYWQucG9zWCwgcGFkLnBvc1ksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBjYi5nZXRTZWxlY3RlZFplcm8oKTsgLy8gbG93ZXIgbGVmdCBvZiBzZWxlY3Rpb25cclxuICAgICAgICAgICAgZGV2aWNlLm1vdmVUbyhwb3NbMF0sIHBvc1sxXSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51TW92ZUFsbC5vbmNsaWNrID0gKGV2ZW50Ok1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcGxpc3QgPSBwY2IuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICAgICAgbGV0IHB6ZXJvID0gcGNiLmdldFNlbGVjdGVkWmVybygpO1xyXG4gICAgICAgICAgICBkZXZpY2UubW92ZVRvQWxsKHBsaXN0LCBwemVybyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnVCbG9iLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGV2aWNlLmJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHkub25kcm9wID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgICAgICAgICAgaWYgKGV2LmRhdGFUcmFuc2ZlciAmJiBldi5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXHJcbiAgICAgICAgICAgICAgICBbLi4uZXYuZGF0YVRyYW5zZmVyLml0ZW1zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZHJvcHBlZCBpdGVtcyBhcmVuJ3QgZmlsZXMsIHJlamVjdCB0aGVtXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKApiBpdGVtWyR7aX1dLm5hbWUgPSAke2ZpbGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVc2UgRGF0YVRyYW5zZmVyIGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcclxuICAgICAgICAgICAgICAgIFsuLi5ldi5kYXRhVHJhbnNmZXIuZmlsZXNdLmZvckVhY2goKGZpbGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4oCmIGZpbGVbJHtpfV0ubmFtZSA9ICR7ZmlsZS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzR2VyYmVyRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5Lm9uZHJhZ292ZXIgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUocykgaW4gZHJvcCB6b25lJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IgKFByZXZlbnQgZmlsZSBmcm9tIGJlaW5nIG9wZW5lZClcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbnZhcy5vbmNvbnRleHRtZW51ID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmNvbnRleHRtZW51Jyxldik7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuc3R5bGUubGVmdCA9IGAke2V2LnBhZ2VYfXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LnN0eWxlLnRvcCA9IGAke2V2LnBhZ2VZfXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMub25tb3VzZXVwID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHBjYiA9IG5ldyBQQ0IoKTtcclxuICAgICAgICAgICAgcGNiLnNldENhbnZhcyhjdHgsIGNhbnZhcyk7XHJcblxyXG4gICAgICAgICAgICBtb3VzZSA9IG5ldyBNb3VzZShjdHgsIGNhbnZhcyk7XHJcbiAgICAgICAgICAgIG1vdXNlLnRyYWNrKCk7XHJcbiAgICAgICAgICAgIGdyaWQgPSBuZXcgR3JpZCgpO1xyXG4gICAgICAgICAgICBncmlkLnN0ZXAgPSAyO1xyXG4gICAgICAgICAgICBncmlkLmxpbmVXaWR0aCA9IDAuMDM7XHJcbiAgICAgICAgICAgIGdyaWQuYm9sZFdpZHRoID0gMC4wNTtcclxuICAgICAgICAgICAgZ3JpZC5jcmVhdGVMaW5lcyhjYW52YXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignbWlzc2luZyBodG1sIGVsZW1lbnRzICEnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVzc2FnZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmKG1lc3NhZ2VDbGVhclRpbWVvdXQpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG1lc3NhZ2VDbGVhclRpbWVvdXQpO1xyXG4gICAgfVxyXG4gICAgaWYobWVzc2FnZUVsZW0pIHtcclxuICAgICAgICBtZXNzYWdlRWxlbS5pbm5lckhUTUwgPSBgJHt0ZXh0fWA7XHJcbiAgICAgICAgbWVzc2FnZUNsZWFyVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KG1lc3NhZ2VDbGVhciwgMTAwMDApO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1lc3NhZ2VDbGVhcigpIHtcclxuICAgIG1lc3NhZ2VDbGVhclRpbWVvdXQgPSB1bmRlZmluZWQ7XHJcbiAgICBpZihtZXNzYWdlRWxlbSkge1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICBpZiAoY2FudmFzICYmIGN0eCkge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuXHJcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybShcclxuICAgICAgICAgICAgcGNiID8gcGNiLnpvb20gOiAxLCAwLFxyXG4gICAgICAgICAgICAwLCBwY2IgPyBwY2Iuem9vbSA6IDEsXHJcbiAgICAgICAgICAgIDAsIDApO1xyXG5cclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgLy8gZ3JpZC5kcmF3KGN0eCwgY2FudmFzKTtcclxuICAgICAgICAvLyBncmlkLnN0ZXAgPSBwY2I/MTAuMC9wY2Iuem9vbToxMC4wO1xyXG4gICAgICAgIC8vIGdyaWQuY3JlYXRlTGluZXMoY2FudmFzKTtcclxuICAgICAgICBncmlkLmxpbmVzLmZvckVhY2gobGluZSA9PiBsaW5lLmRyYXcoY3R4KSlcclxuICAgICAgICBtb3VzZS5kcmF3KCk7XHJcblxyXG5cclxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKFxyXG4gICAgICAgICAgICAxLCAwLFxyXG4gICAgICAgICAgICAwLCAtMSxcclxuICAgICAgICAgICAgMCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIGN0eC5zY2FsZSgxLC0xKTsgLy8gZmxpcCBkaXNwbGF5IHlcclxuXHJcbiAgICAgICAgaWYgKHBjYikge1xyXG4gICAgICAgICAgICBwY2IuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0dlcmJlckZpbGUoZmlsZTogRmlsZSkge1xyXG4gICAgaWYgKHBhZHNGaWVsZCAmJiBjb29yZHNGaWVsZCAmJiBjdHggJiYgY2FudmFzICYmIHByb2dyZXNzICYmIHByb2dyZXNzYmFyICYmIHByb2dyZXNzQ2FuY2VsICYmIGRyb3Bab25lKSB7IC8vIG1ha2VzIHR5cGVzY3JpcHQgaGFwcHkuLi5cclxuXHJcbiAgICAgICAgcGNiID0gbmV3IFBDQigpO1xyXG4gICAgICAgIHBjYi5zZXRDYW52YXMoY3R4LCBjYW52YXMpO1xyXG4gICAgICAgIGxldCBwYXJzZXIgPSBuZXcgUGFyc2VyR2VyYmVyKHBjYik7XHJcblxyXG4gICAgICAgIHBhZHNGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb29yZHNGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkcm9wWm9uZS5pbm5lclRleHQgPSBmaWxlLm5hbWU7XHJcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHBhcnNlci5wYWRzRmllbGQgPSBwYWRzRmllbGQ7XHJcbiAgICAgICAgcGFyc2VyLmNvb3Jkc0ZpZWxkID0gY29vcmRzRmllbGQ7XHJcbiAgICAgICAgcHJvZ3Jlc3NDYW5jZWwub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgcGFyc2VyLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZXIucHJvY2Vzc0NCID0gKHZhbHVlOm51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NiYXIpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLnN0eWxlLndpZHRoID0gYCR7dmFsdWV9JWA7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvZ3Jlc3M6JywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHBhcnNlci5wYXJzZUZpbGUoZmlsZSk7XHJcblxyXG4gICAgICAgIHBjYi56b29tVG9GaXQoW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0pO1xyXG5cclxuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZ2xvYmFsVGhpcy5hY2NvcmRpb25Ub2dnbGVyID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgICBpZiAoZWxlbS5jbGFzc05hbWUuaW5kZXhPZihcInczLXNob3dcIikgPT0gLTEgJiYgZWxlbS5jbGFzc05hbWUuaW5kZXhPZihcInczLWhpZGVcIikgPT0gLTEpIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgKz0gXCIgdzMtc2hvd1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbS5jbGFzc05hbWUuaW5kZXhPZihcInczLXNob3dcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKFwidzMtc2hvd1wiLCBcInczLWhpZGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKFwidzMtaGlkZVwiLCBcInczLXNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ2FjY29yZGlvblRvZ2dsZXIgbm8gZWxlbSB3aXRoIGlkOicsIGlkKTtcclxuICAgIH1cclxuICAgIGdsb2JhbFRoaXMucmVzaXplKCk7XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMub3BlblNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobWFpbiAmJiBkZWJ1ZyAmJiBvcGVuU2lkZWJhckJ1dHRvbikge1xyXG4gICAgICAgIG1haW4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjM1MHB4XCI7XHJcbiAgICAgICAgZGVidWcuc3R5bGUud2lkdGggPSBcIjM1MHB4XCI7XHJcbiAgICAgICAgZGVidWcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBvcGVuU2lkZWJhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5nbG9iYWxUaGlzLmNsb3NlU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGlmIChtYWluICYmIGRlYnVnICYmIG9wZW5TaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgZGVidWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG9wZW5TaWRlYmFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5nbG9iYWxUaGlzLnpvb21Ub0ZpdCA9ICgpID0+IHtcclxuICAgIGlmKHBjYiAmJiBjYW52YXMpIHtcclxuICAgICAgICBwY2Iuem9vbVRvRml0KFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdKTtcclxuICAgIH1cclxufVxyXG5cclxuZ2xvYmFsVGhpcy5yb3RhdGVSaWdodCA9ICgpID0+IHtcclxuICAgIGlmKHBjYiAmJiBjYW52YXMpIHtcclxuICAgICAgICAvLyBwY2Iuem9vbVRvRml0KFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdKTtcclxuICAgIH1cclxuICAgIG1lc3NhZ2UoJ23DvHNzdGUgbWEgZWluZXIgaW1wbGVtZW50aWVyZW4sIG5lJyk7XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMucmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhbnZhcyAmJiBoZWFkZXIgJiYgZm9vdGVyICYmIGRlYnVnICYmIGNvb3Jkcykge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0IC0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgbW91c2UuZHJhdygpO1xyXG4gICAgICAgIGdyaWQuZHJhdyhjdHgsIGNhbnZhcyk7XHJcblxyXG4gICAgICAgIC8vIGhlaWdodCBvZiBkZWJ1ZyBpcyBpbm5lckhlaWdodCAtIG1hcmdpbiB0b3AvYm90dG9tIG1vcmUgb3IgbGVzcyAtIGZvb3Rlci5oZWlnaHRcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBtYXJnaW4nLCBkZWJ1Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICAgIGxldCBkbWF4aGVpZ2h0ID0gaW5uZXJIZWlnaHQgLSBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBjYW52YXMuaGVpZ2h0ICsgaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIDE2O1xyXG4gICAgICAgIC8vIGRlYnVnLnN0eWxlLmhlaWdodCA9IGAke2RoZWlnaHR9cHhgOyAvLyAxNiBpcyBtYXJnaW5Ub3BcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBpbm5lciBoZWlnaHQnLCBpbm5lckhlaWdodCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZTogZGVidWcgaGVpZ2h0JywgZGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIGhlaWdodCBvZiBhbGwgb3RoZXIgZWxlbWVudHMgaW4gZGVidWdcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBkZWJ1Zy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgZWxlbTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+Y2hpbGQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGByZXNpemU6ICAgJHtjaGlsZC5pZH0gJHtlbGVtLmNsaWVudEhlaWdodH0gJHtlbGVtLmNsYXNzTmFtZX1gKTtcclxuICAgICAgICAgICAgaWYoZWxlbS5jbGFzc05hbWUuaW5kZXhPZigndzMtaGlkZScpICE9IC0xKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGhlaWdodCArPSBlbGVtLmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IGRlYnVnIGNvbnRlbnQgaGVpZ2h0JywgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gc28gZmFyIHNvIGdvb2RcclxuXHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGlzIHNob3duLCBzZXQgZGVidWcgc2l6ZSB0byBtYXhcclxuICAgICAgICAvLyBpZiBjb29yZHMgaXMgc2hvd24sIGdpdmUgaXQgYWxsIHRoZSByZXN0IG9mIHRoZSBzcGFjZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgY29vcmRzICcsIGNvb3Jkcy5jbGFzc05hbWUuaW5kZXhPZigndzMtaGlkZScpKTtcclxuICAgICAgICBpZihjb29yZHMuY2xhc3NOYW1lLmluZGV4T2YoJ3czLWhpZGUnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplIGNvb3JkcyBpcyBOT1QgdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBkZWJ1Zy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQrMTZ9cHhgO1xyXG4gICAgICAgICAgICBjb29yZHMuc3R5bGUuaGVpZ2h0ID0gYCR7MTZ9cHhgOyAvLyBlZ2FsID9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplIGNvb3JkcyBpcyB2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBjb29yZHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBkbyBub3QgY291bnQgY29vcmRzIHRvIGhpZ2h0XHJcbiAgICAgICAgICAgIGRlYnVnLnN0eWxlLmhlaWdodCA9IGAke2RtYXhoZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb29yZHMuc3R5bGUuaGVpZ2h0ID0gYCR7ZG1heGhlaWdodCAtIGhlaWdodCAtIDE2fXB4YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAodmFsKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgcmVzaXplOiAke3ZhbH1gKTtcclxuICAgIGdsb2JhbFRoaXMucmVzaXplKCk7XHJcbn0pXHJcbiIsIihmdW5jdGlvbiAoKSB7dmFyIGE9e307ZnVuY3Rpb24gZyh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gYyh0LGUpe2Zvcih2YXIgbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgcz1lW29dO3MuZW51bWVyYWJsZT1zLmVudW1lcmFibGV8fCExLHMuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHMmJihzLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLmtleSxzKX19ZnVuY3Rpb24gaCh0LGUsbyl7cmV0dXJuIGUmJmModC5wcm90b3R5cGUsZSksbyYmYyh0LG8pLHR9dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsbyl7dmFyIHM9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOlwiZ3JheVwiLGk9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOlwiMTZweCBNb25vc3BhY2VcIixyPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTowLG49YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOjA7Zyh0aGlzLHQpLHRoaXMueD1yLHRoaXMueT1uLHRoaXMuY3R4PWUsdGhpcy5jYW52YXM9byx0aGlzLmNvbG9yPXMsdGhpcy5mb250PWksdGhpcy5zZXRQb3M9dGhpcy5zZXRQb3MuYmluZCh0aGlzKX1yZXR1cm4gaCh0LFt7a2V5OlwidHJhY2tcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PSEoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0pfHxhcmd1bWVudHNbMF0sZT10aGlzLmNhbnZhcztyZXR1cm4gdD9lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLnNldFBvcyk6ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5zZXRQb3MpLHRoaXN9fSx7a2V5Olwic2V0UG9zXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIHRoaXMueD1NYXRoLmZsb29yKHQuY2xpZW50WC1lLmxlZnQpLHRoaXMueT1NYXRoLmZsb29yKHQuY2xpZW50WS1lLnRvcCksdGhpc319LHtrZXk6XCJkcmF3XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLngsZT10aGlzLnksbz10aGlzLmNhbnZhcyxzPXRoaXMuY3R4LGk9dGhpcy5mb250LHI9dGhpcy5jb2xvcixuPVwiWDogXCIuY29uY2F0KHQsXCIsIFk6IFwiKS5jb25jYXQoZSk7cy5zYXZlKCkscy5maWxsU3R5bGU9cixzLmZvbnQ9aTt2YXIgYT10PG8ud2lkdGgvMj8yMDotcy5tZWFzdXJlVGV4dChuKS53aWR0aC0yMCx2PWU8by5oZWlnaHQvMj8yNTotMTg7cmV0dXJuIHMuZmlsbFRleHQobix0aGlzLngrYSx0aGlzLnkrdikscy5yZXN0b3JlKCksdGhpc319XSksdH0oKTtmdW5jdGlvbiBkKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBmKHQsZSl7Zm9yKHZhciBpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBzPWVbaV07cy5lbnVtZXJhYmxlPXMuZW51bWVyYWJsZXx8ITEscy5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gcyYmKHMud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHMua2V5LHMpfX1mdW5jdGlvbiBlKHQsZSxpKXtyZXR1cm4gZSYmZih0LnByb3RvdHlwZSxlKSxpJiZmKHQsaSksdH12YXIgYj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxpLHMscixsLG4pe2QodGhpcyx0KSx0aGlzLmNvbG9yPWUsdGhpcy5saW5lV2lkdGg9aSx0aGlzLnN0YXJ0WD1zLHRoaXMuc3RhcnRZPXIsdGhpcy5lbmRYPWwsdGhpcy5lbmRZPW59cmV0dXJuIGUodCxbe2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNvbG9yLGk9dGhpcy5saW5lV2lkdGgscz10aGlzLnN0YXJ0WCxyPXRoaXMuc3RhcnRZLGw9dGhpcy5lbmRYLG49dGhpcy5lbmRZO3Quc2F2ZSgpLHQuYmVnaW5QYXRoKCksdC5zdHJva2VTdHlsZT1lLHQubGluZVdpZHRoPWksdC5tb3ZlVG8ocyxyKSx0LmxpbmVUbyhsLG4pLHQuc3Ryb2tlKCksdC5yZXN0b3JlKCl9fV0pLHR9KCksaj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJncmF5XCIsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06LjMscz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MTAscj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106NSxsPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTpcIkRhcmtHcmF5XCIsbj1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06LjUsbz1hcmd1bWVudHMubGVuZ3RoPjYmJnZvaWQgMCE9PWFyZ3VtZW50c1s2XT9hcmd1bWVudHNbNl06XCIxNnB4IE1vbm9zcGFjZVwiO2QodGhpcyx0KSx0aGlzLmNvbG9yPWUsdGhpcy5saW5lV2lkdGg9aSx0aGlzLnN0ZXA9cyx0aGlzLmJvbGROdGg9cix0aGlzLmJvbGRDb2xvcj1sLHRoaXMuYm9sZFdpZHRoPW4sdGhpcy5mb250PW8sdGhpcy5saW5lcz1udWxsfXJldHVybiBlKHQsW3trZXk6XCJjcmVhdGVMaW5lc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLmNvbG9yLGk9dGhpcy5saW5lV2lkdGgscz10aGlzLnN0ZXAscj10aGlzLmJvbGROdGgsbD10aGlzLmJvbGRDb2xvcixuPXRoaXMuYm9sZFdpZHRoLG89W10sYT1yKnMsaD0wO2g8dC53aWR0aDtoKz1zKXt2YXIgdj1oJWE9PTA7by5wdXNoKHY/bmV3IGIobCxuLGgsMCxoLHQuaGVpZ2h0KTpuZXcgYihlLGksaCwwLGgsdC5oZWlnaHQpKX1mb3IodmFyICQ9MDskPHQuaGVpZ2h0OyQrPXMpe3ZhciBkPSQlYT09MDtvLnB1c2goZD9uZXcgYihsLG4sMCwkLHQud2lkdGgsJCk6bmV3IGIoZSxpLDAsJCx0LndpZHRoLCQpKX10aGlzLmxpbmVzPW99fSx7a2V5OlwiZHJhd1RleHRcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuc3RlcCxzPXRoaXMuYm9sZE50aCxyPXRoaXMuYm9sZENvbG9yLGw9dGhpcy5mb250O3Quc2F2ZSgpLHQuZm9udD1sLHQuZmlsbFN0eWxlPXIsdC5maWxsVGV4dChcIjBcIiwxLDE1KTtmb3IodmFyIG49aSpzO248ZS53aWR0aDtuKz1pKnMpdC5maWxsVGV4dChuLG4sMTUpO2Zvcih2YXIgbz1pKnM7bzxlLmhlaWdodDtvKz1pKnMpdC5maWxsVGV4dChvLDAsbysxNSk7dC5yZXN0b3JlKCl9fSx7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dGhpcy5saW5lc3x8dGhpcy5jcmVhdGVMaW5lcyhlKSx0aGlzLmxpbmVzLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUuZHJhdyh0KX0pLHRoaXMuZHJhd1RleHQodCxlKX19XSksdH0oKTthLk1vdXNlPWksYS5HcmlkPWo7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9YX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShmdW5jdGlvbigpe3JldHVybiBhfSl9fSkoKTsiLCIvKipcclxuICogTWFybGluOiBEZXZpY2Ugc3BlY2lmaWMgaW1wbGVtZW50YXRpb24uXHJcbiovXHJcblxyXG5pbXBvcnQgeyBrZFRyZWUgfSBmcm9tICdrZC10cmVlLWphdmFzY3JpcHQnOyAvLyBub2RlIG1vZHVsZVxyXG4vLyBpbXBvcnQgeyBrZFRyZWUgfSBmcm9tICcuL2tkVHJlZSc7XHJcbmltcG9ydCB7IERldmljZSB9IGZyb20gXCIuL2RldmljZVwiO1xyXG5pbXBvcnQgeyBQQ0IsIFBhZCB9IGZyb20gXCIuL3BjYlwiO1xyXG5cclxuZW51bSBTdGF0dXMge1xyXG4gICAgVW5kZWZpbmVkID0gMSxcclxuICAgIFJlYWR5LFxyXG4gICAgQnVzeSxcclxuICAgIE5DXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJsaW4gZXh0ZW5kcyBEZXZpY2Uge1xyXG4gICAgbWFybGluRGl2OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBtYXJsaW5EaXZTdGF0dXM6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdlBvc2l0aW9uOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBtYXJsaW5EaXZDb21tYW5kczogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICAgIHplcm86IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1hcmxpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFybGluXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdEh0bWwoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVyd3JpdGUhIFNldCB0aGUgY3VycmVudCBwb3NpdGlvbiB0byBaZXJvLiBBbGwgZnVydGhlciBjb21tYW5kcyB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMgcG9zaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRaZXJvKHBvaW50OiBbbnVtYmVyLCBudW1iZXJdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy56ZXJvID0gcG9pbnQ7XHJcbiAgICAgICAgdGhpcy5vbkJ0bkFicygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzkyIFgwIFkwIFowJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgTW92ZSB0byBwb3NpdGlvbi4gSWYgb25lIGNvb3JkaW5hdGUgaXMgdW5kZWZpbmVkLCBpdCdzIGlnbm9yZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmVUbyh4OiBudW1iZXIgfCB1bmRlZmluZWQsIHk6IG51bWJlciB8IHVuZGVmaW5lZCwgejogbnVtYmVyIHwgdW5kZWZpbmVkLCBlOiBudW1iZXIgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY21kID0gJ0cwICc7XHJcbiAgICAgICAgaWYgKHggIT0gdW5kZWZpbmVkKSBjbWQgKz0gYFgke3ggLSB0aGlzLnplcm9bMF19IGA7XHJcbiAgICAgICAgaWYgKHkgIT0gdW5kZWZpbmVkKSBjbWQgKz0gYFkke3kgLSB0aGlzLnplcm9bMV19IGA7XHJcbiAgICAgICAgaWYgKHogIT0gdW5kZWZpbmVkKSBjbWQgKz0gYFoke3p9IGA7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoY21kKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ0blBvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbW92ZVRvQWxsKHBsaXN0OiBQYWRbXSwgc3RhcnQ6IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHBsaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxpc3QpO1xyXG5cclxuICAgICAgICBjb25zdCB0cmVlID0gbmV3IGtkVHJlZShwbGlzdCwgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7XHJcbiAgICAgICAgLy8gY29uc3QgdHJlZSA9IG5ldyBrZFRyZWUoUENCLCBwbGlzdCwgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7XHJcblxyXG4gICAgICAgIGxldCBzdGFydHBhZCA9IG5ldyBQYWQoJycsIHN0YXJ0WzBdLCBzdGFydFsxXSk7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IHRyZWUubmVhcmVzdChzdGFydHBhZCwgMSk7XHJcbiAgICAgICAgbGV0IGZvdW5kcGFkID0gc2VhcmNoWzBdWzBdO1xyXG5cclxuICAgICAgICBsZXQgZm91bmRwYWRzOiBQYWRbXSA9IFtdOyAvLyBqdXN0IGZvciBsb2dcclxuXHJcbiAgICAgICAgdGhpcy5vbkJ0bkFicygpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVzaG90ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHJlZSBkdW1wOicpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodHJlZS50b0pTT04oKSwgdW5kZWZpbmVkLCA0KSk7IC8vIGR1bXAgdHJlZVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gdHJlZS5uZWFyZXN0KGZvdW5kcGFkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kcGFkID0gc2VhcmNoWzBdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kcGFkcy5wdXNoKGZvdW5kcGFkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3ZlQW5kQmxvYihmb3VuZHBhZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbWQgKz0gYFgke2ZvdW5kcGFkLnBvc1ggLSB0aGlzLnplcm9bMF19IGA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY21kICs9IGBZJHtmb3VuZHBhZC5wb3NZIC0gdGhpcy56ZXJvWzFdfSBgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VyaWFsV3JpdGVXYWl0KGNtZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gY2F0Y2ggKHdoYXQpIHsgfSAvLyBpZ25vcmUgZGlzY29ubmVjdGVkIGZvciBkZWJ1Z2dpbmdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vIHJlbW92ZSBzZWVtcyB0byBiZSBidWdpIDooKChcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2sgPSB0cmVlLnJlbW92ZShmb3VuZHBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYob2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYE1hcmxpbjptb3ZlVG9BbGwgcmVtb3ZlZCBwYWRgLCBmb3VuZHBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKGBNYXJsaW46bW92ZVRvQWxsIE5PVCByZW1vdmVkIHBhZCwgdGhhcyBiYWQgOihgLCBmb3VuZHBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyZWVzaG90ID0gSlNPTi5zdHJpbmdpZnkodHJlZS50b0pTT04oKSwgdW5kZWZpbmVkLCA0KTsgLy8ga2VlcCB0cmVlIGZvciBkZWJ1ZyAhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJlZXNob3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZwYWQgb2YgZm91bmRwYWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1hcmxpbjptb3ZlVG9BbGwgcGFkOiR7ZnBhZC5wb3NYfTtcXHQke2ZwYWQucG9zWX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHdoYXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHNlcmlhbFdyaXRlV2FpdCBmYWlscywgZG8gc29tZXRoaW5nID9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1hcmxpbjptb3ZlVG9BbGw6IGZhaWxlZFwiLCB3aGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtb3ZlQW5kQmxvYihmb3VuZHBhZDogUGFkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY21kID0gJ0cwICc7XHJcbiAgICAgICAgICAgIGNtZCArPSBgWCR7Zm91bmRwYWQucG9zWCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICAgICAgY21kICs9IGBZJHtmb3VuZHBhZC5wb3NZIC0gdGhpcy56ZXJvWzFdfSBgO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJpYWxXcml0ZVdhaXQoY21kKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTgzJykudGhlbigoKSA9PiB7IC8vIGV4dHJ1ZGVyIHJlbGF0aXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFozJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRTEwJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFowJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnam8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGNhdGNoICh3aGF0KSB7IH0gLy8gaWdub3JlIGRpc2Nvbm5lY3RlZCBmb3IgZGVidWdnaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmxvYigpIHtcclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdNODMnKS50aGVuKCgpID0+IHsgLy8gZXh0cnVkZXIgcmVsYXRpdlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFozJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIEUxMCcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU2VyaWFsQ29ubmVjdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46IG9uU2VyaWFsQ29ubmVjdGVkJyk7XHJcbiAgICAgICAgLy8gcmVhZCBvdmVyIGZpcnN0IG1lc3NhZ2VzXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHdoaWxlKHRoaXMuaW5wdXRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZQb3NpdGlvbikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubWFybGluRGl2UG9zaXRpb24uaW5uZXJIVE1MICs9IGAke3RoaXMuaW5wdXRRdWV1ZS5wb3AoKX1gO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KVxyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlN0YXR1cyAmJiB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5SZWFkeSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2Q29tbWFuZHMuY2xhc3NOYW1lID0gdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUucmVwbGFjZSgndzMtaGlkZScsICd3My1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAvLyB3YWl0IDNzZWMsIHJ1biBjb21tYW5kcyAnY29sZCBleHRydWRlJywncmVsYXRpdmUgcG9zaXRpb25pbmcnLCdyZXBvcnQgcG9zaXRpb24nXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25CdG5Db2xkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUmVsKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blBvcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOiBvblNlcmlhbENvbm5lY3RlZCBpbml0IHNlcXVlbmNlIGZpbmlzaGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxEaXNjb25uZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmxpbjogb25TZXJpYWxEaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZTdGF0dXMgJiYgdGhpcy5tYXJsaW5EaXZDb21tYW5kcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuTkMpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzLmNsYXNzTmFtZSA9IHRoaXMubWFybGluRGl2Q29tbWFuZHMuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaGVyaXRlZCBmcm9tIERldmljZSwgYWRkcyBTdGF0dXMgbWVzc2FnZSB1cGRhdGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gdGltZW91dFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbFdyaXRlV2FpdCh2YWx1ZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAxMDAwMCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuQnVzeSk7XHJcbiAgICAgICAgICAgIHN1cGVyLnNlcmlhbFdyaXRlV2FpdCh2YWx1ZSwgdGltZW91dCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5SZWFkeSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U3RhdHVzKHN0YXR1czogU3RhdHVzKSB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgdW5rbm93biBzdGF0dXMgJHtzdGF0dXN9YDtcclxuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5SZWFkeTpcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnU3RhdHVzOiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdWdcIj48L2k+IHJlYWR5JzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLkJ1c3k6XHJcbiAgICAgICAgICAgICAgICBodG1sID0gJ1N0YXR1czogPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVnLWNpcmNsZS1ib2x0XCI+PC9pPiBidXN5JzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLk5DOlxyXG4gICAgICAgICAgICAgICAgaHRtbCA9ICdTdGF0dXM6IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1Zy1jaXJjbGUteG1hcmtcIj48L2k+IG5vdCBjb25uZWN0ZWQnOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2U3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2U3RhdHVzLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuSG9tZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cyOCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pXHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8vLyB0aW1lb3V0IHRvbyBzbWFsbCBmb3IgdGhpcyBjb21tYW5kLCBzZWUgd2hhdCBoYXBwZW5zXHJcbiAgICAgICAgLy8gdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cyOCcsIDEwMCkudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgLy8gICAgIC8vIHRyeSBhZ2FpbiAoZGVmYXVsdCB0aW1lb3V0IGlzIDEwc2VjKVxyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25CdG5Qb3MoKTtcclxuICAgICAgICAvLyAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4geyBjb25zb2xlLndhcm4ocmVhc29uKSB9KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0blBvcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ00xMTQnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gaGllciBrb21tdCBlaW5lIHplaWxlIG1pdCB6YWhsZW4gdW5kIGVpbmUgbWl0IG9rXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25CdG5Qb3MnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFybGluRGl2UG9zaXRpb24uaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5BYnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHOTAnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25CdG5SZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHOTEnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25CdG5Db2xkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTMwMiBTMCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5YUCgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWDEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0blhNKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBYLTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bllQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBZMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWU0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFktMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWlAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFoxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5aTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWi0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5FUCgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bkVNKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBFLTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHNvbWUgYnV0dG9ucyBmb3IgTWFybGluIHNwZWNpZmljIGFjdGlvbnMuLi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0SHRtbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXYpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidzMtYm9yZGVyIHczLWJvcmRlci1kYXJrLWdyZXlcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1hcmxpblN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFybGluUG9zaXRpb25cIiBjbGFzcz1cInczLXRpbnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1hcmxpbkNvbW1hbmRzXCIgY2xhc3M9XCJ3My10aW55IHczLWhpZGVcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5Ib21lXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmhvbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblBvc1wiICBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+cG9zPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluUmVsXCIgIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5yZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkFic1wiICBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+YWJzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5Db2xkXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmNvbGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblhQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPngrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5YTVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj54LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWVBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eSs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbllNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnktPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5aUFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj56KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWk1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+ei08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkVQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmUrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5FTVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5lLTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluU3RhdHVzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Qb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZDb21tYW5kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluQ29tbWFuZHNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5OQyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkhvbWVcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5Ib21lKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5Ib21lLm9uY2xpY2sgPSB0aGlzLm9uQnRuSG9tZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluUG9zXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5Qb3Mub25jbGljayA9IHRoaXMub25CdG5Qb3MuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5SZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblJlbFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blJlbCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuUmVsLm9uY2xpY2sgPSB0aGlzLm9uQnRuUmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuQWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5BYnNcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5BYnMpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkFicy5vbmNsaWNrID0gdGhpcy5vbkJ0bkFicy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkNvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkNvbGRcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5Db2xkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5Db2xkLm9uY2xpY2sgPSB0aGlzLm9uQnRuQ29sZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5YUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWFBcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5YUCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWFAub25jbGljayA9IHRoaXMub25CdG5YUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blhNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5YTVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blhNKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5YTS5vbmNsaWNrID0gdGhpcy5vbkJ0blhNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbllQXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWVApIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bllQLm9uY2xpY2sgPSB0aGlzLm9uQnRuWVAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5ZTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWU1cIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5ZTSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWU0ub25jbGljayA9IHRoaXMub25CdG5ZTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blpQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5aUFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blpQKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5aUC5vbmNsaWNrID0gdGhpcy5vbkJ0blpQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblpNXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWk0pIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blpNLm9uY2xpY2sgPSB0aGlzLm9uQnRuWk0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5FUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluRVBcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5FUCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuRVAub25jbGljayA9IHRoaXMub25CdG5FUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkVNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5FTVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkVNKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5FTS5vbmNsaWNrID0gdGhpcy5vbkJ0bkVNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG4iLCIvKipcbiAqIGstZCBUcmVlIEphdmFTY3JpcHQgLSBWIDEuMDFcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdWJpbGFicy9rZC10cmVlLWphdmFzY3JpcHRcbiAqXG4gKiBAYXV0aG9yIE1pcmNlYSBQcmljb3AgPHByaWNvcEB1YmlsYWJzLm5ldD4sIDIwMTJcbiAqIEBhdXRob3IgTWFydGluIEtsZXBwZSA8a2xlcHBlQHViaWxhYnMubmV0PiwgMjAxMlxuICogQGF1dGhvciBVYmlsYWJzIGh0dHA6Ly91YmlsYWJzLm5ldCwgMjAxMlxuICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgPGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwPlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgZnVuY3Rpb24gTm9kZShvYmosIGRpbWVuc2lvbiwgcGFyZW50KSB7XG4gICAgdGhpcy5vYmogPSBvYmo7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtkVHJlZShwb2ludHMsIG1ldHJpYywgZGltZW5zaW9ucykge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRUcmVlKHBvaW50cywgZGVwdGgsIHBhcmVudCkge1xuICAgICAgdmFyIGRpbSA9IGRlcHRoICUgZGltZW5zaW9ucy5sZW5ndGgsXG4gICAgICAgIG1lZGlhbixcbiAgICAgICAgbm9kZTtcblxuICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUocG9pbnRzWzBdLCBkaW0sIHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhW2RpbWVuc2lvbnNbZGltXV0gLSBiW2RpbWVuc2lvbnNbZGltXV07XG4gICAgICB9KTtcblxuICAgICAgbWVkaWFuID0gTWF0aC5mbG9vcihwb2ludHMubGVuZ3RoIC8gMik7XG5cbiAgICAgIC8vIGF2b2lkIGhhdmluZyBzYW1lIGNvb3JkcyBvbiBsZWZ0IGFuZCByaWdodCB0cmVlICEhIVxuICAgICAgd2hpbGUgKG1lZGlhbiA+IDApIHtcbiAgICAgICAgbGV0IG5ld21lZGlhbiA9IG1lZGlhbiAtIDE7XG4gICAgICAgIGlmIChwb2ludHNbbWVkaWFuXVtkaW1lbnNpb25zW2RpbV1dID09PSBwb2ludHNbbmV3bWVkaWFuXVtkaW1lbnNpb25zW2RpbV1dKSB7XG4gICAgICAgICAgbWVkaWFuIC09IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5ldyBOb2RlKHBvaW50c1ttZWRpYW5dLCBkaW0sIHBhcmVudCk7XG4gICAgICBub2RlLmxlZnQgPSBidWlsZFRyZWUocG9pbnRzLnNsaWNlKDAsIG1lZGlhbiksIGRlcHRoICsgMSwgbm9kZSk7XG4gICAgICBub2RlLnJpZ2h0ID0gYnVpbGRUcmVlKHBvaW50cy5zbGljZShtZWRpYW4gKyAxKSwgZGVwdGggKyAxLCBub2RlKTtcblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLy8gUmVsb2FkcyBhIHNlcmlhbGllZCB0cmVlXG4gICAgZnVuY3Rpb24gbG9hZFRyZWUoZGF0YSkge1xuICAgICAgLy8gSnVzdCBuZWVkIHRvIHJlc3RvcmUgdGhlIGBwYXJlbnRgIHBhcmFtZXRlclxuICAgICAgc2VsZi5yb290ID0gZGF0YTtcblxuICAgICAgZnVuY3Rpb24gcmVzdG9yZVBhcmVudChyb290KSB7XG4gICAgICAgIGlmIChyb290LmxlZnQpIHtcbiAgICAgICAgICByb290LmxlZnQucGFyZW50ID0gcm9vdDtcbiAgICAgICAgICByZXN0b3JlUGFyZW50KHJvb3QubGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5yaWdodCkge1xuICAgICAgICAgIHJvb3QucmlnaHQucGFyZW50ID0gcm9vdDtcbiAgICAgICAgICByZXN0b3JlUGFyZW50KHJvb3QucmlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVQYXJlbnQoc2VsZi5yb290KTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ3VzaW5nIG1hcmlvc2dpdDprZC10cmVlIHYxLjAuNCcpO1xuICAgIC8vIElmIHBvaW50cyBpcyBub3QgYW4gYXJyYXksIGFzc3VtZSB3ZSdyZSBsb2FkaW5nIGEgcHJlLWJ1aWx0IHRyZWVcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnRzKSkgbG9hZFRyZWUocG9pbnRzLCBtZXRyaWMsIGRpbWVuc2lvbnMpO1xuICAgIGVsc2UgdGhpcy5yb290ID0gYnVpbGRUcmVlKHBvaW50cywgMCwgbnVsbCk7XG5cbiAgICAvLyBDb252ZXJ0IHRvIGEgSlNPTiBzZXJpYWxpemFibGUgc3RydWN0dXJlOyB0aGlzIGp1c3QgcmVxdWlyZXMgcmVtb3ZpbmdcbiAgICAvLyB0aGUgYHBhcmVudGAgcHJvcGVydHlcbiAgICB0aGlzLnRvSlNPTiA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIGlmICghc3JjKSBzcmMgPSB0aGlzLnJvb3Q7XG4gICAgICB2YXIgZGVzdCA9IG5ldyBOb2RlKHNyYy5vYmosIHNyYy5kaW1lbnNpb24sIG51bGwpO1xuICAgICAgaWYgKHNyYy5sZWZ0KSBkZXN0LmxlZnQgPSBzZWxmLnRvSlNPTihzcmMubGVmdCk7XG4gICAgICBpZiAoc3JjLnJpZ2h0KSBkZXN0LnJpZ2h0ID0gc2VsZi50b0pTT04oc3JjLnJpZ2h0KTtcbiAgICAgIHJldHVybiBkZXN0O1xuICAgIH07XG5cbiAgICAvKiogcmV0dXJucyBhIGxpc3Qgb2YgcG9pbnRzIGluIHRoZSBzdWJ0cmVlLCBleGNsdXNpdmUgdGhlIGdpdmVuIG5vZGUgISAqL1xuICAgIHRoaXMudG9BcnJheSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGlmIChzcmMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmIChzcmMubGVmdCkge1xuICAgICAgICByZXN1bHQucHVzaChzcmMubGVmdC5vYmopO1xuICAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi50aGlzLnRvQXJyYXkoc3JjLmxlZnQpXTtcbiAgICAgIH1cbiAgICAgIGlmIChzcmMucmlnaHQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3JjLnJpZ2h0Lm9iaik7XG4gICAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIC4uLnRoaXMudG9BcnJheShzcmMucmlnaHQpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgIGZ1bmN0aW9uIGlubmVyU2VhcmNoKG5vZGUsIHBhcmVudCkge1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXTtcbiAgICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBub2RlLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyU2VhcmNoKG5vZGUubGVmdCwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyU2VhcmNoKG5vZGUucmlnaHQsIG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnNlcnRQb3NpdGlvbiA9IGlubmVyU2VhcmNoKHRoaXMucm9vdCwgbnVsbCksXG4gICAgICAgIG5ld05vZGUsXG4gICAgICAgIGRpbWVuc2lvbjtcblxuICAgICAgaWYgKGluc2VydFBvc2l0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBOb2RlKHBvaW50LCAwLCBudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXdOb2RlID0gbmV3IE5vZGUocG9pbnQsIChpbnNlcnRQb3NpdGlvbi5kaW1lbnNpb24gKyAxKSAlIGRpbWVuc2lvbnMubGVuZ3RoLCBpbnNlcnRQb3NpdGlvbik7XG4gICAgICBkaW1lbnNpb24gPSBkaW1lbnNpb25zW2luc2VydFBvc2l0aW9uLmRpbWVuc2lvbl07XG5cbiAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgaW5zZXJ0UG9zaXRpb24ub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgaW5zZXJ0UG9zaXRpb24ubGVmdCA9IG5ld05vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnNlcnRQb3NpdGlvbi5yaWdodCA9IG5ld05vZGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICB2YXIgbm9kZTtcblxuICAgICAgZnVuY3Rpb24gbm9kZVNlYXJjaChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5vYmogPT09IHBvaW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl07XG5cbiAgICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBub2RlLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVTZWFyY2gobm9kZS5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVNlYXJjaChub2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgICAgICAgdmFyIG5leHROb2RlLFxuICAgICAgICAgIG5leHRPYmosXG4gICAgICAgICAgcERpbWVuc2lvbjtcblxuICAgICAgICBmdW5jdGlvbiBmaW5kTWluKG5vZGUsIGRpbSkge1xuICAgICAgICAgIHZhciBkaW1lbnNpb24sXG4gICAgICAgICAgICBvd24sXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICBtaW47XG5cbiAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGltZW5zaW9uID0gZGltZW5zaW9uc1tkaW1dO1xuXG4gICAgICAgICAgaWYgKG5vZGUuZGltZW5zaW9uID09PSBkaW0pIHtcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbmRNaW4obm9kZS5sZWZ0LCBkaW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3duID0gbm9kZS5vYmpbZGltZW5zaW9uXTtcbiAgICAgICAgICBsZWZ0ID0gZmluZE1pbihub2RlLmxlZnQsIGRpbSk7XG4gICAgICAgICAgcmlnaHQgPSBmaW5kTWluKG5vZGUucmlnaHQsIGRpbSk7XG4gICAgICAgICAgbWluID0gbm9kZTtcblxuICAgICAgICAgIGlmIChsZWZ0ICE9PSBudWxsICYmIGxlZnQub2JqW2RpbWVuc2lvbl0gPCBvd24pIHtcbiAgICAgICAgICAgIG1pbiA9IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyaWdodCAhPT0gbnVsbCAmJiByaWdodC5vYmpbZGltZW5zaW9uXSA8IG1pbi5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgICAgbWluID0gcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICBpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGYucm9vdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcERpbWVuc2lvbiA9IGRpbWVuc2lvbnNbbm9kZS5wYXJlbnQuZGltZW5zaW9uXTtcblxuICAgICAgICAgIGlmIChub2RlLm9ialtwRGltZW5zaW9uXSA8IG5vZGUucGFyZW50Lm9ialtwRGltZW5zaW9uXSkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQubGVmdCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50LnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHJpZ2h0IHN1YnRyZWUgaXMgbm90IGVtcHR5LCBzd2FwIHdpdGggdGhlIG1pbmltdW0gZWxlbWVudCBvbiB0aGVcbiAgICAgICAgLy8gbm9kZSdzIGRpbWVuc2lvbi4gSWYgaXQgaXMgZW1wdHksIHdlIHN3YXAgdGhlIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWVzIGFuZFxuICAgICAgICAvLyBkbyB0aGUgc2FtZS5cbiAgICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IGZpbmRNaW4obm9kZS5yaWdodCwgbm9kZS5kaW1lbnNpb24pO1xuICAgICAgICAgIG5leHRPYmogPSBuZXh0Tm9kZS5vYmo7XG4gICAgICAgICAgcmVtb3ZlTm9kZShuZXh0Tm9kZSk7XG4gICAgICAgICAgbm9kZS5vYmogPSBuZXh0T2JqO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHROb2RlID0gZmluZE1pbihub2RlLmxlZnQsIG5vZGUuZGltZW5zaW9uKTtcbiAgICAgICAgICBuZXh0T2JqID0gbmV4dE5vZGUub2JqO1xuICAgICAgICAgIHJlbW92ZU5vZGUobmV4dE5vZGUpO1xuICAgICAgICAgIG5vZGUucmlnaHQgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgbm9kZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICBub2RlLm9iaiA9IG5leHRPYmo7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGVTZWFyY2goc2VsZi5yb290KTtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdrZHRyZWU6cmVtb3ZlIGNvdWxkIG5vdCByZW1vdmUgbm9kZSAhIGludGVybmFsIGVycm9yICEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmVOb2RlKG5vZGUpOyAvLyBidWdnaVxuXG4gICAgICAvLyB3aWtpcGVkaWEgc2F5czoganVzdCByZWJ1aWxkIHRoZSBzdWJ0cmVlXG4gICAgICBjb25zdCBhbGxjaGlsZHMgPSB0aGlzLnRvQXJyYXkobm9kZSk7XG4gICAgICBsZXQgbmV3bm9kZSA9IGJ1aWxkVHJlZShhbGxjaGlsZHMsIG5vZGUuZGltZW5zaW9uLCBub2RlLnBhcmVudCk7XG4gICAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgICAgaWYgKG5vZGUucGFyZW50LmxlZnQgPT09IG5vZGUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudC5sZWZ0ID0gbmV3bm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLnBhcmVudC5yaWdodCA9PT0gbm9kZSkge1xuICAgICAgICAgIG5vZGUucGFyZW50LnJpZ2h0ID0gbmV3bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yb290ID0gbmV3bm9kZTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLm5lYXJlc3QgPSBmdW5jdGlvbiAocG9pbnQsIG1heE5vZGVzLCBtYXhEaXN0YW5jZSkge1xuICAgICAgdmFyIGksXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYmVzdE5vZGVzO1xuXG4gICAgICBiZXN0Tm9kZXMgPSBuZXcgQmluYXJ5SGVhcChcbiAgICAgICAgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIC1lWzFdOyB9XG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBuZWFyZXN0U2VhcmNoKG5vZGUpIHtcbiAgICAgICAgdmFyIGJlc3RDaGlsZCxcbiAgICAgICAgICBkaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXSxcbiAgICAgICAgICBvd25EaXN0YW5jZSA9IG1ldHJpYyhwb2ludCwgbm9kZS5vYmopLFxuICAgICAgICAgIGxpbmVhclBvaW50ID0ge30sXG4gICAgICAgICAgbGluZWFyRGlzdGFuY2UsXG4gICAgICAgICAgb3RoZXJDaGlsZCxcbiAgICAgICAgICBpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVOb2RlKG5vZGUsIGRpc3RhbmNlKSB7XG4gICAgICAgICAgYmVzdE5vZGVzLnB1c2goW25vZGUsIGRpc3RhbmNlXSk7XG4gICAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPiBtYXhOb2Rlcykge1xuICAgICAgICAgICAgYmVzdE5vZGVzLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGkgPT09IG5vZGUuZGltZW5zaW9uKSB7XG4gICAgICAgICAgICBsaW5lYXJQb2ludFtkaW1lbnNpb25zW2ldXSA9IHBvaW50W2RpbWVuc2lvbnNbaV1dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lYXJQb2ludFtkaW1lbnNpb25zW2ldXSA9IG5vZGUub2JqW2RpbWVuc2lvbnNbaV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmVhckRpc3RhbmNlID0gbWV0cmljKGxpbmVhclBvaW50LCBub2RlLm9iaik7XG5cbiAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPCBtYXhOb2RlcyB8fCBvd25EaXN0YW5jZSA8IGJlc3ROb2Rlcy5wZWVrKClbMV0pIHtcbiAgICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLmxlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5yaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IG5vZGUub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgICAgIGJlc3RDaGlsZCA9IG5vZGUubGVmdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5yaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZWFyZXN0U2VhcmNoKGJlc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPCBtYXhOb2RlcyB8fCBvd25EaXN0YW5jZSA8IGJlc3ROb2Rlcy5wZWVrKClbMV0pIHtcbiAgICAgICAgICBzYXZlTm9kZShub2RlLCBvd25EaXN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVzdE5vZGVzLnNpemUoKSA8IG1heE5vZGVzIHx8IE1hdGguYWJzKGxpbmVhckRpc3RhbmNlKSA8IGJlc3ROb2Rlcy5wZWVrKClbMV0pIHtcbiAgICAgICAgICBpZiAoYmVzdENoaWxkID09PSBub2RlLmxlZnQpIHtcbiAgICAgICAgICAgIG90aGVyQ2hpbGQgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlckNoaWxkID0gbm9kZS5sZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3RoZXJDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmVhcmVzdFNlYXJjaChvdGhlckNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heERpc3RhbmNlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXhOb2RlczsgaSArPSAxKSB7XG4gICAgICAgICAgYmVzdE5vZGVzLnB1c2goW251bGwsIG1heERpc3RhbmNlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYucm9vdClcbiAgICAgICAgbmVhcmVzdFNlYXJjaChzZWxmLnJvb3QpO1xuXG4gICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGgubWluKG1heE5vZGVzLCBiZXN0Tm9kZXMuY29udGVudC5sZW5ndGgpOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJlc3ROb2Rlcy5jb250ZW50W2ldWzBdKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goW2Jlc3ROb2Rlcy5jb250ZW50W2ldWzBdLm9iaiwgYmVzdE5vZGVzLmNvbnRlbnRbaV1bMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpcy5iYWxhbmNlRmFjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gaGVpZ2h0KG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoaGVpZ2h0KG5vZGUubGVmdCksIGhlaWdodChub2RlLnJpZ2h0KSkgKyAxO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjb3VudChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50KG5vZGUubGVmdCkgKyBjb3VudChub2RlLnJpZ2h0KSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWlnaHQoc2VsZi5yb290KSAvIChNYXRoLmxvZyhjb3VudChzZWxmLnJvb3QpKSAvIE1hdGgubG9nKDIpKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gQmluYXJ5IGhlYXAgaW1wbGVtZW50YXRpb24gZnJvbTpcbiAgLy8gaHR0cDovL2Vsb3F1ZW50amF2YXNjcmlwdC5uZXQvYXBwZW5kaXgyLmh0bWxcblxuICBmdW5jdGlvbiBCaW5hcnlIZWFwKHNjb3JlRnVuY3Rpb24pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLnNjb3JlRnVuY3Rpb24gPSBzY29yZUZ1bmN0aW9uO1xuICB9XG5cbiAgQmluYXJ5SGVhcC5wcm90b3R5cGUgPSB7XG4gICAgcHVzaDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIC8vIEFkZCB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICB0aGlzLmNvbnRlbnQucHVzaChlbGVtZW50KTtcbiAgICAgIC8vIEFsbG93IGl0IHRvIGJ1YmJsZSB1cC5cbiAgICAgIHRoaXMuYnViYmxlVXAodGhpcy5jb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgIH0sXG5cbiAgICBwb3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBmaXJzdCBlbGVtZW50IHNvIHdlIGNhbiByZXR1cm4gaXQgbGF0ZXIuXG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb250ZW50WzBdO1xuICAgICAgLy8gR2V0IHRoZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgdmFyIGVuZCA9IHRoaXMuY29udGVudC5wb3AoKTtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgZWxlbWVudHMgbGVmdCwgcHV0IHRoZSBlbmQgZWxlbWVudCBhdCB0aGVcbiAgICAgIC8vIHN0YXJ0LCBhbmQgbGV0IGl0IHNpbmsgZG93bi5cbiAgICAgIGlmICh0aGlzLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRbMF0gPSBlbmQ7XG4gICAgICAgIHRoaXMuc2lua0Rvd24oMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBwZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50WzBdO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgbGVuID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcbiAgICAgIC8vIFRvIHJlbW92ZSBhIHZhbHVlLCB3ZSBtdXN0IHNlYXJjaCB0aHJvdWdoIHRoZSBhcnJheSB0byBmaW5kXG4gICAgICAvLyBpdC5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudFtpXSA9PSBub2RlKSB7XG4gICAgICAgICAgLy8gV2hlbiBpdCBpcyBmb3VuZCwgdGhlIHByb2Nlc3Mgc2VlbiBpbiAncG9wJyBpcyByZXBlYXRlZFxuICAgICAgICAgIC8vIHRvIGZpbGwgdXAgdGhlIGhvbGUuXG4gICAgICAgICAgdmFyIGVuZCA9IHRoaXMuY29udGVudC5wb3AoKTtcbiAgICAgICAgICBpZiAoaSAhPSBsZW4gLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRbaV0gPSBlbmQ7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZUZ1bmN0aW9uKGVuZCkgPCB0aGlzLnNjb3JlRnVuY3Rpb24obm9kZSkpXG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlVXAoaSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHRoaXMuc2lua0Rvd24oaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBub3QgZm91bmQuXCIpO1xuICAgIH0sXG5cbiAgICBzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDtcbiAgICB9LFxuXG4gICAgYnViYmxlVXA6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAvLyBGZXRjaCB0aGUgZWxlbWVudCB0aGF0IGhhcyB0byBiZSBtb3ZlZC5cbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dO1xuICAgICAgLy8gV2hlbiBhdCAwLCBhbiBlbGVtZW50IGNhbiBub3QgZ28gdXAgYW55IGZ1cnRoZXIuXG4gICAgICB3aGlsZSAobiA+IDApIHtcbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFyZW50IGVsZW1lbnQncyBpbmRleCwgYW5kIGZldGNoIGl0LlxuICAgICAgICB2YXIgcGFyZW50TiA9IE1hdGguZmxvb3IoKG4gKyAxKSAvIDIpIC0gMSxcbiAgICAgICAgICBwYXJlbnQgPSB0aGlzLmNvbnRlbnRbcGFyZW50Tl07XG4gICAgICAgIC8vIFN3YXAgdGhlIGVsZW1lbnRzIGlmIHRoZSBwYXJlbnQgaXMgZ3JlYXRlci5cbiAgICAgICAgaWYgKHRoaXMuc2NvcmVGdW5jdGlvbihlbGVtZW50KSA8IHRoaXMuc2NvcmVGdW5jdGlvbihwYXJlbnQpKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50W3BhcmVudE5dID0gZWxlbWVudDtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbbl0gPSBwYXJlbnQ7XG4gICAgICAgICAgLy8gVXBkYXRlICduJyB0byBjb250aW51ZSBhdCB0aGUgbmV3IHBvc2l0aW9uLlxuICAgICAgICAgIG4gPSBwYXJlbnROO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvdW5kIGEgcGFyZW50IHRoYXQgaXMgbGVzcywgbm8gbmVlZCB0byBtb3ZlIGl0IGZ1cnRoZXIuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNpbmtEb3duOiBmdW5jdGlvbiAobikge1xuICAgICAgLy8gTG9vayB1cCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGl0cyBzY29yZS5cbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoLFxuICAgICAgICBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dLFxuICAgICAgICBlbGVtU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oZWxlbWVudCk7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIENvbXB1dGUgdGhlIGluZGljZXMgb2YgdGhlIGNoaWxkIGVsZW1lbnRzLlxuICAgICAgICB2YXIgY2hpbGQyTiA9IChuICsgMSkgKiAyLCBjaGlsZDFOID0gY2hpbGQyTiAtIDE7XG4gICAgICAgIC8vIFRoaXMgaXMgdXNlZCB0byBzdG9yZSB0aGUgbmV3IHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LFxuICAgICAgICAvLyBpZiBhbnkuXG4gICAgICAgIHZhciBzd2FwID0gbnVsbDtcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGNoaWxkIGV4aXN0cyAoaXMgaW5zaWRlIHRoZSBhcnJheSkuLi5cbiAgICAgICAgaWYgKGNoaWxkMU4gPCBsZW5ndGgpIHtcbiAgICAgICAgICAvLyBMb29rIGl0IHVwIGFuZCBjb21wdXRlIGl0cyBzY29yZS5cbiAgICAgICAgICB2YXIgY2hpbGQxID0gdGhpcy5jb250ZW50W2NoaWxkMU5dLFxuICAgICAgICAgICAgY2hpbGQxU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oY2hpbGQxKTtcbiAgICAgICAgICAvLyBJZiB0aGUgc2NvcmUgaXMgbGVzcyB0aGFuIG91ciBlbGVtZW50J3MsIHdlIG5lZWQgdG8gc3dhcC5cbiAgICAgICAgICBpZiAoY2hpbGQxU2NvcmUgPCBlbGVtU2NvcmUpXG4gICAgICAgICAgICBzd2FwID0gY2hpbGQxTjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyB0aGUgc2FtZSBjaGVja3MgZm9yIHRoZSBvdGhlciBjaGlsZC5cbiAgICAgICAgaWYgKGNoaWxkMk4gPCBsZW5ndGgpIHtcbiAgICAgICAgICB2YXIgY2hpbGQyID0gdGhpcy5jb250ZW50W2NoaWxkMk5dLFxuICAgICAgICAgICAgY2hpbGQyU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oY2hpbGQyKTtcbiAgICAgICAgICBpZiAoY2hpbGQyU2NvcmUgPCAoc3dhcCA9PSBudWxsID8gZWxlbVNjb3JlIDogY2hpbGQxU2NvcmUpKSB7XG4gICAgICAgICAgICBzd2FwID0gY2hpbGQyTjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBuZWVkcyB0byBiZSBtb3ZlZCwgc3dhcCBpdCwgYW5kIGNvbnRpbnVlLlxuICAgICAgICBpZiAoc3dhcCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50W25dID0gdGhpcy5jb250ZW50W3N3YXBdO1xuICAgICAgICAgIHRoaXMuY29udGVudFtzd2FwXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgbiA9IHN3YXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgZG9uZS5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZXhwb3J0cy5rZFRyZWUgPSBrZFRyZWU7XG4gIGV4cG9ydHMuQmluYXJ5SGVhcCA9IEJpbmFyeUhlYXA7XG59KSk7XG4iLCIvLyB0b2RvOlxyXG4vLyAgIG1vdmUgb3V0IHNlcmlhbCA/IE9yIGxvb2sgZm9yIGEgc2VyaWFsIHJlYWRsaW5lIGltcGxlbWVudGF0aW9uID8/P1xyXG4vLyBidWdzOlxyXG4vLyAgIGRpc2Nvbm5lY3QgLSBGYWlsZWQgdG8gZXhlY3V0ZSAnY2xvc2UnIG9uICdTZXJpYWxQb3J0JzogQ2Fubm90IGNhbmNlbCBhIGxvY2tlZCBzdHJlYW1cclxuXHJcbmltcG9ydCB7IFBhZCB9IGZyb20gXCIuL3BjYlwiO1xyXG5cclxuLyoqXHJcbiAqIERldmljZTogYWJzdHJhY3RzIGFjY2VzcyB0byBtYWNoaW5lLlxyXG4gKiBJdCBcInNpbXBsaWZpZXNcIiBzZXJpYWwgcG9ydCBhY2Nlc3MuIEF0IHRoZSBtb21lbnQgaXQgb25seSBvbGxvd3MgXCJ3cml0ZSBhbmQgcmVzcG9uc2VcIiBzdHlsZSBjb21tdW5pY2F0aW9uLlxyXG4gKiBUaGUgc2VyaWFsIHBvcnQgaXMgb3BlbmVkLCB0aGVuIGEgcmVhZGVyIGxvb3AgaXMgc3RhcnRldCwgd2hpY2ggcHVzaGVzIGVhY2ggbmV3IGxpbmUgaW50byB0aGUgaW5wdXRRdWV1ZS5cclxuICogRnVuY3Rpb24gc2VyaWFsV3JpdGVXYWl0IGlzIHVzZWQgdG8gaXNzdWUgY29tbWFuZHMgYW5kIHdhaXQgZm9yIHRoZSBkZXZpY2UgdG8gYWtub3dsZWRnZS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRGV2aWNlIHtcclxuICAgIGRldmljZUNoZWNrOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VDb25uZWN0OiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VEaXNjb25uZWN0OiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VJbnB1dEZvcm06IEhUTUxGb3JtRWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VJbmZvOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VMb2c6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZVNlcmlhbDogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gICAgcG9ydHM6IGFueTtcclxuICAgIHBvcnQ6IGFueTtcclxuICAgIHRleHREZWNvZGVyOiBUZXh0RGVjb2RlclN0cmVhbTtcclxuICAgIHJlYWRlcjogUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyPHN0cmluZz47XHJcbiAgICBpbnB1dExhc3Q6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIHByb3RlY3RlZCBpbnB1dFF1ZXVlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlQ2hlY2sgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlQ2hlY2tcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VDb25uZWN0ID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUNvbm5lY3RcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VEaXNjb25uZWN0ID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZURpc2Nvbm5lY3RcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSW5wdXRGb3JtID0gPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VJbnB1dEZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJbmZvID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUluZm9cIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VMb2cgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlTG9nXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZVNlcmlhbFwiKTtcclxuICAgICAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXJTdHJlYW0oKTtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VDaGVjayAmJiB0aGlzLmRldmljZUNvbm5lY3QgJiYgdGhpcy5kZXZpY2VEaXNjb25uZWN0ICYmIHRoaXMuZGV2aWNlSW5wdXQgJiYgdGhpcy5kZXZpY2VJbnB1dEZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VDaGVjay5vbmNsaWNrID0gdGhpcy5zZXJpYWxDaGVjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUNvbm5lY3Qub25jbGljayA9IHRoaXMuc2VyaWFsQ29ubmVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZURpc2Nvbm5lY3Qub25jbGljayA9IHRoaXMuc2VyaWFsRGlzY29ubmVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRldmljZURvc29tZS5vbmNsaWNrID0gdGhpcy5zZXJpYWxEb3NvbWUuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kZXZpY2VJbnB1dC5vbmNoYW5nZSA9IHRoaXMuc2VyaWFsSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VJbnB1dEZvcm0ub25zdWJtaXQgPSB0aGlzLnNlcmlhbElucHV0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlcmlhbENoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVyd3JpdGUhIFNldCB0aGUgY3VycmVudCBwb3NpdGlvbiB0byBaZXJvLiBBbGwgZnVydGhlciBjb21tYW5kcyB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMgcG9zaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRaZXJvPyhwb2ludDpbbnVtYmVyLG51bWJlcl0pOiB2b2lkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBNb3ZlIHRvIHBvc2l0aW9uLiBJZiBvbmUgY29vcmRpbmF0ZSBpcyB1bmRlZmluZWQsIGl0J3MgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZVRvPyh4Om51bWJlcnx1bmRlZmluZWQsIHk6bnVtYmVyfHVuZGVmaW5lZCwgejpudW1iZXJ8dW5kZWZpbmVkLCBlOiBudW1iZXIgfCB1bmRlZmluZWQpOiB2b2lkXHJcbiAgICBwdWJsaWMgbW92ZVRvQWxsPyhwbGlzdDogUGFkW10sIHN0YXJ0OltudW1iZXIsbnVtYmVyXSk7XHJcblxyXG4gICAgcHVibGljIGJsb2I/KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVyd3JpdGUgdGhpcyBpbiBkZXJpdmVkIGNsYXNzIHRvIGdldCBub3RpZmljYXRpb24gd2hlbiBzb21lIGRldmljZSB3YXMgY29ubmVjdGVkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxDb25uZWN0ZWQ/KCk6dm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlIHRoaXMgaW4gZGVyaXZlZCBjbGFzcyB0byBnZXQgbm90aWZpY2F0aW9uIHdoZW4gc29tZSBkZXZpY2Ugd2FzIGRpc2Nvbm5lY3RlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU2VyaWFsRGlzY29ubmVjdGVkPygpOnZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVucyBhIGRpYWxvZyB3aGVyZSB1c2VyIGNhbiBzZWxlY3QgYSBkZXZpY2UgdG8gY29ubmVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbENvbm5lY3QoKSB7XHJcbiAgICAgICAgLy8gb3BlbnMgZGlhbG9nIHdoZXJlIHVzZXIgY2FuIHNlbGVjdCBhIGRldmljZVxyXG4gICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLnJlcXVlc3RQb3J0KCkudGhlbigocG9ydCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VyaWFsQ29ubmVjdCcsIHBvcnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFBvcnRPcGVuKHBvcnQpO1xyXG4gICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdzZXJpYWxDb25uZWN0JyxyZWFzb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbEVycm9yKHJlYXNvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbENvbm5lY3REZXZpY2UodmlkOiBudW1iZXIsIHBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcG9ydCBvZiB0aGlzLnBvcnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXJpYWxDb25uZWN0RGV2aWNlOiBzZXJpYWwgYXZhaWxhYmxlLCBwb3J0czogYCwgcG9ydC5nZXRJbmZvKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzYlByb2R1Y3RJZCwgdXNiVmVuZG9ySWQgfSA9IHBvcnQuZ2V0SW5mbygpO1xyXG4gICAgICAgICAgICBpZiAodXNiUHJvZHVjdElkID09IHBpZCAmJiB1c2JWZW5kb3JJZCA9PSB2aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsUG9ydE9wZW4ocG9ydCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgZnJvbSBkZXZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbERpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlYWRlci5yZWxlYXNlTG9jaygpOyAvLyBkb2VzJ250IGRvIGl0IDooXHJcbiAgICAgICAgICAgIHRoaXMucG9ydC5jbG9zZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3J0IGNsb3NlZCcpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBXYWl0IHVudGlsIHNvbWUgcmVzcG9uc2Ugb3IgdGltZW91dCwgcmV0dXJucyByZXNwb25zZSBvciAndGltZW91dCcgb3IgbWlnaHQgZmFpbCB3aXRoICdidXN5JyBvciAnZGlzY29ubmVjdGVkJ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsV3JpdGVXYWl0KHZhbHVlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICAvLyBjbGVhbiBzZXJpYWwgaW5wdXRcclxuICAgICAgICB0aGlzLmlucHV0UXVldWUgPSBbXTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCB1bnRpbCBzb21lIHJlc3BvbnNlIG9yIHRpbWVvdXRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXN0ZXAgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4dGltZSA9IHRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFhdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gYXdhaXQgdGhpcy5zZXJpYWxBdmFpbCh0aW1lc3RlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heHRpbWUgPSBtYXh0aW1lIC0gdGltZXN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXh0aW1lIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFdyaXRlV2FpdCBhdmFpbDoke2F2YWlsYWJsZX0gdGltZToke3RpbWVvdXQgLSBtYXh0aW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgY2hlY2s6ICR7dGhpcy5pbnB1dFF1ZXVlLmxlbmd0aH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wID0gPHN0cmluZz50aGlzLmlucHV0UXVldWUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgcmVzb2x2ZTogJHtpbnB9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5wKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IHJlamVjdDogYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgndGltZW91dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnYnVzeScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKHRoaXMucG9ydCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoJ2Rpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byB3cml0ZSBhbnl0aGluZyB0byB0aGUgZGV2aWNlLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxJbnB1dEZvcm0oZXZlbnQ6IElucHV0RXZlbnQpIHsgLy8gZmlyZXMgd2hlbiByZXR1cm4gaXMgZW50ZXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmRldmljZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGZvcm0gd2lsbCBkbyBzdHJhbmdlIHRoaW5ncyAhXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxJbnB1dENoYW5nZShldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHdyaXRlIGFueXRoaW5nIHRvIHRoZSBkZXZpY2UuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbElucHV0Q2hhbmdlKGV2ZW50OiBJbnB1dEV2ZW50KSB7IC8vIGZpcmVzIHdoZW4gcmV0dXJuIGlzIGVudGVyZWRcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VJbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZGV2aWNlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2VyaWFsSW5wdXRDaGFuZ2UgLSBubyBwb3J0IG9wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKiBwcml2YXRlIHN0dWZmICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbENoZWNrKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoXCJzZXJpYWxcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3J0cygpO1xyXG4gICAgICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5hZGRFdmVudExpc3RlbmVyKFwiY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEF1dG9tYXRpY2FsbHkgb3BlbiBldmVudC50YXJnZXQgb3Igd2FybiB1c2VyIGEgcG9ydCBpcyBhdmFpbGFibGUuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VyaWFsQ2hlY2s6Y29ubmVjdCcsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUG9ydHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHxldmVudC50YXJnZXR8IGZyb20gdGhlIFVJLlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlcmlhbCBwb3J0IHdhcyBvcGVuZWQsIGEgc3RyZWFtIGVycm9yIHdvdWxkIGJlIG9ic2VydmVkIGFzIHdlbGwuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VyaWFsQ2hlY2s6ZGlzY29ubmVjdCcsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdObyBzZXJpYWwgQVBJIGF2YWlsYWJsZSwgdHJ5IGFub3RoZXIgYnJvd3NlcicpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbEVycm9yKFwiVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHNlcmlhbCBwb3J0LiBDb25uZWN0aW9uIHRvIGRldmljZSBpbXBvc3NpYmxlISBVc2UgQ2hyb21lIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBvcnRzKCkge1xyXG4gICAgICAgIC8vIGxpc3RzIGFsbCByZWNlbnRseSB1c2VkIHBvcnRzLCBjb3VsZCBqdXN0IG9wZW4gb25lIHRoZW4uXHJcbiAgICAgICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJpYWwuZ2V0UG9ydHMoKS50aGVuKChwb3J0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlUG9ydHM6JywgcG9ydHMpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRzID0gcG9ydHM7XHJcbiAgICAgICAgICAgIGxldCBodG1sID0gJyc7Ly9kZXZpY2VzOjxicj4nO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3J0IG9mIHBvcnRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VyaWFsIGF2YWlsYWJsZSwgcG9ydHM6IGAsIHBvcnQuZ2V0SW5mbygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgdXNiUHJvZHVjdElkLCB1c2JWZW5kb3JJZCB9ID0gcG9ydC5nZXRJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdXBkYXRlUG9ydHMgcG9ydCBwaWQ6JHt1c2JQcm9kdWN0SWR9IHZpZDoke3VzYlZlbmRvcklkfWApO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWljcm9jaGlwXCI+PC9pPiBwaWQ6JHt1c2JQcm9kdWN0SWR9IHZpZDoke3VzYlZlbmRvcklkfSA8YnV0dG9uIGNsYXNzPVwidzMtYnRuIHczLXJvdW5kIHczLWxpZ2h0LWdyZXkgdzMtdGlueVwiIGlkPVwiJHt1c2JWZW5kb3JJZH0tJHt1c2JQcm9kdWN0SWR9XCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVnXCI+PC9pPiBjb25uZWN0IDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VJbmZvLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidG5zID0gdGhpcy5kZXZpY2VJbmZvLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYnRuIG9mIGJ0bnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHsgY29uc3QgaWRzID0gYnRuLmlkLnNwbGl0KCctJyk7IGNvbnNvbGUubG9nKGlkcyk7IHRoaXMuc2VyaWFsQ29ubmVjdERldmljZShwYXJzZUludChpZHNbMF0pLCBwYXJzZUludChpZHNbMV0pKSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUNvbm5lY3QgJiYgKHRoaXMucG9ydHMgPT0gbnVsbCB8fCB0aGlzLnBvcnRzLmxlbmd0aCA9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVBvcnRzOiBvcGVuIGRldiBidXR0b25zISEhJywgdGhpcy5kZXZpY2VDb25uZWN0LmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUNvbm5lY3QuY2xhc3NOYW1lID0gdGhpcy5kZXZpY2VDb25uZWN0LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYSBnaXZ2ZW4gcG9ydC4gQ2FuIGJlIHVzZWQgYWZ0ZXIgcXVlcmlpbmcgcG9ydHMgd2l0aCB1cGRhdGVQb3J0cy5cclxuICAgICAqIEBwYXJhbSBwb3J0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2VyaWFsUG9ydE9wZW4ocG9ydDogYW55KSB7XHJcbiAgICAgICAgcG9ydC5vbmNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDT05ORUNURURgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHBvcnQub25kaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRElTQ09OTkVDVEVEYCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25TZXJpYWxEaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZXJpYWxEaXNjb25uZWN0ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcG9ydC5vcGVuKHsgYmF1ZFJhdGU6IDI1MDAwMCB9KS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlTG9nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUxvZy5pbm5lckhUTUwgPSBcImNvbm5lY3RlZDxicj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9ydCBvcGVuZWQgPyAnLCB0aGlzLnBvcnQpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uU2VyaWFsQ29ubmVjdGVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZXJpYWxDb25uZWN0ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNlcmlhbFJlYWQuYmluZCh0aGlzKSwgMCk7IC8vIHN0YXJ0IHJlYWQgbG9vcFxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbEVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXJpYWxFcnJvcihlcnJvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdzZXJpYWxFcnJvcicsIGVycm9yKTtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VMb2cpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VMb2cuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidzMtcmVkXCI+JHtlcnJvcn08L3NwYW4+PGJyPmBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCwgc3RhcnRzIHRoZSByZWFkIGxpbmUgbG9vcC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxSZWFkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGFibGVTdHJlYW1DbG9zZWQgPSB0aGlzLnBvcnQucmVhZGFibGUucGlwZVRvKHRoaXMudGV4dERlY29kZXIud3JpdGFibGUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRlciA9IHRoaXMudGV4dERlY29kZXIucmVhZGFibGUuZ2V0UmVhZGVyKCk7XHJcbiAgICAgICAgICAgIC8vIExpc3RlbiB0byBkYXRhIGNvbWluZyBmcm9tIHRoZSBzZXJpYWwgZGV2aWNlLlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsUmVhZG9uLmJpbmQodGhpcyksIDEpOyAvLyB3aWxsIGxvb3AgdGhlcmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCwgaGFuZGxlcyB0aGUgcmVhZCBsaW5lIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc2VyaWFsUmVhZG9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGF3YWl0IHRoaXMucmVhZGVyLnJlYWQoKTtcclxuICAgICAgICAgICAgaWYgKGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSBzZXJpYWwgcG9ydCB0byBiZSBjbG9zZWQgbGF0ZXIuIC8vIERvZXMgbm90IGhhcHBlbiAhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRlci5yZWxlYXNlTG9jaygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbFJlYWQgLSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHVzaGVkU3R1ZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlIGlzIGEgc3RyaW5nLlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ1xcbicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBc3NlcnRpb24gZmFpbGVkICcsIHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTsgLy8gdGhlcmUgaXMgYSBcXG4gaW4gaXQgIVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCArPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRRdWV1ZS5wdXNoKHRoaXMuaW5wdXRMYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxMb2codGhpcy5pbnB1dExhc3QsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoZWRTdHVmZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRMYXN0ID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsUmVhZG9uIGxhc3Q6IFwiJHt0aGlzLmlucHV0TGFzdH1cImApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyBcXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsUmVhZG9uIGxhc3Q6IFwiJHt0aGlzLmlucHV0TGFzdH1cImApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwdXNoZWRTdHVmZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxDYWxsYmFjay5iaW5kKHRoaXMpLCA1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxSZWFkb24uYmluZCh0aGlzKSwgMSk7IC8vIHdpbGwgbG9vcCB0aGVyZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJpYWxDYWxsYmFjaygpIHtcclxuICAgICAgICAvLyBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmljZUxvZycpO1xyXG4gICAgICAgIC8vIGlmIChlbGVtKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBsYXRlc3QgPSB0aGlzLmlucHV0UXVldWUucG9wKCk7XHJcbiAgICAgICAgLy8gICAgIHdoaWxlIChsYXRlc3QpIHtcclxuICAgICAgICAvLyAgICAgICAgIGVsZW0uaW5uZXJIVE1MICs9IGAke2xhdGVzdH08YnI+YDtcclxuICAgICAgICAvLyAgICAgICAgIGxhdGVzdCA9IHRoaXMuaW5wdXRRdWV1ZS5wb3AoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbFdyaXRlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbExvZyh2YWx1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyB3cml0ZS4uLlxyXG4gICAgICAgIGxldCB1dGY4RW5jb2RlID0gbmV3IFRleHRFbmNvZGVyKCk7XHJcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gdGhpcy5wb3J0LndyaXRhYmxlLmdldFdyaXRlcigpO1xyXG4gICAgICAgIGF3YWl0IHdyaXRlci53cml0ZSh1dGY4RW5jb2RlLmVuY29kZShgJHt2YWx1ZX1cXG5gKSk7XHJcbiAgICAgICAgd3JpdGVyLnJlbGVhc2VMb2NrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXYWl0cyB1bnRpbCBkYXRhIHdhcyByZWFkIG9yIHRpbWVvdXRcclxuICAgICAqIEBwYXJhbSB0aW1lb3V0XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlcmlhbEF2YWlsKHRpbWVvdXQ6IG51bWJlciA9IDEwKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0UXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcmlhbExvZyh0ZXh0OiBzdHJpbmcsIGluY29tbWluZzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZVNlcmlhbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5kZXZpY2VTZXJpYWwuY2hpbGRFbGVtZW50Q291bnQgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoID0gdGhpcy5kZXZpY2VTZXJpYWwuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgIGlmIChjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsLnJlbW92ZUNoaWxkKGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5jb21taW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZVNlcmlhbC5pbm5lckhUTUwgKz0gYDxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hcnJvdy1yaWdodC10by1icmFja2V0XCI+PC9pPiAke3RleHR9PC9kaXY+YFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwuaW5uZXJIVE1MICs9IGA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcIj48L2k+ICR7dGV4dH08L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7a2RUcmVlfSBmcm9tICdrZC10cmVlLWphdmFzY3JpcHQnOyAvLyBub2RlIG1vZHVsZVxyXG4vLyBpbXBvcnQge2tkVHJlZSwga2RUcmVlT2JqZWN0fSBmcm9tICcuL2tkVHJlZSc7XHJcblxyXG5jbGFzcyBCb3VuZGluZ0JveCB7XHJcbiAgICBtaW54OiBudW1iZXIgPSA5OTk5OTtcclxuICAgIG1pbnk6IG51bWJlciA9IDk5OTk5O1xyXG4gICAgbWF4eDogbnVtYmVyID0gLTk5OTk5O1xyXG4gICAgbWF4eTogbnVtYmVyID0gLTk5OTk5O1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHVwZGF0ZUZyb21QYWQocGFkOlBhZCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHBhZC5wb3NYLCBwYWQucG9zWSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoeCA8IHRoaXMubWlueCkgdGhpcy5taW54ID0geDtcclxuICAgICAgICBpZiAoeSA8IHRoaXMubWlueSkgdGhpcy5taW55ID0geTtcclxuICAgICAgICBpZiAoeCA+IHRoaXMubWF4eCkgdGhpcy5tYXh4ID0geDtcclxuICAgICAgICBpZiAoeSA+IHRoaXMubWF4eSkgdGhpcy5tYXh5ID0geTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgYmI6ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX0gJHt0aGlzLmNlbnRlcigpWzFdfWApO1xyXG4gICAgfVxyXG4gICAgY2VudGVyKHpvb206IG51bWJlciA9IDEuMCk6IFt4OiBudW1iZXIsIHk6IG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbKHRoaXMubWlueCArICh0aGlzLm1heHggLSB0aGlzLm1pbngpIC8gMikgKiB6b29tLCAodGhpcy5taW55ICsgKHRoaXMubWF4eSAtIHRoaXMubWlueSkgLyAyKSAqIHpvb21dO1xyXG4gICAgfVxyXG4gICAgemVybyh6b29tOiBudW1iZXIgPSAxLjApOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMubWlueCAqIHpvb20sIHRoaXMubWlueSAqIHpvb21dO1xyXG4gICAgfVxyXG4gICAgc2l6ZSh6b29tOiBudW1iZXIgPSAxLjApOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gWyh0aGlzLm1heHggLSB0aGlzLm1pbngpICogem9vbSwgKHRoaXMubWF4eSAtIHRoaXMubWlueSkgKiB6b29tXTtcclxuICAgIH1cclxuICAgIGRpYWdvbmFsKHpvb206IG51bWJlciA9IDEuMCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZSh6b29tKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHNpemVbMF0qc2l6ZVswXSArIHNpemVbMV0qc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICAvKiogQ2hlY2sgaWYgcGFkIGlzIGluc2lkZSB0aGUgYm91bmRpbmdib3ggKi9cclxuICAgIGluc2lkZShwYWQ6IFBhZCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwYWQucG9zWCA+PSB0aGlzLm1pbnggJiYgcGFkLnBvc1ggPD0gdGhpcy5tYXh4KSAmJiAocGFkLnBvc1kgPj0gdGhpcy5taW55ICYmIHBhZC5wb3NZIDw9IHRoaXMubWF4eSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZFN0eWxlIHtcclxuICAgIHB1YmxpYyBmb3JtOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGZvcm06IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZCB7XHJcbiAgICBwb3NYOiBudW1iZXI7XHJcbiAgICBwb3NZOiBudW1iZXI7XHJcbiAgICBzdHlsZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3Ioc3R5bGU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvc1ggPSB4O1xyXG4gICAgICAgIHRoaXMucG9zWSA9IHk7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgfVxyXG4gICAgYXNUdXBsZSgpOltudW1iZXIsbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnBvc1gsIHRoaXMucG9zWV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQQ0IgeyAvL2V4dGVuZHMga2RUcmVlT2JqZWN0IHtcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIG1hcFN0eWxlczogTWFwPHN0cmluZywgUGFkU3R5bGU+O1xyXG4gICAgbWFwUGFkczogTWFwPHN0cmluZywgU2V0PFBhZD4+O1xyXG4gICAgZmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgbW91c2VGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBtb3VzZVN0YXJ0WDogbnVtYmVyID0gMDtcclxuICAgIG1vdXNlU3RhcnRZOiBudW1iZXIgPSAwO1xyXG4gICAgbW91c2VPZmZYOiBudW1iZXIgPSAwO1xyXG4gICAgbW91c2VPZmZZOiBudW1iZXIgPSAwO1xyXG4gICAgbW91c2VTZWxlY3Q6IGJvb2xlYW47XHJcbiAgICBtb3VzZVNlbGVjdFg6IG51bWJlcjtcclxuICAgIG1vdXNlU2VsZWN0WTogbnVtYmVyO1xyXG5cclxuICAgIHBvc1plcm86IG51bWJlcltdO1xyXG5cclxuICAgIHpvb206IG51bWJlciA9IDUuMDtcclxuICAgIGJiUGNiOiBCb3VuZGluZ0JveDtcclxuICAgIGJiU2VsZWN0aW9uOiBCb3VuZGluZ0JveDtcclxuICAgIGJiWmVybzogQm91bmRpbmdCb3g7IC8vIHVzZSBjZW50ZXIgYXMgemVyb1xyXG5cclxuICAgIHRyZWU6IGtkVHJlZTxQYWQ+O1xyXG4gICAgbmVhcmVzdDpbUGFkLCBudW1iZXJdW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWFwU3R5bGVzID0gbmV3IE1hcDxzdHJpbmcsIFBhZFN0eWxlPigpO1xyXG4gICAgICAgIHRoaXMubWFwUGFkcyA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8UGFkPj4oKTtcclxuICAgICAgICB0aGlzLmJiUGNiID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgdGhpcy5iYlplcm8gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICB0aGlzLmJiU2VsZWN0aW9uID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FudmFzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBaZXJvIHBvc2l0aW9uIHRvIHRoZSBsb3dlciBsZWZ0IG9mIHNlbGVjdGlvbiByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRaZXJvKCk6dm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHVzZSBsYXN0IHNlbGVjdGlvbiA/Pz9cclxuICAgICAgICB0aGlzLmJiWmVybyA9IHRoaXMuYmJTZWxlY3Rpb247XHJcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUGNiOnNldFplcm86ICR7dGhpcy5iYlplcm8uemVybygpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgWmVybyBwb3NpdGlvbiByZWxhdGl2ZSB0byBPcmlnaW4oMCwwKS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFplcm8oKTpbbnVtYmVyLG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJiWmVyby56ZXJvKCk7IC8vIGxvd2VyIGxlZnQgPz8gYmV0dGVyIHdoZW4gLmNlbnRlcigpID8/XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBBbGwgUGFkcyBpbiBzZWxlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTZWxlY3RlZCgpOlBhZFtdIHtcclxuICAgICAgICBsZXQgcmVzdWx0OlBhZFtdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBuZWFyIG9mIHRoaXMubmVhcmVzdCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZWFyKTtcclxuICAgICAgICAgICAgaWYobmVhci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZWFyWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgTG93ZXIgbGVmdCBvZiBzZWxlY3Rpb24gYXMgdHVwbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNlbGVjdGVkWmVybygpOltudW1iZXIsbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmJTZWxlY3Rpb24uemVybygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYWRDb3VudCgpOm51bWJlciB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBwYWRzZXQgb2YgdGhpcy5tYXBQYWRzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBwYWRzZXRbMV0uc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgem9vbVRvRml0KHNpemU6W251bWJlcixudW1iZXJdKSB7XHJcbiAgICAgICAgbGV0IHBzaXplID0gdGhpcy5iYlBjYi5zaXplKCk7XHJcbiAgICAgICAgbGV0IHp3ID0gc2l6ZVswXSAvIHBzaXplWzBdO1xyXG4gICAgICAgIGxldCB6aCA9IHNpemVbMV0gLyBwc2l6ZVsxXTtcclxuICAgICAgICB0aGlzLnpvb20gPSAoKHp3ID4gemgpPyB6aCA6IHp3KSAqIC45O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQY2I6em9vbVRvRml0IHpvb20gJHt0aGlzLnpvb219YCwgcHNpemUpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNlbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU9mZlggPSAtKHRoaXMuYmJQY2IuY2VudGVyKClbMF0gKiB0aGlzLnpvb20pICsgdGhpcy5jYW52YXMud2lkdGggLyAyO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWSA9IC0odGhpcy5iYlBjYi5jZW50ZXIoKVsxXSAqIHRoaXMuem9vbSkgKyB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkUGFkU3R5bGUobmFtZTogc3RyaW5nLCBmb3JtOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXBTdHlsZXMuc2V0KG5hbWUsIG5ldyBQYWRTdHlsZShmb3JtLCB3LCBoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGFkKHN0eWxlOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1hcFBhZHMuaGFzKHN0eWxlKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcFBhZHMuc2V0KHN0eWxlLCBuZXcgU2V0PFBhZD4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYWRzZXQgPSB0aGlzLm1hcFBhZHMuZ2V0KHN0eWxlKTtcclxuICAgICAgICBpZiAocGFkc2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3BhZCA9IG5ldyBQYWQoc3R5bGUsIHgsIHkpO1xyXG4gICAgICAgICAgICBwYWRzZXQuYWRkKG5ld3BhZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmJQY2IudXBkYXRlKHgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXRyZWUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHBhZHMgOiBQYWRbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwYWRzZXRzIG9mIHRoaXMubWFwUGFkcy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFkIG9mIHBhZHNldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRzLnB1c2gocGFkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50cmVlID0gbmV3IGtkVHJlZShwYWRzLCBQQ0IuZGlzdGFuY2UsIFtcInBvc1hcIiwgXCJwb3NZXCJdKTtcclxuICAgICAgICAgICAgLy8gdGhpcy50cmVlID0gbmV3IGtkVHJlZShQQ0IsIHBhZHMsIFBDQi5kaXN0YW5jZSwgW1wicG9zWFwiLCBcInBvc1lcIl0pOyAvLyB0cyB2ZXJzaW9uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cmVlIGJmOicsIHRoaXMudHJlZS5iYWxhbmNlRmFjdG9yKCkpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmV2ZW50LmJ1dHRvbnNcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiA9PSAwKSB7IC8vIHN0YXJ0IHNlbGVjdFxyXG4gICAgICAgICAgICBjb25zdCBteCA9IChldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgY29uc3QgbXkgPSAodGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wKSAtIHRoaXMubW91c2VPZmZZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRZID0gbXk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RZID0gbXk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGNiOm1vdXNlRG93bjogeDoke3RoaXMubW91c2VTdGFydFh9IHk6JHt0aGlzLm1vdXNlU3RhcnRZfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5idXR0b24gIT0gMCkgeyAvLyBwYW4gYXJvdW5kXHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFggPSBldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRZID0gZXZlbnQuY2xpZW50WSAqIHRyYW5zLmQgLSB0aGlzLm1vdXNlT2ZmWTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZUZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwY2I6bW91c2VVcCBldmVudDonLCBldmVudCk7XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uID09IDApIHsgLy8gc2VsZWN0XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJhbnMsIGV2ZW50KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJycsIHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WS10aGlzLmNhbnZhcy5vZmZzZXRUb3ApLCB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG14ID0gKGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlgpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBjb25zdCBteSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApIC0gdGhpcy5tb3VzZU9mZlkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WSA9IG15O1xyXG5cclxuICAgICAgICAgICAgLy8gYmIgPSBzZWxlY3RlZCByZWN0YW5nbGVcclxuICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uLnVwZGF0ZSh0aGlzLm1vdXNlU3RhcnRYLCB0aGlzLm1vdXNlU3RhcnRZKTtcclxuICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbi51cGRhdGUodGhpcy5tb3VzZVNlbGVjdFgsIHRoaXMubW91c2VTZWxlY3RZKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYWQgPSBuZXcgUGFkKCcnLCB0aGlzLmJiU2VsZWN0aW9uLmNlbnRlcigpWzBdLCB0aGlzLmJiU2VsZWN0aW9uLmNlbnRlcigpWzFdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBjYjptb3VzZVVwIGN4OiR7cGFkLnBvc1h9IGN5OiR7cGFkLnBvc1l9IGRpYWdvbmFsOiR7dGhpcy5iYlNlbGVjdGlvbi5kaWFnb25hbCgpfWApO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50cmVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQ6W1BhZCwgbnVtYmVyXVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzdCA9IHRoaXMuYmJTZWxlY3Rpb24uZGlhZ29uYWwoKTtcclxuICAgICAgICAgICAgICAgIGlmKGRpc3QgPCAwLjEpIHsgLy8gbm8gZHJhZyAtIG9ubHkgb25lXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLnRyZWUubmVhcmVzdChwYWQsIDEsIGRpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdCA9IGZvdW5kO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gKGRpc3QvMikgKiAoZGlzdC8yKTsgLy8gc2VhcmNoIHJlcXVpcmUgc3F1YXJlIGRpc3RhbmNlID9cclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRoaXMudHJlZS5uZWFyZXN0KHBhZCwgdGhpcy5nZXRQYWRDb3VudCgpLCBkaXN0KTsgLy8gdXV1aGhoIHVzZSBwYWQgY291bnQgIT9cclxuICAgICAgICAgICAgICAgICAgICBpZighZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBuZWFyIG9mIGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBtOiR7bXh9LCR7bXl9IG5lYXJlc3Q6JHtuZWFyWzBdLnBvc1h9LCR7bmVhclswXS5wb3NZfSAgZGlzdDoke01hdGguc3FydChuZWFyWzFdKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vIHV1dWhoaCBjaGVjayBpZiBpbnNpZGUgdGhlIGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJiU2VsZWN0aW9uLmluc2lkZShuZWFyWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0LnB1c2gobmVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbmVlZCBhIGJiIGZvciBhY3R1YWwgc2VsZWN0ZWQgcG9pbnRzIHRvIGdldCB6ZXJvIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICBsZXQgYmJOZXdTZWxlY3Rpb24gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBuZWFyIG9mIHRoaXMubmVhcmVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJiTmV3U2VsZWN0aW9uLnVwZGF0ZUZyb21QYWQobmVhclswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uID0gYmJOZXdTZWxlY3Rpb247XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBjYjptb3VzZVVwIHNlbGVjdGlvbiBmb3VuZCAjJHtmb3VuZC5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAvLyBvb29oaGggZG8gbm90IHRydXN0IGV2ZW50LmJ1dHRvbiwgaXQncyBhbHdheXMgMCBoZXJlICFcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGNiOm1vdXNlTW92ZScsZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgaWYodGhpcy5tb3VzZUZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU9mZlggPSBldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VTdGFydFg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZZID0gZXZlbnQuY2xpZW50WSAqIHRyYW5zLmQgLSB0aGlzLm1vdXNlU3RhcnRZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1vdXNlU2VsZWN0ICkge1xyXG4gICAgICAgICAgICBjb25zdCBteCA9IChldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgY29uc3QgbXkgPSAodGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wKSAtIHRoaXMubW91c2VPZmZZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFkgPSBteTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZVdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5kZWx0YVkpO1xyXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSAqPSAxLjE7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW91c2VPZmZYICo9IDAuOTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3VzZU9mZlkgKj0gMC45O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSAqPSAwLjk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW91c2VPZmZYICo9IDEuMTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3VzZU9mZlkgKj0gMS4xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlT3V0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3RhbmNlKGE6UGFkLCBiOlBhZCkge1xyXG4gICAgICAgIHJldHVybiAoYS5wb3NYIC0gYi5wb3NYKSooYS5wb3NYIC0gYi5wb3NYKSArICAoYS5wb3NZIC0gYi5wb3NZKSooYS5wb3NZIC0gYi5wb3NZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICAvLyB0aGVvcmV0aXNjaCBzby4uLlxyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdvcmFuZ2VyZWQnO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdhbnRpcXVld2hpdGUnO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGJiIGNlbnRlclxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMuYmJQY2IuY2VudGVyKHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGNlbnRlclswXSAtIDEwICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oY2VudGVyWzBdICsgMTAgKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhjZW50ZXJbMF0gKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdIC0gMTAgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGNlbnRlclswXSArIHRoaXMubW91c2VPZmZYLCBjZW50ZXJbMV0gKyAxMCArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAvLyBkcmF3IGJiXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmJiUGNiLnplcm8odGhpcy56b29tKVswXSArIHRoaXMubW91c2VPZmZYLCB0aGlzLmJiUGNiLnplcm8odGhpcy56b29tKVsxXSArIHRoaXMubW91c2VPZmZZLCB0aGlzLmJiUGNiLnNpemUodGhpcy56b29tKVswXSwgdGhpcy5iYlBjYi5zaXplKHRoaXMuem9vbSlbMV0pO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwYWRzdHlsZSBvZiB0aGlzLm1hcFBhZHMua2V5cygpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHkgPSB0aGlzLm1hcFN0eWxlcy5nZXQocGFkc3R5bGUpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWRzZXQgPSB0aGlzLm1hcFBhZHMuZ2V0KHBhZHN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHN0eSAmJiBwYWRzZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN3ID0gc3R5LndpZHRoICogdGhpcy56b29tO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2ggPSBzdHkuaGVpZ2h0ICogdGhpcy56b29tO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFkIG9mIHBhZHNldC52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHkuZm9ybSA9PSAnUicgfHwgc3R5LmZvcm0gPT0gJ08nIHx8IHN0eS5mb3JtID09ICdSb3VuZFJlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWCAqIHRoaXMuem9vbSAtIHN3IC8gMi4wICsgdGhpcy5tb3VzZU9mZlgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWSAqIHRoaXMuem9vbSAtIHNoIC8gMi4wICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdywgc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5LmZvcm0gPT0gJ0MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1ggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZC5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZC5wb3NYICogdGhpcy56b29tIC0gc3cgLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZC5wb3NZICogdGhpcy56b29tIC0gc2ggLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN0eS53aWR0aCAqIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkcmF3IHF1YXRzY2ggJHtzdHkuZm9ybX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBmb3IgcGFkc3R5bGVcclxuXHJcbiAgICAgICAgLy8gZHJhdyBzZWxlY3Rpb25Dcm9zcyhlcylcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdwdXJwbGUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGxldCBjc2l6ZSA9IC41O1xyXG4gICAgICAgIGZvcihjb25zdCBuZWFyIG9mIHRoaXMubmVhcmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oKG5lYXJbMF0ucG9zWC1jc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgbmVhclswXS5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oKG5lYXJbMF0ucG9zWCtjc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgbmVhclswXS5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8obmVhclswXS5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIChuZWFyWzBdLnBvc1krY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obmVhclswXS5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIChuZWFyWzBdLnBvc1ktY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmVhcmVzdDoke25lYXJbMF0ucG9zWH0sJHtuZWFyWzBdLnBvc1l9ICBkaXN0OiR7TWF0aC5zcXJ0KG5lYXJbMV0pfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBzZWxlY3Rpb24gbG93ZXIgbGVmdCA9IHplcm8ga2FuZGlkYXRlXHJcbiAgICAgICAgbGV0IHplcm8gPSBbMCwwXTtcclxuICAgICAgICBpZih0aGlzLmJiU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNzaXplID0gMiAqIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgemVybyA9IHRoaXMuYmJTZWxlY3Rpb24uemVybyh0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gLWNzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh6ZXJvWzBdICtjc2l6ZSArIHRoaXMubW91c2VPZmZYLCB6ZXJvWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXS1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0rY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyBvcmlnaW5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgemVybyA9IHRoaXMuYmJaZXJvLmNlbnRlcih0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygrY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLm1vdXNlT2ZmWCwgICAgICAgLWNzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlT2ZmWCwgICAgICAgK2NzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHplcm9cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgemVybyA9IHRoaXMuYmJaZXJvLnplcm8odGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSAtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXS1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXStjc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2VsZWN0aW9uUmVjdGFuZ2xlXHJcbiAgICAgICAgaWYodGhpcy5tb3VzZVNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdwdXJwbGUnO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTdGFydFkgICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVNlbGVjdFggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVN0YXJ0WSAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlU2VsZWN0WCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU2VsZWN0WSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTZWxlY3RZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVN0YXJ0WCAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVN0YXJ0WSAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCB7IFBDQiB9IGZyb20gXCIuL3BjYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlckdlcmJlciBleHRlbmRzIFBhcnNlciB7XHJcbiAgICByZU51bUZvcm1hdCA9IC9eJUZTTEFYKFswLTldKShbMC05XSlZKFswLTldKShbMC05XSlbKl0lLztcclxuICAgIHJlTWF0Y2hQYWQgPSAvXiglQUQpKERbMC05XSspKFtBLVphLXpdKylbLF0oWy0wLTkuXSspW1hdPyhbLTAtOS5dKyk/W1hdPyhbLTAtOS5dKyk/LztcclxuICAgIHJlTWF0Y2hQYWRDb29yZEluaXQgPSAvXihbREddWzAtOV0rKVsqXS87XHJcbiAgICByZU1hdGNoUGFkQ29vcmQgPSAvXlgoWy1dPykoWzAtOV0rKVkoWy1dPykoWzAtOV0rKUQoWzAtOV0rKVsqXS87XHJcbiAgICBfY2FuY2VsID0gZmFsc2U7XHJcbiAgICBmbG9hdEZyYWN0cyA9IDE7XHJcbiAgICBmbG9hdERlemlzID0gMTtcclxuICAgIGxhc3RQYWQgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBjYjogUENCKSB7XHJcbiAgICAgICAgc3VwZXIocGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2VGaWxlKGZpbGU6IEZpbGUpOlByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBmaWxlLmFycmF5QnVmZmVyKCkudGhlbigoYnVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZiwgJ1VURi04JywgKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0dlcmJlclRleHQodGV4dCkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcHJvY2Vzc0dlcmJlclRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlIGxpbmUgZW5kcy4uLlxyXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcci9nLCAnJyk7IC8vIHJlbW92ZSB3aW5kb3dzIHRyYXNoXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVOciA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICBsaW5lTnIrKztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdlcmJlcigke2xpbmVOcn0vJHtsaW5lcy5sZW5ndGh9KTogYCk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NHZXJiZXJMaW5lKGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc0NCKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NDQihsaW5lTnIgKiAxMDAgLyBsaW5lcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gLy8gZm9yXHJcblxyXG4gICAgICAgIHRoaXMucGNiLnJldHJlZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBwcm9jZXNzR2VyYmVyTGluZShsaW5lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGxpbmUgPSBsaW5lLnJlcGxhY2UoL1xcbi9nLCc8YnI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gWmFobGVuZm9ybWF0IGluZm8gbGluZSBcIiVGU0xBWDM0WTM0KiVcIlxyXG4gICAgICAgICAgICAgICAgLy8gICAlRlNMQVgyNVkyNSolIENvb3JkaW5hdGUgZm9ybWF0IHNwZWNpZmljYXRpb246XHJcbiAgICAgICAgICAgICAgICAvLyAgIENvb3JkaW5hdGVzIGZvcm1hdCBpcyAyLjU6XHJcbiAgICAgICAgICAgICAgICAvLyAgIDIgZGlnaXRzIGluIHRoZSBpbnRlZ2VyIHBhcnRcclxuICAgICAgICAgICAgICAgIC8vICAgNSBkaWdpdHMgaW4gdGhlIGZyYWN0aW9uYWwgcGFydFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hOdW1Gb3JtYXQgPSB0aGlzLnJlTnVtRm9ybWF0LmV4ZWMobGluZSk7IC8vbGluZS5tYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoTnVtRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hOdW1Gb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXREZXppcyA9IHBhcnNlSW50KG1hdGNoTnVtRm9ybWF0WzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0RnJhY3RzID0gcGFyc2VJbnQobWF0Y2hOdW1Gb3JtYXRbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnZXJiZXI6IGZsb2F0IGRpZ2l0cyA9ICR7dGhpcy5mbG9hdERlemlzfSAke3RoaXMuZmxvYXRGcmFjdHN9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHBhZCBkZWZpbml0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gJUFERDIxUiwwLjYwMDAwMFgxLjA1MDAwMColXHJcbiAgICAgICAgICAgICAgICAvLyAlQUREMTBSb3VuZFJlY3QsMC4xMjAwMDAgWCAtMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgWCAwLjY4MDAwMCBYIC0wLjE4MDAwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgIFggLTAuNjgwMDAwIFggMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICBYIC0wLjY4MDAwMCBYIDAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIFggMC42ODAwMDAgWCAwKiVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoUGFkID0gdGhpcy5yZU1hdGNoUGFkLmV4ZWMobGluZSk7IC8vIGxpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgLy8gV2VubiBcIkNcIiBkYW5uIGdpYnRzIG51ciBlaW5lIGNvb3JkXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaFBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFkc0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFkc0ZpZWxkLmlubmVySFRNTCArPSBgJHttYXRjaFBhZFsyXX0gJHttYXRjaFBhZFszXX0gJHttYXRjaFBhZFs0XX0gJHttYXRjaFBhZFs1XX08YnI+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkWzNdID09ICdSb3VuZFJlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpY2FkIG1hY3JvIHNjaG51bGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGNiLmFkZFBhZFN0eWxlKG1hdGNoUGFkWzJdLCBtYXRjaFBhZFszXSwgTWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs1XSkpLCBNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzZdKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyOiBzdHlsZSAke21hdGNoUGFkWzJdfSwke21hdGNoUGFkWzNdfSwgJHtNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKSl9LCAke01hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hQYWRbNl0pKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBjYi5hZGRQYWRTdHlsZShtYXRjaFBhZFsyXSwgbWF0Y2hQYWRbM10sIHBhcnNlRmxvYXQobWF0Y2hQYWRbNF0pLCBwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXI6IHN0eWxlICR7bWF0Y2hQYWRbMl19LCR7bWF0Y2hQYWRbM119LCAke3BhcnNlRmxvYXQobWF0Y2hQYWRbNF0pfSwgJHtwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHh4KiBjb21tYW5kIC0gc2hvdWxkIGJlIHBhZCBkcmF3XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFBhZENvb3JkSW5pdCA9IHRoaXMucmVNYXRjaFBhZENvb3JkSW5pdC5leGVjKGxpbmUpOyAvL2xpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmRJbml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hQYWRDb29yZEluaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZCA9IG1hdGNoUGFkQ29vcmRJbml0WzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gYSBwYWQgbGluZTogXCJYMzc5OTg0WTk2MzkzMEQwMypcIlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hQYWRDb29yZCA9IHRoaXMucmVNYXRjaFBhZENvb3JkLmV4ZWMobGluZSk7IC8vIGxpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0UGFkLnN0YXJ0c1dpdGgoJ0QnKSkgeyAvLyBpZ25vcmUgRzM2IG9yIHNvIGNvbW1hbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBhbmQgcmV0dXJuIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoUGFkQ29vcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ggPSBtYXRjaFBhZENvb3JkWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3kgPSBtYXRjaFBhZENvb3JkWzRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmZsb2F0RGV6aXMgKyB0aGlzLmZsb2F0RnJhY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIGZyZWFrJ3MgbGVhZGluZyB6ZXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3gubGVuZ3RoIDwgbGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeCA9IGAwJHtzeH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzeS5sZW5ndGggPCBsZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5ID0gYDAke3N5fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBhIGZyZWFrJ24gZmxvYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnkgPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4ID0gYCR7c3guc3Vic3RyaW5nKDAsIHRoaXMuZmxvYXREZXppcyl9LiR7c3guc3Vic3RyaW5nKHRoaXMuZmxvYXREZXppcyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3kgPSBgJHtzeS5zdWJzdHJpbmcoMCwgdGhpcy5mbG9hdERlemlzKX0uJHtzeS5zdWJzdHJpbmcodGhpcy5mbG9hdERlemlzKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeCA9IHBhcnNlRmxvYXQoc3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeSA9IHBhcnNlRmxvYXQoc3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRDb29yZFsxXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4ID0gZnggKiAtMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkWzNdID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnkgPSBmeSAqIC0xLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ5ID0gZnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3Jkc0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc0ZpZWxkLmlubmVySFRNTCArPSBgJHt0aGlzLmxhc3RQYWR9OiAgeDoke2Z4fSB5OiR7Znl9IDxicj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGNiLmFkZFBhZCh0aGlzLmxhc3RQYWQsIGZ4LCBmeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXI6IHBhZCAke2xhc3RQYWR9LCAke2Z4fSwgJHtmeX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaWdub3JpbmcgJHt0aGlzLmxhc3RQYWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihsaW5lTnIgPiAxNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrOyAvLyBmb3IgdGVzdGluZyAhISFcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGNiLmNlbnRlcigpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDApOyAvLyB0aGlzIGVuYWJsZXMgdGhlIHByb2dyZXNzYmFyIC8gVUkgdXBkYXRlcyAhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZvdW5kIG9uIHNlIHdlYi4uLlxyXG5cclxuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIsIGVuY29kaW5nLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZ0KSA9PiB7IGlmKGV2dC50YXJnZXQpIGNhbGxiYWNrKGV2dC50YXJnZXQucmVzdWx0KTsgfTtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IsIGVuY29kaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9BcnJheUJ1ZmZlcihzdHJpbmcsIGVuY29kaW5nLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbc3RyaW5nXSwgeyB0eXBlOiAndGV4dC9wbGFpbjtjaGFyc2V0PScgKyBlbmNvZGluZyB9KTtcclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChldnQpID0+IHsgaWYoZXZ0LnRhcmdldCkgY2FsbGJhY2soZXZ0LnRhcmdldC5yZXN1bHQpOyB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xyXG59XHJcbiIsImltcG9ydCB7IFBDQiB9IGZyb20gJy4vcGNiJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgcHVibGljIHByb2Nlc3NDQjogRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIHBhZHNGaWVsZDogSFRNTEVsZW1lbnR8bnVsbDtcclxuICAgIHB1YmxpYyBjb29yZHNGaWVsZDogSFRNTEVsZW1lbnR8bnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGNiOiBQQ0I7XHJcbiAgICBjb25zdHJ1Y3RvcihwY2I6IFBDQikge1xyXG4gICAgICAgIHRoaXMucGNiID0gcGNiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZUZpbGU/KGZpbGU6IEZpbGUpOlByb21pc2U8dm9pZD47IC8vIHZpcnR1YWwgIVxyXG4gICAgcHVibGljIGNhbmNlbD8oKTogdm9pZDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguSEFTSF9SRUZfZjdjMTIyYTdlMDIxNTAxNi5qcy5tYXAifQ==
