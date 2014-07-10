// http://en.wikipedia.org/wiki/Merge_sort

var mergesort = function(list) {
  //if list is empty return 0
  if(list.length === 1) {
    return list;
  }
  // partition the list into two arrays
  var partitions = partition(list);
  // make left and right lists
  var left = partitions[0];
  var right = partitions[1];
  // assign left as the recursive call
  left = mergesort(left);
  // assign right as the recursive call
  right = mergesort(right);

  // Conquer and merge the two
  return merge(left, right);
};

var merge = function(left, right) {
  // make new array
  var results = [];

  // while left and right is not empty
  while(left.length !== 0 || right.length !== 0) {
    if(left.length > 0 && right.length > 0) {
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
    } else if(left.length > 0) {
      results.push(left[0]);
      // remove first left
      left.splice(0,1);
    } else if(right.length > 0) {
      results.push(right[0]);
      // remove first right
      right.splice(0,1);
    }

  }
  return results;
};

var partition = function(list) {
  // Math floor for odd numbers
  var middle = Math.floor(list.length / 2);
  var left = [];
  var right = [];
  // for all the things below middle
  for(var i = 0; i < middle; i++) {
    // add to left
    left.push(list[i]);
  }
  // for all the things after middle
  for(var x = middle; x < list.length; x++) {
    // add to right
    right.push(list[x]);
  }
  return [left, right];
};