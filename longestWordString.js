
function findLongestWord(str) {
  
  var splitter = str.split(" ");
  
  if (splitter.length == 1){
    return splitter[0].length;
  }
  
  
  if (splitter[0].length >= splitter[1].length){
    splitter.splice(1,1);
    return findLongestWord(splitter.join(" "));
  }
  
  if (splitter[0].length <= splitter[1].length){
   
    return findLongestWord(splitter.slice(1,splitter.length).join(" "));
  }
  
}
 

findLongestWord("The quick brown fox jumped over the lazy dog");


// wanted to practice recursion. Tried to think of a way to check the str[0] >= str[1], but forgot about needing something to break the recursion. 
//Ended up taking a peak in the forums and my final answer was pretty similar to the recursion answer, so added the if == 1 checker.

//  original was something along the lines of:

// function findLongestWord(str) {
  
//     var splitter = str.split(" ");

//     var sorted = splitter.sort(function(a,b){
//         return a.length - b.length;
//     });
  
//   return sorted.splice(sorted.length-1).toString().length;

// }
// findLongestWord("The quick brown fox jumped over the lazy dog");






}