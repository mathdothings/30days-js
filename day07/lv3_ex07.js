function generateColors(colorPattern, amount) {
  const result = [];
  for (let x = 0; x < amount; x++) {
    if (colorPattern === "hexa") {
      result.push(rndSixHex());
    } else if (colorPattern === "rgb") {
      result.push(rgbColorGenerator());
    }
  }

  return result;
}

// hex colors function
function rndSixHex() {
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

// rgb colors function
function rgbColorGenerator() {
  let color = [];
  let rnd;
  for (let x = 0; x < 3; x++) {
    rnd = Math.floor(Math.random() * 256);
    color.push(rnd);
  }

  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

console.log(generateColors("rgb", 5));
