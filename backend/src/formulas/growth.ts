export interface GrowthMetrics {
  currentFollowers: number;
  newFollowers: number;
  engagementRate: number;
  reachRate: number;
  impressions: number;
}

export interface GrowthProjection {
  monthlyGrowthRate: number;
  projectedFollowers3Month: number;
  projectedFollowers6Month: number;
  projectedFollowers1Year: number;
  recommendedPostFrequency: number;
  optimalPostingTime: string;
}

export class GrowthFormulas {
  /**
   * Calculate viral coefficient (compound growth factor)
   */
  static calculateViralCoefficient(
    shares: number,
    likes: number,
    comments: number,
    views: number
  ): number {
    if (views === 0) return 0;
    const engagementSum = shares * 3 + likes * 1 + comments * 2;
    return Math.min(engagementSum / views, 1);
  }

  /**
   * Project follower growth based on current metrics
   */
  static projectFollowerGrowth(
    currentFollowers: number,
    weeklyGrowth: number,
    weeks: number
  ): number {
    const weeklyGrowthRate = weeklyGrowth / currentFollowers;
    return Math.floor(
      currentFollowers * Math.pow(1 + weeklyGrowthRate, weeks)
    );
  }

  /**
   * Calculate reach rate
   */
  static calculateReachRate(reach: number, totalFollowers: number): number {
    if (totalFollowers === 0) return 0;
    return (reach / totalFollowers) * 100;
  }

  /**
   * Optimal posting frequency based on growth
   */
  static calculateOptimalPostFrequency(
    currentGrowthRate: number,
    platform: string
  ): number {
    const platformFrequency: { [key: string]: number } = {
      instagram: 1,
      tiktok: 3,
      twitter: 5,
      facebook: 2,
      linkedin: 1,
      youtube: 3,
    };

    const baseFrequency = platformFrequency[platform.toLowerCase()] || 1;
    return Math.ceil(baseFrequency * (1 + currentGrowthRate * 0.5));
  }

  /**
   * Calculate growth trend
   */
  static calculateGrowthTrend(
    previousMetrics: number[],
    period: number = 7
  ): { trend: 'up' | 'down' | 'stable'; percentage: number } {
    if (previousMetrics.length < 2) {
      return { trend: 'stable', percentage: 0 };
    }

    const recent = previousMetrics.slice(-period);
    const older = previousMetrics.slice(-period * 2, -period);

    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const olderAvg = older.reduce((a, b) => a + b, 0) / older.length;

    if (olderAvg === 0) {
      return { trend: 'up', percentage: 100 };
    }

    const percentage = ((recentAvg - olderAvg) / olderAvg) * 100;
    const trend = percentage > 5 ? 'up' : percentage < -5 ? 'down' : 'stable';

    return { trend, percentage: Math.abs(percentage) };
  }

  /**
   * Estimate audience size growth
   */
  static estimateAudienceGrowth(
    initialFollowers: number,
    monthlyGrowthRate: number,
    months: number
  ): GrowthProjection {
    const projectedFollowers3 = Math.floor(
      initialFollowers * Math.pow(1 + monthlyGrowthRate, 3)
    );
    const projectedFollowers6 = Math.floor(
      initialFollowers * Math.pow(1 + monthlyGrowthRate, 6)
    );
    const projectedFollowers12 = Math.floor(
      initialFollowers * Math.pow(1 + monthlyGrowthRate, 12)
    );

    return {
      monthlyGrowthRate,
      projectedFollowers3Month: projectedFollowers3,
      projectedFollowers6Month: projectedFollowers6,
      projectedFollowers1Year: projectedFollowers12,
      recommendedPostFrequency: this.calculateOptimalPostFrequency(
        monthlyGrowthRate,
        'general'
      ),
      optimalPostingTime: this.getOptimalPostingTime(),
    };
  }

  private static getOptimalPostingTime(): string {
    const hour = Math.floor(Math.random() * 23);
    return \`\${hour.toString().padStart(2, '0')}:00\`;
  }
}
