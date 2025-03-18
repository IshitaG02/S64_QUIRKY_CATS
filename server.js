require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDatabase = require('./database');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Connect to Database
connectDatabase();

// Home Route - Shows Database Connection Status
app.get('/', (req, res) => {
  const status = mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected';
  res.json({ databaseStatus: status });
});

// Test Route
app.get('/ping', (req, res) => {
  try {
    res.send('pong');
  } catch (error) {
    res.status(500).send('An error occurred');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
