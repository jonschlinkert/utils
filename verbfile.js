'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var gutil = require('gulp-util');
var plugin = require('./support/plugins');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var verb = require('verb');

verb.helper('methods', function (fp) {
  var obj = require(path.resolve(process.cwd(), fp));
  return util.inspect(obj, null, 10);
});

verb.task('readme', function () {
  verb.src(['.verb.md', 'docs/*.md'])
    .pipe(verb.dest('.'));
});

verb.task('lint', function () {
  verb.src(['index.js', 'lib/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

verb.task('test', ['lint'], function (cb) {
  verb.src(['index.js', 'lib/**/*.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      verb.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports({
          reporters: [ 'text' ],
          reportOpts: {dir: 'coverage', file: 'summary.txt'}
        }))
        .on('end', cb)
    });
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

verb.task('default', ['test', 'readme']);
