import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { userService } from '../services/user.service';
import { logger } from '../logger/index';

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      return res.json(result);
    } catch (error) {
      logger.error('Login failed', error);
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body;
      const result = await userService.createUser(email, password, name);
      return res.status(201).json(result);
    } catch (error) {
      logger.error('Registration failed', error);
      return res.status(400).json({ error: 'Registration failed' });
    }
  }

  async logout(req: Request, res: Response) {
    return res.json({ message: 'Logged out' });
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const { token } = req.body;
      const newToken = await authService.refreshToken(token);
      return res.json({ token: newToken });
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  }
}

export const authController = new AuthController();
