const pElements = document.querySelectorAll("p");

pElements.forEach((p, i) => {
  p.textContent = i + 1;
  if (isPrime(i + 1)) {
    p.style.backgroundColor = "green";
  }
  if (i % 2 === 0) {
    p.setAttribute("class", "odd");
  } else {
    p.setAttribute("class", "even");
  }
});

function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) count += 1;
  }
  if (count <= 2) {
    return true;
  }
  return false;
}
