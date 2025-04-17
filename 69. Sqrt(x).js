/**
 * Fast and elegent solution
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x // special cases
    let start = 0
    let end = x

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        if (mid*mid==x) {
            return mid
        } else if (mid*mid>x) {
            end = mid-1
        } else {
            start = mid +1
        }
    }
    // end > start now, and end is the solution
    return end
};

/**
 * Medium speed solution, a little bit messy
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x
    let start = 0
    let end = x

    while (start < end) {
        let mid = start + Math.floor((end - start) / 2)
        if (mid * mid == x) return mid;
        if (mid * mid > x && (mid - 1) * (mid - 1) <= x) return mid - 1
        if (mid * mid > x) {
            end = mid - 1
        } else if (mid * mid < x) {
            start = mid + 1
        }
    }
    return start - 1
};
