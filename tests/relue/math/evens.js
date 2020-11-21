'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.evens()', function() {
  test('relue.math.evens() is a function', function(done) {
    assert.equal(typeof relue.math.evens, 'function', 'relue.math.evens should be a function.');
    done();
  });

  test('relue.math.evens(), first ten', function(done) {
    const evens = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
    const generator = relue.math.evens();
    
    for (let i = 0; i < evens.length; i++) {
      const actual = generator.next().value;
      const expected = evens[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'First ten even numbers should be equal.');
    }

    done();
  });
});
