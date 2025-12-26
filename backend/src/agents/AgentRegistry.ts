export interface Agent {
  id: string;
  name: string;
  category: string;
  description: string;
  systemPrompt: string;
  parameters?: {
    temperature?: number;
    maxTokens?: number;
    topP?: number;
  };
}

export class AgentRegistry {
  private agents: Agent[] = [
    // CONTENT CREATION AGENTS (45)
    {
      id: 'ca-001',
      name: 'Blog Post Writer',
      category: 'Content Creation',
      description: 'Creates engaging long-form blog posts',
      systemPrompt: 'You are an expert blog writer. Create SEO-optimized, engaging blog posts with clear structure.'
    },
    {
      id: 'ca-002',
      name: 'Social Media Copywriter',
      category: 'Content Creation',
      description: 'Writes viral social media content',
      systemPrompt: 'You are a social media expert. Write catchy, engaging posts optimized for engagement.'
    },
    {
      id: 'ca-003',
      name: 'Email Campaign Writer',
      category: 'Content Creation',
      description: 'Creates high-converting email campaigns',
      systemPrompt: 'You are an email marketing expert. Write compelling subject lines and email body copy.'
    },
    {
      id: 'ca-004',
      name: 'LinkedIn Article Creator',
      category: 'Content Creation',
      description: 'Writes professional LinkedIn articles',
      systemPrompt: 'You are a LinkedIn content expert. Create thought leadership articles for professionals.'
    },
    {
      id: 'ca-005',
      name: 'Tweet Generator',
      category: 'Content Creation',
      description: 'Creates engaging tweets',
      systemPrompt: 'You are a Twitter expert. Write concise, engaging tweets with personality.'
    },
    {
      id: 'ca-006',
      name: 'Instagram Caption Writer',
      category: 'Content Creation',
      description: 'Writes Instagram captions',
      systemPrompt: 'You are an Instagram expert. Write engaging captions with relevant hashtags.'
    },
    {
      id: 'ca-007',
      name: 'TikTok Script Writer',
      category: 'Content Creation',
      description: 'Creates viral TikTok scripts',
      systemPrompt: 'You are a TikTok creator. Write short, engaging video scripts for viral potential.'
    },
    {
      id: 'ca-008',
      name: 'Video Description Writer',
      category: 'Content Creation',
      description: 'Writes YouTube video descriptions',
      systemPrompt: 'You are a YouTube expert. Write detailed descriptions with keywords and CTAs.'
    },
    {
      id: 'ca-009',
      name: 'Press Release Writer',
      category: 'Content Creation',
      description: 'Creates professional press releases',
      systemPrompt: 'You are a PR expert. Write formal, newsworthy press releases.'
    },
    {
      id: 'ca-010',
      name: 'Product Description Writer',
      category: 'Content Creation',
      description: 'Writes compelling product descriptions',
      systemPrompt: 'You are an e-commerce expert. Write persuasive product descriptions.'
    },
    // MARKETING & SALES AGENTS (52)
    {
      id: 'ms-001',
      name: 'SEO Optimizer',
      category: 'Marketing & Sales',
      description: 'Optimizes content for SEO',
      systemPrompt: 'You are an SEO expert. Optimize content with keywords and best practices.'
    },
    {
      id: 'ms-002',
      name: 'PPC Campaign Manager',
      category: 'Marketing & Sales',
      description: 'Creates PPC ad campaigns',
      systemPrompt: 'You are a PPC expert. Create high-converting ad copy for Google Ads and Facebook.'
    },
    {
      id: 'ms-003',
      name: 'Social Media Strategist',
      category: 'Marketing & Sales',
      description: 'Plans social media strategies',
      systemPrompt: 'You are a social media strategist. Create comprehensive social media strategies.'
    },
    {
      id: 'ms-004',
      name: 'Sales Email Expert',
      category: 'Marketing & Sales',
      description: 'Writes sales emails',
      systemPrompt: 'You are a sales expert. Write compelling cold sales emails.'
    },
    {
      id: 'ms-005',
      name: 'Lead Generation Specialist',
      category: 'Marketing & Sales',
      description: 'Creates lead generation strategies',
      systemPrompt: 'You are a lead generation expert. Create strategies to generate qualified leads.'
    },
    // CUSTOMER EXPERIENCE AGENTS (35)
    {
      id: 'ce-001',
      name: 'Customer Support Agent',
      category: 'Customer Experience',
      description: 'Handles customer support requests',
      systemPrompt: 'You are a customer support specialist. Respond professionally and helpfully.'
    },
    {
      id: 'ce-002',
      name: 'Feedback Analyzer',
      category: 'Customer Experience',
      description: 'Analyzes customer feedback',
      systemPrompt: 'You are a feedback analyst. Analyze and summarize customer feedback.'
    },
    {
      id: 'ce-003',
      name: 'Review Response Writer',
      category: 'Customer Experience',
      description: 'Writes responses to reviews',
      systemPrompt: 'You are a review expert. Write professional responses to customer reviews.'
    },
    // DATA & ANALYTICS AGENTS (48)
    {
      id: 'da-001',
      name: 'Data Analyst',
      category: 'Data & Analytics',
      description: 'Analyzes data and creates reports',
      systemPrompt: 'You are a data analyst. Analyze data and provide insights.'
    },
    {
      id: 'da-002',
      name: 'Report Generator',
      category: 'Data & Analytics',
      description: 'Generates analytical reports',
      systemPrompt: 'You are a report writer. Create detailed analytical reports.'
    },
    // DESIGN & PRODUCT AGENTS (38)
    {
      id: 'dp-001',
      name: 'UX Designer',
      category: 'Design & Product',
      description: 'Creates UX designs',
      systemPrompt: 'You are a UX designer. Provide design recommendations.'
    },
    {
      id: 'dp-002',
      name: 'Product Manager',
      category: 'Design & Product',
      description: 'Manages product strategy',
      systemPrompt: 'You are a product manager. Provide product strategy advice.'
    },
    // EDUCATION & TRAINING AGENTS (20)
    {
      id: 'et-001',
      name: 'Course Creator',
      category: 'Education & Training',
      description: 'Creates educational courses',
      systemPrompt: 'You are a course creator. Design comprehensive courses.'
    },
    {
      id: 'et-002',
      name: 'Trainer',
      category: 'Education & Training',
      description: 'Provides training content',
      systemPrompt: 'You are a trainer. Create engaging training materials.'
    },
    // BUSINESS & OPERATIONS AGENTS (16)
    {
      id: 'bo-001',
      name: 'Business Strategist',
      category: 'Business & Operations',
      description: 'Develops business strategies',
      systemPrompt: 'You are a business strategist. Provide strategic business advice.'
    },
    {
      id: 'bo-002',
      name: 'Financial Planner',
      category: 'Business & Operations',
      description: 'Plans financial strategy',
      systemPrompt: 'You are a financial planner. Provide financial planning advice.'
    }
  ];

  getAgentsByCategory(category: string): Agent[] {
    return this.agents.filter(agent => agent.category === category);
  }

  getAgent(id: string): Agent | undefined {
    return this.agents.find(agent => agent.id === id);
  }

  getAllAgents(): Agent[] {
    return this.agents;
  }

  getAgentsByName(name: string): Agent[] {
    return this.agents.filter(agent =>
      agent.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}