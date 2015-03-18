'use strict';

/**
 * Get specific (joined) segments of a file path by passing a
 * range of array indices.
 *
 * ```js
 * segments("a/b/c/d", "2", "3")
 * //=> 'c/d'
 *
 * segments("a/b/c/d", "1", "3")
 * //=> 'b/c/d'
 *
 * segments("a/b/c/d", "1", "2")
 * //=> 'b/c'
 * ```
 *
 * @param {String} `filepath` The file path to split into segments.
 * @return {String} Returns a single, joined file path.
 * @api public
 */

module.exports = function segments(fp, a, b) {
  return fp.split(/[\\\/]+/).slice(a, b).join('/');
};
