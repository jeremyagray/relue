'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.primes()', function() {
  test('relue.math.primes() is a function', function(done) {
    assert.equal(typeof relue.math.primes, 'function', 'relue.math.primes should be a function.');
    done();
  });

  test('relue.math.primes(), first ten', function(done) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    const generator = relue.math.primes();
    
    for (let i = 0; i < primes.length; i++) {
      const actual = generator.next().value;
      const expected = primes[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'First ten prime numbers should be equal.');
    }

    done();
  });
});
