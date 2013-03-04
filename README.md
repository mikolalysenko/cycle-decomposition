cycle-decomposition
===================
Computes the [cycle decomposition for a permutation](http://en.wikipedia.org/wiki/Cycle_decomposition_%28group_theory%29)

Usage
=====
First, install this using npm:

    npm install cycle-decomposition

Then you can use it like this:

```javascript
var cycles = require("cycle-decomposition")([3,2,1,0])

// Result:
//    cycles = [ [0,3], [1,2] ]
```

`require("cycle-decomposition")(permutation)`
---------------------------------------------
The main function in this library takes a length n permutation represented as a sequence of integers from 0 to n-1 describing how the permutation acts on a finite set according to the rule `i --> permutation[i]`.

The returned value is a list of cycles.

Credits
=======
(c) 2013 Mikola Lysenko.  MIT License