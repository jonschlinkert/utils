'use strict';

module.exports = function extend(a, objects) {
  var args = [].slice.call(arguments);
  if (a == null) {
    return {};
  }
  if (objects == null) {
    return a;
  }

  var len = args.length;
  var o = {};

  for (var i = 0; i < len; i++) {
    var obj = args[i];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[key] = obj[key];
      }
    }
  }

  return o;
};
