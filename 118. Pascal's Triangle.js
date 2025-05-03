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
