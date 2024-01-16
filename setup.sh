#!/bin/bash

# Create the .env file in the backend folder
echo "PORT=3000
DB_NAME=my_notes_app
DB_USER=lucas
DB_PASSWORD=admin123
DB_HOST=localhost
DB_PORT=5432" > backend/.env

# Install backend dependencies
cd backend
npm install

# Create and start the database in Docker
docker run --name my-postgres-db -e POSTGRES_PASSWORD=admin123 -p 5432:5432 -d postgres:latest

# Wait for a few seconds to ensure the database is ready
sleep 5

# Create the 'lucas' role in the PostgreSQL server
docker exec -it my-postgres-db psql -U postgres -c "CREATE ROLE lucas WITH LOGIN PASSWORD 'admin123';"

# Create the my_notes_app database
docker exec -it my-postgres-db psql -U postgres -c "CREATE DATABASE my_notes_app;"

# Start the backend in development mode
npm run dev &

# Wait for a few seconds to ensure the backend server is ready
sleep 5

# Change to the frontend directory
cd ../frontend

# Install frontend dependencies
npm install

# Start the frontend in development mode
npm run dev
