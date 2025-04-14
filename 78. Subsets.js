/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let max = 1 << nums.length
    let result = []
    for (let i = 0; i < max; ++i) {
        let temp = []
        for (let j = 0; j < nums.length; ++j) {
            if (bitIsOne(i, j)) {
                temp.push(nums[j])
            }
        }
        result.push(temp)
    }
    return result;
};

var bitIsOne = function (num, bit) {
    return (num & (1 << bit)) !== 0
}
