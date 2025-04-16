const mapping = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
])

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // MUST INCLUDES THIS
    if (digits.length == 0) { 
        return []
    }
    if (digits.length == 1) {
        return mapping.get(digits[0])
    }
    const combinations = letterCombinations(digits.substring(1));

    /* Explanation
    let collector = []
    for (x of mapping.get(digits[0])) {
        for (y of combinations) {
            collector.push(x+y)
        }
    }
    return collector;
    */
    return mapping.get(digits[0]).flatMap(x => combinations.map(y => x + y))
};
