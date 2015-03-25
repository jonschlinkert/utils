/*!
 * utils <https://github.com/jonschlinkert/utils>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var _ = require('lodash');
var path = require('path');
var utils = require('..')._;
require('should');

describe('path utils', function() {
  describe('dirname', function() {
    it('should return the dirname:', function() {
      utils.dirname("a/b/c/e.js").should.equal('a/b/c');
      utils.path.dirname("a/b/c/e.js").should.equal('a/b/c');
    });
  });
  describe('basename', function() {
    it('should return the basename:', function() {
      utils.basename("a/b/c/e.js").should.equal('e.js');
      utils.path.basename("a/b/c/e.js").should.equal('e.js');
    });
  });
  describe('filename', function() {
    it('should return the filename:', function() {
      utils.filename("a/b/c/e.js").should.equal('e');
      utils.path.filename("a/b/c/e.js").should.equal('e');
    });
  });
  describe('extname', function() {
    it('should return the extname with dot:', function() {
      utils.extname("a/b/c/e.js").should.equal('.js');
      utils.path.extname("a/b/c/e.js").should.equal('.js');
    });
  });
  describe('ext', function() {
    it('should return the extension without dot:', function() {
      utils.ext("a/b/c/e.js").should.equal('js');
      utils.path.ext("a/b/c/e.js").should.equal('js');
    });
  });
  describe('resolve', function() {
    it('should resolve the given path(s):', function() {
      utils.resolve("c/e.js").should.equal(path.resolve('c/e.js'));
      utils.path.resolve("c/e.js").should.equal(path.resolve('c/e.js'));
    });
  });
  describe('relative', function() {
    it('should return a relative file path:', function() {
      utils.relative("docs/", "docs/a/b.js").should.equal('a/b.js');
      utils.path.relative("docs/", "docs/a/b.js").should.equal('a/b.js');
      utils.relative("docs/a/b.js", "docs/").should.equal('..');
      utils.path.relative("docs/a/b.js", "docs/").should.equal('..');
    });
  });

  describe('isRelative', function() {
    it('should return true if a file path is isRelative:', function() {
      utils.isRelative("/foo/bar").should.be.false;
      utils.path.isRelative("/foo/bar").should.be.false;
      utils.isRelative("/baz/..").should.be.false;
      utils.path.isRelative("/baz/..").should.be.false;
      utils.isRelative("qux/").should.be.true;
      utils.path.isRelative("qux/").should.be.true;
      utils.isRelative(".").should.be.true;
      utils.path.isRelative(".").should.be.true;
      utils.isRelative("//server").should.be.false;
      utils.path.isRelative("//server").should.be.false;
      utils.isRelative("bar\\baz").should.be.true;
      utils.path.isRelative("bar\\baz").should.be.true;
      utils.isRelative(".").should.be.true;
      utils.path.isRelative(".").should.be.true;
    });
  });

  describe('isAbsolute', function() {
    it('should return true if a file path is absolute:', function() {
      utils.isAbsolute("/foo/bar").should.be.true;
      utils.path.isAbsolute("/foo/bar").should.be.true;
      utils.isAbsolute("/baz/..").should.be.true;
      utils.path.isAbsolute("/baz/..").should.be.true;
      utils.isAbsolute("qux/").should.be.false;
      utils.path.isAbsolute("qux/").should.be.false;
      utils.isAbsolute(".").should.be.false;
      utils.path.isAbsolute(".").should.be.false;
      utils.isAbsolute("//server").should.be.true;
      utils.path.isAbsolute("//server").should.be.true;
      utils.isAbsolute("bar\\baz").should.be.false;
      utils.path.isAbsolute("bar\\baz").should.be.false;
      utils.isAbsolute(".").should.be.false;
      utils.path.isAbsolute(".").should.be.false;
    });
  });

  describe('join', function() {
    it('should join the given paths:', function() {
      utils.join("a", "b").should.equal('a/b');
      utils.path.join("a", "b").should.equal('a/b');
    });
  });

  describe('segments', function() {
    it('should return specified path segments:', function() {
      utils.segments("a/b/c/e.js", 1, 3).should.equal('b/c');
      utils.path.segments("a/b/c/e.js", 1, 3).should.equal('b/c');
      utils.segments("a/b/c/e.js", 1, 2).should.equal('b');
      utils.path.segments("a/b/c/e.js", 1, 2).should.equal('b');
      utils.segments("a/b/c/e.js", 0, 3).should.equal('a/b/c');
      utils.path.segments("a/b/c/e.js", 0, 3).should.equal('a/b/c');
      utils.segments("a/b/c/e.js", 2, 3).should.equal('c');
      utils.path.segments("a/b/c/e.js", 2, 3).should.equal('c');
      utils.segments("a/b/c/e.js", 0, 3).should.equal('a/b/c');
      utils.path.segments("a/b/c/e.js", 0, 3).should.equal('a/b/c');
    });

    it('should disregard extra slashes:', function() {
      utils.segments("a///b\\/c\\/e.js", 1, 3).should.equal('b/c');
      utils.path.segments("a///b\\/c\\/e.js", 1, 3).should.equal('b/c');
      utils.segments("a///b/\\//c/e.js", 1, 2).should.equal('b');
      utils.path.segments("a///b/\\//c/e.js", 1, 2).should.equal('b');
    });
  });
});
