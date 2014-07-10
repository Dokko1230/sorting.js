/* global selectionsort, describe, it, expect, should */

describe('selectionsort()', function () {
  'use strict';

  it('exists', function () {
    expect(selectionsort).to.be.a('function');
  });

  it('gets the min index in a list', function () {
    expect(getMinIndex([4,52,2,6,1], 0)).to.equal(4);
    expect(getMinIndex([1,2,4,3], 1)).to.equal(1);
  });

  it('swaps the elements in the list', function () {
    expect(swap([1,2,3], 0, 2)).to.eql([3,2,1]);
  });

  it('sorts via selectionsort', function () {
    expect(selectionsort([3,2,4,1])).to.eql([1,2,3,4]);
    expect(selectionsort([3,2,4,1])).to.eql([1,2,3,4]);
  });

  it('sorts a lot', function () {
    var alot = 10000;
    var lots = [];
    for(var i = 0; i < alot; i++) {
      lots.push(i);
    }
    var shuffled = _.shuffle(lots);
    expect(selectionsort(shuffled)).to.eql(lots);
  });

  // Add more assertions here
});
