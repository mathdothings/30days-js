let randomNumbers = [];
let rndNum = Math.floor(Math.random() * 11);
let count = 0;

while (count < 5) {
  while (true) {
    if (randomNumbers.includes(rndNum)) {
      rndNum = Math.floor(Math.random() * 11);
    } else {
      randomNumbers.push(rndNum);
      count++;
      break;
    }
  }
}

console.log(randomNumbers);
