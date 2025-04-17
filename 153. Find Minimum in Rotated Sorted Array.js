/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let startPos = 0
    let endPos = nums.length - 1
    let rotated = false

    while (startPos <= endPos) {
        if (startPos == endPos) {
            return nums[startPos]
        } else if (startPos + 1 == endPos) {
            return Math.min(nums[startPos], nums[endPos])
        }

        rotated = nums[startPos] > nums[endPos]
        midPos = startPos + Math.floor((endPos - startPos) / 2) // don't forget the `startPos` here

        const leftVal = nums[startPos]
        const rightVal = nums[endPos]
        const midVal = nums[midPos]

        if (rotated) {
            if (midVal >= leftVal) { // example: 3,4,5,1,2
                startPos = midPos + 1
            } else { // example: 4,0,1,2,3
                endPos = midPos
            }
        } else { // example: 1,2,3,4,5
            return nums[startPos]
        }
    }
};
