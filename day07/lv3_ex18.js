// not considering keyword or reserved words
function isValidVariableName(variableName) {
  const validStart = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "_",
    "$",
  ];

  for (let element of validStart) {
    if (
      variableName[0] === element ||
      variableName[0] === element.toUpperCase()
    )
      return true;
  }

  return false;
}

console.log(isValidVariableName("!not")); // false
console.log(isValidVariableName("not")); // true
