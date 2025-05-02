/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let results = new Array(n + 1).fill(0)
    results[0] = results[1] = 1

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            results[i] += results[j - 1] * results[i - j]
        }
    }
    return results[n]
};
