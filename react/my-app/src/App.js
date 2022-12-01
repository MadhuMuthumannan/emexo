import React from 'react';
import DisplaySum from './children/displaySum';
import ListUsers from './children/listUsers';
import DisplayCount from './children/displayCount';
function App() {
  const inputNumbers = [1, 2, 3];
  const inputUsers = [
    {
      name: 'Karthick',
      age: 21,
      gender: 'Male',
      id: 1,
    },
    {
      name: 'Malathi',
      age: 31,
      gender: 'Female',
      id: 2,
    },
    {
      name: 'Ramesh',
      age: 51,
      gender: 'Male',
      id: 3,
    },
    {
      name: 'Suji',
      age: 61,
      gender: 'Female',
      id: 4,
    },
  ];
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState({
    name: 'Rakesh',
    age: 21,
  });
  const updateUser = (prevUser) => {
    setUser({
      ...prevUser,
      age: 23,
    });
  };
  return (
    <div>
      <DisplaySum numbers={inputNumbers} />
      <ListUsers users={inputUsers} />
      <DisplayCount count={count} />
      {JSON.stringify(user)}
      Current count is : {count}
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrement Counter</button>
      <button onClick={() => updateUser(user)}>Update User</button>
    </div>
  );
}

export default App;
