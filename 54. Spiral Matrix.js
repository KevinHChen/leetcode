/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let top = 0;
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let results = []

    while (left <= right && top <= bottom) {
        //left->right, if row exists
        if (top <= bottom) {
            for (let col = left; col <= right; ++col) {
                results.push(matrix[top][col]);
            }
            top++;
        }
        //top->bottom, if col exists
        if (left <= right) {
            for (let row=top;row<=bottom;++row) {
                results.push(matrix[row][right]);
            }
            right--;
        }
        //right->left, if row exists
        if (top<=bottom) {
            for (let col=right;col>=left;--col) {
                results.push(matrix[bottom][col]);
            }
            bottom--
        }
        //bottom->top, if col exists
        if (left<=right) {
            for (let row=bottom;row>=top;--row) {
                results.push(matrix[row][left])
            }
            left++
        }
    }
    return results;
};
