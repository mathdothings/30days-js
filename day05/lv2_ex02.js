let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// remove pounctuations
let words = text;

let pattern1 = /\./g;
let pattern2 = /\./g;

words = words.replace(pattern1, "");
words = words.replace(pattern2, "");

// change string to an array
words = words.split(" ");

// show the result
console.log(words);
console.log(words.length);
