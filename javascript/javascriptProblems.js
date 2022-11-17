// Problem 1: find intersection

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
output = [];

// with includes
arr1.forEach((num) => {
  if (arr2.includes(num)) {
    output.push(num);
  }
});

console.log(output);

// filter
console.log(arr1.filter((num) => arr2.includes(num)));

// Problem 2: Unique items / remove duplicates
const arr = [1, 2, 3, 1, 5, 7, 81, 2, 3];
const output = [];

arr.forEach((num) => {
  if (!output.includes(num)) {
    output.push(num);
  }
});
console.log(output.sort((a, b) => a - b));

// Sort js array of objects with given key 'string' or 'value'
const users = [
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

const sortedByName = users.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedByName);

const usersCopy = JSON.parse(JSON.stringify(users));
const sortedByAge = usersCopy.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedByAge);
