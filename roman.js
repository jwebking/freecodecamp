// Convert the given number into a roman numeral.

function convertToRoman(num) {
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var finalSym = '';

    for (var i = 0; i <= romans.length; i++) {
        while (numbers[i] <= num) {
            finalSym += romans[i];
            num -= numbers[i];
        }
    }

    return finalSym;
}

convertToRoman(29);

//find the highest number without going over
//assign the corresponding roman
//subtract the index from the num
// go through the string again and repeat
// return the final symbols string