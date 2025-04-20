/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * It is guaranteed that the product of the elements of any prefix or suffix of nums does not exceed 231 - 1 in absolute value.
 * 
 * Solution: 
 * 1. Create an array result of the same length as nums.
 * 2. Initialize a variable preval to 1.
 * 3. Loop through the nums array from left to right:
 *   - Set result[i] to preval.
 *  - Multiply preval by nums[i].
 * 4. Reset preval to 1.
 * 5. Loop through the nums array from right to left:
 *  - Multiply result[i] by preval.
 *  - Multiply preval by nums[i].
 * 6. Return the result array.
 * The time complexity of this algorithm is O(n), where n is the length of the input array nums. The space complexity is O(1) since we are using a constant amount of extra space for the preval variable and the result array.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  //                          [1, 2, 3, 4]
  // first loop:              [1, 1, 2, 6]
  // second (reverse) loop:   [24,12,4, 1]
  // result:                  [24,12,8, 6]

  let result = new Array(nums.length)
  let preval = 1

  for (let i = 0; i < nums.length; ++i) {
      result[i] = preval
      preval *= nums[i]
  }

  preval = 1
  for (let i = nums.length - 1; i >= 0; --i) {
      result[i] *= preval
      preval *= nums[i]
  }

  return result
};
