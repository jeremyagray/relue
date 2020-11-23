'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.str.padLeft()', function() {
  test('relue.str.padLeft() is a function', function(done) {
    assert.equal(typeof relue.str.padLeft,
                 'function',
                 'relue.str.padLeft should be a function.');

    done();
  });

  test('relue.str.padLeft() length checks', function(done) {
    const msg = 'Lengths should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padLeft('test', len).length;
      expected = len;

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padLeft() empty string', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;
    let len = relue.math.randomInteger(5, 30);

    str = '';
    actual = relue.str.padLeft(str, len);
    expected = str;

    assert.equal(actual, expected, msg);

    done();
  });

  test('relue.str.padLeft() empty char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padLeft('test', len, '');
      expected = ' '.repeat(len - 'test'.length) + 'test';

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padLeft() string checks, defaults', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padLeft('test', len);
      expected = ' '.repeat(len - 'test'.length) + 'test';

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padLeft() string checks, custom', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padLeft('test', len, '#');
      expected = '#'.repeat(len - 'test'.length) + 'test';

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padLeft() string checks, string not char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padLeft('test', len, '*yes*');
      expected = '*'.repeat(len - 'test'.length) + 'test';

      assert.equal(actual, expected, msg);
    }

    done();
  });
});

suite('relue.str.padRight()', function() {
  test('relue.str.padRight() is a function', function(done) {
    assert.equal(typeof relue.str.padRight,
                 'function',
                 'relue.str.padRight should be a function.');

    done();
  });

  test('relue.str.padRight() length checks', function(done) {
    const msg = 'Lengths should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padRight('test', len).length;
      expected = len;

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padRight() empty string', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;
    let len = relue.math.randomInteger(5, 30);

    str = '';
    actual = relue.str.padRight(str, len);
    expected = str;

    assert.equal(actual, expected, msg);

    done();
  });

  test('relue.str.padRight() empty char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padRight('test', len, '');
      expected = 'test' + ' '.repeat(len - 'test'.length);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padRight() string checks, defaults', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padRight('test', len);
      expected = 'test' + ' '.repeat(len - 'test'.length);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padRight() string checks, custom', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padRight('test', len, '#');
      expected = 'test' + '#'.repeat(len - 'test'.length);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.padRight() string checks, string not char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.padRight('test', len, '*yes*');
      expected = 'test' + '*'.repeat(len - 'test'.length);

      assert.equal(actual, expected, msg);
    }

    done();
  });
});

suite('relue.str.justify()', function() {
  test('relue.str.justify() is a function', function(done) {
    assert.equal(typeof relue.str.justify,
                 'function',
                 'relue.str.justify should be a function.');

    done();
  });

  test('relue.str.justify() length checks', function(done) {
    const msg = 'Lengths should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      actual = relue.str.justify('test', len).length;
      expected = len;

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.justify() empty string', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected, str;
    let len = relue.math.randomInteger(5, 30);

    str = '';
    actual = relue.str.justify(str, len);
    expected = str;

    assert.equal(actual, expected, msg);

    done();
  });

  test('relue.str.justify() empty char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      let lefts = Math.floor((len - 'test'.length) / 2);
      let rights = Math.ceil((len - 'test'.length) / 2);
      actual = relue.str.justify('test', len, '');
      expected = ' '.repeat(lefts) + 'test' + ' '.repeat(rights);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.justify() string checks, defaults', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      let lefts = Math.floor((len - 'test'.length) / 2);
      let rights = Math.ceil((len - 'test'.length) / 2);
      actual = relue.str.justify('test', len);
      expected = ' '.repeat(lefts) + 'test' + ' '.repeat(rights);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.justify() string checks, custom', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      let lefts = Math.floor((len - 'test'.length) / 2);
      let rights = Math.ceil((len - 'test'.length) / 2);
      actual = relue.str.justify('test', len, '#');
      expected = '#'.repeat(lefts) + 'test' + '#'.repeat(rights);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.justify() string checks, string not char', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      let lefts = Math.floor((len - 'test'.length) / 2);
      let rights = Math.ceil((len - 'test'.length) / 2);
      actual = relue.str.justify('test', len, '*yes*');
      expected = '*'.repeat(lefts) + 'test' + '*'.repeat(rights);

      assert.equal(actual, expected, msg);
    }

    done();
  });

  test('relue.str.justify() extra left side', function(done) {
    const msg = 'Strings should be equal.';
    let actual, expected;

    for (let i = 0; i < 30; i ++) {
      let len = relue.math.randomInteger(5, 30);
      let lefts = Math.ceil((len - 'test'.length) / 2);
      let rights = Math.floor((len - 'test'.length) / 2);
      actual = relue.str.justify('test', len, '*yes*', 'left');
      expected = '*'.repeat(lefts) + 'test' + '*'.repeat(rights);

      assert.equal(actual, expected, msg);
    }

    done();
  });
});
