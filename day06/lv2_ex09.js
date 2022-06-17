const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const len = countries.length;
let result = "";
let greatest;

for (let x = 0; x < len; x++) {
  let element = countries[x];
  let elementLength = element.length;
  if (x === 0) {
    greatest = element;
  } else {
    if (elementLength > greatest.length) {
      greatest = element;
    }
  }
}

const greatestLen = greatest.length;
console.log(`Greatest: ${greatest}. Length: ${greatestLen}.`);
