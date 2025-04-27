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
 * @return {number}
 */
var sumNumbers = function(root) {
    let result = 0;

    let backtrack = function(root, path) {
        if (root && !root.left && !root.right) {
            path.push(root.val)

            let val = path.reduce((accu, elem) => {
                accu = accu*10+elem
                return accu
            }, 0)
            result += val
        }
        if (root.left)  backtrack(root.left, [...path, root.val]) // attention: always add root.val, not root
        if (root.right) backtrack(root.right, [...path, root.val])
    }

    backtrack(root, [])
    return result
};
