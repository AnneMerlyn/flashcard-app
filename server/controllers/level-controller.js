const { level } = require('../models');

const getFlashcardsByLevel = async (req, res) => {
    try {
        const levelId = req.params.levelId;
        const levels = await level.fetchFlashcardsByLevel(levelId);
        res.json(levels);
    } catch (error) {
        console.error('Error fetching flashcards:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getFlashcardsByLevel };
