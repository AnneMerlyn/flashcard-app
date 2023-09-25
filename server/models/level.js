const pool = require('../config/database.js');

const fetchFlashcardsByLevel = async (levelId) => {
    const query = `
        
    `;

    const [rows] = await pool.query(query, [levelId]);
    return rows;
};

module.exports = { fetchFlashcardsByLevel };
