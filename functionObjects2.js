userMethods = {
  about() {
    console.log(
      `My name is ${this.firstName} and ${this.age} years old living at ${this.Address} and can be reached at ${this?.email}`
    );
  },
  is18() {
    if (this.age > 18) {
      console.log(`${this.firstName} is above 18`);
    } else {
      console.log(`${this.firstName} is not 18 yet`);
    }
  },
};

function createUser(firstName, age, email, Address) {
  const user = Object.create(userMethods); //incase user doesn't have a key, it check in userMethods
  user.firstName = firstName;
  user.age = age;
  user.email = email;
  user.Address = Address;
  //storing function address from other object to this object
  user.about = userMethods.about;
  return user;
}

const user1 = createUser(
  "Mahesh",
  32,
  "thamerdan@gmail.com",
  "number, colony, country"
);

const user2 = createUser(
  "Eshan",
  2,
  "thamerdan@gmail.com",
  "number, colony, country"
);

user1.about();
user1.is18();

user2.about();
user2.is18();
