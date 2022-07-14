class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  get getAnimalInfo() {
    return [this.name, this.age, this.color, this.legs];
  }

  set setAnimalName(name) {
    this.name = name;
  }
}

const anm = new Animal("Logan", 10, "grey", 4);
console.log(anm);
console.log(anm.getAnimalInfo);
