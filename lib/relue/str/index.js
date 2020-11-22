'use strict';

/**
 * @fileOverview text module for relue.
 *
 * @author Jeremy A Gray <jeremy.a.gray@gmail.com>
 *
 * @namespace text
 * @memberof relue
 */

const mongo = require('./mongo.js');

module.exports = {
  maybeMongoObjectId: mongo.maybeMongoObjectId
};
