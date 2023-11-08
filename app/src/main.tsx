import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './screens/login.tsx';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';
import SignUp from './screens/signup.tsx';
import Appointments from './screens/appointments.tsx';
import Book from './screens/book.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/appointments',
    element: <Appointments />,
  },
  {
    path: '/book',
    element: <Book />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
