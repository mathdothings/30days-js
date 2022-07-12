const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const changeStudent = (studentData) => {
  const { name, age, skills } = studentData;
  const obj = {
    name,
    age,
    ...skills,
    dataScience: [...skills.dataScience, "SQL"],
    frontEnd: [...skills.frontEnd, { skill: "BootStrap", level: 8 }],
    backEnd: [...skills.backEnd, { skill: "Express", level: 9 }],
    dataBase: [...skills.dataBase, { skill: "SQL", level: 8 }],
  };

  return obj;
};

console.log(changeStudent(student));
console.log(student);
