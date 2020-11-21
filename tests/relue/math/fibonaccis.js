'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.math.fibonaccis()', function() {
  test('relue.math.fibonaccis() is a function', function(done) {
    assert.equal(typeof relue.math.fibonaccis, 'function', 'relue.math.fibonaccis should be a function.');
    done();
  });

  test('relue.math.fibonaccis(), first ten', function(done) {
    const fibos = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const generator = relue.math.fibonaccis();
    
    for (let i = 0; i < fibos.length; i++) {
      const actual = generator.next().value;
      const expected = fibos[i];
      assert.equal(actual,
                   expected,
                   'First ten Fibonacci numbers should be equal.');
    }

    done();
  });
});
