/**
 * Solution 2: medium solution,, beats 50%
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
var deleteDuplicates = function (head) {
    let h = head;
    while (head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return h
};

/**
 * Solution 1: slow solution, beats 10%
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
var deleteDuplicates = function (head) {
    let h = head;
    while (head && head.next) {
        let next = head.next
        while (next && next.val === head.val) {
            next = next.next
        }
        head.next = next
        head = head.next
    }
    return h
};
