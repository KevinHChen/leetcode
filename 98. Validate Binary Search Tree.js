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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) return true

    let stack = [root]
    let curr = root.left
    let preVal = - Infinity
    while (stack.length != 0 || curr!==null) {
        while (curr!==null) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()

        if (curr.val <= preVal) return false
        preVal = curr.val
        
        curr = curr.right
    }
    return true
};
