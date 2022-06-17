const countries = [
  "Bolivia",
  "Canada",
  "Albania",
  "Denmark",
  "Ethiopia",
  "Hungary",
  "Finland",
  "Ireland",
  "Germany",
  "Kenya",
  "Japan",
];

let copy = [];
for (elem of countries) {
  copy.push(elem);
}

// alphabetical ascendent order
copy.sort();
console.log(copy);

// original array without any sorting process
console.log(countries);
