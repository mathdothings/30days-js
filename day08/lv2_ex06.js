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

const getAllUserValues = (obj, allUserValues = []) => {
  const isObject = (obj) => {
    // not safest way to check obj type
    if (typeof obj === "object") {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key !== undefined || key !== null) {
            return true;
          }
        }
      }
    }

    return false;
  };

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (isObject(obj[prop])) {
        getAllUserValues(obj[prop], allUserValues);
      } else {
        if (prop && obj[prop]) {
          allUserValues.push(obj[prop]);
        }
      }
    }
  }

  return allUserValues;
};

console.log(getAllUserValues(users));
