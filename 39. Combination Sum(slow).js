/**
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
