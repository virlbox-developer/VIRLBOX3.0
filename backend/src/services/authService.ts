// Mock user database
const users: any[] = [];

export const authService = {
  register: async (name: string, email: string, password: string) => {
    if (users.find((u) => u.email === email)) {
      throw new Error('User already exists');
    }

    const user = {
      id: users.length + 1,
      name,
      email,
      password, // In production, hash this!
      createdAt: new Date(),
    };

    users.push(user);

    const token = Buffer.from(JSON.stringify({ id: user.id, email: user.email })).toString('base64');
    return { token, user: { id: user.id, name: user.name, email: user.email } };
  },

  login: async (email: string, password: string) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const token = Buffer.from(JSON.stringify({ id: user.id, email: user.email })).toString('base64');
    return { token, user: { id: user.id, name: user.name, email: user.email } };
  },
};