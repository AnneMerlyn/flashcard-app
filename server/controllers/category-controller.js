const { category } = require('../models');

const getCategories = async (req, res) => {
    try {
        const categories = await category.fetchCategories();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching flashcards:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getCategories };
