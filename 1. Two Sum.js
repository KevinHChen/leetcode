/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    hashed = {}
    for (let i=0; i<nums.length; ++i) {
        const num = nums[i]
        if (hashed.hasOwnProperty(target-num)) {
            return [i, hashed[target-num]]
        }
        hashed[num] = i
    }
};