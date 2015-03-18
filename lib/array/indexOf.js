'use strict';

/**
 * Array.indexOf
 */

module.exports = function indexOf(arr, ele, start) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.indexOf() expects an array.');
  }

  if (typeof ele === 'undefined') return -1;
  start = start || 0;

  var len = arr.length;
  var i = start < 0
    ? len + start
    : start;

  while (i < len) {
    if (arr[i] === ele) {
      return i;
    }
    i++;
  }
  return -1;
};
