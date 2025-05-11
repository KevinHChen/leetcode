/**
 * Solution 2: similar to solution 1, not clear enough though, but one less 'if'
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
var rightSideView = function (root) {
    if (!root) return [];

    let prev = [root];
    let curr = [];
    let result = []
    while (prev.length != 0) {

        let rightMost=null;
        
        while (prev.length != 0) {
            let node = prev.shift()
            // overwrite rightMost until the last node in the level
            rightMost=node.val
            if (node.left) curr.push(node.left)
            if (node.right) curr.push(node.right)
        }

        result.push(rightMost)
        prev = curr
        curr = []
    }
    return result
};

/**
 * Solution 1: a little messy, but fast
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
var rightSideView = function (root) {
    if (!root) return [];

    let prev = [root];
    let curr = [];
    let result = []
    while (prev.length != 0) {
        while (prev.length != 0) {
            if (prev.length == 1) {
                result.push(prev[0].val)
            }
            let node = prev.shift()
            if (node.left) curr.push(node.left)
            if (node.right) curr.push(node.right)
        }
        prev = [...curr]
        curr = []
    }
    return result
};
