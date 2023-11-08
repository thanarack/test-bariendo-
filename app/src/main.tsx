import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './screens/login.tsx';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignUp from './screens/signup.tsx';
import Appointments from './screens/appointments.tsx';
import Book from './screens/book.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './components/private.route.tsx';
import './index.css';

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
    element: <PrivateRoute component={Appointments} />,
  },
  {
    path: '/book',
    element: <PrivateRoute component={Book} />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
