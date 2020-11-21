'use strict';

/**
 * Returns a random integer from the interval [lo, hi).  Reorders
 * interval to be strictly increasing.
 *
 * @name randomInteger
 * @function
 *
 * @param {number} lo - The beginning of the interval.
 * @param {number} hi - The beginning of the interval.
 * @returns {number} A random integer in the interval.
 *
 * @example
 * relue.math.randomInteger(x);
 *
 * @api public
 */
exports.randomInteger = function(lo, hi) {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === undefined
        || arguments[i] === null
        || typeof arguments[i] === 'boolean'
        || typeof arguments[i] === 'string'
        || Number.isNaN(arguments[i])) {
      return null;
    }
  }

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

exports.randomBetween = function(lo, hi) {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === undefined
        || arguments[i] === null
        || typeof arguments[i] === 'boolean'
        || typeof arguments[i] === 'string'
        || Number.isNaN(arguments[i])) {
      return null;
    }
  }

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
    
  return Math.random() * Math.abs(high - low) + low;
};
