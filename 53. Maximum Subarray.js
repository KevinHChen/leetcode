/**
 * Solution 1: slow (>=7%)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let largestSumTillNow = new Array(nums.length).fill(-Infinity)

    largestSumTillNow[0] = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        if (largestSumTillNow[i - 1] + nums[i] < 0) 
            largestSumTillNow[i] = nums[i]
        else 
            largestSumTillNow[i] = Math.max(largestSumTillNow[i - 1] + nums[i], nums[i])
    }

    return Math.max(...largestSumTillNow)
};
