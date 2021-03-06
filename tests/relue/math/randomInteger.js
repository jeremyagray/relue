'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.randomInteger()', function() {
  test('relue.math.randomInteger() is a function', function(done) {
    assert.equal(typeof relue.math.randomInteger, 'function', 'relue.math.randomInteger should be a function.');
    done();
  });

  test('relue.math.randomInteger(), input type checks', function(done) {
    assert.isNull(relue.math.randomInteger(null, 1),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.randomInteger(1, null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.randomInteger(null, null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.randomInteger(undefined, 1),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.randomInteger(1, undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.randomInteger(undefined, undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.randomInteger(true, 1),
                  'True is not a valid argument.');
    assert.isNull(relue.math.randomInteger(1, true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.randomInteger(true, true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.randomInteger(false, 1),
                  'False is not a valid argument.');
    assert.isNull(relue.math.randomInteger(1, false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.randomInteger(false, false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.randomInteger('', 1),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.randomInteger(1, ''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.randomInteger('', ''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.randomInteger('a', 1),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.randomInteger(1, 'a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.randomInteger('a', 'a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.randomInteger('prime', 1),
                  '"prime" is not a valid argument.');
    assert.isNull(relue.math.randomInteger(1, 'prime'),
                  '"prime" is not a valid argument.');
    assert.isNull(relue.math.randomInteger('prime', 'prime'),
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.randomInteger(), return type checks', function(done) {
    assert.isNumber(relue.math.randomInteger(-1, 1),
                    'Should return a number.');
    assert.isNumber(relue.math.randomInteger(0, 5),
                    'Should return a number.');
    assert.isNumber(relue.math.randomInteger(1, 10),
                    'Should return a number.');

    done();
  });

  test('relue.math.randomInteger(), increasing interval, positive', function(done) {

    const lo = 0;
    const hi = 10;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomInteger(lo, hi);
      assert.isAtLeast(num, lo, `${num} should be greater than or equal to ${lo}`);
      assert.isBelow(num, hi, `${num} should be less than ${hi}`);
    }      

    done();
  });

  test('relue.math.randomInteger(), increasing interval, negative', function(done) {

    const lo = -15;
    const hi = -8;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomInteger(lo, hi);
      assert.isAtLeast(num, lo, `${num} should be greater than or equal to ${lo}`);
      assert.isBelow(num, hi, `${num} should be less than ${hi}`);
    }      

    done();
  });

  test('relue.math.randomInteger(), increasing interval, includes zero', function(done) {

    const lo = -7;
    const hi = 20;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomInteger(lo, hi);
      assert.isAtLeast(num, lo, `${num} should be greater than or equal to ${lo}`);
      assert.isBelow(num, hi, `${num} should be less than ${hi}`);
    }      

    done();
  });

  test('relue.math.randomInteger(), decreasing interval, positive', function(done) {

    const hi = 0;
    const lo = 10;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomInteger(lo, hi);
      assert.isAtLeast(num, hi, `${num} should be greater than or equal to ${hi}`);
      assert.isBelow(num, lo, `${num} should be less than ${lo}`);
    }      

    done();
  });

  test('relue.math.randomInteger(), decreasing interval, negative', function(done) {

    const hi = -13;
    const lo = -9;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomInteger(lo, hi);
      assert.isAtLeast(num, hi, `${num} should be greater than or equal to ${hi}`);
      assert.isBelow(num, lo, `${num} should be less than ${lo}`);
    }      

    done();
  });

  test('relue.math.randomInteger(), decreasing interval, includes zero', function(done) {

    const hi = -2;
    const lo = 31;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomInteger(lo, hi);
      assert.isAtLeast(num, hi, `${num} should be greater than or equal to ${hi}`);
      assert.isBelow(num, lo, `${num} should be less than ${lo}`);
    }      

    done();
  });

  test('relue.math.randomInteger(), zero interval', function(done) {

    const hi = 0;
    const lo = 0;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomInteger(lo, hi);
      assert.equal(num, hi, `${num} should equal ${hi}`);
      assert.equal(num, lo, `${num} should equal ${lo}`);
    }      

    done();
  });
});
