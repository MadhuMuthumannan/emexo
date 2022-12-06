const user = {
  name: 'Kumar',
  age: 21,
  address: 'Vyshali street',
  pinCode: 89760,
};

const { name, age, address, pinCode } = user;

const props = {
  users: ['a', 'b', 'c'],
  onFilterChange: 'someMethod',
};

// const users = props.users;
// const onFilterChange = props.onFilterChange;

const { users, onFilterChange } = props;

// const { name: username, age: userage, address: useraddress } = user; // alias
// const name = user.name;
// const age = user.age;
// const address = user.address;

// nested object destructuring

const nestedObj = {
  name: 'Mahi',
  parentsNames: {
    father: 'Johi',
    mother: 'Thimakka',
    grandParentsNames: {
      grandFather: 'Suresh',
      grandMother: 'Mohana',
    },
  },
};

const {
  parentsNames: {
    father,
    grandParentsNames: { grandFather },
  },
} = nestedObj;

console.log(father);
console.log(grandFather);

console.log(username);
console.log(userage);
console.log(useraddress);

const [user1, user2, user3] = ['nancy', 'sathish', 'rahul'];
console.log(user1);
console.log(user2);
console.log(user3);

const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(c);
