
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var regs = /\s+|_+/g;
    var capRegs = /([A-Z])/g;
    
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
      
      
    return str.replace(regs, "-").toLowerCase();
  
  }

//   Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//replace all special characters with empty space /([\W_])/g
// split the string at capital letters /([A-Z])/g
// join it with "-"
// turn it to lower case
// return it
// $1 means the first part of the regex adn $2 is the second part
//so replace says "when you see a little char next to a big char, replace the little char with itself, and the big char with itself, but insert whatever is between 1 and 2. In this case, it is empty space, but it could be anything. could be @#$%%^^^ or it could be ! or whatever. 
//' ' are just the quotes required in replace, has nothing to do with regex or $ signs. 
