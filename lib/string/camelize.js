'use strict';

module.exports = function camelize(fp) {
  return str.replace(/-(.)/g, function (_, s) {
    return s.toUpperCase();
  });
};

module.exports = function camelize(str) {
  return str.replace(/[_.-](\w|$)/g, function (_, first) {
    return first.toUpperCase();
  });
};