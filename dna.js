
function pairElement(str) {
    var newStr = str.split('');
    var finalArr = [];

    function checkDNA(chrom) {
        switch (chrom) {
            case 'T':
                finalArr.push(['T', 'A']);
                break;
            case 'A':
                finalArr.push(['A', 'T']);
                break;
            case 'G':
                finalArr.push(['G', 'C']);
                break;
            case 'C':
                finalArr.push(['C', 'G']);
                break;
        }
    }

    for (var i = 0; i < str.length; i++) {
        checkDNA(str[i]);
    }
    return finalArr;
}

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]