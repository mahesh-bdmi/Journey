"use strict";

let myFruits = ["apple", "banana", "mango"];
myFruits.push("watermelon"); //adds an item to the last
console.log(myFruits);
let rm = myFruits.pop(); //removes the last element and returns it
console.log(rm);

myFruits.unshift("watermelon"); //adds an item at the beginning
console.log(myFruits);
let rms = myFruits.shift(); //removes the first element and returns it
console.log(rms);

console.log(myFruits.length);

let items = ["item1", "item2", "item3", "item4"];
// let items2 = items.slice(0) //copies items to items2
let items2 = [].concat(items); //joins with an empty array
console.log(items2);
let items3 = [...items, ...items2]; //spread operator joins the arrays
console.log(items3);

let myArray = ["ar1", "ar2", "ar3", "ar4"];

let [val1, val2, ...myArray2] = myArray; //destructuring array

console.log(val1)
console.log(val2)
console.log(myArray2)
