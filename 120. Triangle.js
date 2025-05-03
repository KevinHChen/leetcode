/**
 * Solution 2: similar to solution 1 but easier to understand
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let prev = new Array(triangle.length).fill(Infinity)
    prev[0] = triangle[0][0]

    // from second row on
    for (let i = 1; i < triangle.length; ++i) {
        let row = triangle[i];
        let curr = new Array(row.length - 1).fill(Infinity)

        // the first elem of the row has only one entry path
        curr[0] = prev[0] + row[0]

        // until the second the to last element of the row have either `prev[j]` or `prev[j-1]` entry paths
        // so curr[j]=Math.min(,)+row[j]
        for (let j = 1; j < row.length-1; ++j) {
            curr[j] = Math.min(prev[j], prev[j - 1]) + row[j]
        }

        // the last elem of the row has only one entry path, so when prev[j]===undefined, curr[j]=prev[j]+row[j]
        curr[row.length-1] = prev[row.length-2] + row[row.length-1]
        prev = curr
    }
    return Math.min(...prev)
};

/**
 * Solution 1:
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let prev = new Array(triangle.length).fill(Infinity)
    prev[0] = triangle[0][0]

    // from the second row on
    for (let i = 1; i < triangle.length; ++i) {
        let row = triangle[i];
        let curr = new Array(row.length - 1).fill(Infinity)
        // the first elem of the row has only one entry path
        curr[0] = prev[0] + row[0]

        // the remaining elements of the row
        for (let j = 1; j <= row.length - 1; ++j) {
            // the last elem of the row has only one entry path, so when prev[j]===undefined, curr[j]=prev[j]+row[j]
            // other elems of the row has prev[j] or prev[j-1] entry paths, so curr[j]=Math.min(,)+row[j]
            curr[j] = (prev[j] == undefined ? prev[j - 1] : Math.min(prev[j], prev[j - 1])) + row[j]
        }
        // console.log(curr)
        prev = curr
    }
    return Math.min(...prev)
};
