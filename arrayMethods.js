let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//loops through each element
numbers.forEach((e) => console.log(e ** 2));

//Can be assigned to a new array with updated values; the function must return a value
const numbersSquared = numbers.map((e) => e ** 2);
console.log(numbersSquared);

//This callback must return boolean
const manyNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 5, 6];
//remove duplicate logic below
let filteredNumbers = manyNumbers.filter((element, index) => {
  if (manyNumbers.indexOf(element) === index) {
    
    return true;
  }
});

console.log(filteredNumbers);
const totalValue = filteredNumbers.reduce((acc,val) =>{
                    return acc + val
},0)

console.log(totalValue)


//Reduce function on objects
let persons = [
    { name: "Mahesh", age: 32, gender: "male" },
    { name: "Bhavani", age: 29, gender: "female" },
    { name: "Eshan", age: 2, gender: "male" },
  ];

  let sumOfAges = persons.reduce((totalAge,person) => {
    return totalAge + person.age
  },0)

  console.log(sumOfAges)