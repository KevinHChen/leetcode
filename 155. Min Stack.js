
var MinStack = function () {
    this.store = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.store.push(val)

    const minStackTopElem = this.min[this.min.length - 1]
    if (minStackTopElem == undefined || val < minStackTopElem) {
        // insert the val if minStack is empty or a smaller val is found
        this.min.push(val)
    } else {
        // drop this val as this min(minStackTopElem, val)==minStackTopElem
        this.min.push(minStackTopElem)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.min.pop()
    return this.store.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.store[this.store.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

-2, 0, -1, 3, -3
