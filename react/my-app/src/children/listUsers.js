import React from 'react';
import Checkbox from './listUsersChildren/checkBox';
import TextBox from './listUsersChildren/textBox';
import Button from './listUsersChildren/button';
import Rows from './listUsersChildren/rows';

export default function ListUsers() {
  let filterText = '';
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
  const headings = ['Name', 'Age', 'Gender', 'Rank'].map((heading, index) => (
    <th key={index}>{heading}</th>
  ));
  const [users, setUsers] = React.useState(inputUsers);

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
  const onClickFilterButton = () => {
    let filteredUsers = [];
    if (filterText) {
      filteredUsers = users.filter((user) => {
        return user.name.includes(filterText);
      });
    } else if (!filterText) {
      filteredUsers = inputUsers;
    }

    setUsers(filteredUsers);
  };
  const onFilterChange = (val) => {
    filterText = val;
  };
  return (
    <div className="userContainer">
      Filter text input:
      <TextBox onFilterChange={onFilterChange} />
      <Checkbox filterByAge={filterByAge} />
      <Button onClickFilterButton={onClickFilterButton} />
      <table id="users">
        <tbody>
          <tr>{headings}</tr>
          <Rows users={users} />
        </tbody>
      </table>
      {/* <Table users={users} headings={headings} /> */}
    </div>
  );
}
