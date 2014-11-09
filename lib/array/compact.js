'use strict';

/**
 * Removes all falsey values from an array.
 *
 * ```js
 * compact([null, a, undefined, 0, false, b, c, '']);
 * //=> [a, b, c]
 * ```
 *
 * @param {Array} `arr`
 * @return {Array}
 */

module.exports = function compact(arr) {
  return arr.filter(Boolean);
};
