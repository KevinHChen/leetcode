/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let maxRow=board.length-1
    let maxCol=board[0].length-1

    let dfs = (row, col) => {
        if (row<0 || row>maxRow ||col<0 ||col>maxCol || board[row][col]!=="O") return
        board[row][col]='S' // safe

        dfs(row-1,col)
        dfs(row+1,col)
        dfs(row, col-1)
        dfs(row, col+1)
    }

    //first and last rows
    for(let j=0;j<=maxCol;++j) {
        if (board[0][j]==='O') dfs(0,j)
        if (board[maxRow][j]==='O') dfs(maxRow,j)
    }
    //first and last cols
    for(let i=0;i<=maxRow;++i) {
        if (board[i][0]==='O') dfs(i,0)
        if (board[i][maxCol]==='O') dfs(i,maxCol)
    }

    // mark all existing `O` as X
    board.forEach((row,i) => {
        row.forEach((col,j) => {
            if (board[i][j]==='O') board[i][j]='X'
        })
    })

    // mark all `S` as `O`
    board.forEach((row,i) => {
        row.forEach((col,j) => {
            if (board[i][j]===`S`) board[i][j]=`O`
        })
    })

    return board
};
