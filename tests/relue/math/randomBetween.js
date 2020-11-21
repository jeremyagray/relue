'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.randomBetween()', function() {
  test('relue.math.randomBetween() is a function', function(done) {
    assert.equal(typeof relue.math.randomBetween, 'function', 'relue.math.randomBetween should be a function.');
    done();
  });

  test('relue.math.randomBetween(), input type checks', function(done) {
    assert.isNull(relue.math.randomBetween(null, 1),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.randomBetween(1, null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.randomBetween(null, null),
                  'Null is not a valid argument.');
    assert.isNull(relue.math.randomBetween(undefined, 1),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.randomBetween(1, undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.randomBetween(undefined, undefined),
                  'Undefined is not a valid argument.');
    assert.isNull(relue.math.randomBetween(true, 1),
                  'True is not a valid argument.');
    assert.isNull(relue.math.randomBetween(1, true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.randomBetween(true, true),
                  'True is not a valid argument.');
    assert.isNull(relue.math.randomBetween(false, 1),
                  'False is not a valid argument.');
    assert.isNull(relue.math.randomBetween(1, false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.randomBetween(false, false),
                  'False is not a valid argument.');
    assert.isNull(relue.math.randomBetween('', 1),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.randomBetween(1, ''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.randomBetween('', ''),
                  'The empty string is not a valid argument.');
    assert.isNull(relue.math.randomBetween('a', 1),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.randomBetween(1, 'a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.randomBetween('a', 'a'),
                  '"a" is not a valid argument.');
    assert.isNull(relue.math.randomBetween('prime', 1),
                  '"prime" is not a valid argument.');
    assert.isNull(relue.math.randomBetween(1, 'prime'),
                  '"prime" is not a valid argument.');
    assert.isNull(relue.math.randomBetween('prime', 'prime'),
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.randomBetween(), return type checks', function(done) {
    assert.isNumber(relue.math.randomBetween(-1, 1),
                    'Should return a number.');
    assert.isNumber(relue.math.randomBetween(-Math.PI, Math.PI),
                    'Should return a number.');
    assert.isNumber(relue.math.randomBetween(-Math.E, Math.E),
                    'Should return a number.');

    done();
  });

  test('relue.math.randomBetween(), increasing interval, positive', function(done) {

    const lo = 0;
    const hi = 10;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomBetween(lo, hi);
      assert.isAtLeast(num, lo, `${num} should be greater than or equal to ${lo}`);
      assert.isBelow(num, hi, `${num} should be less than ${hi}`);
    }      

    done();
  });

  test('relue.math.randomBetween(), increasing interval, negative', function(done) {

    const lo = -15;
    const hi = -8;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomBetween(lo, hi);
      assert.isAtLeast(num, lo, `${num} should be greater than or equal to ${lo}`);
      assert.isBelow(num, hi, `${num} should be less than ${hi}`);
    }      

    done();
  });

  test('relue.math.randomBetween(), increasing interval, includes zero', function(done) {

    const lo = -7;
    const hi = 20;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomBetween(lo, hi);
      assert.isAtLeast(num, lo, `${num} should be greater than or equal to ${lo}`);
      assert.isBelow(num, hi, `${num} should be less than ${hi}`);
    }      

    done();
  });

  test('relue.math.randomBetween(), decreasing interval, positive', function(done) {

    const hi = 0;
    const lo = 10;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomBetween(lo, hi);
      assert.isAtLeast(num, hi, `${num} should be greater than or equal to ${hi}`);
      assert.isBelow(num, lo, `${num} should be less than ${lo}`);
    }      

    done();
  });

  test('relue.math.randomBetween(), decreasing interval, negative', function(done) {

    const hi = -13;
    const lo = -9;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomBetween(lo, hi);
      assert.isAtLeast(num, hi, `${num} should be greater than or equal to ${hi}`);
      assert.isBelow(num, lo, `${num} should be less than ${lo}`);
    }      

    done();
  });

  test('relue.math.randomBetween(), decreasing interval, includes zero', function(done) {

    const hi = -2;
    const lo = 31;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomBetween(lo, hi);
      assert.isAtLeast(num, hi, `${num} should be greater than or equal to ${hi}`);
      assert.isBelow(num, lo, `${num} should be less than ${lo}`);
    }      

    done();
  });

  test('relue.math.randomBetween(), zero interval', function(done) {

    const hi = 0;
    const lo = 0;
    
    for (let i = 0; i < 100; i++) {
      let num = relue.math.randomBetween(lo, hi);
      assert.equal(num, hi, `${num} should equal ${hi}`);
      assert.equal(num, lo, `${num} should equal ${lo}`);
    }      

    done();
  });
});
