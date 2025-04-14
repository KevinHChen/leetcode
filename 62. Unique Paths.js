/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let states = new Array(n);

    // init
    for (let j = 0; j < n; ++j) {
        states[j] = 1;
    }

    for (let i = 1; i < m; ++i) {
        states[0] = 1
        for (let j = 1; j < n; ++j) {
            states[j] = states[j - 1] + states[j]
        }
    }

    return states[n - 1]
};
