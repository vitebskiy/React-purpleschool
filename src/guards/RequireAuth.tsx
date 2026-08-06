import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { currentProfile } = useContext(UserContext);

  if (!currentProfile) {
    return <Navigate to={'/login'} replace />;
  }

  return children;
};
