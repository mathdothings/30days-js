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

  get getAnimalInfo() {
    const animalInfo = [this.name, this.age, this.color, this.legs];
    return animalInfo;
  }

  set setAnimalName(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, type = "cat") {
    super(name, age, color, legs);
    this.type = type;
  }

  meaw() {
    return "Meaw! Meaw!";
  }

  get getAnimalType() {
    return this.type;
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
}

const cat = new Cat("Fat", 10, "grey", 4);
console.log(cat);
console.log(cat.meaw());
console.log(cat.getAnimalInfo);

class Dog extends Animal {
  constructor(name, age, color, legs, type = "dog") {
    super(name, age, color, legs);
    this.type = type;
  }

  hulgh() {
    return "Hulgh, Hulgh!";
  }

  get getAnimalType() {
    return this.type;
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
}

const dog = new Dog("Lion", 5, "yellow", 4);
console.log(dog);
console.log(dog.hulgh());
console.log(dog.getAnimalInfo);
