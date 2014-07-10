var insertionsort = function(list) {
  // for all of the elements
  for(var i = 0; i < list.length; i++) {
    var remaining = i;
    // while elements are present behind current
    while(remaining !== 0) {
      remaining--;
      // if target is greater than current
      if(remaining === 0) {
        if(list[remaining] > list[i]) {
          var removed = list.splice(i, 1)[0];
          list.splice(remaining, 0, removed);
          break;
        }
      } else if(list[remaining] >= list[i] && list[remaining - 1] <= list[i]) {
        var removed = list.splice(i, 1)[0];
        list.splice(remaining, 0, removed);
        break;
      }
    }
  }
  return list;
};
