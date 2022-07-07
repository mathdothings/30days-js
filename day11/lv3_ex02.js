const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

const [name, skills, scores, jsScore = scores[2], reactScore = scores[3]] =
  student;

console.log(name, skills.length, skills, jsScore, reactScore);
