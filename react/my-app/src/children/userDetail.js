import React from 'react';
import './userDetail.css';
import { useParams } from 'react-router-dom';

export default function UserDetail({ user }) {
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
  const foundUser = inputUsers.find(
    (inputUser) => inputUser.id === Number(userId)
  );
  return (
    <div className="container purpleContainer">
      <h3>User Detail Component</h3>
      {foundUser.name} is of age {foundUser.age} and has rank {foundUser.rank}
    </div>
  );
}
