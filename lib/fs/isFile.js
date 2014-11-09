'use strict';

var path = require('path');
var isDir = require('is-directory');

module.exports = function isFile(fp) {
  var fp = path.join.apply(path, arguments);
  return !isDir(fp);
};