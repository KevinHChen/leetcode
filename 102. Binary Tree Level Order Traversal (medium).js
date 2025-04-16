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
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (root == null) {
        return []
    }

    let result = []

    let curr = [root]
    while (curr.length != 0) {
        let next = [] // collect nodes in the lower layer
        let currValues = [] // collect results from current layer
        for (node of curr) {
            currValues.push(node.val)
            if (node.left != null) {
                next.push(node.left)
            }
            if (node.right != null) {
                next.push(node.right)
            }
        }
        result.push(currValues)
        curr = next;
        next = []
    }

    return result

};
