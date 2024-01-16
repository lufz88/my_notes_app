# MyApp

This is the `README.md` file for your "MyApp" application. Here you will find instructions and requirements to run the application successfully.

## Features Implemented

1. **Create Notes:** Users can now create new notes with ease. The application supports the addition of relevant details and tags.

2. **Modify Notes:** The modification feature enables users to update existing notes, allowing for changes in content, tags, and other attributes.

3. **Delete Notes:** Users have the ability to delete unwanted notes, providing a streamlined way to manage their notes effectively.

4. **Filter by Active/Archived:** Notes can be filtered based on their status, allowing users to focus on either active or archived notes.

5. **Filter by Tags:** The application supports tag-based filtering, enabling users to quickly locate notes associated with specific tags.

## Backend

### System Requirements

Make sure you have the following tools and versions installed on your system:

-   [Docker Desktop](https://www.docker.com/products/docker-desktop) v4.26.1
-   [Node.js](https://nodejs.org/) v20.10.0
-   [npm](https://www.npmjs.com/) v10.2.3

### Database Setup

We use Docker to spin up a PostgreSQL database. Ensure Docker Desktop is installed and running.

```bash
docker run --name my-postgres-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres:16
```

### Install Dependencies

In the backend directory, run the following command to install dependencies:

```bash
npm install
```

### Run the Server

To start the server, use the following command:

```bash
npm start
```

### Backend Dependencies

```json
"dependencies": {
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "nodemon": "^3.0.2",
  "pg": "^8.11.3",
  "pg-hstore": "^2.3.4",
  "sequelize": "^6.35.2"
}
```

## Frontend

### System Requirements

Make sure you have the following tools and versions installed on your system:

-   [Node.js](https://nodejs.org/) v20.10.0
-   [npm](https://www.npmjs.com/) v10.2.3

### Install Dependencies

In the frontend directory, run the following command to install dependencies:

```bash
npm install
```

### Run the Client

To start the client, use the following command:

```bash
npm start
```

### Frontend Dependencies

```json
"dependencies": {
  "@emotion/react": "^11.11.3",
  "@emotion/styled": "^11.11.0",
  "@mui/icons-material": "^5.15.4",
  "@mui/material": "^5.15.4",
  "axios": "^1.6.5",
  "prop-types": "^15.8.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.21.2",
  "sweetalert2": "^11.10.3"
}
```

All set! Now you should have the application running smoothly. Make sure you have all dependencies installed and configured correctly according to the specified versions.
