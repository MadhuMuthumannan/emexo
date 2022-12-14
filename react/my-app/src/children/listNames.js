import React from 'react';
export default function ListNames() {
  let tempName = '';
  const inputNames = ['Rahul', 'Joe'];
  const [names, setNames] = React.useState(inputNames);
  const namesList = names.map((name, index) => <li key={index}>{name}</li>);
  const handleNameChange = (val) => {
    tempName = val;
  };

  const handleAddName = () => {
    names.push(tempName);
    setNames([...names]);
  };
  return (
    <div>
      <h3>List Component</h3>
      <pre>Add User : </pre>
      <input
        type="text"
        onChange={(e) => handleNameChange(e.target.value)}
      ></input>
      <button onClick={(e) => handleAddName()}>Add Name</button>
      <ol>{namesList}</ol>
    </div>
  );
}
