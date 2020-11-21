'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.object.isEmpty() tests', function() {
  test('relue.object.isEmpty() is a function', function(done) {
    assert.equal(typeof relue.object.isEmpty, 'function', 'relue.object.isEmpty should be a function.');
    done();
  });

  test('relue.object.isEmpty() on empty object', function(done) {
    assert.isTrue(relue.object.isEmpty({}), 'Empty object is empty.');
    done();
  });

  test('relue.object.isEmpty() on null', function(done) {
    assert.isFalse(relue.object.isEmpty(null), 'Null is not an object (for these purposes).');
    done();
  });

  test('relue.object.isEmpty() on undefined', function(done) {
    assert.isFalse(relue.object.isEmpty(undefined, 'undefined is not an object.'));
    done();
  });

  test('relue.object.isEmpty() on empty string', function(done) {
    assert.isFalse(relue.object.isEmpty(''), 'The empty string is not an object.');
    done();
  });

  test('relue.object.isEmpty() on integer', function(done) {
    assert.isFalse(relue.object.isEmpty(12), 'A number is not an object.');
    done();
  });

  test('relue.object.isEmpty() on true', function(done) {
    assert.isFalse(relue.object.isEmpty(true), 'Booleans are not objects.');
    done();
  });

  test('relue.object.isEmpty() on false', function(done) {
    assert.isFalse(relue.object.isEmpty(false), 'Booleans are not objects.');
    done();
  });

  test('relue.object.isEmpty() on non-empty object', function(done) {
    assert.isFalse(relue.object.isEmpty({'key': 'value'}),
                   'An object with properties is not empty.');
    done();
  });
});
