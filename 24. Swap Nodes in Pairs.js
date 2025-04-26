/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    let backtrack = function(head) {
        // no remaining node
        if (head === null) return head
        // one remaining node
        if (head && head.next ===null) return head

        // reverse the remaining list nodes, return the head of the remaining
        let remain = backtrack(head.next.next)

        // swap the first and second nodes. Here we know head and head.next wont' be null
        let newhead = head.next
        head.next.next = head
        head.next = remain
        return newhead
    }

    return backtrack(head)
};
