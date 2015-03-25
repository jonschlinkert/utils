/*!
 * utils <https://github.com/jonschlinkert/utils>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var utils = require('..')._;
var _ = require('lodash');

var obj = {a: 'a', b: 'b', c: {d: {e: 'e'}}};

describe('objects', function() {
  describe('isObject', function() {
    it('should return true if the value is an object.', function() {
      utils.isObject(obj).should.be.true;
      utils.isObject([]).should.be.false;
      utils.isObject('foo').should.be.false;
    });
  });

  describe('isPlainObject', function() {
    it('should return true if the value is a plain object.', function() {
      utils.isPlainObject(obj).should.be.true;
      utils.isPlainObject([]).should.be.false;
      utils.isPlainObject(/foo/).should.be.false;
      utils.isPlainObject('foo').should.be.false;
    });
  });
});
