const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.use('/api/auth', require('./routes/authRoutes')); // Authentication routes

// Default route
app.get('/', (req, res) => {
    res.send('BreatheEasy Backend is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
