const students = [
  ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(array) {
  return array.map(([names, skills, scores]) => {
    return {
      name: [names][0],
      skills: [...skills],
      scores: [...scores],
    };
  });
}

console.log(convertArrayToObject(students));
