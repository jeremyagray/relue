'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.isPrime()', function() {
  test('relue.math.isPrime() is a function', function(done) {
    assert.equal(typeof relue.math.isPrime, 'function', 'relue.math.isPrime should be a function.');
    done();
  });

  test('relue.math.isPrime(), null', function(done) {
    assert.isNull(relue.math.isPrime(null),
                  'Null is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), undefined', function(done) {
    assert.isNull(relue.math.isPrime(undefined),
                  'Undefined is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), true', function(done) {
    assert.isNull(relue.math.isPrime(true),
                  'True is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), false', function(done) {
    assert.isNull(relue.math.isPrime(false),
                  'False is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), empty string', function(done) {
    assert.isNull(relue.math.isPrime(''),
                  'The empty string is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), character', function(done) {
    assert.isNull(relue.math.isPrime('a'),
                  '"a" is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), string', function(done) {
    assert.isNull(relue.math.isPrime('prime'),
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), float', function(done) {
    assert.isNull(relue.math.isPrime(3.14),
                  '3.14 is not a valid argument.');

    done();
  });

  test('relue.math.isPrime(), negative integers', function(done) {
    for (let i = 0; i < 10; i++) {
      assert.isFalse(relue.math.isPrime(relue.math.randomInteger(-100, -1)),
                     'Negative integers are not prime.');
    }

    done();
  });

  test('relue.math.isPrime(), zero', function(done) {
    assert.isFalse(relue.math.isPrime(0),
                   'Zero is not prime.');

    done();
  });

  test('relue.math.isPrime(), one', function(done) {
    assert.isFalse(relue.math.isPrime(1),
                   'One is not prime.');

    done();
  });

  test('relue.math.isPrime(), prime integers', function(done) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    for (let i = 0; i < primes.length; i++) {
      assert.isTrue(relue.math.isPrime(primes[i]),
                    'Prime integers are prime.');
    }

    done();
  });
});
