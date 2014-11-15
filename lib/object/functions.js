'use strict';

var forIn = require('for-in');

/**
 * Returns a list of all enumerable properties of `obj` that have function
 * values
 *
 * @param {Object} `obj`
 * @return {Array}
 * @api public
 */

module.exports = function functions(obj) {
  var keys = [];
  forIn(obj, function (val, key) {
    if (typeof val === 'function') {
      keys.push(key);
    }
  });
  return keys;
};
