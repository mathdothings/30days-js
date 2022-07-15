localStorage.clear();

const student = {
  firstName: "first",
  lastName: "last",
  age: 100,
  skills: ["html", "css", "js"],
  enrolledKeys: ["react", "express", "node"],
};

const { firstName, lastName, age, skills, enrolledKeys } = student;
const allProps = [firstName, lastName, age, skills, enrolledKeys];

for (const prop of allProps) {
  localStorage.setItem(JSON.stringify(prop), JSON.stringify(prop));
}
