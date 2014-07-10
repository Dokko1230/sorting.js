/* global mergesort, describe, it, expect, should */

describe('mergesort()', function () {
  'use strict';

  it('exists', function () {
    expect(mergesort).to.be.a('function');

  });

  it('conquers two lists into one', function () {
    expect(merge([1,3],[2,4])).to.eql([1,2,3,4]);
  });

  it('partitions arrays', function () {
    expect(partition([1,3,2,4])).to.eql([[1,3],[2,4]]);
    expect(partition([1,3,2,4,0])).to.eql([[1,3],[2,4,0]]);
  });

  it('sorts via mergesort', function () {
    expect(mergesort([10,80,1,6,34,72,19,2])).to.eql([1,2,6,10,19,34,72,80]);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
