function rndTwoHex() {
  const hexValues = [
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
  ];
  const len = hexValues.length;
  let twoHex = "";
  let rnd;
  for (let x = 0; x < 2; x++) {
    rnd = Math.floor(Math.random() * len);
    twoHex += hexValues[rnd];
  }

  return twoHex;
}

function rndMacAddress() {
  let result = "";
  for (let x = 0; x < 6; x++) {
    if (x === 5) {
      result += rndTwoHex();
    } else {
      result += rndTwoHex();
      result += "-";
    }
  }

  return result;
}

console.log(rndMacAddress());
