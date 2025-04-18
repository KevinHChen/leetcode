/**
 * This function uses a greedy approach to determine if you can reach the last index of the array.
 * It iterates through the array, keeping track of the maximum reachable index at each step.
 * If at any point the current index exceeds the maximum reachable index, it returns false.
 * If the loop completes, it returns true, indicating that the last index is reachable.
 * This is a more efficient solution than the second one.
 * The time complexity is O(n) and the space complexity is O(1).
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Greedy solution
  let maxReachable = 0

  for (let i = 0; i < nums.length; ++i) {
      if (i > maxReachable) return false
      maxReachable = Math.max(maxReachable, i + nums[i])
  }
  return true;
};

/**
 * This function is slower than the greedy approach but is easier to understand.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reachable = new Array(nums.length).fill(false)
  reachable[0] = true

  for (let i = 0; i < nums.length; ++i) {
      const num = nums[i]
      if (!reachable[i]) continue

      for (let j = num; j > 0; --j) {
          reachable[i + j] = true
          if (i + j == nums.length - 1) return true
      }
  }
  return reachable[nums.length - 1]
};