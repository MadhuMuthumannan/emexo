import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserDetail from './children/userDetail';
import DisplayCount from './children/displayCount';
import ListUsers from './children/listUsers';
import DisplaySum from './children/displaySum';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListNames from './children/listNames';
import Nav from './Nav';
import Form from './children/form';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>   
        <Route path="/" element={<DisplayCount />} />   
        <Route path="/displayCount" element={<DisplayCount />} />
        <Route path="/listUsers" element={<ListUsers />} />
        <Route path="/listNames" element={<ListNames />} />
        <Route path="/displaySum" element={<DisplaySum />} />
        <Route path="/listUsers/userDetail/:userId" element={<UserDetail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);
