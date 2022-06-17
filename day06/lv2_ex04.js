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

for (let n = 0; n < len; n++) {
  countries[n] = countries[n].toUpperCase();
}

console.log(countries);
