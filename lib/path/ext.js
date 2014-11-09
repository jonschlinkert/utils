'use strict';

var path = require('path');

module.exports = function ext(fp) {
  return path.extname(fp);
};
