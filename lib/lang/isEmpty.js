'use strict';

var hasValue = require('has-value');

module.exports = function isEmpty(val) {
  return !hasValue(val);
};
