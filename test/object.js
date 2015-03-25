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
  describe('hasOwn', function() {
    it('should return true when an object has own property `key`.', function() {
      utils.hasOwn(obj, 'a').should.be.true;
      utils.hasOwn(obj, 'k').should.be.false;
    });
  });

  describe('keys', function() {
    it('should return the keys of an object.', function() {
      utils.keys(obj).should.eql(['a', 'b', 'c']);
    });
  });

  describe('omit', function() {
    it('should omit keys from an object.', function() {
      utils.omit(obj, ['b', 'c']).should.eql({a: 'a'});
    });
  });

  describe('extend', function() {
    var ctx = {};
    beforeEach(function () {
      ctx.foo = {aaa: 'bbb'};
      ctx.bar = {ccc: 'ddd'};
    });

    it('should return an empty string when undefined.', function() {
      utils.extend().should.eql({});
    });

    it('should extend the first object with the second.', function() {
      utils.extend(ctx.foo, ctx.bar).should.eql({aaa:'bbb',ccc:'ddd'});
    });

    it('should ignore non-objects.', function() {
      utils.extend(ctx.foo, ctx.bar, 'baz').should.eql({aaa:'bbb',ccc:'ddd'});
    });

    it('should use the extended object as context.', function() {
      // overwrite `foo`
      ctx.bar = {aaa: 'ddd'};
      utils.extend(ctx.foo, ctx.bar).should.eql({aaa:'ddd'});
    });
  });

  describe('merge', function() {
    var ctx = {};
    beforeEach(function () {
      ctx.foo = {aaa: 'bbb', bbb: {ccc: {ddd: 'eee'}}};
      ctx.bar = {aaa: 'bbb', bbb: {ccc: {eee: 'fff'}}};
    });

    it('should return an empty string when undefined.', function() {
      utils.merge().should.eql({});
    });

    it('should deeply merge the first object with the second.', function() {
      utils.merge(ctx.foo, ctx.bar).should.eql({ aaa: 'bbb', bbb: { ccc: { ddd: 'eee', eee: 'fff' } } });
    });
  });
});
