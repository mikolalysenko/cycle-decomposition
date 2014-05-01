cycle-decomposition
===================
Computes the [cycle decomposition for a permutation](http://en.wikipedia.org/wiki/Cycle_decomposition_%28group_theory%29)

# Example

```javascript
console.log(require("cycle-decomposition")([3,2,1,0]))
```

Output:

```javascript
[ [0,3], [1,2] ]
```

# Install

```
npm install cycle-decomposition
```

# API

#### `require("cycle-decomposition")(permutation)`
The main function in this library takes a length n permutation represented as a sequence of integers from 0 to n-1 describing how the permutation acts on a finite set according to the rule `i --> permutation[i]`.

* `permutation` is a permutation

**Returns** A list of cycles.

Credits
=======
(c) 2013 Mikola Lysenko.  MIT License