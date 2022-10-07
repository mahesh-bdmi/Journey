let firstName = "Mahesh";
let lastName = "Bandameedi";

console.log(firstName.length); //gets the lenth of the string
console.log(firstName[firstName.length - 1]); // prints the last letter of the string
console.log(firstName.slice(firstName.length - 4)); //gets the last four chars // slice takes first index and last index
console.log(firstName.trim()); //trims the spaces
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(5)); //gets the character at the index
console.log(firstName.substring(4)); //gets the characters starting at the index

let fullName = firstName + " " + lastName;
console.log(fullName);

let age1 = "30";
let age2 = "2";

let fullAge = +age1 + +age2; //adding + before a string converts it to a number
console.log(fullAge);

console.log(`My name is ${fullName} and my age is ${fullAge}`);
