'use strict';

/**
 * Calculates the logistic (sigmoid) function of the argument.
 *
 * @function
 * @name logistic
 * @memberof math
 * @api public
 *
 * @param {number} x - a number
 * @returns {number} the value of logistic(x)
 *
 * @example
 * relue.math.logistic(x);
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
 * @function
 * @name relu
 * @memberof math
 * @api public
 *
 * @param {number} x - a number
 * @returns {number} 0 if x < 0, otherwise x
 *
 * @example
 * relue.math.relu(x);
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
 * @function
 * @name step
 * @memberof math
 * @api public
 *
 * @param {number} x - a number
 * @returns {number} 0 if x <= 0, otherwise 1
 *
 * @example
 * relue.math.step(x);
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
 * @function
 * @name linstep
 * @memberof math
 * @api public
 *
 * @param {number} x - a number
 *
 * @returns {number} -1 if x <= -1, x if -1 < x < 1, 1 if x >= 1
 *
 * @example
 * relue.math.linstep(x);
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
