/**
 * Solution 1: a recursive solution, seems work but timeout
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    // console.log(s1,s2,s3)
    if (s3 == "") {
        return s1 == "" && s2 == ""
    }

    let result = false
    if (s1[0] === s3[0]) result = isInterleave(s1.slice(1), s2, s3.slice(1))
    if (result === true) return result
    if (s2[0] === s3[0]) result = isInterleave(s1, s2.slice(1), s3.slice(1))
    return result
};
