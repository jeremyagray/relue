'use strict';

/**
 * @fileOverview text module for relue.
 *
 * @author Jeremy A Gray <jeremy.a.gray@gmail.com>
 *
 * @namespace str
 * @memberof relue
 */

const pad = require('./pad.js');
const ul = require('./underline.js');

module.exports = {
  padLeft: pad.padLeft,
  padRight: pad.padRight,
  alignRight: pad.alignRight,
  alignLeft: pad.alignLeft,
  justify: pad.justify,
  underline: ul.underline
};
