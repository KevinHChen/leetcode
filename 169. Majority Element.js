/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major=nums[0]
    let cnt=1

    for (let i=1;i<nums.length;++i) {
        if (cnt==0) {
            major=nums[i]
            cnt++
        } else if (major!=nums[i]) {
            cnt--
        } else {
            cnt++
        }
    }
    return major
};