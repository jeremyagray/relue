'use strict';

const functions = require('./functions.js');
const generators = require('./generators.js');
const nt = require('./number-theory.js');
const random = require('./random.js');
const vector = require('./vector.js');

module.exports = {
  fibonaccis: generators.fibonaccis,
  isPrime: nt.isPrime,
  primes: generators.primes,
  randomInteger: random.randomInteger,
  relu: functions.relu
};
