function sumFibs(num) {
    
    var a=1;
    var b=0;
    var temp;
    var arr=[1];
    
  for(var i = 1; i<= num;){
    arr.push(i);
    i = arr[arr.length-1] + arr[arr.length - 2];
  }
  
  var final = arr.reduce(function(x,y){
    if(y%2 !== 0){
      return x+y;
    }
    else {
      return x;
    }
  });
  
  return final;

  }
  
  sumFibs(4);