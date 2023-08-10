const express = require('express');
const path = require('path');
const { port } = require('./config.json');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '/public')));

// Serve the 'index.html' file when accessing the root URL
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
