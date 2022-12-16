import React from 'react';
export default function UserDetail() {
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
    <div className="purpleContainer">
      <h3>User Detail Component</h3>
      {user.name} is of age {user.age}
      <button onClick={() => updateUser(user)}>Update User</button>
    </div>
  );
}
