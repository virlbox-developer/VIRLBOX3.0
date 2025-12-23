import axios, { AxiosInstance, AxiosError } from 'axios';
import { useAuthStore } from '../stores/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor for auth token
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers.Authorization = \`Bearer \${token}\`;
      }
      return config;
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Clear auth and redirect to login
          const authStore = useAuthStore();
          authStore.logout();
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  async login(email: string, password: string) {
    const response = await this.client.post('/auth/login', { email, password });
    return response.data;
  }

  async register(email: string, password: string, name: string) {
    const response = await this.client.post('/auth/register', {
      email,
      password,
      name,
    });
    return response.data;
  }

  async logout() {
    return this.client.post('/auth/logout');
  }

  // Agent endpoints
  async getAgents(page: number = 1, limit: number = 10) {
    const response = await this.client.get('/agents', {
      params: { page, limit },
    });
    return response.data;
  }

  async executeAgent(agentId: string, input: any) {
    const response = await this.client.post(\`/agents/\${agentId}/execute\`, {
      input,
    });
    return response.data;
  }

  // Content endpoints
  async generateContent(request: any) {
    const response = await this.client.post('/content/generate', request);
    return response.data;
  }

  async getContent(contentId: string) {
    const response = await this.client.get(\`/content/\${contentId}\`);
    return response.data;
  }

  async publishContent(contentId: string, platforms: string[]) {
    const response = await this.client.post(\`/content/\${contentId}/publish\`, {
      platforms,
    });
    return response.data;
  }

  // Analytics endpoints
  async getAnalytics(timeRange: string = '7d') {
    const response = await this.client.get('/analytics', {
      params: { timeRange },
    });
    return response.data;
  }

  async getAgentMetrics(agentId: string) {
    const response = await this.client.get(\`/analytics/agents/\${agentId}\`);
    return response.data;
  }

  // Integration endpoints
  async getIntegrations() {
    const response = await this.client.get('/integrations');
    return response.data;
  }

  async connectIntegration(type: string, credentials: any) {
    const response = await this.client.post('/integrations/connect', {
      type,
      credentials,
    });
    return response.data;
  }

  async testIntegration(integrationId: string) {
    const response = await this.client.post(
      \`/integrations/\${integrationId}/test\`
    );
    return response.data;
  }
}

export const apiClient = new ApiClient();
