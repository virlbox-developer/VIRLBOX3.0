import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const user = JSON.parse(Buffer.from(token, 'base64').toString());
        setAuthState({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch {
        setAuthState({ user: null, token: null, isAuthenticated: false, isLoading: false });
      }
    } else {
      setAuthState({ user: null, token: null, isAuthenticated: false, isLoading: false });
    }
  }, []);

  const login = (token: string, user: User) => {
    localStorage.setItem('token', token);
    setAuthState({ user, token, isAuthenticated: true, isLoading: false });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({ user: null, token: null, isAuthenticated: false, isLoading: false });
  };

  return { ...authState, login, logout };
};