function sumAll(arr) {

    var counter = 0;
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);

    for (var i = min; i <= max; i++) {
        counter += i;
    }
    return counter;
}

sumAll([10, 5]);

// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.