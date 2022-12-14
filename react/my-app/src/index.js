import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserDetail from './children/userDetail';
import DisplayCount from './children/displayCount';
import ListUsers from './children/listUsers';
import DisplaySum from './children/displaySum';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListNames from './children/listNames';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserDetail />,
  },
  {
    path: '/displayCount',
    element: <DisplayCount />,
  },
  {
    path: '/listUsers',
    element: <ListUsers />,
  },
  {
    path: '/listNames',
    element: <ListNames />,
  },
  {
    path: '/displaySum',
    element: <DisplaySum />,
  },
  {
    path: '/userDetail',
    element: <UserDetail />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
