/**
 * It uses two pointers to keep track of the current index and the index to insert the next unique element.
 * The first pointer iterates through the array, while the toInsert pointer keeps track of the position to insert the next unique element.
 * It consistent with the "Remove Duplicates from Sorted Array II" problem, which allows at most two occurrences of each element in the sorted array.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let toInsert = 1
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] != nums[toInsert - 1]) {
            nums[toInsert] = nums[i]
            toInsert++
        }
    }
    return toInsert
};

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
