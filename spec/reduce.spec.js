'use strict';

describe('reduce', function() {

  it('can sum numbers', function() {
    expect(reduce([1,2,3], 1, function(item, memo) { return item + memo})).toEqual(7);
  });

  it('can some other numbers', function() {
    expect(reduce([2,2,3,6], 0, function(item, memo) { return item + memo})).toEqual(13);
  });

  it('can multiply numbers', function() {
    expect(reduce([2,2,3], 1, function(item, memo) { return item * memo})).toEqual(12);
  });
});
