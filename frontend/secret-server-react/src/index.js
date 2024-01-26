import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Layout from './Pages/Layout/Layout';
import HomePage from './Pages/HomePage';
import SaveSecret from './Pages/SaveSecret';
import ErrorPage from './Pages/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import RetrievePage from './Pages/RetrievePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <SaveSecret />,
        errorElement: <ErrorPage />
      },
      {
        path: "/retrieve",
        element: <RetrievePage />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
