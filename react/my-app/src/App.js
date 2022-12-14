import React from 'react';
import DisplaySum from './children/displaySum';
import ListUsers from './children/listUsers';
import DisplayCount from './children/displayCount';
import UserDetail from './children/userDetail';
import ListNames from './children/listNames';
function App() {
  return (
    <div className="parentContainer">
      <DisplaySum />
      <ListUsers />
      <div className="counterContainer">
        <DisplayCount />
      </div>
      <UserDetail />

      <ListNames />
    </div>
  );
}

export default App;
