/**
 * It takes an array of numbers and returns the largest number that can be formed by concatenating them.
 * It does this by sorting the numbers in descending order based on the concatenation of two numbers.
 * If the first number in the sorted array is "0", it returns "0" as the largest number.
 * Otherwise, it joins the sorted array into a string and returns it.
 * 
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums = nums.map(String)

    // Custom sort function to compare two numbers based on their concatenation
    // For example, to compare 3 and 30, we compare "330" and "303"
    // Because "330" > "303", then 3 should come before 30 in the sorted order
    // This is done by subtracting the two concatenated strings
    // Example 1: Assuming a=3, b=30, then a+b=330, b+a=303
    // We expect 3 comes before 30, so we want the sort() lambda returns a negative number, and (b+a) - (a+b) will do that
    // Example 2: Assuming a=12, b=3, then a+b=123, b+a=312
    // We expect 3 comes before 12, so we want the sort() lambda returns a negative number, and (b+a) - (a+b) will do that
    nums.sort((a, b) => (b + a) - (a + b)) //descending order
    
    if (nums[0] === "0") return "0"

    return nums.join("")
};