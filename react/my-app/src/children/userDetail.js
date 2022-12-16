import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetail({ user }) {
  // const [user, setUser] = React.useState({
  //   name: 'Rakesh',
  //   age: 21,
  // });
  // const updateUser = (prevUser) => {
  //   setUser({
  //     ...prevUser,
  //     age: 23,
  //   });
  // };
  let { userId } = useParams();
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
  console.log(userId);
  const foundUser = inputUsers.find(
    (inputUser) => inputUser.id === Number(userId)
  );
  console.log(foundUser);
  return (
    <div className="purpleContainer">
      <h3>User Detail Component</h3>
      {foundUser.name} is of age {foundUser.age}
      {/* <button onClick={() => updateUser(user)}>Update User</button> */}
    </div>
  );
}
