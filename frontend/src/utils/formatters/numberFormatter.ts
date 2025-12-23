export function formatNumber(num: number, decimals: number = 0): string {
  return Number(num.toFixed(decimals)).toLocaleString();
}

export function formatPercentage(num: number, decimals: number = 2): string {
  return (num * 100).toFixed(decimals) + '%';
}

export function formatCurrency(num: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(num);
}

export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
