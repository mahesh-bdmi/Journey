class Animal {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  iscute() {
    if (this.age <= 1) return true;
    else return false;
  }
}

const animal1 = new Animal("Julie", 1, "Dog");
// console.log(animal1);
// console.log(animal1.iscute());

class Dog extends Animal {
  constructor(name, age, type, sound) {
    super(name, age, type);
    this.sound = sound;
  }
}

const animal2 = new Dog("Julie", 1, "Dog", "barks");
console.log(animal2);
