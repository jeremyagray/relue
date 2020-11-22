'use strict';

/**
 * Determines if a string is a likely Mongo DB ObjectId.  str should
 * not be null, undefined, empty, or not 24 characters long.  str
 * should be in hexadecimal.  str should equal `new
 * mongoose.Types.ObjectId(str).toString()`.
 *
 * @function
 * @name maybeMongoObjectId
 * @memberof validation
 * @api public
 *
 * @param {string} str - a possible Mongo ObjectId.
 * @returns {boolean} true if str is a possible Mongo ObjectId, false
 * otherwise.
 *
 * @example
 * relue.text.maybeMongoObjectId(str);
 */
exports.maybeMongoObjectId = function(str) {
  if (str === null
      || str === undefined
      || str === ''
      || str.length != 24) {
    return false;
  } else if (! /^[0-9a-f]{24}$/.test(str.toLowerCase())) {
    // Not hexadecimal.
    return false;
  } else {
    return true;
  }
};
