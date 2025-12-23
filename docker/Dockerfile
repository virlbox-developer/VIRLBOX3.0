FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy backend
COPY backend ./backend
RUN cd backend && npm ci --only=production

# Copy frontend
COPY frontend ./frontend
RUN cd frontend && npm ci && npm run build

# Expose ports
EXPOSE 3000 5173

# Start both services
CMD ["sh", "-c", "cd backend && npm start & cd frontend && npm run dev"]
