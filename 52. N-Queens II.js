/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let count = 0

    let satisfy = (queens, row, col) => {
        for (let i = 0; i < queens.length; ++i) {
            if (col == queens[i] || Math.abs(i - row) == Math.abs(queens[i] - col)) return false
        }
        return true
    }

    let dfs = (row, queens) => {
        if (row === n) {
            count++
            return
        }

        for (let col = 0; col < n; ++col) {
            if (satisfy(queens, row, col)) {
                queens.push(col)
                dfs(row + 1, queens)
                queens.pop()
            }
        }
    }

    dfs(0, [])
    return count
};
