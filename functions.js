function hello() {
  console.log("Hello World");
}

const hello2 = (greeting, myName) => greeting + " " + myName;

function myApp() {
  function myApp2() {
    var myVal = "hello"; //parent function can't access this
    console.log(myVal);
  }
  myApp2();
}

myApp();

// const addTwoNumber = (num1, num2 = 0) => num1 + num2; //num2 has a default value of 0

// console.log(addTwoNumber(4, 5));

// const restParameter = (a, b, ...c) => console.log(a, b, c); //extra values are put into array c

// restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9);

let sum = 0;
const addAll = (...addAll) => {
  for (let i of addAll) {
    sum = sum + i;
  }
  return sum;
};

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function hello_(name) {
  console.log("hello world", name);
}

function hello2_(callback) {
  const myName = 'Mahesh'
  console.log('calls another function')
  callback(myName) //exporting parameter to another function
}

hello2_(hello_)


