// What is an array in Javascript?
// In JavaScript, an array is a special type of object used to store multiple values in a single variable.It is an ordered collection of items (called elements) where each element has an index number starting from 0.

// * Key points about arrays
// 1.Indexed → Elements are accessed using their index (0, 1, 2, ...).
// 2.Dynamic → Size can grow or shrink automatically.
// 3.Mixed data types → Arrays can hold numbers, strings, objects, booleans, or even other arrays.
// 4.Built-in methods → JavaScript arrays come with many useful methods (e.g., push(), pop(), map(), filter()).

// * Creating an array :
// Different ways to create arrays
let numbers = [10, 20, 30, 40];       // Array of numbers
let fruits = ["Apple", "Mango", "Banana"]; // Array of strings
let mixed = [100, "Hello", true, [1,2,3]]; // Mixed array

// * Accessing Elements :
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Banana"

// * Changing Elements :
fruits[1] = "Orange";   // Change "Mango" to "Orange"
console.log(fruits);    // ["Apple", "Orange", "Banana"]

// An array in JavaScript is a flexible container that stores ordered values and gives you many built-in tools to manage and manipulate them.

// * Built-in Array Methods in Javascript :
// 1.at() method --> The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// Syntax :
at(index);

// Ex :
const array = [5,12,8,130,44];
console.log(array.at(2));
console.log(array.at(-2));

// 2.concat() method --> The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// Syntax :
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)

// Ex :
const Letters = ["a","b","c"];
const Numbers = [1,2,3];

const alphaNumeric = Letters.concat(Numbers);
console.log(alphaNumeric);

// 3.copyWithin method --> The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// Syntax :
copyWithin(target, start)
copyWithin(target, start, end)

// Ex :
const array2 = ["a","b","c","d","e"];
console.log(array2.copyWithin(1,3));
console.log(array2.copyWithin(0,3,4));

// 4.entries() method --> The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// Syntax :
entries()

// Ex :
const array3 = ["a","b","c"];
const iterator = array3.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// Ex2 :
const array4 = ["a", "b", "c"];
const arrayEntries = array4.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// 5.every() method --> The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Syntax :
every(callbackFn)
every(callbackFn, thisArg)

// Ex :
const isBelowThreshold = (currentValue) => currentValue < 40;
const array5 = [1,30,39,29,10,13];

console.log(array5.every(isBelowThreshold));

// 6.fill() method --> The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// Syntax :
fill(value)
fill(value, start)
fill(value, start, end)

// Ex :
const array6 = [1,2,3,4];
console.log(array6.fill(6));
console.log(array6.fill(5,1));
console.log(array6.fill(0,2,4));

// 7.filter() method --> The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// Syntax :
filter(callbackFn)
filter(callbackFn, thisArg)

// Ex :
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);