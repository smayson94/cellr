require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const { Client } = require('pg'); // PostgreSQL client for Node.js

const app = express();
const port = process.env.PORT || 3000;

// Database connection using the DATABASE_URL environment variable
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Required for Heroku's SSL connection
    },
});

// Connect to PostgreSQL
client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err.stack);
    });

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, Wine Tracker!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});