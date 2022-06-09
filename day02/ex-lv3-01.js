let sent =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let pattern = /love/g; // /g means search in all text

let count = sent.match(pattern);
console.log(count); // ['love', 'love'] = 2 appear 2 times
