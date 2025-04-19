
var TreeNode = function() {
  this.children = new Map()
  this.isEndOfWord = false
}

/**
 * Version 2: It beats 40-70% of the commits because it uses a Map to represent the children of each node.
 * 
 * Trie (Prefix Tree) implementation
 * This is a simple implementation of a Trie data structure.
 * It uses a Map to represent the children of each node.
 * Each node has a boolean flag to mark the end of a word.
 * The insert method adds a word to the Trie, the search method checks if a word exists in the Trie,
 * and the startsWith method checks if there is any word in the Trie that starts with a given prefix.
 * The time complexity of the insert, search, and startsWith methods is O(m), where m is the length of the word or prefix.
 * The space complexity is O(n), where n is the number of nodes in the Trie.
 */
var Trie = function() {
  this.root=new TreeNode()
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let current = this.root
  for(let c of word) {
      if (!current.children.has(c)) {
          current.children.set(c, new TreeNode())
      } 
      current=current.children.get(c)
  }
  current.isEndOfWord = true //mark the end of the word
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let current=this.root
  for (let c of word) {
      if (!current.children.has(c)) return false
      current = current.children.get(c)
  }
  return current.isEndOfWord === true
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let current=this.root
  for (let c of prefix) {
      if (!current.children.has(c)) return false
      current = current.children.get(c)
  }
  return true
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

/** 
 * Version 1: Very slow (beats only 10% of the commits)
 * 
 * This is a simple implementation of a Trie data structure.
 * It uses an array of size 27 to represent the children of each node.
 * The first 26 indices represent the letters 'a' to 'z', and the last index (26) is used to mark the end of a word.
 * The insert method adds a word to the Trie, the search method checks if a word exists in the Trie,
 * and the startsWith method checks if there is any word in the Trie that starts with a given prefix.
*/

var Trie = function() {
    this.root=new Array(27)
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root
    for(let c of word) {
        if (current[c]===undefined) {
            current[c] = new Array(27)
        } 
        current=current[c]
    }
    current[26]=true //mark the end of the word
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current=this.root
    for (let c of word) {
        if (current[c]===undefined) return false
        current = current[c]
    }
    return current[26]===true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current=this.root
    for (let c of prefix) {
        if (current[c]===undefined) return false
        current = current[c]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */