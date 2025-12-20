#!/bin/bash

echo "🚀 Setting up VIRLBOX..."

# Backend setup
echo "📦 Setting up backend..."
cd backend
cp .env.example .env
npm install
npm run migration:run
npm run seed:agents
cd ..

# Frontend setup
echo "📦 Setting up frontend..."
cd frontend
cp .env.local.example .env.local
npm install
cd ..

echo "✅ Setup complete!"
echo "🎉 Run: npm run dev in both directories to start development"

