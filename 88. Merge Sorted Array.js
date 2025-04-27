/**
 * Solution 3: similar to solution 2, shorter but a little bit difficult to understand
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1 // last valid number of nums1
    let p2 = n - 1 // last valid number of nums2
    let insertPos = nums1.length - 1

    while (p2 >= 0) { // nums2 not yet ended
        // nums1 not yet end and number in nums1 is greater than in nums2
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[insertPos] = nums1[p1--]
        } else {
            // nums1 ends, OR number in nums1 is smaller
            nums1[insertPos] = nums2[p2--]
        }
        insertPos--
    }

};

/**
 * Solution 2: copy from end to begin
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1 // last valid number of nums1
    let p2 = n - 1 // last valid number of nums2
    let insertPos = nums1.length - 1

    while (p2 >= 0) { // nums2 not yet ended
        if (p1 >= 0) { // when nums1 not yet enned
            if (nums1[p1] > nums2[p2]) {
                nums1[insertPos--] = nums1[p1--]
            } else {
                nums1[insertPos--] = nums2[p2--]
            }
        } else {
            // nums1 ends
            nums1[insertPos--] = nums2[p2--]
        }
    }

};

/**
 * Solution 1: copy from begin to end
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // copy numbers in nums1 to the end of nums1, to preserve spaces
    let k = 1
    for (let i = m - 1; i >= 0; --i) {
        nums1[nums1.length - k] = nums1[i]
        k++
    }

    let i = nums1.length - m // start of nums1
    let j = 0   // start of nums2
    let insertPos = 0
    while (i <= nums1.length - 1 && j <= nums2.length - 1) {
        let c1 = nums1[i]
        let c2 = nums2[j]

        if (c1 < c2) {
            nums1[insertPos++] = c1
            i++
        } else {
            nums1[insertPos++] = c2
            j++
        }
    }

    // if nums2 finishes first, no special processing is required
    // but if nums1 finishes first, we shall copy remaining in nums2 to nums1
    while (j <= nums2.length - 1) {
        nums1[insertPos++] = nums2[j]
        j++
    }

};
