/**
 * Solution 2: >40%
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let results = [];

    intervals.sort((a, b) => a[0] - b[0]);

    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; ++i) {
        let [newstart, newend] = intervals[i];
        // new interval
        if (newstart > end) {
            results.push([start, end]);
            start = newstart;
            end = newend;
        } else if (newend > end) {
            end = newend;
        }
    }
    // handle last element
    results.push([start, end]);
    return results;
};

/**
 * Solution 1: >25%
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
