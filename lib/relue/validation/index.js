'use strict';

/**
 * @fileOverview validation module for relue.
 *
 * @author Jeremy A Gray <jeremy.a.gray@gmail.com>
 *
 * @namespace validation
 * @memberof relue
 */

const mongo = require('./mongo.js');

module.exports = {
  maybeMongoObjectId: mongo.maybeMongoObjectId
};
