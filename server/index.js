require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const contactRoutes = require('./routes/contact.routes');

// Use the CORS middleware with specific options
app.use(cors({
  origin: 'http://localhost:5173', // Frontend domain
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Parse incoming JSON requests
app.use(express.json());

// API routes
app.use('/api/user', contactRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
});
