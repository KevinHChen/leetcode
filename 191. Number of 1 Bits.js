/**
 * It counts the number of 1 bits in the binary representation of a number.
 * It uses the fact that n & (n - 1) removes the lowest set bit from n.
 * This is a common technique to count the number of set bits in a number.
 * The function initializes a counter to 0 and enters a loop that continues until n becomes 0.
 * In each iteration, it increments the counter and updates n by performing the bitwise AND operation with (n - 1).
 * This effectively removes the lowest set bit from n.
 * The loop continues until all set bits are removed, and the final count is returned.
 * 
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt=0
    while (n!=0) {
        cnt++
        n=(n&(n-1))
    }
    return cnt
};