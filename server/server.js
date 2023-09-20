// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriesController = require('./controllers/Categories');
const flashCardsController = require('./controllers/FlashCards');

const app = express();
const PORT = 4000;

//const sampleFlashcards = require('../src/sampleData');

app.use(cors()); // This will handle CORS issues when your React app tries to fetch data.
app.use(bodyParser.json());

//for mocking sample data
// app.get('/flashcards', (req, res) => {
//     res.json(sampleFlashcards);
// });

app.get(
    '/flashcards/:categoryId',
    flashCardsController.getFlashcardsByCategory
);
app.get('/categories', categoriesController.getCategories);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
