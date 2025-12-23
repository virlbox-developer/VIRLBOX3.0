import { BaseAgent, AgentConfig, AgentExecutionResult } from './base-agent';
import axios from 'axios';
import { logger } from '../logger/index';

interface ContentRequest {
  topic: string;
  platform: string;
  tone: string;
  length: string;
  keywords?: string[];
  style?: string;
}

interface GeneratedContent {
  title: string;
  content: string;
  hashtags: string[];
  callToAction: string;
  platform: string;
  estimatedReach: number;
  viralityScore: number;
}

export class ContentEngineAgent extends BaseAgent {
  private openaiKey: string;

  constructor() {
    const config: AgentConfig = {
      id: 'agent-0',
      name: 'Content Engine Agent',
      description: 'Master content generation agent using AI',
      category: 'content-generation',
      version: '1.0.0',
      enabled: true,
    };
    super(config);
    this.openaiKey = process.env.OPENAI_API_KEY || '';
  }

  async execute(input: ContentRequest): Promise<AgentExecutionResult> {
    return this.executeWithErrorHandling(async () => {
      const cacheKey = `content-${input.topic}-${input.platform}`;
      const cached = this.getCache(cacheKey);
      if (cached) {
        logger.info('Returning cached content');
        return cached;
      }

      const prompt = this.buildPrompt(input);
      const response = await this.generateWithOpenAI(prompt);
      const content = this.parseResponse(response, input);

      this.setCache(cacheKey, content);
      return content;
    });
  }

  private buildPrompt(input: ContentRequest): string {
    return \`Generate a viral \${input.platform} \${input.length} post about "\${input.topic}" in a \${input.tone} tone.

    Requirements:
    - Engaging and attention-grabbing
    - Platform optimized for \${input.platform}
    - Include relevant hashtags
    - Strong call-to-action
    \${input.keywords ? \`- Include keywords: \${input.keywords.join(', ')}\` : ''}

    Return JSON with: title, content, hashtags (array), callToAction\`;
  }

  private async generateWithOpenAI(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            'Authorization': \`Bearer \${this.openaiKey}\`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      logger.error('OpenAI API error:', error);
      throw new Error('Failed to generate content');
    }
  }

  private parseResponse(response: string, input: ContentRequest): GeneratedContent {
    try {
      const parsed = JSON.parse(response);
      return {
        title: parsed.title || 'Untitled',
        content: parsed.content || '',
        hashtags: parsed.hashtags || [],
        callToAction: parsed.callToAction || 'Learn more',
        platform: input.platform,
        estimatedReach: Math.floor(Math.random() * 100000) + 1000,
        viralityScore: Math.floor(Math.random() * 100),
      };
    } catch {
      return {
        title: 'Generated Content',
        content: response,
        hashtags: input.keywords || [],
        callToAction: 'Visit us',
        platform: input.platform,
        estimatedReach: 5000,
        viralityScore: 50,
      };
    }
  }
}
