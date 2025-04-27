/**
 * Solution 1: Dynamic programming solution (fast)
 * It is a classic DP problem.
 * The idea is to use a dp array to store the number of ways to decode the string up to each index.
 * The dp array is initialized with 0s, and the first two elements are set to 1.
 * The first element is set to 1 because there is one way to decode an empty string.
 * The second element is set to 1 because there is one way to decode a string of length 1 (if it is not "0").
 * The rest of the dp array is filled by checking the last one or two characters of the string.
 * If the last character is between 1 and 9, it can be decoded as a single character, so we add the number of ways to decode the string up to the previous index.
 * If the last two characters form a valid character (between 10 and 26), we add the number of ways to decode the string up to the index before the previous one.
 * Finally, we return the last element of the dp array, which contains the total number of ways to decode the string.
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s || s[0] === "0") return 0
    let ways = new Array(s.length + 1).fill(0)
    ways[0] = 1 // empty string is considered as a way to decode string
    ways[1] = 1

    for (let i = 1; i < s.length; ++i) {
        let insertPos = i + 1
        let c1 = parseInt(s[i])
        let c2 = parseInt(s[i - 1] + s[i])

        if (c1 >= 1 && c1 <= 9) ways[insertPos] += ways[insertPos - 1]
        if (c2 >= 10 && c2 <= 26) ways[insertPos] += ways[insertPos - 2]
    }

    return ways[ways.length - 1]

};

/**
 * Version 2: backtrack solution (slow)
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

    let cnt = 0
    let backtrack = function (start) {
        if (start === s.length) {
            cnt++
            return
        }

        let c1 = s[start]
        let c2 = s[start + 1]

        if (c1 === "0") {
            //invalid
            return
        }

        if ((c1 === "1" && c2 >= "0" && c2 <= "9") || (c1 === "2" && c2 >= "0" && c2 <= "6")) {
            backtrack(start + 2)
        }
        if (c1 >= "1" && c1 <= "9") {
            backtrack(start + 1)
        }
    }

    let n2l = function (num) {
        return String.fromCharCode(64 + parseInt(num));
    }

    backtrack(0)
    return cnt
};