#!/bin/bash

# Create the .env file in the backend folder
echo "PORT=3000
DB_NAME=my_notes_app
DB_USER=lucas
DB_PASSWORD=admin123
DB_HOST=localhost
DB_PORT=5432" > backend/.env

# Install backend dependencies
cd backend && npm install

# Create and start the database in Docker
docker-compose up -d postgres

# Wait for a few seconds to ensure the database is ready
sleep 10

# Run database migrations
npx sequelize-cli db:migrate

# Start the backend in development mode
npm run dev &

# Wait for a few seconds to ensure the backend server is ready
sleep 5

# Change to the frontend directory and install dependencies
cd ../frontend && npm install

# Start the frontend in development mode
npm run dev