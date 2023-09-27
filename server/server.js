// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    categoriesController,
    flashCardsController,
    levelsController,
} = require('./controllers');

const app = express();
const PORT = 4000;

app.use(cors()); // This will handle CORS issues when your React app tries to fetch data.
app.use(bodyParser.json());

app.get(
    '/flashcards/category/:categoryId',
    flashCardsController.getFlashcardsByCategory
);
app.get(
    '/flashcards/level/:levelId',
    flashCardsController.getFlashcardsByLevel
);
app.get('/categories', categoriesController.getAllCategories);
app.get(
    '/categories/level/:levelId',
    categoriesController.getCategoriesByLevel
);
app.get('/levels', levelsController.getAllLevels);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
