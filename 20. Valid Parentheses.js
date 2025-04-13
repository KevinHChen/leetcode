/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let map = new Map([[")", "("], ["]", "["], ["}", "{"]]);
    for (let i = 0; i < s.length; ++i) {
        const currChar = s[i]
        const stackTop = stack[stack.length - 1]
        if (stackTop != undefined && stackTop == map.get(currChar)) {
            stack.pop()
        } else {
            stack.push(currChar)
        }
    }
    return stack.length === 0
};