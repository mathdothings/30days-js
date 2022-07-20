function doubles(a, b) {
  const double = 2 * a + 2 * b;
  return sumDoubles();

  function sumDoubles() {
    return double * 2;
  }
}

console.log(doubles(1, 1));
