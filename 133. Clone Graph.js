/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    let created = new Map()

    let dfs = (node) => {
        // handle null 
        if (node === null) return null
        // if node was created, return it
        if (created.has(node.val)) return created.get(node.val)

        // clone current node
        let newNode = new _Node(node.val)
        created.set(node.val, newNode)
        node.neighbors?.forEach(neighbor => {
            newNode.neighbors.push(dfs(neighbor))
        })
        return newNode
    }
    return dfs(node)
};
