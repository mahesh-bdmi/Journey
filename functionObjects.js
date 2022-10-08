function about() {
  console.log(
    `My name is ${this.firstName} and ${this.age} years old living at ${this.Address} and can be reached at ${this?.email}`
  );
}

const person = {
  firstName: "Mahesh",
  age: 32,
  Address: "number, colony, country",
};

about.call(person);

function createUser(firstName, age, email, Address) {
  const user = {};
  user.firstName = firstName;
  user.age = age;
  user.email = email;
  user.Address = Address;
  return user;
}

const user1 = createUser(
  "Mahesh",
  32,
  "thamerdan@gmail.com",
  "number, colony, country"
);

console.log(user1)
about.call(user1)
about.call(person)