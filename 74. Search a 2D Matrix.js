/**
 * Solution 1: >8%
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // start with the top right elem
    let col = matrix[0].length - 1;
    let row = 0

    while (row < matrix.length && col >= 0) {
        let curr = matrix[row][col];
        console.log(`curr=${curr}`)
        if (curr == target) return true;
        else if (target < curr) col--;
        else row++;
    }
    return false;
};
