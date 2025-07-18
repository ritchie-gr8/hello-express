// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Optional: To parse JSON bodies (not needed for Hello World, but useful later)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World with CORS!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
