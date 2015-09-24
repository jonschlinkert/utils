'use strict';

var path = require('path');
var util = require('util');
var verb = require('verb');
var plugin = require('./support/plugins');

verb.helper('utils_methods', function (fp) {
  var obj = require(path.resolve(process.cwd(), fp));
  return util.inspect(obj, null, 10);
});

verb.task('readme', function () {
  return verb.src(['.verb.md', 'docs/*.md'])
    .pipe(verb.dest('.'));
});

verb.task('names', function () {
  return verb.src(['lib/**/*.js'])
    .pipe(plugin.names())
    .pipe(verb.dest('lib/'));
});

verb.task('modularize', function () {
  return verb.src(['lib/string/index.js'])
    .pipe(plugin.modularize())
    .pipe(verb.dest('lib/temp'));
});

verb.task('default', ['readme']);
