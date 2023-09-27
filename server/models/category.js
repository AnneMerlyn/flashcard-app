const pool = require('../config/database.js');

const fetchAllCategories = async () => {
    const [rows] = await pool.query('SELECT * FROM categories');
    return rows;
};

const fetchCategoriesByLevel = async (levelId) => {
    const query = `
        SELECT DISTINCT 
        	categories.category_id,
        	categories.category_name
        FROM 
        	categories
        INNER JOIN 
        	flashcards ON flashcards.category_id = categories.category_id
        WHERE 
        	flashcards.level_id = ?;
    `;
    const [rows] = await pool.query(query, [levelId]);
    console.log(rows);
    return rows;
};

module.exports = { fetchAllCategories, fetchCategoriesByLevel };
