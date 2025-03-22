const express = require('express');
const mongoose = require('mongoose');
const bugRoutes = require('./routes/bugRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// API Routes
app.use('/api/bugs', bugRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
