const { level } = require('../models');

const getAllLevels = async (req, res) => {
    try {
        const levels = await level.fetchAllLevels();
        res.json(levels);
    } catch (error) {
        console.error('Error fetching levels:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getAllLevels };
