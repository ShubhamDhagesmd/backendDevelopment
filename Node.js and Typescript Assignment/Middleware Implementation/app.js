// Import necessary modules
const express = require('express');

// Create Express app
const app = express();

// Custom middleware function to log requests
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const { method, originalUrl } = req;

  // Log the request details
  console.log(`[${timestamp}] - ${method} request to ${originalUrl}`);
  
  // Continue with the request handling
  next();
};

// Applying the middleware globally
app.use(requestLogger);

// Route handling
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

