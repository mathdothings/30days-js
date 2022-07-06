const set = new Set();

for (let x = 0; x <= 10; x++) {
  set.add(x);
}

console.log(set);
set.delete(0);
console.log(set);
