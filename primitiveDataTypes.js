"use strict";

//typeof operator

let firstName = "Mahesh";
let age = 32;
console.log(typeof firstName); //string
console.log(typeof age); //number

if (typeof age === "number") console.log(`${age} is a number`);

let stringAge = String(age); //converts number to a sting
console.log(typeof stringAge);
console.log(typeof null); //it's a bug

console.log(Number.MAX_SAFE_INTEGER);

let myAge = BigInt(32);
let myAge2 = 32n; //bigINT declaration

console.log(typeof myAge2);
console.log(myAge);

//fasly values
// null
// undefined
// ""
// 0
// false