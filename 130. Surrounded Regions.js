// Why Recursive DFS Is Often Faster Than Non-Recursive DFS (Stack-based) -- from chatgpt
// 1.Recursive functions — especially those with predictable patterns like DFS — can be highly optimized by modern JS engines (like V8 in Chrome/Node.js).
// 2. The call stack is native and fast, while pushing/popping from a JavaScript array (stack) is interpreted in JS.
// 3. Recursive DFS leverages the engine's call stack, which uses low-level memory frames.

// However, for large boards (especially deep or pathological cases), recursion can cause Stack overflow

/**
 * DFS non-recursive solution: it's slower than DFS recursive solution
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let maxRow = board.length - 1
    let maxCol = board[0].length - 1

    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    let stack = []
    // find all the Os on the edges and add them to a stack
    for (let i = 0; i <= maxRow; ++i) {
        if (board[i][0] === 'O') stack.push([i, 0])
        if (board[i][maxCol] === 'O') stack.push([i, maxCol])
    }
    for (let j = 0; j <= maxCol; ++j) {
        if (board[0][j] === 'O') stack.push([0, j])
        if (board[maxRow][j] === 'O') stack.push([maxRow, j])
    }

    while (stack.length !== 0) {
        let [i, j] = stack.pop()
        if (i < 0 || i > maxRow || j < 0 || j > maxCol || board[i][j] !== 'O') continue

        board[i][j] = 'S'
        directions.forEach(([xOffset, yOffset]) => stack.push([i + xOffset, j + yOffset]))
    }

    // set all remaining 'O' to 'X'
    // set all 'S' to 'O'
    for (let i = 0; i <= maxRow; ++i) {
        for (let j = 0; j <= maxCol; ++j) {
            if (board[i][j] === 'O') board[i][j] = 'X'
            if (board[i][j] === 'S') board[i][j] = 'O'
        }
    }

    return board
};

/**
 * BFS solution: however, it's slow, might because of the array.unshift() is not effective?
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let maxRow = board.length - 1
    let maxCol = board[0].length - 1

    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    let queue = []
    // find all the Os on the edges and add them to a queue
    for (let i = 0; i <= maxRow; ++i) {
        if (board[i][0] === 'O') queue.push([i, 0])
        if (board[i][maxCol] === 'O') queue.push([i, maxCol])
    }
    for (let j = 0; j <= maxCol; ++j) {
        if (board[0][j] === 'O') queue.push([0, j])
        if (board[maxRow][j] === 'O') queue.push([maxRow, j])
    }

    while (queue.length !== 0) {
        let [i, j] = queue.shift()
        if (i < 0 || i > maxRow || j < 0 || j > maxCol || board[i][j] !== 'O') continue

        board[i][j] = 'S'
        directions.forEach(([xOffset, yOffset]) => queue.push([i + xOffset, j + yOffset]))
    }

    // set all remaining 'O' to 'X'
    // set all 'S' to 'O'
    for (let i = 0; i <= maxRow; ++i) {
        for (let j = 0; j <= maxCol; ++j) {
            if (board[i][j] === 'O') board[i][j] = 'X'
            if (board[i][j] === 'S') board[i][j] = 'O'
        }
    }

    return board
};

/**
 * DFS recursive solution
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
