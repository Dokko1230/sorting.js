/* global mergesort, describe, it, expect, should */

describe('mergesort()', function () {
  'use strict';

  it('exists', function () {
    expect(mergesort).to.be.a('function');

  });

  it('conquers two lists into one', function () {
    expect(merge([1,3],[2,4])).to.eql([1,2,3,4]);
    expect(merge([1],[1])).to.eql([1,1]);
  });

  it('partitions arrays', function () {
    expect(partition([1,3,2,4])).to.eql([[1,3],[2,4]]);
    expect(partition([1,3,2,4,0])).to.eql([[1,3],[2,4,0]]);
  });

  it('sorts via mergesort', function () {
    expect(mergesort([1,3,2,4])).to.eql([1,2,3,4]);
  });

  it('sorts with duplicate numbers', function () {
    expect(mergesort([4,1,2,2,3])).to.eql([1,2,2,3,4]);
  });

  xit('sorts a lot', function () {
    var alot = 10000;
    var lots = [];
    for(var i = 0; i < alot; i++) {
      lots.push(i);
    }
    var shuffled = _.shuffle(lots);
    expect(mergesort(shuffled)).to.eql(lots);
  });
});
