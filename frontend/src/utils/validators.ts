export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password: string): { valid: boolean; message: string } => {
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters' };
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, message: 'Password must contain lowercase letters' };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: 'Password must contain uppercase letters' };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, message: 'Password must contain numbers' };
  }
  return { valid: true, message: '' };
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const validateForm = (data: Record<string, any>): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Invalid email';
  }

  if (data.password) {
    const pwValidation = validatePassword(data.password);
    if (!pwValidation.valid) {
      errors.password = pwValidation.message;
    }
  }

  if (!data.name || !validateName(data.name)) {
    errors.name = 'Name must be at least 2 characters';
  }

  return { valid: Object.keys(errors).length === 0, errors };
};