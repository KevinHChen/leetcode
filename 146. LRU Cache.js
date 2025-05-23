/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) 
        return -1
    // key exists
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // key exists, remove it
    if (this.cache.has(key)) 
        this.cache.delete(key)

    // handle overflow
    if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value) // remove first element from the map
    }
    
    // insert element
    this.cache.set(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
