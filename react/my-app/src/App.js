import React from 'react';
import Checkbox from './children/checkBox';
import DisplaySum from './children/displaySum';
import ListUsers from './children/listUsers';
import DisplayCount from './children/displayCount';
import UserDetail from './children/userDetail';
function App() {
  const inputNumbers = [1, 2, 3];
  const inputUsers = [
    {
      name: 'Karthick',
      age: 21,
      gender: 'Male',
      id: 1,
      rank: 120,
    },
    {
      name: 'Malathi',
      age: 31,
      gender: 'Female',
      id: 2,
      rank: 87,
    },
    {
      name: 'Ramesh',
      age: 51,
      gender: 'Male',
      id: 3,
      rank: 99,
    },
    {
      name: 'Suji',
      age: 61,
      gender: 'Female',
      id: 4,
      rank: 50,
    },
  ];
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState({
    name: 'Rakesh',
    age: 21,
  });
  const [users, setUsers] = React.useState(inputUsers);
  const updateUser = (prevUser) => {
    setUser({
      ...prevUser,
      age: 23,
    });
  };
  const onFilterTextChange = (text) => {
    let filteredUsers = [];
    if (text) {
      filteredUsers = users.filter((user) => {
        return user.name.includes(text);
      });
    } else if (!text) {
      filteredUsers = inputUsers;
    }

    setUsers(filteredUsers);
  };

  const filterByAge = (val) => {
    let filteredUsers = [];
    if (val) {
      filteredUsers = users.filter((user) => {
        return user.age < 30;
      });
    } else if (!val) {
      filteredUsers = inputUsers;
    }

    setUsers(filteredUsers);
  };

  const checkboxInputFunction = (val) => {
    console.log(val);
  };

  return (
    <div className="parentContainer">
      <DisplaySum numbers={inputNumbers} />
      <ListUsers
        users={users}
        onFilterChange={onFilterTextChange}
        filterByAge={filterByAge}
      />
      <div className="counterContainer">
        <DisplayCount count={count} />
        <button onClick={() => setCount(count + 1)}>Increment Counter</button>
        <button onClick={() => setCount(count - 1)}>Decrement Counter</button>
      </div>
      <UserDetail user={user} updateUser={updateUser} />

      <Checkbox label={'SampleLabel'} inputFunc={checkboxInputFunction} />
    </div>
  );
}

export default App;
