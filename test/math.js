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


describe('math utils', function() {
  describe('sum.', function() {
    it('should reduce-sum the numbers in the array.', function() {
      utils.sum([1, 2, 3, 4, 5]).should.equal(15);
    });
    it('should ignore non-numbers.', function() {
      utils.sum([1, 2, "foo", 3, 4, 5]).should.equal(15);
    });
  });
});
