'use strict';

/**
 * Returns true if the value is a string.
 *
 * ```js
 * isString('abc');
 * //=> 'true'
 *
 * isString(null);
 * //=> 'false'
 * ```
 *
 * @param  {String} `val`
 * @return {Boolean} True if the value is a string.
 * @api public
 */

module.exports = function isString(str) {
  return str && typeof str === 'string';
};
