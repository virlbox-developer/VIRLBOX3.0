// src/stores/auth.ts
import { create } from "zustand";

interface User {
  id: string;
  email: string;
  role?: "admin" | "user";
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (payload: { email: string; password: string }) => Promise<void>;
  register: (payload: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  async login({ email, password }) {
    try {
      set({ isLoading: true, error: null });
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Login failed");
      }

      const data = await res.json();
      set({
        user: data.user ?? { id: data.userId, email, role: data.role },
        token: data.token,
        isLoading: false,
      });
      localStorage.setItem("auth_token", data.token);
    } catch (err: any) {
      set({ error: err.message ?? "Login error", isLoading: false });
    }
  },

  async register({ email, password }) {
    try {
      set({ isLoading: true, error: null });
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Registration failed");
      }

      const data = await res.json();
      set({
        user: data.user ?? { id: data.userId, email, role: data.role },
        token: data.token,
        isLoading: false,
      });
      localStorage.setItem("auth_token", data.token);
    } catch (err: any) {
      set({ error: err.message ?? "Registration error", isLoading: false });
    }
  },

  logout() {
    localStorage.removeItem("auth_token");
    set({ user: null, token: null });
  },
}));
