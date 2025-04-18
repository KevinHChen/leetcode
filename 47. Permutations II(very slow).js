/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = new Map()

    var getKey = function(path) {
        return path.join()
    }

    var perm = function(nums, path) {
        if (nums.length == 0) {
            const key = getKey(path)
            if (!result.has(key)) {
                result.set(key, path)
            }
            return
        }

        for (let i=0;i<nums.length;++i) {
            const newPath = [...path, nums[i]]
            const newRemaining = [...nums.slice(0,i), ...nums.slice(i+1)]
            perm(newRemaining, newPath)
        }
    }
    perm(nums,[])
    return [...result.values()]
};
