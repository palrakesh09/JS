// 1.Write a simple JavaScript program to print expected Output using following array.
// Sample array : 
const myColor = ["Red", "Green", "White", "Black"];
document.querySelector(".p0").innerHTML = "1.Write a simple JavaScript program to print expected Output using following array.";
// output --> Red,Green,White,Black
document.querySelector(".p1").innerHTML = myColor.join();

// output --> Red+Green+White+Black
document.querySelector(".p2").innerHTML = myColor.join("+");

// output --> Red,Green,White
document.querySelector(".p3").innerHTML = myColor.slice(0, 3);

// output --> Red
document.querySelector(".p4").innerHTML = myColor.at(0);

// output --> Green,White
document.querySelector(".p5").innerHTML = myColor.slice(1, 3);

// output --> Red,Green,White,Black,orange 
const result = myColor.push("orange");
document.querySelector(".p6").innerHTML = myColor;

// 2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.
document.write("2.Write a JavaScript program to get sum of all array element using for loop and foreach loop." + "<br>");
// using for loop
const numbers = [10, 20, 30, 40, 50];
let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor = sumFor + numbers[i];
}
document.write( "<br>" + "Sum using for loop : " + sumFor + "<br>");

// using for each loop
let sumForEach = 0;
numbers.forEach((num) => {
    sumForEach = sumForEach + num;
});
document.write("Sum using for each loop : " + sumForEach + "<br>");

// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
document.write( "<br>" + "3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)" + "<br>");
const findMaxMin = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    document.write("<br>" + "Maximum value : " + max + "<br>");
    document.write("Minimum value : " + min + "<br>");
}

const Numbers = [23, 5, 89, 12, 77, 3, 56];
findMaxMin(Numbers);

// 4.Write a JavaScript program for convert all array element in ASCII value.
document.write("<br>" + "4.Write a JavaScript program for convert all array element in ASCII value." + "<br>");
const array = ["A", "b", "C", "z", "1"];
let asciiArr = [];

for (let i = 0; i < array.length; i++) {
    let asciiValue = array[i].charCodeAt(0);
    asciiArr.push(asciiValue);
}

document.write( "<br>" + "Original array : " + array + "<br>");
document.write("ASCII values : " + asciiArr + "<br>");

// 5.Write a JavaScript program for remove negative values using the filter array function.
document.write("<br>" + "5.Write a JavaScript program for remove negative values using the filter array function." + "<br>")
const nums = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let positiveNums = nums.filter(nums => nums >= 0);

document.write("<br>" + "Original array : " + nums + "<br>");
document.write("Array without negatives : " + positiveNums + "<br>");

// 6.Write a JavaScript program using array map() method and return the square of array element.
document.write("<br>" + "6. Write a JavaScript program using array map() method and return the square of array element." +"<br>")
const array2 = [2, 5, 6, 3, 8, 9];
let square = array2.map((x) => x * 2);
document.write("<br>" + "Square array elements : " + square + "<br>");

// 7.Write a JavaScript program for sort array in ascending descending.
document.write("<br>" + "7.Write a JavaScript program for sort array in ascending descending." + "<br>")
const numbers2 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
let ascending = [...numbers2].sort((a,b) => a - b);
let descending = [...numbers2].sort((a,b) => b - a);

document.write( "<br>" + "Original array : " + numbers2 + "<br>");
document.write("Ascending order : " + ascending + "<br>");
document.write("Descending order : " + descending + "<br>");

// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
document.write("<br>" + "8. Write a JavaScript program which filters out any string which is less than 8 characters. " + "<br>") 
const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let ans2 = words.filter(words => words.length < 8);

document.write("<br>" + "filter less than 8 characters words : " + ans2 + "<br>");

// 9. write a JavaScript program to  to print expected output for following string.
document.write("<br>" + "9. write a JavaScript program to  to print expected output for following string." + "<br>")
let x = "airplane"; // output --> r
document.write("<br>" + "output : " + x[2] + "<br>");

let x2 = "oxoxoxox"; // output --> oXoXoXoX
let output = "output : " + x2.split("").map((ch,i) => (i % 2 === 1 ? ch.toUpperCase() : ch)).join("");
document.write(output + "<br>");

// 10. write a JavaScript program for array reverse.
document.write("<br>" + "10. write a JavaScript program for array reverse." + "<br>")
const array3 = [10,20,30,40,50];
let reverse = array3.slice().reverse();
document.write("<br>" + "reversed array : " + reverse + "<br>");

// 11. write a JavaScript program for check value is found or not?
document.write("<br>" + "11. write a JavaScript program for check value is found or not?" + "<br>")
const array4 = [60,70,80,90,100];
let valueCheck = 80;

if(array4.includes(valueCheck)) {
    document.write("<br>" + valueCheck + " is found " + "<br>");
}else{
    document.write(valueCheck + " not found ");
}

// 12. write a JavaScript program for print your name and write the no of total character.
document.write("<br>" + "12. write a JavaScript program for print your name and write the no of total character." +"<br>")
let myName = "Rakesh";
document.write("<br>" + "total no of character is : " + myName.length + "<br>");

// 13. write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

// Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

document.write("<br>" + "13.write a JavaScript program given this output using replace concept." + "<br>")

let sentence = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

document.write("<br>" + "replaced : " + sentence.replaceAll("dog","cat") + "<br>");

// 14.write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers"
// Output :- ["Hire", "the", "top", "1%"] 

document.write("<br>" + "14.write a JavaScript program convert string to array." + "<br>")

let str = "Hire the top 1% freelance developers";
let output2 = str.split(" ").slice(0,4);
document.write("<br>" + "output : " + output2 + "<br>");

// 15.write a JavaScript program convert for array to string.
// Input:- ['5', 32, 'Daniel']
// Output: 5,32,Daniel

document.write("<br>" + "15.write a JavaScript program convert for array to string." + "<br>")

let array5 = ['5',32,'Daniel'];
document.write("<br>" + "output : " + array5.join(",") + "<br>" + "<br>");
