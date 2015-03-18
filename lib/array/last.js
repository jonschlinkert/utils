'use strict';

/**
 * Returns the last item, or last `n` items of an array.
 *
 * ```js
 * last(['a', 'b', 'c', 'd', 'e'], 2)
 * //=> ['d', 'e']
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting with the last item.
 * @return {Array}
 * @api public
 */

module.exports = function last(arr, n) {
  if (!Array.isArray(arr)) {
    throw new Error('utils#array.last() expects an array.');
  }
  if (arr.length === 0) {
    return [];
  }
  if (!isNumber(n)) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-n);
  }
};
