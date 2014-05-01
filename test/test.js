var test = require("tape")
  , cycles = require("../cycles.js")

function cycle_equals(a, b) {
  if(a.length !== b.length) {
    return false
  }
  for(var i = 0; i<a.length; ++i) {
    var ca = a[i], cb = b[i]
    if(ca.length !== cb.length) {
      return false
    }
    for(var j=0; j<ca.length; ++j) {
      if(ca[j] !== cb[j]) {
        return false
      }
    }
  }
  return true
}

function cycle_string(a) {
  var result = []
  for(var i=0; i<a.length; ++i) {
    result.push("(" + a[i].join(",") + ")")
  }
  if(result.length === 0) {
    return "()"
  }
  return result.join("")
}

function cycle_test(t, perm, a) {
  var b = cycles(perm)
  t.assert(cycle_equals(a,b), "Expected: " + cycle_string(a) + " ~ Got: " + cycle_string(b))
}

test("0", function(t) {
  cycle_test(t, [], [])
  t.end()
})

test("1", function(t) {
  cycle_test(t, [0], [])
  t.end()
})

test("2", function(t) {
  cycle_test(t, [0,1], [])
  cycle_test(t, [1,0], [[0,1]])
  t.end()
})

test("3", function(t) {
  cycle_test(t, [0,1,2], [])
  cycle_test(t, [1,0,2], [[0,1]])
  cycle_test(t, [1,2,0], [[0,2,1]])
  t.end()
})

test("4", function(t) {
  cycle_test(t, [0,1,2,3], [])
  cycle_test(t, [1,0,3,2], [[0,1],[2,3]])
  cycle_test(t, [3,2,1,0], [[0,3],[1,2]])
  cycle_test(t, [3,0,1,2], [[0,1,2,3]])
  t.end()
})

