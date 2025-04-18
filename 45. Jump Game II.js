/**
 * Greedy solution
 * This function uses a greedy approach to find the minimum number of jumps needed to reach the last index of the array.
 * It keeps track of the farthest reachable index, the number of jumps made, and the current jump's end index.
 * The function iterates through the input array, updating the farthest reachable index and checking if the current index is at the end of the current jump.
 * If it is, it increments the jump count and updates the current jump's end index to the farthest reachable index.
 * The function returns the total number of jumps needed to reach the last index.
 * This solution is more efficient than the slow solution, with a time complexity of O(n) and a space complexity of O(1).
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let farthest = 0 // farthest reachable index
    let jump = 0 // number of jumps made
    let currentJumpEndsAt = 0 // end of the current jump

    // iterate through the array
    // we don't need to check the last index, because we are already there
    // and we don't need to jump from the last index
    for (let i = 0; i < nums.length - 1; ++i) {
        if (i > farthest) return -1; // we cannot reach this index， so return -1
        // update the farthest reachable index
        farthest = Math.max(farthest, i + nums[i])

        if (i == currentJumpEndsAt) { // we are at the end of the current jump
            jump++ // we need to jump
            currentJumpEndsAt = farthest // update the end of the current jump
        }
    }
    return jump
};


/**
 * Slow solution
 * 
 * This function uses a dynamic programming approach to find the minimum number of jumps needed to reach the last index of the array.
 * It creates an array called 'reachable' where each index represents the minimum number of jumps needed to reach that index.
 * The function iterates through the input array, updating the 'reachable' array based on the current index and the number of jumps possible from that index.
 * If the current index is reachable, it updates the 'reachable' array for all indices that can be reached from the current index.
 * The function returns the value at the last index of the 'reachable' array, which represents the minimum number of jumps needed to reach the last index.
 * This solution is less efficient than the greedy approach, with a time complexity of O(n^2) and a space complexity of O(n).
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let reachable = new Array(nums.length).fill(-1)
    reachable[0] = 0

    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i]
        if (reachable[i] == -1) continue

        for (let j = num; j > 0; --j) {
            if (reachable[i + j] == -1) // not yet reached before
                reachable[i + j] = reachable[i] + 1
            if (i + j == nums.length - 1) return reachable[i + j]
        }
    }
    return reachable[nums.length - 1]
};