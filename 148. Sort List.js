/**
 * Solution 2: merge sort on LinkedList, >35%
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
    if (!head || !head.next) return head;
    // split into tow
    let fast = head;
    let slow = head;
    let prev = null;

    while (fast && fast.next) { // move fast pointer
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null; // disconnect first half
    let head1 = sortList(head);
    let head2 = sortList(slow);
    return mergeSort(head1, head2);
};

let mergeSort = (head1, head2) => {
    let head = new ListNode();
    let ret = head;
    while (head1 && head2) {
        if (head1.val < head2.val) {
            head.next = head1;
            head1 = head1.next;
        } else {
            head.next = head2;
            head2 = head2.next;
        }
        head = head.next;
    }
    head.next = head1 || head2;
    return ret.next;
};

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
