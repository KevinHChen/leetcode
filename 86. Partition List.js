/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let beforeVal = new ListNode() // nodes less then x
    let afterVal = new ListNode()  // nodes greater then or equal to x
    let before = beforeVal
    let after = afterVal

    while (head) {
        if (head.val<x) {
            before.next=head
            before=before.next
        } else {
            after.next=head
            after=after.next
        }
        head=head.next
    }
    after.next=null
    before.next=afterVal.next
    return beforeVal.next
};
