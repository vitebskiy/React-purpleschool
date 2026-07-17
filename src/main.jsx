import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Layout } from './Layout/Layout.jsx';
import { Movie } from './pages/movie/Movie.jsx';
import { Login } from './pages/login/Login.jsx';
import { Favorites } from './pages/favorites/Favorites.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'movie/:id', element: <Movie /> },
      { path: 'login', element: <Login /> },
      { path: 'favorites', element: <Favorites /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
