function convertRgbToHex(rgbArray) {
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
  let red = "";
  let green = "";
  let blue = "";
  const hexValues = [red, green, blue];

  for (let x = 0; x < rgbArray.length; x++) {
    let element = rgbArray[x];
    if (element > 255) return "Invalid rgb sequence";
    if (element < 16) {
      switch (x) {
        case 0:
          red = "0" + element.toString();
          break;

        case 1:
          green = "0" + element.toString();
          break;

        case 2:
          blue = "0" + element.toString();
          break;
      }
    }

    const hexFactors = [];
    let reminder = element;
    while (reminder % 16 >= 16) {
      hexFactors.push(Math.trunc(element / 16));
      hexFactors.push(element % 16);
      reminder %= Math.trunc(element / 16);
      console.log(hexFactors);
    }
  }

  //return hexValues;
}

console.log(convertRgbToHex([155, 100, 5]));
