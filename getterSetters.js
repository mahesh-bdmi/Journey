class Person {
  constructor(firstname, lastname, age, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get fullName() {
    //call it as a property instead of methods
    return `${this.firstname} ${this.lastname}`;
  }
  set fullName(fullName) {
    [this.firstname, ...this.lastname] = fullName.split(" ");
  }
}

const person1 = new Person("Mahesh", "B", 32);
console.log(person1);
console.log(person1.fullName);

person1.fullName = "Eshan B B B";

console.log(person1.lastname);
