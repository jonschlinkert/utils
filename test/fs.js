/*!
 * utils <https://github.com/jonschlinkert/utils>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var utils = require('../index').fs;

describe('fs utils:', function() {
  var orig = process.cwd();
  before(function () {
    process.chdir(__dirname + '/fixtures');
  });
  after(function () {
    process.chdir(orig);
  });

  describe('fs', function() {
    it('should return an empty string when the file does not exist.', function() {
      utils.tryReaddir('.').should.containDeep(['README.md'])
    });

    it('should read a file and inject its content.', function() {
      utils.tryRequire('a.js').should.have.property('aaa');
    });
  });
});
