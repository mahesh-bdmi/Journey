class createUser {
  constructor(firstName, age, email, Address) {
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.Address = Address;
  }
  about(){
    return `${this.firstName} is ${age} years old with an email address ${this.email} living at ${this.Address}`
  }
}

const user1 = new createUser('Mahesh', 32, 'thamerdan@gmail.com', 'India')

console.log(user1)
console.log(Object.getPrototypeOf(user1))