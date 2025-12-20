const API_BASE_URL = 'http://localhost:3000/api';

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const apiCall = async <T,>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = { ...getAuthHeaders(), ...options.headers };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API call failed');
  }

  return response.json();
};

// Auth Service
export const authService = {
  register: (data: { name: string; email: string; password: string }) =>
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  login: (data: { email: string; password: string }) =>
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// VMs Service
export const vmService = {
  getAll: () => apiCall('/vms'),
  getById: (id: number) => apiCall(`/vms/${id}`),
  create: (data: any) =>
    apiCall('/vms', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: any) =>
    apiCall(`/vms/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: number) => apiCall(`/vms/${id}`, { method: 'DELETE' }),
};