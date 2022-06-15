const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let sassCheck = webTechs.includes("Sass");
if (sassCheck) {
  console.log("Sass is a CSS preprocess.");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}
