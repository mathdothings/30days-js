const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const len = webTechs.length;
let longest = "";

for (let x = 0; x < len; x++) {
  let element = webTechs[x];
  let elementLength = element.length;
  if (x === 0) {
    longest = element;
  } else {
    if (elementLength > longest.length) {
      longest = element;
    }
  }
}

console.log(longest);
