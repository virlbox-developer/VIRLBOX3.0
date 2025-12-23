export class ROIFormulas {
  static calculateROI(revenue: number, investment: number): number {
    if (investment === 0) return 0;
    return ((revenue - investment) / investment) * 100;
  }

  static calculateCPA(totalCost: number, conversions: number): number {
    if (conversions === 0) return 0;
    return totalCost / conversions;
  }

  static calculateCTR(clicks: number, impressions: number): number {
    if (impressions === 0) return 0;
    return (clicks / impressions) * 100;
  }

  static calculateLTV(averageOrderValue: number, purchaseFrequency: number, customerLifetime: number): number {
    return averageOrderValue * purchaseFrequency * customerLifetime;
  }

  static calculateCAC(marketingCost: number, newCustomers: number): number {
    if (newCustomers === 0) return 0;
    return marketingCost / newCustomers;
  }

  static calculateLTVtoCACRatio(ltv: number, cac: number): number {
    if (cac === 0) return 0;
    return ltv / cac;
  }
}
