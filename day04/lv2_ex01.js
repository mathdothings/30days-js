let score = -1;
let grade = null;

if (score >= 0 && score <= 49) grade = "F";
else if (score >= 50 && score <= 59) grade = "D";
else if (score >= 60 && score <= 69) grade = "C";
else if (score >= 70 && score <= 89) grade = "B";
else if (score >= 90 && score <= 100) grade = "A";
else (score = "undefined"), (grade = "invalid");

console.log(`Your score is ${score} and your grade is ${grade}.`);
