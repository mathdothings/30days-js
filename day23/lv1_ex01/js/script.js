const RED = "#eb695b";
const GREEN = "#5bbc7a";
const YELLOW = "#f7dc5c";

const numbersContainer = document.querySelector("#numbers-container");

const button = document.querySelector("#button");
button.addEventListener("click", generateNumbers);

function isPrime(number) {
  let divisors = 0;
  for (let x = 1; x <= number; x++) {
    if (number % x === 0) divisors++;
  }

  if (divisors > 0 && divisors <= 2) return true;
  return false;
}

function isEven(number) {
  if (number % 2 === 0) return true;
  return false;
}

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

function analyzeNumber(element) {
  const content = element.textContent;

  if (isEven(content)) {
    changeColor(element, GREEN);
  }

  if (!isEven(content)) {
    changeColor(element, YELLOW);
  }

  if (isPrime(content)) {
    changeColor(element, RED);
  }
}

function removeChilds() {
  const p = document.querySelectorAll("p");
  p.forEach((p) => p.remove());
}

function generateNumbers(amount) {
  removeChilds(); // removes all p elements inside numbers-container, then generate again
  amount = getInputValue();
  for (let x = 0; x < amount; x++) {
    const n = document.createElement("p");
    numbersContainer.appendChild(n);
    n.textContent = x;
    analyzeNumber(n);
  }
}

function getInputValue() {
  const input = document.querySelector("#input");
  // console.log(input.value);
  // just for debugging proporses
  return input.value;
}
