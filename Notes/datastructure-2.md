# Data Structure Cheatsheet

| Data Structure | Operation       | Code Example                                                                 |
|----------------|-----------------|------------------------------------------------------------------------------|
| **Array**      | Loop            | `array.forEach((val, index) => { ... })`                                     |
|                | Add             | `array.push(10)`<br/> `array.unshift(10)`                                   |
|                | Delete          | `array.pop()`<br>`array.shift()`                                             |
|                | Find            | `array.filter(x => x > 10)`<br>`array.find(x => x > 10)`<br>`array.indexOf(10)` |
|                | Sort            | `array.sort((a, b) => a - b)`                                                |
|                | Reverse         | `array.reverse()`                                                           |
|                | Slice           | `array.slice(1, 3)`                                                         |
|                | Splice          | `array.splice(1, 2, 'new')`                                                 |
|                | Concat          | `array.concat([4, 5])`                                                      |
|                | Join            | `array.join(', ')`                                                          |
|                | Map             | `array.map(x => x * 2)`                                                     |
|                | Reduce          | `array.reduce((acc, val) => acc + val, 0)`                                  |
|                | Initialization  | `let array = [1, 2, 3];`<br>`let array = new Array(5);`<br>`let array = Array.from([1, 2, 3]);` |
| **Object**     | Loop            | `Object.keys(obj).forEach(key => { console.log(obj[key]); })` <br/> <br/> `Object.entries(obj).forEach((key, val) => {console.log($key, $value)})`                |
|                | Add             | `obj.key = 10`<br>`obj[key] = 10`                                           |
|                | Delete          | `delete obj.key`                                                            |
|                | Has             | `'key' in obj`<br>`obj.hasOwnProperty('key')`                               |
|                | Get             | `obj.key`                                                                   |
|                | Merge           | `Object.assign({}, obj1, obj2)`                                             |
|                | Keys            | `Object.keys(obj)`                                                          |
|                | Values          | `Object.values(obj)`                                                        |
|                | Entries         | `Object.entries(obj)`                                                       |
|                | Freeze          | `Object.freeze(obj)`                                                        |
|                | Seal            | `Object.seal(obj)`                                                          |
|                | Initialization  | `let obj = { key: 'value' };`<br>`let obj = Object.create(null);`<br>`let obj = new Object();` |
| **Map**        | Loop            | `m.forEach((val, key) => { console.log(key, val); })`                       |
|                | Add             | `m.set('key', 'val')`                                                       |
|                | Delete          | `m.delete('key')`                                                           |
|                | Has             | `m.has('key')`                                                              |
|                | Get             | `m.get('key')`                                                              |
|                | Clear           | `m.clear()`                                                                 |
|                | Size            | `m.size`                                                                    |
|                | Keys            | `Array.from(m.keys()).forEach(x => console.log(x));`                                                                  |
|                | Values          | `Array.from(m.values()).forEach(x => console.log(x));`                                                                |
|                | Entries         | `Array.from(m.entries()).forEach(([key, val]) => { console.log($key, $val); });`                                |
|                | Initialization  | `let map = new Map();`<br>`let map = new Map([['key1', 'value1'], ['key2', 'value2']]);` |
| **Set**        | Loop            | `set.forEach(val => { console.log(val); })`                                 |
|                | Add             | `set.add(10)`                                                               |
|                | Delete          | `set.delete(10)`                                                            |
|                | Has             | `set.has(10)`                                                               |
|                | Clear           | `set.clear()`                                                               |
|                | Size            | `set.size`                                                                  |
|                | Union           | `new Set([...set1, ...set2])`                                               |
|                | Intersection    | `new Set([...set1].filter(x => set2.has(x)))`                               |
|                | Difference      | `new Set([...set1].filter(x => !set2.has(x)))`                              |
|                | Initialization  | `let set = new Set();`<br>`let set = new Set([1, 2, 3]);`<br>`let set = new Set('abc');` |

## String Examples and Explanations

### Splice
The `splice` method is used to add, remove, or replace elements in an array.
**Signature**: `array.splice(start, deleteCount, item1, item2, ..., itemN)`

- `start`: The index at which to start changing the array.
- `deleteCount`: The number of elements to remove.
- `item1, item2, ..., itemN`: Elements to add to the array (optional).

```javascript
// Remove elements
let array = [1, 2, 3, 4, 5];
array.splice(1, 2); // Removes 2 elements starting at index 1
console.log(array); // Output: [1, 4, 5]

// Add elements
array = [1, 4, 5];
array.splice(1, 0, 2, 3); // Adds 2 and 3 at index 1
console.log(array); // Output: [1, 2, 3, 4, 5]

// Replace elements
array.splice(2, 2, 6, 7); // Replaces 2 elements starting at index 2 with 6 and 7
console.log(array); // Output: [1, 2, 6, 7, 5]
```

### Reduce
The `reduce` method is used to apply a function to each element of an array, reducing it to a single value.
**Signature**: `array.reduce(callback, initialValue)`

- `callback`: A function that is called for each element in the array. It takes four arguments:
    - `accumulator`: The accumulated result from the previous callback execution.
    - `currentValue`: The current element being processed.
    - `currentIndex` (optional): The index of the current element.
    - `array` (optional): The array `reduce` was called upon.
- `initialValue`: An optional value to use as the first argument to the first call of the callback.

```javascript
// Sum of all elements
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 15

// Flatten an array
let nestedArray = [[1, 2], [3, 4], [5]];
let flatArray = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// Count occurrences of elements
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }
```
## Entries
### Object.entries()
The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.

```javascript
let obj = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj);
console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]

// Iterating over entries
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// Output:
// a: 1
// b: 2
// c: 3
```

### Map.entries()
The `entries()` method returns a new iterator object that contains the `[key, value]` pairs for each element in the `Map`.

```javascript
let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
let entries = map.entries();

// Iterating over entries
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
// Output:
// a: 1
// b: 2
// c: 3
```