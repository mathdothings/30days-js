const main = document.querySelector("main");

let countryCounter = 0;
let rowCounter = 0;
let ulCounter = 0;
const COUNTRIES_PER_ROW = 6;
const MAX_ROWS = Math.round(countries.length / 6);

function makeRows() {
  countries.forEach((country, index) => {
    if (index % COUNTRIES_PER_ROW === 0 && ulCounter <= MAX_ROWS) {
      const ul = document.createElement("ul");
      ul.id = ulCounter;
      ulCounter += 1;
      main.appendChild(ul);
    }
  });
}

function insertCountries() {
  countries.forEach((country, index) => {
    if (countryCounter < COUNTRIES_PER_ROW) {
      const li = document.createElement("li");
      const ul = document.getElementById(`${rowCounter}`);
      ul.appendChild(li);
      li.textContent = country;
      countryCounter += 1;
    }
    if (countryCounter === COUNTRIES_PER_ROW) {
      countryCounter = 0;
      rowCounter += 1;
    }
  });
}

makeRows();
insertCountries();
