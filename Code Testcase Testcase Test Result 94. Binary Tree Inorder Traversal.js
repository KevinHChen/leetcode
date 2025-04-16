/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (root == null) { return [] }

    let stack = [root]
    let current = root.left // remember this
    let result = []

    while (stack.length != 0 || current != null) { // two conditions
        // goes to left-most
        while (current != null) {
            stack.push(current)
            current = current.left;
        }
        current = stack.pop() // handle top of the stack
        result.push(current.val)
        current = current.right; // go to right child

    }
    return result
};
