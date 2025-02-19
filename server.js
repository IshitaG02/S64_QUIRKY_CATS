require('dotenv').config();
const express = require('express');
const connectDatabase = require('./database');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Test Route
app.get('/ping', (req, res) => {
    try {
        res.send('pong');
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

// Connect to Database
connectDatabase();

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
