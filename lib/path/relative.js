'use strict';

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
 * @name relative
 * @param {String} `a` The "from" file path.
 * @param {String} `b` The "to" file path.
 * @return {String} Returns a relative path.
 * @api public
 */

module.exports = require('relative');
