/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = []
  let used = new Array(nums.length)
  nums.sort((a, b) => a - b) // Sort the array to handle duplicates

  var perm = function (path, used) {
      if (path.length === nums.length) {
          result.push([...path])
      }

      for (let i = 0; i < nums.length; ++i) {
          if (used[i]) continue

          // if the current number is the same as the previous one and the previous one was not used,
          // skip this number to avoid duplicates
          // This is the key difference from the standard permutation problem
          // It ensures that we only use the first occurrence of each number in the current position
          if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) 
            continue;

          used[i] = true
          path.push(nums[i])

          perm(path, used)

          used[i] = false
          path.pop()
      }
  }

  perm([], used)
  return result
};