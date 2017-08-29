function steamrollArray(arr) {
    // I'm a steamroller, baby
    var flattened = [].concat(...arr);
    return flattened.some(Array.isArray) ? steamrollArray(flattened) : flattened;
  
  }
  //use the spread operator since it acts like arr[0],arr[1], etc
  steamrollArray([1, [2], [3, [[4]]]]);
  //Flatten a nested array. You must account for varying levels of nesting.