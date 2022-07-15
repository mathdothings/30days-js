const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
const obj = JSON.parse(txt);

const destructuring = (structure) => {
  const result = [];
  for (const item in structure) {
    const { skills } = structure[item];
    result.push({ name: item, skills: skills });
  }

  return result;
};

const whoHasManySkills = (array) => {
  let name = "";
  let skills = [];
  let skillsCount = 0;
  array.forEach((item) => {
    if (item.skills.length > skillsCount) {
      skillsCount = item.skills.length;
      name = item.name;
      skills = item.skills;
    }
  });

  return { name: name, count: skillsCount, skills: skills };
};

const dest = destructuring(obj);
// console.log(whoHasManySkills(dest));

const hasManySkills = ({ name, skills }) => {
  const count = skills.length;
  return [name, count];
};

const x = [];
dest.forEach((person) => x.push(hasManySkills(person)));
// console.log(x);
