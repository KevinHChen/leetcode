/**
 * Solution:
 * It is a fast solution that uses a deque to keep track of the maximum values in the sliding window.
 * It uses a deque to keep track of the `indices` of the maximum values in the sliding window.
 * It uses a while loop to remove elements from the front of the deque that are outside (deque[0] <= i - windowSize) the current window.
 * It uses a while loop to remove elements from the back of the deque that are less than the current element (nums[i]) to maintain the order of the deque.
 * It pushes the current index (i) to the back of the deque only when the current index is greater than or equal to the window size (i >= windowSize - 1).
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let mw = []
  let result = []

  for (let i = 0; i < nums.length; ++i) {
      while (mw.length > 0 && mw[0] <= i - k) {
          mw.shift()
      }
      while (mw.length > 0 && nums[mw[mw.length - 1]] < nums[i]) {
          mw.pop()
      }
      mw.push(i)
      if (i >= k - 1) {
          result.push(nums[mw[0]])
      }
  }
  return result
};