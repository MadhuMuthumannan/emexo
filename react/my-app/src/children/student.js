import React from 'react';

export default function Student() {
  const [users, setUsers] = React.useState([]);
  let tempUser = {};

  const handleNameChange = (val) => {
    tempUser.name = val;
  };

  const handleAgeChange = (val) => {
    tempUser.age = val;
  };

  const handleAddressChange = (val) => {
    debugger;
    tempUser.address = val;
  };

  const handleAddUser = () => {
    debugger;
    users.push(tempUser);
    setUsers([...users]);
  };

  return (
    <div className="container purpleContainer">
      <h3>List Component</h3>
      <pre>Name : </pre>
      <input
        type="text"
        onChange={(e) => handleNameChange(e.target.value)}
      ></input>
      <pre>Age : </pre>
      <input
        type="number"
        onChange={(e) => handleAgeChange(e.target.value)}
      ></input>
      <pre>Address : </pre>
      <input
        type="text"
        onChange={(e) => handleAddressChange(e.target.value)}
      ></input>
      <button onClick={(e) => handleAddUser()}>Add User</button>
      <pre>{JSON.stringify(users)}</pre>
    </div>
  );
}
