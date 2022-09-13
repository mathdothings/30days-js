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

function changeColor(element) {
  const content = element.textContent;

  if (isEven(content)) {
    element.style.backgroundColor = GREEN;
  }

  if (!isEven(content)) {
    element.style.backgroundColor = YELLOW;
  }

  if (isPrime(content)) {
    element.style.backgroundColor = RED;
  }
}

function removeChilds() {
  const p = document.querySelectorAll("p");
  p.forEach((p) => p.remove());
}

function generateNumbers(amount) {
  removeChilds(); // remove all p inside numbers-container before generating
  amount = getInputValue();
  for (let x = 0; x < amount; x++) {
    const n = document.createElement("p");
    numbersContainer.appendChild(n);
    n.textContent = x;
    changeColor(n);
  }
}

function getInputValue() {
  const input = document.querySelector("#input");
  document.getElementById("input").innerHTML = input;
  // console.log(input.value);
  // just for debugging proporses
  return input.value;
}
