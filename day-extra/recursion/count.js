function countDownRecursive(n, min = 0) {
  if (n === min) {
    console.log(n);
    return min;
  }

  console.log(n);
  return countDownRecursive(n - 1, min);
}

// logs 10 ~ 0
countDownRecursive(10);

// spacce between logs
console.log();

function countUpRecursive(max, n = 0) {
  if (n === max) {
    console.log(n);
    return max;
  }

  console.log(n);
  return countUpRecursive(max, n + 1);
}

// logs 0 ~10
countUpRecursive(10);
