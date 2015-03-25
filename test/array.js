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
    utils.isArray('foo').should.be.false;
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

describe('after', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.after()
    }).should.throw('utils#array.after() expects an array.');
  });

  it('should return all of the items in an array after the given index.', function() {
    utils.after(arr, 5).should.eql(['f', 'g', 'h']);
  });
});

describe('map', function() {
  it('should return an empty array when undefined.', function() {
    utils.map().should.eql([]);
  });

  it('should map the items in the array and return new values.', function() {
    utils.map(['a','b','c'], function(str) {
      return str + str;
    }).should.eql(['aa', 'bb', 'cc']);
  });
});

describe('sort', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.sort()
    }).should.throw('utils#array.sort() expects an array.');
  });

  it('should sort the items in an array.', function() {
    utils.sort(["b", "c", "a"]).should.eql(['a', 'b', 'c']);
  });

  it('should take a compare function.', function() {
    utils.sort(["b", "c", "a"], function (a, b) {
      return b.localeCompare(a);
    }).should.eql(['c', 'b', 'a']);
  });

  it('should sort based on object key:', function() {
    utils.sort([{a: "zzz"}, {a: "aaa"}], "a").should.eql([{a:'aaa'},{a:'zzz'}]);
  });
});

describe('compact', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.compact()
    }).should.throw('utils#array.compact() expects an array.');
  });

  it('should remove falsey values from an array.', function() {
    utils.compact([null, "a", undefined, 0, false, "b", "c", ""]).should.eql(['a', 'b', 'c']);
  });
});

describe('difference', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.difference()
    }).should.throw('utils#array.difference() expects an array.');
  });

  it('should return the difference from multiple arrays', function() {
    var o = {};
    o.a = ['a', 'b', 'c', 'd'];
    o.b = ['b', 'c'];
    o.c = ['x', 'y'];
    utils.difference(o.a, o.b, o.c).should.eql(['a','d']);
    utils.difference(o.a, o.b).should.eql(['a','d']);
    utils.difference(o.a).should.eql(['a','b','c','d']);
  });
});

describe('unique', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.unique()
    }).should.throw('utils#array.unique() expects an array.');
  });

  it('should unique items from multiple arrays:', function() {
    utils.unique(["a", "b", "c", "c"]).should.eql(['a','b','c']);
  });
});

describe('union', function() {
  it('should throw on bad args.', function() {
    (function () {
      utils.union()
    }).should.throw('utils#array.union() expects an array.');
  });

  it('should union items from multiple arrays:', function() {
    utils.union(['a', 'c'], ['b', 'b']).should.eql(['a','c','b']);
  });

  it('should union items from multiple arrays:', function() {
    utils.union(['a'], ['b']).should.eql(['a','b']);
  });
});
