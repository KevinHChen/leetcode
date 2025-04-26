# Data Structure Cheatsheet

| Data Structure | Operation | Code Example                                                                 |
|----------------|-----------|------------------------------------------------------------------------------|
| **Array**      | Loop      | `array.forEach((val, index) => { ... })`                                     |
|                | Add       | `array.push(10)`<br/> `array.unshift(10)`                                                            |
|                | Delete    | `array.pop()`<br>`array.shift()`                                             |
|                | Find      | `array.filter(x => x > 10)`<br>`array.find(x => x > 10)`<br>`array.indexOf(10)` |
| **Object**     | Loop      | `Object.keys(obj).forEach(key => { console.log(obj[key]); })`                |
|                | Add       | `obj.key = 10`<br>`obj[key] = 10`                                           |
|                | Delete    | `delete obj.key`                                                            |
|                | Has       | `'key' in obj`<br>`obj.hasOwnProperty('key')`                               |
|                | Get       | `obj.key`                                                                   |
| **Map**        | Loop      | `m.forEach((val, key) => { console.log(key, val); })`                       |
|                | Add       | `m.set('key', 'val')`                                                       |
|                | Delete    | `m.delete('key')`                                                           |
|                | Has       | `m.has('key')`                                                              |
| **Set**        | Loop      | `set.forEach(val => { console.log(val); })`                                 |
|                | Add       | `set.add(10)`                                                               |
|                | Delete    | `set.delete(10)`                                                            |
|                | Has       | `set.has(10)`                                                               |