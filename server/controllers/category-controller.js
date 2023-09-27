const { category } = require('../models');

const getAllCategories = async (req, res) => {
    try {
        const categories = await category.fetchAllCategories();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

const getCategoriesByLevel = async (req, res) => {
    try {
        const levelId = req.params.levelId;
        const categories = await category.fetchCategoriesByLevel(levelId);
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getAllCategories, getCategoriesByLevel };
