let rndNums = [];

for (let x = 0; x <= 5; x++) {
  let rndN = Math.floor(Math.random() * 101);
  rndNums.push(rndN);
}

console.log(rndNums);
