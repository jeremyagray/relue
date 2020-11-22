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

/**
 * Finds all proper divisors of an integer.
 *
 * @function
 * @name properDivisors
 * @memberof math
 * @api public
 *
 * @param {number} n - an integer
 * @returns {(number[]|null)} An array of proper divisors or null for error.
 *
 * @example
 * math.relue.properDivisors(n);
 */
exports.properDivisors = function(n) {
  if ((! Number.isInteger(n))
      ||(n < 1)) {
    return null;
  }
  if (n === 1) return [];

  let divs = [1];
  const limit = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= limit; i++) {
    if ((n % i === 0)
        && (! divs.includes(i))) {
      divs.push(i);
      divs.push(n / i);
    }
  }

  return divs.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
  });
};

/**
 * Finds all divisors of an integer.
 *
 * @function
 * @name divisors
 * @memberof math
 * @api public
 *
 * @param {number} n - an integer
 * @returns {(number[]|null)} An array of divisors or null for error.
 *
 * @example
 * math.relue.divisors(n);
 */
exports.divisors = function(n) {
  let divs = exports.properDivisors(n);

  if (divs === null) {
    return null;
  } else if (n === 1) {
    return [1];
  } else {
    divs.push(n);
    return divs;
  }
};
