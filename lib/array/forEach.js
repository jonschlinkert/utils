'use strict';

/**
 * Loop over each item in an array and call the given function
 * on every element.
 *
 * ```js
 * forEach(['a', 'b', 'c'], function (ele) {
 *   return ele + ele;
 * });
 * //=> ['aa', 'bb', 'cc']
 *
 * forEach(['a', 'b', 'c'], function (ele, i) {
 *   return i + ele;
 * });
 * //=> ['0a', '1b', '2c']
 * ```
 *
 * @name .forEach
 * @param {Array} `array`
 * @param {Function} `fn`
 * @param {Object} `thisArg` Optionally pass a `thisArg` to be used as the context in which to call the function.
 * @return {Array}
 * @api public
 */

module.exports = function forEach(arr, cb, thisArg) {
  if (arr == null) return;
  var len = arr.length;
  var i = -1;

  while (++i < len) {
    if (cb.call(thisArg, arr[i], i, arr) === false) {
      break;
    }
  }
};
