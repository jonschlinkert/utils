/*!
 * utils <https://github.com/jonschlinkert/utils>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var utils = require('../index').lang;

var obj = {a: 'a', b: 'b', c: {d: {e: 'e'}}};

describe('lang utils:', function() {
  describe('hasValues', function() {
    it('should return false if the given value is empty.', function() {
      utils.hasValues('').should.be.false;
      utils.hasValues({}).should.be.false;
      utils.hasValues([]).should.be.false;
    });

    it('should return true if any value exists.', function() {
      utils.hasValues('123').should.be.true;
      utils.hasValues(1).should.be.true;
      utils.hasValues(obj).should.be.true;
      utils.hasValues(['a']).should.be.true;
    });
  });

  describe('isEmpty', function() {
    it('should return true if the given value is empty.', function() {
      utils.isEmpty('').should.be.true;
      utils.isEmpty({}).should.be.true;
      utils.isEmpty([]).should.be.true;
    });

    it('should return false if any value exists.', function() {
      utils.isEmpty('123').should.be.false;
      utils.isEmpty(1).should.be.false;
      utils.isEmpty(obj).should.be.false;
      utils.isEmpty(['a']).should.be.false;
    });
  });

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
