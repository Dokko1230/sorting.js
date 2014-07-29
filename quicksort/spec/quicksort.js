/* global quicksort, describe, it, expect, should */

describe('quicksort()', function () {
  'use strict';

  it('exists', function () {
    expect(quicksort).to.be.a('function');
  });

  it('sorts small arrays', function () {
    var ary = [3,1,2,4];
    quicksort(ary);
    expect(ary).to.eql([1,2,3,4]);
  });

  it('sorts a lot', function () {
    var alot = 10000;
    var lots = [];
    for(var i = 0; i < alot; i++) {
      lots.push(i);
    }
    var shuffled = _.shuffle(lots);
    quicksort(shuffled);
    expect(shuffled).to.eql(lots);
  });

  // Add more assertions here
});
