var typeOf = require('kind-of');

/**
 * sourced from github.com/mout/mout
 */

module.exports = typeOf(arguments, 'arguments') ?
  function isArguments(val) {
    return typeOf(val, 'arguments');
  } :
  function isArguments(val) {
    // Arguments is an Object on IE7
    return !!(val && Object.prototype.hasOwnProperty.call(val, 'callee'));
  };
