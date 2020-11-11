const nt = require('./number-theory.js');

/**
 * Generates prime numbers.
 *
 * @generator
 * @yields {number} i - The next prime number.
 *
 * @example
 * const generator = relue.math.primes();
 * // Returns next prime.
 * console.log(generator.next().value);
 */
exports.primes = function*() {
  let i = 2;
  while (true) {
    if (nt.isPrime(i)) {
      yield i;
    }
    i++;
  }
}

/**
 * Generates the Fibonacci sequence.
 *
 * @generator
 * @yields {number} a - The next Fibonacci number.
 *
 * @example
 * const generator = relue.math.fibonaccis();
 * // Returns next Fibonacci number.
 * console.log(generator.next().value);
 */
exports.fibonaccis = function*() {
  let a = 0;
  let b = 1;
  let tmp = 0;

  while (true) {
    yield a;
    tmp = a;
    a = b;
    b = b + tmp;
  }
}
