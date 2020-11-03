'use strict';

// Modified from:  https://stackoverflow.com/a/679937
// Return true if object is an object and has no properties.
// Otherwise, return false.
exports.isEmpty = function(object) {
// function isEmpty(object) {
  if (typeof object !== 'string'
      && typeof object !== 'number'
      && typeof object !== 'boolean'
      && typeof object !== 'undefined'
      && object !== null
      && object !== undefined
      && object !== '') {
    for (let property in object) {
      if(Object.hasOwnProperty.call(object, property)) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}

// Get an object property (JSON field) if field exists, is not the
// empty string, is not null, and is not undefined.
exports.getValidField = function(field, obj) {
// function getValidField(field, obj) {
  return (Object.hasOwnProperty.call(obj, field)
          && obj[field] !== ''
          && obj[field] !== null
          && obj[field] !== undefined) ? obj[field] : null;
}
