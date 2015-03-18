'use strict';

/**
 * Specify a fallback value to use when the desired
 * value is undefined.
 *
 * ```js
 * // when `title` is undefined, use the generic `site.title`
 * fallback(title, site.title)
 * ```
 *
 * @param  {*} `a` The desired value.
 * @param  {*} `b` The fallback ("default") value
 * @return {*} Either `a` or `b`
 */

module.exports = function fallback(a, b) {
  return typeof a !== 'undefined' ? a : b;
};
