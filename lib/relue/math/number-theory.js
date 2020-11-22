'use strict';

/**
 * Determines if an integer is prime.
 *
 * @function
 * @name isPrime
 * @memberof math
 * @api public
 *
 * @param {number} n - an integer
 * @returns {(boolean|null)} Integer is prime (true) or not (false) or
 * null for error.
 *
 * @example
 * math.relue.isPrime(n);
 */
exports.isPrime = function(n) {
  if (! Number.isInteger(n)) {
    return null;
  }

  if (n <= 1) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};
