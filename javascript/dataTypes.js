const parvathy = {
  name: 'Parvathy',
  Name: 'pseudo',
  age: 23,
  married: false,
  addressDetails: {
    address: 'someAddress',
    pinCode: 234543,
  },
};

const suji = {
  name: 'Suji',
  age: 26,
  married: true,
  addressDetails: {
    address: 'address 2',
    pinCode: 437545,
  },
};

// NOTE: do this later

function printMaritalStatus(user) {
  if (user.married) {
    console.log(`User ${user.name} is married !!`);
  } else {
    console.log(`User ${user.name} is not married !!`);
  }
}

printMaritalStatus(parvathy);

printMaritalStatus(suji);
console.log("suji")
