const model = require('../models/FlashCards');

const getFlashcardsByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const flashcards = await model.fetchFlashcardsByCategory(categoryId);
        res.json(flashcards);
    } catch (error) {
        console.error('Error fetching flashcards:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getFlashcardsByCategory };
