export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface VirtualMachine {
  id: number;
  name: string;
  status: 'running' | 'stopped' | 'paused';
  cpu: number;
  memory: number;
  disk: number;
  owner: User;
  createdAt: string;
}

export interface Dashboard {
  totalVMs: number;
  activeVMs: number;
  cpuUsage: number;
  memoryUsage: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}