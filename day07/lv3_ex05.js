function convertHexToRgb(hex) {
  const h = hex.substring(1);
  const red = h.substring(0, 2);
  const green = h.substring(2, 4);
  const blue = h.substring(4, 6);
  const hexaColors = [red, green, blue];
  const rgbColors = [];
  const hexaBase = [
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

  for (let color of hexaColors) {
    const convertionFactor = [];
    for (let x = 0; x < color.length; x++) {
      const char = color[x];
      convertionFactor.push(hexaBase.indexOf(char));
      if (x === 0) {
        convertionFactor[0] = convertionFactor[0] * 16;
      }
    }
    rgbColors.push(convertionFactor[0] + convertionFactor[1]);
  }

  return rgbColors;
}

console.log(convertHexToRgb("#2a222f"));
