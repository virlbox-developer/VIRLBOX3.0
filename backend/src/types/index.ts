export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface ApiError {
  status: number;
  message: string;
  code: string;
}