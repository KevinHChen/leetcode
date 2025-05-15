/**
 * Solution 1: >60%
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const rows = grid.length
    const cols = grid[0].length
    let markIsland = (i, j, marker) => {
        if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || grid[i][j] >= "a" || grid[i][j] == "0") {
            return
        }
        // mark
        grid[i][j] = marker
        markIsland(i - 1, j, marker)
        markIsland(i + 1, j, marker)
        markIsland(i, j - 1, marker)
        markIsland(i, j + 1, marker)
    }

    let offset = 0
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (grid[i][j] == "1") {
                offset++;
                const marker = String.fromCharCode("a".charCodeAt(0) + offset)
                markIsland(i, j, marker)
            }
        }
    }

    return offset;
};
