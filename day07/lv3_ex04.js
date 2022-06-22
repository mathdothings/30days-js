function arrayOfRgbColors(n = 1) {
  const arrOfColors = [];
  for (let x = 0; x < n; x++) {
    const color = [];
    let rnd;
    for (let x = 0; x < 3; x++) {
      rnd = Math.floor(Math.random() * 256);
      color.push(rnd);
    }
    arrOfColors.push(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
  }

  return arrOfColors;
}

console.log(arrayOfRgbColors(10));
