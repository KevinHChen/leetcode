/**
 * It rotates the array twice
 * The first time it reverses the entire array
 * The second time it reverses the first k elements
 * The third time it reverses the last
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    // If k is greater than the length of the array, we need to take the modulus
    k = k % nums.length

    var _rotate = function (nums, left, right) {
        while (left < right) {
            let temp = nums[left]
            nums[left++] = nums[right]
            nums[right--] = temp
        }
    }

    _rotate(nums, 0, nums.length - 1)
    _rotate(nums, 0, k - 1)
    _rotate(nums, k, nums.length - 1)
};