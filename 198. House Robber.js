/**
 * It is a dynamic programming problem where we need to find the maximum amount of money we can rob from a series of houses, given that we cannot rob two adjacent houses.
 * We can solve this problem using dynamic programming by keeping track of the maximum amount of money we can rob up to each house.
 * We can use an array to store the maximum amount of money we can rob up to each house, and then iterate through the array to find the maximum amount of money we can rob.
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length == 2) return Math.max(nums[0], nums[1])

  let maxTillHere = new Array(nums.length)
  maxTillHere[0] = nums[0]
  maxTillHere[1] = Math.max(nums[0], nums[1])

  // Iterate through the array and calculate the maximum amount of money we can rob up to each house
  // We can either rob the current house and add it to the maximum amount of money we can rob up to the house before the previous one
  // or we can skip the current house and take the maximum amount of money we can rob up to the previous house
  // We take the maximum of these two options
  // and store it in the maxTillHere array
  for (let i = 2; i < nums.length; ++i) {
      maxTillHere[i] = Math.max(maxTillHere[i - 2] + nums[i], maxTillHere[i - 1])
  }

  return Math.max(maxTillHere[nums.length-2], maxTillHere[nums.length-1])

};