function sumRangeRecursive(n = 0, sum = 0) {
  if (n === 0) {
    return sum;
  }

  return sumRangeRecursive(n - 1, (sum += n));
}

console.log(sumRangeRecursive(3)); // => 6
