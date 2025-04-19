/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Version2: It is an iterative problem where we need to reverse a linked list.
 * We can solve this problem using iteration by keeping track of the previous node, the current node, and the next node.
 * We can use a while loop to iterate through the linked list and reverse the pointers of each node.
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let curr = head

  while (curr != null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }
  return prev
};

/**
 * Version1: It is a recursive problem where we need to reverse a linked list.
 * We can solve this problem using recursion by keeping track of the new head of the reversed linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head==null) return null
    
    let newHead = null

    var reverse = function(head) {
        // when it reaches to the end of the list
        // it will return the last node as the tail
        if (head.next==null) {
            newHead = head
            return head
        }

        // recursively call the function with the next node
        let tail = reverse(head.next)
        // reverse the current node
        tail.next = head
        head.next = null
        // return the tail of the reversed list
        return head
    }
    
    reverse(head)
    
    return newHead;
};