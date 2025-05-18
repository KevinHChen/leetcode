/**
 * Solution 2: simulate the binary search
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // simulate binary search
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;
    let cols = matrix[0].length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // convert the mid value back to [row, col]
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        let curr = matrix[row][col];
        if (curr == target) return true;
        else if (curr > target) right = mid - 1;
        else left = mid + 1;
    }
    return false;
};

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
