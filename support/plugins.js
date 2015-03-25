'use strict';

var chalk = require('chalk');
var through = require('through2');
var relative = require('relative');
var File = require('vinyl');
var path = require('path');

/**
 * Ensure that method names are properly defined.
 * Also warns if code comments are missing.
 */

exports.names = function names(options) {
  return through.obj(function (file, enc, cb) {
    var str = file.contents.toString();

    if (str.indexOf('@name') === -1 && file.path.indexOf('index.js') === -1) {
      var i = str.indexOf('@param');
      if (i !== -1) {
        str = str.substr(0, i) + namify(file.path) + '\n * ' + str.substr(i);
      } else {
        console.log(chalk.red('code comments missing in: '), relative(file.path));
      }
    }
    file.contents = new Buffer(str);
    this.push(file);
    cb();
  });
};


exports.modularize = function modularize(options) {
  var files = {};
  return through.obj(function (file, enc, cb) {
    var str = file.contents.toString();
    var methods = str.split('};\n\n/**');
    var len = methods.length;
    while (len--) {
      var method = '/**' + methods[len] + '};\n\n';
      var match = /^utils\.([\w]+)/gm.exec(method);

      if (!match) cb();
      var res = method.split(match[0]).join('module.exports');
      res = res.split('<%= ').join('');
      res = res.split(' %>').join(';');
      files[match[1]] = res;
    }

    cb();
  }, function (cb) {
    for (var key in files) {
      if (files.hasOwnProperty(key)) {
        var file = new File({
          path: key + '.js'
        });

        var str = '\'use strict\';\n\n' + files[key];
        file.contents = new Buffer(str);
        this.push(file);
      }
    }
    cb();
  });
};



function namify(fp) {
  return '@name .'+ basename(fp);
}

function basename(fp) {
  return path.basename(fp, path.extname(fp));
}
