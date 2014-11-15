'use strict';

/**
 * Return the last element in an array.
 */

module.exports = function last(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
};