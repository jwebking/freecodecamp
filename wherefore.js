function whatIsInAName(collection, source) {
    // What's in a name?
    var theKey = Object.keys(source);
    // Only change code below this line


    //filter out collection items that don't have the vals of source in them
    return collection.filter(function (o) { //o = to collection[0], collection[1], etc
        //
        return theKey.every(function (k) { // k is theKey[0], theKey[1], etc
            return o.hasOwnProperty(k) && o[k] === source[k];
        }); //does collection[0] have the property of theKey[0]
    });// and does collection[0][theKey[0]] === source[key[0]]



}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

 //return Object.values(collection[2].last).join("") == Object.values(source);
//https://blog.angularindepth.com/learn-recursion-in-10-minutes-e3262ac08a1
//Object.keys(source); - needs to be val in the function
// collection is node in function