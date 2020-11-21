'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.hailstone()', function() {
  test('relue.math.hailstone() is a function', function(done) {
    assert.equal(typeof relue.math.hailstone, 'function', 'relue.math.hailstone should be a function.');
    done();
  });

  test('relue.math.hailstone(), input type checks', function(done) {
    let generator = relue.math.hailstone(null);
    assert.isNull(generator.next().value,
                  'Null is not a valid argument.');
    generator = relue.math.hailstone(undefined);
    assert.isNull(generator.next().value,
                  'Undefined is not a valid argument.');
    generator = relue.math.hailstone(true);
    assert.isNull(generator.next().value,
                  'True is not a valid argument.');
    generator = relue.math.hailstone(false);
    assert.isNull(generator.next().value,
                  'False is not a valid argument.');
    generator = relue.math.hailstone('');
    assert.isNull(generator.next().value,
                  'The empty string is not a valid argument.');
    generator = relue.math.hailstone('a');
    assert.isNull(generator.next().value,
                  '"a" is not a valid argument.');
    generator = relue.math.hailstone('prime');
    assert.isNull(generator.next().value,
                  '"prime" is not a valid argument.');

    done();
  });

  test('relue.math.hailstone(-1)', function(done) {
    const hailstone = [0];
    const generator = relue.math.hailstone(-1);
    
    let i = 0;
    while (! generator.next().done) {
      const actual = generator.next().value;
      const expected = hailstone[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'Hailstone sequences should be equal.');
    }

    done();
  });

  test('relue.math.hailstone(0)', function(done) {
    const hailstone = [0];
    const generator = relue.math.hailstone(0);
    
    let i = 0;
    while (! generator.next().done) {
      const actual = generator.next().value;
      const expected = hailstone[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'Hailstone sequences should be equal.');
    }

    done();
  });

  test('relue.math.hailstone(1)', function(done) {
    const hailstone = [1];
    const generator = relue.math.hailstone(1);
    
    let i = 0;
    while (! generator.next().done) {
      const actual = generator.next().value;
      const expected = hailstone[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'Hailstone sequences should be equal.');
    }

    done();
  });

  test('relue.math.hailstone(2)', function(done) {
    const hailstone = [2, 1];
    
    let i = 0;
    for (let actual of relue.math.hailstone(2)) {
      const expected = hailstone[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'Hailstone sequences should be equal.');
      i++;
    }

    done();
  });

  test('relue.math.hailstone(5)', function(done) {
    const hailstone = [5, 16, 8, 4, 2, 1];
    
    let i = 0;
    for (let actual of relue.math.hailstone(5)) {
      const expected = hailstone[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'Hailstone sequences should be equal.');
      i++;
    }

    done();
  });

  test('relue.math.hailstone(7)', function(done) {
    const hailstone = [
      7, 22, 11, 34, 17,
      52, 26, 13, 40, 20,
      10, 5, 16, 8, 4, 2, 1
    ];
    
    let i = 0;
    for (let actual of relue.math.hailstone(7)) {
      const expected = hailstone[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'Hailstone sequences should be equal.');
      i++;
    }

    done();
  });
});
