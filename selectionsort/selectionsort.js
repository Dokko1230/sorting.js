var selectionsort = function(list) {
  // for all the elements in the list
  for(var i = 0; i < list.length; i++) {
    // for the rest
    var minIndex = getMinIndex(list, i);
    // swap the min with the current
    if(i !== minIndex) {
      list = swap(list, i, minIndex);
    }
  }
  return list;
};

var swap = function(list, currentIndex, targetIndex) {
  var temp = list[currentIndex];
  list[currentIndex] = list[targetIndex];
  list[targetIndex] = temp;
  return list;
};

var getMinIndex = function(list, currentIndex) {
  var min;
  for(var x = currentIndex; x < list.length; x++) {
    // If current is less than value at min
    if(list[x] < list[min] || !min) {
      min = x;
    }
  }
  return min;
};
