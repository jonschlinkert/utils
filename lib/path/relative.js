'use strict';

var rel = require('relative');

/**
 * A better `path.relative()`. Get the relative
 * path from file `a` to file `b`. Typically `a`
 * and `b` would be variables passed on the context.
 * Uses the node.js [path] module.
 *
 * ```js
 * relative(a, b)
 * ```
 *
 * @param {String} `a` The "from" file path.
 * @param {String} `b` The "to" file path.
 * @return {String} Returns a relative path.
 * @api public
 */

module.exports = function relative(a, b) {
  return rel(a, b);
};
