function rndSixHex(n = 1) {
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
  const hexArray = [];
  let sixHex = "#";
  let rnd;

  for (let a = 0; a < n; a++) {
    for (let x = 0; x < 6; x++) {
      rnd = Math.floor(Math.random() * len);
      sixHex += hexValues[rnd];
    }
    hexArray.push(sixHex);
    sixHex = "#";
  }

  return hexArray;
}

console.log(rndSixHex(10));
