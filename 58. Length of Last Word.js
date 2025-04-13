/**
 * @param {string} s
 * @return {number}
 */
// really this easy?
var lengthOfLastWord = function (s) {
    let strs = s.trim().split(" ");
    return strs[strs.length - 1].length
};
