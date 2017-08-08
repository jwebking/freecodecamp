//Return the factorial of the provided integer.

function factorialize(num) {
  var factor=1;
    for (var i=num;i>0;i--){
      factor*=i;
    }

return factor;
} 

factorialize(5);
// need to learn more about recursion
// I know I could've just done return num*factorialize(num-1), but I had a for-loop stuck in my head