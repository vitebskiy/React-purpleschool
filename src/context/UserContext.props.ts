import { MouseEvent, ReactNode } from 'react';

export interface Profile {
  name: string;
  isLogined: boolean;
}

export interface UserContextValue {
  currentProfile: string | null;
  setCurrentProfile: (name: string | null) => void;
  onLogout: (e: MouseEvent) => void;
}

export interface UserProviderProps {
  children: ReactNode;
}
