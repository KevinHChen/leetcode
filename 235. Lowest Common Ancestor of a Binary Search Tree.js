/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * It finds the lowest common ancestor of two nodes in a binary search tree.
 * The function takes the root of the tree and two nodes as input.
 * It uses a while loop to traverse the tree.
 * If both nodes are less than the current node, it moves to the left child.
 * If both nodes are greater than the current node, it moves to the right child.
 * If one node is less than the current node and the other is greater, it returns the current node as the lowest common ancestor.
 * 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while (root != null) {
        if (p.val < root.val && q.val < root.val) root = root.left
        else if (p.val > root.val && q.val > root.val) root = root.right
        else return root
    }
};