export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: process.env.JWT_EXPIRE || '7d',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
  refreshExpiresIn: '30d',
};
