function destroyer(arr) {

    var args = Array.from(arguments).slice(1);
    return arr.filter(function (num) {
        return !args.includes(num);// if num is not in args, return those
    });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.