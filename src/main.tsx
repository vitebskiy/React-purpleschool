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
import { Provider } from 'react-redux';
import { store } from './components/store/store';

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  </StrictMode>,
);
