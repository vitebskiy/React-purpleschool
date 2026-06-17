import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentProfile, setCurrentProfile] = useState(null);

  useEffect(() => {
    const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    const existing = profiles.find((p) => p.isLogined === true);

    if (existing) {
      setCurrentProfile(existing.name);
    }
  }, []);

  const onLogout = (e) => {
    e.preventDefault();
    const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    const existing = profiles.find((p) => p.name === currentProfile);
    existing.isLogined = false;

    localStorage.setItem('profiles', JSON.stringify(profiles));
    setCurrentProfile(null);
  };

  return <UserContext.Provider value={{ currentProfile, setCurrentProfile, onLogout }}>{children}</UserContext.Provider>;
}
