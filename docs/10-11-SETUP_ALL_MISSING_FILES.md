# VirBox Complete Setup - All Missing Files

## FRONTEND MISSING FILES

### 1. `virbox/frontend/tsconfig.node.json`
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

---

### 2. `virbox/frontend/src/pages/Home.tsx`
```typescript
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to VirBox</h1>
      <p>Your virtualization management platform</p>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={() => navigate('/login')}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/register')}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
```

---

### 3. `virbox/frontend/src/pages/Login.tsx`
```typescript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Login</h1>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
```

---

### 4. `virbox/frontend/src/pages/Register.tsx`
```typescript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registration failed');
        return;
      }

      navigate('/login');
    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Register</h1>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
```

---

## BACKEND MISSING FILES

### 5. `virbox/backend/src/middleware/request-logger.ts`
```typescript
import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || 'unknown';

  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);

  res.on('finish', () => {
    const statusCode = res.statusCode;
    const statusMessage = res.statusMessage;
    console.log(`[${timestamp}] Response: ${statusCode} ${statusMessage}`);
  });

  next();
};
```

---

### 6. `virbox/backend/src/middleware/error-handler.ts`
```typescript
import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
  code?: string;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${status}: ${message}`);

  res.status(status).json({
    error: {
      status,
      message,
      code: err.code || 'INTERNAL_ERROR',
    },
  });
};
```

---

### 7. `virbox/backend/src/routes/auth.ts`
```typescript
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
```

---

### 8. `virbox/backend/src/main.ts` (UPDATED)
```typescript
import express from 'express';
import cors from 'cors';
import { requestLogger } from './middleware/request-logger';
import { errorHandler } from './middleware/error-handler';
import authRoutes from './routes/auth';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Error handler (MUST be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
```

---

### 9. `virbox/backend/src/types/index.ts`
```typescript
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface ApiError {
  status: number;
  message: string;
  code: string;
}
```

---

## INSTALLATION INSTRUCTIONS

### Step 1: Create all files
Copy each file from above into its respective location.

### Step 2: Install missing dependencies (if needed)
```bash
cd virbox/backend
npm install cors
npm install --save-dev @types/cors
```

### Step 3: Restart both servers
```bash
# Terminal 1 - Frontend
cd virbox/frontend
npm run dev

# Terminal 2 - Backend
cd virbox/backend
npm run dev
```

### Step 4: Test
- Frontend: http://localhost:5173
- Backend: http://localhost:3000/api/health

---

## SUMMARY
✅ `tsconfig.node.json` - TypeScript config for Vite  
✅ `Home.tsx` - Landing page  
✅ `Login.tsx` - Login page  
✅ `Register.tsx` - Registration page  
✅ `request-logger.ts` - Request logging middleware  
✅ `error-handler.ts` - Error handling middleware  
✅ `auth.ts` - Authentication routes  
✅ `main.ts` - Updated with all middleware  
✅ `types/index.ts` - TypeScript types  

All errors should now be resolved!
