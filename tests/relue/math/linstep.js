'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.linstep()', function() {
  test('relue.math.linstep() is a function', function(done) {
    assert.equal(typeof relue.math.linstep,
                 'function',
                 'relue.math.linstep should be a function.');
    done();
  });

  test('relue.math.linstep(), input type checks', function(done) {
    assert.isNull(relue.math.linstep(null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.linstep(undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.linstep(true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.linstep(false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.linstep(''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.linstep('a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.linstep('prime'),
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.linstep(), less than or equal to zero', function(done) {
    for (let i = 0; i < 100; i++) {
      let value = relue.math.randomBetween(-10, 10);
      let actual = relue.math.linstep(value);
      let expected;
      if (value < -1) {
        expected = -1;
      } else if (value > 1) {
        expected = 1;
      } else {
        expected = value;
      }

      assert.equal(actual, expected, `${actual} should be equal to ${expected}`);
    }      

    done();
  });
});
