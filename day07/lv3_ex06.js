function convertRgbToHex() {
  // can convert only in range (0, 255) inclusively
  function convertDecimalToHex(decimal) {
    const divisor = 16;
    let dividend = decimal;
    let quotient = Math.trunc(dividend / divisor);
    let reminder = dividend % divisor;
    const hexNums = [
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

    let hexFactors = [];
    hexFactors.push(quotient);
    hexFactors.push(reminder);

    return `${hexNums[quotient]}${hexNums[reminder]}`;
  }

  let result = "#";
  for (let element of arguments) {
    result += convertDecimalToHex(element);
  }

  return result;
}

console.log(convertRgbToHex(198, 56, 125));
