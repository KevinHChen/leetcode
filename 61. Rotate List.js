/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let curr = head
    let listLen = 0

    // calc list len
    while (curr != null) {
        listLen++
        curr = curr.next;
    }
    // handle overflow case
    k = k % listLen

    // move "curr" point n steps ahead of head
    let cnt = 0
    curr = head
    while (cnt < k && curr != null) {
        cnt++;
        curr = curr.next;
    }

    // loop until "curr" point to the end of the list
    // and "prev".next shall be the new head
    let prev = head;
    while (curr != null && curr.next != null) {
        curr = curr.next
        prev = prev.next
    }

    // handle the case of head=null
    if (curr == null)
        return null

    // concat the old end to the old head
    curr.next = head
    let newHead = prev.next
    // unlink the k-1 node from the k-th node
    prev.next = null

    return newHead;

};
