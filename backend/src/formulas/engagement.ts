export class EngagementFormulas {
  static calculateEngagementRate(
    likes: number,
    comments: number,
    shares: number,
    followers: number
  ): number {
    if (followers === 0) return 0;
    const totalEngagement = likes + comments * 2 + shares * 3;
    return (totalEngagement / followers) * 100;
  }

  static calculateViralPotential(
    engagement: number,
    shares: number,
    comments: number
  ): number {
    return (engagement * 0.4 + shares * 0.3 + comments * 0.3) / 100;
  }

  static calculateReachMultiplier(followers: number, engagement: number): number {
    return followers * (1 + engagement / 100);
  }

  static predictReach(
    followers: number,
    engagement: number,
    viralFactor: number
  ): number {
    const baseReach = followers * (1 + engagement / 100);
    return Math.floor(baseReach * (1 + viralFactor));
  }
}
