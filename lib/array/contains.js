'use strict';

var indexOf = require('./indexOf');

/**
 * Return true if `arr` contains `val`
 */

module.exports = function contains(arr, val) {
  return indexOf(arr, val) !== -1;
};