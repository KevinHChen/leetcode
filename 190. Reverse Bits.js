/**
 * It reverses the bits of a given 32 bits unsigned integer.
 * The function takes a number as input and returns the reversed bits of that number.
 * The function uses bitwise operations to reverse the bits of the number.
 * It shifts the bits of the number to the right and left, and uses the bitwise OR operator to combine the bits.
 * The function uses a loop to iterate through each bit of the number, and reverses the bits one by one.
 * The function returns the reversed bits as a positive integer.
 * The function uses the unsigned right shift operator to ensure that the result is a positive integer.
 * 
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0
    // Loop through each bit of the number, 32 bits in total so we loop 32 times
    for (let i = 0; i < 32; ++i) {
        // Shift the result to the left by 1 bit
        // and add the last bit of n to the result
        // The last bit of n is obtained by using the bitwise AND operator
        // The bitwise AND operator returns 1 if both bits are 1, otherwise it returns 0
        result = (result << 1) | (n & 1)
        // Shift n to the right by 1 bit
        n = n >> 1
    }
    // The result is a 32 bits unsigned integer
    // The unsigned right shift operator >>> is used to ensure that the result is a positive integer
    return result >>> 0
};

/**
 * Helper function
 * It converts a decimal number to binary
 * The function takes a number as input and returns the binary representation of that number.
 * @param {*} dec 
 * @returns 
 */
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}