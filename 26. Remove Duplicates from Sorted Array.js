/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let toCompare=0;
    let curr = 1;
    while (curr < nums.length) {
        if(nums[toCompare] == nums[curr]) {
            curr++
        } else {
            nums[++toCompare] = nums[curr]
        }
    }
    return toCompare+1
};
