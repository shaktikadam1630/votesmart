const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL || process.env.MONGODB_URL;

// Set up MongoDB connection without deprecated options
mongoose.connect(mongoURL)
  .then(() => console.log('Connected to MongoDB server'))
  .catch(err => console.error('MongoDB connection error:', err));

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});


// Export the database connection
module.exports = db;