'use strict';

var path = require('path');

/**
 * Get the file name from a `filepath`, excluding
 * extension.
 *
 * ```js
 * basename("a/b/c/d.js")
 * //=> 'd'
 * ```
 *
 * @param {String} `filepath`
 * @return {String} Returns the file name part of the file path.
 * @api public
 */

module.exports = function filename(fp) {
  return path.basename(fp, path.extname(fp));
};
