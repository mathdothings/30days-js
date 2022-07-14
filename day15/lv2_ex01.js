class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  get getAnimalName() {
    return this.name;
  }
  get getAnimalAge() {
    return this.age;
  }
  get getAnimalColor() {
    return this.color;
  }
  get getAnimalLegs() {
    return this.legs;
  }

  get getAnimalType() {
    return this.type;
  }

  get getAnimalInfo() {
    const animalInfo = [this.name, this.age, this.color, this.legs];
    return animalInfo;
  }

  set setAnimalName(name) {
    this.name = name;
  }
}

class Cow extends Animal {
  constructor(name, age, color, legs, type = "cow") {
    super(name, age, color, legs);
    this.type = type;
  }

  get getAnimalInfo() {
    const animalInfo = [];
    animalInfo.push(
      this.getAnimalName,
      this.getAnimalAge,
      this.getAnimalColor,
      this.getAnimalLegs,
      this.getAnimalType
    );

    return animalInfo;
  }

  muuuh() {
    return "Muuuuuh!";
  }
}

const cow = new Cow("White", 20, "black", 4);
console.log(cow.getAnimalInfo);
console.log(cow.muuuh());
