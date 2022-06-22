const solveLinEquation = (a, b, c) => {
  const x = -c / (a + b);
  return x;
};

console.log(solveLinEquation(1, 1, -4));
