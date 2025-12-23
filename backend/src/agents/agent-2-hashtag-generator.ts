import { BaseAgent, AgentConfig, AgentExecutionResult } from './base-agent';
import { logger } from '../logger/index';

export class HashtagGeneratorAgent extends BaseAgent {
  constructor() {
    super({
      id: 'agent-2',
      name: 'Hashtag Generator Agent',
      description: 'Generates trending and relevant hashtags',
      category: 'hashtag-generation',
      version: '1.0.0',
      enabled: true,
    });
  }

  async execute(input: any): Promise<AgentExecutionResult> {
    return this.executeWithErrorHandling(async () => {
      const { content, platform, count = 10 } = input;

      const hashtags = this.generateHashtags(content, count);
      const trendingHashtags = this.getTrendingHashtags(platform, 5);

      return {
        generatedHashtags: hashtags,
        trendingHashtags,
        totalHashtags: hashtags.length + trendingHashtags.length,
        recommendations: this.rankHashtags(hashtags, platform),
      };
    });
  }

  private generateHashtags(content: string, count: number): string[] {
    const words = content.split(/\s+/).filter((w) => w.length > 3);
    return words.slice(0, count).map((w) => `#${w.toLowerCase()}`);
  }

  private getTrendingHashtags(platform: string, count: number): string[] {
    const trends: Record<string, string[]> = {
      twitter: ['#trending', '#viral', '#tech', '#business', '#innovation'],
      instagram: ['#instagood', '#photooftheday', '#picoftheday', '#love', '#beautiful'],
      tiktok: ['#foryou', '#fyp', '#viral', '#trending', '#dance'],
    };
    return (trends[platform] || trends.twitter).slice(0, count);
  }

  private rankHashtags(hashtags: string[], platform: string): string[] {
    return hashtags.sort(() => 0.5 - Math.random()).slice(0, 5);
  }
}
