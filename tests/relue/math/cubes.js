'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.cubes()', function() {
  test('relue.math.cubes() is a function', function(done) {
    assert.equal(typeof relue.math.cubes, 'function', 'relue.math.cubes should be a function.');
    done();
  });

  test('relue.math.cubes(), first ten', function(done) {
    const cubes = [0, 1, 8, 27, 64, 125, 216, 343, 512, 729];
    const generator = relue.math.cubes();
    
    for (let i = 0; i < cubes.length; i++) {
      const actual = generator.next().value;
      const expected = cubes[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'First ten cubed numbers should be equal.');
    }

    done();
  });
});
