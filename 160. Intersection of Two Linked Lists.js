/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // if (headA == null) return null

    let tempA = headA
    let tempB = headB
    let lenA = 0
    let lenB = 0
    // calc the length of linkedlist A and B
    while (tempA != null) {
        lenA++
        tempA = tempA.next
    }
    while (tempB != null) {
        lenB++
        tempB = tempB.next
    }
    let diff = Math.abs(lenA - lenB)

    if (lenA > lenB) {
        tempA = headA
        tempB = headB
    } else {
        tempA = headB
        tempB = headA
    }

    // now tempA is always the longer linked list

    // move tempA linkedlist "diff" steps forward
    while (diff > 0) {
        tempA = tempA.next
        diff--
    }

    while (tempA != null) {
        if (tempA === tempB) {
            return tempA
        }
        tempA = tempA.next
        tempB = tempB.next
    }
    return null
};
