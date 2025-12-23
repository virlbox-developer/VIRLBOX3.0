export class Formatters {
  static formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  static formatDateTime(date: Date): string {
    return date.toISOString();
  }

  static formatNumber(num: number, decimals: number = 2): string {
    return num.toFixed(decimals);
  }

  static formatCurrency(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  }

  static formatPercentage(value: number, decimals: number = 2): string {
    return (value * 100).toFixed(decimals) + '%';
  }

  static slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
}
