import { logger } from '../../logger/index';

export class CacheService {
  private cache: Map<string, { value: any; expiresAt: number }> = new Map();

  set(key: string, value: any, ttl: number = 3600000): void {
    try {
      this.cache.set(key, {
        value,
        expiresAt: Date.now() + ttl,
      });
      logger.debug('Cache set', { key });
    } catch (error) {
      logger.error('Cache set failed', error);
    }
  }

  get(key: string): any {
    try {
      const item = this.cache.get(key);
      if (!item) return null;

      if (Date.now() > item.expiresAt) {
        this.cache.delete(key);
        return null;
      }

      return item.value;
    } catch (error) {
      logger.error('Cache get failed', error);
      return null;
    }
  }

  delete(key: string): void {
    this.cache.delete(key);
    logger.debug('Cache deleted', { key });
  }

  clear(): void {
    this.cache.clear();
    logger.debug('Cache cleared');
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    return Date.now() <= item.expiresAt;
  }

  size(): number {
    return this.cache.size;
  }
}

export const cacheService = new CacheService();
