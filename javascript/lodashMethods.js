const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(_.intersection(arr1, arr2));

const usersOne = [
  {
    name: 'Madhu',
    age: 23,
  },
  {
    name: 'Parvathy',
    age: 14,
  },
  {
    name: 'Ashok',
    age: 26,
  },
  {
    name: 'Dinesh',
    age: 87,
  },
];

const usersTwo = [
  {
    name: 'Madhu',
    age: 56,
  },
  {
    name: 'Parvathy',
    age: 23,
  },
  {
    name: 'Ramya',
    age: 26,
  },
  {
    name: 'Suresh',
    age: 87,
  },
];

console.log(_.intersectionBy(usersOne, usersTwo, 'name'));

// to find unique items
const arr = [1, 2, 3, 1, 5, 7, 81, 2, 3];
console.log(_.uniq(arr));

// Sort js array of objects with given key 'string' or 'value'
const students = [
  {
    name: 'Madhu',
    age: 23,
  },
  {
    name: 'Parvathy',
    age: 14,
  },
  {
    name: 'Ashok',
    age: 26,
  },
  {
    name: 'Dinesh',
    age: 87,
  },
];

console.log(_.sortBy(students, 'name'));
console.log(_.sortBy(students, 'age'));
