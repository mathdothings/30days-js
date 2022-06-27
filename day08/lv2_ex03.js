const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const alex = users.Alex.skills;
const asab = users.Asab.skills;
const brook = users.Brook.skills;
const daniel = users.Daniel.skills;
const john = users.John.skills;
const thomas = users.Thomas.skills;
const paul = users.Paul.skills;

const users_Skills = [alex, asab, brook, daniel, john, thomas, paul];

function getSkills(array, index) {
  return array[index];
}

function getUserNames(users) {
  const usersNames = [];
  for (let user in users) {
    usersNames.push(user);
  }

  return usersNames;
}

const userNames = getUserNames(users);

function mernCheck(array, index) {
  const mern = ["MongoDB", "Express", "React", "Node"];
  const skills = getSkills(array, index);
  const checkEachSkill = [];

  for (element of mern) {
    if (skills.includes(element)) {
      checkEachSkill.push(true);
    } else {
      checkEachSkill.push(false);
    }
  }

  for (let element of checkEachSkill) {
    if (element) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

const mernDev = [];
for (let i in userNames) {
  let user = userNames[i];
  if (mernCheck(users_Skills, i)) {
    mernDev.push(user);
  }
}

console.log(mernDev);
