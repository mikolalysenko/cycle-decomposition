"use strict"

var SCRATCH = new Uint8Array(1024)

function cycleDecomposition(pi) {
  var i, j, k, t, cur_cycle, cycles = []
  if(pi.length > SCRATCH.length) {
    SCRATCH = new Uint8Array(pi.length)
  }
  for(i=0; i<pi.length; ++i) {
    SCRATCH[i] = 0
  }
  for(i=0; i<pi.length; ++i) {
    if(SCRATCH[i] !== 0) {
      continue
    }
    SCRATCH[i] = 1
    if(pi[i] === i) {
      continue
    }
    cur_cycle = [i]
    for(j=pi[i]; j!==i; j=pi[j]) {
      SCRATCH[j] = 1
      cur_cycle.push(j)
    }
    for(j=1,k=cur_cycle.length-1; k>j; ++j,--k) {
      t = cur_cycle[k]
      cur_cycle[k] = cur_cycle[j]
      cur_cycle[j] = t
    }
    cycles.push(cur_cycle)
  }
  return cycles
}

module.exports = cycleDecomposition