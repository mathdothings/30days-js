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

let len = countries.length;
let countriesLengths = [];

for (let x = 0; x < len; x++) {
  let elemLength = countries[x].length;
  countriesLengths.push(elemLength);
}

console.log(countriesLengths);
