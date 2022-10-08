function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName,this.age)
}


//Creates an object with user details.
const user1 = new createUser('Mahesh',32); 
const user2 = new createUser('Eshan',2);

user1.about()
user2.about()
