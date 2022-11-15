const setOne = [1, 2, 3, 4, 5, 6];
const setTwo = [7, 8, 9];
// to add two arrays
const concatArray = setOne.concat(setTwo);
console.log(concatArray);

// es6 way of concat
const es6Concat = [0, ...setOne, 101, ...setTwo, 10, 11];
console.log('es6concat', es6Concat);

const bigNumbers = [9, 11, 12, 13];

// check if all elements pass one condition => 'every'
console.log(bigNumbers.every((num) => num > 10));

// check if any one of the elements pass one condition => 'some'
console.log(bigNumbers.some((num) => num % 2 === 0));

// every and some example with string
const strings = ['Java', 'Script'];
console.log(strings.every((str) => str.length > 3));
console.log(strings.some((str) => str === 'Script'));

// fills the array with given value
const toBeFilled = [1, 2, 3];
toBeFilled.fill(undefined);
console.log(toBeFilled);

// flatten array with flat
const toBeFlattened = [1, 2, [3, 4]];
console.log(toBeFlattened.flat());

// includes
console.log('Big numbers includes 11?: ' + bigNumbers.includes(11));

// get the index of an element
console.log(bigNumbers.indexOf(12));
console.log(bigNumbers.indexOf(22));

// slice some elements from array
const fruits = ['Apple', 'Orange', 'Kiwi', 'Pom'];
console.log(fruits.slice(1, 3));

const numbers = [1, 2, 8, 5];
// numbers[2] = 3;
numbers.splice(2, 1, 3, 4);
console.log(numbers);

// converts to string
console.log(numbers.toString());
console.log(typeof numbers.toString());
