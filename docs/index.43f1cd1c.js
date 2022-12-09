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
                    let cmd = "G0 ";
                    cmd += `X${foundpad.posX - this.zero[0]} `;
                    cmd += `Y${foundpad.posY - this.zero[1]} `;
                    try {
                        let response = await this.serialWriteWait(cmd);
                    // console.log('Marlin:moveToAll', response);
                    } catch (what) {} // ignore disconnected for debugging
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
            } catch (what1) {
                // if serialWriteWait fails, do something ?
                console.warn("Marlin:moveToAll: failed", what1);
            }
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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEVBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsTUFBTSxNQUFNLENBQUMsR0FBRSxTQUFTLE1BQU0sQ0FBQztvQkFBRyxFQUFFLElBQUksSUFBRyxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsSUFBSSxHQUFDLENBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUUsRUFBRSxLQUFLLEdBQUMsSUFBRSxLQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRyxLQUFLLEdBQUMsRUFBRSxFQUFDLElBQUUsSUFBRSxFQUFFLE1BQU0sR0FBQyxJQUFFLEtBQUcsR0FBRztvQkFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBRyxFQUFFLE9BQU8sSUFBRyxJQUFJO2dCQUFBO1lBQUM7U0FBRSxHQUFFLENBQUM7SUFBQTtJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBRyxDQUFFLENBQUEsYUFBYSxDQUFBLEdBQUcsTUFBTSxJQUFJLFVBQVUscUNBQW9DO0lBQUE7SUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFO1lBQUMsRUFBRSxVQUFVLEdBQUMsRUFBRSxVQUFVLElBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBWSxHQUFDLENBQUMsR0FBRSxXQUFVLEtBQUksQ0FBQSxFQUFFLFFBQVEsR0FBQyxDQUFDLENBQUEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUU7UUFBQTtJQUFDO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsT0FBTyxLQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUMsSUFBRyxLQUFHLEVBQUUsR0FBRSxJQUFHLENBQUM7SUFBQTtJQUFDLElBQUksSUFBRSxXQUFVO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztRQUFBO1FBQUMsT0FBTyxFQUFFLEdBQUU7WUFBQztnQkFBQyxLQUFJO2dCQUFPLE9BQU0sU0FBUyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUk7b0JBQUMsRUFBRSxJQUFJLElBQUcsRUFBRSxTQUFTLElBQUcsRUFBRSxXQUFXLEdBQUMsR0FBRSxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsSUFBRyxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUcsRUFBRSxNQUFNLElBQUcsRUFBRSxPQUFPLEVBQUU7Z0JBQUE7WUFBQztTQUFFLEdBQUUsQ0FBQztJQUFBLEtBQUksSUFBRSxXQUFVO1FBQUMsU0FBUyxJQUFHO1lBQUMsSUFBSSxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxNQUFNLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsVUFBVSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxnQkFBZ0I7WUFBQyxFQUFFLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUk7UUFBQTtRQUFDLE9BQU8sRUFBRSxHQUFFO1lBQUM7Z0JBQUMsS0FBSTtnQkFBYyxPQUFNLFNBQVMsQ0FBQyxFQUFDO29CQUFDLElBQUksSUFBSSxJQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLEVBQUUsRUFBQyxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxLQUFHLEVBQUU7d0JBQUMsSUFBSSxJQUFFLElBQUUsS0FBRzt3QkFBRSxFQUFFLElBQUksQ0FBQyxJQUFFLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxNQUFNLElBQUUsSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLE1BQU0sQ0FBQztvQkFBQztvQkFBQyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsS0FBRyxFQUFFO3dCQUFDLElBQUksSUFBRSxJQUFFLEtBQUc7d0JBQUUsRUFBRSxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEtBQUssRUFBQyxLQUFHLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsS0FBSyxFQUFDLEVBQUU7b0JBQUM7b0JBQUMsSUFBSSxDQUFDLEtBQUssR0FBQztnQkFBQztZQUFDO1lBQUU7Z0JBQUMsS0FBSTtnQkFBVyxPQUFNLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUk7b0JBQUMsRUFBRSxJQUFJLElBQUcsRUFBRSxJQUFJLEdBQUMsR0FBRSxFQUFFLFNBQVMsR0FBQyxHQUFFLEVBQUUsUUFBUSxDQUFDLEtBQUksR0FBRSxHQUFHO29CQUFDLElBQUksSUFBSSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsS0FBSyxFQUFDLEtBQUcsSUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUUsR0FBRTtvQkFBSSxJQUFJLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1B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QUU7WUFDOUIsSUFBSSxPQUFpQztZQUNyQywrRUFBK0U7WUFDL0UsSUFBRyxLQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxJQUNwQyxRQUFTO1lBQ2IsVUFBVSxLQUFLLFlBQVk7UUFDL0I7UUFFQSx1REFBdUQ7UUFFdkQsaUJBQWlCO1FBRWpCLDRDQUE0QztRQUM1Qyx3REFBd0Q7UUFDeEQsc0VBQXNFO1FBQ3RFLElBQUcsNkJBQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUk7WUFDMUMsK0NBQStDO1lBQy9DLDRCQUFNLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFNBQU8sR0FBRyxFQUFFLENBQUM7WUFDckMsNkJBQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxTQUFTO1FBQzlDLE9BQU87WUFDSCwyQ0FBMkM7WUFDM0MsVUFBVSw2QkFBTyxxQkFBcUIsR0FBRyxNQUFNLEVBQUUsK0JBQStCO1lBQ2hGLDRCQUFNLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLDZCQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLGFBQWEsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN6RCxDQUFDO0lBQ0wsQ0FBQztBQUNMO0FBRUEsU0FBUyxnQkFBZ0IsQ0FBQyxvQkFBb0I7QUFFOUMsT0FBTyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBUTtJQUN2QyxpQ0FBaUM7SUFDakMsV0FBVyxNQUFNO0FBQ3JCIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiLCJub2RlX21vZHVsZXMvY2FudmFzLWNvb3Jkcy9kaXN0L2luZGV4LmpzIiwic3JjL2RldmljZU1hcmxpbi50cyIsIm5vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvc3JjL19kZWZpbmVfcHJvcGVydHkubWpzIiwibm9kZV9tb2R1bGVzL2tkLXRyZWUtamF2YXNjcmlwdC9rZFRyZWUuanMiLCJzcmMvZGV2aWNlLnRzIiwic3JjL3BjYi50cyIsInNyYy9wYXJzZXJHZXJiZXIudHMiLCJzcmMvcGFyc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIE1vdXNlIH0gZnJvbSAnY2FudmFzLWNvb3JkcycgLy8gaHR0cHM6Ly9naXRodWIuY29tL0NvZGVEcmFrZW4vY2FudmFzLWNvb3Jkc1xyXG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICcuL2RldmljZSc7XHJcbmltcG9ydCB7IE1hcmxpbiB9IGZyb20gJy4vZGV2aWNlTWFybGluJztcclxuaW1wb3J0IHsgUENCLCBQYWQsIFBhZFN0eWxlIH0gZnJvbSAnLi9wY2InO1xyXG5pbXBvcnQgeyBQYXJzZXJHZXJiZXIgfSBmcm9tICcuL3BhcnNlckdlcmJlcic7XHJcblxyXG4vLyBzaW1wbGVyICEhISBjb25zdCBpbmZvRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignI2luZm9Ecm9wRG93bicpO1xyXG5cclxuY29uc3QgYm9keTogSFRNTEJvZHlFbGVtZW50IHwgbnVsbCA9IDxIVE1MQm9keUVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbmNvbnN0IG1lc3NhZ2VFbGVtOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUVsZW1cIik7XHJcbmNvbnN0IHVwbG9hZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZEJ1dHRvblwiKTtcclxuY29uc3QgcGFkc0ZpZWxkOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFkc0ZpZWxkXCIpO1xyXG5jb25zdCBjb29yZHM6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDb29yZHNcIik7XHJcbmNvbnN0IGNvb3Jkc0ZpZWxkOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29vcmRzRmllbGRcIik7XHJcbmNvbnN0IGRyb3Bab25lOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bab25lXCIpO1xyXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCA9IDxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbmNvbnN0IGRlYnVnOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdcIik7XHJcbmNvbnN0IHByb2dyZXNzOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XHJcbmNvbnN0IHByb2dyZXNzYmFyOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc2JhcicpO1xyXG5jb25zdCBjb250ZXh0TWVudTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGV4dE1lbnUnKTtcclxuY29uc3QgcHJvZ3Jlc3NDYW5jZWw6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQ2FuY2VsJyk7XHJcblxyXG5jb25zdCBtZW51U2V0WmVybzogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVTZXRaZXJvXCIpO1xyXG5jb25zdCBtZW51TW92ZVRvOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudU1vdmVUb1wiKTtcclxuY29uc3QgbWVudU1vdmVBbGw6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51TW92ZUFsbFwiKTtcclxuY29uc3QgbWVudUJsb2I6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QmxvYlwiKTtcclxuXHJcblxyXG5jb25zdCBtYWluOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuY29uc3Qgb3BlblNpZGViYXJCdXR0b246IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuU2lkZWJhclwiKTtcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG5cclxubGV0IG1lc3NhZ2VDbGVhclRpbWVvdXQ6bnVtYmVyfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxubGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IG51bGw7XHJcbmxldCBtb3VzZTogTW91c2UsIGdyaWQ6IEdyaWQ7XHJcbmxldCBwY2I6IFBDQjtcclxuXHJcbmxldCBkZXZpY2UgPSBuZXcgTWFybGluKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKHVwbG9hZEJ1dHRvbiAmJiBtZW51U2V0WmVybyAmJiBtZW51TW92ZVRvICYmIG1lbnVNb3ZlQWxsICYmIG1lbnVCbG9iICYmIHByb2dyZXNzQ2FuY2VsICYmIHBhZHNGaWVsZCAmJiBjb29yZHNGaWVsZCAmJiBib2R5ICYmIGNhbnZhcyAmJiBmb290ZXIpIHtcclxuICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlTW92ZShldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VEb3duKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VVcChldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZU91dChldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZVdoZWVsKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHVwbG9hZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdXBsb2FkRmlsZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGVFbGUudHlwZSA9IFwiZmlsZVwiO1xyXG4gICAgICAgICAgICB1cGxvYWRGaWxlRWxlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGVFbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXY6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB1c2VyIGhhZCBzZWxlY3RlZCBhIGZpbGVcclxuICAgICAgICAgICAgICAgIGlmICh1cGxvYWRGaWxlRWxlLmZpbGVzICYmIHVwbG9hZEZpbGVFbGUuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gdXBsb2FkRmlsZUVsZS5maWxlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaWxlOiAke2ZpbGUubmFtZX0gc2l6ZToke2ZpbGUuc2l6ZX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0dlcmJlckZpbGUoZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxlYXNlIGNob29zZSBhIGZpbGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51U2V0WmVyby5vbmNsaWNrID0gKGV2ZW50Ok1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwY2Iuc2V0WmVybygpO1xyXG4gICAgICAgICAgICBkZXZpY2Uuc2V0WmVybyhwY2IuZ2V0WmVybygpKTsgLy8gZGV2aWNlIG11c3Qgc3Vic3RyYWN0IFwiemVyb1wiIGZyb20gYWxsIGNvb3Jkc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudU1vdmVUby5vbmNsaWNrID0gKGV2ZW50Ok1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGNvb3JkcyAhISFcclxuICAgICAgICAgICAgLy8gISEhIG5lZWQgdG8gYmUgcmVsYXRpdmUgdG8gemVybyAhISEgdXV1aGhoXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgcGFkcyA9IHBjYi5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICAvLyBpZiAocGFkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcGFkOiBQYWQgPSBwYWRzWzBdO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocGFkKTtcclxuICAgICAgICAgICAgLy8gICAgIGRldmljZS5tb3ZlVG8ocGFkLnBvc1gsIHBhZC5wb3NZLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwY2IuZ2V0U2VsZWN0ZWRaZXJvKCk7IC8vIGxvd2VyIGxlZnQgb2Ygc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGRldmljZS5tb3ZlVG8ocG9zWzBdLCBwb3NbMV0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudU1vdmVBbGwub25jbGljayA9IChldmVudDpNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBsaXN0ID0gcGNiLmdldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgICAgIGxldCBwemVybyA9IHBjYi5nZXRTZWxlY3RlZFplcm8oKTtcclxuICAgICAgICAgICAgZGV2aWNlLm1vdmVUb0FsbChwbGlzdCwgcHplcm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51QmxvYi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRldmljZS5ibG9iKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib2R5Lm9uZHJvcCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgICAgICAgICAgIGlmIChldi5kYXRhVHJhbnNmZXIgJiYgZXYuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxyXG4gICAgICAgICAgICAgICAgWy4uLmV2LmRhdGFUcmFuc2Zlci5pdGVtc10uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGRyb3BwZWQgaXRlbXMgYXJlbid0IGZpbGVzLCByZWplY3QgdGhlbVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmtpbmQgPT09ICdmaWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDigKYgaXRlbVske2l9XS5uYW1lID0gJHtmaWxlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzR2VyYmVyRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIERhdGFUcmFuc2ZlciBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXHJcbiAgICAgICAgICAgICAgICBbLi4uZXYuZGF0YVRyYW5zZmVyLmZpbGVzXS5mb3JFYWNoKChmaWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKApiBmaWxlWyR7aX1dLm5hbWUgPSAke2ZpbGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0dlcmJlckZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keS5vbmRyYWdvdmVyID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWxlKHMpIGluIGRyb3Agem9uZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIChQcmV2ZW50IGZpbGUgZnJvbSBiZWluZyBvcGVuZWQpXHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMub25jb250ZXh0bWVudSA9IChldikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25jb250ZXh0bWVudScsZXYpO1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LnN0eWxlLmxlZnQgPSBgJHtldi5wYWdlWH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5zdHlsZS50b3AgPSBgJHtldi5wYWdlWX1weGA7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtaGlkZScsICd3My1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FudmFzLm9ubW91c2V1cCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICBwY2IgPSBuZXcgUENCKCk7XHJcbiAgICAgICAgICAgIHBjYi5zZXRDYW52YXMoY3R4LCBjYW52YXMpO1xyXG5cclxuICAgICAgICAgICAgbW91c2UgPSBuZXcgTW91c2UoY3R4LCBjYW52YXMpO1xyXG4gICAgICAgICAgICBtb3VzZS50cmFjaygpO1xyXG4gICAgICAgICAgICBncmlkID0gbmV3IEdyaWQoKTtcclxuICAgICAgICAgICAgZ3JpZC5zdGVwID0gMjtcclxuICAgICAgICAgICAgZ3JpZC5saW5lV2lkdGggPSAwLjAzO1xyXG4gICAgICAgICAgICBncmlkLmJvbGRXaWR0aCA9IDAuMDU7XHJcbiAgICAgICAgICAgIGdyaWQuY3JlYXRlTGluZXMoY2FudmFzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsb2JhbFRoaXMucmVzaXplKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ21pc3NpbmcgaHRtbCBlbGVtZW50cyAhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lc3NhZ2UodGV4dDogc3RyaW5nKSB7XHJcbiAgICBpZihtZXNzYWdlQ2xlYXJUaW1lb3V0KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChtZXNzYWdlQ2xlYXJUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIGlmKG1lc3NhZ2VFbGVtKSB7XHJcbiAgICAgICAgbWVzc2FnZUVsZW0uaW5uZXJIVE1MID0gYCR7dGV4dH1gO1xyXG4gICAgICAgIG1lc3NhZ2VDbGVhclRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChtZXNzYWdlQ2xlYXIsIDEwMDAwKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtZXNzYWdlQ2xlYXIoKSB7XHJcbiAgICBtZXNzYWdlQ2xlYXJUaW1lb3V0ID0gdW5kZWZpbmVkO1xyXG4gICAgaWYobWVzc2FnZUVsZW0pIHtcclxuICAgICAgICBtZXNzYWdlRWxlbS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgaWYgKGNhbnZhcyAmJiBjdHgpIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcblxyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIHBjYiA/IHBjYi56b29tIDogMSwgMCxcclxuICAgICAgICAgICAgMCwgcGNiID8gcGNiLnpvb20gOiAxLFxyXG4gICAgICAgICAgICAwLCAwKTtcclxuXHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIC8vIGdyaWQuZHJhdyhjdHgsIGNhbnZhcyk7XHJcbiAgICAgICAgLy8gZ3JpZC5zdGVwID0gcGNiPzEwLjAvcGNiLnpvb206MTAuMDtcclxuICAgICAgICAvLyBncmlkLmNyZWF0ZUxpbmVzKGNhbnZhcyk7XHJcbiAgICAgICAgZ3JpZC5saW5lcy5mb3JFYWNoKGxpbmUgPT4gbGluZS5kcmF3KGN0eCkpXHJcbiAgICAgICAgbW91c2UuZHJhdygpO1xyXG5cclxuXHJcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybShcclxuICAgICAgICAgICAgMSwgMCxcclxuICAgICAgICAgICAgMCwgLTEsXHJcbiAgICAgICAgICAgIDAsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBjdHguc2NhbGUoMSwtMSk7IC8vIGZsaXAgZGlzcGxheSB5XHJcblxyXG4gICAgICAgIGlmIChwY2IpIHtcclxuICAgICAgICAgICAgcGNiLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGU6IEZpbGUpIHtcclxuICAgIGlmIChwYWRzRmllbGQgJiYgY29vcmRzRmllbGQgJiYgY3R4ICYmIGNhbnZhcyAmJiBwcm9ncmVzcyAmJiBwcm9ncmVzc2JhciAmJiBwcm9ncmVzc0NhbmNlbCAmJiBkcm9wWm9uZSkgeyAvLyBtYWtlcyB0eXBlc2NyaXB0IGhhcHB5Li4uXHJcblxyXG4gICAgICAgIHBjYiA9IG5ldyBQQ0IoKTtcclxuICAgICAgICBwY2Iuc2V0Q2FudmFzKGN0eCwgY2FudmFzKTtcclxuICAgICAgICBsZXQgcGFyc2VyID0gbmV3IFBhcnNlckdlcmJlcihwY2IpO1xyXG5cclxuICAgICAgICBwYWRzRmllbGQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29vcmRzRmllbGQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZHJvcFpvbmUuaW5uZXJUZXh0ID0gZmlsZS5uYW1lO1xyXG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBwYXJzZXIucGFkc0ZpZWxkID0gcGFkc0ZpZWxkO1xyXG4gICAgICAgIHBhcnNlci5jb29yZHNGaWVsZCA9IGNvb3Jkc0ZpZWxkO1xyXG4gICAgICAgIHByb2dyZXNzQ2FuY2VsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnNlci5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VyLnByb2Nlc3NDQiA9ICh2YWx1ZTpudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc2Jhci5zdHlsZS53aWR0aCA9IGAke3ZhbHVlfSVgO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Byb2dyZXNzOicsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBwYXJzZXIucGFyc2VGaWxlKGZpbGUpO1xyXG5cclxuICAgICAgICBwY2Iuem9vbVRvRml0KFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdKTtcclxuXHJcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmdsb2JhbFRoaXMuYWNjb3JkaW9uVG9nZ2xlciA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJ3My1zaG93XCIpID09IC0xICYmIGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJ3My1oaWRlXCIpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lICs9IFwiIHczLXNob3dcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJ3My1zaG93XCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZShcInczLXNob3dcIiwgXCJ3My1oaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZShcInczLWhpZGVcIiwgXCJ3My1zaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdhY2NvcmRpb25Ub2dnbGVyIG5vIGVsZW0gd2l0aCBpZDonLCBpZCk7XHJcbiAgICB9XHJcbiAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG59XHJcblxyXG5nbG9iYWxUaGlzLm9wZW5TaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgaWYgKG1haW4gJiYgZGVidWcgJiYgb3BlblNpZGViYXJCdXR0b24pIHtcclxuICAgICAgICBtYWluLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIzNTBweFwiO1xyXG4gICAgICAgIGRlYnVnLnN0eWxlLndpZHRoID0gXCIzNTBweFwiO1xyXG4gICAgICAgIGRlYnVnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgb3BlblNpZGViYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuZ2xvYmFsVGhpcy5jbG9zZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobWFpbiAmJiBkZWJ1ZyAmJiBvcGVuU2lkZWJhckJ1dHRvbikge1xyXG4gICAgICAgIG1haW4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgIGRlYnVnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBvcGVuU2lkZWJhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH1cclxufVxyXG5cclxuZ2xvYmFsVGhpcy56b29tVG9GaXQgPSAoKSA9PiB7XHJcbiAgICBpZihwY2IgJiYgY2FudmFzKSB7XHJcbiAgICAgICAgcGNiLnpvb21Ub0ZpdChbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMucm90YXRlUmlnaHQgPSAoKSA9PiB7XHJcbiAgICBpZihwY2IgJiYgY2FudmFzKSB7XHJcbiAgICAgICAgLy8gcGNiLnpvb21Ub0ZpdChbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdlKCdtw7xzc3RlIG1hIGVpbmVyIGltcGxlbWVudGllcmVuLCBuZScpO1xyXG59XHJcblxyXG5nbG9iYWxUaGlzLnJlc2l6ZSA9ICgpID0+IHtcclxuICAgIGlmIChjYW52YXMgJiYgaGVhZGVyICYmIGZvb3RlciAmJiBkZWJ1ZyAmJiBjb29yZHMpIHtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodCAtIGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICAgIG1vdXNlLmRyYXcoKTtcclxuICAgICAgICBncmlkLmRyYXcoY3R4LCBjYW52YXMpO1xyXG5cclxuICAgICAgICAvLyBoZWlnaHQgb2YgZGVidWcgaXMgaW5uZXJIZWlnaHQgLSBtYXJnaW4gdG9wL2JvdHRvbSBtb3JlIG9yIGxlc3MgLSBmb290ZXIuaGVpZ2h0XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZTogbWFyZ2luJywgZGVidWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcclxuICAgICAgICBsZXQgZG1heGhlaWdodCA9IGlubmVySGVpZ2h0IC0gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDsgLy8gY2FudmFzLmhlaWdodCArIGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSAxNjtcclxuICAgICAgICAvLyBkZWJ1Zy5zdHlsZS5oZWlnaHQgPSBgJHtkaGVpZ2h0fXB4YDsgLy8gMTYgaXMgbWFyZ2luVG9wXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZTogaW5uZXIgaGVpZ2h0JywgaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IGRlYnVnIGhlaWdodCcsIGRoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBoZWlnaHQgb2YgYWxsIG90aGVyIGVsZW1lbnRzIGluIGRlYnVnXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZGVidWcuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGVsZW06IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmNoaWxkO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgcmVzaXplOiAgICR7Y2hpbGQuaWR9ICR7ZWxlbS5jbGllbnRIZWlnaHR9ICR7ZWxlbS5jbGFzc05hbWV9YCk7XHJcbiAgICAgICAgICAgIGlmKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoJ3czLWhpZGUnKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBoZWlnaHQgKz0gZWxlbS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBkZWJ1ZyBjb250ZW50IGhlaWdodCcsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHNvIGZhciBzbyBnb29kXHJcblxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBpcyBzaG93biwgc2V0IGRlYnVnIHNpemUgdG8gbWF4XHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGlzIHNob3duLCBnaXZlIGl0IGFsbCB0aGUgcmVzdCBvZiB0aGUgc3BhY2VcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplIGNvb3JkcyAnLCBjb29yZHMuY2xhc3NOYW1lLmluZGV4T2YoJ3czLWhpZGUnKSk7XHJcbiAgICAgICAgaWYoY29vcmRzLmNsYXNzTmFtZS5pbmRleE9mKCd3My1oaWRlJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSBjb29yZHMgaXMgTk9UIHZpc2libGUnKTtcclxuICAgICAgICAgICAgZGVidWcuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0KzE2fXB4YDtcclxuICAgICAgICAgICAgY29vcmRzLnN0eWxlLmhlaWdodCA9IGAkezE2fXB4YDsgLy8gZWdhbCA/XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSBjb29yZHMgaXMgdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gY29vcmRzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDsgLy8gZG8gbm90IGNvdW50IGNvb3JkcyB0byBoaWdodFxyXG4gICAgICAgICAgICBkZWJ1Zy5zdHlsZS5oZWlnaHQgPSBgJHtkbWF4aGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29vcmRzLnN0eWxlLmhlaWdodCA9IGAke2RtYXhoZWlnaHQgLSBoZWlnaHQgLSAxNn1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKHZhbCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYHJlc2l6ZTogJHt2YWx9YCk7XHJcbiAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG59KVxyXG4iLCIoZnVuY3Rpb24gKCkge3ZhciBhPXt9O2Z1bmN0aW9uIGcodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGModCxlKXtmb3IodmFyIG89MDtvPGUubGVuZ3RoO28rKyl7dmFyIHM9ZVtvXTtzLmVudW1lcmFibGU9cy5lbnVtZXJhYmxlfHwhMSxzLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBzJiYocy53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscy5rZXkscyl9fWZ1bmN0aW9uIGgodCxlLG8pe3JldHVybiBlJiZjKHQucHJvdG90eXBlLGUpLG8mJmModCxvKSx0fXZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG8pe3ZhciBzPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpcImdyYXlcIixpPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpcIjE2cHggTW9ub3NwYWNlXCIscj1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCxuPWFyZ3VtZW50cy5sZW5ndGg+NSYmdm9pZCAwIT09YXJndW1lbnRzWzVdP2FyZ3VtZW50c1s1XTowO2codGhpcyx0KSx0aGlzLng9cix0aGlzLnk9bix0aGlzLmN0eD1lLHRoaXMuY2FudmFzPW8sdGhpcy5jb2xvcj1zLHRoaXMuZm9udD1pLHRoaXMuc2V0UG9zPXRoaXMuc2V0UG9zLmJpbmQodGhpcyl9cmV0dXJuIGgodCxbe2tleTpcInRyYWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdKXx8YXJndW1lbnRzWzBdLGU9dGhpcy5jYW52YXM7cmV0dXJuIHQ/ZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5zZXRQb3MpOmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuc2V0UG9zKSx0aGlzfX0se2tleTpcInNldFBvc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybiB0aGlzLng9TWF0aC5mbG9vcih0LmNsaWVudFgtZS5sZWZ0KSx0aGlzLnk9TWF0aC5mbG9vcih0LmNsaWVudFktZS50b3ApLHRoaXN9fSx7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy54LGU9dGhpcy55LG89dGhpcy5jYW52YXMscz10aGlzLmN0eCxpPXRoaXMuZm9udCxyPXRoaXMuY29sb3Isbj1cIlg6IFwiLmNvbmNhdCh0LFwiLCBZOiBcIikuY29uY2F0KGUpO3Muc2F2ZSgpLHMuZmlsbFN0eWxlPXIscy5mb250PWk7dmFyIGE9dDxvLndpZHRoLzI/MjA6LXMubWVhc3VyZVRleHQobikud2lkdGgtMjAsdj1lPG8uaGVpZ2h0LzI/MjU6LTE4O3JldHVybiBzLmZpbGxUZXh0KG4sdGhpcy54K2EsdGhpcy55K3YpLHMucmVzdG9yZSgpLHRoaXN9fV0pLHR9KCk7ZnVuY3Rpb24gZCh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gZih0LGUpe2Zvcih2YXIgaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgcz1lW2ldO3MuZW51bWVyYWJsZT1zLmVudW1lcmFibGV8fCExLHMuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHMmJihzLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLmtleSxzKX19ZnVuY3Rpb24gZSh0LGUsaSl7cmV0dXJuIGUmJmYodC5wcm90b3R5cGUsZSksaSYmZih0LGkpLHR9dmFyIGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsaSxzLHIsbCxuKXtkKHRoaXMsdCksdGhpcy5jb2xvcj1lLHRoaXMubGluZVdpZHRoPWksdGhpcy5zdGFydFg9cyx0aGlzLnN0YXJ0WT1yLHRoaXMuZW5kWD1sLHRoaXMuZW5kWT1ufXJldHVybiBlKHQsW3trZXk6XCJkcmF3XCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb2xvcixpPXRoaXMubGluZVdpZHRoLHM9dGhpcy5zdGFydFgscj10aGlzLnN0YXJ0WSxsPXRoaXMuZW5kWCxuPXRoaXMuZW5kWTt0LnNhdmUoKSx0LmJlZ2luUGF0aCgpLHQuc3Ryb2tlU3R5bGU9ZSx0LmxpbmVXaWR0aD1pLHQubW92ZVRvKHMsciksdC5saW5lVG8obCxuKSx0LnN0cm9rZSgpLHQucmVzdG9yZSgpfX1dKSx0fSgpLGo9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZ3JheVwiLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOi4zLHM9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjEwLHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOjUsbD1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06XCJEYXJrR3JheVwiLG49YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOi41LG89YXJndW1lbnRzLmxlbmd0aD42JiZ2b2lkIDAhPT1hcmd1bWVudHNbNl0/YXJndW1lbnRzWzZdOlwiMTZweCBNb25vc3BhY2VcIjtkKHRoaXMsdCksdGhpcy5jb2xvcj1lLHRoaXMubGluZVdpZHRoPWksdGhpcy5zdGVwPXMsdGhpcy5ib2xkTnRoPXIsdGhpcy5ib2xkQ29sb3I9bCx0aGlzLmJvbGRXaWR0aD1uLHRoaXMuZm9udD1vLHRoaXMubGluZXM9bnVsbH1yZXR1cm4gZSh0LFt7a2V5OlwiY3JlYXRlTGluZXNcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy5jb2xvcixpPXRoaXMubGluZVdpZHRoLHM9dGhpcy5zdGVwLHI9dGhpcy5ib2xkTnRoLGw9dGhpcy5ib2xkQ29sb3Isbj10aGlzLmJvbGRXaWR0aCxvPVtdLGE9cipzLGg9MDtoPHQud2lkdGg7aCs9cyl7dmFyIHY9aCVhPT0wO28ucHVzaCh2P25ldyBiKGwsbixoLDAsaCx0LmhlaWdodCk6bmV3IGIoZSxpLGgsMCxoLHQuaGVpZ2h0KSl9Zm9yKHZhciAkPTA7JDx0LmhlaWdodDskKz1zKXt2YXIgZD0kJWE9PTA7by5wdXNoKGQ/bmV3IGIobCxuLDAsJCx0LndpZHRoLCQpOm5ldyBiKGUsaSwwLCQsdC53aWR0aCwkKSl9dGhpcy5saW5lcz1vfX0se2tleTpcImRyYXdUZXh0XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLnN0ZXAscz10aGlzLmJvbGROdGgscj10aGlzLmJvbGRDb2xvcixsPXRoaXMuZm9udDt0LnNhdmUoKSx0LmZvbnQ9bCx0LmZpbGxTdHlsZT1yLHQuZmlsbFRleHQoXCIwXCIsMSwxNSk7Zm9yKHZhciBuPWkqcztuPGUud2lkdGg7bis9aSpzKXQuZmlsbFRleHQobixuLDE1KTtmb3IodmFyIG89aSpzO288ZS5oZWlnaHQ7bys9aSpzKXQuZmlsbFRleHQobywwLG8rMTUpO3QucmVzdG9yZSgpfX0se2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3RoaXMubGluZXN8fHRoaXMuY3JlYXRlTGluZXMoZSksdGhpcy5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmRyYXcodCl9KSx0aGlzLmRyYXdUZXh0KHQsZSl9fV0pLHR9KCk7YS5Nb3VzZT1pLGEuR3JpZD1qO2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWF9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gYX0pfX0pKCk7IiwiLyoqXHJcbiAqIE1hcmxpbjogRGV2aWNlIHNwZWNpZmljIGltcGxlbWVudGF0aW9uLlxyXG4qL1xyXG5cclxuaW1wb3J0IHtrZFRyZWV9IGZyb20gJ2tkLXRyZWUtamF2YXNjcmlwdCc7IC8vIG5vZGUgbW9kdWxlXHJcbi8vIGltcG9ydCB7IGtkVHJlZSB9IGZyb20gJy4va2RUcmVlJztcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSBcIi4vZGV2aWNlXCI7XHJcbmltcG9ydCB7IFBDQiwgUGFkIH0gZnJvbSBcIi4vcGNiXCI7XHJcblxyXG5lbnVtIFN0YXR1cyB7XHJcbiAgICBVbmRlZmluZWQgPSAxLFxyXG4gICAgUmVhZHksXHJcbiAgICBCdXN5LFxyXG4gICAgTkNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmxpbiBleHRlbmRzIERldmljZSB7XHJcbiAgICBtYXJsaW5EaXY6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdlN0YXR1czogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbWFybGluRGl2UG9zaXRpb246IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdkNvbW1hbmRzOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgemVybzogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWFybGluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJsaW5cIik7XHJcbiAgICAgICAgdGhpcy5pbml0SHRtbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgU2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIFplcm8uIEFsbCBmdXJ0aGVyIGNvbW1hbmRzIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcyBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8ocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnplcm8gPSBwb2ludDtcclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHOTIgWDAgWTAgWjAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5Qb3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBNb3ZlIHRvIHBvc2l0aW9uLiBJZiBvbmUgY29vcmRpbmF0ZSBpcyB1bmRlZmluZWQsIGl0J3MgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciB8IHVuZGVmaW5lZCwgeTogbnVtYmVyIHwgdW5kZWZpbmVkLCB6OiBudW1iZXIgfCB1bmRlZmluZWQsIGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICBpZiAoeCAhPSB1bmRlZmluZWQpIGNtZCArPSBgWCR7eCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICBpZiAoeSAhPSB1bmRlZmluZWQpIGNtZCArPSBgWSR7eSAtIHRoaXMuemVyb1sxXX0gYDtcclxuICAgICAgICBpZiAoeiAhPSB1bmRlZmluZWQpIGNtZCArPSBgWiR7en0gYDtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtb3ZlVG9BbGwocGxpc3Q6IFBhZFtdLCBzdGFydDpbbnVtYmVyLG51bWJlcl0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHBsaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxpc3QpO1xyXG5cclxuICAgICAgICBjb25zdCB0cmVlID0gbmV3IGtkVHJlZShwbGlzdCwgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7XHJcbiAgICAgICAgLy8gY29uc3QgdHJlZSA9IG5ldyBrZFRyZWUoUENCLCBwbGlzdCwgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7XHJcblxyXG4gICAgICAgIGxldCBzdGFydHBhZCA9IG5ldyBQYWQoJycsIHN0YXJ0WzBdLCBzdGFydFsxXSk7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IHRyZWUubmVhcmVzdChzdGFydHBhZCwgMSk7XHJcbiAgICAgICAgbGV0IGZvdW5kcGFkID0gc2VhcmNoWzBdWzBdO1xyXG5cclxuICAgICAgICBsZXQgZm91bmRwYWRzOlBhZFtdID0gW107IC8vIGp1c3QgZm9yIGxvZ1xyXG5cclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlZXNob3QgPSAnJztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cmVlIGR1bXA6Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmVlLnRvSlNPTigpLCB1bmRlZmluZWQsIDQpKTsgLy8gZHVtcCB0cmVlXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSB0cmVlLm5lYXJlc3QoZm91bmRwYWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgc2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRwYWQgPSBzZWFyY2hbMF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRwYWRzLnB1c2goZm91bmRwYWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY21kID0gJ0cwICc7XHJcbiAgICAgICAgICAgICAgICAgICAgY21kICs9IGBYJHtmb3VuZHBhZC5wb3NYIC0gdGhpcy56ZXJvWzBdfSBgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNtZCArPSBgWSR7Zm91bmRwYWQucG9zWSAtIHRoaXMuemVyb1sxXX0gYDtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICh3aGF0KSB7IH0gLy8gaWdub3JlIGRpc2Nvbm5lY3RlZCBmb3IgZGVidWdnaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vLyByZW1vdmUgc2VlbXMgdG8gYmUgYnVnaSA6KCgoXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9rID0gdHJlZS5yZW1vdmUoZm91bmRwYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKG9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGBNYXJsaW46bW92ZVRvQWxsIHJlbW92ZWQgcGFkYCwgZm91bmRwYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUud2FybihgTWFybGluOm1vdmVUb0FsbCBOT1QgcmVtb3ZlZCBwYWQsIHRoYXMgYmFkIDooYCwgZm91bmRwYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0cmVlc2hvdCA9IEpTT04uc3RyaW5naWZ5KHRyZWUudG9KU09OKCksIHVuZGVmaW5lZCwgNCk7IC8vIGtlZXAgdHJlZSBmb3IgZGVidWcgIVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRyZWVzaG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGZwYWQgb2YgZm91bmRwYWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1hcmxpbjptb3ZlVG9BbGwgcGFkOiR7ZnBhZC5wb3NYfTtcXHQke2ZwYWQucG9zWX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHdoYXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHNlcmlhbFdyaXRlV2FpdCBmYWlscywgZG8gc29tZXRoaW5nID9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1hcmxpbjptb3ZlVG9BbGw6IGZhaWxlZFwiLCB3aGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBibG9iKCkge1xyXG4gICAgICAgIHRoaXMub25CdG5BYnMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ004MycpLnRoZW4oKCkgPT4geyAvLyBleHRydWRlciByZWxhdGl2XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRTEwJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMCcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFozJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxDb25uZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmxpbjogb25TZXJpYWxDb25uZWN0ZWQnKTtcclxuICAgICAgICAvLyByZWFkIG92ZXIgZmlyc3QgbWVzc2FnZXNcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgd2hpbGUodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlBvc2l0aW9uKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbi5pbm5lckhUTUwgKz0gYCR7dGhpcy5pbnB1dFF1ZXVlLnBvcCgpfWA7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuUmVhZHkpXHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2U3RhdHVzICYmIHRoaXMubWFybGluRGl2Q29tbWFuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUgPSB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzLmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIC8vIHdhaXQgM3NlYywgcnVuIGNvbW1hbmRzICdjb2xkIGV4dHJ1ZGUnLCdyZWxhdGl2ZSBwb3NpdGlvbmluZycsJ3JlcG9ydCBwb3NpdGlvbidcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ0bkNvbGQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5SZWwoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46IG9uU2VyaWFsQ29ubmVjdGVkIGluaXQgc2VxdWVuY2UgZmluaXNoZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbERpc2Nvbm5lY3RlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOiBvblNlcmlhbERpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlN0YXR1cyAmJiB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5OQyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2Q29tbWFuZHMuY2xhc3NOYW1lID0gdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5oZXJpdGVkIGZyb20gRGV2aWNlLCBhZGRzIFN0YXR1cyBtZXNzYWdlIHVwZGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB0aW1lb3V0XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsV3JpdGVXYWl0KHZhbHVlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5CdXN5KTtcclxuICAgICAgICAgICAgc3VwZXIuc2VyaWFsV3JpdGVXYWl0KHZhbHVlLCB0aW1lb3V0KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdGF0dXMoc3RhdHVzOiBTdGF0dXMpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGB1bmtub3duIHN0YXR1cyAke3N0YXR1c31gO1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlJlYWR5OlxyXG4gICAgICAgICAgICAgICAgaHRtbCA9ICdTdGF0dXM6IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1Z1wiPjwvaT4gcmVhZHknOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuQnVzeTpcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnU3RhdHVzOiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdWctY2lyY2xlLWJvbHRcIj48L2k+IGJ1c3knOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuTkM6XHJcbiAgICAgICAgICAgICAgICBodG1sID0gJ1N0YXR1czogPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVnLWNpcmNsZS14bWFya1wiPjwvaT4gbm90IGNvbm5lY3RlZCc7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZTdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZTdGF0dXMuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5Ib21lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbilcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLy8vIHRpbWVvdXQgdG9vIHNtYWxsIGZvciB0aGlzIGNvbW1hbmQsIHNlZSB3aGF0IGhhcHBlbnNcclxuICAgICAgICAvLyB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JywgMTAwKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAvLyAgICAgLy8gdHJ5IGFnYWluIChkZWZhdWx0IHRpbWVvdXQgaXMgMTBzZWMpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMjgnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkJ0blBvcygpO1xyXG4gICAgICAgIC8vICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7IGNvbnNvbGUud2FybihyZWFzb24pIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuUG9zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTExNCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWVyIGtvbW10IGVpbmUgemVpbGUgbWl0IHphaGxlbiB1bmQgZWluZSBtaXQgb2tcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkJ0blBvcycsdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFybGluRGl2UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuQWJzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzkwJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQnRuUmVsKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzkxJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQnRuQ29sZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ00zMDIgUzAnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuWFAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFgxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5YTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWC0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5ZUCgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bllNKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBZLTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0blpQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWk0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFotMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuRVAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIEUxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5FTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRS0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBzb21lIGJ1dHRvbnMgZm9yIE1hcmxpbiBzcGVjaWZpYyBhY3Rpb25zLi4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdEh0bWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInczLWJvcmRlciB3My1ib3JkZXItZGFyay1ncmV5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXJsaW5TdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1hcmxpblBvc2l0aW9uXCIgY2xhc3M9XCJ3My10aW55XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXJsaW5Db21tYW5kc1wiIGNsYXNzPVwidzMtdGlueSB3My1oaWRlXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluSG9tZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5ob21lPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5Qb3NcIiAgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnBvcz88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblJlbFwiICBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+cmVsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5BYnNcIiAgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmFiczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluQ29sZFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5jb2xkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5YUFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj54KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWE1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eC08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbllQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnkrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5ZTVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj55LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWlBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eis8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblpNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnotPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5FUFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5lKzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluRU1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+ZS08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblN0YXR1c1wiKTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluUG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2Q29tbWFuZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkNvbW1hbmRzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuTkMpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5Ib21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Ib21lXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuSG9tZSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuSG9tZS5vbmNsaWNrID0gdGhpcy5vbkJ0bkhvbWUuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5Qb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblBvc1wiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blBvcykge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuUG9zLm9uY2xpY2sgPSB0aGlzLm9uQnRuUG9zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuUmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5SZWxcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5SZWwpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blJlbC5vbmNsaWNrID0gdGhpcy5vbkJ0blJlbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluQWJzXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuQWJzKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5BYnMub25jbGljayA9IHRoaXMub25CdG5BYnMuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5Db2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Db2xkXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuQ29sZCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuQ29sZC5vbmNsaWNrID0gdGhpcy5vbkJ0bkNvbGQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblhQXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWFApIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blhQLm9uY2xpY2sgPSB0aGlzLm9uQnRuWFAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5YTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWE1cIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5YTSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWE0ub25jbGljayA9IHRoaXMub25CdG5YTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bllQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5ZUFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bllQKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5ZUC5vbmNsaWNrID0gdGhpcy5vbkJ0bllQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWU0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbllNXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWU0pIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bllNLm9uY2xpY2sgPSB0aGlzLm9uQnRuWU0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5aUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWlBcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5aUCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWlAub25jbGljayA9IHRoaXMub25CdG5aUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blpNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5aTVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blpNKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5aTS5vbmNsaWNrID0gdGhpcy5vbkJ0blpNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuRVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkVQXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuRVApIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkVQLm9uY2xpY2sgPSB0aGlzLm9uQnRuRVAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5FTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluRU1cIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5FTSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuRU0ub25jbGljayA9IHRoaXMub25CdG5FTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuIiwiLyoqXG4gKiBrLWQgVHJlZSBKYXZhU2NyaXB0IC0gViAxLjAxXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3ViaWxhYnMva2QtdHJlZS1qYXZhc2NyaXB0XG4gKlxuICogQGF1dGhvciBNaXJjZWEgUHJpY29wIDxwcmljb3BAdWJpbGFicy5uZXQ+LCAyMDEyXG4gKiBAYXV0aG9yIE1hcnRpbiBLbGVwcGUgPGtsZXBwZUB1YmlsYWJzLm5ldD4sIDIwMTJcbiAqIEBhdXRob3IgVWJpbGFicyBodHRwOi8vdWJpbGFicy5uZXQsIDIwMTJcbiAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIDxodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocD5cbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgZmFjdG9yeShleHBvcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KHJvb3QpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIGZ1bmN0aW9uIE5vZGUob2JqLCBkaW1lbnNpb24sIHBhcmVudCkge1xuICAgIHRoaXMub2JqID0gb2JqO1xuICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb247XG4gIH1cblxuICBmdW5jdGlvbiBrZFRyZWUocG9pbnRzLCBtZXRyaWMsIGRpbWVuc2lvbnMpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShwb2ludHMsIGRlcHRoLCBwYXJlbnQpIHtcbiAgICAgIHZhciBkaW0gPSBkZXB0aCAlIGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICBtZWRpYW4sXG4gICAgICAgIG5vZGU7XG5cbiAgICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKHBvaW50c1swXSwgZGltLCBwYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVtkaW1lbnNpb25zW2RpbV1dIC0gYltkaW1lbnNpb25zW2RpbV1dO1xuICAgICAgfSk7XG5cbiAgICAgIG1lZGlhbiA9IE1hdGguZmxvb3IocG9pbnRzLmxlbmd0aCAvIDIpO1xuXG4gICAgICAvLyBhdm9pZCBoYXZpbmcgc2FtZSBjb29yZHMgb24gbGVmdCBhbmQgcmlnaHQgdHJlZSAhISFcbiAgICAgIHdoaWxlIChtZWRpYW4gPiAwKSB7XG4gICAgICAgIGxldCBuZXdtZWRpYW4gPSBtZWRpYW4gLSAxO1xuICAgICAgICBpZiAocG9pbnRzW21lZGlhbl1bZGltZW5zaW9uc1tkaW1dXSA9PT0gcG9pbnRzW25ld21lZGlhbl1bZGltZW5zaW9uc1tkaW1dXSkge1xuICAgICAgICAgIG1lZGlhbiAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBuZXcgTm9kZShwb2ludHNbbWVkaWFuXSwgZGltLCBwYXJlbnQpO1xuICAgICAgbm9kZS5sZWZ0ID0gYnVpbGRUcmVlKHBvaW50cy5zbGljZSgwLCBtZWRpYW4pLCBkZXB0aCArIDEsIG5vZGUpO1xuICAgICAgbm9kZS5yaWdodCA9IGJ1aWxkVHJlZShwb2ludHMuc2xpY2UobWVkaWFuICsgMSksIGRlcHRoICsgMSwgbm9kZSk7XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8vIFJlbG9hZHMgYSBzZXJpYWxpZWQgdHJlZVxuICAgIGZ1bmN0aW9uIGxvYWRUcmVlKGRhdGEpIHtcbiAgICAgIC8vIEp1c3QgbmVlZCB0byByZXN0b3JlIHRoZSBgcGFyZW50YCBwYXJhbWV0ZXJcbiAgICAgIHNlbGYucm9vdCA9IGRhdGE7XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQYXJlbnQocm9vdCkge1xuICAgICAgICBpZiAocm9vdC5sZWZ0KSB7XG4gICAgICAgICAgcm9vdC5sZWZ0LnBhcmVudCA9IHJvb3Q7XG4gICAgICAgICAgcmVzdG9yZVBhcmVudChyb290LmxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3QucmlnaHQpIHtcbiAgICAgICAgICByb290LnJpZ2h0LnBhcmVudCA9IHJvb3Q7XG4gICAgICAgICAgcmVzdG9yZVBhcmVudChyb290LnJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN0b3JlUGFyZW50KHNlbGYucm9vdCk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS53YXJuKCd1c2luZyBtYXJpb3NnaXQ6a2QtdHJlZSB2MS4wLjQnKTtcbiAgICAvLyBJZiBwb2ludHMgaXMgbm90IGFuIGFycmF5LCBhc3N1bWUgd2UncmUgbG9hZGluZyBhIHByZS1idWlsdCB0cmVlXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBvaW50cykpIGxvYWRUcmVlKHBvaW50cywgbWV0cmljLCBkaW1lbnNpb25zKTtcbiAgICBlbHNlIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShwb2ludHMsIDAsIG51bGwpO1xuXG4gICAgLy8gQ29udmVydCB0byBhIEpTT04gc2VyaWFsaXphYmxlIHN0cnVjdHVyZTsgdGhpcyBqdXN0IHJlcXVpcmVzIHJlbW92aW5nXG4gICAgLy8gdGhlIGBwYXJlbnRgIHByb3BlcnR5XG4gICAgdGhpcy50b0pTT04gPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBpZiAoIXNyYykgc3JjID0gdGhpcy5yb290O1xuICAgICAgdmFyIGRlc3QgPSBuZXcgTm9kZShzcmMub2JqLCBzcmMuZGltZW5zaW9uLCBudWxsKTtcbiAgICAgIGlmIChzcmMubGVmdCkgZGVzdC5sZWZ0ID0gc2VsZi50b0pTT04oc3JjLmxlZnQpO1xuICAgICAgaWYgKHNyYy5yaWdodCkgZGVzdC5yaWdodCA9IHNlbGYudG9KU09OKHNyYy5yaWdodCk7XG4gICAgICByZXR1cm4gZGVzdDtcbiAgICB9O1xuXG4gICAgLyoqIHJldHVybnMgYSBsaXN0IG9mIHBvaW50cyBpbiB0aGUgc3VidHJlZSwgZXhjbHVzaXZlIHRoZSBnaXZlbiBub2RlICEgKi9cbiAgICB0aGlzLnRvQXJyYXkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICBpZiAoc3JjID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBpZiAoc3JjLmxlZnQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3JjLmxlZnQub2JqKTtcbiAgICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgLi4udGhpcy50b0FycmF5KHNyYy5sZWZ0KV07XG4gICAgICB9XG4gICAgICBpZiAoc3JjLnJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNyYy5yaWdodC5vYmopO1xuICAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi50aGlzLnRvQXJyYXkoc3JjLnJpZ2h0KV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRoaXMuaW5zZXJ0ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICBmdW5jdGlvbiBpbm5lclNlYXJjaChub2RlLCBwYXJlbnQpIHtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl07XG4gICAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgbm9kZS5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgIHJldHVybiBpbm5lclNlYXJjaChub2RlLmxlZnQsIG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpbm5lclNlYXJjaChub2RlLnJpZ2h0LCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0UG9zaXRpb24gPSBpbm5lclNlYXJjaCh0aGlzLnJvb3QsIG51bGwpLFxuICAgICAgICBuZXdOb2RlLFxuICAgICAgICBkaW1lbnNpb247XG5cbiAgICAgIGlmIChpbnNlcnRQb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgTm9kZShwb2ludCwgMCwgbnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV3Tm9kZSA9IG5ldyBOb2RlKHBvaW50LCAoaW5zZXJ0UG9zaXRpb24uZGltZW5zaW9uICsgMSkgJSBkaW1lbnNpb25zLmxlbmd0aCwgaW5zZXJ0UG9zaXRpb24pO1xuICAgICAgZGltZW5zaW9uID0gZGltZW5zaW9uc1tpbnNlcnRQb3NpdGlvbi5kaW1lbnNpb25dO1xuXG4gICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IGluc2VydFBvc2l0aW9uLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgIGluc2VydFBvc2l0aW9uLmxlZnQgPSBuZXdOb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zZXJ0UG9zaXRpb24ucmlnaHQgPSBuZXdOb2RlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgdmFyIG5vZGU7XG5cbiAgICAgIGZ1bmN0aW9uIG5vZGVTZWFyY2gobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUub2JqID09PSBwb2ludCkge1xuICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbbm9kZS5kaW1lbnNpb25dO1xuXG4gICAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgbm9kZS5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgIHJldHVybiBub2RlU2VhcmNoKG5vZGUubGVmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVTZWFyY2gobm9kZS5yaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgICAgIHZhciBuZXh0Tm9kZSxcbiAgICAgICAgICBuZXh0T2JqLFxuICAgICAgICAgIHBEaW1lbnNpb247XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZE1pbihub2RlLCBkaW0pIHtcbiAgICAgICAgICB2YXIgZGltZW5zaW9uLFxuICAgICAgICAgICAgb3duLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgICAgbWluO1xuXG4gICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbZGltXTtcblxuICAgICAgICAgIGlmIChub2RlLmRpbWVuc2lvbiA9PT0gZGltKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmaW5kTWluKG5vZGUubGVmdCwgZGltKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG93biA9IG5vZGUub2JqW2RpbWVuc2lvbl07XG4gICAgICAgICAgbGVmdCA9IGZpbmRNaW4obm9kZS5sZWZ0LCBkaW0pO1xuICAgICAgICAgIHJpZ2h0ID0gZmluZE1pbihub2RlLnJpZ2h0LCBkaW0pO1xuICAgICAgICAgIG1pbiA9IG5vZGU7XG5cbiAgICAgICAgICBpZiAobGVmdCAhPT0gbnVsbCAmJiBsZWZ0Lm9ialtkaW1lbnNpb25dIDwgb3duKSB7XG4gICAgICAgICAgICBtaW4gPSBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmlnaHQgIT09IG51bGwgJiYgcmlnaHQub2JqW2RpbWVuc2lvbl0gPCBtaW4ub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgICAgIG1pbiA9IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZWxmLnJvb3QgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBEaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUucGFyZW50LmRpbWVuc2lvbl07XG5cbiAgICAgICAgICBpZiAobm9kZS5vYmpbcERpbWVuc2lvbl0gPCBub2RlLnBhcmVudC5vYmpbcERpbWVuc2lvbl0pIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50LmxlZnQgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudC5yaWdodCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSByaWdodCBzdWJ0cmVlIGlzIG5vdCBlbXB0eSwgc3dhcCB3aXRoIHRoZSBtaW5pbXVtIGVsZW1lbnQgb24gdGhlXG4gICAgICAgIC8vIG5vZGUncyBkaW1lbnNpb24uIElmIGl0IGlzIGVtcHR5LCB3ZSBzd2FwIHRoZSBsZWZ0IGFuZCByaWdodCBzdWJ0cmVlcyBhbmRcbiAgICAgICAgLy8gZG8gdGhlIHNhbWUuXG4gICAgICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgbmV4dE5vZGUgPSBmaW5kTWluKG5vZGUucmlnaHQsIG5vZGUuZGltZW5zaW9uKTtcbiAgICAgICAgICBuZXh0T2JqID0gbmV4dE5vZGUub2JqO1xuICAgICAgICAgIHJlbW92ZU5vZGUobmV4dE5vZGUpO1xuICAgICAgICAgIG5vZGUub2JqID0gbmV4dE9iajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IGZpbmRNaW4obm9kZS5sZWZ0LCBub2RlLmRpbWVuc2lvbik7XG4gICAgICAgICAgbmV4dE9iaiA9IG5leHROb2RlLm9iajtcbiAgICAgICAgICByZW1vdmVOb2RlKG5leHROb2RlKTtcbiAgICAgICAgICBub2RlLnJpZ2h0ID0gbm9kZS5sZWZ0O1xuICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7XG4gICAgICAgICAgbm9kZS5vYmogPSBuZXh0T2JqO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlU2VhcmNoKHNlbGYucm9vdCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybigna2R0cmVlOnJlbW92ZSBjb3VsZCBub3QgcmVtb3ZlIG5vZGUgISBpbnRlcm5hbCBlcnJvciAhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlTm9kZShub2RlKTsgLy8gYnVnZ2lcblxuICAgICAgLy8gd2lraXBlZGlhIHNheXM6IGp1c3QgcmVidWlsZCB0aGUgc3VidHJlZVxuICAgICAgY29uc3QgYWxsY2hpbGRzID0gdGhpcy50b0FycmF5KG5vZGUpO1xuICAgICAgbGV0IG5ld25vZGUgPSBidWlsZFRyZWUoYWxsY2hpbGRzLCBub2RlLmRpbWVuc2lvbiwgbm9kZS5wYXJlbnQpO1xuICAgICAgaWYgKG5vZGUucGFyZW50KSB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudC5sZWZ0ID09PSBub2RlKSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnQubGVmdCA9IG5ld25vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnQucmlnaHQgPT09IG5vZGUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudC5yaWdodCA9IG5ld25vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucm9vdCA9IG5ld25vZGU7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5uZWFyZXN0ID0gZnVuY3Rpb24gKHBvaW50LCBtYXhOb2RlcywgbWF4RGlzdGFuY2UpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIGJlc3ROb2RlcztcblxuICAgICAgYmVzdE5vZGVzID0gbmV3IEJpbmFyeUhlYXAoXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7IHJldHVybiAtZVsxXTsgfVxuICAgICAgKTtcblxuICAgICAgZnVuY3Rpb24gbmVhcmVzdFNlYXJjaChub2RlKSB7XG4gICAgICAgIHZhciBiZXN0Q2hpbGQsXG4gICAgICAgICAgZGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl0sXG4gICAgICAgICAgb3duRGlzdGFuY2UgPSBtZXRyaWMocG9pbnQsIG5vZGUub2JqKSxcbiAgICAgICAgICBsaW5lYXJQb2ludCA9IHt9LFxuICAgICAgICAgIGxpbmVhckRpc3RhbmNlLFxuICAgICAgICAgIG90aGVyQ2hpbGQsXG4gICAgICAgICAgaTtcblxuICAgICAgICBmdW5jdGlvbiBzYXZlTm9kZShub2RlLCBkaXN0YW5jZSkge1xuICAgICAgICAgIGJlc3ROb2Rlcy5wdXNoKFtub2RlLCBkaXN0YW5jZV0pO1xuICAgICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpID4gbWF4Tm9kZXMpIHtcbiAgICAgICAgICAgIGJlc3ROb2Rlcy5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChpID09PSBub2RlLmRpbWVuc2lvbikge1xuICAgICAgICAgICAgbGluZWFyUG9pbnRbZGltZW5zaW9uc1tpXV0gPSBwb2ludFtkaW1lbnNpb25zW2ldXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZWFyUG9pbnRbZGltZW5zaW9uc1tpXV0gPSBub2RlLm9ialtkaW1lbnNpb25zW2ldXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaW5lYXJEaXN0YW5jZSA9IG1ldHJpYyhsaW5lYXJQb2ludCwgbm9kZS5vYmopO1xuXG4gICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpIDwgbWF4Tm9kZXMgfHwgb3duRGlzdGFuY2UgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgICAgICBzYXZlTm9kZShub2RlLCBvd25EaXN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5sZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgIGJlc3RDaGlsZCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBub2RlLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlc3RDaGlsZCA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmVhcmVzdFNlYXJjaChiZXN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpIDwgbWF4Tm9kZXMgfHwgb3duRGlzdGFuY2UgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgICAgc2F2ZU5vZGUobm9kZSwgb3duRGlzdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPCBtYXhOb2RlcyB8fCBNYXRoLmFicyhsaW5lYXJEaXN0YW5jZSkgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgICAgaWYgKGJlc3RDaGlsZCA9PT0gbm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICBvdGhlckNoaWxkID0gbm9kZS5yaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3RoZXJDaGlsZCA9IG5vZGUubGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG90aGVyQ2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5lYXJlc3RTZWFyY2gob3RoZXJDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhEaXN0YW5jZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWF4Tm9kZXM7IGkgKz0gMSkge1xuICAgICAgICAgIGJlc3ROb2Rlcy5wdXNoKFtudWxsLCBtYXhEaXN0YW5jZV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnJvb3QpXG4gICAgICAgIG5lYXJlc3RTZWFyY2goc2VsZi5yb290KTtcblxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLm1pbihtYXhOb2RlcywgYmVzdE5vZGVzLmNvbnRlbnQubGVuZ3RoKTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChiZXN0Tm9kZXMuY29udGVudFtpXVswXSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFtiZXN0Tm9kZXMuY29udGVudFtpXVswXS5vYmosIGJlc3ROb2Rlcy5jb250ZW50W2ldWzFdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRoaXMuYmFsYW5jZUZhY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIGhlaWdodChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGhlaWdodChub2RlLmxlZnQpLCBoZWlnaHQobm9kZS5yaWdodCkpICsgMTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY291bnQobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudChub2RlLmxlZnQpICsgY291bnQobm9kZS5yaWdodCkgKyAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVpZ2h0KHNlbGYucm9vdCkgLyAoTWF0aC5sb2coY291bnQoc2VsZi5yb290KSkgLyBNYXRoLmxvZygyKSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIEJpbmFyeSBoZWFwIGltcGxlbWVudGF0aW9uIGZyb206XG4gIC8vIGh0dHA6Ly9lbG9xdWVudGphdmFzY3JpcHQubmV0L2FwcGVuZGl4Mi5odG1sXG5cbiAgZnVuY3Rpb24gQmluYXJ5SGVhcChzY29yZUZ1bmN0aW9uKSB7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5zY29yZUZ1bmN0aW9uID0gc2NvcmVGdW5jdGlvbjtcbiAgfVxuXG4gIEJpbmFyeUhlYXAucHJvdG90eXBlID0ge1xuICAgIHB1c2g6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAvLyBBZGQgdGhlIG5ldyBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgdGhpcy5jb250ZW50LnB1c2goZWxlbWVudCk7XG4gICAgICAvLyBBbGxvdyBpdCB0byBidWJibGUgdXAuXG4gICAgICB0aGlzLmJ1YmJsZVVwKHRoaXMuY29udGVudC5sZW5ndGggLSAxKTtcbiAgICB9LFxuXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgZmlyc3QgZWxlbWVudCBzbyB3ZSBjYW4gcmV0dXJuIGl0IGxhdGVyLlxuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuY29udGVudFswXTtcbiAgICAgIC8vIEdldCB0aGUgZWxlbWVudCBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgYW55IGVsZW1lbnRzIGxlZnQsIHB1dCB0aGUgZW5kIGVsZW1lbnQgYXQgdGhlXG4gICAgICAvLyBzdGFydCwgYW5kIGxldCBpdCBzaW5rIGRvd24uXG4gICAgICBpZiAodGhpcy5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jb250ZW50WzBdID0gZW5kO1xuICAgICAgICB0aGlzLnNpbmtEb3duKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgcGVlazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudFswXTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGxlbiA9IHRoaXMuY29udGVudC5sZW5ndGg7XG4gICAgICAvLyBUbyByZW1vdmUgYSB2YWx1ZSwgd2UgbXVzdCBzZWFyY2ggdGhyb3VnaCB0aGUgYXJyYXkgdG8gZmluZFxuICAgICAgLy8gaXQuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRbaV0gPT0gbm9kZSkge1xuICAgICAgICAgIC8vIFdoZW4gaXQgaXMgZm91bmQsIHRoZSBwcm9jZXNzIHNlZW4gaW4gJ3BvcCcgaXMgcmVwZWF0ZWRcbiAgICAgICAgICAvLyB0byBmaWxsIHVwIHRoZSBob2xlLlxuICAgICAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XG4gICAgICAgICAgaWYgKGkgIT0gbGVuIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50W2ldID0gZW5kO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmVGdW5jdGlvbihlbmQpIDwgdGhpcy5zY29yZUZ1bmN0aW9uKG5vZGUpKVxuICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVVwKGkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB0aGlzLnNpbmtEb3duKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vZGUgbm90IGZvdW5kLlwiKTtcbiAgICB9LFxuXG4gICAgc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7XG4gICAgfSxcblxuICAgIGJ1YmJsZVVwOiBmdW5jdGlvbiAobikge1xuICAgICAgLy8gRmV0Y2ggdGhlIGVsZW1lbnQgdGhhdCBoYXMgdG8gYmUgbW92ZWQuXG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXTtcbiAgICAgIC8vIFdoZW4gYXQgMCwgYW4gZWxlbWVudCBjYW4gbm90IGdvIHVwIGFueSBmdXJ0aGVyLlxuICAgICAgd2hpbGUgKG4gPiAwKSB7XG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHBhcmVudCBlbGVtZW50J3MgaW5kZXgsIGFuZCBmZXRjaCBpdC5cbiAgICAgICAgdmFyIHBhcmVudE4gPSBNYXRoLmZsb29yKChuICsgMSkgLyAyKSAtIDEsXG4gICAgICAgICAgcGFyZW50ID0gdGhpcy5jb250ZW50W3BhcmVudE5dO1xuICAgICAgICAvLyBTd2FwIHRoZSBlbGVtZW50cyBpZiB0aGUgcGFyZW50IGlzIGdyZWF0ZXIuXG4gICAgICAgIGlmICh0aGlzLnNjb3JlRnVuY3Rpb24oZWxlbWVudCkgPCB0aGlzLnNjb3JlRnVuY3Rpb24ocGFyZW50KSkge1xuICAgICAgICAgIHRoaXMuY29udGVudFtwYXJlbnROXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5jb250ZW50W25dID0gcGFyZW50O1xuICAgICAgICAgIC8vIFVwZGF0ZSAnbicgdG8gY29udGludWUgYXQgdGhlIG5ldyBwb3NpdGlvbi5cbiAgICAgICAgICBuID0gcGFyZW50TjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3VuZCBhIHBhcmVudCB0aGF0IGlzIGxlc3MsIG5vIG5lZWQgdG8gbW92ZSBpdCBmdXJ0aGVyLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaW5rRG93bjogZnVuY3Rpb24gKG4pIHtcbiAgICAgIC8vIExvb2sgdXAgdGhlIHRhcmdldCBlbGVtZW50IGFuZCBpdHMgc2NvcmUuXG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aCxcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXSxcbiAgICAgICAgZWxlbVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGVsZW1lbnQpO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAvLyBDb21wdXRlIHRoZSBpbmRpY2VzIG9mIHRoZSBjaGlsZCBlbGVtZW50cy5cbiAgICAgICAgdmFyIGNoaWxkMk4gPSAobiArIDEpICogMiwgY2hpbGQxTiA9IGNoaWxkMk4gLSAxO1xuICAgICAgICAvLyBUaGlzIGlzIHVzZWQgdG8gc3RvcmUgdGhlIG5ldyBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCxcbiAgICAgICAgLy8gaWYgYW55LlxuICAgICAgICB2YXIgc3dhcCA9IG51bGw7XG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBjaGlsZCBleGlzdHMgKGlzIGluc2lkZSB0aGUgYXJyYXkpLi4uXG4gICAgICAgIGlmIChjaGlsZDFOIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gTG9vayBpdCB1cCBhbmQgY29tcHV0ZSBpdHMgc2NvcmUuXG4gICAgICAgICAgdmFyIGNoaWxkMSA9IHRoaXMuY29udGVudFtjaGlsZDFOXSxcbiAgICAgICAgICAgIGNoaWxkMVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMSk7XG4gICAgICAgICAgLy8gSWYgdGhlIHNjb3JlIGlzIGxlc3MgdGhhbiBvdXIgZWxlbWVudCdzLCB3ZSBuZWVkIHRvIHN3YXAuXG4gICAgICAgICAgaWYgKGNoaWxkMVNjb3JlIDwgZWxlbVNjb3JlKVxuICAgICAgICAgICAgc3dhcCA9IGNoaWxkMU47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gdGhlIHNhbWUgY2hlY2tzIGZvciB0aGUgb3RoZXIgY2hpbGQuXG4gICAgICAgIGlmIChjaGlsZDJOIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGNoaWxkMiA9IHRoaXMuY29udGVudFtjaGlsZDJOXSxcbiAgICAgICAgICAgIGNoaWxkMlNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMik7XG4gICAgICAgICAgaWYgKGNoaWxkMlNjb3JlIDwgKHN3YXAgPT0gbnVsbCA/IGVsZW1TY29yZSA6IGNoaWxkMVNjb3JlKSkge1xuICAgICAgICAgICAgc3dhcCA9IGNoaWxkMk47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgbmVlZHMgdG8gYmUgbW92ZWQsIHN3YXAgaXQsIGFuZCBjb250aW51ZS5cbiAgICAgICAgaWYgKHN3YXAgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY29udGVudFtuXSA9IHRoaXMuY29udGVudFtzd2FwXTtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbc3dhcF0gPSBlbGVtZW50O1xuICAgICAgICAgIG4gPSBzd2FwO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIGRvbmUuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydHMua2RUcmVlID0ga2RUcmVlO1xuICBleHBvcnRzLkJpbmFyeUhlYXAgPSBCaW5hcnlIZWFwO1xufSkpO1xuIiwiLy8gdG9kbzpcclxuLy8gICBtb3ZlIG91dCBzZXJpYWwgPyBPciBsb29rIGZvciBhIHNlcmlhbCByZWFkbGluZSBpbXBsZW1lbnRhdGlvbiA/Pz9cclxuLy8gYnVnczpcclxuLy8gICBkaXNjb25uZWN0IC0gRmFpbGVkIHRvIGV4ZWN1dGUgJ2Nsb3NlJyBvbiAnU2VyaWFsUG9ydCc6IENhbm5vdCBjYW5jZWwgYSBsb2NrZWQgc3RyZWFtXHJcblxyXG5pbXBvcnQgeyBQYWQgfSBmcm9tIFwiLi9wY2JcIjtcclxuXHJcbi8qKlxyXG4gKiBEZXZpY2U6IGFic3RyYWN0cyBhY2Nlc3MgdG8gbWFjaGluZS5cclxuICogSXQgXCJzaW1wbGlmaWVzXCIgc2VyaWFsIHBvcnQgYWNjZXNzLiBBdCB0aGUgbW9tZW50IGl0IG9ubHkgb2xsb3dzIFwid3JpdGUgYW5kIHJlc3BvbnNlXCIgc3R5bGUgY29tbXVuaWNhdGlvbi5cclxuICogVGhlIHNlcmlhbCBwb3J0IGlzIG9wZW5lZCwgdGhlbiBhIHJlYWRlciBsb29wIGlzIHN0YXJ0ZXQsIHdoaWNoIHB1c2hlcyBlYWNoIG5ldyBsaW5lIGludG8gdGhlIGlucHV0UXVldWUuXHJcbiAqIEZ1bmN0aW9uIHNlcmlhbFdyaXRlV2FpdCBpcyB1c2VkIHRvIGlzc3VlIGNvbW1hbmRzIGFuZCB3YWl0IGZvciB0aGUgZGV2aWNlIHRvIGFrbm93bGVkZ2UuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIERldmljZSB7XHJcbiAgICBkZXZpY2VDaGVjazogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlQ29ubmVjdDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlRGlzY29ubmVjdDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlSW5wdXRGb3JtOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlSW5mbzogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlTG9nOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VTZXJpYWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICAgIHBvcnRzOiBhbnk7XHJcbiAgICBwb3J0OiBhbnk7XHJcbiAgICB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXJTdHJlYW07XHJcbiAgICByZWFkZXI6IFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcjxzdHJpbmc+O1xyXG4gICAgaW5wdXRMYXN0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5wdXRRdWV1ZTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRldmljZUNoZWNrID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUNoZWNrXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlQ29ubmVjdCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VDb25uZWN0XCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlRGlzY29ubmVjdCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VEaXNjb25uZWN0XCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VJbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmRldmljZUlucHV0Rm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlSW5wdXRGb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSW5mbyA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VJbmZvXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlTG9nID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUxvZ1wiKTtcclxuICAgICAgICB0aGlzLmRldmljZVNlcmlhbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VTZXJpYWxcIik7XHJcbiAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyU3RyZWFtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlQ2hlY2sgJiYgdGhpcy5kZXZpY2VDb25uZWN0ICYmIHRoaXMuZGV2aWNlRGlzY29ubmVjdCAmJiB0aGlzLmRldmljZUlucHV0ICYmIHRoaXMuZGV2aWNlSW5wdXRGb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlQ2hlY2sub25jbGljayA9IHRoaXMuc2VyaWFsQ2hlY2suYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VDb25uZWN0Lm9uY2xpY2sgPSB0aGlzLnNlcmlhbENvbm5lY3QuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VEaXNjb25uZWN0Lm9uY2xpY2sgPSB0aGlzLnNlcmlhbERpc2Nvbm5lY3QuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kZXZpY2VEb3NvbWUub25jbGljayA9IHRoaXMuc2VyaWFsRG9zb21lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGV2aWNlSW5wdXQub25jaGFuZ2UgPSB0aGlzLnNlcmlhbElucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5wdXRGb3JtLm9uc3VibWl0ID0gdGhpcy5zZXJpYWxJbnB1dEZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXJpYWxDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBTZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gdG8gWmVyby4gQWxsIGZ1cnRoZXIgY29tbWFuZHMgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzIHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0WmVybz8ocG9pbnQ6W251bWJlcixudW1iZXJdKTogdm9pZDtcclxuICAgICAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgTW92ZSB0byBwb3NpdGlvbi4gSWYgb25lIGNvb3JkaW5hdGUgaXMgdW5kZWZpbmVkLCBpdCdzIGlnbm9yZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmVUbz8oeDpudW1iZXJ8dW5kZWZpbmVkLCB5Om51bWJlcnx1bmRlZmluZWQsIHo6bnVtYmVyfHVuZGVmaW5lZCwgZTogbnVtYmVyIHwgdW5kZWZpbmVkKTogdm9pZFxyXG4gICAgcHVibGljIG1vdmVUb0FsbD8ocGxpc3Q6IFBhZFtdLCBzdGFydDpbbnVtYmVyLG51bWJlcl0pO1xyXG5cclxuICAgIHB1YmxpYyBibG9iPygpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlIHRoaXMgaW4gZGVyaXZlZCBjbGFzcyB0byBnZXQgbm90aWZpY2F0aW9uIHdoZW4gc29tZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU2VyaWFsQ29ubmVjdGVkPygpOnZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSB0aGlzIGluIGRlcml2ZWQgY2xhc3MgdG8gZ2V0IG5vdGlmaWNhdGlvbiB3aGVuIHNvbWUgZGV2aWNlIHdhcyBkaXNjb25uZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbERpc2Nvbm5lY3RlZD8oKTp2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYSBkaWFsb2cgd2hlcmUgdXNlciBjYW4gc2VsZWN0IGEgZGV2aWNlIHRvIGNvbm5lY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxDb25uZWN0KCkge1xyXG4gICAgICAgIC8vIG9wZW5zIGRpYWxvZyB3aGVyZSB1c2VyIGNhbiBzZWxlY3QgYSBkZXZpY2VcclxuICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5yZXF1ZXN0UG9ydCgpLnRoZW4oKHBvcnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENvbm5lY3QnLCBwb3J0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxQb3J0T3Blbihwb3J0KTtcclxuICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybignc2VyaWFsQ29ubmVjdCcscmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihyZWFzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxDb25uZWN0RGV2aWNlKHZpZDogbnVtYmVyLCBwaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHBvcnQgb2YgdGhpcy5wb3J0cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VyaWFsQ29ubmVjdERldmljZTogc2VyaWFsIGF2YWlsYWJsZSwgcG9ydHM6IGAsIHBvcnQuZ2V0SW5mbygpKTtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2JQcm9kdWN0SWQsIHVzYlZlbmRvcklkIH0gPSBwb3J0LmdldEluZm8oKTtcclxuICAgICAgICAgICAgaWYgKHVzYlByb2R1Y3RJZCA9PSBwaWQgJiYgdXNiVmVuZG9ySWQgPT0gdmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFBvcnRPcGVuKHBvcnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IGZyb20gZGV2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxEaXNjb25uZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWFkZXIucmVsZWFzZUxvY2soKTsgLy8gZG9lcydudCBkbyBpdCA6KFxyXG4gICAgICAgICAgICB0aGlzLnBvcnQuY2xvc2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9ydCBjbG9zZWQnKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgV2FpdCB1bnRpbCBzb21lIHJlc3BvbnNlIG9yIHRpbWVvdXQsIHJldHVybnMgcmVzcG9uc2Ugb3IgJ3RpbWVvdXQnIG9yIG1pZ2h0IGZhaWwgd2l0aCAnYnVzeScgb3IgJ2Rpc2Nvbm5lY3RlZCdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbFdyaXRlV2FpdCh2YWx1ZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAxMDAwMCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgLy8gY2xlYW4gc2VyaWFsIGlucHV0XHJcbiAgICAgICAgdGhpcy5pbnB1dFF1ZXVlID0gW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgc29tZSByZXNwb25zZSBvciB0aW1lb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVzdGVwID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heHRpbWUgPSB0aW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICghYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IGF3YWl0IHRoaXMuc2VyaWFsQXZhaWwodGltZXN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXh0aW1lID0gbWF4dGltZSAtIHRpbWVzdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4dGltZSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgYXZhaWw6JHthdmFpbGFibGV9IHRpbWU6JHt0aW1lb3V0IC0gbWF4dGltZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IGNoZWNrOiAke3RoaXMuaW5wdXRRdWV1ZS5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucCA9IDxzdHJpbmc+dGhpcy5pbnB1dFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IHJlc29sdmU6ICR7aW5wfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlucCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFdyaXRlV2FpdCByZWplY3Q6IGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ3RpbWVvdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2J1c3knKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybih0aGlzLnBvcnQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gd3JpdGUgYW55dGhpbmcgdG8gdGhlIGRldmljZS5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsSW5wdXRGb3JtKGV2ZW50OiBJbnB1dEV2ZW50KSB7IC8vIGZpcmVzIHdoZW4gcmV0dXJuIGlzIGVudGVyZWRcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VJbnB1dCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBmb3JtIHdpbGwgZG8gc3RyYW5nZSB0aGluZ3MgIVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsSW5wdXRDaGFuZ2UoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byB3cml0ZSBhbnl0aGluZyB0byB0aGUgZGV2aWNlLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxJbnB1dENoYW5nZShldmVudDogSW5wdXRFdmVudCkgeyAvLyBmaXJlcyB3aGVuIHJldHVybiBpcyBlbnRlcmVkXHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9ydCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLmRldmljZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGUodGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcmlhbElucHV0Q2hhbmdlIC0gbm8gcG9ydCBvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKiogcHJpdmF0ZSBzdHVmZiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxDaGVjaygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFwic2VyaWFsXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9ydHMoKTtcclxuICAgICAgICAgICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJpYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNvbm5lY3RcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBdXRvbWF0aWNhbGx5IG9wZW4gZXZlbnQudGFyZ2V0IG9yIHdhcm4gdXNlciBhIHBvcnQgaXMgYXZhaWxhYmxlLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENoZWNrOmNvbm5lY3QnLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcnRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5hZGRFdmVudExpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB8ZXZlbnQudGFyZ2V0fCBmcm9tIHRoZSBVSS5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZXJpYWwgcG9ydCB3YXMgb3BlbmVkLCBhIHN0cmVhbSBlcnJvciB3b3VsZCBiZSBvYnNlcnZlZCBhcyB3ZWxsLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENoZWNrOmRpc2Nvbm5lY3QnLCBldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTm8gc2VyaWFsIEFQSSBhdmFpbGFibGUsIHRyeSBhbm90aGVyIGJyb3dzZXInKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBzZXJpYWwgcG9ydC4gQ29ubmVjdGlvbiB0byBkZXZpY2UgaW1wb3NzaWJsZSEgVXNlIENocm9tZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQb3J0cygpIHtcclxuICAgICAgICAvLyBsaXN0cyBhbGwgcmVjZW50bHkgdXNlZCBwb3J0cywgY291bGQganVzdCBvcGVuIG9uZSB0aGVuLlxyXG4gICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLmdldFBvcnRzKCkudGhlbigocG9ydHMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZVBvcnRzOicsIHBvcnRzKTtcclxuICAgICAgICAgICAgdGhpcy5wb3J0cyA9IHBvcnRzO1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9ICcnOy8vZGV2aWNlczo8YnI+JztcclxuICAgICAgICAgICAgZm9yIChsZXQgcG9ydCBvZiBwb3J0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlcmlhbCBhdmFpbGFibGUsIHBvcnRzOiBgLCBwb3J0LmdldEluZm8oKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzYlByb2R1Y3RJZCwgdXNiVmVuZG9ySWQgfSA9IHBvcnQuZ2V0SW5mbygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVwZGF0ZVBvcnRzIHBvcnQgcGlkOiR7dXNiUHJvZHVjdElkfSB2aWQ6JHt1c2JWZW5kb3JJZH1gKTtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLW1pY3JvY2hpcFwiPjwvaT4gcGlkOiR7dXNiUHJvZHVjdElkfSB2aWQ6JHt1c2JWZW5kb3JJZH0gPGJ1dHRvbiBjbGFzcz1cInczLWJ0biB3My1yb3VuZCB3My1saWdodC1ncmV5IHczLXRpbnlcIiBpZD1cIiR7dXNiVmVuZG9ySWR9LSR7dXNiUHJvZHVjdElkfVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1Z1wiPjwvaT4gY29ubmVjdCA8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRucyA9IHRoaXMuZGV2aWNlSW5mby5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJ0biBvZiBidG5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7IGNvbnN0IGlkcyA9IGJ0bi5pZC5zcGxpdCgnLScpOyBjb25zb2xlLmxvZyhpZHMpOyB0aGlzLnNlcmlhbENvbm5lY3REZXZpY2UocGFyc2VJbnQoaWRzWzBdKSwgcGFyc2VJbnQoaWRzWzFdKSkgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VDb25uZWN0ICYmICh0aGlzLnBvcnRzID09IG51bGwgfHwgdGhpcy5wb3J0cy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVQb3J0czogb3BlbiBkZXYgYnV0dG9ucyEhIScsIHRoaXMuZGV2aWNlQ29ubmVjdC5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VDb25uZWN0LmNsYXNzTmFtZSA9IHRoaXMuZGV2aWNlQ29ubmVjdC5jbGFzc05hbWUucmVwbGFjZSgndzMtaGlkZScsICd3My1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgZ2l2dmVuIHBvcnQuIENhbiBiZSB1c2VkIGFmdGVyIHF1ZXJpaW5nIHBvcnRzIHdpdGggdXBkYXRlUG9ydHMuXHJcbiAgICAgKiBAcGFyYW0gcG9ydFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlcmlhbFBvcnRPcGVuKHBvcnQ6IGFueSkge1xyXG4gICAgICAgIHBvcnQub25jb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ09OTkVDVEVEYCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb3J0Lm9uZGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERJU0NPTk5FQ1RFRGApO1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uU2VyaWFsRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VyaWFsRGlzY29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHBvcnQub3Blbih7IGJhdWRSYXRlOiAyNTAwMDAgfSkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VMb2cuaW5uZXJIVE1MID0gXCJjb25uZWN0ZWQ8YnI+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvcnQgb3BlbmVkID8gJywgdGhpcy5wb3J0KTtcclxuICAgICAgICAgICAgaWYodGhpcy5vblNlcmlhbENvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VyaWFsQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxSZWFkLmJpbmQodGhpcyksIDApOyAvLyBzdGFydCByZWFkIGxvb3BcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2VyaWFsRXJyb3IoZXJyb3I6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybignc2VyaWFsRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlTG9nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlTG9nLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInczLXJlZFwiPiR7ZXJyb3J9PC9zcGFuPjxicj5gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwsIHN0YXJ0cyB0aGUgcmVhZCBsaW5lIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc2VyaWFsUmVhZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRhYmxlU3RyZWFtQ2xvc2VkID0gdGhpcy5wb3J0LnJlYWRhYmxlLnBpcGVUbyh0aGlzLnRleHREZWNvZGVyLndyaXRhYmxlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWFkZXIgPSB0aGlzLnRleHREZWNvZGVyLnJlYWRhYmxlLmdldFJlYWRlcigpO1xyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gZGF0YSBjb21pbmcgZnJvbSB0aGUgc2VyaWFsIGRldmljZS5cclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNlcmlhbFJlYWRvbi5iaW5kKHRoaXMpLCAxKTsgLy8gd2lsbCBsb29wIHRoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwsIGhhbmRsZXMgdGhlIHJlYWQgbGluZSBsb29wLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbFJlYWRvbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCB0aGlzLnJlYWRlci5yZWFkKCk7XHJcbiAgICAgICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgc2VyaWFsIHBvcnQgdG8gYmUgY2xvc2VkIGxhdGVyLiAvLyBEb2VzIG5vdCBoYXBwZW4gIVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkZXIucmVsZWFzZUxvY2soKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJpYWxSZWFkIC0gZG9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHB1c2hlZFN0dWZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpcyBhIHN0cmluZy5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdcXG4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQXNzZXJ0aW9uIGZhaWxlZCAnLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07IC8vIHRoZXJlIGlzIGEgXFxuIGluIGl0ICFcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgKz0gdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0UXVldWUucHVzaCh0aGlzLmlucHV0TGFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsTG9nKHRoaXMuaW5wdXRMYXN0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaGVkU3R1ZmYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFJlYWRvbiBsYXN0OiBcIiR7dGhpcy5pbnB1dExhc3R9XCJgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gXFxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFJlYWRvbiBsYXN0OiBcIiR7dGhpcy5pbnB1dExhc3R9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHVzaGVkU3R1ZmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsQ2FsbGJhY2suYmluZCh0aGlzKSwgNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsUmVhZG9uLmJpbmQodGhpcyksIDEpOyAvLyB3aWxsIGxvb3AgdGhlcmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsRXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VyaWFsQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXZpY2VMb2cnKTtcclxuICAgICAgICAvLyBpZiAoZWxlbSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgbGF0ZXN0ID0gdGhpcy5pbnB1dFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgIC8vICAgICB3aGlsZSAobGF0ZXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmlubmVySFRNTCArPSBgJHtsYXRlc3R9PGJyPmA7XHJcbiAgICAgICAgLy8gICAgICAgICBsYXRlc3QgPSB0aGlzLmlucHV0UXVldWUucG9wKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxXcml0ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxMb2codmFsdWUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gd3JpdGUuLi5cclxuICAgICAgICBsZXQgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgIGNvbnN0IHdyaXRlciA9IHRoaXMucG9ydC53cml0YWJsZS5nZXRXcml0ZXIoKTtcclxuICAgICAgICBhd2FpdCB3cml0ZXIud3JpdGUodXRmOEVuY29kZS5lbmNvZGUoYCR7dmFsdWV9XFxuYCkpO1xyXG4gICAgICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgdW50aWwgZGF0YSB3YXMgcmVhZCBvciB0aW1lb3V0XHJcbiAgICAgKiBAcGFyYW0gdGltZW91dFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXJpYWxBdmFpbCh0aW1lb3V0OiBudW1iZXIgPSAxMCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJpYWxMb2codGV4dDogc3RyaW5nLCBpbmNvbW1pbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VTZXJpYWwpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZGV2aWNlU2VyaWFsLmNoaWxkRWxlbWVudENvdW50ID4gMjApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaCA9IHRoaXMuZGV2aWNlU2VyaWFsLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZVNlcmlhbC5yZW1vdmVDaGlsZChjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGluY29tbWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwuaW5uZXJIVE1MICs9IGA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYXJyb3ctcmlnaHQtdG8tYnJhY2tldFwiPjwvaT4gJHt0ZXh0fTwvZGl2PmBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsLmlubmVySFRNTCArPSBgPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFycm93LXVwLXJpZ2h0LWZyb20tc3F1YXJlXCI+PC9pPiAke3RleHR9PC9kaXY+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2tkVHJlZX0gZnJvbSAna2QtdHJlZS1qYXZhc2NyaXB0JzsgLy8gbm9kZSBtb2R1bGVcclxuLy8gaW1wb3J0IHtrZFRyZWUsIGtkVHJlZU9iamVjdH0gZnJvbSAnLi9rZFRyZWUnO1xyXG5cclxuY2xhc3MgQm91bmRpbmdCb3gge1xyXG4gICAgbWlueDogbnVtYmVyID0gOTk5OTk7XHJcbiAgICBtaW55OiBudW1iZXIgPSA5OTk5OTtcclxuICAgIG1heHg6IG51bWJlciA9IC05OTk5OTtcclxuICAgIG1heHk6IG51bWJlciA9IC05OTk5OTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICB1cGRhdGVGcm9tUGFkKHBhZDpQYWQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShwYWQucG9zWCwgcGFkLnBvc1kpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHggPCB0aGlzLm1pbngpIHRoaXMubWlueCA9IHg7XHJcbiAgICAgICAgaWYgKHkgPCB0aGlzLm1pbnkpIHRoaXMubWlueSA9IHk7XHJcbiAgICAgICAgaWYgKHggPiB0aGlzLm1heHgpIHRoaXMubWF4eCA9IHg7XHJcbiAgICAgICAgaWYgKHkgPiB0aGlzLm1heHkpIHRoaXMubWF4eSA9IHk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGJiOiAke3RoaXMubWlueX0gJHt0aGlzLm1heHl9ICR7dGhpcy5jZW50ZXIoKVsxXX1gKTtcclxuICAgIH1cclxuICAgIGNlbnRlcih6b29tOiBudW1iZXIgPSAxLjApOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gWyh0aGlzLm1pbnggKyAodGhpcy5tYXh4IC0gdGhpcy5taW54KSAvIDIpICogem9vbSwgKHRoaXMubWlueSArICh0aGlzLm1heHkgLSB0aGlzLm1pbnkpIC8gMikgKiB6b29tXTtcclxuICAgIH1cclxuICAgIHplcm8oem9vbTogbnVtYmVyID0gMS4wKTogW3g6IG51bWJlciwgeTogbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLm1pbnggKiB6b29tLCB0aGlzLm1pbnkgKiB6b29tXTtcclxuICAgIH1cclxuICAgIHNpemUoem9vbTogbnVtYmVyID0gMS4wKTogW3g6IG51bWJlciwgeTogbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFsodGhpcy5tYXh4IC0gdGhpcy5taW54KSAqIHpvb20sICh0aGlzLm1heHkgLSB0aGlzLm1pbnkpICogem9vbV07XHJcbiAgICB9XHJcbiAgICBkaWFnb25hbCh6b29tOiBudW1iZXIgPSAxLjApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemUoem9vbSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChzaXplWzBdKnNpemVbMF0gKyBzaXplWzFdKnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgLyoqIENoZWNrIGlmIHBhZCBpcyBpbnNpZGUgdGhlIGJvdW5kaW5nYm94ICovXHJcbiAgICBpbnNpZGUocGFkOiBQYWQpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAocGFkLnBvc1ggPj0gdGhpcy5taW54ICYmIHBhZC5wb3NYIDw9IHRoaXMubWF4eCkgJiYgKHBhZC5wb3NZID49IHRoaXMubWlueSAmJiBwYWQucG9zWSA8PSB0aGlzLm1heHkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWRTdHlsZSB7XHJcbiAgICBwdWJsaWMgZm9ybTogc3RyaW5nO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWQge1xyXG4gICAgcG9zWDogbnVtYmVyO1xyXG4gICAgcG9zWTogbnVtYmVyO1xyXG4gICAgc3R5bGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHN0eWxlOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0geDtcclxuICAgICAgICB0aGlzLnBvc1kgPSB5O1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIH1cclxuICAgIGFzVHVwbGUoKTpbbnVtYmVyLG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5wb3NYLCB0aGlzLnBvc1ldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUENCIHsgLy9leHRlbmRzIGtkVHJlZU9iamVjdCB7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBtYXBTdHlsZXM6IE1hcDxzdHJpbmcsIFBhZFN0eWxlPjtcclxuICAgIG1hcFBhZHM6IE1hcDxzdHJpbmcsIFNldDxQYWQ+PjtcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIG1vdXNlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbW91c2VTdGFydFg6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZVN0YXJ0WTogbnVtYmVyID0gMDtcclxuICAgIG1vdXNlT2ZmWDogbnVtYmVyID0gMDtcclxuICAgIG1vdXNlT2ZmWTogbnVtYmVyID0gMDtcclxuICAgIG1vdXNlU2VsZWN0OiBib29sZWFuO1xyXG4gICAgbW91c2VTZWxlY3RYOiBudW1iZXI7XHJcbiAgICBtb3VzZVNlbGVjdFk6IG51bWJlcjtcclxuXHJcbiAgICBwb3NaZXJvOiBudW1iZXJbXTtcclxuXHJcbiAgICB6b29tOiBudW1iZXIgPSA1LjA7XHJcbiAgICBiYlBjYjogQm91bmRpbmdCb3g7XHJcbiAgICBiYlNlbGVjdGlvbjogQm91bmRpbmdCb3g7XHJcbiAgICBiYlplcm86IEJvdW5kaW5nQm94OyAvLyB1c2UgY2VudGVyIGFzIHplcm9cclxuXHJcbiAgICB0cmVlOiBrZFRyZWU8UGFkPjtcclxuICAgIG5lYXJlc3Q6W1BhZCwgbnVtYmVyXVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1hcFN0eWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBQYWRTdHlsZT4oKTtcclxuICAgICAgICB0aGlzLm1hcFBhZHMgPSBuZXcgTWFwPHN0cmluZywgU2V0PFBhZD4+KCk7XHJcbiAgICAgICAgdGhpcy5iYlBjYiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHRoaXMuYmJaZXJvID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgdGhpcy5iYlNlbGVjdGlvbiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbnZhcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgWmVybyBwb3NpdGlvbiB0byB0aGUgbG93ZXIgbGVmdCBvZiBzZWxlY3Rpb24gcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0WmVybygpOnZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAvLyB1c2UgbGFzdCBzZWxlY3Rpb24gPz8/XHJcbiAgICAgICAgdGhpcy5iYlplcm8gPSB0aGlzLmJiU2VsZWN0aW9uO1xyXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBjYjpzZXRaZXJvOiAke3RoaXMuYmJaZXJvLnplcm8oKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIFplcm8gcG9zaXRpb24gcmVsYXRpdmUgdG8gT3JpZ2luKDAsMCkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRaZXJvKCk6W251bWJlcixudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYlplcm8uemVybygpOyAvLyBsb3dlciBsZWZ0ID8/IGJldHRlciB3aGVuIC5jZW50ZXIoKSA/P1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgQWxsIFBhZHMgaW4gc2VsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKTpQYWRbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDpQYWRbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgbmVhciBvZiB0aGlzLm5lYXJlc3QpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmVhcik7XHJcbiAgICAgICAgICAgIGlmKG5lYXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmVhclswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIExvd2VyIGxlZnQgb2Ygc2VsZWN0aW9uIGFzIHR1cGxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTZWxlY3RlZFplcm8oKTpbbnVtYmVyLG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJiU2VsZWN0aW9uLnplcm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFkQ291bnQoKTpudW1iZXIge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgcGFkc2V0IG9mIHRoaXMubWFwUGFkcykge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gcGFkc2V0WzFdLnNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHpvb21Ub0ZpdChzaXplOltudW1iZXIsbnVtYmVyXSkge1xyXG4gICAgICAgIGxldCBwc2l6ZSA9IHRoaXMuYmJQY2Iuc2l6ZSgpO1xyXG4gICAgICAgIGxldCB6dyA9IHNpemVbMF0gLyBwc2l6ZVswXTtcclxuICAgICAgICBsZXQgemggPSBzaXplWzFdIC8gcHNpemVbMV07XHJcbiAgICAgICAgdGhpcy56b29tID0gKCh6dyA+IHpoKT8gemggOiB6dykgKiAuOTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUGNiOnpvb21Ub0ZpdCB6b29tICR7dGhpcy56b29tfWAsIHBzaXplKTtcclxuICAgICAgICB0aGlzLmNlbnRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjZW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZYID0gLSh0aGlzLmJiUGNiLmNlbnRlcigpWzBdICogdGhpcy56b29tKSArIHRoaXMuY2FudmFzLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU9mZlkgPSAtKHRoaXMuYmJQY2IuY2VudGVyKClbMV0gKiB0aGlzLnpvb20pICsgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZFBhZFN0eWxlKG5hbWU6IHN0cmluZywgZm9ybTogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubWFwU3R5bGVzLnNldChuYW1lLCBuZXcgUGFkU3R5bGUoZm9ybSwgdywgaCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBhZChzdHlsZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXBQYWRzLmhhcyhzdHlsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBQYWRzLnNldChzdHlsZSwgbmV3IFNldDxQYWQ+KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFkc2V0ID0gdGhpcy5tYXBQYWRzLmdldChzdHlsZSk7XHJcbiAgICAgICAgaWYgKHBhZHNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdwYWQgPSBuZXcgUGFkKHN0eWxlLCB4LCB5KTtcclxuICAgICAgICAgICAgcGFkc2V0LmFkZChuZXdwYWQpO1xyXG4gICAgICAgICAgICB0aGlzLmJiUGNiLnVwZGF0ZSh4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmVlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYWRzIDogUGFkW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFkc2V0cyBvZiB0aGlzLm1hcFBhZHMudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBhZCBvZiBwYWRzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkcy5wdXNoKHBhZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJlZSA9IG5ldyBrZFRyZWUocGFkcywgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudHJlZSA9IG5ldyBrZFRyZWUoUENCLCBwYWRzLCBQQ0IuZGlzdGFuY2UsIFtcInBvc1hcIiwgXCJwb3NZXCJdKTsgLy8gdHMgdmVyc2lvblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHJlZSBiZjonLCB0aGlzLnRyZWUuYmFsYW5jZUZhY3RvcigpKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5ldmVudC5idXR0b25zXHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICBpZihldmVudC5idXR0b24gPT0gMCkgeyAvLyBzdGFydCBzZWxlY3RcclxuICAgICAgICAgICAgY29uc3QgbXggPSAoZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWCkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGNvbnN0IG15ID0gKHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCkgLSB0aGlzLm1vdXNlT2ZmWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WSA9IG15O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WSA9IG15O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBjYjptb3VzZURvd246IHg6JHt0aGlzLm1vdXNlU3RhcnRYfSB5OiR7dGhpcy5tb3VzZVN0YXJ0WX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uICE9IDApIHsgLy8gcGFuIGFyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRYID0gZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgKiB0cmFucy5kIC0gdGhpcy5tb3VzZU9mZlk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VGbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGNiOm1vdXNlVXAgZXZlbnQ6JywgZXZlbnQpO1xyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiA9PSAwKSB7IC8vIHNlbGVjdFxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRyYW5zLCBldmVudCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcnLCB0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFktdGhpcy5jYW52YXMub2Zmc2V0VG9wKSwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICBjb25zdCBteCA9IChldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgY29uc3QgbXkgPSAodGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wKSAtIHRoaXMubW91c2VPZmZZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFkgPSBteTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJiID0gc2VsZWN0ZWQgcmVjdGFuZ2xlXHJcbiAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbi51cGRhdGUodGhpcy5tb3VzZVN0YXJ0WCwgdGhpcy5tb3VzZVN0YXJ0WSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmJTZWxlY3Rpb24udXBkYXRlKHRoaXMubW91c2VTZWxlY3RYLCB0aGlzLm1vdXNlU2VsZWN0WSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFkID0gbmV3IFBhZCgnJywgdGhpcy5iYlNlbGVjdGlvbi5jZW50ZXIoKVswXSwgdGhpcy5iYlNlbGVjdGlvbi5jZW50ZXIoKVsxXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQY2I6bW91c2VVcCBjeDoke3BhZC5wb3NYfSBjeToke3BhZC5wb3NZfSBkaWFnb25hbDoke3RoaXMuYmJTZWxlY3Rpb24uZGlhZ29uYWwoKX1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMudHJlZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kOltQYWQsIG51bWJlcl1bXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3QgPSB0aGlzLmJiU2VsZWN0aW9uLmRpYWdvbmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZihkaXN0IDwgMC4xKSB7IC8vIG5vIGRyYWcgLSBvbmx5IG9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdGhpcy50cmVlLm5lYXJlc3QocGFkLCAxLCBkaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3QgPSBmb3VuZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IChkaXN0LzIpICogKGRpc3QvMik7IC8vIHNlYXJjaCByZXF1aXJlIHNxdWFyZSBkaXN0YW5jZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLnRyZWUubmVhcmVzdChwYWQsIHRoaXMuZ2V0UGFkQ291bnQoKSwgZGlzdCk7IC8vIHV1dWhoaCB1c2UgcGFkIGNvdW50ICE/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgbmVhciBvZiBmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbToke214fSwke215fSBuZWFyZXN0OiR7bmVhclswXS5wb3NYfSwke25lYXJbMF0ucG9zWX0gIGRpc3Q6JHtNYXRoLnNxcnQobmVhclsxXSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLyB1dXVoaGggY2hlY2sgaWYgaW5zaWRlIHRoZSBib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5iYlNlbGVjdGlvbi5pbnNpZGUobmVhclswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdC5wdXNoKG5lYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG5lZWQgYSBiYiBmb3IgYWN0dWFsIHNlbGVjdGVkIHBvaW50cyB0byBnZXQgemVybyByaWdodFxyXG4gICAgICAgICAgICAgICAgbGV0IGJiTmV3U2VsZWN0aW9uID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgbmVhciBvZiB0aGlzLm5lYXJlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYk5ld1NlbGVjdGlvbi51cGRhdGVGcm9tUGFkKG5lYXJbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbiA9IGJiTmV3U2VsZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQY2I6bW91c2VVcCBzZWxlY3Rpb24gZm91bmQgIyR7Zm91bmQubGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgLy8gb29vaGhoIGRvIG5vdCB0cnVzdCBldmVudC5idXR0b24sIGl0J3MgYWx3YXlzIDAgaGVyZSAhXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BjYjptb3VzZU1vdmUnLGV2ZW50KTtcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIGlmKHRoaXMubW91c2VGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZYID0gZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlU3RhcnRYO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWSA9IGV2ZW50LmNsaWVudFkgKiB0cmFucy5kIC0gdGhpcy5tb3VzZVN0YXJ0WTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5tb3VzZVNlbGVjdCApIHtcclxuICAgICAgICAgICAgY29uc3QgbXggPSAoZXZlbnQuY2xpZW50WCAqIHRyYW5zLmEgLSB0aGlzLm1vdXNlT2ZmWCkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIGNvbnN0IG15ID0gKHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCkgLSB0aGlzLm1vdXNlT2ZmWSkgLyB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RZID0gbXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQuZGVsdGFZKTtcclxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpvb20gKj0gMS4xO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdXNlT2ZmWCAqPSAwLjk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW91c2VPZmZZICo9IDAuOTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnpvb20gKj0gMC45O1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdXNlT2ZmWCAqPSAxLjE7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW91c2VPZmZZICo9IDEuMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZU91dChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXN0YW5jZShhOlBhZCwgYjpQYWQpIHtcclxuICAgICAgICByZXR1cm4gKGEucG9zWCAtIGIucG9zWCkqKGEucG9zWCAtIGIucG9zWCkgKyAgKGEucG9zWSAtIGIucG9zWSkqKGEucG9zWSAtIGIucG9zWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgLy8gdGhlb3JldGlzY2ggc28uLi5cclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAnb3JhbmdlcmVkJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYW50aXF1ZXdoaXRlJztcclxuXHJcbiAgICAgICAgLy8gZHJhdyBiYiBjZW50ZXJcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLmJiUGNiLmNlbnRlcih0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhjZW50ZXJbMF0gLSAxMCArIHRoaXMubW91c2VPZmZYLCBjZW50ZXJbMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGNlbnRlclswXSArIDEwICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oY2VudGVyWzBdICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSAtIDEwICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhjZW50ZXJbMF0gKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdICsgMTAgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgLy8gZHJhdyBiYlxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5iYlBjYi56ZXJvKHRoaXMuem9vbSlbMF0gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5iYlBjYi56ZXJvKHRoaXMuem9vbSlbMV0gKyB0aGlzLm1vdXNlT2ZmWSwgdGhpcy5iYlBjYi5zaXplKHRoaXMuem9vbSlbMF0sIHRoaXMuYmJQY2Iuc2l6ZSh0aGlzLnpvb20pWzFdKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGFkc3R5bGUgb2YgdGhpcy5tYXBQYWRzLmtleXMoKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5ID0gdGhpcy5tYXBTdHlsZXMuZ2V0KHBhZHN0eWxlKTtcclxuICAgICAgICAgICAgY29uc3QgcGFkc2V0ID0gdGhpcy5tYXBQYWRzLmdldChwYWRzdHlsZSk7XHJcbiAgICAgICAgICAgIGlmIChzdHkgJiYgcGFkc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdyA9IHN0eS53aWR0aCAqIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoID0gc3R5LmhlaWdodCAqIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBhZCBvZiBwYWRzZXQudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5LmZvcm0gPT0gJ1InIHx8IHN0eS5mb3JtID09ICdPJyB8fCBzdHkuZm9ybSA9PSAnUm91bmRSZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1ggKiB0aGlzLnpvb20gLSBzdyAvIDIuMCArIHRoaXMubW91c2VPZmZYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1kgKiB0aGlzLnpvb20gLSBzaCAvIDIuMCArIHRoaXMubW91c2VPZmZZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3csIHNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0eS5mb3JtID09ICdDJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZC5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3cgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3cgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWQucG9zWCAqIHRoaXMuem9vbSAtIHN3IC8gMi4wICsgdGhpcy5tb3VzZU9mZlgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWQucG9zWSAqIHRoaXMuem9vbSAtIHNoIC8gMi4wICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzdHkud2lkdGggKiB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZHJhdyBxdWF0c2NoICR7c3R5LmZvcm19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gZm9yIHBhZHN0eWxlXHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2VsZWN0aW9uQ3Jvc3MoZXMpXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncHVycGxlJztcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBsZXQgY3NpemUgPSAuNTtcclxuICAgICAgICBmb3IoY29uc3QgbmVhciBvZiB0aGlzLm5lYXJlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKChuZWFyWzBdLnBvc1gtY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIG5lYXJbMF0ucG9zWSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKChuZWFyWzBdLnBvc1grY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIG5lYXJbMF0ucG9zWSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKG5lYXJbMF0ucG9zWCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCAobmVhclswXS5wb3NZK2NzaXplKSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKG5lYXJbMF0ucG9zWCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCAobmVhclswXS5wb3NZLWNzaXplKSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5lYXJlc3Q6JHtuZWFyWzBdLnBvc1h9LCR7bmVhclswXS5wb3NZfSAgZGlzdDoke01hdGguc3FydChuZWFyWzFdKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2VsZWN0aW9uIGxvd2VyIGxlZnQgPSB6ZXJvIGthbmRpZGF0ZVxyXG4gICAgICAgIGxldCB6ZXJvID0gWzAsMF07XHJcbiAgICAgICAgaWYodGhpcy5iYlNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBjc2l6ZSA9IDIgKiB0aGlzLnpvb207XHJcbiAgICAgICAgICAgIHplcm8gPSB0aGlzLmJiU2VsZWN0aW9uLnplcm8odGhpcy56b29tKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh6ZXJvWzBdIC1jc2l6ZSArIHRoaXMubW91c2VPZmZYLCB6ZXJvWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0tY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh6ZXJvWzBdICsgdGhpcy5tb3VzZU9mZlgsICAgICB6ZXJvWzFdK2NzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRyYXcgb3JpZ2luXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIHplcm8gPSB0aGlzLmJiWmVyby5jZW50ZXIodGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oLWNzaXplICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oK2NzaXplICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5tb3VzZU9mZlgsICAgICAgIC1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZU9mZlgsICAgICAgICtjc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyB6ZXJvXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIHplcm8gPSB0aGlzLmJiWmVyby56ZXJvKHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gLWNzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gK2NzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0tY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0rY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBkcmF3IHNlbGVjdGlvblJlY3RhbmdsZVxyXG4gICAgICAgIGlmKHRoaXMubW91c2VTZWxlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncHVycGxlJztcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLm1vdXNlU3RhcnRYICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU3RhcnRZICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTZWxlY3RYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTdGFydFkgICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVNlbGVjdFggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVNlbGVjdFkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlU3RhcnRYICAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU2VsZWN0WSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTdGFydFkgICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuL3BhcnNlclwiO1xyXG5pbXBvcnQgeyBQQ0IgfSBmcm9tIFwiLi9wY2JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXJHZXJiZXIgZXh0ZW5kcyBQYXJzZXIge1xyXG4gICAgcmVOdW1Gb3JtYXQgPSAvXiVGU0xBWChbMC05XSkoWzAtOV0pWShbMC05XSkoWzAtOV0pWypdJS87XHJcbiAgICByZU1hdGNoUGFkID0gL14oJUFEKShEWzAtOV0rKShbQS1aYS16XSspWyxdKFstMC05Ll0rKVtYXT8oWy0wLTkuXSspP1tYXT8oWy0wLTkuXSspPy87XHJcbiAgICByZU1hdGNoUGFkQ29vcmRJbml0ID0gL14oW0RHXVswLTldKylbKl0vO1xyXG4gICAgcmVNYXRjaFBhZENvb3JkID0gL15YKFstXT8pKFswLTldKylZKFstXT8pKFswLTldKylEKFswLTldKylbKl0vO1xyXG4gICAgX2NhbmNlbCA9IGZhbHNlO1xyXG4gICAgZmxvYXRGcmFjdHMgPSAxO1xyXG4gICAgZmxvYXREZXppcyA9IDE7XHJcbiAgICBsYXN0UGFkID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwY2I6IFBDQikge1xyXG4gICAgICAgIHN1cGVyKHBjYik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlRmlsZShmaWxlOiBGaWxlKTpQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgZmlsZS5hcnJheUJ1ZmZlcigpLnRoZW4oKGJ1ZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlCdWZmZXJUb1N0cmluZyhidWYsICdVVEYtOCcsICh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NHZXJiZXJUZXh0KHRleHQpLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYW5jZWwgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByb2Nlc3NHZXJiZXJUZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZSBsaW5lIGVuZHMuLi5cclxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHIvZywgJycpOyAvLyByZW1vdmUgd2luZG93cyB0cmFzaFxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lTnIgPSAxO1xyXG4gICAgICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgbGluZU5yKys7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXIoJHtsaW5lTnJ9LyR7bGluZXMubGVuZ3RofSk6IGApO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzR2VyYmVyTGluZShsaW5lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2Nlc3NDQikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ0IobGluZU5yICogMTAwIC8gbGluZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IC8vIGZvclxyXG5cclxuICAgICAgICB0aGlzLnBjYi5yZXRyZWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgcHJvY2Vzc0dlcmJlckxpbmUobGluZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBsaW5lID0gbGluZS5yZXBsYWNlKC9cXG4vZywnPGJyPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFphaGxlbmZvcm1hdCBpbmZvIGxpbmUgXCIlRlNMQVgzNFkzNColXCJcclxuICAgICAgICAgICAgICAgIC8vICAgJUZTTEFYMjVZMjUqJSBDb29yZGluYXRlIGZvcm1hdCBzcGVjaWZpY2F0aW9uOlxyXG4gICAgICAgICAgICAgICAgLy8gICBDb29yZGluYXRlcyBmb3JtYXQgaXMgMi41OlxyXG4gICAgICAgICAgICAgICAgLy8gICAyIGRpZ2l0cyBpbiB0aGUgaW50ZWdlciBwYXJ0XHJcbiAgICAgICAgICAgICAgICAvLyAgIDUgZGlnaXRzIGluIHRoZSBmcmFjdGlvbmFsIHBhcnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTnVtRm9ybWF0ID0gdGhpcy5yZU51bUZvcm1hdC5leGVjKGxpbmUpOyAvL2xpbmUubWF0Y2goKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaE51bUZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTnVtRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0RGV6aXMgPSBwYXJzZUludChtYXRjaE51bUZvcm1hdFsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdEZyYWN0cyA9IHBhcnNlSW50KG1hdGNoTnVtRm9ybWF0WzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2VyYmVyOiBmbG9hdCBkaWdpdHMgPSAke3RoaXMuZmxvYXREZXppc30gJHt0aGlzLmZsb2F0RnJhY3RzfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBwYWQgZGVmaW5pdGlvbnNcclxuICAgICAgICAgICAgICAgIC8vICVBREQyMVIsMC42MDAwMDBYMS4wNTAwMDAqJVxyXG4gICAgICAgICAgICAgICAgLy8gJUFERDEwUm91bmRSZWN0LDAuMTIwMDAwIFggLTAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIFggMC42ODAwMDAgWCAtMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICBYIC0wLjY4MDAwMCBYIDAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgWCAtMC42ODAwMDAgWCAwLjE4MDAwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBYIDAuNjgwMDAwIFggMColXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFBhZCA9IHRoaXMucmVNYXRjaFBhZC5leGVjKGxpbmUpOyAvLyBsaW5lLm1hdGNoKCk7Ly8vKTtcclxuICAgICAgICAgICAgICAgIC8vIFdlbm4gXCJDXCIgZGFubiBnaWJ0cyBudXIgZWluZSBjb29yZFxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hQYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZHNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZHNGaWVsZC5pbm5lckhUTUwgKz0gYCR7bWF0Y2hQYWRbMl19ICR7bWF0Y2hQYWRbM119ICR7bWF0Y2hQYWRbNF19ICR7bWF0Y2hQYWRbNV19PGJyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZFszXSA9PSAnUm91bmRSZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBraWNhZCBtYWNybyBzY2hudWxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBjYi5hZGRQYWRTdHlsZShtYXRjaFBhZFsyXSwgbWF0Y2hQYWRbM10sIE1hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hQYWRbNV0pKSwgTWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs2XSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdlcmJlcjogc3R5bGUgJHttYXRjaFBhZFsyXX0sJHttYXRjaFBhZFszXX0sICR7TWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs1XSkpfSwgJHtNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzZdKSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wY2IuYWRkUGFkU3R5bGUobWF0Y2hQYWRbMl0sIG1hdGNoUGFkWzNdLCBwYXJzZUZsb2F0KG1hdGNoUGFkWzRdKSwgcGFyc2VGbG9hdChtYXRjaFBhZFs1XSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyOiBzdHlsZSAke21hdGNoUGFkWzJdfSwke21hdGNoUGFkWzNdfSwgJHtwYXJzZUZsb2F0KG1hdGNoUGFkWzRdKX0sICR7cGFyc2VGbG9hdChtYXRjaFBhZFs1XSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIER4eCogY29tbWFuZCAtIHNob3VsZCBiZSBwYWQgZHJhd1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hQYWRDb29yZEluaXQgPSB0aGlzLnJlTWF0Y2hQYWRDb29yZEluaXQuZXhlYyhsaW5lKTsgLy9saW5lLm1hdGNoKCk7Ly8vKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoUGFkQ29vcmRJbml0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWQgPSBtYXRjaFBhZENvb3JkSW5pdFsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGEgcGFkIGxpbmU6IFwiWDM3OTk4NFk5NjM5MzBEMDMqXCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoUGFkQ29vcmQgPSB0aGlzLnJlTWF0Y2hQYWRDb29yZC5leGVjKGxpbmUpOyAvLyBsaW5lLm1hdGNoKCk7Ly8vKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdFBhZC5zdGFydHNXaXRoKCdEJykpIHsgLy8gaWdub3JlIEczNiBvciBzbyBjb21tYW5kc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgYW5kIHJldHVybiAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaFBhZENvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN4ID0gbWF0Y2hQYWRDb29yZFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN5ID0gbWF0Y2hQYWRDb29yZFs0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5mbG9hdERlemlzICsgdGhpcy5mbG9hdEZyYWN0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlsbCBmcmVhaydzIGxlYWRpbmcgemVyb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN4Lmxlbmd0aCA8IGxlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ggPSBgMCR7c3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3kubGVuZ3RoIDwgbGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeSA9IGAwJHtzeX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYSBmcmVhayduIGZsb2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmeCA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ5ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeCA9IGAke3N4LnN1YnN0cmluZygwLCB0aGlzLmZsb2F0RGV6aXMpfS4ke3N4LnN1YnN0cmluZyh0aGlzLmZsb2F0RGV6aXMpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5ID0gYCR7c3kuc3Vic3RyaW5nKDAsIHRoaXMuZmxvYXREZXppcyl9LiR7c3kuc3Vic3RyaW5nKHRoaXMuZmxvYXREZXppcyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnggPSBwYXJzZUZsb2F0KHN4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnkgPSBwYXJzZUZsb2F0KHN5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmRbMV0gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeCA9IGZ4ICogLTEuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRDb29yZFszXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ5ID0gZnkgKiAtMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeSA9IGZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29yZHNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZHNGaWVsZC5pbm5lckhUTUwgKz0gYCR7dGhpcy5sYXN0UGFkfTogIHg6JHtmeH0geToke2Z5fSA8YnI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBjYi5hZGRQYWQodGhpcy5sYXN0UGFkLCBmeCwgZnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyOiBwYWQgJHtsYXN0UGFkfSwgJHtmeH0sICR7Znl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlnbm9yaW5nICR7dGhpcy5sYXN0UGFkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYobGluZU5yID4gMTUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBicmVhazsgLy8gZm9yIHRlc3RpbmcgISEhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBjYi5jZW50ZXIoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCAwKTsgLy8gdGhpcyBlbmFibGVzIHRoZSBwcm9ncmVzc2JhciAvIFVJIHVwZGF0ZXMgIVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBmb3VuZCBvbiBzZSB3ZWIuLi5cclxuXHJcbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyLCBlbmNvZGluZywgY2FsbGJhY2spIHtcclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pO1xyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKGV2dCkgPT4geyBpZihldnQudGFyZ2V0KSBjYWxsYmFjayhldnQudGFyZ2V0LnJlc3VsdCk7IH07XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iLCBlbmNvZGluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXlCdWZmZXIoc3RyaW5nLCBlbmNvZGluZywgY2FsbGJhY2spIHtcclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3N0cmluZ10sIHsgdHlwZTogJ3RleHQvcGxhaW47Y2hhcnNldD0nICsgZW5jb2RpbmcgfSk7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZ0KSA9PiB7IGlmKGV2dC50YXJnZXQpIGNhbGxiYWNrKGV2dC50YXJnZXQucmVzdWx0KTsgfTtcclxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQQ0IgfSBmcm9tICcuL3BjYic7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIHB1YmxpYyBwcm9jZXNzQ0I6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBwYWRzRmllbGQ6IEhUTUxFbGVtZW50fG51bGw7XHJcbiAgICBwdWJsaWMgY29vcmRzRmllbGQ6IEhUTUxFbGVtZW50fG51bGw7XHJcblxyXG4gICAgcHVibGljIHBjYjogUENCO1xyXG4gICAgY29uc3RydWN0b3IocGNiOiBQQ0IpIHtcclxuICAgICAgICB0aGlzLnBjYiA9IHBjYjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2VGaWxlPyhmaWxlOiBGaWxlKTpQcm9taXNlPHZvaWQ+OyAvLyB2aXJ0dWFsICFcclxuICAgIHB1YmxpYyBjYW5jZWw/KCk6IHZvaWQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LkhBU0hfUkVGXzdjMGFmODFhZjQyNmUxODMuanMubWFwIn0=
