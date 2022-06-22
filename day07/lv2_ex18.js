function userIdGenerator() {
  const possibleChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
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
    "x",
    "y",
    "w",
    "z",
  ];
  const len = possibleChars.length;
  let rndId = "";
  let rnd;
  let rndToUpper;
  for (let x = 0; x < 7; x++) {
    rnd = Math.floor(Math.random() * len);
    // 0 to 9 are numbers and 10+ length are letters who can be turned randomly to uppercase
    if (rnd > 10) {
      rndToUpper = Math.floor(Math.random() * 2); // randomly choices if it will be uppercase or lowercase letter
      // 0 = false, which means no uppercase
      if (rndToUpper === 0) {
        rndId += possibleChars[rnd];
      } else {
        rndId += possibleChars[rnd].toUpperCase();
      }
    } else {
      rndId += possibleChars[rnd];
    }
  }

  return rndId;
}

console.log(userIdGenerator());
