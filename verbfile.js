'use strict';

var path = require('path');
var util = require('util');
var plugin = require('./support/plugins');
var stylish = require('jshint-stylish');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var verb = require('verb');

verb.helper('utils_methods', function (fp) {
  var obj = require(path.resolve(process.cwd(), fp));
  return util.inspect(obj, null, 10);
});

verb.task('readme', function () {
  verb.src(['.verb.md', 'docs/*.md'])
    .pipe(verb.dest('.'));
});

var lint = ['index.js', 'lib/**/*.js'];

verb.task('coverage', function () {
  return verb.src(lint)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

verb.task('mocha', ['coverage'], function () {
  return verb.src('test/*.js')
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports({
      reporters: [ 'text' ],
      reportOpts: {dir: 'coverage', file: 'summary.txt'}
    }))
});

verb.task('jshint', function () {
  return verb.src(lint)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
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

verb.task('default', ['mocha', 'jshint', 'readme']);
