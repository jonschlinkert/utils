var typeOf = require('kind-of');

/**
 * Return true if the given `value` is an arguments object.
 *
 * ```js
 * isArguments(arguments)
 * //=> 'true'
 * ```
 *
 * @name .isArguments
 * @attribution sourced from github.com/mout/mout
 * @param  {*} `value` The value to check.
 * @return {Boolean}
 * @api public
 */

module.exports = typeOf(arguments) === 'arguments' ?
  function isArguments(val) {
    return typeOf(val) === 'arguments' ? true : false;
  } :
  function isArguments(val) {
    // Arguments is an Object on IE7
    return !!(val && Object.prototype.hasOwnProperty.call(val, 'callee'));
  };
