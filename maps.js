const person = new Map(); //Maps can have any type of key where as 'Object literal' only supports string keys
person.set("firstName", "Mahesh");
person.set("age", 32);
person.set("interests", ["space", "anime", "TV shows"]);

console.log(person);
console.log(person.get("firstName"));
console.log(person.keys()); //prints the keys

for (let key of person.keys()) {
  console.log(person.get(key)); //loop through map values
}

for (let [key, value] of person) {
  console.log(key, value);
}

const person1 = {
  firstName: "Mahesh",
  age: 32,
};

const moreInfo = new Map();
moreInfo.set(person1, { interets: ["space", "anime", "TV shows"] }); //object is mapped to another object
console.log(moreInfo.get(person1).interets)
