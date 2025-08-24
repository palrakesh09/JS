// What is a Function in Javascript?
// A function in JavaScript is a block of code written by the developer to perform a definite task, such as multiplying two numbers. It wraps a set of instructions that can be used throughout the program and is executed when it is called. By using functions, we can enhance our program's reusability and readability.

// There are two types of functions in Javascript.
// 1.User-defined Functions --> Created by users
// 2.Standard Library Functions --> Inbuilt functions in javascript

// User-defined functions :

// 1.Function Declaration :
function fun_Name() {
  // code of body
}

// Ex:
function myFunc() {
    console.log("Hello, World!");
}

// 2.Function Invocation :
function fun_Name() {
  // code to be executed
}
//calling or invoking the function
fun_Name();

// Ex:
function myFunc(){
    console.log("Hello, World!");}
// call or invoke the function
myFunc();

// 3.Function Definition
function myFunc() {
    console.log("Hello, World!");  // function definition
}myFunc(); 

// 4.Function Arguments and parameters
// here name is the parameter
function func_Name(name) {
   // code of the body
}func_Name(Arguments); // function arguments

// Ex of function argument with parameter:
function myFunc(name) {// function declare with parameter
console.log(`Hello, ${name}!`);
}
myFunc('Jack'); //function call with arguments

// Ex of function with different arguments:
function myFunc(name) {
    console.log(`Hello ${name}`);
}
myFunc("Amit"); // pass "Amit" as argument
myFunc("Rakesh"); // pass "Rakesh" as argument    

// 5.Function Return
// function to find square of a number
function findSqr(num) {
   // return square
    return num * num; 
}
// call the function and store the result
let square = findSqr(4);
console.log(`Square: ${square}`);

// 6.Function Expression
let myFunction= function(param1, param2) {
// code of the body
}

// Ex:
const myFirst = function (number) {
return number * number;};
const x = myFirst(6);
console.log(x);

// What is an Arrow Function?
// An Arrow function in JavaScript is a short method for writing a function expression. It was introduced in ECMA6(ES6). We use '=>' syntax to introduce the arrow function.

// Ex:
const sumNums = (a, b) => a + b;
// Calling the function
const result = sumNums(4,3);
console.log(result);

// 2.Standard Library Functions :

// 1.toLowerCase() --> it returns the string in lowercase.
// 2.toUpperCase() --> it returns the string in uppercase.
// 3.Math.sqrt() --> it calculates the square of a number.
// 4.Math.pow() --> it calculates the power of a number
// 5.console.log() --> it prints the string in the quotation mark.

// Ex of Math.sqrt() Function
let squareRoot = Math.sqrt(3);
console.log("Square Root of 3 is", squareRoot);