function rndsixHex() {
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
  let sixHex = "";
  let rnd;
  for (let x = 0; x < 6; x++) {
    rnd = Math.floor(Math.random() * len);
    sixHex += hexValues[rnd];
  }

  return sixHex;
}

console.log(rndsixHex());
