/**
 * k-d Tree JavaScript - V 1.01
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

/* Issue "The remove method has errors" https://github.com/ubilabs/kd-tree-javascript/issues/25

 After having removed some nodes, they can still be found in the kdTree in some situations.

 Here is an example of the remove method errors:

 https://gist.github.com/santoxi/ba8d283f9a21523fa45d23d8e9c3046e

 as a temporary work-around, I added a fourth argument to "nearest" to pass a predicate to filter the matched nodes, which might be also useful to add:

     this.nearest = function (point, maxNodes, maxDistance, predicate) {
             predicate = predicate || (x => true);
 ....
         linearDistance = metric(linearPoint, node.obj);

         if (node.right === null && node.left === null) {
           if (predicate(node.obj) && (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1])) {
             saveNode(node, ownDistance);
           }
           return;
         }
 ....
         nearestSearch(bestChild);

         if (predicate(node.obj) && (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1])) {
           saveNode(node, ownDistance);
         }
         */

export class kdTreeObject { }

export class kdNode<T extends kdTreeObject> {
    obj: T;
    left: kdNode<T> | null;
    right: kdNode<T> | null;
    parent: kdNode<T>;
    dimension: number;
    constructor(obj: T, dimension: number, parent) {
        this.obj = obj;
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.dimension = dimension;
    }
}

export class kdTree<T extends kdTreeObject> {
    private _kdTreeObjectType: typeof kdTreeObject;

    points: T[];
    metric: (a: T, b: T) => number;
    dimensions: (keyof T)[];
    root: kdNode<T> | null;

    /**
     * Create a new tree from a list of points, a distance function, and a list of dimensions.
     * @param points
     * @param distance
     * @param dimensions
     */
    constructor(obj: typeof kdTreeObject, points: T[], distance: (a: T, b: T) => number, dimensions: Array<keyof T>) {
        this._kdTreeObjectType = obj;

        this.points = points;
        this.metric = distance;
        this.dimensions = dimensions;

        // If points is not an array, assume we're loading a pre-built tree
        if (!Array.isArray(points)) {
            this.loadTree(points);
        } else {
            this.root = this.buildTree(points, 0, null);
        }
    }

    private buildTree(points: T[], depth: number, parent: kdNode<T> | null): kdNode<T> | null {
        var dim = depth % this.dimensions.length;
        var median;
        var node: kdNode<T>;

        if (points.length === 0) {
            return null;
        }
        if (points.length === 1) {
            return new kdNode(points[0], dim, parent);
        }

        points.sort((a: T, b: T): number => {
            return <number>a[this.dimensions[dim]] - <number>b[this.dimensions[dim]]; // distance in the dimension
        });

        median = Math.floor(points.length / 2);

        // avoid having same coords on left and right tree !!!
        while(median > 0) {
            let newmedian = median - 1;
            if(points[median][this.dimensions[dim]] === points[newmedian][this.dimensions[dim]]) {
                // console.warn(`buildTree:split bloed ne ??? ${this.dimensions[dim]}`);
                median -= 1;
            } else {
                break;
            }
        }

        node = new kdNode(points[median], dim, parent);

        // console.log(`buildTree:split:dim:${this.dimensions[dim]} value:${points[median][this.dimensions[dim]]}`);
        // console.log(`buildTree:left:${depth}`, points.slice(0, median));
        // console.log(`buildTree:right${depth}`, points.slice(median + 1));

        node.left = this.buildTree(points.slice(0, median), depth + 1, node);
        node.right = this.buildTree(points.slice(median + 1), depth + 1, node);

        return node;
    }

    // Reloads a serialied tree
    private loadTree(data) {
        // Just need to restore the `parent` parameter
        this.root = data;

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

        restoreParent(this.root);
    }

    // Convert to a JSON serializable structure; this just requires removing
    // the `parent` property
    toJSON(src: kdNode<T> | null = this.root) {
        if (src === null) {
            return null;
        }
        var dest = new kdNode(src.obj, src.dimension, null);
        if (src.left) dest.left = this.toJSON(src.left);
        if (src.right) dest.right = this.toJSON(src.right);
        return dest;
    };

    /** returns a list of points in the subtree, exclusive the given node ! */
    toArray(src: kdNode<T> | null = this.root): T[] {
        let result:T[] = [];
        if (src === null) {
            return result;
        }
        if(src.left) {
            result.push(src.left.obj);
            result = [...result, ...this.toArray(src.left)];
        }
        if(src.right) {
            result.push(src.right.obj);
            result = [...result, ...this.toArray(src.right)];
        }
        return result;
    }

    private innerSearch(point, node, parent) {
        if (node === null) {
            return parent;
        }

        var dimension = this.dimensions[node.dimension];
        if (point[dimension] < node.obj[dimension]) {
            return this.innerSearch(point, node.left, node);
        } else {
            return this.innerSearch(point, node.right, node);
        }
    }

    public insert(point) {
        var insertPosition = this.innerSearch(point, this.root, null),
            newkdNode,
            dimension;

        if (insertPosition === null) {
            this.root = new kdNode(point, 0, null);
            return;
        }

        newkdNode = new kdNode(point, (insertPosition.dimension + 1) % this.dimensions.length, insertPosition);
        dimension = this.dimensions[insertPosition.dimension];

        if (point[dimension] < insertPosition.obj[dimension]) {
            insertPosition.left = newkdNode;
        } else {
            insertPosition.right = newkdNode;
        }
    };

    private nodeSearch(point: T, node: kdNode<T> | null) {
        if (node === null) {
            return null;
        }

        if (node.obj === point) {
            return node;
        } else {
            // equality check ??? will it work on floats ??? // not the problem, it does not find a candidate !!! uuuhhh
            let met = this.metric(node.obj, point);
            // console.log('kdTree:nodeSearch', met);
        }

        var dimension = this.dimensions[node.dimension];

        // uuuhhh looking at the tree I see left <= obj[dim],
        // no actually the array splitting has nothing to do with this comparision, can be either way !!!
        if (point[dimension] < node.obj[dimension]) {  // original <
            // console.log(`kdTree:nodeSearch left ${point[dimension]} <=? ${node.obj[dimension]}`);
            return this.nodeSearch(point, node.left);
        } else {
            // console.log(`kdTree:nodeSearch right ${point[dimension]} >? ${node.obj[dimension]}`);
            return this.nodeSearch(point, node.right);
        }
    }

    private findMin(node: kdNode<T> | null, dim: number): kdNode<T> | null {
        var dimension: any;
        var own: number;
        var left;
        var right;
        var min: kdNode<T>;

        if (node === null) {
            return null;
        }

        dimension = this.dimensions[dim];

        if (node.dimension === dim) {
            if (node.left !== null) {
                return this.findMin(node.left, dim);
            }
            return node;
        }

        own = node.obj[dimension];
        left = this.findMin(node.left, dim);
        right = this.findMin(node.right, dim);
        min = node;

        if (left !== null && left.obj[dimension] < own) {
            min = left;
        }
        if (right !== null && right.obj[dimension] < min.obj[dimension]) {
            min = right;
        }
        return min;
    }

    private findMax(node: kdNode<T>, dim: number): kdNode<T> {
        var dimension: any;
        var own: number;
        var left: kdNode<T> | null = null;
        var right: kdNode<T> | null = null;
        var max: kdNode<T>;

        dimension = this.dimensions[dim];

        if (node.dimension === dim) {
            if (node.left !== null) {
                return this.findMax(node.left, dim);
            }
            return node;
        }

        own = node.obj[dimension];
        if (node.left) {
            left = this.findMax(node.left, dim);
        }
        if (node.right) {
            right = this.findMax(node.right, dim);
        }
        max = node;

        if (left !== null && left.obj[dimension] > own) {
            max = left;
        }
        if (right !== null && right.obj[dimension] > max.obj[dimension]) {
            max = right;
        }
        return max;
    }

    private removeNode(node: kdNode<T> | null) {
        var nextNode: kdNode<T> | null;
        var nextObj: T;
        var pDimension: any;

        if (node === null) {
            return
        }

        if (node.left === null && node.right === null) {
            if (node.parent === null) {
                this.root = null;
                return;
            }

            pDimension = this.dimensions[node.parent.dimension];

            if (node.obj[pDimension] <= node.parent.obj[pDimension]) { //orig <
                node.parent.left = null;
            } else {
                node.parent.right = null;
            }
            return;
        }

        // If the right subtree is not empty, swap with the minimum element on the
        // node's dimension. If it is empty, we swap the left and right subtrees and
        // do the same.
        if (node.right !== null) { // orig right
            nextNode = this.findMin(node.right, node.dimension); // orig right, findMin
            nextObj = nextNode.obj;
            this.removeNode(nextNode);
            node.obj = nextObj;
        } else if (node.left !== null) { // makes typescript happy
            nextNode = this.findMin(node.left, node.dimension); // orig left, findMin
            nextObj = nextNode.obj;
            this.removeNode(nextNode);
            node.right = node.left; // orig right = left
            node.left = null; //orig left
            node.obj = nextObj;
        }

    }

    public remove(point: T): boolean {
        var node: kdNode<T> | null;

        // console.log('kdTree:remove searching:', point);
        node = this.nodeSearch(point, this.root);

        if (node === null) {
            console.warn("kdTree:remove:kack'n'shit");
            return false;
        }

        // this.removeNode(node); // buggi

        // new tree rebuild
        const allchilds = this.toArray(node);
        let newnode = this.buildTree(allchilds, node.dimension, node.parent);
        // console.log('remove', node)
        // console.log('remove', allchilds);
        // console.log('remove', newnode);
        if(node.parent) {
            if(node.parent.left === node) {
                // console.log('remove im left');
                node.parent.left = newnode;
            } else if (node.parent.right === node) {
                // console.log('remove im right');
                node.parent.right = newnode;
            }
        } else {
            this.root = newnode; /// ???
        }

        return true;
    };

    private nearestSearch(data: { point: T, bestNodes: BinaryHeap<T>, maxNodes: number }, node:kdNode<T>) {
        let bestChild;
        let dimension = this.dimensions[node.dimension];
        let ownDistance = this.metric(data.point, node.obj);
        let linearPoint: T = <T>new this._kdTreeObjectType();
        var linearDistance;
        let otherChild;
        let i;

        // console.log(`kdTree:nearestSearch`, data);

        const saveNode = (node: kdNode<T>, distance: number) => {
            data.bestNodes.push([node, distance]);
            if (data.bestNodes.size() > data.maxNodes) {
                data.bestNodes.pop(); // endless loop here !!!
            }
        }

        for (i = 0; i < this.dimensions.length; i += 1) {
            if (i === node.dimension) {
                linearPoint[this.dimensions[i]] = data.point[this.dimensions[i]];
            } else {
                linearPoint[this.dimensions[i]] = node.obj[this.dimensions[i]];
            }
        }

        linearDistance = this.metric(linearPoint, node.obj);

        if (node.right === null && node.left === null) {
            if (data.bestNodes.size() < data.maxNodes || ownDistance < data.bestNodes.peek()[1]) {
                saveNode(node, ownDistance);
            }
            return;
        }

        if (node.right === null) {
            bestChild = node.left;
        } else if (node.left === null) {
            bestChild = node.right;
        } else {
            if (data.point[dimension] < node.obj[dimension]) {
                bestChild = node.left;
            } else {
                bestChild = node.right;
            }
        }

        this.nearestSearch(data, bestChild);

        if (data.bestNodes.size() < data.maxNodes || ownDistance < data.bestNodes.peek()[1]) {
            saveNode(node, ownDistance);
        }

        if (data.bestNodes.size() < data.maxNodes || Math.abs(linearDistance) < data.bestNodes.peek()[1]) {
            if (bestChild === node.left) {
                otherChild = node.right;
            } else {
                otherChild = node.left;
            }
            if (otherChild !== null) {
                this.nearestSearch(data, otherChild);
            }
        }
    }

    nearest(point: T, maxNodes: number, maxDistance?: number) {
        let i;
        let result: any[] = [];
        let bestNodes: BinaryHeap<T>;

        bestNodes = new BinaryHeap(
            (e) => { return -e[1]; }
        );

        if (maxDistance) {
            console.log('kdTree:nearest, maxnodes', maxNodes);
            for (i = 0; i < maxNodes; i += 1) {
                bestNodes.push([null, maxDistance]);
            }
        }

        if (this.root) {
            this.nearestSearch({ point, bestNodes, maxNodes }, this.root);
        }

        result = [];

        for (i = 0; i < Math.min(maxNodes, bestNodes.content.length); i += 1) {
            if (bestNodes.content[i][0]) {
                result.push([bestNodes.content[i][0].obj, bestNodes.content[i][1]]);
            }
        }
        return result;
    };

    balanceFactor() {
        const height = (node: kdNode<T> | null) => {
            if (node === null) {
                return 0;
            }
            return Math.max(height(node.left), height(node.right)) + 1;
        }

        const count = (node: kdNode<T> | null) => {
            if (node === null) {
                return 0;
            }
            return count(node.left) + count(node.right) + 1;
        }

        return height(this.root) / (Math.log(count(this.root)) / Math.log(2));
    };
}



















// Binary heap implementation from:
// http://eloquentjavascript.net/appendix2.html

export class BinaryHeap<T extends kdTreeObject> {
    content: [node: kdNode<T> | null, distance: number][];
    scoreFunction: any;
    constructor(scoreFunction) {
        this.content = [];
        this.scoreFunction = scoreFunction;
    }

    push(element: [node: kdNode<T> | null, distance: number]) {
        // Add the new element to the end of the array.
        this.content.push(element);
        // Allow it to bubble up.
        this.bubbleUp(this.content.length - 1);
    }

    pop() {
        // Store the first element so we can return it later.
        var result = this.content[0];
        // Get the element at the end of the array.
        var end = this.content.pop();
        // If there are any elements left, put the end element at the
        // start, and let it sink down.
        if (end && this.content.length > 0) {
            this.content[0] = end;
            this.sinkDown(0);
        }
        return result;
    }

    peek() {
        return this.content[0];
    }

    remove(node) {
        var len = this.content.length;
        // To remove a value, we must search through the array to find
        // it.
        for (var i = 0; i < len; i++) {
            if (this.content[i] == node) {
                // When it is found, the process seen in 'pop' is repeated
                // to fill up the hole.
                var end = this.content.pop();
                if (end && i != len - 1) {
                    this.content[i] = end;
                    if (this.scoreFunction(end) < this.scoreFunction(node))
                        this.bubbleUp(i);
                    else
                        this.sinkDown(i);
                }
                return;
            }
        }
        throw new Error("kdNode not found.");
    }

    size() {
        return this.content.length;
    }

    bubbleUp(n) {
        // Fetch the element that has to be moved.
        var element = this.content[n];
        // When at 0, an element can not go up any further.
        while (n > 0) {
            // Compute the parent element's index, and fetch it.
            var parentN = Math.floor((n + 1) / 2) - 1,
                parent = this.content[parentN];
            // Swap the elements if the parent is greater.
            if (this.scoreFunction(element) < this.scoreFunction(parent)) {
                this.content[parentN] = element;
                this.content[n] = parent;
                // Update 'n' to continue at the new position.
                n = parentN;
            }
            // Found a parent that is less, no need to move it further.
            else {
                break;
            }
        }
    }

    sinkDown(n) {
        // Look up the target element and its score.
        var length = this.content.length,
            element = this.content[n],
            elemScore = this.scoreFunction(element);

        while (true) {
            // Compute the indices of the child elements.
            var child2N = (n + 1) * 2;
            var child1N = child2N - 1;
            // This is used to store the new position of the element,
            // if any.
            var swap: number | null = null;
            // If the first child exists (is inside the array)...
            if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N],
                    child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore)
                    swap = child1N;
            }
            // Do the same checks for the other child.
            if (child2N < length) {
                var child2 = this.content[child2N],
                    child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score)) {
                    swap = child2N;
                }
            }

            // If the element needs to be moved, swap it, and continue.
            if (swap != null) {
                this.content[n] = this.content[swap];
                this.content[swap] = element;
                n = swap;
            }
            // Otherwise, we are done.
            else {
                break;
            }
        }
    }
}

exports.kdTree = kdTree;
exports.BinaryHeap = BinaryHeap;

