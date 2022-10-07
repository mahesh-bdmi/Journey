// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let myName = 'Mahesh'
// let arr3 = [...arr1,...arr2,...myName] //puts all the iterable objects into an array
// console.log(arr3) 
// // for (item of arr3){
// //     console.log(item, Number.isInteger(item))
// // }

const person = {
    myName: "Mahesh",
    age: 32,
    interests: ["space", "anime", "TV shows"],
  };

let newPerson = {...person}
console.log(newPerson)

let {myName, age,...person2} = newPerson
console.log(myName,age,person2)