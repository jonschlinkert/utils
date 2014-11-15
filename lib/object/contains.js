'use strict';

var some = require('./some');

/**
 * Return `true` if `object` contains `value`.
 *
 * @param  {Object} `object`
 * @param  {*} `value`
 * @return {Boolean}
 */

module.exports = function contains(o, value) {
  return some(o, function (v) {
    return (v === value);
  });
};