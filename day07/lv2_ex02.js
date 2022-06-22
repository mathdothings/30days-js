const solveQuadEquation = (a = 0, b = 0, c = 0) => {
  const delta = b ** 2 - 4 * a * c;
  const roots = [];

  if (delta < 0) {
    console.log("No solution available!");
    return NaN;
  } else {
    const rootsCalc = [
      [((-b + Math.sqrt(delta)) / 2) * a],
      [((-b - Math.sqrt(delta)) / 2) * a],
    ];
    if (delta === 0) {
      roots.push(rootsCalc[0][0]);
    } else {
      roots.push(rootsCalc[0][0]);
      roots.push(rootsCalc[1][0]);
    }
  }

  return roots;
};

console.log(solveQuadEquation());
