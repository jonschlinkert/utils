'use strict';

var utils = require('export-files')(__dirname);
var alignCenter = require('center-align');
var alignRight = require('right-align');
var wrap = require('word-wrap');

/**
 * Returns true if the value is a string.
 *
 * ```js
 * <%= isString('abc') %>
 * //=> 'true'
 *
 * <%= isString(null) %>
 * //=> 'false'
 * ```
 *
 * @param  {String} `val`
 * @return {Boolean} True if the value is a string.
 * @api public
 */

utils.isString = function isString(str) {
  return str && typeof str === 'string';
};

/**
 * Lowercase the characters in the given `string`.
 *
 * ```js
 * <%= lowercase("ABC") %>
 * //=> 'abc'
 * ```
 *
 * @param  {String} `string` The string to lowercase.
 * @return {String}
 * @api public
 */

utils.lowercase = function lowercase(str) {
  if (!utils.isString(str)) return '';
  return str.toLowerCase();
};

/**
 * Uppercase the characters in a string.
 *
 * ```js
 * <%= uppercase("abc") %>
 * //=> 'ABC'
 * ```
 *
 * @param  {String} `string` The string to uppercase.
 * @return {String}
 * @api public
 */

utils.uppercase = function uppercase(str) {
  if (!utils.isString(str)) return '';
  return str.toUpperCase();
};

/**
 * Trim extraneous whitespace from the beginning and end
 * of a string.
 *
 * ```js
 * <%= trim("  ABC   ") %>
 * //=> 'ABC'
 * ```
 *
 * @param  {String} `string` The string to trim.
 * @return {String}
 * @api public
 */

utils.trim = function trim(str) {
  if (!utils.isString(str)) return '';
  return str.trim();
};

/**
 * Like trim, but removes both extraneous whitespace and
 * non-word characters from the beginning and end of a string.
 *
 * ```js
 * <%= chop("_ABC_") %>
 * //=> 'ABC'
 *
 * <%= chop("-ABC-") %>
 * //=> 'ABC'
 *
 * <%= chop(" ABC ") %>
 * //=> 'ABC'
 * ```
 *
 * @param  {String} `string` The string to chop.
 * @return {String}
 * @api public
 */

utils.chop = function chop(str) {
  if (!utils.isString(str)) return '';
  var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
  return str.trim().replace(re, '');
};

/**
 * camelCase the characters in `string`.
 *
 * ```js
 * <%= camelcase("foo bar baz") %>
 * //=> 'fooBarBaz'
 * ```
 *
 * @param  {String} `string` The string to camelcase.
 * @return {String}
 * @api public
 */

utils.camelcase = function camelcase(str) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[-_.\W\s]+(\w|$)/g;
  return utils.chop(str).replace(re, function (_, ch) {
    return ch.toUpperCase();
  });
};

/**
 * PascalCase the characters in `string`.
 *
 * ```js
 * <%= pascalcase("foo bar baz") %>
 * //=> 'FooBarBaz'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

utils.pascalcase = function pascalcase(str) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {return str.toUpperCase(); }
  str = utils.camelcase(str);
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * snake_case the characters in `string`.
 *
 * ```js
 * <%= snakecase("a-b-c d_e") %>
 * //=> 'a_b_c_d_e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

utils.snakecase = function snakecase(str) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[-_.\W\s]+(\w|$)/g;
  return utils.chop(str).replace(re, function (_, ch) {
    return '_' + ch;
  });
};

/**
 * dot.case the characters in `string`.
 *
 * ```js
 * <%= dotcase("a-b-c d_e") %>
 * //=> 'a.b.c.d.e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

utils.dotcase = function dotcase(str) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[-_.\W\s]+(\w|$)/g;
  return utils.chop(str).replace(re, function (_, ch) {
    return '.' + ch;
  });
};

/**
 * dash-case the characters in `string`. This is similar to [slugify],
 * but [slugify] makes the string compatible to be used as a URL slug.
 *
 * ```js
 * <%= dashcase("a b.c d_e") %>
 * //=> 'a-b-c-d-e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @tags dasherize, dashify, hyphenate, case
 * @api public
 */

utils.dashcase = function dashcase(str) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[-_.\W\s]+(\w|$)/g;
  return utils.chop(str).replace(re, function (_, ch) {
    return '-' + ch;
  });
};

/**
 * path/case the characters in `string`.
 *
 * ```js
 * <%= pathcase("a-b-c d_e") %>
 * //=> 'a/b/c/d/e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

utils.pathcase = function pathcase(str) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[_.-\W\s]+(\w|$)/g;
  return utils.chop(str).replace(re, function (_, ch) {
    return '/' + ch;
  });
};

/**
 * Sentence-case the characters in `string`.
 *
 * ```js
 * <%= sentencecase("foo bar baz.") %>
 * //=> 'Foo bar baz.'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

utils.sentencecase = function sentencecase(str) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {return str.toUpperCase(); }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Replace spaces in a string with hyphens. This
 *
 * ```js
 * <%= hyphenate("a b c") %>
 * //=> 'a-b-c'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

utils.hyphenate = function hyphenate(str) {
  if (!utils.isString(str)) return '';
  return utils.chop(str).split(' ').join('-');
};

/**
 * TODO: Need to use a proper slugifier for this.
 * I don't want to use `node-slug`, it's way too
 * huge for this.
 *
 * ```js
 * <%= slugify('This is a post title.') %>
 * //=> 'this-is-a-post-title'
 * ```
 *
 * @param  {String} `string` The string to slugify.
 * @return {String} Slug.
 * @api draft
 */

utils.slugify = function slugify(str) {
  if (!utils.isString(str)) return '';
  return utils.dashcase(str);
};

/**
 * Wrap words to a specified width using [word-wrap].
 *
 * ```js
 * <%= wordwrap("a b c d e f", {width: 5, newline: '<br>  '}) %>
 * //=> '  a b c <br>  d e f'
 * ```
 *
 * @param  {String} `string` The string with words to wrap.
 * @param  {Options} `object` Options to pass to [word-wrap]
 * @return {String} Formatted string.
 * @api public
 */

utils.wordwrap = function wordwrap(str) {
  if (!utils.isString(str)) return '';
  return wrap.apply(wrap, arguments);
};

/**
 * Count the number of occurrances of a substring
 * within a string.
 *
 * ```js
 * <%= count("abcabcabc", "a") %>
 * //=> '3'
 * ```
 *
 * @param  {String} `string`
 * @param  {String} `substring`
 * @return {Number} The occurances of `substring` in `string`
 * @api public
 */

utils.count = function count(str, sub) {
  if (!utils.isString(str)) return '';
  return sub ? (str.split(sub).length - 1) : '0';
};

/**
 * Reverse the characters in a string.
 *
 * ```js
 * <%= reverse("abc") %>
 * //=> 'cba'
 * ```
 *
 * @param  {String} `str` The string to reverse.
 * @return {String}
 * @api public
 */

utils.reverse = function reverse(str) {
  if (!utils.isString(str)) return '';
  return str.split('').reverse().join('');
};

/**
 * Right align the characters in a string using
 * non-breaking spaces.
 *
 * ```js
 * <%= rightAlign(str) %>
 * ```
 *
 * @param  {String} `str` The string to reverse.
 * @return {String} Right-aligned string.
 * @related centerAlign
 * @api public
 */

utils.rightAlign = function rightAlign(str) {
  if (!utils.isString(str)) return '';
  return alignRight(str);
};

/**
 * Center align the characters in a string using
 * non-breaking spaces.
 *
 * ```js
 * <%= centerAlign("abc") %>
 * ```
 *
 * @param  {String} `str` The string to reverse.
 * @return {String} Centered string.
 * @related rightAlign
 * @api public
 */

utils.centerAlign = function centerAlign(str) {
  if (!utils.isString(str)) return '';
  return alignCenter(str, '&nbsp;');
};

/**
 * Replace occurrences of `a` with `b`.
 *
 * ```js
 * <%= replace("abcabc", /a/, "z") %>
 * //=> 'zbczbc'
 * ```
 *
 * @param  {String} `str`
 * @param  {String|RegExp} `a` Can be a string or regexp.
 * @param  {String} `b`
 * @return {String}
 * @api public
 */

utils.replace = function replace(str, a, b) {
  if (!utils.isString(str)) return '';
  if (!a) { return str; }
  if (!b) { b = ''; }
  return str.split(a).join(b);
};

/**
 * Truncate a string by removing all HTML tags and limiting the result
 * to the specified `length`.
 *
 * ```js
 * <%= truncate("<span>foo bar baz</span>", 7) %>
 * //=> 'foo bar'
 * ```
 *
 * @param  {String} `str`
 * @param  {Number} `length` The desired length of the returned string.
 * @return {String} The truncated string.
 * @api public
 */

utils.truncate = function truncate(str, length) {
  if (!utils.isString(str)) return '';
  return str.substr(0, length);
};

/**
 * Truncate a string to the specified `length`, and append
 * it with an elipsis, `…`.
 *
 * ```js
 * <%= ellipsis("<span>foo bar baz</span>", 7) %>
 * //=> 'foo bar…'
 * ```
 *
 * @param  {String} `str`
 * @param  {Number} `length` The desired length of the returned string.
 * @param  {String} `ch` Optionally pass custom characters to append. Default is `…`.
 * @return {String} The truncated string.
 * @api public
 */

utils.ellipsis = function ellipsis(str, limit, ch) {
  if (!utils.isString(str)) return '';
  return utils.truncate(str, limit) + (ch || '…');
};

module.exports = utils;
