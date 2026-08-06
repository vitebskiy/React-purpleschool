import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Layout } from './Layout/Layout';
import { Movie } from './pages/movie/Movie';
import { Login } from './pages/login/Login';
import { Favorites } from './pages/favorites/Favorites';
import { getMovieById } from './api/moviesApi';
import { RequireAuth } from './guards/RequireAuth';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <App />
          </RequireAuth>
        ),
      },
      {
        path: 'movie/:id',
        loader: ({ params }) => {
          if (!params.id) {
            throw new Error('Не передан id фильма');
          }
          return getMovieById(params.id);
        },
        element: (
          <RequireAuth>
            <Movie />
          </RequireAuth>
        ),
      },
      { path: 'login', element: <Login /> },
      {
        path: 'favorites',
        element: (
          <RequireAuth>
            <Favorites />
          </RequireAuth>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
