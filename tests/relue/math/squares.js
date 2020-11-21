'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.squares()', function() {
  test('relue.math.squares() is a function', function(done) {
    assert.equal(typeof relue.math.squares, 'function', 'relue.math.squares should be a function.');
    done();
  });

  test('relue.math.squares(), first ten', function(done) {
    const squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
    const generator = relue.math.squares();
    
    for (let i = 0; i < squares.length; i++) {
      const actual = generator.next().value;
      const expected = squares[i];
      assert.isNumber(actual,
                      'Numbers should be returned.');
      assert.equal(actual,
                   expected,
                   'First ten squared numbers should be equal.');
    }

    done();
  });
});
