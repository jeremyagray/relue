'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

console.log(relue);

suite('relue.text.maybeMongoObjectId()', function() {
  test('relue.text.maybeMongoObjectId() is a function', function(done) {
    assert.equal(typeof relue.text.maybeMongoObjectId, 'function', 'relue.text.maybeMongoObjectId should be a function.');
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, null', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId(null));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, undefined', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId(undefined));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, empty string', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId(''));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, integer', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId(Math.random()));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, date', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId(new Date()));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, valid characters, too short', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId('11'));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, invalid characters, too short', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId('notvalididnotvalidid'));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, valid characters, too long', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId('0123456789012345678901234'));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, invalid characters, too long', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId('notvalididnotvalididnotvalidid'));
    done();
  });

  test('relue.text.maybeMongoObjectId(), invalid id, invalid characters, just right', function(done) {
    assert.isFalse(relue.text.maybeMongoObjectId('notvalididnotvalididnotv'));
    done();
  });

  test('relue.text.maybeMongoObjectId() on valid id', function(done) {
    assert.isTrue(relue.text.maybeMongoObjectId('5f821b527ed9c0024ef7e828'));
    done();
  });
});
