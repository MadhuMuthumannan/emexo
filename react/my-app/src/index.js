import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
  {
    path: '/helloWorld',
    element: <div>Hello world !!</div>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
