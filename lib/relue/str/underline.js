'use strict';

/**
 * Underlines string s with character c.
 *
 * @function
 * @name underline
 * @memberof str
 * @api public
 *
 * @param {string} s - string to be underlined
 * @param {string} [c='-'] - character to use for padding; only uses
 * first character if multicharacter string
 * @returns {string} the padded string
 *
 * @example
 * // Returns '--------------------'.
 * relue.str.underline('################test');
 *
 * // Returns '********************'.
 * relue.str.underline('################test', '*');
 */
const underline = function(s, c='-') {
  if (s === '') return s;
  if (c === '') c = '-';

  const ch = String(c[0]);

  return ch.repeat(String(s).length);
};

exports.underline = underline;
