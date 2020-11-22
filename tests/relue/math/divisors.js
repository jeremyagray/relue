'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.divisors()', function() {
  test('relue.math.divisors() is a function', function(done) {
    assert.equal(typeof relue.math.divisors,
                 'function',
                 'relue.math.divisors should be a function.');

    done();
  });

  test('relue.math.divisors(), input type checks', function(done) {
    assert.isNull(relue.math.divisors(null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.divisors(undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.divisors(true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.divisors(false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.divisors(''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.divisors('a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.divisors('prime'),
                  '"prime" is not a valid argument.');
    assert.isNull(relue.math.divisors(0),
                  '0 is not a valid argument.');
    assert.isNull(relue.math.divisors(-1),
                  '-1 is not a valid argument.');

    done();
  });

  test('relue.math.divisors(), result checks', function(done) {
    let actual, expected;
    const msg = 'Results should be equal.';

    actual = relue.math.divisors(1);
    expected = [1];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    actual = relue.math.divisors(2);
    expected = [1, 2];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    actual = relue.math.divisors(6);
    expected = [1, 2, 3, 6];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    actual = relue.math.divisors(8);
    expected = [1, 2, 4, 8];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    actual = relue.math.divisors(60);
    expected = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    done();
  });
});

suite('relue.math.properDivisors()', function() {
  test('relue.math.properDivisors() is a function', function(done) {
    assert.equal(typeof relue.math.properDivisors,
                 'function',
                 'relue.math.properDivisors should be a function.');

    done();
  });

  test('relue.math.properDivisors(), input type checks', function(done) {
    assert.isNull(relue.math.properDivisors(null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.properDivisors(undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.properDivisors(true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.properDivisors(false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.properDivisors(''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.properDivisors('a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.properDivisors('prime'),
                  '"prime" is not a valid argument.');
    assert.isNull(relue.math.properDivisors(0),
                  '0 is not a valid argument.');
    assert.isNull(relue.math.properDivisors(-1),
                  '-1 is not a valid argument.');

    done();
  });

  test('relue.math.properDivisors(), result checks', function(done) {
    let actual, expected;
    const msg = 'Results should be equal.';

    actual = relue.math.properDivisors(1);
    expected = [];
    assert.deepEqual(actual, expected, msg);
    
    actual = relue.math.properDivisors(2);
    expected = [1];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    actual = relue.math.properDivisors(6);
    expected = [1, 2, 3];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    actual = relue.math.properDivisors(8);
    expected = [1, 2, 4];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    actual = relue.math.properDivisors(60);
    expected = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30];
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i], msg);
    }
    
    done();
  });
});
