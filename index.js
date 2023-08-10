const express = require('express');
const path = require('path');
const { port } = require('./config.json');

const app = express();

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve static files from the 'styles' directory
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Serve the 'index.html' file when accessing the root URL
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});