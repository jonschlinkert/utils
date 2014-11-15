'use strict';

/**
 * Make the given `str` camel-cased.
 *
 * @param {String} `str`
 * @return {String}
 * @api private
 */

module.exports = function camelize(str) {
  if (/\./.test(str)) {
    str = str.split('.')[0];
  }
  if (str.length === 1) {
    return str;
  }
  str = str.replace(/^[-_.\s]+/, '').toLowerCase();
  return str.replace(/[-_.]+(\w|$)/g, function (_, ch) {
    return ch.toUpperCase();
  });
};
