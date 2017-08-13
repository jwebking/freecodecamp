function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr=[];
  
  while(arr.length) {
   newArr.push(arr.splice(0,size));
}
  return newArr;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a 
//two-dimensional array.