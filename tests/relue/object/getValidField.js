'use strict';

const chai = require('chai');
const assert = chai.assert;

const relue = require('../../../index.js');

suite('relue.object.getValidField()', function() {
  test('relue.object.getValidField() is a function', function(done) {
    assert.equal(typeof relue.object.getValidField, 'function', 'relue.object.getValidField should be a function.');
    done();
  });

  test('relue.object.getValidField() on empty object', function(done) {
    assert.isNull(relue.object.getValidField('', {}), 'Empty object should return null.');
    done();
  });

  test('relue.object.getValidField() on object with field containing an empty string', function(done) {
    const json = {
      'status': 200,
      'msg': 'this is a message',
      'error':  ''
    };
    assert.isNull(relue.object.getValidField('error', json), 'A field with an empty string should return null.');
    done();
  });

  test('relue.object.getValidField() on object with field containing null', function(done) {
    const json = {
      'status': 200,
      'msg': 'this is a message',
      'error':  null
    };
    assert.isNull(relue.object.getValidField('error', json), 'A field with null should return null.');
    done();
  });

  test('relue.object.getValidField() on object with field containing undefined', function(done) {
    const json = {
      'status': 200,
      'msg': 'this is a message',
      'error':  undefined
    };
    assert.isNull(relue.object.getValidField('error', json), 'A field with undefined should return null.');
    done();
  });

  test('relue.object.getValidField() on object with fields', function(done) {
    const json = {
      'status': 200,
      'msg': 'this is a message',
      'error':  'this is an error'
    };
    assert.equal(relue.object.getValidField('status', json), 200);
    assert.equal(relue.object.getValidField('msg', json), 'this is a message');
    assert.equal(relue.object.getValidField('error', json), 'this is an error');
    assert.isNull(relue.object.getValidField('title', json));
    done();
  });
});
