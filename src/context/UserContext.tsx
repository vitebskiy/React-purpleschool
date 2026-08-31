import { createContext, useState, useEffect, MouseEvent } from 'react';
import {
  Profile,
  UserContextValue,
  UserProviderProps,
} from './UserContext.props';

export const UserContext = createContext<UserContextValue>({} as UserContextValue);

export function UserProvider({ children }: UserProviderProps) {
  const [currentProfile, setCurrentProfile] = useState<string | null>(null);

  useEffect(() => {
    const profiles: Profile[] = JSON.parse(localStorage.getItem('profiles') || '[]');
    const existing = profiles.find((p) => p.isLogined === true);

    if (existing) {
      setCurrentProfile(existing.name);
    }
  }, []);

  const onLogout = (e: MouseEvent) => {
    e.preventDefault();
    const profiles: Profile[] = JSON.parse(localStorage.getItem('profiles') || '[]');
    const existing = profiles.find((p) => p.name === currentProfile);
    if (existing) {
      existing.isLogined = false;
    }

    localStorage.setItem('profiles', JSON.stringify(profiles));
    setCurrentProfile(null);
  };

  return (
    <UserContext.Provider value={{ currentProfile, setCurrentProfile, onLogout }}>
      {children}
    </UserContext.Provider>
  );
}
