/**
 * Solution 1: >40%
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let results = [];
    let backtrack = (start, path, left) => {
        if (left == 0) {
            results.push([...path]);
            return;
        }
        for (let i = start; i <= n; ++i) {
            path.push(i);
            backtrack(i + 1, path, left - 1);
            path.pop();
        }
    }
    backtrack(1, [], k);
    return results;
};
