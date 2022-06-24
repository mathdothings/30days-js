function shuffleArray(array) {
  const len = array.length;
  const shuffledPositions = noRepeatRndNums(len, len);
  const shuffledArray = [];

  for (let x = 0; x < len; x++) {
    let rndIndex = shuffledPositions[x];
    shuffledArray[x] = array[rndIndex];
  }

  return shuffledArray;

  // maxRange is not end-inclusive. maxRange = 10 will generate from 0 to 9
  function noRepeatRndNums(amout, maxRange) {
    const rndNums = [];
    // turns first number into a random one too
    let rnd = Math.floor(Math.random() * maxRange);

    if (typeof amout !== "number" || typeof maxRange !== "number")
      return "Invalid args for amout and maxRange in call to noRepeatRndNums().";
    if (amout > maxRange) {
      return (
        "Invalid!\n" +
        "amout > maxRange in call to noRepeatRndNums(amout, maxRange)."
      );
    } else {
      for (let x = 0; x < amout; x++) {
        while (rndNums.includes(rnd)) {
          rnd = Math.floor(Math.random() * maxRange);
        }
        rndNums.push(rnd);
      }
    }

    return rndNums;
  }
}

const names = ["name0", "name1", "name2", "name3", "name4"];
const numbers = [1, 2, 3, 4, 5];
const types = ["string", 10, true, undefined, NaN];
console.log(shuffleArray(names));
console.log(shuffleArray(numbers));
console.log(shuffleArray(types));
