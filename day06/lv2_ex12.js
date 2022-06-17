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
let result = [];

for (let x = 0; x < len; x++) {
  let element = webTechs[x];
  let elementLength = element.length;
  result.push([element, elementLength]);
}

console.log(result);
