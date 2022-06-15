const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let middle = Math.round((itCompanies.length - 1) / 2);

itCompanies.splice(middle, 1);
console.log(itCompanies);
