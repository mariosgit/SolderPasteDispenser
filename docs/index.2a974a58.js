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


/**
 * Marlin: Device specific implementation.
*/ function $73ed4a965a39db34$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


var $467041f85a1988c8$exports = {};
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


// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream

class $66c36f122a80174e$export$8215d14a63d9fb10 {
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
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "inputLast", "");
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "inputQueue", []);
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
class $38e49bb257334d2a$var$BoundingBox {
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
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "minx", 99999);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "miny", 99999);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "maxx", -99999);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "maxy", -99999);
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
class $38e49bb257334d2a$export$bdf465113f979d8f {
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
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "fileName", "");
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "mouseFlag", false);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "mouseStartX", 0);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "mouseStartY", 0);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "mouseOffX", 0);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "mouseOffY", 0);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "zoom", 5.0);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "nearest", []);
        // super();
        this.mapStyles = new Map();
        this.mapPads = new Map();
        this.bbPcb = new $38e49bb257334d2a$var$BoundingBox();
        this.bbZero = new $38e49bb257334d2a$var$BoundingBox();
        this.bbSelection = new $38e49bb257334d2a$var$BoundingBox();
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
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "zero", [
            0,
            0
        ]);
        this.marlinDiv = document.getElementById("Marlin");
        this.initHtml();
    }
}




class $e520db273add8f05$export$7acfa6ed01010e37 {
    constructor(pcb){
        this.pcb = pcb;
    }
}


class $b9ff7f25c95f0c7d$export$fc5d4ca282e021b1 extends (0, $e520db273add8f05$export$7acfa6ed01010e37) {
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
    constructor(pcb){
        super(pcb);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "reNumFormat", /^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "reMatchPad", /^(%AD)(D[0-9]+)([A-Za-z]+)[,]([-0-9.]+)[X]?([-0-9.]+)?[X]?([-0-9.]+)?/);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "reMatchPadCoordInit", /^([DG][0-9]+)[*]/);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "reMatchPadCoord", /^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "_cancel", false);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "floatFracts", 1);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "floatDezis", 1);
        (0, $73ed4a965a39db34$export$2e2bcd8739ae039)(this, "lastPad", "");
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
function $7f3876a5f3d47d5a$var$init() {
    if ($7f3876a5f3d47d5a$var$uploadButton && $7f3876a5f3d47d5a$var$menuSetZero && $7f3876a5f3d47d5a$var$menuMoveTo && $7f3876a5f3d47d5a$var$menuMoveAll && $7f3876a5f3d47d5a$var$menuBlob && $7f3876a5f3d47d5a$var$progressCancel && $7f3876a5f3d47d5a$var$padsField && $7f3876a5f3d47d5a$var$coordsField && $7f3876a5f3d47d5a$var$body && $7f3876a5f3d47d5a$var$canvas && $7f3876a5f3d47d5a$var$footer) {
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
            console.log("File(s) in drop zone");
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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEVBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsTUFBTSxNQUFNLENBQUMsR0FBRSxTQUFTLE1BQU0sQ0FBQztvQkFBRyxFQUFFLElBQUksSUFBRyxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsSUFBSSxHQUFDLENBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUUsRUFBRSxLQUFLLEdBQUMsSUFBRSxLQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRyxLQUFLLEdBQUMsRUFBRSxFQUFDLElBQUUsSUFBRSxFQUFFLE1BQU0sR0FBQyxJQUFFLEtBQUcsR0FBRztvQkFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBRyxFQUFFLE9BQU8sSUFBRyxJQUFJO2dCQUFBO1lBQUM7U0FBRSxHQUFFLENBQUM7SUFBQTtJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBRyxDQUFFLENBQUEsYUFBYSxDQUFBLEdBQUcsTUFBTSxJQUFJLFVBQVUscUNBQW9DO0lBQUE7SUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFO1lBQUMsRUFBRSxVQUFVLEdBQUMsRUFBRSxVQUFVLElBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBWSxHQUFDLENBQUMsR0FBRSxXQUFVLEtBQUksQ0FBQSxFQUFFLFFBQVEsR0FBQyxDQUFDLENBQUEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUU7UUFBQTtJQUFDO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsT0FBTyxLQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUMsSUFBRyxLQUFHLEVBQUUsR0FBRSxJQUFHLENBQUM7SUFBQTtJQUFDLElBQUksSUFBRSxXQUFVO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztRQUFBO1FBQUMsT0FBTyxFQUFFLEdBQUU7WUFBQztnQkFBQyxLQUFJO2dCQUFPLE9BQU0sU0FBUyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUk7b0JBQUMsRUFBRSxJQUFJLElBQUcsRUFBRSxTQUFTLElBQUcsRUFBRSxXQUFXLEdBQUMsR0FBRSxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsSUFBRyxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUcsRUFBRSxNQUFNLElBQUcsRUFBRSxPQUFPLEVBQUU7Z0JBQUE7WUFBQztTQUFFLEdBQUUsQ0FBQztJQUFBLEtBQUksSUFBRSxXQUFVO1FBQUMsU0FBUyxJQUFHO1lBQUMsSUFBSSxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxNQUFNLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsVUFBVSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxnQkFBZ0I7WUFBQyxFQUFFLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUk7UUFBQTtRQUFDLE9BQU8sRUFBRSxHQUFFO1lBQUM7Z0JBQUMsS0FBSTtnQkFBYyxPQUFNLFNBQVMsQ0FBQyxFQUFDO29CQUFDLElBQUksSUFBSSxJQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLEVBQUUsRUFBQyxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxLQUFHLEVBQUU7d0JBQUMsSUFBSSxJQUFFLElBQUUsS0FBRzt3QkFBRSxFQUFFLElBQUksQ0FBQyxJQUFFLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxNQUFNLElBQUUsSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLE1BQU0sQ0FBQztvQkFBQztvQkFBQyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsS0FBRyxFQUFFO3dCQUFDLElBQUksSUFBRSxJQUFFLEtBQUc7d0JBQUUsRUFBRSxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEtBQUssRUFBQyxLQUFHLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsS0FBSyxFQUFDLEVBQUU7b0JBQUM7b0JBQUMsSUFBSSxDQUFDLEtBQUssR0FBQztnQkFBQztZQUFDO1lBQUU7Z0JBQUMsS0FBSTtnQkFBVyxPQUFNLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUk7b0JBQUMsRUFBRSxJQUFJLElBQUcsRUFBRSxJQUFJLEdBQUMsR0FBRSxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsUUFBUSxDQUFDLEtBQUksR0FBRSxHQUFHO29CQUFDLElBQUksSUFBSSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsS0FBSyxFQUFDLEtBQUcsSUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUUsR0FBRTtvQkFBSSxJQUFJLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1B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cUJBQXFCLEdBQUcsTUFBTSxFQUFFLCtCQUErQjtZQUNoRiw0QkFBTSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUN0Qyw2QkFBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxhQUFhLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7QUFDTDtBQUVBLFNBQVMsZ0JBQWdCLENBQUMsb0JBQW9CO0FBRTlDLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQVE7SUFDdkMsaUNBQWlDO0lBQ2pDLFdBQVcsTUFBTTtBQUNyQiIsInNvdXJjZXMiOlsic3JjL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1jb29yZHMvZGlzdC9pbmRleC5qcyIsInNyYy9kZXZpY2VNYXJsaW4udHMiLCJub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fZGVmaW5lX3Byb3BlcnR5Lm1qcyIsIm5vZGVfbW9kdWxlcy9rZC10cmVlLWphdmFzY3JpcHQva2RUcmVlLmpzIiwic3JjL2RldmljZS50cyIsInNyYy9wY2IudHMiLCJzcmMvcGFyc2VyR2VyYmVyLnRzIiwic3JjL3BhcnNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBNb3VzZSB9IGZyb20gJ2NhbnZhcy1jb29yZHMnIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db2RlRHJha2VuL2NhbnZhcy1jb29yZHNcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnLi9kZXZpY2UnO1xyXG5pbXBvcnQgeyBNYXJsaW4gfSBmcm9tICcuL2RldmljZU1hcmxpbic7XHJcbmltcG9ydCB7IFBDQiwgUGFkLCBQYWRTdHlsZSB9IGZyb20gJy4vcGNiJztcclxuaW1wb3J0IHsgUGFyc2VyR2VyYmVyIH0gZnJvbSAnLi9wYXJzZXJHZXJiZXInO1xyXG5cclxuLy8gc2ltcGxlciAhISEgY29uc3QgaW5mb0Ryb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNpbmZvRHJvcERvd24nKTtcclxuXHJcbmNvbnN0IGJvZHk6IEhUTUxCb2R5RWxlbWVudCB8IG51bGwgPSA8SFRNTEJvZHlFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5jb25zdCBtZXNzYWdlRWxlbTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VFbGVtXCIpO1xyXG5jb25zdCB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRCdXR0b25cIik7XHJcbmNvbnN0IHBhZHNGaWVsZDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZHNGaWVsZFwiKTtcclxuY29uc3QgY29vcmRzOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ29vcmRzXCIpO1xyXG5jb25zdCBjb29yZHNGaWVsZDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb3Jkc0ZpZWxkXCIpO1xyXG5jb25zdCBkcm9wWm9uZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wWm9uZVwiKTtcclxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgPSA8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5jb25zdCBkZWJ1ZzogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnXCIpO1xyXG5jb25zdCBwcm9ncmVzczogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xyXG5jb25zdCBwcm9ncmVzc2JhcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NiYXInKTtcclxuY29uc3QgY29udGV4dE1lbnU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRleHRNZW51Jyk7XHJcbmNvbnN0IHByb2dyZXNzQ2FuY2VsOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc0NhbmNlbCcpO1xyXG5cclxuY29uc3QgbWVudVNldFplcm86IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51U2V0WmVyb1wiKTtcclxuY29uc3QgbWVudU1vdmVUbzogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVNb3ZlVG9cIik7XHJcbmNvbnN0IG1lbnVNb3ZlQWxsOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudU1vdmVBbGxcIik7XHJcbmNvbnN0IG1lbnVCbG9iOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJsb2JcIik7XHJcblxyXG5cclxuY29uc3QgbWFpbjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbmNvbnN0IG9wZW5TaWRlYmFyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3BlblNpZGViYXJcIik7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF07XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcclxuXHJcbmxldCBtZXNzYWdlQ2xlYXJUaW1lb3V0Om51bWJlcnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbmxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xyXG5sZXQgbW91c2U6IE1vdXNlLCBncmlkOiBHcmlkO1xyXG5sZXQgcGNiOiBQQ0I7XHJcblxyXG5sZXQgZGV2aWNlID0gbmV3IE1hcmxpbigpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGlmICh1cGxvYWRCdXR0b24gJiYgbWVudVNldFplcm8gJiYgbWVudU1vdmVUbyAmJiBtZW51TW92ZUFsbCAmJiBtZW51QmxvYiAmJiBwcm9ncmVzc0NhbmNlbCAmJiBwYWRzRmllbGQgJiYgY29vcmRzRmllbGQgJiYgYm9keSAmJiBjYW52YXMgJiYgZm9vdGVyKSB7XHJcbiAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZU1vdmUoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlRG93bihldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlVXAoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VPdXQoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VXaGVlbChldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICB1cGxvYWRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHVwbG9hZEZpbGVFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB1cGxvYWRGaWxlRWxlLnR5cGUgPSBcImZpbGVcIjtcclxuICAgICAgICAgICAgdXBsb2FkRmlsZUVsZS5jbGljaygpO1xyXG4gICAgICAgICAgICB1cGxvYWRGaWxlRWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXYpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdXNlciBoYWQgc2VsZWN0ZWQgYSBmaWxlXHJcbiAgICAgICAgICAgICAgICBpZiAodXBsb2FkRmlsZUVsZS5maWxlcyAmJiB1cGxvYWRGaWxlRWxlLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHVwbG9hZEZpbGVFbGUuZmlsZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlsZTogJHtmaWxlLm5hbWV9IHNpemU6JHtmaWxlLnNpemV9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3BsZWFzZSBjaG9vc2UgYSBmaWxlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudVNldFplcm8ub25jbGljayA9IChldmVudDpNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGNiLnNldFplcm8oKTtcclxuICAgICAgICAgICAgZGV2aWNlLnNldFplcm8ocGNiLmdldFplcm8oKSk7IC8vIGRldmljZSBtdXN0IHN1YnN0cmFjdCBcInplcm9cIiBmcm9tIGFsbCBjb29yZHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVNb3ZlVG8ub25jbGljayA9IChldmVudDpNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBjb29yZHMgISEhXHJcbiAgICAgICAgICAgIC8vICEhISBuZWVkIHRvIGJlIHJlbGF0aXZlIHRvIHplcm8gISEhIHV1dWhoaFxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHBhZHMgPSBwY2IuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICAgICAgLy8gaWYgKHBhZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBhZDogUGFkID0gcGFkc1swXTtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHBhZCk7XHJcbiAgICAgICAgICAgIC8vICAgICBkZXZpY2UubW92ZVRvKHBhZC5wb3NYLCBwYWQucG9zWSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGNiLmdldFNlbGVjdGVkWmVybygpOyAvLyBsb3dlciBsZWZ0IG9mIHNlbGVjdGlvblxyXG4gICAgICAgICAgICBkZXZpY2UubW92ZVRvKHBvc1swXSwgcG9zWzFdLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnVNb3ZlQWxsLm9uY2xpY2sgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwbGlzdCA9IHBjYi5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICBsZXQgcHplcm8gPSBwY2IuZ2V0U2VsZWN0ZWRaZXJvKCk7XHJcbiAgICAgICAgICAgIGRldmljZS5tb3ZlVG9BbGwocGxpc3QsIHB6ZXJvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudUJsb2Iub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZXZpY2UuYmxvYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9keS5vbmRyb3AgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXYpO1xyXG4gICAgICAgICAgICBpZiAoZXYuZGF0YVRyYW5zZmVyICYmIGV2LmRhdGFUcmFuc2Zlci5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIERhdGFUcmFuc2Zlckl0ZW1MaXN0IGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcclxuICAgICAgICAgICAgICAgIFsuLi5ldi5kYXRhVHJhbnNmZXIuaXRlbXNdLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBkcm9wcGVkIGl0ZW1zIGFyZW4ndCBmaWxlcywgcmVqZWN0IHRoZW1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5raW5kID09PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4oCmIGl0ZW1bJHtpfV0ubmFtZSA9ICR7ZmlsZS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0dlcmJlckZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXIgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxyXG4gICAgICAgICAgICAgICAgWy4uLmV2LmRhdGFUcmFuc2Zlci5maWxlc10uZm9yRWFjaCgoZmlsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDigKYgZmlsZVske2l9XS5uYW1lID0gJHtmaWxlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkub25kcmFnb3ZlciA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmlsZShzKSBpbiBkcm9wIHpvbmUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciAoUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbmVkKVxyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uY29udGV4dG1lbnUnLGV2KTtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5zdHlsZS5sZWZ0ID0gYCR7ZXYucGFnZVh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuc3R5bGUudG9wID0gYCR7ZXYucGFnZVl9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLWhpZGUnLCAndzMtc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbnZhcy5vbm1vdXNldXAgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgcGNiID0gbmV3IFBDQigpO1xyXG4gICAgICAgICAgICBwY2Iuc2V0Q2FudmFzKGN0eCwgY2FudmFzKTtcclxuXHJcbiAgICAgICAgICAgIG1vdXNlID0gbmV3IE1vdXNlKGN0eCwgY2FudmFzKTtcclxuICAgICAgICAgICAgbW91c2UudHJhY2soKTtcclxuICAgICAgICAgICAgZ3JpZCA9IG5ldyBHcmlkKCk7XHJcbiAgICAgICAgICAgIGdyaWQuc3RlcCA9IDI7XHJcbiAgICAgICAgICAgIGdyaWQubGluZVdpZHRoID0gMC4wMztcclxuICAgICAgICAgICAgZ3JpZC5ib2xkV2lkdGggPSAwLjA1O1xyXG4gICAgICAgICAgICBncmlkLmNyZWF0ZUxpbmVzKGNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdtaXNzaW5nIGh0bWwgZWxlbWVudHMgIScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlKHRleHQ6IHN0cmluZykge1xyXG4gICAgaWYobWVzc2FnZUNsZWFyVGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobWVzc2FnZUNsZWFyVGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBpZihtZXNzYWdlRWxlbSkge1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtLmlubmVySFRNTCA9IGAke3RleHR9YDtcclxuICAgICAgICBtZXNzYWdlQ2xlYXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQobWVzc2FnZUNsZWFyLCAxMDAwMCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWVzc2FnZUNsZWFyKCkge1xyXG4gICAgbWVzc2FnZUNsZWFyVGltZW91dCA9IHVuZGVmaW5lZDtcclxuICAgIGlmKG1lc3NhZ2VFbGVtKSB7XHJcbiAgICAgICAgbWVzc2FnZUVsZW0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIGlmIChjYW52YXMgJiYgY3R4KSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG5cclxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKFxyXG4gICAgICAgICAgICBwY2IgPyBwY2Iuem9vbSA6IDEsIDAsXHJcbiAgICAgICAgICAgIDAsIHBjYiA/IHBjYi56b29tIDogMSxcclxuICAgICAgICAgICAgMCwgMCk7XHJcblxyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAvLyBncmlkLmRyYXcoY3R4LCBjYW52YXMpO1xyXG4gICAgICAgIC8vIGdyaWQuc3RlcCA9IHBjYj8xMC4wL3BjYi56b29tOjEwLjA7XHJcbiAgICAgICAgLy8gZ3JpZC5jcmVhdGVMaW5lcyhjYW52YXMpO1xyXG4gICAgICAgIGdyaWQubGluZXMuZm9yRWFjaChsaW5lID0+IGxpbmUuZHJhdyhjdHgpKVxyXG4gICAgICAgIG1vdXNlLmRyYXcoKTtcclxuXHJcblxyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIC0xLFxyXG4gICAgICAgICAgICAwLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gY3R4LnNjYWxlKDEsLTEpOyAvLyBmbGlwIGRpc3BsYXkgeVxyXG5cclxuICAgICAgICBpZiAocGNiKSB7XHJcbiAgICAgICAgICAgIHBjYi5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzR2VyYmVyRmlsZShmaWxlOiBGaWxlKSB7XHJcbiAgICBpZiAocGFkc0ZpZWxkICYmIGNvb3Jkc0ZpZWxkICYmIGN0eCAmJiBjYW52YXMgJiYgcHJvZ3Jlc3MgJiYgcHJvZ3Jlc3NiYXIgJiYgcHJvZ3Jlc3NDYW5jZWwgJiYgZHJvcFpvbmUpIHsgLy8gbWFrZXMgdHlwZXNjcmlwdCBoYXBweS4uLlxyXG5cclxuICAgICAgICBwY2IgPSBuZXcgUENCKCk7XHJcbiAgICAgICAgcGNiLnNldENhbnZhcyhjdHgsIGNhbnZhcyk7XHJcbiAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBQYXJzZXJHZXJiZXIocGNiKTtcclxuXHJcbiAgICAgICAgcGFkc0ZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvb3Jkc0ZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRyb3Bab25lLmlubmVyVGV4dCA9IGZpbGUubmFtZTtcclxuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgcGFyc2VyLnBhZHNGaWVsZCA9IHBhZHNGaWVsZDtcclxuICAgICAgICBwYXJzZXIuY29vcmRzRmllbGQgPSBjb29yZHNGaWVsZDtcclxuICAgICAgICBwcm9ncmVzc0NhbmNlbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBwYXJzZXIuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlci5wcm9jZXNzQ0IgPSAodmFsdWU6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2Jhcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIuc3R5bGUud2lkdGggPSBgJHt2YWx1ZX0lYDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9ncmVzczonLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgcGFyc2VyLnBhcnNlRmlsZShmaWxlKTtcclxuXHJcbiAgICAgICAgcGNiLnpvb21Ub0ZpdChbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSk7XHJcblxyXG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5nbG9iYWxUaGlzLmFjY29yZGlvblRvZ2dsZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtc2hvd1wiKSA9PSAtMSAmJiBlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtaGlkZVwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSArPSBcIiB3My1zaG93XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtc2hvd1wiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoXCJ3My1zaG93XCIsIFwidzMtaGlkZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoXCJ3My1oaWRlXCIsIFwidzMtc2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignYWNjb3JkaW9uVG9nZ2xlciBubyBlbGVtIHdpdGggaWQ6JywgaWQpO1xyXG4gICAgfVxyXG4gICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5vcGVuU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGlmIChtYWluICYmIGRlYnVnICYmIG9wZW5TaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMzUwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS53aWR0aCA9IFwiMzUwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIG9wZW5TaWRlYmFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuY2xvc2VTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgaWYgKG1haW4gJiYgZGVidWcgJiYgb3BlblNpZGViYXJCdXR0b24pIHtcclxuICAgICAgICBtYWluLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgb3BlblNpZGViYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuem9vbVRvRml0ID0gKCkgPT4ge1xyXG4gICAgaWYocGNiICYmIGNhbnZhcykge1xyXG4gICAgICAgIHBjYi56b29tVG9GaXQoW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5nbG9iYWxUaGlzLnJvdGF0ZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgaWYocGNiICYmIGNhbnZhcykge1xyXG4gICAgICAgIC8vIHBjYi56b29tVG9GaXQoW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0pO1xyXG4gICAgfVxyXG4gICAgbWVzc2FnZSgnbcO8c3N0ZSBtYSBlaW5lciBpbXBsZW1lbnRpZXJlbiwgbmUnKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5yZXNpemUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2FudmFzICYmIGhlYWRlciAmJiBmb290ZXIgJiYgZGVidWcgJiYgY29vcmRzKSB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQgLSBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgICBtb3VzZS5kcmF3KCk7XHJcbiAgICAgICAgZ3JpZC5kcmF3KGN0eCwgY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0IG9mIGRlYnVnIGlzIGlubmVySGVpZ2h0IC0gbWFyZ2luIHRvcC9ib3R0b20gbW9yZSBvciBsZXNzIC0gZm9vdGVyLmhlaWdodFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IG1hcmdpbicsIGRlYnVnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgICAgbGV0IGRtYXhoZWlnaHQgPSBpbm5lckhlaWdodCAtIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7IC8vIGNhbnZhcy5oZWlnaHQgKyBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gMTY7XHJcbiAgICAgICAgLy8gZGVidWcuc3R5bGUuaGVpZ2h0ID0gYCR7ZGhlaWdodH1weGA7IC8vIDE2IGlzIG1hcmdpblRvcFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IGlubmVyIGhlaWdodCcsIGlubmVySGVpZ2h0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBkZWJ1ZyBoZWlnaHQnLCBkaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0IG9mIGFsbCBvdGhlciBlbGVtZW50cyBpbiBkZWJ1Z1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGRlYnVnLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5jaGlsZDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHJlc2l6ZTogICAke2NoaWxkLmlkfSAke2VsZW0uY2xpZW50SGVpZ2h0fSAke2VsZW0uY2xhc3NOYW1lfWApO1xyXG4gICAgICAgICAgICBpZihlbGVtLmNsYXNzTmFtZS5pbmRleE9mKCd3My1oaWRlJykgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IGVsZW0uY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZTogZGVidWcgY29udGVudCBoZWlnaHQnLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBzbyBmYXIgc28gZ29vZFxyXG5cclxuICAgICAgICAvLyBpZiBjb29yZHMgaXMgc2hvd24sIHNldCBkZWJ1ZyBzaXplIHRvIG1heFxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBpcyBzaG93biwgZ2l2ZSBpdCBhbGwgdGhlIHJlc3Qgb2YgdGhlIHNwYWNlXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSBjb29yZHMgJywgY29vcmRzLmNsYXNzTmFtZS5pbmRleE9mKCd3My1oaWRlJykpO1xyXG4gICAgICAgIGlmKGNvb3Jkcy5jbGFzc05hbWUuaW5kZXhPZigndzMtaGlkZScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgY29vcmRzIGlzIE5PVCB2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGRlYnVnLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCsxNn1weGA7XHJcbiAgICAgICAgICAgIGNvb3Jkcy5zdHlsZS5oZWlnaHQgPSBgJHsxNn1weGA7IC8vIGVnYWwgP1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgY29vcmRzIGlzIHZpc2libGUnKTtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGNvb3Jkcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7IC8vIGRvIG5vdCBjb3VudCBjb29yZHMgdG8gaGlnaHRcclxuICAgICAgICAgICAgZGVidWcuc3R5bGUuaGVpZ2h0ID0gYCR7ZG1heGhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvb3Jkcy5zdHlsZS5oZWlnaHQgPSBgJHtkbWF4aGVpZ2h0IC0gaGVpZ2h0IC0gMTZ9cHhgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICh2YWwpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGByZXNpemU6ICR7dmFsfWApO1xyXG4gICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxufSlcclxuIiwiKGZ1bmN0aW9uICgpIHt2YXIgYT17fTtmdW5jdGlvbiBnKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBjKHQsZSl7Zm9yKHZhciBvPTA7bzxlLmxlbmd0aDtvKyspe3ZhciBzPWVbb107cy5lbnVtZXJhYmxlPXMuZW51bWVyYWJsZXx8ITEscy5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gcyYmKHMud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHMua2V5LHMpfX1mdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZSYmYyh0LnByb3RvdHlwZSxlKSxvJiZjKHQsbyksdH12YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxvKXt2YXIgcz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06XCJncmF5XCIsaT1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106XCIxNnB4IE1vbm9zcGFjZVwiLHI9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOjAsbj1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06MDtnKHRoaXMsdCksdGhpcy54PXIsdGhpcy55PW4sdGhpcy5jdHg9ZSx0aGlzLmNhbnZhcz1vLHRoaXMuY29sb3I9cyx0aGlzLmZvbnQ9aSx0aGlzLnNldFBvcz10aGlzLnNldFBvcy5iaW5kKHRoaXMpfXJldHVybiBoKHQsW3trZXk6XCJ0cmFja1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXSxlPXRoaXMuY2FudmFzO3JldHVybiB0P2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuc2V0UG9zKTplLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLnNldFBvcyksdGhpc319LHtrZXk6XCJzZXRQb3NcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gdGhpcy54PU1hdGguZmxvb3IodC5jbGllbnRYLWUubGVmdCksdGhpcy55PU1hdGguZmxvb3IodC5jbGllbnRZLWUudG9wKSx0aGlzfX0se2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMueCxlPXRoaXMueSxvPXRoaXMuY2FudmFzLHM9dGhpcy5jdHgsaT10aGlzLmZvbnQscj10aGlzLmNvbG9yLG49XCJYOiBcIi5jb25jYXQodCxcIiwgWTogXCIpLmNvbmNhdChlKTtzLnNhdmUoKSxzLmZpbGxTdHlsZT1yLHMuZm9udD1pO3ZhciBhPXQ8by53aWR0aC8yPzIwOi1zLm1lYXN1cmVUZXh0KG4pLndpZHRoLTIwLHY9ZTxvLmhlaWdodC8yPzI1Oi0xODtyZXR1cm4gcy5maWxsVGV4dChuLHRoaXMueCthLHRoaXMueSt2KSxzLnJlc3RvcmUoKSx0aGlzfX1dKSx0fSgpO2Z1bmN0aW9uIGQodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGYodCxlKXtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKyl7dmFyIHM9ZVtpXTtzLmVudW1lcmFibGU9cy5lbnVtZXJhYmxlfHwhMSxzLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBzJiYocy53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscy5rZXkscyl9fWZ1bmN0aW9uIGUodCxlLGkpe3JldHVybiBlJiZmKHQucHJvdG90eXBlLGUpLGkmJmYodCxpKSx0fXZhciBiPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLGkscyxyLGwsbil7ZCh0aGlzLHQpLHRoaXMuY29sb3I9ZSx0aGlzLmxpbmVXaWR0aD1pLHRoaXMuc3RhcnRYPXMsdGhpcy5zdGFydFk9cix0aGlzLmVuZFg9bCx0aGlzLmVuZFk9bn1yZXR1cm4gZSh0LFt7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY29sb3IsaT10aGlzLmxpbmVXaWR0aCxzPXRoaXMuc3RhcnRYLHI9dGhpcy5zdGFydFksbD10aGlzLmVuZFgsbj10aGlzLmVuZFk7dC5zYXZlKCksdC5iZWdpblBhdGgoKSx0LnN0cm9rZVN0eWxlPWUsdC5saW5lV2lkdGg9aSx0Lm1vdmVUbyhzLHIpLHQubGluZVRvKGwsbiksdC5zdHJva2UoKSx0LnJlc3RvcmUoKX19XSksdH0oKSxqPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImdyYXlcIixpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTouMyxzPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXToxMCxyPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTo1LGw9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOlwiRGFya0dyYXlcIixuPWFyZ3VtZW50cy5sZW5ndGg+NSYmdm9pZCAwIT09YXJndW1lbnRzWzVdP2FyZ3VtZW50c1s1XTouNSxvPWFyZ3VtZW50cy5sZW5ndGg+NiYmdm9pZCAwIT09YXJndW1lbnRzWzZdP2FyZ3VtZW50c1s2XTpcIjE2cHggTW9ub3NwYWNlXCI7ZCh0aGlzLHQpLHRoaXMuY29sb3I9ZSx0aGlzLmxpbmVXaWR0aD1pLHRoaXMuc3RlcD1zLHRoaXMuYm9sZE50aD1yLHRoaXMuYm9sZENvbG9yPWwsdGhpcy5ib2xkV2lkdGg9bix0aGlzLmZvbnQ9byx0aGlzLmxpbmVzPW51bGx9cmV0dXJuIGUodCxbe2tleTpcImNyZWF0ZUxpbmVzXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMuY29sb3IsaT10aGlzLmxpbmVXaWR0aCxzPXRoaXMuc3RlcCxyPXRoaXMuYm9sZE50aCxsPXRoaXMuYm9sZENvbG9yLG49dGhpcy5ib2xkV2lkdGgsbz1bXSxhPXIqcyxoPTA7aDx0LndpZHRoO2grPXMpe3ZhciB2PWglYT09MDtvLnB1c2godj9uZXcgYihsLG4saCwwLGgsdC5oZWlnaHQpOm5ldyBiKGUsaSxoLDAsaCx0LmhlaWdodCkpfWZvcih2YXIgJD0wOyQ8dC5oZWlnaHQ7JCs9cyl7dmFyIGQ9JCVhPT0wO28ucHVzaChkP25ldyBiKGwsbiwwLCQsdC53aWR0aCwkKTpuZXcgYihlLGksMCwkLHQud2lkdGgsJCkpfXRoaXMubGluZXM9b319LHtrZXk6XCJkcmF3VGV4dFwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5zdGVwLHM9dGhpcy5ib2xkTnRoLHI9dGhpcy5ib2xkQ29sb3IsbD10aGlzLmZvbnQ7dC5zYXZlKCksdC5mb250PWwsdC5maWxsU3R5bGU9cix0LmZpbGxUZXh0KFwiMFwiLDEsMTUpO2Zvcih2YXIgbj1pKnM7bjxlLndpZHRoO24rPWkqcyl0LmZpbGxUZXh0KG4sbiwxNSk7Zm9yKHZhciBvPWkqcztvPGUuaGVpZ2h0O28rPWkqcyl0LmZpbGxUZXh0KG8sMCxvKzE1KTt0LnJlc3RvcmUoKX19LHtrZXk6XCJkcmF3XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt0aGlzLmxpbmVzfHx0aGlzLmNyZWF0ZUxpbmVzKGUpLHRoaXMubGluZXMuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5kcmF3KHQpfSksdGhpcy5kcmF3VGV4dCh0LGUpfX1dKSx0fSgpO2EuTW91c2U9aSxhLkdyaWQ9ajtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1hfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KX19KSgpOyIsIi8qKlxyXG4gKiBNYXJsaW46IERldmljZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbi5cclxuKi9cclxuXHJcbmltcG9ydCB7IGtkVHJlZSB9IGZyb20gJ2tkLXRyZWUtamF2YXNjcmlwdCc7IC8vIG5vZGUgbW9kdWxlXHJcbi8vIGltcG9ydCB7IGtkVHJlZSB9IGZyb20gJy4va2RUcmVlJztcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSBcIi4vZGV2aWNlXCI7XHJcbmltcG9ydCB7IFBDQiwgUGFkIH0gZnJvbSBcIi4vcGNiXCI7XHJcblxyXG5lbnVtIFN0YXR1cyB7XHJcbiAgICBVbmRlZmluZWQgPSAxLFxyXG4gICAgUmVhZHksXHJcbiAgICBCdXN5LFxyXG4gICAgTkNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmxpbiBleHRlbmRzIERldmljZSB7XHJcbiAgICBtYXJsaW5EaXY6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdlN0YXR1czogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbWFybGluRGl2UG9zaXRpb246IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdkNvbW1hbmRzOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgemVybzogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWFybGluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJsaW5cIik7XHJcbiAgICAgICAgdGhpcy5pbml0SHRtbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgU2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIFplcm8uIEFsbCBmdXJ0aGVyIGNvbW1hbmRzIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcyBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8ocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnplcm8gPSBwb2ludDtcclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHOTIgWDAgWTAgWjAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5Qb3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBNb3ZlIHRvIHBvc2l0aW9uLiBJZiBvbmUgY29vcmRpbmF0ZSBpcyB1bmRlZmluZWQsIGl0J3MgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciB8IHVuZGVmaW5lZCwgeTogbnVtYmVyIHwgdW5kZWZpbmVkLCB6OiBudW1iZXIgfCB1bmRlZmluZWQsIGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICBpZiAoeCAhPSB1bmRlZmluZWQpIGNtZCArPSBgWCR7eCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICBpZiAoeSAhPSB1bmRlZmluZWQpIGNtZCArPSBgWSR7eSAtIHRoaXMuemVyb1sxXX0gYDtcclxuICAgICAgICBpZiAoeiAhPSB1bmRlZmluZWQpIGNtZCArPSBgWiR7en0gYDtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtb3ZlVG9BbGwocGxpc3Q6IFBhZFtdLCBzdGFydDogW251bWJlciwgbnVtYmVyXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgcGxpc3QubGVuZ3RoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGlzdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyZWUgPSBuZXcga2RUcmVlKHBsaXN0LCBQQ0IuZGlzdGFuY2UsIFtcInBvc1hcIiwgXCJwb3NZXCJdKTtcclxuICAgICAgICAvLyBjb25zdCB0cmVlID0gbmV3IGtkVHJlZShQQ0IsIHBsaXN0LCBQQ0IuZGlzdGFuY2UsIFtcInBvc1hcIiwgXCJwb3NZXCJdKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0cGFkID0gbmV3IFBhZCgnJywgc3RhcnRbMF0sIHN0YXJ0WzFdKTtcclxuICAgICAgICBsZXQgc2VhcmNoID0gdHJlZS5uZWFyZXN0KHN0YXJ0cGFkLCAxKTtcclxuICAgICAgICBsZXQgZm91bmRwYWQgPSBzZWFyY2hbMF1bMF07XHJcblxyXG4gICAgICAgIGxldCBmb3VuZHBhZHM6IFBhZFtdID0gW107IC8vIGp1c3QgZm9yIGxvZ1xyXG5cclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlZXNob3QgPSAnJztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cmVlIGR1bXA6Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmVlLnRvSlNPTigpLCB1bmRlZmluZWQsIDQpKTsgLy8gZHVtcCB0cmVlXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSB0cmVlLm5lYXJlc3QoZm91bmRwYWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgc2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRwYWQgPSBzZWFyY2hbMF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRwYWRzLnB1c2goZm91bmRwYWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1vdmVBbmRCbG9iKGZvdW5kcGFkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGNtZCA9ICdHMCAnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNtZCArPSBgWCR7Zm91bmRwYWQucG9zWCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbWQgKz0gYFkke2ZvdW5kcGFkLnBvc1kgLSB0aGlzLnplcm9bMV19IGA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJpYWxXcml0ZVdhaXQoY21kKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ01hcmxpbjptb3ZlVG9BbGwnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBjYXRjaCAod2hhdCkgeyB9IC8vIGlnbm9yZSBkaXNjb25uZWN0ZWQgZm9yIGRlYnVnZ2luZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLy8gcmVtb3ZlIHNlZW1zIHRvIGJlIGJ1Z2kgOigoKFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvayA9IHRyZWUucmVtb3ZlKGZvdW5kcGFkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihvaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhgTWFybGluOm1vdmVUb0FsbCByZW1vdmVkIHBhZGAsIGZvdW5kcGFkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oYE1hcmxpbjptb3ZlVG9BbGwgTk9UIHJlbW92ZWQgcGFkLCB0aGFzIGJhZCA6KGAsIGZvdW5kcGFkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJlZXNob3QgPSBKU09OLnN0cmluZ2lmeSh0cmVlLnRvSlNPTigpLCB1bmRlZmluZWQsIDQpOyAvLyBrZWVwIHRyZWUgZm9yIGRlYnVnICFcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmVlc2hvdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZnBhZCBvZiBmb3VuZHBhZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTWFybGluOm1vdmVUb0FsbCBwYWQ6JHtmcGFkLnBvc1h9O1xcdCR7ZnBhZC5wb3NZfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAod2hhdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgc2VyaWFsV3JpdGVXYWl0IGZhaWxzLCBkbyBzb21ldGhpbmcgP1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTWFybGluOm1vdmVUb0FsbDogZmFpbGVkXCIsIHdoYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1vdmVBbmRCbG9iKGZvdW5kcGFkOiBQYWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICAgICAgY21kICs9IGBYJHtmb3VuZHBhZC5wb3NYIC0gdGhpcy56ZXJvWzBdfSBgO1xyXG4gICAgICAgICAgICBjbWQgKz0gYFkke2ZvdW5kcGFkLnBvc1kgLSB0aGlzLnplcm9bMV19IGA7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdNODMnKS50aGVuKCgpID0+IHsgLy8gZXh0cnVkZXIgcmVsYXRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBFMTAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFozJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdqbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ01hcmxpbjptb3ZlVG9BbGwnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHdoYXQpIHsgfSAvLyBpZ25vcmUgZGlzY29ubmVjdGVkIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBibG9iKCkge1xyXG4gICAgICAgIHRoaXMub25CdG5BYnMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ004MycpLnRoZW4oKCkgPT4geyAvLyBleHRydWRlciByZWxhdGl2XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRTEwJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMCcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFozJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxDb25uZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmxpbjogb25TZXJpYWxDb25uZWN0ZWQnKTtcclxuICAgICAgICAvLyByZWFkIG92ZXIgZmlyc3QgbWVzc2FnZXNcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgd2hpbGUodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlBvc2l0aW9uKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbi5pbm5lckhUTUwgKz0gYCR7dGhpcy5pbnB1dFF1ZXVlLnBvcCgpfWA7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuUmVhZHkpXHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2U3RhdHVzICYmIHRoaXMubWFybGluRGl2Q29tbWFuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUgPSB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzLmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIC8vIHdhaXQgM3NlYywgcnVuIGNvbW1hbmRzICdjb2xkIGV4dHJ1ZGUnLCdyZWxhdGl2ZSBwb3NpdGlvbmluZycsJ3JlcG9ydCBwb3NpdGlvbidcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ0bkNvbGQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5SZWwoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46IG9uU2VyaWFsQ29ubmVjdGVkIGluaXQgc2VxdWVuY2UgZmluaXNoZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbERpc2Nvbm5lY3RlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOiBvblNlcmlhbERpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlN0YXR1cyAmJiB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5OQyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2Q29tbWFuZHMuY2xhc3NOYW1lID0gdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5oZXJpdGVkIGZyb20gRGV2aWNlLCBhZGRzIFN0YXR1cyBtZXNzYWdlIHVwZGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB0aW1lb3V0XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsV3JpdGVXYWl0KHZhbHVlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5CdXN5KTtcclxuICAgICAgICAgICAgc3VwZXIuc2VyaWFsV3JpdGVXYWl0KHZhbHVlLCB0aW1lb3V0KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdGF0dXMoc3RhdHVzOiBTdGF0dXMpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGB1bmtub3duIHN0YXR1cyAke3N0YXR1c31gO1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlJlYWR5OlxyXG4gICAgICAgICAgICAgICAgaHRtbCA9ICdTdGF0dXM6IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1Z1wiPjwvaT4gcmVhZHknOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuQnVzeTpcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnU3RhdHVzOiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdWctY2lyY2xlLWJvbHRcIj48L2k+IGJ1c3knOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuTkM6XHJcbiAgICAgICAgICAgICAgICBodG1sID0gJ1N0YXR1czogPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVnLWNpcmNsZS14bWFya1wiPjwvaT4gbm90IGNvbm5lY3RlZCc7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZTdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZTdGF0dXMuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5Ib21lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbilcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLy8vIHRpbWVvdXQgdG9vIHNtYWxsIGZvciB0aGlzIGNvbW1hbmQsIHNlZSB3aGF0IGhhcHBlbnNcclxuICAgICAgICAvLyB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JywgMTAwKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAvLyAgICAgLy8gdHJ5IGFnYWluIChkZWZhdWx0IHRpbWVvdXQgaXMgMTBzZWMpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMjgnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkJ0blBvcygpO1xyXG4gICAgICAgIC8vICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7IGNvbnNvbGUud2FybihyZWFzb24pIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuUG9zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTExNCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWVyIGtvbW10IGVpbmUgemVpbGUgbWl0IHphaGxlbiB1bmQgZWluZSBtaXQgb2tcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkJ0blBvcycsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbi5pbm5lclRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bkFicygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0c5MCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkJ0blJlbCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0c5MScpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZWFzb24pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkNvbGQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdNMzAyIFMwJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blhQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBYMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWE0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFgtMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWVAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFkxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5ZTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWS0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5aUCgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0blpNKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaLTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bkVQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBFMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuRU0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIEUtMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgc29tZSBidXR0b25zIGZvciBNYXJsaW4gc3BlY2lmaWMgYWN0aW9ucy4uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRIdG1sKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdikge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3My1ib3JkZXIgdzMtYm9yZGVyLWRhcmstZ3JleVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFybGluU3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXJsaW5Qb3NpdGlvblwiIGNsYXNzPVwidzMtdGlueVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFybGluQ29tbWFuZHNcIiBjbGFzcz1cInczLXRpbnkgdzMtaGlkZVwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkhvbWVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+aG9tZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluUG9zXCIgIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5wb3M/PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5SZWxcIiAgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnJlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluQWJzXCIgIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5hYnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkNvbGRcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+Y29sZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWFBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eCs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblhNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPngtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5ZUFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj55KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWU1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eS08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblpQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnorPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5aTVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj56LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluRVBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+ZSs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbkVNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmUtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2U3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5TdGF0dXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2UG9zaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Db21tYW5kc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLk5DKTtcclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluSG9tZVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkhvbWUpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkhvbWUub25jbGljayA9IHRoaXMub25CdG5Ib21lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuUG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Qb3NcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5Qb3MpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blBvcy5vbmNsaWNrID0gdGhpcy5vbkJ0blBvcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluUmVsXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuUmVsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5SZWwub25jbGljayA9IHRoaXMub25CdG5SZWwuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5BYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkFic1wiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkFicykge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuQWJzLm9uY2xpY2sgPSB0aGlzLm9uQnRuQWJzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuQ29sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluQ29sZFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkNvbGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkNvbGQub25jbGljayA9IHRoaXMub25CdG5Db2xkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blhQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5YUFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blhQKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5YUC5vbmNsaWNrID0gdGhpcy5vbkJ0blhQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblhNXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWE0pIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blhNLm9uY2xpY2sgPSB0aGlzLm9uQnRuWE0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5ZUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWVBcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5ZUCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWVAub25jbGljayA9IHRoaXMub25CdG5ZUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bllNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5ZTVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bllNKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5ZTS5vbmNsaWNrID0gdGhpcy5vbkJ0bllNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWlAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblpQXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWlApIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blpQLm9uY2xpY2sgPSB0aGlzLm9uQnRuWlAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5aTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWk1cIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5aTSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWk0ub25jbGljayA9IHRoaXMub25CdG5aTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkVQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5FUFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bkVQKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5FUC5vbmNsaWNrID0gdGhpcy5vbkJ0bkVQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuRU0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkVNXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuRU0pIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkVNLm9uY2xpY2sgPSB0aGlzLm9uQnRuRU0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cbiIsIi8qKlxuICogay1kIFRyZWUgSmF2YVNjcmlwdCAtIFYgMS4wMVxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS91YmlsYWJzL2tkLXRyZWUtamF2YXNjcmlwdFxuICpcbiAqIEBhdXRob3IgTWlyY2VhIFByaWNvcCA8cHJpY29wQHViaWxhYnMubmV0PiwgMjAxMlxuICogQGF1dGhvciBNYXJ0aW4gS2xlcHBlIDxrbGVwcGVAdWJpbGFicy5uZXQ+LCAyMDEyXG4gKiBAYXV0aG9yIFViaWxhYnMgaHR0cDovL3ViaWxhYnMubmV0LCAyMDEyXG4gKiBAbGljZW5zZSBNSVQgTGljZW5zZSA8aHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHA+XG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIGZhY3RvcnkoZXhwb3J0cyk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShyb290KTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykge1xuICBmdW5jdGlvbiBOb2RlKG9iaiwgZGltZW5zaW9uLCBwYXJlbnQpIHtcbiAgICB0aGlzLm9iaiA9IG9iajtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uO1xuICB9XG5cbiAgZnVuY3Rpb24ga2RUcmVlKHBvaW50cywgbWV0cmljLCBkaW1lbnNpb25zKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBidWlsZFRyZWUocG9pbnRzLCBkZXB0aCwgcGFyZW50KSB7XG4gICAgICB2YXIgZGltID0gZGVwdGggJSBkaW1lbnNpb25zLmxlbmd0aCxcbiAgICAgICAgbWVkaWFuLFxuICAgICAgICBub2RlO1xuXG4gICAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShwb2ludHNbMF0sIGRpbSwgcGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbZGltZW5zaW9uc1tkaW1dXSAtIGJbZGltZW5zaW9uc1tkaW1dXTtcbiAgICAgIH0pO1xuXG4gICAgICBtZWRpYW4gPSBNYXRoLmZsb29yKHBvaW50cy5sZW5ndGggLyAyKTtcblxuICAgICAgLy8gYXZvaWQgaGF2aW5nIHNhbWUgY29vcmRzIG9uIGxlZnQgYW5kIHJpZ2h0IHRyZWUgISEhXG4gICAgICB3aGlsZSAobWVkaWFuID4gMCkge1xuICAgICAgICBsZXQgbmV3bWVkaWFuID0gbWVkaWFuIC0gMTtcbiAgICAgICAgaWYgKHBvaW50c1ttZWRpYW5dW2RpbWVuc2lvbnNbZGltXV0gPT09IHBvaW50c1tuZXdtZWRpYW5dW2RpbWVuc2lvbnNbZGltXV0pIHtcbiAgICAgICAgICBtZWRpYW4gLT0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlID0gbmV3IE5vZGUocG9pbnRzW21lZGlhbl0sIGRpbSwgcGFyZW50KTtcbiAgICAgIG5vZGUubGVmdCA9IGJ1aWxkVHJlZShwb2ludHMuc2xpY2UoMCwgbWVkaWFuKSwgZGVwdGggKyAxLCBub2RlKTtcbiAgICAgIG5vZGUucmlnaHQgPSBidWlsZFRyZWUocG9pbnRzLnNsaWNlKG1lZGlhbiArIDEpLCBkZXB0aCArIDEsIG5vZGUpO1xuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvLyBSZWxvYWRzIGEgc2VyaWFsaWVkIHRyZWVcbiAgICBmdW5jdGlvbiBsb2FkVHJlZShkYXRhKSB7XG4gICAgICAvLyBKdXN0IG5lZWQgdG8gcmVzdG9yZSB0aGUgYHBhcmVudGAgcGFyYW1ldGVyXG4gICAgICBzZWxmLnJvb3QgPSBkYXRhO1xuXG4gICAgICBmdW5jdGlvbiByZXN0b3JlUGFyZW50KHJvb3QpIHtcbiAgICAgICAgaWYgKHJvb3QubGVmdCkge1xuICAgICAgICAgIHJvb3QubGVmdC5wYXJlbnQgPSByb290O1xuICAgICAgICAgIHJlc3RvcmVQYXJlbnQocm9vdC5sZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290LnJpZ2h0KSB7XG4gICAgICAgICAgcm9vdC5yaWdodC5wYXJlbnQgPSByb290O1xuICAgICAgICAgIHJlc3RvcmVQYXJlbnQocm9vdC5yaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdG9yZVBhcmVudChzZWxmLnJvb3QpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUud2FybigndXNpbmcgbWFyaW9zZ2l0OmtkLXRyZWUgdjEuMC40Jyk7XG4gICAgLy8gSWYgcG9pbnRzIGlzIG5vdCBhbiBhcnJheSwgYXNzdW1lIHdlJ3JlIGxvYWRpbmcgYSBwcmUtYnVpbHQgdHJlZVxuICAgIGlmICghQXJyYXkuaXNBcnJheShwb2ludHMpKSBsb2FkVHJlZShwb2ludHMsIG1ldHJpYywgZGltZW5zaW9ucyk7XG4gICAgZWxzZSB0aGlzLnJvb3QgPSBidWlsZFRyZWUocG9pbnRzLCAwLCBudWxsKTtcblxuICAgIC8vIENvbnZlcnQgdG8gYSBKU09OIHNlcmlhbGl6YWJsZSBzdHJ1Y3R1cmU7IHRoaXMganVzdCByZXF1aXJlcyByZW1vdmluZ1xuICAgIC8vIHRoZSBgcGFyZW50YCBwcm9wZXJ0eVxuICAgIHRoaXMudG9KU09OID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgaWYgKCFzcmMpIHNyYyA9IHRoaXMucm9vdDtcbiAgICAgIHZhciBkZXN0ID0gbmV3IE5vZGUoc3JjLm9iaiwgc3JjLmRpbWVuc2lvbiwgbnVsbCk7XG4gICAgICBpZiAoc3JjLmxlZnQpIGRlc3QubGVmdCA9IHNlbGYudG9KU09OKHNyYy5sZWZ0KTtcbiAgICAgIGlmIChzcmMucmlnaHQpIGRlc3QucmlnaHQgPSBzZWxmLnRvSlNPTihzcmMucmlnaHQpO1xuICAgICAgcmV0dXJuIGRlc3Q7XG4gICAgfTtcblxuICAgIC8qKiByZXR1cm5zIGEgbGlzdCBvZiBwb2ludHMgaW4gdGhlIHN1YnRyZWUsIGV4Y2x1c2l2ZSB0aGUgZ2l2ZW4gbm9kZSAhICovXG4gICAgdGhpcy50b0FycmF5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgaWYgKHNyYyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKHNyYy5sZWZ0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNyYy5sZWZ0Lm9iaik7XG4gICAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIC4uLnRoaXMudG9BcnJheShzcmMubGVmdCldO1xuICAgICAgfVxuICAgICAgaWYgKHNyYy5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChzcmMucmlnaHQub2JqKTtcbiAgICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgLi4udGhpcy50b0FycmF5KHNyYy5yaWdodCldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0aGlzLmluc2VydCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgZnVuY3Rpb24gaW5uZXJTZWFyY2gobm9kZSwgcGFyZW50KSB7XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbbm9kZS5kaW1lbnNpb25dO1xuICAgICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IG5vZGUub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJTZWFyY2gobm9kZS5sZWZ0LCBub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJTZWFyY2gobm9kZS5yaWdodCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluc2VydFBvc2l0aW9uID0gaW5uZXJTZWFyY2godGhpcy5yb290LCBudWxsKSxcbiAgICAgICAgbmV3Tm9kZSxcbiAgICAgICAgZGltZW5zaW9uO1xuXG4gICAgICBpZiAoaW5zZXJ0UG9zaXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IE5vZGUocG9pbnQsIDAsIG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5ld05vZGUgPSBuZXcgTm9kZShwb2ludCwgKGluc2VydFBvc2l0aW9uLmRpbWVuc2lvbiArIDEpICUgZGltZW5zaW9ucy5sZW5ndGgsIGluc2VydFBvc2l0aW9uKTtcbiAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbaW5zZXJ0UG9zaXRpb24uZGltZW5zaW9uXTtcblxuICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBpbnNlcnRQb3NpdGlvbi5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICBpbnNlcnRQb3NpdGlvbi5sZWZ0ID0gbmV3Tm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc2VydFBvc2l0aW9uLnJpZ2h0ID0gbmV3Tm9kZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgIHZhciBub2RlO1xuXG4gICAgICBmdW5jdGlvbiBub2RlU2VhcmNoKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLm9iaiA9PT0gcG9pbnQpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXTtcblxuICAgICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IG5vZGUub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVNlYXJjaChub2RlLmxlZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlU2VhcmNoKG5vZGUucmlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICAgICAgICB2YXIgbmV4dE5vZGUsXG4gICAgICAgICAgbmV4dE9iaixcbiAgICAgICAgICBwRGltZW5zaW9uO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRNaW4obm9kZSwgZGltKSB7XG4gICAgICAgICAgdmFyIGRpbWVuc2lvbixcbiAgICAgICAgICAgIG93bixcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgIG1pbjtcblxuICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaW1lbnNpb24gPSBkaW1lbnNpb25zW2RpbV07XG5cbiAgICAgICAgICBpZiAobm9kZS5kaW1lbnNpb24gPT09IGRpbSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmluZE1pbihub2RlLmxlZnQsIGRpbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvd24gPSBub2RlLm9ialtkaW1lbnNpb25dO1xuICAgICAgICAgIGxlZnQgPSBmaW5kTWluKG5vZGUubGVmdCwgZGltKTtcbiAgICAgICAgICByaWdodCA9IGZpbmRNaW4obm9kZS5yaWdodCwgZGltKTtcbiAgICAgICAgICBtaW4gPSBub2RlO1xuXG4gICAgICAgICAgaWYgKGxlZnQgIT09IG51bGwgJiYgbGVmdC5vYmpbZGltZW5zaW9uXSA8IG93bikge1xuICAgICAgICAgICAgbWluID0gbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJpZ2h0ICE9PSBudWxsICYmIHJpZ2h0Lm9ialtkaW1lbnNpb25dIDwgbWluLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgICBtaW4gPSByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5yb290ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwRGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLnBhcmVudC5kaW1lbnNpb25dO1xuXG4gICAgICAgICAgaWYgKG5vZGUub2JqW3BEaW1lbnNpb25dIDwgbm9kZS5wYXJlbnQub2JqW3BEaW1lbnNpb25dKSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudC5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQucmlnaHQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgcmlnaHQgc3VidHJlZSBpcyBub3QgZW1wdHksIHN3YXAgd2l0aCB0aGUgbWluaW11bSBlbGVtZW50IG9uIHRoZVxuICAgICAgICAvLyBub2RlJ3MgZGltZW5zaW9uLiBJZiBpdCBpcyBlbXB0eSwgd2Ugc3dhcCB0aGUgbGVmdCBhbmQgcmlnaHQgc3VidHJlZXMgYW5kXG4gICAgICAgIC8vIGRvIHRoZSBzYW1lLlxuICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgIG5leHROb2RlID0gZmluZE1pbihub2RlLnJpZ2h0LCBub2RlLmRpbWVuc2lvbik7XG4gICAgICAgICAgbmV4dE9iaiA9IG5leHROb2RlLm9iajtcbiAgICAgICAgICByZW1vdmVOb2RlKG5leHROb2RlKTtcbiAgICAgICAgICBub2RlLm9iaiA9IG5leHRPYmo7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dE5vZGUgPSBmaW5kTWluKG5vZGUubGVmdCwgbm9kZS5kaW1lbnNpb24pO1xuICAgICAgICAgIG5leHRPYmogPSBuZXh0Tm9kZS5vYmo7XG4gICAgICAgICAgcmVtb3ZlTm9kZShuZXh0Tm9kZSk7XG4gICAgICAgICAgbm9kZS5yaWdodCA9IG5vZGUubGVmdDtcbiAgICAgICAgICBub2RlLmxlZnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUub2JqID0gbmV4dE9iajtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZVNlYXJjaChzZWxmLnJvb3QpO1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2tkdHJlZTpyZW1vdmUgY291bGQgbm90IHJlbW92ZSBub2RlICEgaW50ZXJuYWwgZXJyb3IgIScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZU5vZGUobm9kZSk7IC8vIGJ1Z2dpXG5cbiAgICAgIC8vIHdpa2lwZWRpYSBzYXlzOiBqdXN0IHJlYnVpbGQgdGhlIHN1YnRyZWVcbiAgICAgIGNvbnN0IGFsbGNoaWxkcyA9IHRoaXMudG9BcnJheShub2RlKTtcbiAgICAgIGxldCBuZXdub2RlID0gYnVpbGRUcmVlKGFsbGNoaWxkcywgbm9kZS5kaW1lbnNpb24sIG5vZGUucGFyZW50KTtcbiAgICAgIGlmIChub2RlLnBhcmVudCkge1xuICAgICAgICBpZiAobm9kZS5wYXJlbnQubGVmdCA9PT0gbm9kZSkge1xuICAgICAgICAgIG5vZGUucGFyZW50LmxlZnQgPSBuZXdub2RlO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50LnJpZ2h0ID09PSBub2RlKSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnQucmlnaHQgPSBuZXdub2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJvb3QgPSBuZXdub2RlO1xuICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMubmVhcmVzdCA9IGZ1bmN0aW9uIChwb2ludCwgbWF4Tm9kZXMsIG1heERpc3RhbmNlKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBiZXN0Tm9kZXM7XG5cbiAgICAgIGJlc3ROb2RlcyA9IG5ldyBCaW5hcnlIZWFwKFxuICAgICAgICBmdW5jdGlvbiAoZSkgeyByZXR1cm4gLWVbMV07IH1cbiAgICAgICk7XG5cbiAgICAgIGZ1bmN0aW9uIG5lYXJlc3RTZWFyY2gobm9kZSkge1xuICAgICAgICB2YXIgYmVzdENoaWxkLFxuICAgICAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbbm9kZS5kaW1lbnNpb25dLFxuICAgICAgICAgIG93bkRpc3RhbmNlID0gbWV0cmljKHBvaW50LCBub2RlLm9iaiksXG4gICAgICAgICAgbGluZWFyUG9pbnQgPSB7fSxcbiAgICAgICAgICBsaW5lYXJEaXN0YW5jZSxcbiAgICAgICAgICBvdGhlckNoaWxkLFxuICAgICAgICAgIGk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2F2ZU5vZGUobm9kZSwgZGlzdGFuY2UpIHtcbiAgICAgICAgICBiZXN0Tm9kZXMucHVzaChbbm9kZSwgZGlzdGFuY2VdKTtcbiAgICAgICAgICBpZiAoYmVzdE5vZGVzLnNpemUoKSA+IG1heE5vZGVzKSB7XG4gICAgICAgICAgICBiZXN0Tm9kZXMucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoaSA9PT0gbm9kZS5kaW1lbnNpb24pIHtcbiAgICAgICAgICAgIGxpbmVhclBvaW50W2RpbWVuc2lvbnNbaV1dID0gcG9pbnRbZGltZW5zaW9uc1tpXV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVhclBvaW50W2RpbWVuc2lvbnNbaV1dID0gbm9kZS5vYmpbZGltZW5zaW9uc1tpXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGluZWFyRGlzdGFuY2UgPSBtZXRyaWMobGluZWFyUG9pbnQsIG5vZGUub2JqKTtcblxuICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoYmVzdE5vZGVzLnNpemUoKSA8IG1heE5vZGVzIHx8IG93bkRpc3RhbmNlIDwgYmVzdE5vZGVzLnBlZWsoKVsxXSkge1xuICAgICAgICAgICAgc2F2ZU5vZGUobm9kZSwgb3duRGlzdGFuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgIGJlc3RDaGlsZCA9IG5vZGUubGVmdDtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLnJpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgbm9kZS5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5sZWZ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5lYXJlc3RTZWFyY2goYmVzdENoaWxkKTtcblxuICAgICAgICBpZiAoYmVzdE5vZGVzLnNpemUoKSA8IG1heE5vZGVzIHx8IG93bkRpc3RhbmNlIDwgYmVzdE5vZGVzLnBlZWsoKVsxXSkge1xuICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpIDwgbWF4Tm9kZXMgfHwgTWF0aC5hYnMobGluZWFyRGlzdGFuY2UpIDwgYmVzdE5vZGVzLnBlZWsoKVsxXSkge1xuICAgICAgICAgIGlmIChiZXN0Q2hpbGQgPT09IG5vZGUubGVmdCkge1xuICAgICAgICAgICAgb3RoZXJDaGlsZCA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyQ2hpbGQgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvdGhlckNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuZWFyZXN0U2VhcmNoKG90aGVyQ2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWF4RGlzdGFuY2UpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1heE5vZGVzOyBpICs9IDEpIHtcbiAgICAgICAgICBiZXN0Tm9kZXMucHVzaChbbnVsbCwgbWF4RGlzdGFuY2VdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5yb290KVxuICAgICAgICBuZWFyZXN0U2VhcmNoKHNlbGYucm9vdCk7XG5cbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5taW4obWF4Tm9kZXMsIGJlc3ROb2Rlcy5jb250ZW50Lmxlbmd0aCk7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYmVzdE5vZGVzLmNvbnRlbnRbaV1bMF0pIHtcbiAgICAgICAgICByZXN1bHQucHVzaChbYmVzdE5vZGVzLmNvbnRlbnRbaV1bMF0ub2JqLCBiZXN0Tm9kZXMuY29udGVudFtpXVsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzLmJhbGFuY2VGYWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBoZWlnaHQobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLm1heChoZWlnaHQobm9kZS5sZWZ0KSwgaGVpZ2h0KG5vZGUucmlnaHQpKSArIDE7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNvdW50KG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQobm9kZS5sZWZ0KSArIGNvdW50KG5vZGUucmlnaHQpICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlaWdodChzZWxmLnJvb3QpIC8gKE1hdGgubG9nKGNvdW50KHNlbGYucm9vdCkpIC8gTWF0aC5sb2coMikpO1xuICAgIH07XG4gIH1cblxuICAvLyBCaW5hcnkgaGVhcCBpbXBsZW1lbnRhdGlvbiBmcm9tOlxuICAvLyBodHRwOi8vZWxvcXVlbnRqYXZhc2NyaXB0Lm5ldC9hcHBlbmRpeDIuaHRtbFxuXG4gIGZ1bmN0aW9uIEJpbmFyeUhlYXAoc2NvcmVGdW5jdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICAgIHRoaXMuc2NvcmVGdW5jdGlvbiA9IHNjb3JlRnVuY3Rpb247XG4gIH1cblxuICBCaW5hcnlIZWFwLnByb3RvdHlwZSA9IHtcbiAgICBwdXNoOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgLy8gQWRkIHRoZSBuZXcgZWxlbWVudCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgIHRoaXMuY29udGVudC5wdXNoKGVsZW1lbnQpO1xuICAgICAgLy8gQWxsb3cgaXQgdG8gYnViYmxlIHVwLlxuICAgICAgdGhpcy5idWJibGVVcCh0aGlzLmNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgfSxcblxuICAgIHBvcDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gU3RvcmUgdGhlIGZpcnN0IGVsZW1lbnQgc28gd2UgY2FuIHJldHVybiBpdCBsYXRlci5cbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLmNvbnRlbnRbMF07XG4gICAgICAvLyBHZXQgdGhlIGVsZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICB2YXIgZW5kID0gdGhpcy5jb250ZW50LnBvcCgpO1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIGFueSBlbGVtZW50cyBsZWZ0LCBwdXQgdGhlIGVuZCBlbGVtZW50IGF0IHRoZVxuICAgICAgLy8gc3RhcnQsIGFuZCBsZXQgaXQgc2luayBkb3duLlxuICAgICAgaWYgKHRoaXMuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuY29udGVudFswXSA9IGVuZDtcbiAgICAgICAgdGhpcy5zaW5rRG93bigwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIHBlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRbMF07XG4gICAgfSxcblxuICAgIHJlbW92ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBsZW4gPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICAgICAgLy8gVG8gcmVtb3ZlIGEgdmFsdWUsIHdlIG11c3Qgc2VhcmNoIHRocm91Z2ggdGhlIGFycmF5IHRvIGZpbmRcbiAgICAgIC8vIGl0LlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50W2ldID09IG5vZGUpIHtcbiAgICAgICAgICAvLyBXaGVuIGl0IGlzIGZvdW5kLCB0aGUgcHJvY2VzcyBzZWVuIGluICdwb3AnIGlzIHJlcGVhdGVkXG4gICAgICAgICAgLy8gdG8gZmlsbCB1cCB0aGUgaG9sZS5cbiAgICAgICAgICB2YXIgZW5kID0gdGhpcy5jb250ZW50LnBvcCgpO1xuICAgICAgICAgIGlmIChpICE9IGxlbiAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFtpXSA9IGVuZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlRnVuY3Rpb24oZW5kKSA8IHRoaXMuc2NvcmVGdW5jdGlvbihub2RlKSlcbiAgICAgICAgICAgICAgdGhpcy5idWJibGVVcChpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgdGhpcy5zaW5rRG93bihpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb2RlIG5vdCBmb3VuZC5cIik7XG4gICAgfSxcblxuICAgIHNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICAgIH0sXG5cbiAgICBidWJibGVVcDogZnVuY3Rpb24gKG4pIHtcbiAgICAgIC8vIEZldGNoIHRoZSBlbGVtZW50IHRoYXQgaGFzIHRvIGJlIG1vdmVkLlxuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmNvbnRlbnRbbl07XG4gICAgICAvLyBXaGVuIGF0IDAsIGFuIGVsZW1lbnQgY2FuIG5vdCBnbyB1cCBhbnkgZnVydGhlci5cbiAgICAgIHdoaWxlIChuID4gMCkge1xuICAgICAgICAvLyBDb21wdXRlIHRoZSBwYXJlbnQgZWxlbWVudCdzIGluZGV4LCBhbmQgZmV0Y2ggaXQuXG4gICAgICAgIHZhciBwYXJlbnROID0gTWF0aC5mbG9vcigobiArIDEpIC8gMikgLSAxLFxuICAgICAgICAgIHBhcmVudCA9IHRoaXMuY29udGVudFtwYXJlbnROXTtcbiAgICAgICAgLy8gU3dhcCB0aGUgZWxlbWVudHMgaWYgdGhlIHBhcmVudCBpcyBncmVhdGVyLlxuICAgICAgICBpZiAodGhpcy5zY29yZUZ1bmN0aW9uKGVsZW1lbnQpIDwgdGhpcy5zY29yZUZ1bmN0aW9uKHBhcmVudCkpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbcGFyZW50Tl0gPSBlbGVtZW50O1xuICAgICAgICAgIHRoaXMuY29udGVudFtuXSA9IHBhcmVudDtcbiAgICAgICAgICAvLyBVcGRhdGUgJ24nIHRvIGNvbnRpbnVlIGF0IHRoZSBuZXcgcG9zaXRpb24uXG4gICAgICAgICAgbiA9IHBhcmVudE47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm91bmQgYSBwYXJlbnQgdGhhdCBpcyBsZXNzLCBubyBuZWVkIHRvIG1vdmUgaXQgZnVydGhlci5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2lua0Rvd246IGZ1bmN0aW9uIChuKSB7XG4gICAgICAvLyBMb29rIHVwIHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgaXRzIHNjb3JlLlxuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGgsXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmNvbnRlbnRbbl0sXG4gICAgICAgIGVsZW1TY29yZSA9IHRoaXMuc2NvcmVGdW5jdGlvbihlbGVtZW50KTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgaW5kaWNlcyBvZiB0aGUgY2hpbGQgZWxlbWVudHMuXG4gICAgICAgIHZhciBjaGlsZDJOID0gKG4gKyAxKSAqIDIsIGNoaWxkMU4gPSBjaGlsZDJOIC0gMTtcbiAgICAgICAgLy8gVGhpcyBpcyB1c2VkIHRvIHN0b3JlIHRoZSBuZXcgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQsXG4gICAgICAgIC8vIGlmIGFueS5cbiAgICAgICAgdmFyIHN3YXAgPSBudWxsO1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgY2hpbGQgZXhpc3RzIChpcyBpbnNpZGUgdGhlIGFycmF5KS4uLlxuICAgICAgICBpZiAoY2hpbGQxTiA8IGxlbmd0aCkge1xuICAgICAgICAgIC8vIExvb2sgaXQgdXAgYW5kIGNvbXB1dGUgaXRzIHNjb3JlLlxuICAgICAgICAgIHZhciBjaGlsZDEgPSB0aGlzLmNvbnRlbnRbY2hpbGQxTl0sXG4gICAgICAgICAgICBjaGlsZDFTY29yZSA9IHRoaXMuc2NvcmVGdW5jdGlvbihjaGlsZDEpO1xuICAgICAgICAgIC8vIElmIHRoZSBzY29yZSBpcyBsZXNzIHRoYW4gb3VyIGVsZW1lbnQncywgd2UgbmVlZCB0byBzd2FwLlxuICAgICAgICAgIGlmIChjaGlsZDFTY29yZSA8IGVsZW1TY29yZSlcbiAgICAgICAgICAgIHN3YXAgPSBjaGlsZDFOO1xuICAgICAgICB9XG4gICAgICAgIC8vIERvIHRoZSBzYW1lIGNoZWNrcyBmb3IgdGhlIG90aGVyIGNoaWxkLlxuICAgICAgICBpZiAoY2hpbGQyTiA8IGxlbmd0aCkge1xuICAgICAgICAgIHZhciBjaGlsZDIgPSB0aGlzLmNvbnRlbnRbY2hpbGQyTl0sXG4gICAgICAgICAgICBjaGlsZDJTY29yZSA9IHRoaXMuc2NvcmVGdW5jdGlvbihjaGlsZDIpO1xuICAgICAgICAgIGlmIChjaGlsZDJTY29yZSA8IChzd2FwID09IG51bGwgPyBlbGVtU2NvcmUgOiBjaGlsZDFTY29yZSkpIHtcbiAgICAgICAgICAgIHN3YXAgPSBjaGlsZDJOO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50IG5lZWRzIHRvIGJlIG1vdmVkLCBzd2FwIGl0LCBhbmQgY29udGludWUuXG4gICAgICAgIGlmIChzd2FwICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbbl0gPSB0aGlzLmNvbnRlbnRbc3dhcF07XG4gICAgICAgICAgdGhpcy5jb250ZW50W3N3YXBdID0gZWxlbWVudDtcbiAgICAgICAgICBuID0gc3dhcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSBkb25lLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBleHBvcnRzLmtkVHJlZSA9IGtkVHJlZTtcbiAgZXhwb3J0cy5CaW5hcnlIZWFwID0gQmluYXJ5SGVhcDtcbn0pKTtcbiIsIi8vIHRvZG86XHJcbi8vICAgbW92ZSBvdXQgc2VyaWFsID8gT3IgbG9vayBmb3IgYSBzZXJpYWwgcmVhZGxpbmUgaW1wbGVtZW50YXRpb24gPz8/XHJcbi8vIGJ1Z3M6XHJcbi8vICAgZGlzY29ubmVjdCAtIEZhaWxlZCB0byBleGVjdXRlICdjbG9zZScgb24gJ1NlcmlhbFBvcnQnOiBDYW5ub3QgY2FuY2VsIGEgbG9ja2VkIHN0cmVhbVxyXG5cclxuaW1wb3J0IHsgUGFkIH0gZnJvbSBcIi4vcGNiXCI7XHJcblxyXG4vKipcclxuICogRGV2aWNlOiBhYnN0cmFjdHMgYWNjZXNzIHRvIG1hY2hpbmUuXHJcbiAqIEl0IFwic2ltcGxpZmllc1wiIHNlcmlhbCBwb3J0IGFjY2Vzcy4gQXQgdGhlIG1vbWVudCBpdCBvbmx5IG9sbG93cyBcIndyaXRlIGFuZCByZXNwb25zZVwiIHN0eWxlIGNvbW11bmljYXRpb24uXHJcbiAqIFRoZSBzZXJpYWwgcG9ydCBpcyBvcGVuZWQsIHRoZW4gYSByZWFkZXIgbG9vcCBpcyBzdGFydGV0LCB3aGljaCBwdXNoZXMgZWFjaCBuZXcgbGluZSBpbnRvIHRoZSBpbnB1dFF1ZXVlLlxyXG4gKiBGdW5jdGlvbiBzZXJpYWxXcml0ZVdhaXQgaXMgdXNlZCB0byBpc3N1ZSBjb21tYW5kcyBhbmQgd2FpdCBmb3IgdGhlIGRldmljZSB0byBha25vd2xlZGdlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2Uge1xyXG4gICAgZGV2aWNlQ2hlY2s6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUNvbm5lY3Q6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZURpc2Nvbm5lY3Q6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUlucHV0Rm9ybTogSFRNTEZvcm1FbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUluZm86IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICAgIGRldmljZUxvZzogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlU2VyaWFsOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgICBwb3J0czogYW55O1xyXG4gICAgcG9ydDogYW55O1xyXG4gICAgdGV4dERlY29kZXI6IFRleHREZWNvZGVyU3RyZWFtO1xyXG4gICAgcmVhZGVyOiBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXI8c3RyaW5nPjtcclxuICAgIGlucHV0TGFzdDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgcHJvdGVjdGVkIGlucHV0UXVldWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VDaGVjayA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VDaGVja1wiKTtcclxuICAgICAgICB0aGlzLmRldmljZUNvbm5lY3QgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlQ29ubmVjdFwiKTtcclxuICAgICAgICB0aGlzLmRldmljZURpc2Nvbm5lY3QgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlRGlzY29ubmVjdFwiKTtcclxuICAgICAgICB0aGlzLmRldmljZUlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlSW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJbnB1dEZvcm0gPSA8SFRNTEZvcm1FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUlucHV0Rm9ybVwiKTtcclxuICAgICAgICB0aGlzLmRldmljZUluZm8gPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlSW5mb1wiKTtcclxuICAgICAgICB0aGlzLmRldmljZUxvZyA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VMb2dcIik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlU2VyaWFsXCIpO1xyXG4gICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlclN0cmVhbSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZUNoZWNrICYmIHRoaXMuZGV2aWNlQ29ubmVjdCAmJiB0aGlzLmRldmljZURpc2Nvbm5lY3QgJiYgdGhpcy5kZXZpY2VJbnB1dCAmJiB0aGlzLmRldmljZUlucHV0Rm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUNoZWNrLm9uY2xpY2sgPSB0aGlzLnNlcmlhbENoZWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlQ29ubmVjdC5vbmNsaWNrID0gdGhpcy5zZXJpYWxDb25uZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlRGlzY29ubmVjdC5vbmNsaWNrID0gdGhpcy5zZXJpYWxEaXNjb25uZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGV2aWNlRG9zb21lLm9uY2xpY2sgPSB0aGlzLnNlcmlhbERvc29tZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRldmljZUlucHV0Lm9uY2hhbmdlID0gdGhpcy5zZXJpYWxJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUlucHV0Rm9ybS5vbnN1Ym1pdCA9IHRoaXMuc2VyaWFsSW5wdXRGb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VyaWFsQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgU2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIFplcm8uIEFsbCBmdXJ0aGVyIGNvbW1hbmRzIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcyBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8/KHBvaW50OltudW1iZXIsbnVtYmVyXSk6IHZvaWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiBPdmVyd3JpdGUhIE1vdmUgdG8gcG9zaXRpb24uIElmIG9uZSBjb29yZGluYXRlIGlzIHVuZGVmaW5lZCwgaXQncyBpZ25vcmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtb3ZlVG8/KHg6bnVtYmVyfHVuZGVmaW5lZCwgeTpudW1iZXJ8dW5kZWZpbmVkLCB6Om51bWJlcnx1bmRlZmluZWQsIGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWRcclxuICAgIHB1YmxpYyBtb3ZlVG9BbGw/KHBsaXN0OiBQYWRbXSwgc3RhcnQ6W251bWJlcixudW1iZXJdKTtcclxuXHJcbiAgICBwdWJsaWMgYmxvYj8oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSB0aGlzIGluIGRlcml2ZWQgY2xhc3MgdG8gZ2V0IG5vdGlmaWNhdGlvbiB3aGVuIHNvbWUgZGV2aWNlIHdhcyBjb25uZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbENvbm5lY3RlZD8oKTp2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVyd3JpdGUgdGhpcyBpbiBkZXJpdmVkIGNsYXNzIHRvIGdldCBub3RpZmljYXRpb24gd2hlbiBzb21lIGRldmljZSB3YXMgZGlzY29ubmVjdGVkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxEaXNjb25uZWN0ZWQ/KCk6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgZGlhbG9nIHdoZXJlIHVzZXIgY2FuIHNlbGVjdCBhIGRldmljZSB0byBjb25uZWN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsQ29ubmVjdCgpIHtcclxuICAgICAgICAvLyBvcGVucyBkaWFsb2cgd2hlcmUgdXNlciBjYW4gc2VsZWN0IGEgZGV2aWNlXHJcbiAgICAgICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJpYWwucmVxdWVzdFBvcnQoKS50aGVuKChwb3J0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJpYWxDb25uZWN0JywgcG9ydCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsUG9ydE9wZW4ocG9ydCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3NlcmlhbENvbm5lY3QnLHJlYXNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsRXJyb3IocmVhc29uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsQ29ubmVjdERldmljZSh2aWQ6IG51bWJlciwgcGlkOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBwb3J0IG9mIHRoaXMucG9ydHMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNlcmlhbENvbm5lY3REZXZpY2U6IHNlcmlhbCBhdmFpbGFibGUsIHBvcnRzOiBgLCBwb3J0LmdldEluZm8oKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNiUHJvZHVjdElkLCB1c2JWZW5kb3JJZCB9ID0gcG9ydC5nZXRJbmZvKCk7XHJcbiAgICAgICAgICAgIGlmICh1c2JQcm9kdWN0SWQgPT0gcGlkICYmIHVzYlZlbmRvcklkID09IHZpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxQb3J0T3Blbihwb3J0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdCBmcm9tIGRldmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsRGlzY29ubmVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmVhZGVyLnJlbGVhc2VMb2NrKCk7IC8vIGRvZXMnbnQgZG8gaXQgOihcclxuICAgICAgICAgICAgdGhpcy5wb3J0LmNsb3NlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvcnQgY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFdhaXQgdW50aWwgc29tZSByZXNwb25zZSBvciB0aW1lb3V0LCByZXR1cm5zIHJlc3BvbnNlIG9yICd0aW1lb3V0JyBvciBtaWdodCBmYWlsIHdpdGggJ2J1c3knIG9yICdkaXNjb25uZWN0ZWQnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxXcml0ZVdhaXQodmFsdWU6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gMTAwMDApOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIC8vIGNsZWFuIHNlcmlhbCBpbnB1dFxyXG4gICAgICAgIHRoaXMuaW5wdXRRdWV1ZSA9IFtdO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9ydCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IHVudGlsIHNvbWUgcmVzcG9uc2Ugb3IgdGltZW91dFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lc3RlcCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXh0aW1lID0gdGltZW91dDtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIWF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUgPSBhd2FpdCB0aGlzLnNlcmlhbEF2YWlsKHRpbWVzdGVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4dGltZSA9IG1heHRpbWUgLSB0aW1lc3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heHRpbWUgPD0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IGF2YWlsOiR7YXZhaWxhYmxlfSB0aW1lOiR7dGltZW91dCAtIG1heHRpbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFdyaXRlV2FpdCBjaGVjazogJHt0aGlzLmlucHV0UXVldWUubGVuZ3RofWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0UXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnAgPSA8c3RyaW5nPnRoaXMuaW5wdXRRdWV1ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFdyaXRlV2FpdCByZXNvbHZlOiAke2lucH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbnApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgcmVqZWN0OiBgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCd0aW1lb3V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdidXN5Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4odGhpcy5wb3J0KTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgnZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHdyaXRlIGFueXRoaW5nIHRvIHRoZSBkZXZpY2UuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbElucHV0Rm9ybShldmVudDogSW5wdXRFdmVudCkgeyAvLyBmaXJlcyB3aGVuIHJldHVybiBpcyBlbnRlcmVkXHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlSW5wdXQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gZm9ybSB3aWxsIGRvIHN0cmFuZ2UgdGhpbmdzICFcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbElucHV0Q2hhbmdlKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gd3JpdGUgYW55dGhpbmcgdG8gdGhlIGRldmljZS5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsSW5wdXRDaGFuZ2UoZXZlbnQ6IElucHV0RXZlbnQpIHsgLy8gZmlyZXMgd2hlbiByZXR1cm4gaXMgZW50ZXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmRldmljZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gdGhpcy5kZXZpY2VJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdzZXJpYWxJbnB1dENoYW5nZSAtIG5vIHBvcnQgb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqIHByaXZhdGUgc3R1ZmYgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2VyaWFsQ2hlY2soKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChcInNlcmlhbFwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcnRzKCk7XHJcbiAgICAgICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQXV0b21hdGljYWxseSBvcGVuIGV2ZW50LnRhcmdldCBvciB3YXJuIHVzZXIgYSBwb3J0IGlzIGF2YWlsYWJsZS5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJpYWxDaGVjazpjb25uZWN0JywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQb3J0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJpYWwuYWRkRXZlbnRMaXN0ZW5lcihcImRpc2Nvbm5lY3RcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW1vdmUgfGV2ZW50LnRhcmdldHwgZnJvbSB0aGUgVUkuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VyaWFsIHBvcnQgd2FzIG9wZW5lZCwgYSBzdHJlYW0gZXJyb3Igd291bGQgYmUgb2JzZXJ2ZWQgYXMgd2VsbC5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJpYWxDaGVjazpkaXNjb25uZWN0JywgZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ05vIHNlcmlhbCBBUEkgYXZhaWxhYmxlLCB0cnkgYW5vdGhlciBicm93c2VyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsRXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgc2VyaWFsIHBvcnQuIENvbm5lY3Rpb24gdG8gZGV2aWNlIGltcG9zc2libGUhIFVzZSBDaHJvbWUhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUG9ydHMoKSB7XHJcbiAgICAgICAgLy8gbGlzdHMgYWxsIHJlY2VudGx5IHVzZWQgcG9ydHMsIGNvdWxkIGp1c3Qgb3BlbiBvbmUgdGhlbi5cclxuICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5nZXRQb3J0cygpLnRoZW4oKHBvcnRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVQb3J0czonLCBwb3J0cyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydHMgPSBwb3J0cztcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSAnJzsvL2RldmljZXM6PGJyPic7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBvcnQgb2YgcG9ydHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXJpYWwgYXZhaWxhYmxlLCBwb3J0czogYCwgcG9ydC5nZXRJbmZvKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB1c2JQcm9kdWN0SWQsIHVzYlZlbmRvcklkIH0gPSBwb3J0LmdldEluZm8oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGVQb3J0cyBwb3J0IHBpZDoke3VzYlByb2R1Y3RJZH0gdmlkOiR7dXNiVmVuZG9ySWR9YCk7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1taWNyb2NoaXBcIj48L2k+IHBpZDoke3VzYlByb2R1Y3RJZH0gdmlkOiR7dXNiVmVuZG9ySWR9IDxidXR0b24gY2xhc3M9XCJ3My1idG4gdzMtcm91bmQgdzMtbGlnaHQtZ3JleSB3My10aW55XCIgaWQ9XCIke3VzYlZlbmRvcklkfS0ke3VzYlByb2R1Y3RJZH1cIj48aSBjbGFzcz1cImZhIGZhLXBsdWdcIj48L2k+IGNvbm5lY3QgPC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUluZm8uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bnMgPSB0aGlzLmRldmljZUluZm8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBidG4gb2YgYnRucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4geyBjb25zdCBpZHMgPSBidG4uaWQuc3BsaXQoJy0nKTsgY29uc29sZS5sb2coaWRzKTsgdGhpcy5zZXJpYWxDb25uZWN0RGV2aWNlKHBhcnNlSW50KGlkc1swXSksIHBhcnNlSW50KGlkc1sxXSkpIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlQ29ubmVjdCAmJiAodGhpcy5wb3J0cyA9PSBudWxsIHx8IHRoaXMucG9ydHMubGVuZ3RoID09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlUG9ydHM6IG9wZW4gZGV2IGJ1dHRvbnMhISEnLCB0aGlzLmRldmljZUNvbm5lY3QuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlQ29ubmVjdC5jbGFzc05hbWUgPSB0aGlzLmRldmljZUNvbm5lY3QuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLWhpZGUnLCAndzMtc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVucyBhIGdpdnZlbiBwb3J0LiBDYW4gYmUgdXNlZCBhZnRlciBxdWVyaWluZyBwb3J0cyB3aXRoIHVwZGF0ZVBvcnRzLlxyXG4gICAgICogQHBhcmFtIHBvcnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXJpYWxQb3J0T3Blbihwb3J0OiBhbnkpIHtcclxuICAgICAgICBwb3J0Lm9uY29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENPTk5FQ1RFRGApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcG9ydC5vbmRpc2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBESVNDT05ORUNURURgKTtcclxuICAgICAgICAgICAgaWYodGhpcy5vblNlcmlhbERpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlcmlhbERpc2Nvbm5lY3RlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb3J0Lm9wZW4oeyBiYXVkUmF0ZTogMjUwMDAwIH0pLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnQgPSBwb3J0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VMb2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlTG9nLmlubmVySFRNTCA9IFwiY29ubmVjdGVkPGJyPlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3J0IG9wZW5lZCA/ICcsIHRoaXMucG9ydCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25TZXJpYWxDb25uZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlcmlhbENvbm5lY3RlZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsUmVhZC5iaW5kKHRoaXMpLCAwKTsgLy8gc3RhcnQgcmVhZCBsb29wXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsRXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlcmlhbEVycm9yKGVycm9yOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ3NlcmlhbEVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZUxvZykge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUxvZy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ3My1yZWRcIj4ke2Vycm9yfTwvc3Bhbj48YnI+YFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsLCBzdGFydHMgdGhlIHJlYWQgbGluZSBsb29wLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbFJlYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydCkge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkYWJsZVN0cmVhbUNsb3NlZCA9IHRoaXMucG9ydC5yZWFkYWJsZS5waXBlVG8odGhpcy50ZXh0RGVjb2Rlci53cml0YWJsZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZGVyID0gdGhpcy50ZXh0RGVjb2Rlci5yZWFkYWJsZS5nZXRSZWFkZXIoKTtcclxuICAgICAgICAgICAgLy8gTGlzdGVuIHRvIGRhdGEgY29taW5nIGZyb20gdGhlIHNlcmlhbCBkZXZpY2UuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxSZWFkb24uYmluZCh0aGlzKSwgMSk7IC8vIHdpbGwgbG9vcCB0aGVyZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsLCBoYW5kbGVzIHRoZSByZWFkIGxpbmUgbG9vcC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxSZWFkb24oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgdGhpcy5yZWFkZXIucmVhZCgpO1xyXG4gICAgICAgICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWxsb3cgdGhlIHNlcmlhbCBwb3J0IHRvIGJlIGNsb3NlZCBsYXRlci4gLy8gRG9lcyBub3QgaGFwcGVuICFcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZGVyLnJlbGVhc2VMb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VyaWFsUmVhZCAtIGRvbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwdXNoZWRTdHVmZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWUgaXMgYSBzdHJpbmcuXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignXFxuJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQgJywgdmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9OyAvLyB0aGVyZSBpcyBhIFxcbiBpbiBpdCAhXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRMYXN0ICs9IHZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFF1ZXVlLnB1c2godGhpcy5pbnB1dExhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbExvZyh0aGlzLmlucHV0TGFzdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRMYXN0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hlZFN0dWZmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxSZWFkb24gbGFzdDogXCIke3RoaXMuaW5wdXRMYXN0fVwiYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIFxcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRMYXN0ICs9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxSZWFkb24gbGFzdDogXCIke3RoaXMuaW5wdXRMYXN0fVwiYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHB1c2hlZFN0dWZmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNlcmlhbENhbGxiYWNrLmJpbmQodGhpcyksIDUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNlcmlhbFJlYWRvbi5iaW5kKHRoaXMpLCAxKTsgLy8gd2lsbCBsb29wIHRoZXJlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbEVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcmlhbENhbGxiYWNrKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV2aWNlTG9nJyk7XHJcbiAgICAgICAgLy8gaWYgKGVsZW0pIHtcclxuICAgICAgICAvLyAgICAgbGV0IGxhdGVzdCA9IHRoaXMuaW5wdXRRdWV1ZS5wb3AoKTtcclxuICAgICAgICAvLyAgICAgd2hpbGUgKGxhdGVzdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgZWxlbS5pbm5lckhUTUwgKz0gYCR7bGF0ZXN0fTxicj5gO1xyXG4gICAgICAgIC8vICAgICAgICAgbGF0ZXN0ID0gdGhpcy5pbnB1dFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2VyaWFsV3JpdGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsTG9nKHZhbHVlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIHdyaXRlLi4uXHJcbiAgICAgICAgbGV0IHV0ZjhFbmNvZGUgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuICAgICAgICBjb25zdCB3cml0ZXIgPSB0aGlzLnBvcnQud3JpdGFibGUuZ2V0V3JpdGVyKCk7XHJcbiAgICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKHV0ZjhFbmNvZGUuZW5jb2RlKGAke3ZhbHVlfVxcbmApKTtcclxuICAgICAgICB3cml0ZXIucmVsZWFzZUxvY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdhaXRzIHVudGlsIGRhdGEgd2FzIHJlYWQgb3IgdGltZW91dFxyXG4gICAgICogQHBhcmFtIHRpbWVvdXRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2VyaWFsQXZhaWwodGltZW91dDogbnVtYmVyID0gMTApOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VyaWFsTG9nKHRleHQ6IHN0cmluZywgaW5jb21taW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlU2VyaWFsKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmRldmljZVNlcmlhbC5jaGlsZEVsZW1lbnRDb3VudCA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2ggPSB0aGlzLmRldmljZVNlcmlhbC5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwucmVtb3ZlQ2hpbGQoY2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbmNvbW1pbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsLmlubmVySFRNTCArPSBgPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFycm93LXJpZ2h0LXRvLWJyYWNrZXRcIj48L2k+ICR7dGV4dH08L2Rpdj5gXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZVNlcmlhbC5pbm5lckhUTUwgKz0gYDxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hcnJvdy11cC1yaWdodC1mcm9tLXNxdWFyZVwiPjwvaT4gJHt0ZXh0fTwvZGl2PmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtrZFRyZWV9IGZyb20gJ2tkLXRyZWUtamF2YXNjcmlwdCc7IC8vIG5vZGUgbW9kdWxlXHJcbi8vIGltcG9ydCB7a2RUcmVlLCBrZFRyZWVPYmplY3R9IGZyb20gJy4va2RUcmVlJztcclxuXHJcbmNsYXNzIEJvdW5kaW5nQm94IHtcclxuICAgIG1pbng6IG51bWJlciA9IDk5OTk5O1xyXG4gICAgbWlueTogbnVtYmVyID0gOTk5OTk7XHJcbiAgICBtYXh4OiBudW1iZXIgPSAtOTk5OTk7XHJcbiAgICBtYXh5OiBudW1iZXIgPSAtOTk5OTk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgdXBkYXRlRnJvbVBhZChwYWQ6UGFkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUocGFkLnBvc1gsIHBhZC5wb3NZKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh4IDwgdGhpcy5taW54KSB0aGlzLm1pbnggPSB4O1xyXG4gICAgICAgIGlmICh5IDwgdGhpcy5taW55KSB0aGlzLm1pbnkgPSB5O1xyXG4gICAgICAgIGlmICh4ID4gdGhpcy5tYXh4KSB0aGlzLm1heHggPSB4O1xyXG4gICAgICAgIGlmICh5ID4gdGhpcy5tYXh5KSB0aGlzLm1heHkgPSB5O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBiYjogJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fSAke3RoaXMuY2VudGVyKClbMV19YCk7XHJcbiAgICB9XHJcbiAgICBjZW50ZXIoem9vbTogbnVtYmVyID0gMS4wKTogW3g6IG51bWJlciwgeTogbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFsodGhpcy5taW54ICsgKHRoaXMubWF4eCAtIHRoaXMubWlueCkgLyAyKSAqIHpvb20sICh0aGlzLm1pbnkgKyAodGhpcy5tYXh5IC0gdGhpcy5taW55KSAvIDIpICogem9vbV07XHJcbiAgICB9XHJcbiAgICB6ZXJvKHpvb206IG51bWJlciA9IDEuMCk6IFt4OiBudW1iZXIsIHk6IG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5taW54ICogem9vbSwgdGhpcy5taW55ICogem9vbV07XHJcbiAgICB9XHJcbiAgICBzaXplKHpvb206IG51bWJlciA9IDEuMCk6IFt4OiBudW1iZXIsIHk6IG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbKHRoaXMubWF4eCAtIHRoaXMubWlueCkgKiB6b29tLCAodGhpcy5tYXh5IC0gdGhpcy5taW55KSAqIHpvb21dO1xyXG4gICAgfVxyXG4gICAgZGlhZ29uYWwoem9vbTogbnVtYmVyID0gMS4wKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplKHpvb20pO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc2l6ZVswXSpzaXplWzBdICsgc2l6ZVsxXSpzaXplWzFdKTtcclxuICAgIH1cclxuICAgIC8qKiBDaGVjayBpZiBwYWQgaXMgaW5zaWRlIHRoZSBib3VuZGluZ2JveCAqL1xyXG4gICAgaW5zaWRlKHBhZDogUGFkKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHBhZC5wb3NYID49IHRoaXMubWlueCAmJiBwYWQucG9zWCA8PSB0aGlzLm1heHgpICYmIChwYWQucG9zWSA+PSB0aGlzLm1pbnkgJiYgcGFkLnBvc1kgPD0gdGhpcy5tYXh5KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFkU3R5bGUge1xyXG4gICAgcHVibGljIGZvcm06IHN0cmluZztcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoZm9ybTogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFkIHtcclxuICAgIHBvc1g6IG51bWJlcjtcclxuICAgIHBvc1k6IG51bWJlcjtcclxuICAgIHN0eWxlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHlsZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHg7XHJcbiAgICAgICAgdGhpcy5wb3NZID0geTtcclxuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICB9XHJcbiAgICBhc1R1cGxlKCk6W251bWJlcixudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucG9zWCwgdGhpcy5wb3NZXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBDQiB7IC8vZXh0ZW5kcyBrZFRyZWVPYmplY3Qge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBQYWRTdHlsZT47XHJcbiAgICBtYXBQYWRzOiBNYXA8c3RyaW5nLCBTZXQ8UGFkPj47XHJcbiAgICBmaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBtb3VzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG1vdXNlU3RhcnRYOiBudW1iZXIgPSAwO1xyXG4gICAgbW91c2VTdGFydFk6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZU9mZlg6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZU9mZlk6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZVNlbGVjdDogYm9vbGVhbjtcclxuICAgIG1vdXNlU2VsZWN0WDogbnVtYmVyO1xyXG4gICAgbW91c2VTZWxlY3RZOiBudW1iZXI7XHJcblxyXG4gICAgcG9zWmVybzogbnVtYmVyW107XHJcblxyXG4gICAgem9vbTogbnVtYmVyID0gNS4wO1xyXG4gICAgYmJQY2I6IEJvdW5kaW5nQm94O1xyXG4gICAgYmJTZWxlY3Rpb246IEJvdW5kaW5nQm94O1xyXG4gICAgYmJaZXJvOiBCb3VuZGluZ0JveDsgLy8gdXNlIGNlbnRlciBhcyB6ZXJvXHJcblxyXG4gICAgdHJlZToga2RUcmVlPFBhZD47XHJcbiAgICBuZWFyZXN0OltQYWQsIG51bWJlcl1bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tYXBTdHlsZXMgPSBuZXcgTWFwPHN0cmluZywgUGFkU3R5bGU+KCk7XHJcbiAgICAgICAgdGhpcy5tYXBQYWRzID0gbmV3IE1hcDxzdHJpbmcsIFNldDxQYWQ+PigpO1xyXG4gICAgICAgIHRoaXMuYmJQY2IgPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICB0aGlzLmJiWmVybyA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHRoaXMuYmJTZWxlY3Rpb24gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW52YXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIFplcm8gcG9zaXRpb24gdG8gdGhlIGxvd2VyIGxlZnQgb2Ygc2VsZWN0aW9uIHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8oKTp2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdXNlIGxhc3Qgc2VsZWN0aW9uID8/P1xyXG4gICAgICAgIHRoaXMuYmJaZXJvID0gdGhpcy5iYlNlbGVjdGlvbjtcclxuICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQY2I6c2V0WmVybzogJHt0aGlzLmJiWmVyby56ZXJvKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBaZXJvIHBvc2l0aW9uIHJlbGF0aXZlIHRvIE9yaWdpbigwLDApLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0WmVybygpOltudW1iZXIsbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmJaZXJvLnplcm8oKTsgLy8gbG93ZXIgbGVmdCA/PyBiZXR0ZXIgd2hlbiAuY2VudGVyKCkgPz9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIEFsbCBQYWRzIGluIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNlbGVjdGVkKCk6UGFkW10ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6UGFkW10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IG5lYXIgb2YgdGhpcy5uZWFyZXN0KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5lYXIpO1xyXG4gICAgICAgICAgICBpZihuZWFyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5lYXJbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBMb3dlciBsZWZ0IG9mIHNlbGVjdGlvbiBhcyB0dXBsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWRaZXJvKCk6W251bWJlcixudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYlNlbGVjdGlvbi56ZXJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZENvdW50KCk6bnVtYmVyIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICBmb3IobGV0IHBhZHNldCBvZiB0aGlzLm1hcFBhZHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHBhZHNldFsxXS5zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tVG9GaXQoc2l6ZTpbbnVtYmVyLG51bWJlcl0pIHtcclxuICAgICAgICBsZXQgcHNpemUgPSB0aGlzLmJiUGNiLnNpemUoKTtcclxuICAgICAgICBsZXQgencgPSBzaXplWzBdIC8gcHNpemVbMF07XHJcbiAgICAgICAgbGV0IHpoID0gc2l6ZVsxXSAvIHBzaXplWzFdO1xyXG4gICAgICAgIHRoaXMuem9vbSA9ICgoencgPiB6aCk/IHpoIDogencpICogLjk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBjYjp6b29tVG9GaXQgem9vbSAke3RoaXMuem9vbX1gLCBwc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWCA9IC0odGhpcy5iYlBjYi5jZW50ZXIoKVswXSAqIHRoaXMuem9vbSkgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZZID0gLSh0aGlzLmJiUGNiLmNlbnRlcigpWzFdICogdGhpcy56b29tKSArIHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRQYWRTdHlsZShuYW1lOiBzdHJpbmcsIGZvcm06IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1hcFN0eWxlcy5zZXQobmFtZSwgbmV3IFBhZFN0eWxlKGZvcm0sIHcsIGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYWQoc3R5bGU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWFwUGFkcy5oYXMoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwUGFkcy5zZXQoc3R5bGUsIG5ldyBTZXQ8UGFkPigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhZHNldCA9IHRoaXMubWFwUGFkcy5nZXQoc3R5bGUpO1xyXG4gICAgICAgIGlmIChwYWRzZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3cGFkID0gbmV3IFBhZChzdHlsZSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHBhZHNldC5hZGQobmV3cGFkKTtcclxuICAgICAgICAgICAgdGhpcy5iYlBjYi51cGRhdGUoeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJlZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFkcyA6IFBhZFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhZHNldHMgb2YgdGhpcy5tYXBQYWRzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwYWQgb2YgcGFkc2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZHMucHVzaChwYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyZWUgPSBuZXcga2RUcmVlKHBhZHMsIFBDQi5kaXN0YW5jZSwgW1wicG9zWFwiLCBcInBvc1lcIl0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRyZWUgPSBuZXcga2RUcmVlKFBDQiwgcGFkcywgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7IC8vIHRzIHZlcnNpb25cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RyZWUgYmY6JywgdGhpcy50cmVlLmJhbGFuY2VGYWN0b3IoKSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXZlbnQuYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uID09IDApIHsgLy8gc3RhcnQgc2VsZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IG14ID0gKGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlgpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBjb25zdCBteSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApIC0gdGhpcy5tb3VzZU9mZlkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFkgPSBteTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFkgPSBteTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQY2I6bW91c2VEb3duOiB4OiR7dGhpcy5tb3VzZVN0YXJ0WH0geToke3RoaXMubW91c2VTdGFydFl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiAhPSAwKSB7IC8vIHBhbiBhcm91bmRcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WCA9IGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFkgPSBldmVudC5jbGllbnRZICogdHJhbnMuZCAtIHRoaXMubW91c2VPZmZZO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BjYjptb3VzZVVwIGV2ZW50OicsIGV2ZW50KTtcclxuICAgICAgICBpZihldmVudC5idXR0b24gIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5idXR0b24gPT0gMCkgeyAvLyBzZWxlY3RcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmFucywgZXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnJywgdGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZLXRoaXMuY2FudmFzLm9mZnNldFRvcCksIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgY29uc3QgbXggPSAoZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWCkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGNvbnN0IG15ID0gKHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCkgLSB0aGlzLm1vdXNlT2ZmWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RZID0gbXk7XHJcblxyXG4gICAgICAgICAgICAvLyBiYiA9IHNlbGVjdGVkIHJlY3RhbmdsZVxyXG4gICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24udXBkYXRlKHRoaXMubW91c2VTdGFydFgsIHRoaXMubW91c2VTdGFydFkpO1xyXG4gICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uLnVwZGF0ZSh0aGlzLm1vdXNlU2VsZWN0WCwgdGhpcy5tb3VzZVNlbGVjdFkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhZCA9IG5ldyBQYWQoJycsIHRoaXMuYmJTZWxlY3Rpb24uY2VudGVyKClbMF0sIHRoaXMuYmJTZWxlY3Rpb24uY2VudGVyKClbMV0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGNiOm1vdXNlVXAgY3g6JHtwYWQucG9zWH0gY3k6JHtwYWQucG9zWX0gZGlhZ29uYWw6JHt0aGlzLmJiU2VsZWN0aW9uLmRpYWdvbmFsKCl9YCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnRyZWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZDpbUGFkLCBudW1iZXJdW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gdGhpcy5iYlNlbGVjdGlvbi5kaWFnb25hbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGlzdCA8IDAuMSkgeyAvLyBubyBkcmFnIC0gb25seSBvbmVcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRoaXMudHJlZS5uZWFyZXN0KHBhZCwgMSwgZGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0ID0gZm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3QgPSAoZGlzdC8yKSAqIChkaXN0LzIpOyAvLyBzZWFyY2ggcmVxdWlyZSBzcXVhcmUgZGlzdGFuY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdGhpcy50cmVlLm5lYXJlc3QocGFkLCB0aGlzLmdldFBhZENvdW50KCksIGRpc3QpOyAvLyB1dXVoaGggdXNlIHBhZCBjb3VudCAhP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IG5lYXIgb2YgZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG06JHtteH0sJHtteX0gbmVhcmVzdDoke25lYXJbMF0ucG9zWH0sJHtuZWFyWzBdLnBvc1l9ICBkaXN0OiR7TWF0aC5zcXJ0KG5lYXJbMV0pfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8gdXV1aGhoIGNoZWNrIGlmIGluc2lkZSB0aGUgYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYmJTZWxlY3Rpb24uaW5zaWRlKG5lYXJbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3QucHVzaChuZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBuZWVkIGEgYmIgZm9yIGFjdHVhbCBzZWxlY3RlZCBwb2ludHMgdG8gZ2V0IHplcm8gcmlnaHRcclxuICAgICAgICAgICAgICAgIGxldCBiYk5ld1NlbGVjdGlvbiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IG5lYXIgb2YgdGhpcy5uZWFyZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmJOZXdTZWxlY3Rpb24udXBkYXRlRnJvbVBhZChuZWFyWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24gPSBiYk5ld1NlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGNiOm1vdXNlVXAgc2VsZWN0aW9uIGZvdW5kICMke2ZvdW5kLmxlbmd0aH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIC8vIG9vb2hoaCBkbyBub3QgdHJ1c3QgZXZlbnQuYnV0dG9uLCBpdCdzIGFsd2F5cyAwIGhlcmUgIVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwY2I6bW91c2VNb3ZlJyxldmVudCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICBpZih0aGlzLm1vdXNlRmxhZykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWCA9IGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZVN0YXJ0WDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU9mZlkgPSBldmVudC5jbGllbnRZICogdHJhbnMuZCAtIHRoaXMubW91c2VTdGFydFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubW91c2VTZWxlY3QgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG14ID0gKGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlgpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBjb25zdCBteSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApIC0gdGhpcy5tb3VzZU9mZlkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WSA9IG15O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlV2hlZWwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmRlbHRhWSk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56b29tICo9IDEuMTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3VzZU9mZlggKj0gMC45O1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdXNlT2ZmWSAqPSAwLjk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy56b29tICo9IDAuOTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3VzZU9mZlggKj0gMS4xO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdXNlT2ZmWSAqPSAxLjE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VPdXQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlzdGFuY2UoYTpQYWQsIGI6UGFkKSB7XHJcbiAgICAgICAgcmV0dXJuIChhLnBvc1ggLSBiLnBvc1gpKihhLnBvc1ggLSBiLnBvc1gpICsgIChhLnBvc1kgLSBiLnBvc1kpKihhLnBvc1kgLSBiLnBvc1kpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIC8vIHRoZW9yZXRpc2NoIHNvLi4uXHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ29yYW5nZXJlZCc7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2FudGlxdWV3aGl0ZSc7XHJcblxyXG4gICAgICAgIC8vIGRyYXcgYmIgY2VudGVyXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcclxuICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5iYlBjYi5jZW50ZXIodGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oY2VudGVyWzBdIC0gMTAgKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhjZW50ZXJbMF0gKyAxMCArIHRoaXMubW91c2VPZmZYLCBjZW50ZXJbMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGNlbnRlclswXSArIHRoaXMubW91c2VPZmZYLCBjZW50ZXJbMV0gLSAxMCArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oY2VudGVyWzBdICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSArIDEwICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIC8vIGRyYXcgYmJcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5yZWN0KHRoaXMuYmJQY2IuemVybyh0aGlzLnpvb20pWzBdICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMuYmJQY2IuemVybyh0aGlzLnpvb20pWzFdICsgdGhpcy5tb3VzZU9mZlksIHRoaXMuYmJQY2Iuc2l6ZSh0aGlzLnpvb20pWzBdLCB0aGlzLmJiUGNiLnNpemUodGhpcy56b29tKVsxXSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBhZHN0eWxlIG9mIHRoaXMubWFwUGFkcy5rZXlzKCkpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eSA9IHRoaXMubWFwU3R5bGVzLmdldChwYWRzdHlsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZHNldCA9IHRoaXMubWFwUGFkcy5nZXQocGFkc3R5bGUpO1xyXG4gICAgICAgICAgICBpZiAoc3R5ICYmIHBhZHNldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3cgPSBzdHkud2lkdGggKiB0aGlzLnpvb207XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaCA9IHN0eS5oZWlnaHQgKiB0aGlzLnpvb207XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwYWQgb2YgcGFkc2V0LnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eS5mb3JtID09ICdSJyB8fCBzdHkuZm9ybSA9PSAnTycgfHwgc3R5LmZvcm0gPT0gJ1JvdW5kUmVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZC5wb3NYICogdGhpcy56b29tIC0gc3cgLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZC5wb3NZICogdGhpcy56b29tIC0gc2ggLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3LCBzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHkuZm9ybSA9PSAnQycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmVsbGlwc2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1kgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkLnBvc1ggKiB0aGlzLnpvb20gLSBzdyAvIDIuMCArIHRoaXMubW91c2VPZmZYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkLnBvc1kgKiB0aGlzLnpvb20gLSBzaCAvIDIuMCArIHRoaXMubW91c2VPZmZZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3R5LndpZHRoICogdGhpcy56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRyYXcgcXVhdHNjaCAke3N0eS5mb3JtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIGZvciBwYWRzdHlsZVxyXG5cclxuICAgICAgICAvLyBkcmF3IHNlbGVjdGlvbkNyb3NzKGVzKVxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3B1cnBsZSc7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgbGV0IGNzaXplID0gLjU7XHJcbiAgICAgICAgZm9yKGNvbnN0IG5lYXIgb2YgdGhpcy5uZWFyZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygobmVhclswXS5wb3NYLWNzaXplKSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCBuZWFyWzBdLnBvc1kgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygobmVhclswXS5wb3NYK2NzaXplKSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCBuZWFyWzBdLnBvc1kgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhuZWFyWzBdLnBvc1ggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgKG5lYXJbMF0ucG9zWStjc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhuZWFyWzBdLnBvc1ggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgKG5lYXJbMF0ucG9zWS1jc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZWFyZXN0OiR7bmVhclswXS5wb3NYfSwke25lYXJbMF0ucG9zWX0gIGRpc3Q6JHtNYXRoLnNxcnQobmVhclsxXSl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHNlbGVjdGlvbiBsb3dlciBsZWZ0ID0gemVybyBrYW5kaWRhdGVcclxuICAgICAgICBsZXQgemVybyA9IFswLDBdO1xyXG4gICAgICAgIGlmKHRoaXMuYmJTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgY3NpemUgPSAyICogdGhpcy56b29tO1xyXG4gICAgICAgICAgICB6ZXJvID0gdGhpcy5iYlNlbGVjdGlvbi56ZXJvKHRoaXMuem9vbSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSAtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gK2NzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh6ZXJvWzBdICsgdGhpcy5tb3VzZU9mZlgsICAgICB6ZXJvWzFdLWNzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXStjc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkcmF3IG9yaWdpblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICB6ZXJvID0gdGhpcy5iYlplcm8uY2VudGVyKHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKC1jc2l6ZSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKCtjc2l6ZSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMubW91c2VPZmZYLCAgICAgICAtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VPZmZYLCAgICAgICArY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIGRyYXcgemVyb1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICB6ZXJvID0gdGhpcy5iYlplcm8uemVybyh0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh6ZXJvWzBdIC1jc2l6ZSArIHRoaXMubW91c2VPZmZYLCB6ZXJvWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh6ZXJvWzBdICtjc2l6ZSArIHRoaXMubW91c2VPZmZYLCB6ZXJvWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh6ZXJvWzBdICsgdGhpcy5tb3VzZU9mZlgsICAgICB6ZXJvWzFdLWNzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh6ZXJvWzBdICsgdGhpcy5tb3VzZU9mZlgsICAgICB6ZXJvWzFdK2NzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gZHJhdyBzZWxlY3Rpb25SZWN0YW5nbGVcclxuICAgICAgICBpZih0aGlzLm1vdXNlU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3B1cnBsZSc7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5tb3VzZVN0YXJ0WCAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVN0YXJ0WSAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlU2VsZWN0WCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU3RhcnRZICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTZWxlY3RYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTZWxlY3RZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVN0YXJ0WCAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVNlbGVjdFkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlU3RhcnRYICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU3RhcnRZICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJcIjtcclxuaW1wb3J0IHsgUENCIH0gZnJvbSBcIi4vcGNiXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyR2VyYmVyIGV4dGVuZHMgUGFyc2VyIHtcclxuICAgIHJlTnVtRm9ybWF0ID0gL14lRlNMQVgoWzAtOV0pKFswLTldKVkoWzAtOV0pKFswLTldKVsqXSUvO1xyXG4gICAgcmVNYXRjaFBhZCA9IC9eKCVBRCkoRFswLTldKykoW0EtWmEtel0rKVssXShbLTAtOS5dKylbWF0/KFstMC05Ll0rKT9bWF0/KFstMC05Ll0rKT8vO1xyXG4gICAgcmVNYXRjaFBhZENvb3JkSW5pdCA9IC9eKFtER11bMC05XSspWypdLztcclxuICAgIHJlTWF0Y2hQYWRDb29yZCA9IC9eWChbLV0/KShbMC05XSspWShbLV0/KShbMC05XSspRChbMC05XSspWypdLztcclxuICAgIF9jYW5jZWwgPSBmYWxzZTtcclxuICAgIGZsb2F0RnJhY3RzID0gMTtcclxuICAgIGZsb2F0RGV6aXMgPSAxO1xyXG4gICAgbGFzdFBhZCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGNiOiBQQ0IpIHtcclxuICAgICAgICBzdXBlcihwY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZUZpbGUoZmlsZTogRmlsZSk6UHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGUuYXJyYXlCdWZmZXIoKS50aGVuKChidWYpID0+IHtcclxuICAgICAgICAgICAgICAgIGFycmF5QnVmZmVyVG9TdHJpbmcoYnVmLCAnVVRGLTgnLCAodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzR2VyYmVyVGV4dCh0ZXh0KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FuY2VsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwcm9jZXNzR2VyYmVyVGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgICAgICAvLyB0cmFuc2xhdGUgbGluZSBlbmRzLi4uXHJcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxyL2csICcnKTsgLy8gcmVtb3ZlIHdpbmRvd3MgdHJhc2hcclxuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xyXG5cclxuICAgICAgICBsZXQgbGluZU5yID0gMTtcclxuICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgICAgIGxpbmVOcisrO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyKCR7bGluZU5yfS8ke2xpbmVzLmxlbmd0aH0pOiBgKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzc0dlcmJlckxpbmUobGluZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9jZXNzQ0IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NCKGxpbmVOciAqIDEwMCAvIGxpbmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSAvLyBmb3JcclxuXHJcbiAgICAgICAgdGhpcy5wY2IucmV0cmVlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIHByb2Nlc3NHZXJiZXJMaW5lKGxpbmU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbGluZSA9IGxpbmUucmVwbGFjZSgvXFxuL2csJzxicj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBaYWhsZW5mb3JtYXQgaW5mbyBsaW5lIFwiJUZTTEFYMzRZMzQqJVwiXHJcbiAgICAgICAgICAgICAgICAvLyAgICVGU0xBWDI1WTI1KiUgQ29vcmRpbmF0ZSBmb3JtYXQgc3BlY2lmaWNhdGlvbjpcclxuICAgICAgICAgICAgICAgIC8vICAgQ29vcmRpbmF0ZXMgZm9ybWF0IGlzIDIuNTpcclxuICAgICAgICAgICAgICAgIC8vICAgMiBkaWdpdHMgaW4gdGhlIGludGVnZXIgcGFydFxyXG4gICAgICAgICAgICAgICAgLy8gICA1IGRpZ2l0cyBpbiB0aGUgZnJhY3Rpb25hbCBwYXJ0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaE51bUZvcm1hdCA9IHRoaXMucmVOdW1Gb3JtYXQuZXhlYyhsaW5lKTsgLy9saW5lLm1hdGNoKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hOdW1Gb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE51bUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdERlemlzID0gcGFyc2VJbnQobWF0Y2hOdW1Gb3JtYXRbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRGcmFjdHMgPSBwYXJzZUludChtYXRjaE51bUZvcm1hdFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGdlcmJlcjogZmxvYXQgZGlnaXRzID0gJHt0aGlzLmZsb2F0RGV6aXN9ICR7dGhpcy5mbG9hdEZyYWN0c31gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgcGFkIGRlZmluaXRpb25zXHJcbiAgICAgICAgICAgICAgICAvLyAlQUREMjFSLDAuNjAwMDAwWDEuMDUwMDAwKiVcclxuICAgICAgICAgICAgICAgIC8vICVBREQxMFJvdW5kUmVjdCwwLjEyMDAwMCBYIC0wLjE4MDAwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBYIDAuNjgwMDAwIFggLTAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgWCAtMC42ODAwMDAgWCAwLjE4MDAwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgIFggLTAuNjgwMDAwIFggMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgWCAwLjY4MDAwMCBYIDAqJVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hQYWQgPSB0aGlzLnJlTWF0Y2hQYWQuZXhlYyhsaW5lKTsgLy8gbGluZS5tYXRjaCgpOy8vLyk7XHJcbiAgICAgICAgICAgICAgICAvLyBXZW5uIFwiQ1wiIGRhbm4gZ2lidHMgbnVyIGVpbmUgY29vcmRcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoUGFkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWRzRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRzRmllbGQuaW5uZXJIVE1MICs9IGAke21hdGNoUGFkWzJdfSAke21hdGNoUGFkWzNdfSAke21hdGNoUGFkWzRdfSAke21hdGNoUGFkWzVdfTxicj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRbM10gPT0gJ1JvdW5kUmVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2ljYWQgbWFjcm8gc2NobnVsbGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wY2IuYWRkUGFkU3R5bGUobWF0Y2hQYWRbMl0sIG1hdGNoUGFkWzNdLCBNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKSksIE1hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hQYWRbNl0pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXI6IHN0eWxlICR7bWF0Y2hQYWRbMl19LCR7bWF0Y2hQYWRbM119LCAke01hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hQYWRbNV0pKX0sICR7TWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs2XSkpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGNiLmFkZFBhZFN0eWxlKG1hdGNoUGFkWzJdLCBtYXRjaFBhZFszXSwgcGFyc2VGbG9hdChtYXRjaFBhZFs0XSksIHBhcnNlRmxvYXQobWF0Y2hQYWRbNV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdlcmJlcjogc3R5bGUgJHttYXRjaFBhZFsyXX0sJHttYXRjaFBhZFszXX0sICR7cGFyc2VGbG9hdChtYXRjaFBhZFs0XSl9LCAke3BhcnNlRmxvYXQobWF0Y2hQYWRbNV0pfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEeHgqIGNvbW1hbmQgLSBzaG91bGQgYmUgcGFkIGRyYXdcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoUGFkQ29vcmRJbml0ID0gdGhpcy5yZU1hdGNoUGFkQ29vcmRJbml0LmV4ZWMobGluZSk7IC8vbGluZS5tYXRjaCgpOy8vLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRDb29yZEluaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaFBhZENvb3JkSW5pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFkID0gbWF0Y2hQYWRDb29yZEluaXRbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBhIHBhZCBsaW5lOiBcIlgzNzk5ODRZOTYzOTMwRDAzKlwiXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFBhZENvb3JkID0gdGhpcy5yZU1hdGNoUGFkQ29vcmQuZXhlYyhsaW5lKTsgLy8gbGluZS5tYXRjaCgpOy8vLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRDb29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RQYWQuc3RhcnRzV2l0aCgnRCcpKSB7IC8vIGlnbm9yZSBHMzYgb3Igc28gY29tbWFuZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGFuZCByZXR1cm4gLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hQYWRDb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzeCA9IG1hdGNoUGFkQ29vcmRbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzeSA9IG1hdGNoUGFkQ29vcmRbNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuZmxvYXREZXppcyArIHRoaXMuZmxvYXRGcmFjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGwgZnJlYWsncyBsZWFkaW5nIHplcm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzeC5sZW5ndGggPCBsZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4ID0gYDAke3N4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN5Lmxlbmd0aCA8IGxlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3kgPSBgMCR7c3l9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGEgZnJlYWsnbiBmbG9hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnggPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmeSA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ggPSBgJHtzeC5zdWJzdHJpbmcoMCwgdGhpcy5mbG9hdERlemlzKX0uJHtzeC5zdWJzdHJpbmcodGhpcy5mbG9hdERlemlzKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeSA9IGAke3N5LnN1YnN0cmluZygwLCB0aGlzLmZsb2F0RGV6aXMpfS4ke3N5LnN1YnN0cmluZyh0aGlzLmZsb2F0RGV6aXMpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ4ID0gcGFyc2VGbG9hdChzeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ5ID0gcGFyc2VGbG9hdChzeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkWzFdID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnggPSBmeCAqIC0xLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmRbM10gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeSA9IGZ5ICogLTEuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnkgPSBmeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRzRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRzRmllbGQuaW5uZXJIVE1MICs9IGAke3RoaXMubGFzdFBhZH06ICB4OiR7Znh9IHk6JHtmeX0gPGJyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wY2IuYWRkUGFkKHRoaXMubGFzdFBhZCwgZngsIGZ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdlcmJlcjogcGFkICR7bGFzdFBhZH0sICR7Znh9LCAke2Z5fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpZ25vcmluZyAke3RoaXMubGFzdFBhZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGxpbmVOciA+IDE1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7IC8vIGZvciB0ZXN0aW5nICEhIVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wY2IuY2VudGVyKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMCk7IC8vIHRoaXMgZW5hYmxlcyB0aGUgcHJvZ3Jlc3NiYXIgLyBVSSB1cGRhdGVzICFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZm91bmQgb24gc2Ugd2ViLi4uXHJcblxyXG5mdW5jdGlvbiBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlciwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KTtcclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChldnQpID0+IHsgaWYoZXZ0LnRhcmdldCkgY2FsbGJhY2soZXZ0LnRhcmdldC5yZXN1bHQpOyB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYiwgZW5jb2RpbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5QnVmZmVyKHN0cmluZywgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtzdHJpbmddLCB7IHR5cGU6ICd0ZXh0L3BsYWluO2NoYXJzZXQ9JyArIGVuY29kaW5nIH0pO1xyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKGV2dCkgPT4geyBpZihldnQudGFyZ2V0KSBjYWxsYmFjayhldnQudGFyZ2V0LnJlc3VsdCk7IH07XHJcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XHJcbn1cclxuIiwiaW1wb3J0IHsgUENCIH0gZnJvbSAnLi9wY2InO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBwdWJsaWMgcHJvY2Vzc0NCOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgcGFkc0ZpZWxkOiBIVE1MRWxlbWVudHxudWxsO1xyXG4gICAgcHVibGljIGNvb3Jkc0ZpZWxkOiBIVE1MRWxlbWVudHxudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwY2I6IFBDQjtcclxuICAgIGNvbnN0cnVjdG9yKHBjYjogUENCKSB7XHJcbiAgICAgICAgdGhpcy5wY2IgPSBwY2I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlRmlsZT8oZmlsZTogRmlsZSk6UHJvbWlzZTx2b2lkPjsgLy8gdmlydHVhbCAhXHJcbiAgICBwdWJsaWMgY2FuY2VsPygpOiB2b2lkO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5IQVNIX1JFRl83YzBhZjgxYWY0MjZlMTgzLmpzLm1hcCJ9
