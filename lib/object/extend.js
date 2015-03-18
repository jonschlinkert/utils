'use strict';

var hasOwn = require('./hasOwn');

/**
 * Extend `o` with properties of other `objects`.
 *
 * @param  {Object} `o` The target object. Pass an empty object to shallow clone.
 * @param  {Object} `objects`
 * @return {Object}
 * @api public
 */

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
      if (hasOwn(obj, key)) {
        o[key] = obj[key];
      }
    }
  }

  return o;
};


// exports.extend = function extend(o) {
//   if (typeOf(o) !== 'object') { return ''; }
//   var args = arguments;
//   var len = args.length - 1;

//   for (var i = 0; i < len; i++) {
//     var obj = args[i + 1];

//     if (typeOf(obj) === 'object') {
//       for (var key in obj) {
//         if (exports.hasOwn(obj, key)) {
//           o[key] = obj[key];
//         }
//       }
//     }
//   }
//   return o;
// };
