'use strict';

// Return a random integer on the inteval [lo, hi).
// Will reorder interval to be strictly increasing.
exports.randomInteger = function(lo, hi) {
  let low, high;

  if (lo === hi) {
    return lo;
  } else if (lo > hi) {
    high = lo;
    low = hi;
  } else {
    high = hi;
    low = lo;
  }
    
  return Math.floor(Math.random() * Math.abs(high - low)) + low;
};
