'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.logistic()', function() {
  test('relue.math.logistic() is a function', function(done) {
    assert.equal(typeof relue.math.logistic,
                 'function',
                 'relue.math.logistic should be a function.');
    done();
  });

  test('relue.math.logistic(), input type checks', function(done) {
    assert.isNull(relue.math.logistic(null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.logistic(undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.logistic(true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.logistic(false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.logistic(''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.logistic('a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.logistic('prime'),
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.logistic(), return type checks', function(done) {
    assert.isNumber(relue.math.logistic(-Math.PI),
                    'Should return a number.');
    assert.isNumber(relue.math.logistic(-Math.E),
                    'Should return a number.');
    assert.isNumber(relue.math.logistic(-1),
                    'Should return a number.');
    assert.isNumber(relue.math.logistic(0),
                    'Should return a number.');
    assert.isNumber(relue.math.logistic(1),
                    'Should return a number.');
    assert.isNumber(relue.math.logistic(Math.E),
                    'Should return a number.');
    assert.isNumber(relue.math.logistic(Math.PI),
                    'Should return a number.');

    done();
  });

  test('relue.math.logistic(), less than or equal to zero', function(done) {
    for (let i = 0; i < 100; i++) {
      let value = relue.math.randomBetween(-10, 10);
      let actual = relue.math.logistic(value);
      let min = -1;
      let max = 1;

      assert.isAtLeast(actual, min, `${actual} should be at least ${min}`);
      assert.isAtMost(actual, max, `${actual} should be at most ${max}`);
    }      

    done();
  });
});
