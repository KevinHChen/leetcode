/**
 * Version 1: looks good but timeout
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let gas2 = [...gas, ...gas]
    let cost2 = [...cost, ...cost]

    for (let i = 0; i < gas.length; ++i) {
        let remain = gas2[i]
        // console.log(`new start from station ${i}, having gas=${remain}`)
        for (let j = i + 1; j <= i + gas.length; ++j) {
            // console.log(`travel to station ${j}, cost is ${cost2[j-1]}`)
            remain -= cost2[j - 1]
            if (remain < 0) {
                // console.log(`unreachable, remain is ${remain}`)
                break; // unreachable
            }
            remain += gas2[j]
            // console.log(`continue to station ${j}, new remain is ${remain}`)
        }
        if (remain >= 0) return i
    }
    return -1
};
