'use strict';

/**
 * @fileOverview object module for relue.
 *
 * @author Jeremy A Gray <jeremy.a.gray@gmail.com>
 *
 * @namespace object
 * @memberof relue
 */

const fields = require('./fields.js');

module.exports = {
  getValidField: fields.getValidField,
  isEmpty: fields.isEmpty
};
