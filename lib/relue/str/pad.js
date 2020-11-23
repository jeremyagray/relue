'use strict';

/**
 * Pads the left side of string str with charcter c (default space) to
 * specified length.
 *
 * @function
 * @name padLeft
 * @memberof str
 * @api public
 *
 * @param {string} s - string to be padded
 * @param {number} length - total length of padded string
 * @param {string} [c=' '] - character to use for padding; only uses
 * first character if multicharacter string
 * @returns {string} the padded string
 *
 * @example
 * // Returns '                test'.
 * relue.str.padLeft('test', 20);
 *
 * // Returns '################test'.
 * relue.str.padLeft('test', 20, '#');
 *
 * // Returns '################test'.
 * relue.str.padLeft('test', 20, '#yes');
 */
const padLeft = function(s, length, c=' ') {
  if (s === '') return s;
  // if (! Number.isInteger(length)) return s;
  if (c === '') c = ' ';

  const str = String(s);
  const repeats = parseInt(length) - str.length;
  const ch = String(c[0]);

  return ch.repeat(repeats) + str;
};

/**
 * Alias for {@link str.padLeft}.
 *
 * @function
 * @name alignLeft
 * @memberof str
 * @api public
 *
 */
const alignRight = padLeft;

/**
 * Pads the right side of string str with charcter c (default space) to
 * specified length.
 *
 * @function
 * @name padRight
 * @memberof str
 * @api public
 *
 * @param {string} s - string to be padded
 * @param {number} length - total length of padded string
 * @param {string} [c=' '] - character to use for padding; only uses
 * first character if multicharacter string
 * @returns {string} the padded string
 *
 * @example
 * // Returns 'test                '.
 * relue.str.padRight('test', 20);
 *
 * // Returns 'test################'.
 * relue.str.padRight('test', 20, '#');
 *
 * // Returns 'test################'.
 * relue.str.padRight('test', 20, '#yes');
 */
const padRight = function(s, length, c=' ') {
  if (s === '') return s;
  // if (! Number.isInteger(length)) return s;
  if (c === '') c = ' ';

  const str = String(s);
  const ch = String(c[0]);
  const repeats = parseInt(length) - str.length;

  return str +  ch.repeat(repeats);
};

/**
 * Alias for {@link str.padRight}.
 *
 * @function
 * @name alignLeft
 * @memberof str
 * @api public
 *
 */
const alignLeft = padRight;

/**
 * Centers string str in a string of with length length and both sides
 * padded with charcter c (default space).
 *
 * @function
 * @name justify
 * @memberof str
 * @api public
 *
 * @param {string} s - string to be padded
 * @param {number} length - total length of padded string
 * @param {string} [c=' '] - character to use for padding; only uses
 * first character if multicharacter string
 * @param {string} [extra='right'] - side of string with extra space, if
 * necessary
 * @returns {string} the padded string
 *
 * @example
 * // Returns '########test########'.
 * relue.str.justify('test', 20, '#');
 *
 * // Returns '#######tests########'.
 * relue.str.justify('tests', 20, '#');
 *
 * // Returns '########tests#######'.
 * relue.str.justify('tests', 20, '#', extra='left');
 */
const justify = function(s, length, c=' ', extra='right') {
  if (s === '') return s;
  // if (! Number.isInteger(length)) return s;
  if (c === '') c = ' ';

  const str = String(s);
  const ch = String(c[0]);
  const len = parseInt(length);
  let lefts, rights;

  if (extra === 'left') {
    lefts = Math.ceil((len - str.length) / 2);
    rights = Math.floor((len - str.length) / 2);
  } else {
    rights = Math.ceil((len - str.length) / 2);
    lefts = Math.floor((len - str.length) / 2);
  }

  return ch.repeat(lefts) + str + ch.repeat(rights);
};

exports.padLeft = padLeft;
exports.alignRight = alignRight;
exports.padRight = padRight;
exports.alignLeft = alignLeft;
exports.justify = justify;
