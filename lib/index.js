'use strict';

var path = require('path');
var lookup = require('./fs/lookup');
var isFile = require('./fs/is-file');
var camelize = require('./string/camelize');

lookup(__dirname, false).forEach(function (name) {
  var fp = path.resolve(__dirname, name);

  if (!/index/.test(fp) && isFile(fp)) {
    exports[camelize(name)] = require(fp);
  }
});
