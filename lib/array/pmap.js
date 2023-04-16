'use strict';

/**
 * Returns a new array with the results of calling promise function
 * on every element in the array.
 * 
 * This will queue async/await operation on JavaScript's native array 
 * map to resolve after the queue is empty, instead of using Promise.all()
 * that will run function on element in parallele  and wait until all 
 * individually resolve
 *
 * ```js
 * async function fn( each ){
 *   each + each
 * }
 * 
 * await ['a', 'b', 'c'].map(async function (each) {
 *   return await fn( each )
 * });
 * //=> ['aa', 'bb', 'cc']
 * 
 * await map(['a', 'b', 'c'], async function (each) {
 *   return await fn( each )
 * });
 * //=> ['aa', 'bb', 'cc']
 *
 * map(['a', 'b', 'c'], function (each, i) {
 *   return new Promise( function( resolve ){
 *      resolve( i + each )
 *   })
 * })
 * .then( console.log )
 * //=> ['0a', '1b', '2c']
 * 
 * ['a', 'b', 'c'].map(function (each, i) {
 *   return new Promise( function( resolve ){
 *      resolve( i + each )
 *   })
 * })
 * .then( console.log )
 * //=> ['0a', '1b', '2c']
 * ```
 *
 * @name .pmap
 * @param {Array} `input`
 * @param {Promise<Function>} `fn`
 * @return {Promise<Array>}
 * @api public
 */
async function operator( input, fn ){
  if( !Array.isArray( input ) || !input.length ) 
    return []

  let counter = 0
  const
  _array = JSON.parse( JSON.stringify( input ) ),
  output = [],
  recursor = async function(){
    const each = _array.shift()
    output.push( await fn( each, counter++ ) || each )

    // Recursive async/await
    if( _array.length ) await recursor()
  }

  await recursor()
  return output
}

// Add direct prototype to native array
Array.prototype.pmap = async function( fn ){ return operator( this, fn ) }

module.exports = function( array, fn ){ return operator( array, fn ) }
