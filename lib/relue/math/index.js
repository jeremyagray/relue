'use strict';

/**
 * @fileOverview math module for relue.
 *
 * @author Jeremy A Gray <jeremy.a.gray@gmail.com>
 *
 * @namespace math
 * @memberof relue
 */

const functions = require('./functions.js');
const generators = require('./generators.js');
const nt = require('./number-theory.js');
const random = require('./random.js');
const vector = require('./vector.js');

module.exports = {
  cubes: generators.cubes,
  evens: generators.evens,
  fibonaccis: generators.fibonaccis,
  hailstone: generators.hailstone,
  isPrime: nt.isPrime,
  linstep: functions.linstep,
  logistic: functions.logistic,
  odds: generators.odds,
  pentagonal: generators.pentagonal,
  primes: generators.primes,
  randomInteger: random.randomInteger,
  randomBetween: random.randomBetween,
  relu: functions.relu,
  squares: generators.squares,
  step: functions.step,
  Vector: vector.Vector
};
