'use strict';

const nt = require('./number-theory.js');

exports.cubes = function*() {
  let n = 0;
  while (true) {
    yield n * n * n;
    n++;
  }
};

exports.evens = function*() {
  let n = 0;
  while (true) {
    yield n;
    n += 2;
  }
};

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
};

/**
 * Generates the hailstone sequence for n.
 *
 * @generator
 * @yields {number} m - The next number in the hailstone sequence.
 *
 * @example
 * const generator = relue.math.hailstone(27);
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
 * @yields {number} n - The next number in the pentagonal sequence.
 *
 * @example
 * const generator = relue.math.pentagonal();
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
};

exports.squares = function*() {
  let n = 0;
  while (true) {
    yield n * n;
    n++;
  }
};
