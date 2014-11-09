'use strict';

var path = require('path');
var ext = require('./ext');

module.exports = function basename(fp) {
  return path.basename(fp, ext(fp));
};
