import { describe, it, expect, beforeEach } from '@jest/globals';
import { ContentEngineAgent } from '../src/agents/agent-0-content-engine';
import { BaseAgent } from '../src/agents/base-agent';

describe('Agents', () => {
  let contentEngine: ContentEngineAgent;

  beforeEach(() => {
    contentEngine = new ContentEngineAgent();
  });

  describe('ContentEngineAgent', () => {
    it('should initialize with correct config', () => {
      const config = contentEngine.getConfig();
      expect(config.id).toBe('agent-0');
      expect(config.name).toBe('Content Engine Agent');
      expect(config.enabled).toBe(true);
    });

    it('should be enabled', () => {
      expect(contentEngine.isEnabled()).toBe(true);
    });

    it('should cache results', async () => {
      const input = {
        topic: 'AI',
        platform: 'twitter',
        tone: 'professional',
        length: 'short',
      };

      const result1 = await contentEngine.execute(input);
      expect(result1.success).toBeDefined();

      // Second call should use cache
      const result2 = await contentEngine.execute(input);
      expect(result2).toBeDefined();
    });
  });
});
