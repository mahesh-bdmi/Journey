const products = [
  { productId: 1, produceName: "p1", price: 300 },
  { productId: 2, produceName: "p2", price: 3000 },
  { productId: 3, produceName: "p3", price: 200 },
  { productId: 4, produceName: "p4", price: 8000 },
  { productId: 5, produceName: "p5", price: 500 },
];

//SORT method - takes a callback function as arugument
const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price); //sorts object in ascending order based on price

console.log(products);
console.log(lowToHigh);

let isLengthThree = (string) =>{
  return string.length === 3
}

let animals = ['cat', 'dog', 'buffalo', 'cow']

//FIND method - takes a callback function as arugument
let newAnimal = animals.find(isLengthThree)
console.log(newAnimal)

const newProduct = products.find((product)=> product.productId ===3)
console.log(newProduct)

//EVERY METHOD - checks if all elements satisfy a  - returns boolean
let check = animals.every((animal) => animal.length>=3)
console.log(check)

//FILL - fills the array with elements

const filledArray = new Array(10).fill(-1)
console.log(filledArray)
console.log(filledArray.fill(2,4,7)) //4,5,6 index are filled with 2

filledArray.splice(4,2,"new item") //deleted 2 elements starting  4
console.log(filledArray)



