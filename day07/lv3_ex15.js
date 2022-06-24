function isPrime(number) {
  let divisors = [];

  if (number % 2 === 0) return false;
  else {
    for (x = 1; x < number; x++) {
      if (number % x === 0) divisors.push(x);
    }
  }

  if (divisors.length > 2) return false;
  else return true;
}

console.log(isPrime(15));
console.log(isPrime(134545469));
console.log(isPrime(5));
