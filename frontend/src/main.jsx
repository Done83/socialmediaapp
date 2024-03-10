import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Router import
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages import
import App from './App.jsx';
import RegisterPage from './pages/register/RegisterPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import PostsPage from './pages/posts/PostsPage.jsx';

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PostsPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LoginPage/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
