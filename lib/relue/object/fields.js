'use strict';

/**
 * Return true if object is an object and has no properties.
 * Otherwise, return false.  Modified from:
 * https://stackoverflow.com/a/679937
 *
 * @function
 * @name isEmpty
 * @memberof object
 *
 * @param {Object} object - an object
 *
 * @returns {boolean} Returns true if object is an object and has no
 * properties, otherwise false.
 *
 * @example
 * relue.object.isEmpty(obj);
 */
exports.isEmpty = function(object) {
  if (typeof object !== 'string'
      && typeof object !== 'number'
      && typeof object !== 'boolean'
      && typeof object !== 'undefined'
      && object !== null
      && object !== undefined
      && object !== '') {
    for (let property in object) {
      if (Object.hasOwnProperty.call(object, property)) {
        return false;
      }
    }

    return true;
  }

  return false;
};

/**
 * Get an object property (JSON field) if field exists, is not the
 * empty string, is not null, and is not undefined.
 *
 * @function
 * @name getValidField
 * @memberof object
 *
 * @param {string} field - the object key
 * @param {Object} object - object to check for key
 *
 * @returns {Object} The object property (JSON field) if field exists,
 * is not the empty string, is not null, and is not undefined.
 *
 * @example
 * relue.object.getValidField(field, obj);
 */

exports.getValidField = function(field, obj) {
  return (Object.hasOwnProperty.call(obj, field)
          && obj[field] !== ''
          && obj[field] !== null
          && obj[field] !== undefined) ? obj[field] : null;
};
