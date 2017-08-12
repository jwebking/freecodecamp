function largestOfFour(arr) {

  var newArr = [];

  for(var i=0; i<arr.length; i++){
    arr[i].sort(function(a,b){
      return b-a;
    });
    newArr.push(arr[i][0]);
  }
  
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.