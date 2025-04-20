/**
 * Solution 2:
 * It uses n&(n-1) to check if a number is a power of two
 * 
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && ((n & (n - 1)) === 0)
};

/**
 * Solution 1: 
 * It checks if a number is a power of two
 * The function takes a number as input and returns true if the number is a power of two, otherwise it returns false.
 * A number is a power of two if it can be expressed as 2^n, where n is a non-negative integer.
 * The function uses a while loop to multiply the result by 2 until the result is greater than or equal to the input number.
 * If the result is equal to the input number, it returns true, otherwise it returns false.
 * 
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let result = 1
    while (result < n) {
        // The left shift operator (<<) is used to multiply the result by 2
        result = result << 1
    }
    return result === n
};