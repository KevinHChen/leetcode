/**
 * Solution 2: fast
 * It is fast because it avoids creating new arrays for each recursive call.
 * Also, it cuts off the recursion when the sum exceeds the target.
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []

    var _combinationSum = function (path, sum, start) {
        if (sum == target) result.push([...path])

        for (let i = start; i < candidates.length; ++i) {
            if (sum + candidates[i] > target)
                continue
            path.push(candidates[i])
            _combinationSum(path, sum + candidates[i], i)
            path.pop()
        }
    }

    _combinationSum([], 0, 0)
    return result
};


/** 
 * Solution 1: slow
 * It is a slow solution, but it works.
 * It is a recursive solution that uses backtracking to find all combinations of numbers that sum up to the target.
 * It also uses a start index to avoid using candidates that have already been used in the current path.
 * It starts with an empty path and a sum of 0, and iterates through the candidates array.
 * For each candidate, it adds the candidate to the path and calls itself recursively with the new path and sum.
 * If the sum is equal to the target, it adds the path to the result array.
 * If the sum is greater than the target, it returns.
 * It continues to iterate through the candidates array, allowing for the same candidate to be used multiple times.
 * It uses a start index to avoid using candidates that have already been used in the current path.
 * It returns the result array at the end.
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []

    var _combinationSum = function (path, sum, start) {
        if (sum == target) result.push(path)
        if (sum > target) return

        for (let i = start; i < candidates.length; ++i) {
            _combinationSum([...path, candidates[i]], sum+candidates[i], i)
        }
    }

    _combinationSum([], 0, 0)
    return result
};
