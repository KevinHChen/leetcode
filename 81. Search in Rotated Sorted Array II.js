/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length-1

    if (nums[left]==nums[right]) {
        left++
        right--
    }

    while (left<=right) {
        let mid = Math.floor((left+right)/2)
        if (nums[mid] === target) {
            return true
        }
        // the key is to find out 
        // (1) which half is sorted
        // (2) is the target in the sorted half or non-sorted half
        if (nums[left]<=nums[mid]) {
            // left half is sorted
            if (nums[left]<=target && target<nums[mid]) {
                // if target in the left
                right = mid -1
            } else {
                left = mid +1
            }
        } else {
            // right half is sorted
            if (nums[mid]<target && target<=mid[right]) {
                left = mid +1
            } else {
                right = mid -1
            }
        }
    }


    return false
};
