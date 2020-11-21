'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.step()', function() {
  test('relue.math.step() is a function', function(done) {
    assert.equal(typeof relue.math.step,
                 'function',
                 'relue.math.step should be a function.');
    done();
  });

  test('relue.math.step(), input type checks', function(done) {
    assert.isNull(relue.math.step(null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.step(undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.step(true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.step(false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.step(''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.step('a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.step('prime'),
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.step(), less than or equal to zero', function(done) {
    for (let i = 0; i < 100; i++) {
      let actual = relue.math.step(-Math.random() * 10);
      let expected = 0;
      assert.equal(actual, expected, `${actual} should be equal to ${expected}`);
    }      

    done();
  });

  test('relue.math.step(), greater than zero', function(done) {
    for (let i = 0; i < 100; i++) {
      let actual = relue.math.step(Math.random() * 10 + 0.00001);
      let expected = 1;
      assert.equal(actual, expected, `${actual} should be equal to ${expected}`);
    }      

    done();
  });

  test('relue.math.step(), equal to zero', function(done) {
    let actual = relue.math.step(0);
    let expected = 0;
    assert.equal(actual, expected, `${actual} should be equal to ${expected}`);

    done();
  });
});
