/*!
 * utils <https://github.com/jonschlinkert/utils>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var utils = require('../index').collection;

describe('collection utils:', function() {
  describe('any', function() {
    it('should return an empty string when undefined.', function() {
      utils.any().should.be.false;
    });
    it('should return if a value exists in the given string.', function() {
      utils.any('a-b-c', 'a').should.be.true;
      utils.any('a-b-c', 'd').should.be.false;
    });
    it('should return if a value exists in the given object.', function() {
      utils.any({a: 'b', c: 'd'}, 'a').should.be.true;
      utils.any([{a: 'b', c: 'd'}], {a: 'b'}).should.be.true;
    });
    it('should return if a value exists in the given array.', function() {
      utils.any('a-b-c', 'd').should.be.false;
    });
  });

  // describe('contains', function() {
  //   it('should return an empty string when undefined.', function() {
  //     utils.contains().should.be.false;
  //   });
  //   it('should return if a value exists in the given string.', function() {
  //     utils.contains('a-b-c', 'a').should.be.true;
  //     utils.contains('a-b-c', 'd').should.be.false;
  //   });
  //   it('should return if a value exists in the given object.', function() {
  //     utils.contains({a: 'b', c: 'd'}, 'a').should.be.true;
  //     utils.contains([{a: 'b', c: 'd'}], {a: 'b'}).should.be.true;
  //   });
  //   it('should return if a value exists in the given array.', function() {
  //     utils.contains('a-b-c', 'd').should.be.false;
  //   });
  // });
});
