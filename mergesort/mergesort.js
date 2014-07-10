// http://en.wikipedia.org/wiki/Merge_sort

var mergesort = function(list) {
  // partition the list into two arrays
  // make left and right lists
  // add left side and right side
  // assign left as the recursive call
  // assign right as the recursive call
  // Conquer and merge the two
};

var merge = function(left, right) {
  // make new array
  var results = [];

  // while left and right is not empty
  while(left.length !== 0 || right.length !== 0) {
    // if left is lesser than right
    if(left[0] < right[0]) {
      // add left to result
      results.push(left[0]);
      // remove first left
      left.splice(0,1);
    } else {
      // add right to result
      results.push(right[0]);
      // remove first right
      right.splice(0,1);
    }
    
  }
  return results;
};