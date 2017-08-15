function mutation(arr) {

    var zero = arr[0].toString().toLowerCase().split('');
    var one = arr[1].toString().toLowerCase().split('');

    return one.every(function (letter) {
        return zero.indexOf(letter) !== -1;
        //indexOf returns the first index of where a letter is, or -1 if it's not found, 
        //that's why you have to use that rather than true/false
    });
}

mutation(["floor", "for"]);

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".