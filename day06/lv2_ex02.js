let randomKey = "#";
let keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let len = keys.length;
let rnd;
let randomKeyLength = 6;

for (let x = 0; x < randomKeyLength; x++) {
  rnd = Math.floor(Math.random() * len);
  randomKey += keys[rnd];
}

console.log(randomKey);
