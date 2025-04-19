/**
 * Version2: This solution works for all cases.
 * It finds the longest consecutive sequence in an array of integers.
 * It uses a set to store the numbers and their presence in the array.
 * For each number in the set, it checks if the previous number exists.
 * If it doesn't, it starts counting the consecutive numbers from that number.
 * It keeps track of the longest sequence found.
 * This solution has a time complexity of O(n) and a space complexity of O(n).
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length ===0) return 0

    let set = new Set(nums) // Dedupe the numbers
    let longest = 0

    for (let num of set) {
        if (set.has(num-1)) continue // If the previous number exists, skip this number

        // If the previous number doesn't exist, start counting from this number
        // This is the start of a new sequence
        let cnt=1
        while (set.has(num+1)) {
            num++
            cnt++
        }
        longest = Math.max(longest, cnt)
    }
    return longest
};

/**
 * Version1: This solution doesn't work when nums are too large.
 * 
 * It finds the longest consecutive sequence in an array of integers.
 * It uses a hash map to store the numbers and their presence in the array.
 * For each number in the array, it checks how many consecutive numbers exist
 * starting from that number. It keeps track of the longest sequence found.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let mapping = new Map()
    for (num of nums) {
        mapping.set(num, true)
    }
    let longest = 0
    for (num of nums) {
        let cnt = 0
        while (mapping.has(num)) {
            cnt++
            num++
        }
        longest = Math.max(longest, cnt)
    }
    return longest
};