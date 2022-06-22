function rgbColorGenerator() {
  let color = [];
  let rnd;
  for (let x = 0; x < 3; x++) {
    rnd = Math.floor(Math.random() * 256);
    color.push(rnd);
  }

  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

console.log(rgbColorGenerator());
