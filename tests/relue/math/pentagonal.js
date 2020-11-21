'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.pentagonal()', function() {
  test('relue.math.pentagonal() is a function', function(done) {
    assert.equal(typeof relue.math.pentagonal, 'function', 'relue.math.pentagonal should be a function.');
    done();
  });

  test('relue.math.pentagonal(), first ten', function(done) {
    const pentagonal = [1, 2, 5, 7, 12, 15, 22, 26, 35, 40];
    const generator = relue.math.pentagonal();
    
    for (let i = 0; i < pentagonal.length; i++) {
      const actual = generator.next().value;
      const expected = pentagonal[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'First ten pentagonal numbers should be equal.');
    }

    done();
  });
});
