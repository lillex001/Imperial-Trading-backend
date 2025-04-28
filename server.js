const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();  // Load environment variables from .env

const app = express();
app.use(cors());  // Enable CORS for all origins
app.use(express.json());  // Parse incoming JSON requests

const PORT = process.env.PORT || 5000;  // Use the port from .env, default to 5000 if not set

app.get('/', (req, res) => {
  res.send('Welcome to Imperial Trading Backend');
});

// Add your API routes here (for example, user login, registration, etc.)
// Example route: 
// const apiRoutes = require('./routes/apiRoutes');
// app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);  // Use /api as the prefix for all routes in apiRoutes