function rndGen(start, end) {
  const rnd = Math.floor(Math.random() * end + start);
  return rnd;
}

function rndUserIp() {
  return [rndGen(0, 127), rndGen(0, 255), rndGen(0, 255), rndGen(0, 255)];
}

console.log(rndUserIp());
