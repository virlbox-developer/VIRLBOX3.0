import axios, { AxiosInstance } from 'axios';
import { logger } from '../logger/index';

export interface AyrshareConfig {
  apiKey: string;
  baseUrl: string;
}

export interface PostRequest {
  post: string;
  mediaUrls?: string[];
  platforms: string[];
  scheduleDate?: string;
  title?: string;
  hashTags?: string[];
}

export interface PostResponse {
  id: string;
  status: string;
  platforms: { [key: string]: string };
  scheduledDate?: string;
  message: string;
}

export class AyrshareIntegration {
  private client: AxiosInstance;
  private config: AyrshareConfig;

  constructor(apiKey: string) {
    this.config = {
      apiKey,
      baseUrl: 'https://api.ayrshare.com/api',
    };

    this.client = axios.create({
      baseURL: this.config.baseUrl,
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json',
      },
    });
  }

  async postContent(request: PostRequest): Promise<PostResponse> {
    try {
      logger.info('Posting content to Ayrshare', {
        platforms: request.platforms,
      });

      const response = await this.client.post('/post', {
        post: request.post,
        mediaUrls: request.mediaUrls || [],
        platforms: request.platforms,
        scheduleDate: request.scheduleDate,
        title: request.title,
        hashTags: request.hashTags || [],
      });

      logger.info('Content posted successfully', { postId: response.data.id });
      return response.data;
    } catch (error) {
      logger.error('Failed to post content', error);
      throw new Error('Ayrshare posting failed');
    }
  }

  async getPostStatus(postId: string): Promise<PostResponse> {
    try {
      const response = await this.client.get(\`/post/\${postId}\`);
      return response.data;
    } catch (error) {
      logger.error('Failed to get post status', error);
      throw new Error('Failed to retrieve post status');
    }
  }

  async deletePost(postId: string): Promise<void> {
    try {
      await this.client.delete(\`/post/\${postId}\`);
      logger.info('Post deleted', { postId });
    } catch (error) {
      logger.error('Failed to delete post', error);
      throw new Error('Failed to delete post');
    }
  }

  async getAvailablePlatforms(): Promise<string[]> {
    try {
      const response = await this.client.get('/platforms');
      return response.data.platforms || [];
    } catch (error) {
      logger.error('Failed to get available platforms', error);
      return [
        'twitter',
        'instagram',
        'facebook',
        'linkedin',
        'tiktok',
        'youtube',
        'pinterest',
        'tumblr',
      ];
    }
  }

  async schedulePost(
    request: PostRequest,
    scheduleDate: Date
  ): Promise<PostResponse> {
    return this.postContent({
      ...request,
      scheduleDate: scheduleDate.toISOString(),
    });
  }
}
