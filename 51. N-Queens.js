/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let singleResult = new Array(n).fill(null);
    let Results = []

    let satisfy = (i, j) => {
        for (let idx = 0; idx < i; ++idx) {
            if (i == idx || j == singleResult[idx] || Math.abs((i - idx) / (j - singleResult[idx])) == 1) return false
        }
        return true
    }

    let doResults = () => {
        let rows = []
        for (let i = 0; i < n; ++i) {
            let row = []
            for (let j = 0; j < n; ++j) {
                if (singleResult[i] == j) row.push("Q")
                else row.push(".")
            }
            rows.push(row.join(""))
        }
        Results.push(rows)
    }

    let i = 0
    let j = 0

    while (i >= 0 && i < n) {
        while (j >= 0 && j < n) {
            if (satisfy(i, j)) {
                singleResult[i] = j
                if (singleResult[n - 1] != null) {
                    // found
                    doResults()
                    // prevent the current position doesn't satisfy, eliminate the singleResult[i] and move to next col in the same row
                    j++
                    singleResult[i] = null;
                } else {
                    i++
                    j = 0
                }
            } else {
                j++
            }
        }
        // go one line back, and starts from the previous j+1
        i--
        j = singleResult[i] + 1
    }
    return Results
};
