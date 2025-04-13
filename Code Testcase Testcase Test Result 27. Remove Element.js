/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let toInsert = 0;
    let curr = 0;
    while (curr < nums.length) {
        if (nums[curr] == val) {
            curr++
        } else {
            nums[toInsert++] = nums[curr++]
        }
    }
    return toInsert;
};
