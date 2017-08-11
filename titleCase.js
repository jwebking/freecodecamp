function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  
  var finalArr = arr.map(function(word){
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }); //used map instead of for loop, and took a while to remember I could use charAt(0) - was pumped and felt good when I saw this was basically the intermediate solution
  
  return finalArr.join(" ");
}

titleCase("I'm a little tea pot");

// Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".