const key = "email";
const person = {
  name: "Mahesh",
  age: 32,
  interests: ["space", "anime", "TV shows"],
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

for (let key in person) {
  console.log(key, person[key]); //loops through the object entries
}

console.log(Object.keys(person)); //returns the keys of object in array format

person.key = "thamerdan@gmail.com" //creates key named "key"
person[key] = "thamerdan@gmail.com" //creates key named value of key ie. email
person['key3'] = "thamerdan@gmail.com" //creates key named key3

console.log(person)