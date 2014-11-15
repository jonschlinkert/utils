'use strict';

var path = require('path');
var list = require('dirs');
var isDir = require('is-directory');
var filename = require('./path/name');

function requireFile(fp) {
  fp = path.resolve(__dirname, fp);

  if (!/index/.test(fp) && /\.js/.test(fp) && !isDir(fp)) {
    exports[filename(fp)] = require(fp);
  }
  return exports;
}


// list(__dirname).filter(requireFile);
// list(__dirname + '/core').filter(requireFile);
list(__dirname + '/array').filter(requireFile);
list(__dirname + '/fs').filter(requireFile);
list(__dirname + '/lang').filter(requireFile);
list(__dirname + '/object').filter(requireFile);
list(__dirname + '/path').filter(requireFile);
list(__dirname + '/string').filter(requireFile);


console.log(exports);