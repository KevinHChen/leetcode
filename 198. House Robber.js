/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length == 2) return Math.max(nums[0], nums[1])

  let maxTillHere = new Array(nums.length)
  maxTillHere[0] = nums[0]
  maxTillHere[1] = Math.max(nums[0], nums[1])

  let maxVal = 0

  for (let i = 2; i < nums.length; ++i) {
      maxTillHere[i] = Math.max(maxTillHere[i - 2] + nums[i], maxTillHere[i - 1])
      maxVal = Math.max(maxVal, maxTillHere[i])
  }

  return maxVal

};