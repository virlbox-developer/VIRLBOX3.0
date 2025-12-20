import { Router, Request, Response } from 'express';

const router = Router();

// Mock user database
const users: any[] = [];

router.post('/register', (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (users.find(u => u.email === email)) {
    return res.status(409).json({ message: 'User already exists' });
  }

  users.push({ id: users.length + 1, name, email, password });
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = Buffer.from(JSON.stringify({ id: user.id, email: user.email })).toString('base64');
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

export default router;