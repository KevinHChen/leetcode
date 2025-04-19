/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/** Version: 1, beats 75% of JS submissions
 * It uses a stack to store the nodes of the tree in a way that allows us to traverse the tree in order.
 * The stack is used to keep track of the nodes that we need to visit next, and the current pointer is used to keep track of the current node.
 * The nextNode function is used to find the next node in the tree that we need to visit.
 * The hasNext function checks if there are any more nodes to visit in the tree.
 * The next function returns the value of the next node in the tree.
 * 
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = [root]
    // `current` is used to keep track of the current node that we are visiting
    this.current = root.left
    // currentVal keeps the value of the last visited node
    // It's set by hasNext() and used by the following next() called
    // However, if hasNext() is not called before next(), the next() will call nextNode() directly to get the next node
    // Once used, currentVal is set to null
    this.currentVal = null
};

/**
 * It returns the value of the next node in the tree.
 * It does this by returning the value of the currentVal if it is not null.
 * If currentVal is null, it calls the nextNode function to find the next node in the tree.
 * It then sets the currentVal to null and returns the value of the next node.
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const val = this.currentVal == null ? this.nextNode().val : this.currentVal
    this.currentVal = null
    return val
};

/**
 * It checks if there are any more nodes to visit in the tree.
 * It does this by calling the nextNode function to find the next node in the tree.
 * If there is a next node, it sets the currentVal to the value of that node and returns true.
 * If there is no next node, it returns false.
 * 
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    let nextNode = this.nextNode()
    if (nextNode !== undefined) {
        this.currentVal = nextNode.val
    }
    return nextNode !== undefined
};

BSTIterator.prototype.nextNode = function () {
    while (this.stack.length != 0 || this.current != null) {
        while (this.current != null) {
            this.stack.push(this.current)
            this.current = this.current.left
        }
        let node = this.stack.pop()
        this.current = node.right
        return node
    }
    return undefined
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */