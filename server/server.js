// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { categoriesController, flashCardsController } = require('./controllers');

const app = express();
const PORT = 4000;

app.use(cors()); // This will handle CORS issues when your React app tries to fetch data.
app.use(bodyParser.json());

app.get(
    '/flashcards/:categoryId',
    flashCardsController.getFlashcardsByCategory
);
app.get('/categories', categoriesController.getCategories);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
