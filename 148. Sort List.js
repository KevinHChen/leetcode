/**
 * Solution 1: >27%. Collect, sort and re-generate list
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
var sortList = function (head) {
    const collector = [];
    while (head) {
        collector.push(head.val);
        head = head.next;
    }
    collector.sort((a, b) => a - b);

    let curr = null;

    while (collector.length != 0) {
        if (!curr) {
            curr = new ListNode(collector.pop(), null);
        } else {
            let node = new ListNode(collector.pop(), curr)
            curr = node;
        }
    }
    return curr;

};
