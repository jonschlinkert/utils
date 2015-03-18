'use strict';

var path = require('path');

/**
 * Return the file extension for the given `filepath`,
 * excluding the `.`.
 *
 * ```js
 * ext("foo.js")
 * //=> 'js'
 * ```
 *
 * @param {String} `filepath`
 * @return {String} Returns a file extension without dot.
 * @api public
 */

module.exports = function ext(fp) {
  return path.extname(fp).slice(1);
};
