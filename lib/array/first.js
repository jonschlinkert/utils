'use strict';

var isNumber = require('is-number');

/**
 * Returns the first item, or first `n` items of an array.
 *
 * ```js
 * first(['a', 'b', 'c', 'd', 'e'], 2)
 * //=> ['a', 'b']
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting at `0`.
 * @return {Array}
 * @api public
 */

module.exports = function first(arr, n) {
  if (arr == null) return;
  if (arr.length === 0) {
    return [];
  }
  if (!isNumber(n)) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
};
