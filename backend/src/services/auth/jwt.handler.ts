import jwt from 'jsonwebtoken';
import { logger } from '../../logger/index';

export class JWTHandler {
  private secret = process.env.JWT_SECRET || 'secret';
  private refreshSecret = process.env.JWT_REFRESH_SECRET || 'refresh-secret';

  generateTokenPair(userId: string, email: string) {
    try {
      const accessToken = jwt.sign(
        { userId, email, type: 'access' },
        this.secret,
        { expiresIn: '1h' }
      );

      const refreshToken = jwt.sign(
        { userId, email, type: 'refresh' },
        this.refreshSecret,
        { expiresIn: '7d' }
      );

      return { accessToken, refreshToken };
    } catch (error) {
      logger.error('Token generation failed', error);
      throw error;
    }
  }

  verifyAccessToken(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      logger.error('Access token verification failed', error);
      return null;
    }
  }

  verifyRefreshToken(token: string) {
    try {
      return jwt.verify(token, this.refreshSecret);
    } catch (error) {
      logger.error('Refresh token verification failed', error);
      return null;
    }
  }

  decodeToken(token: string) {
    return jwt.decode(token);
  }
}
