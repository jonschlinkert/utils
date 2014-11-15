'use strict';

module.exports = function forEach(arr, cb, thisArg) {
  if (!arr) {
    return;
  }

  var len = arr.length;
  var i = -1;

  while (++i < len) {
    if (cb.call(thisArg, arr[i], i, arr) === false) {
      break;
    }
  }
};
