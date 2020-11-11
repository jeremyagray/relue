/**
 * Determines if an integer is prime.
 *
 * @name isPrime
 * @function
 *
 * @param {number} n - an integer
 * @returns {boolean} Integer is prime (true) or not (false).
 *
 * @example
 * math.relue.isPrime(n);
 *
 * @api public
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
}
