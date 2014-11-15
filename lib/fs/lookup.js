'use strict';

var fs = require('fs');
var path = require('path');
var isFile = require('./isFile');
var isDir = require('./isDir');

module.exports = function lookup(dir, recurse) {
  if (isFile(dir)) return dir;

  var files = fs.readdirSync(dir);
  if (recurse === false) {
    return files.map(function (fp) {
      return path.join(dir, fp);
    });
  }

  return files
    .reduce(function (acc, fp) {
      fp = path.join(dir, fp);

      if (isDir(fp)) {
        acc.push.apply(acc, lookup(fp));
      } else {
        acc = acc.concat(fp);
      }
    return acc;
  }, []);
};
