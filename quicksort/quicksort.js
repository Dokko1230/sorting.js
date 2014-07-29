
var quicksort = function(array, i, k) {
  if(!i) {
    i = 0;
  }
  if(!k) {
    k = array.length - 1;
  }
  if(i < k) {
    var p = partition(array, i, k);
    quicksort(array, i, p - 1);
    quicksort(array, p + 1, k);
  }
};

var partition = function(array, left, right) {
  var pivotIndex = Math.floor(Math.random() * (right - left) + left);
  var pivotValue = array[pivotIndex];
  // swap pivotValue with rightmost element
  array[pivotIndex] = array[right];
  array[right] = pivotValue;
  var current = left;
  // loop through
  for(var i = left; i <= right - 1; i++) {
    if(array[i] <= pivotValue) {
      // swap i with current
      var temp = array[i];
      array[i] = array[current];
      array[current] = temp;
      current++;
    }
  }
  // swap current with pivot
  array[right] = array[current];
  array[current] = pivotValue;
  return current;
};