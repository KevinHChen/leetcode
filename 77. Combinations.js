/**
 * Solution 2: >90%, use early prune, also remove the redundant "left" used in solution 1
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let results = [];
    let backtrack = (start, path) => {

        // early prune, if the remaining elems are not suffice to form a total of "k" element, prune it
        if (path.length + (n - start + 1) < k) return;

        if (path.length == k) {
            results.push([...path]);
            return;
        }
        for (let i = start; i <= n; ++i) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(1, [], k);
    return results;
};

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
            backtrack(i + 1, path, left - 1); // start with i+1, and the third param is `left-1` not `left--`
            path.pop();
        }
    }
    backtrack(1, [], k);
    return results;
};
