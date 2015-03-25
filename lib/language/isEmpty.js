'use strict';

var hasValues = require('has-values');

module.exports = function isEmpty(val) {
  return !hasValues(val);
};
