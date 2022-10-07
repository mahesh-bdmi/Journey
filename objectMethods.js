function personInfo(){
    console.log(`My name is ${this.firstName} and age is ${this.age}`)
}



person1 = {
  firstName: "Mahesh",
  age: 32,
  about: personInfo
};

person2 = {
    firstName: "Eshan",
    age: 2,
    about: personInfo
  };

person1.about();
person2.about();
