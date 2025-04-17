/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length == 1) return 0

    let left = 0
    let right = nums.length - 1

    while (left < right) {

        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > nums[mid + 1]) {
            right = mid // because mid pos may hold the peak value
        } else {
            left = mid + 1 // because mid pos won't hold the peak value, as nums[mid]<nums[mid+1]
        }
    }
    return left // it seems like binary search should always return left as default

};
