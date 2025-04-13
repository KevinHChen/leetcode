/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  
    console.log("unfinished and incorrect version");
  
    let state = Array.from({ length: word2.length + 1 }, () => Array(word1.length + 1).fill(0))
    for (let j=1;j<word1.length+1;++j) {
        state[0][j]=1
    }
    console.log(state)

    for (let i = 1; i < word2.length + 1; ++i) {
        state[i][0] = 1
        for (let j = 1; j < word1.length + 1; ++j) {
            if (word1[j] == word2[i]) {
                state[i][j] = state[i - 1][j - 1]
            } else {
                state[i][j] = 1 + Math.min(state[i - 1][j], state[i][j - 1], state[i - 1][j - 1])
            }
        }
        console.log(state)
    }
    return state[word2.length][word1.length];
};
