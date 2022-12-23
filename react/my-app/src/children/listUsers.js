import React from 'react';
import Checkbox from './listUsersChildren/checkBox';
import TextBox from './listUsersChildren/textBox';
import Button from './listUsersChildren/button';
import Table from './listUsersChildren/table';
import Form from './form';
import './listUsers.css';

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
  const headings = ['Name', 'Age', 'Gender', 'Rank', 'Actions'].map(
    (heading, index) => <th key={index}>{heading}</th>
  );
  const [users, setUsers] = React.useState(inputUsers);
  const [addUserMode, setAddUserMode] = React.useState(false);
  const [defaultValue, setDefaultValue] = React.useState(null);
  const [currentEditId, setCurrentEditId] = React.useState(null);
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

  const onFormClose = () => {
    setAddUserMode(false);
  };

  const onSubmit = (user) => {
    if (defaultValue) {
      users.splice(currentEditId, 1, user);
      setUsers([...users]);
    } else {
      users.push({ ...user, id: users.length + 1 });
      setUsers([...users]);
    }
    setAddUserMode(false);
  };

  const onClickEdit = (userIndex) => {
    setCurrentEditId(userIndex);
    setDefaultValue(users[userIndex]);
    setAddUserMode(true);
  };

  const onClickAddUser = () => {
    setDefaultValue(null);
    setAddUserMode(true);
  };

  return (
    <div className="container purpleContainer">
      Filter text input:
      <TextBox onFilterChange={onFilterChange} />
      <Checkbox filterByAge={filterByAge} />
      <Button onClickFilterButton={onClickFilterButton} />
      <button onClick={() => onClickAddUser()}>Add User</button>
      <Table users={users} headings={headings} onClickEdit={onClickEdit} />
      {addUserMode && (
        <Form
          onClose={onFormClose}
          onFormSubmit={onSubmit}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
}
