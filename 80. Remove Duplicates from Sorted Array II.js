/**
 * It uses two pointers to keep track of the current index and the index to insert the next unique element.
 * The first pointer iterates through the array, while the toInsert pointer keeps track of the position to insert the next unique element.
 * If the current element is not equal to the element at the index two positions back, it means we can insert it at the toInsert pointer's position.
 * We then increment the toInsert pointer and assign the current element to that position.
 * This way, we ensure that we only keep at most two occurrences of each element in the sorted array.
 * The time complexity of this solution is O(n), where n is the length of the input array.
 * The space complexity is O(1) since we are modifying the input array in place and not using any additional data structures.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let toInsert = 2

  for (let i = 2; i < nums.length; ++i) {
      if (nums[i] != nums[toInsert - 2]) {
          nums[toInsert] = nums[i]
          toInsert++
      }
  }
  return toInsert
};

/**
 * This solution is not quite right, and can't handle the cases e.g. [1,2,2]
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = 1
  let toInsert = 1

  while (current <= nums.length - 1) {
      if (nums[toInsert] == nums[toInsert - 1]) {
          toInsert++
          current++
          while (nums[current] == nums[toInsert - 1]) {
              current++
          }
      }
      nums[toInsert] = nums[current]
      if (current < nums.length && toInsert < nums.length) {
          current++
          toInsert++
      }
  }
  return toInsert
};