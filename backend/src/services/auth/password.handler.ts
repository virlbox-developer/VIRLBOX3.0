import bcryptjs from 'bcryptjs';
import { logger } from '../../logger/index';

export class PasswordHandler {
  async hashPassword(password: string): Promise<string> {
    try {
      const salt = await bcryptjs.genSalt(10);
      return await bcryptjs.hash(password, salt);
    } catch (error) {
      logger.error('Password hashing failed', error);
      throw error;
    }
  }

  async comparePasswords(password: string, hash: string): Promise<boolean> {
    try {
      return await bcryptjs.compare(password, hash);
    } catch (error) {
      logger.error('Password comparison failed', error);
      return false;
    }
  }

  validatePasswordStrength(password: string): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (password.length < 8) errors.push('Password must be at least 8 characters');
    if (!/[A-Z]/.test(password)) errors.push('Password must contain uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('Password must contain lowercase letter');
    if (!/[0-9]/.test(password)) errors.push('Password must contain number');
    if (!/[!@#$%^&*]/.test(password)) errors.push('Password must contain special character');

    return { valid: errors.length === 0, errors };
  }
}
