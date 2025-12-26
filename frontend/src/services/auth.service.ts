import api from './api';

export const authService = {
  async register(email: string, name: string, password: string) {
    try {
      const response = await api.post('/auth/register', {
        email,
        name,
        password
      });

      localStorage.setItem('auth_token', response.data.token);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || 'Registration failed'
      );
    }
  },

  async login(email: string, password: string) {
    try {
      const response = await api.post('/auth/login', { email, password });

      localStorage.setItem('auth_token', response.data.token);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  },

  async getMe() {
    try {
      const response = await api.get('/auth/me');
      return response.data.user;
    } catch (error: any) {
      throw new Error('Failed to fetch user');
    }
  },

  logout() {
    localStorage.removeItem('auth_token');
  }
};