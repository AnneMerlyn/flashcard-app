// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

const sampleFlashcards = require('../src/sampleData');

app.use(cors()); // This will handle CORS issues when your React app tries to fetch data.

app.get('/flashcards', (req, res) => {
    res.json(sampleFlashcards);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
