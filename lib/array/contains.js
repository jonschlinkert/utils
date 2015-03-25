'use strict';

var indexOf = require('./indexOf');

/**
 * Return true if `arr` contains `string`
 *
 * @param  {Array} `arr`
 * @param  {String} `string`
 * @todo make this more flexible
 * @return {Boolean}
 */

module.exports = function contains(arr, string) {
  return indexOf(arr, val) !== -1;
};
