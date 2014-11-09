'use strict';

var fs = require('fs');

module.exports = function isDir() {
  var fp = path.join.apply(path, arguments);
  return fs.statSync(fp).isDirectory();
};
