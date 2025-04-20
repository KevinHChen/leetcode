
var MyQueue = function () {
    // The first stack is used for pushing elements into the queue
    // The second stack is used for popping elements from the queue
    this.s1 = [] //for pushing
    this.s2 = [] // for popping
};

/** 
 * Push element x to the back of queue.
 * The function first pops all elements from the second stack and pushes them into the first stack
 * Then it pushes the new element into the first stack
 * This way, the first element that was pushed into the queue is the first one to be popped out
 * 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    let s1 = this.s1
    let s2 = this.s2

    while (s2.length != 0) {
        s1.push(s2.pop())
    }
    s1.push(x)
};

/**
 * It pops the element from the front of the queue
 * The function first pops all elements from the second stack and pushes them into the first stack
 * Then it pops the top element from the first stack and returns it
 * This way, the first element that was pushed into the queue is the first one to be popped out
 * 
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let s2 = this.s2

    this._pop()
    return s2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let s2 = this.s2

    this._pop()
    return s2[s2.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    let s1 = this.s1
    let s2 = this.s2
    return s1.length == 0 && s2.length == 0
};

MyQueue.prototype._pop = function () {
    let s1 = this.s1
    let s2 = this.s2

    while (s1.length !== 0) {
        s2.push(s1.pop())
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */