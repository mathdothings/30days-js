localStorage.clear();

const student = {
  firstName: "first",
  lastName: "last",
  age: 100,
  country: "anywhere",
  skills: ["html", "css", "js"],
  enrolledKeys: ["react", "express", "node"],
};

localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("age", age);
localStorage.setItem("country", country);
localStorage.setItem("skills", skills);
localStorage.setItem("enrolledKeys", enrolledKeys);
