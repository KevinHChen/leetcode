/**
 * This solution is better as it's consistent with the Permutation II solution
 * and uses the same approach of using a boolean array to track used numbers.
 * It also avoids the need to create new arrays for each recursive call.
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let used=new Array(nums.length)
    let result = []

    var perm = function(path, used) {
        if (path.length == nums.length) {
            result.push([...path])
            return
        }

        for (let i =0; i<nums.length;++i) {
            if (used[i]) continue

            path.push(nums[i])
            used[i] = true
            
            perm(path, used)
            
            path.pop()
            used[i]=false
        }
    }

    perm([],used)
    return result
};


/**
 * This solution uses a different approach by creating new arrays for each recursive call.
 * While it is simpler to understand, it is less efficient than the previous solution.
 * It also does not use a boolean array to track used numbers, which can lead to more memory usage.
 * This solution is also less consistent with the Permutation II solution.
 * It is a good example of a backtracking approach, but it is not the most efficient.
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    var perm = function(nums, path) {
        if (nums.length == 0) {
            result.push(path)
            return
        }

        for (let i=0;i<nums.length;++i) {
            const newPath = [...path, nums[i]]
            const newRemaining = [...nums.slice(0,i), ...nums.slice(i+1)]
            perm(newRemaining, newPath)
        }
    }
    perm(nums,[])
    return result
};
