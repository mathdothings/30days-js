let sent =
  "You cannot end a sentence with because because because is a conjunction";
let pattern = /because/g;
console.log(sent.match(pattern)); // ['because', 'because', 'because'] = appears 3 times
