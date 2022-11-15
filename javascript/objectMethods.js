console.log('Object Methods');
// ES5 way of copying
const originalObj = {
  name: 'Kumar',
  age: 17,
  class: 12,
  school: 'Don bosco',
};
const target = {
  targetObj: true,
};
const copiedObj = Object.assign(target, originalObj);

// console.log(copiedObj);

copiedObj.name = 'Prakash';
// console.log(copiedObj);

// copy via JSON stringify and parse
const copyByStringify = JSON.parse(JSON.stringify(originalObj));
// console.log(copyByStringify);

// ES6 way of copying
const es6Copy = { ...originalObj, ...target };
es6Copy.name = 'ES6';
console.log(es6Copy);
// console.log(originalObj);

// Iterating through object
// using for in loop
for (let key in originalObj) {
  // console.log(key);
  // console.log(originalObj[key]);
}

// using Object.keys and values
const keys = Object.keys(originalObj);
// console.log(keys);
const values = Object.values(originalObj);
// console.log(values);
const entries = Object.entries(originalObj);
// console.log(entries);

// creation of object using function
function Student(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
}

const parvathy = new Student('Parvathy', 22, 'St Marys');
const pragnya = new Student('Pragnya', 12, 'Richards');
// console.log(parvathy);
// console.log(pragnya);

// console.dir(Student);

var user = {
  name: 'Rohith',
  age: 45,
  sports: 'Cricket',
};

Object.seal(user); // allows update but cant add new property
Object.freeze(user); // cant add or update
user.age = 66;
user.married = true;

// console.log(user);

// create object from entries

const objEntries = [
  ['name', 'Lokesh'],
  ['age', 23],
];
const fromEntries = Object.fromEntries(objEntries);

// console.log(fromEntries);
