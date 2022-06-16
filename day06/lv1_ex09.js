for (let x = 1; x <= 100; x++) {
  let divisors = 0;

  for (let y = 1; y <= x; y++) {
    if (x % y === 0) {
      divisors++;
    }
  }

  if (divisors > 2) {
    continue;
  } else {
    console.log(`${x} is prime!`);
  }
}

