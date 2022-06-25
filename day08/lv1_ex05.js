const dog = {
  name: "Lion",
  legs: 4,
  color: "Brown",
  age: "2 years",
  breed: "Mutt",

  getDogInfo: () => Object.values(dog),
  bark: () => "Woof woof!",
};

console.log(dog.getDogInfo());
