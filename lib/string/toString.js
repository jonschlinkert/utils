'use strict';

/**
 * If `val` is null or undefined returns an empty string,
 * otherwise `val` is typecast to a String
 */

module.exports = function toString(val) {
  return val == null ? '' : val.toString();
};
