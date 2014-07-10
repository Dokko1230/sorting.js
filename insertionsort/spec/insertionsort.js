/* global insertionsort, describe, it, expect, should */

describe('insertionsort()', function () {
  'use strict';

  it('exists', function () {
    expect(insertionsort).to.be.a('function');

  });

  it('sorts via insertionsort', function () {
    expect(insertionsort([3,2,1,4])).to.eql([1,2,3,4]);
  });
  it('sorts with duplicate numbers', function () {
    expect(insertionsort([4,1,2,2,3])).to.eql([1,2,2,3,4]);
  });

  it('sorts a lot', function () {
    var alot = 10000;
    var lots = [];
    for(var i = 0; i < alot; i++) {
      lots.push(i);
    }
    var shuffled = _.shuffle(lots);
    expect(insertionsort(shuffled)).to.eql(lots);
  });

  // Add more assertions here
});
