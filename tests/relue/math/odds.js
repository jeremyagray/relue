'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.odds()', function() {
  test('relue.math.odds() is a function', function(done) {
    assert.equal(typeof relue.math.odds, 'function', 'relue.math.odds should be a function.');
    done();
  });

  test('relue.math.odds(), first ten', function(done) {
    const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const generator = relue.math.odds();
    
    for (let i = 0; i < odds.length; i++) {
      const actual = generator.next().value;
      const expected = odds[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'First ten odd numbers should be equal.');
    }

    done();
  });
});
