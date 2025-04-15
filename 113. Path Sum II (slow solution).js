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
 * @param {number} targetSum
 * @return {boolean}
 */
var pathSum = function (root, targetSum) {
    if (root === null) {
        return [];
    }
    let result = []
    pathSum1(root, targetSum, [], result);
    return result;
};

var pathSum1 = function (root, targetSum, path, result) {
    if (root.left === null && root.right === null && targetSum == root.val) {
        result.push([...path, root.val])
        return
    }
    let left = false;
    let right = false;
    if (root.left !== null) left = pathSum1(root.left, targetSum - root.val, [...path, root.val], result)
    if (root.right !== null) right = pathSum1(root.right, targetSum - root.val, [...path, root.val], result)
    return
};
