'use strict';

/**
 * Coerce value to an array.
 *
 * @param {Object} `value`
 * @return {Array}
 * @api public
 */

module.exports = function (val) {
  return Array.isArray(val) ? val : [val];
};
