// app.js

const express = require('express');
const app = express();

app.get('/success', (req, res) => {
  res.status(200).json({ message: 'Success!' });
});

app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app; // Export the app for testing
