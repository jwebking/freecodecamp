
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {

        if (str.length > num && num < 3) { //solves last two
            return str.slice(0, num) + "...";
        } else {
            return str.slice(0, num - 3) + "..."; //solves first two problems
        }
    }

    else if (str.length === num) { //solves third one
        return str;
    }

    else if (str.length < num) { //solves fourth one
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 2);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, 
//then the addition of the three dots does not add to the string length in determining the truncated string.