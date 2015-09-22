/*!
 * utils <https://github.com/jonschlinkert/utils>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var utils = require('../index').string;

describe('string utils:', function() {
  describe('chop', function() {
    it('should return an empty string when undefined.', function() {
      utils.chop().should.equal('');
    });
    it('should strip leading whitespace from a string.', function() {
      utils.chop('    abc').should.equal('abc');
    });
    it('should strip trailing whitespace from a string.', function() {
      utils.chop('abc   ').should.equal('abc');
    });
    it('should strip leading non-word characters from a string.', function() {
      utils.chop('_-abc').should.equal('abc');
    });
    it('should strip trailing non-word characters from a string.', function() {
      utils.chop('abc_-').should.equal('abc');
    });
  });

  describe('camelcase', function() {
    it('should return an empty string when undefined.', function() {
      utils.camelcase().should.equal('');
    });
    it('should camel-case the characters in a string.', function() {
      utils.camelcase('foo bar baz').should.equal('fooBarBaz');
    });
    it('should camel-case the characters in a string.', function() {
      utils.camelcase('A').should.equal('a');
    });
    it('should work with hyphens.', function() {
      utils.camelcase('foo-bar-baz').should.equal('fooBarBaz');
      utils.camelcase('-foo bar baz-').should.equal('fooBarBaz');
    });

    it('should work with other non-word characters.', function() {
      utils.camelcase('9foo-bar_baz').should.equal('9fooBarBaz');
      utils.camelcase('_foo_bar_baz-').should.equal('fooBarBaz');
    });
  });

  describe('pascalcase', function() {
    it('should return an empty string when undefined.', function() {
      utils.pascalcase().should.equal('');
    });
    it('should camel-case the characters in a string.', function() {
      utils.pascalcase('a').should.equal('A');
      utils.pascalcase('A').should.equal('A');
    });
    it('should pascal-case the characters in a string.', function() {
      utils.pascalcase('foo bar baz').should.equal('FooBarBaz');
    });
    it('should work with hyphens.', function() {
      utils.pascalcase('foo-bar-baz').should.equal('FooBarBaz');
      utils.pascalcase('-foo bar baz-').should.equal('FooBarBaz');
    });

    it('should work with other non-word characters.', function() {
      utils.pascalcase('9foo-bar_baz').should.equal('9fooBarBaz');
      utils.pascalcase('_foo_bar_baz-').should.equal('FooBarBaz');
    });
  });

  describe('snakecase', function() {
    it('should return an empty string when undefined.', function() {
      utils.snakecase().should.equal('');
    });
    it('should camel-case the characters in a string.', function() {
      utils.snakecase('A').should.equal('a');
    });
    it('should snake-case the characters in a string.', function() {
      utils.snakecase('foo bar baz').should.equal('foo_bar_baz');
    });
    it('should work with hyphens.', function() {
      utils.snakecase('foo-bar-baz').should.equal('foo_bar_baz');
      utils.snakecase('-foo bar baz-').should.equal('foo_bar_baz');
    });

    it('should work with other non-word characters.', function() {
      utils.snakecase('9foo-bar_baz').should.equal('9foo_bar_baz');
      utils.snakecase('_foo_bar_baz-').should.equal('foo_bar_baz');
    });
  });

  describe('dotcase', function() {
    it('should return an empty string when undefined.', function() {
      utils.dotcase().should.equal('');
    });
    it('should camel-case the characters in a string.', function() {
      utils.dotcase('A').should.equal('a');
    });
    it('should dot-case the characters in a string.', function() {
      utils.dotcase('foo bar baz').should.equal('foo.bar.baz');
    });
    it('should work with hyphens.', function() {
      utils.dotcase('foo-bar-baz').should.equal('foo.bar.baz');
      utils.dotcase('-foo bar baz-').should.equal('foo.bar.baz');
    });

    it('should work with other non-word characters.', function() {
      utils.dotcase('9foo-bar_baz').should.equal('9foo.bar.baz');
      utils.dotcase('_foo_bar_baz-').should.equal('foo.bar.baz');
    });
  });

  describe('dashcase', function() {
    it('should return an empty string when undefined.', function() {
      utils.dashcase().should.equal('');
    });
    it('should camel-case the characters in a string.', function() {
      utils.dashcase('A').should.equal('a');
    });
    it('should dash-case the characters in a string.', function() {
      utils.dashcase('foo bar baz').should.equal('foo-bar-baz');
    });
    it('should work with hyphens.', function() {
      utils.dashcase('foo-bar-baz').should.equal('foo-bar-baz');
      utils.dashcase('-foo bar baz-').should.equal('foo-bar-baz');
    });

    it('should work with other non-word characters.', function() {
      utils.dashcase('9foo-bar_baz').should.equal('9foo-bar-baz');
      utils.dashcase('_foo_bar_baz-').should.equal('foo-bar-baz');
    });
  });

  describe('pathcase', function() {
    it('should return an empty string when undefined.', function() {
      utils.pathcase().should.equal('');
    });
    it('should camel-case the characters in a string.', function() {
      utils.pathcase('A').should.equal('a');
    });
    it('should path-case the characters in a string.', function() {
      utils.pathcase('foo bar baz').should.equal('foo/bar/baz');
    });
    it('should work with hyphens.', function() {
      utils.pathcase('foo-bar-baz').should.equal('foo/bar/baz');
      utils.pathcase('-foo bar baz-').should.equal('foo/bar/baz');
    });

    it('should work with other non-word characters.', function() {
      utils.pathcase('9foo-bar_baz').should.equal('9foo/bar/baz');
      utils.pathcase('_foo_bar_baz-').should.equal('foo/bar/baz');
    });
  });

  describe('sentencecase', function() {
    it('should return an empty string when undefined.', function() {
      utils.sentencecase().should.equal('');
    });
    it('should camel-case the characters in a string.', function() {
      utils.sentencecase('A').should.equal('A');
      utils.sentencecase('a').should.equal('A');
    });
    it('should sentence-case the characters in a string.', function() {
      utils.sentencecase('foo bar baz.').should.equal('Foo bar baz.');
      utils.sentencecase('a').should.equal('A');
    });
  });

  describe('hyphenate', function() {
    it('should return an empty string when undefined.', function() {
      utils.hyphenate().should.equal('');
    });
    it('should hyphenate the characters in a string.', function() {
      utils.hyphenate('foo bar baz').should.equal('foo-bar-baz');
    });
    it('should work with hyphens.', function() {
      utils.hyphenate('foo-bar-baz').should.equal('foo-bar-baz');
      utils.hyphenate('-foo bar baz-').should.equal('foo-bar-baz');
    });

    it('should work with other non-word characters.', function() {
      utils.hyphenate('9foo-bar_baz').should.equal('9foo-bar_baz');
      utils.hyphenate('_foo_bar_baz-').should.equal('foo_bar_baz');
    });
  });

  describe('slugify', function() {
    it('should return an empty string when undefined.', function() {
      utils.slugify().should.equal('');
    });
    it('should slugify the characters in a string.', function() {
      utils.slugify('foo bar baz').should.equal('foo-bar-baz');
    });
    it('should work with hyphens.', function() {
      utils.slugify('foo-bar-baz').should.equal('foo-bar-baz');
      utils.slugify('-foo bar baz-').should.equal('foo-bar-baz');
    });

    it('should work with other non-word characters.', function() {
      utils.slugify('9foo-bar_baz').should.equal('9foo-bar-baz');
      utils.slugify('_foo_bar_baz-').should.equal('foo-bar-baz');
    });
  });

  describe('count', function() {
    it('should return an empty string when undefined.', function() {
      utils.count().should.equal('');
    });
    it('should return zero when the substring is undefined.', function() {
      utils.count('ababa').should.equal('0');
    });
    it('should count the occurrances of a substring.', function() {
      utils.count('ababa', 'a').should.equal(3);
      utils.count('abab', 'a').should.equal(2);
      utils.count('ababaa', 'a').should.equal(4);
    });
  });

  describe('reverse', function() {
    it('should return an empty string when undefined.', function() {
      utils.reverse().should.equal('');
    });
    it('should reverse the characters in a string.', function() {
      utils.reverse('abc').should.equal('cba');
    });
  });

  describe('wordwrap', function() {
    it('should return an empty string when undefined.', function() {
      utils.wordwrap().should.equal('');
    });
    it('should wrap words to the specified width.', function() {
      var actual = utils.wordwrap('a b c d e f', {width: 5})
      actual.should.equal('  a b c \n  d e f');
    });

    it('should use custom newline characters.', function() {
      var actual = utils.wordwrap('a b c d e f', {width: 5, newline: '<br>  '})
      actual.should.equal('  a b c <br>  d e f');
    });
  });

  describe('align', function() {
    it('should return an empty string when undefined.', function() {
      utils.rightAlign().should.equal('');
      utils.centerAlign().should.equal('');
    });
    it('should right align the characters in a string.', function() {
      utils.rightAlign('foo\nbarbazb').should.equal('    foo\nbarbazb');
    });
    it('should center align the characters in a string.', function() {
      utils.centerAlign('foo\nbarbazb').should.equal('  foo\nbarbazb');
    });
  });

  describe('replace', function() {
    it('should return an empty string when undefined.', function() {
      utils.replace().should.equal('');
    })
    it('should return the string when no replacement pattern is passed.', function() {
      var actual = utils.replace('abcabc')
      actual.should.equal('abcabc');
    });
    it('should replace characters in a string with nothing.', function() {
      var actual = utils.replace('abcabc', 'a')
      actual.should.equal('bcbc');
    });
    it('should replace characters in a string with a string', function() {
      var actual = utils.replace('abcabc', 'a', 'z')
      actual.should.equal('zbczbc');
    });
  });

  describe('truncate', function() {
    it('should return an empty string when undefined.', function() {
      utils.truncate().should.equal('');
    });
    it('should truncate a string to the specified `length`', function() {
      utils.truncate('foo bar baz', 7).should.equal('foo bar');
    });
    it('should truncate a string and remove all HTML tags', function() {
      utils.truncate('<span>foo bar baz</span>', 5).should.equal('foo b');
    });
  });

  describe('ellipsis', function() {
    it('should return an empty string when undefined.', function() {
      utils.ellipsis().should.equal('');
    });
    it('should truncate a string to the specified `length` and add an ellipsis.', function() {
      utils.ellipsis('foo bar baz', 7).should.equal('foo bar…');
    });
  });
});
