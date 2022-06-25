let sent =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus 15000 euro online courses per month.";

let pattern = /\d+/g;
const income = sent.match(pattern);

console.log(`Annual Income: ${+income[0] * 12 + +income[1] + +income[2] * 12}`);
