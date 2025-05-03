/**
 * Solution 2: fast, create the whole array rather then pushing new values to an empty array
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = []

    // start with i=0 help to nicely avoid the second loop for the first two rows
    for (let i = 0; i < numRows; ++i) { 
        let temp = new Array(i + 1).fill(1) // the first and last elems are always 1
        for (let j = 1; j < i; ++j) {
            temp[j] = res[res.length - 1][j - 1] + res[res.length - 1][j]
        }
        res.push(temp)
    }
    return res
};

/**
 * Solution 1: Quick, but not fastest
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows == 1) return [[1]]
    
    let result = [[1], [1, 1]]
    for (let row = 2; row < numRows; ++row) {
        let currRow = [1]
        let lastRow = result[result.length - 1]
        for (let j = 1; j <= lastRow.length - 1; ++j) {
            let r = lastRow[j - 1] + lastRow[j]
            currRow.push(r)
        }
        currRow.push(1)
        result.push(currRow)
    }
    return result
};
