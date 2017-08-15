//version 1 - solving it one piece at a time, first way that came to mind. 
function rot13(str) { // LBH QVQ VG!
    var final = [];
    var yup = str.charCodeAt(10);
    var i = 0;

    while (i < str.length) {

        if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) >= 65) {
            // add 13, turn it into a letter, and push it into the array
            final.push(String.fromCodePoint(str.charCodeAt(i) + 13));

        } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) <= 90) {
            // minus 13, turn it into a letter, and push it into the array
            final.push(String.fromCodePoint(str.charCodeAt(i) - 13));

        } else {
            //   just push it as is into the array
            final.push(String.fromCodePoint(str.charCodeAt(i)));
        }
        i++;
    }
    return final.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");



// Version 2 - forcing myself to use build in functional programming methods in JavaScript.
// I knew something like .replace() could be used, but RegEx are a bugger still. 














// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.