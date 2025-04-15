/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let flag = false;
    if (n == 0) return 1;
    if (n < 0) {
        n = -n
        flag = true
    }

    // result(remain): 5(0), 2(1), 1(0)
    let index = []
    while (n > 1) {
        index.push(n % 2)
        n = Math.floor(n / 2)
    }

    let accu = x;
    while (index.length != 0) {
        accu *= accu
        if (index.pop() == 1) {
            accu *= x
        }
    }
    return flag == true ? 1 / accu : accu;
};
