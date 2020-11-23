'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.str.underline()', function() {
  test('relue.str.underline() is a function', function(done) {
    assert.equal(typeof relue.str.underline,
                 'function',
                 'relue.str.underline should be a function.');

    done();
  });

  test('relue.str.underline() length checks', function(done) {
    const msg = 'Lengths should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      expected = relue.math.randomInteger(5, 30);
      actual = relue.str.underline(' '.repeat(expected)).length;

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.underline() string checks, defaults', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      str = ' '.repeat(len);
      actual = relue.str.underline(str);
      expected = '-'.repeat(len);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.underline() string checks, defaults', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      str = ' '.repeat(len);
      actual = relue.str.underline(str);
      expected = '-'.repeat(len);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.underline() empty string', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;

    str = '';
    actual = relue.str.underline(str);
    expected = str;

    assert.equal(actual, expected, msg);

    done();
  });

  test('relue.str.underline() empty char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      str = ' '.repeat(len);
      actual = relue.str.underline(str, '');
      expected = '-'.repeat(len);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.underline() string checks, string not char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      str = ' '.repeat(len);
      actual = relue.str.underline(str, '*yes*');
      expected = '*'.repeat(len);

      assert.equal(actual, expected, msg);
    }

    done();
  });
});
