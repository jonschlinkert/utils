'use strict';

var fs = require('fs');
var gutil = require('gulp-util');
var plugin = require('./support/plugins');
var istanbul = require('gulp-istanbul');
var stripAnsi = require('strip-ansi');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var verb = require('verb');

// template helper to include coverage report
verb.helper('coverage', function (fp) {
  var str = fs.readFileSync(fp, 'utf8');
  return stripAnsi(str).replace(/^=.*/gm, '');
});

// ignore patterns for excluding TOC headings (for verb's built-in `toc` helper)
verb.option('toc.ignore', ['Install', 'Contributing', 'Author', 'License']);

// generate the README
verb.task('readme', ['test'], function () {
  return verb.src('.verb.md')
    .pipe(verb.dest('.'));
});

verb.task('lint', function () {
  return verb.src(['index.js', 'lib/**/*.js'])
    .pipe(jshint('.jshintrc'))
    /* deps:jshint-stylish */
    .pipe(jshint.reporter('jshint-stylish'));
});

verb.task('test', ['lint'], function (cb) {
  verb.src(['index.js', 'lib/**/*.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      verb.src(['test/*.js'])
        .pipe(mocha())
        .on('error', gutil.log)
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
