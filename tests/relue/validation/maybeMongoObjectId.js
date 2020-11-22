'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.validation.maybeMongoObjectId()', function() {
  test('maybeMongoObjectId() is a function', function(done) {
    assert.equal(
      typeof relue.validation.maybeMongoObjectId,
      'function',
      'maybeMongoObjectId should be a function.');

    done();
  });

  test('maybeMongoObjectId(), invalid id, null',
       function(done) {
         assert.isFalse(relue.validation.maybeMongoObjectId(null));

         done();
       });

  test('maybeMongoObjectId(), invalid id, undefined',
       function(done) {
         assert.isFalse(relue.validation.maybeMongoObjectId(undefined));

         done();
       });

  test('maybeMongoObjectId(), invalid id, empty string',
       function(done) {
         assert.isFalse(relue.validation.maybeMongoObjectId(''));

         done();
       });

  test('maybeMongoObjectId(), invalid id, integer', function(done) {
    assert.isFalse(relue.validation.maybeMongoObjectId(Math.random()));
    done();
  });

  test('maybeMongoObjectId(), invalid id, date', function(done) {
    assert.isFalse(relue.validation.maybeMongoObjectId(new Date()));
    done();
  });

  test('maybeMongoObjectId(), invalid id, valid characters, too short',
       function(done) {
         assert.isFalse(relue.validation.maybeMongoObjectId('11'));

         done();
       });

  test('maybeMongoObjectId(), invalid id, invalid characters, too short',
       function(done) {
         assert.isFalse(relue
           .validation
           .maybeMongoObjectId('notvalididnotvalidid'));

         done();
       });

  test('maybeMongoObjectId(), invalid id, valid characters, too long',
       function(done) {
         assert.isFalse(relue
           .validation
           .maybeMongoObjectId('0123456789012345678901234'));

         done();
       });

  test('maybeMongoObjectId(), invalid id, invalid characters, too long',
       function(done) {
         assert.isFalse(relue.
           validation
           .maybeMongoObjectId('notvalididnotvalididnotvalidid'));

         done();
       });

  test('maybeMongoObjectId(), invalid id, invalid characters, just right',
       function(done) {
         assert.isFalse(relue
           .validation
           .maybeMongoObjectId('notvalididnotvalididnotv'));

         done();
       });

  test('maybeMongoObjectId() on valid id', function(done) {
    assert.isTrue(relue
      .validation.maybeMongoObjectId('5f821b527ed9c0024ef7e828'));

    done();
  });
});
