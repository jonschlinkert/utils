'use strict';

var path = require('path');
var isDir = require('./isDir');
var tryReaddir = require('./tryReaddir');

/**
 * Recursive `fs.readdirSync()`.
 *
 * @param  {String} `dir` Starting directory
 * @param  {Boolean} `dirs` Include directories in the result array.
 * @return {Array} Array of files.
 * @api public
 */

module.exports = function lookup(dir, dirs) {
  var files = tryReaddir(dir);
  var len = files.length, i = 0;
  var res = [];

  while (len--) {
    var fp = path.join(dir, files[i++]);

    if (isDir(fp)) {
      res.push.apply(res, lookup(fp));
      if (dirs !== false) {
        res.push(fp);
      }
    } else {
      res.push(fp);
    }
  }
  return res;
};
