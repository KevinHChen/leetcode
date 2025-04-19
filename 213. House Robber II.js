/**
 * It is a variation of the House Robber problem where the houses are arranged in a circle.
 * The robber cannot rob both the first and last house.
 * The solution involves two cases:
 * 1. Rob houses from the first to the second last house.
 * 2. Rob houses from the second to the last house.
 * The maximum amount robbed from both cases is returned.
 * The time complexity is O(n) and the space complexity is O(n).
 * 
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1])

    var _rob = function (nums) {
        let result = new Array(nums.length)
        result[0] = nums[0]
        result[1] = Math.max(nums[0], nums[1])
        for (let i = 2; i < nums.length; ++i) {
            result[i] = Math.max(result[i - 2] + nums[i], result[i - 1])
        }
        
        return result[result.length - 1]
    }

    return Math.max(_rob(nums.slice(0, nums.length - 1)), _rob(nums.slice(1)))
};