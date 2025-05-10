/**
 * Solution 3, reasonable
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = nums[0]
    let maxSum= nums[0]

    for (let i=1;i<nums.length;++i) {
        sum = Math.max(nums[i], sum+nums[i])
        maxSum = Math.max(sum, maxSum)
    }

    return maxSum
};

/**
 * Solution 2: simplified dp, still very slow
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = new Array(nums.length).fill(-Infinity)
    let maxSum = nums[0]

    sum[0] = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        sum[i] = Math.max(sum[i - 1] + nums[i], nums[i])
        maxSum = Math.max(maxSum, sum[i])
    }
    return maxSum
};

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
