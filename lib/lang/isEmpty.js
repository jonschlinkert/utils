'use strict';

var hasValues = require('has-values');

/**
 * Returns true if the given value is empty, false if any value exists. Works for booleans,
 * functions, numbers, strings, nulls, objects and arrays.
 *
 * ```js
 * utils.lang.isEmpty('a');
 * //=> true
 *
 * utils.lang.isEmpty('');
 * //=> false
 *
 * utils.lang.isEmpty(1);
 * //=> true
 *
 * utils.lang.isEmpty({a: 'a'}});
 * //=> true
 *
 * utils.lang.isEmpty({}});
 * //=> false
 *
 * utils.lang.isEmpty(['a']);
 * //=> true
 * ```
 *
 * @name .isEmpty
 * @crosslink hasValues
 * @param  {Object} `object` The object to check for `value`
 * @param {*} `value` the value to look for
 * @return {Boolean} False if any values exists.
 * @api public
 */

module.exports = function isEmpty(val) {
  return !hasValues(val);
};
