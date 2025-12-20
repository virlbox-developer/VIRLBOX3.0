interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;
}

// Simple store without external library
let authStore: AuthStore = {
  user: null,
  token: localStorage.getItem('token') ? 
    JSON.parse(atob(localStorage.getItem('token')!)) : null,
  
  setAuth: (user: User, token: string) => {
    authStore.user = user;
    authStore.token = token;
    localStorage.setItem('token', token);
  },

  clearAuth: () => {
    authStore.user = null;
    authStore.token = null;
    localStorage.removeItem('token');
  },

  isAuthenticated: () => !!authStore.token,
};

export default authStore;