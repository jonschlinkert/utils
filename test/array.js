/*!
 * utils <https://github.com/jonschlinkert/utils>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var utils = require('..')._;

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

describe('isArray', function() {
  it('should return true if the value is an array.', function() {
    utils.isArray("foo").should.be.false;
    utils.isArray(["foo"]).should.be.true;
  });
});

describe('arrayify', function() {
  it('should coerce a value to an array.', function() {
    utils.isArray(utils.arrayify("foo")).should.be.true;
    utils.isArray(utils.arrayify(["foo"])).should.be.true;
  });
});

describe('first', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.first()
    }).should.throw('utils#array.first() expects an array.');
  });

  it('should return the first item in an array.', function() {
    utils.first(['a', 'b', 'c']).should.equal('a');
  });

  it('should return an array with the first two items in an array.', function() {
    utils.first(['a', 'b', 'c'], 2).should.eql(['a', 'b']);
  });

  it('should return the first item that returns true for the callback:', function() {
    utils.first(['a', 'b', 'c'], function (ele) {
      return ele === 'b';
    }).should.eql('b');
  });
});

describe('last', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.last()
    }).should.throw('utils#array.last() expects an array.');
  });

  it('should return the last item in an array.', function() {
    utils.last(['a', 'b', 'c']).should.equal('c');
  });

  it('should return an array with the last two items in an array.', function() {
    utils.last(['a', 'b', 'c'], 2).should.eql(['b', 'c']);
  });

  it('should return the last item that returns true for the callback:', function() {
    utils.last(['a', 'b', 'c'], function (ele) {
      return ele === 'b';
    }).should.eql('b');
  });
});

describe('before', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.before()
    }).should.throw('utils#array.before() expects an array.');
  });

  it('should return all of the items in an array before the given index.', function() {
    utils.before(arr, 5).should.eql(['a', 'b', 'c']);
  });
});

// describe('after', function() {
//   it('should return an empty string when undefined.', function() {
//     after().should.equal('');
//   });

//   it('should return all of the items in an array after the given index.', function() {
//     var template = after(arr, 5);
//     template(context).should.eql(['f', 'g', 'h'].toString());
//   });
// });

// describe('join', function() {
//   it('should return an empty string when undefined.', function() {
//     join().should.equal('');
//   });

//   it('should return all items in an array joined by the default separator.', function() {
//     var template = join(arr);
//     template(context).should.equal('a, b, c, d, e, f, g, h');
//   });

//   it('should return all items in an array joined by the given separator.', function() {
//     var template = join(arr, " | ");
//     template(context).should.equal('a | b | c | d | e | f | g | h');
//   });
// });

// describe('map', function() {
//   it('should return an empty string when undefined.', function() {
//     map().should.equal('');
//   });

//   it('should map the items in the array and return new values.', function() {
//     var o = {};
//     o.double = function(str) {
//       return str + str;
//     };
//     var template = map(["a","b","c"], double);
//     template(o).should.equal('aa,bb,cc');
//   });
// });

// describe('sort', function() {
//   it('should return an empty string when undefined.', function() {
//     sort().should.equal('');
//   });

//   it('should sort the items in an array.', function() {
//     var template = sort(["b", "c", "a"]);
//     template(context).should.equal('a,b,c');
//   });

//   it('should take a compare function.', function() {
//     var o = {};
//     o.compare = function (a, b) {
//       return b.localeCompare(a);
//     };
//     var template = sort(["b", "c", "a"], compare);
//     template(o).should.equal('c,b,a');
//   });

//   it('should sort based on object key:', function() {
//     var template = JSON.stringify(sort([{a: "zzz"}, {a: "aaa"}], "a"));
//     template().should.equal('[{"a":"aaa"},{"a":"zzz"}]');
//   });
// });

// describe('length', function() {
//   it('should return an empty string when undefined.', function() {
//     length().should.equal('');
//   });

//   it('should return zero when the value is not an array.', function() {
//     var template = length("foo");
//     template(context).should.equal('0');
//   });

//   it('should return the length of an array.', function() {
//     var template = length(["b", "c", "a"]);
//     template(context).should.equal('3');
//   });
// });

// describe('compact', function() {
//   it('should return an empty string when undefined.', function() {
//     compact().should.equal('');
//   });

//   it('should remove falsey values from an array.', function() {
//     var template = compact([null, "a", undefined, 0, false, "b", "c", ""]);
//     template(context).should.equal('a,b,c');
//   });
// });

// describe('difference', function() {
//   it('should return an empty string when undefined.', function() {
//     difference().should.equal('');
//   });

//   it('should return the difference from multiple arrays', function() {
//     var o = {};
//     o.a = ['a', 'b', 'c', 'd'];
//     o.b = ['b', 'c'];
//     o.c = ['x', 'y'];
//     difference(a, b, c)(o).should.equal('a,d');
//     difference(a, b)(o).should.equal('a,d');
//     difference(a)(o).should.equal('a,b,c,d');
//   });
// });

// describe('unique', function() {
//   it('should return an empty string when undefined.', function() {
//     unique().should.equal('');
//   });
//   it('should unique items from multiple arrays:', function() {
//     var template = unique(["a", "b", "c", "c"]);
//     template(context).should.equal('a,b,c');
//   });
// });

// describe('union', function() {
//   it('should return an empty string when undefined.', function() {
//     union().should.equal('');
//   });

//   it('should union items from multiple arrays:', function() {
//     var template = union(["a", "c"], ["b", "b"]);
//     template(context).should.equal('a,c,b');
//   });

//   it('should union items from multiple arrays:', function() {
//     var template = union(["a"], ["b"]);
//     template(context).should.equal('a,b');
//   });
// });
