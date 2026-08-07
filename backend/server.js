const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/bookings', bookingRoutes);

// Serve static files from the frontend's public directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// For all other routes, serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});