function basicMathOperations(a, b) {
  const sum = () => a + b;
  const dif = () => a - b;
  const mul = () => a * b;
  const div = () => {
    if (b !== 0) {
      return a / b;
    } else {
      return NaN;
    }
  };

  return [sum(), dif(), mul(), div()];
}

console.log(basicMathOperations(1, 2));
console.log(basicMathOperations(0, 1));
