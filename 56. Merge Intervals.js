/**
 * Solution 1: >6%
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let results = [];

    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);

    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; ++i) {
        let [left, right] = intervals[i];
        if (left < start) {
            start = left;
        }
        // new interval
        if (left > end) {
            results.push([start, end]);
            start = left;
            end = right;
        } else if (right > end) {
            end = right;
        }
    }
    // handle last element
    results.push([start, end]);
    return results;
};
