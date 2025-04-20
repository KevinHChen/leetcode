/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // start from top right corner
    let i = 0
    let j = matrix[0].length - 1

    while (j >= 0 && i < matrix.length) {
        if (target == matrix[i][j]) return true
        else if (target < matrix[i][j]) j--
        else i++
    }
    return false
};
