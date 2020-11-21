'use strict';

/**
 * Calculates the logistic (sigmoid) function of the argument.
 *
 * @name logistic
 * @function
 *
 * @param {number} x - a number
 * @returns {number}
 *
 * @example
 * relue.math.logistic(x);
 *
 * @api public
 */
exports.logistic = function(x) {
  if (x === undefined
      || x === null
      || typeof x === 'boolean'
      || typeof x === 'string'
      || Number.isNaN(x)) {
    return null;
  }

  return 1 / (1 + Math.exp(-x));
};

/**
 * Calculates the rectified linear unit function of the argument.
 *
 * @name relu
 * @function
 *
 * @param {number} x - a number
 * @returns {number}
 *
 * @example
 * relue.math.relu(x);
 *
 * @api public
 */
exports.relu = function(x) {
  if (x === undefined
      || x === null
      || typeof x === 'boolean'
      || typeof x === 'string'
      || Number.isNaN(x)) {
    return null;
  }

  if (x >= 0) {
    return x;
  } else {
    return 0;
  }
};

/**
 * Calculates the step function of the argument.
 *
 * @name step
 * @function
 *
 * @param {number} x - a number
 * @returns {number}
 *
 * @example
 * relue.math.step(x);
 *
 * @api public
 */
exports.step = function(x) {
  if (x === undefined
      || x === null
      || typeof x === 'boolean'
      || typeof x === 'string'
      || Number.isNaN(x)) {
    return null;
  }

  if (x > 0) {
    return 1;
  } else {
    return 0;
  }
};

/**
 * Calculates the linear step function of the argument.
 *
 * @name linstep
 * @function
 *
 * @param {number} x - a number
 * @returns {number}
 *
 * @example
 * relue.math.linstep(x);
 *
 * @api public
 */
exports.linstep = function(x) {
  if (x === undefined
      || x === null
      || typeof x === 'boolean'
      || typeof x === 'string'
      || Number.isNaN(x)) {
    return null;
  }

  if (x <= -1) {
    return -1;
  } else if (x >= 1) {
    return 1;
  } else {
    return x;
  }
};
