import { logger } from '../logger/index';

export interface AgentConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  enabled: boolean;
}

export interface AgentExecutionResult {
  agentId: string;
  success: boolean;
  data?: any;
  error?: string;
  executionTime: number;
  timestamp: Date;
}

export abstract class BaseAgent {
  protected config: AgentConfig;
  protected cache: Map<string, any> = new Map();

  constructor(config: AgentConfig) {
    this.config = config;
    logger.info(`Agent initialized: ${config.name} (${config.id})`);
  }

  abstract execute(input: any): Promise<AgentExecutionResult>;

  protected async executeWithErrorHandling(
    fn: () => Promise<any>
  ): Promise<AgentExecutionResult> {
    const startTime = Date.now();
    try {
      const data = await fn();
      return {
        agentId: this.config.id,
        success: true,
        data,
        executionTime: Date.now() - startTime,
        timestamp: new Date(),
      };
    } catch (error) {
      logger.error(`Agent execution failed: ${this.config.id}`, error);
      return {
        agentId: this.config.id,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        executionTime: Date.now() - startTime,
        timestamp: new Date(),
      };
    }
  }

  protected setCache(key: string, value: any, ttl: number = 3600000): void {
    this.cache.set(key, { value, expiresAt: Date.now() + ttl });
  }

  protected getCache(key: string): any {
    const cached = this.cache.get(key);
    if (!cached) return null;
    if (Date.now() > cached.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return cached.value;
  }

  getConfig(): AgentConfig {
    return this.config;
  }

  isEnabled(): boolean {
    return this.config.enabled;
  }
}
