import React from 'react';
import DisplaySum from './children/displaySum';
import ListNames from './children/listNames';
import DisplayCount from './children/displayCount';
function App() {
  const inputNumbers = [1, 2, 3];
  const inputNames = ['Madhu', 'Kumar', 'Karan'];
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
      <ListNames names={inputNames} />
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
