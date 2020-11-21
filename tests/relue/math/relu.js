'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.relu()', function() {
  test('relue.math.relu() is a function', function(done) {
    assert.equal(typeof relue.math.relu, 'function', 'relue.math.relu should be a function.');
    done();
  });

  test('relue.math.relu(), input type checks', function(done) {
    assert.isNull(relue.math.relu(null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.relu(undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.relu(true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.relu(false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.relu(''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.relu('a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.relu('prime'),
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.relu(), return type checks', function(done) {
    assert.isNumber(relue.math.relu(-Math.PI),
                    'Should return a number.');
    assert.isNumber(relue.math.relu(-Math.E),
                    'Should return a number.');
    assert.isNumber(relue.math.relu(-1),
                    'Should return a number.');
    assert.isNumber(relue.math.relu(0),
                    'Should return a number.');
    assert.isNumber(relue.math.relu(1),
                    'Should return a number.');
    assert.isNumber(relue.math.relu(Math.E),
                    'Should return a number.');
    assert.isNumber(relue.math.relu(Math.PI),
                    'Should return a number.');

    done();
  });

  test('relue.math.relu(), less than or equal to zero', function(done) {
    for (let i = 0; i < 100; i++) {
      let actual = relue.math.relu(-Math.random() * 10);
      let expected = 0;
      assert.equal(actual, expected, `${actual} should be equal to ${expected}`);
    }      

    done();
  });

  test('relue.math.relu(), greater than zero', function(done) {
    for (let i = 0; i < 100; i++) {
      let actual = relue.math.relu(Math.random() * 10 + 0.00001);
      let expected = actual;
      assert.equal(actual, expected, `${actual} should be equal to ${expected}`);
    }      

    done();
  });

  test('relue.math.relu(), equal to zero', function(done) {
    let actual = relue.math.relu(0);
    let expected = 0;
    assert.equal(actual, expected, `${actual} should be equal to ${expected}`);

    done();
  });
});
