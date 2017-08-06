//reverse a provided string

function reverseString(str) {
  var arr = str.split("").reverse().join("");
  return arr;
}

reverseString("hello");