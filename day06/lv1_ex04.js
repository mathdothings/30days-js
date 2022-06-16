let pattern = "";

for (let x = 1; x <= 6; x++) {
  let n = x;
  pattern = "";
  while (n > 0) {
    pattern += "#";
    n--;
  }
  console.log(pattern);
}
