
function diffArray(arr1, arr2) {

    function newArrOne(a) {
        return arr2.filter(function (i) { return a.indexOf(i) < 0; });
    }

    function newArrTwo(a) {
        return arr1.filter(function (i) { return a.indexOf(i) < 0; });
    }

    return newArrOne(arr1).concat(newArrTwo(arr2));

}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

//if it's in an array, but not another, return it
// if it is in both arrays, skip it, and return the others

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.