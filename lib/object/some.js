'use strict';

var forOwn = require('for-own');
var makeIterator = require('make-iterator');

module.exports = function some(obj, cb, thisArg) {
  cb = makeIterator(cb, thisArg);
  var result = false;

  forOwn(obj, function (val, key) {
    if (cb(val, key, obj)) {
      result = true;
      return false; // break
    }
  });

  return result;
};
