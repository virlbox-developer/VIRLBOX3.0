export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Content {
  id: string;
  title: string;
  content: string;
  platform: string;
  status: 'draft' | 'published' | 'scheduled';
  createdAt: string;
}

export interface Analytics {
  userId: string;
  totalFollowers: number;
  avgEngagement: number;
  growthRate: number;
  topContent: string[];
}

export interface Integration {
  id: string;
  type: string;
  platform: string;
  isActive: boolean;
}
