/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * It deletes a node from a singly linked list given only access to that node.
 * The node to be deleted is guaranteed not to be the tail node in the list.
 * 
 * Since we are not given access to the head of the list, we cannot traverse the list to find the previous node.
 * Instead, we can copy the value of the next node into the current node and then delete the next node (by node.next = node.next.next).
 * This effectively removes the current node from the list without needing to access the head.
 * 
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};