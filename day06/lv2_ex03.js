let rgb = [];
let rnd;

for (let x = 0; x < 3; x++) {
  rnd = Math.floor(Math.random() * 256);
  rgb.push(rnd);
}

console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]});`);
