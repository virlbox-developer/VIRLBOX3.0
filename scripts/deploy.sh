#!/bin/bash

echo "🚀 Deploying VIRLBOX to Heroku..."

# Backend deployment
echo "📤 Deploying backend..."
cd backend
heroku create ${APP_NAME:-virlbox-app}
heroku addons:create heroku-postgresql:standard-0
heroku addons:create heroku-redis:premium-0
heroku config:set JWT_SECRET=$(openssl rand -base64 32)
git push heroku main
heroku run npm run migration:run
heroku run npm run seed:agents
cd ..

# Frontend deployment
echo "📤 Deploying frontend..."
cd frontend
npm install -g vercel
vercel --prod
cd ..

echo "✅ Deployment complete!"

