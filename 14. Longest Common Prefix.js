/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const firstStr = strs[0]
    let shouldBreak = false;
    for (let cpos = 0; cpos < firstStr.length; ++cpos) { // current char index
        const pivotChar = firstStr[cpos]
        for (let spos = 1; spos < strs.length; ++spos) { // current str
            const currStr = strs[spos]
            if (currStr[cpos]!=pivotChar) {
                shouldBreak = true;
                break;
            }
        }
        if (shouldBreak){
            return firstStr.substr(0,cpos)
        }
    }
    if (!shouldBreak) {
        return firstStr
    }
};