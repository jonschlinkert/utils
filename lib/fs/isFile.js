'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function isFile() {
  var fp = path.join.apply(path, arguments);
  return fs.statSync(fp).isFile();
};