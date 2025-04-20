/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * 
 * It uses an iterative in-order traversal to find the kth smallest element in a binary search tree.
 * The kth smallest element is the kth element in the in-order traversal of the tree.
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let stack = [root]
    let current = root.left

    while (stack.length !== 0 || current !== null) {
        while (current !== null) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()

        // Decrement k for each node visited
        k--
        // If k is 0, we have found the kth smallest element
        // Return the value of the current node
        if (k == 0) {
            return current.val
        }
        current = current.right
    }
};