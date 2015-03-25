'use strict';

/**
 * Returns true if any value exists, false if empty. Works for booleans,
 * functions, numbers, strings, nulls, objects and arrays.
 *
 * ```js
 * utils.lang.hasValues('a');
 * //=> true
 *
 * utils.lang.hasValues('');
 * //=> false
 *
 * utils.lang.hasValues(1);
 * //=> true
 *
 * utils.lang.hasValues({a: 'a'}});
 * //=> true
 *
 * utils.lang.hasValues({}});
 * //=> false
 *
 * utils.lang.hasValues(['a']);
 * //=> true
 * ```
 *
 * @name .hasValues
 * @param  {Object} `object` The object to check for `value`
 * @param {*} `value` the value to look for
 * @return {Boolean} True if any values exists.
 * @api public
 */

module.exports = require('has-values');
