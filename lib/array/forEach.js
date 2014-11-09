'use strict';

module.exports = function forEach(arr, cb, thisArg) {
  if (!arr) {
    return;
  }

  var len = arr.length;

  for (var i = 0; i < len; ++i) {
    if (cb.call(thisArg, arr[i], i, arr) === false) {
      break;
    }
  }
};
