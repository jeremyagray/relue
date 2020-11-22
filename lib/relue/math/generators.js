'use strict';

const nt = require('./number-theory.js');

/**
 * Generates the sequence of perfect cubes.
 *
 * @generator
 * @name cubes
 * @memberof math
 * @api public
 *
 * @param {number} n - The first perfect cube.
 * @yields {number} The next perfect cube.
 *
 * @example
 * const generator = relue.math.cubes();
 *
 * // Returns next perfect cube.
 * console.log(generator.next().value);
 */
exports.cubes = function*(n=0) {
  while (true) {
    yield n * n * n;
    n++;
  }
};

/**
 * Generates the sequence of even numbers.
 *
 * @generator
 * @name evens
 * @memberof math
 * @api public
 *
 * @yields {number} The next even number, beginning at 0.
 *
 * @example
 * const generator = relue.math.evens();
 *
 * // Returns next even number.
 * console.log(generator.next().value);
 */
exports.evens = function*() {
  let n = 0;
  while (true) {
    yield n;
    n += 2;
  }
};

/**
 * Generates the sequence of odd numbers.
 *
 * @generator
 * @name odds
 * @memberof math
 * @api public
 *
 * @yields {number} The next odd number, beginning at 1.
 *
 * @example
 * const generator = relue.math.odds();
 *
 * // Returns next odd number.
 * console.log(generator.next().value);
 */
exports.odds = function*() {
  let n = 1;
  while (true) {
    yield n;
    n += 2;
  }
};

/**
 * Generates the Fibonacci sequence.
 *
 * @generator
 * @name fibonaccis
 * @memberof math
 * @api public
 *
 * @yields {number} The next Fibonacci number.
 *
 * @example
 * const generator = relue.math.fibonaccis();
 *
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
};

/**
 * Generates the hailstone sequence for n.
 *
 * @generator
 * @name hailstone
 * @memberof math
 * @api public
 *
 * @param {number} n - The starting number of the hailstone sequence.
 * @yields {number} The next number in the hailstone sequence for n.
 *
 * @example
 * const generator = relue.math.hailstone(27);
 *
 * // Prints 82.
 * console.log(generator.next().value);
 */
exports.hailstone = function*(n) {
  if (n === undefined
      || n === null
      || typeof n === 'boolean'
      || typeof n === 'string'
      || Number.isNaN(n)) {
    return null;
  }

  let m = n;

  // First time.
  if (m < 1) {
    return 0;
  } else if (m === 1) {
    return m;
  } else {
    yield m;
  }
  
  // Sequence generation.
  while (true) {
    if (m === 1) {
      return m;
    } else if (m % 2 === 0) {
      m = m / 2;
    } else {
      m = 3 * m + 1;
    }
    yield m;
  }
};

/**
 * Generates the pentagonal sequence.
 *
 * @generator
 * @name pentagonal
 * @memberof math
 * @api public
 *
 * @yields {number} n - The next number in the pentagonal sequence.
 *
 * @example
 * const generator = relue.math.pentagonal();
 *
 * // Prints 1, 2, 5, 7, 12, 15, 20, ...
 * console.log(generator.next().value);
 */
exports.pentagonal = function*() {
  let k = 1;
  while (true) {
    yield (k * (3 * k - 1) / 2);
    k = -k;
    yield (k * (3 * k - 1) / 2);
    k = -k;
    k++;
  }
};

/**
 * Generates prime numbers.
 *
 * @generator
 * @name primes
 * @memberof math
 * @api public
 *
 * @param {number} [n=2] - The number to start searching for primes.
 * @yields {number} The next prime number.
 *
 * @example
 * const generator = relue.math.primes();
 *
 * // Returns next prime.
 * console.log(generator.next().value);
 */
exports.primes = function*(n=2) {
  let i = n;
  while (true) {
    if (nt.isPrime(i)) {
      yield i;
    }
    i++;
  }
};

/**
 * Generates the sequence of perfect squares.
 *
 * @generator
 * @name squares
 * @memberof math
 * @api public
 *
 * @param {number} n - The first perfect square.
 * @yields {number} The next perfect square.
 *
 * @example
 * const generator = relue.math.squares();
 *
 * // Returns next perfect square.
 * console.log(generator.next().value);
 */
exports.squares = function*(n=0) {
  while (true) {
    yield n * n;
    n++;
  }
};
