'use strict';

/**
 * Returns all of the items in an array after the specified index.
 *
 * ```js
 * after(['a', 'b', 'c'], 1)
 * //=> ['c']
 * ```
 *
 * @param {Array} `array` Collection
 * @param {Number} `n` Starting index (number of items to exclude)
 * @return {Array} Array exluding `n` items.
 * @crosslink before
 * @api public
 */

module.exports = function after(arr, n) {
  return arr ? arr.slice(n) : null;
};
