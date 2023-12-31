const pool = require('../config/database.js');

const fetchFlashcardsByCategory = async (categoryId) => {
    const query = `
        SELECT 
            flashcards.id AS flashcard_id, 
            flashcards.question, 
            flashcards.answer, 
            categories.category_name,
            subcategories.subcategory_name
        FROM 
            flashcards
        INNER JOIN 
            subcategories ON flashcards.subcategory_id = subcategories.subcategory_id
        INNER JOIN 
            categories ON categories.category_id = flashcards.category_id
        WHERE 
            categories.category_id = ?;  
    `;

    const [rows] = await pool.query(query, [categoryId]);
    return rows;
};

const fetchFlashcardsByLevels = async (levelId) => {
    const query = `
        SELECT
            flashcards.id AS flashcard_id, 
            flashcards.question, 
            flashcards.answer, 
            categories.category_name,
            subcategories.subcategory_name, 
            subcategories.subcategory_id,
            levels.level_description
        FROM 
            flashcards
        INNER JOIN subcategories
            subcategories ON flashcards.subcategory_id = subcategories.subcategory_id
        INNER JOIN 
            categories ON categories.category_id = flashcards.category_id
        INNER JOIN 
            levels ON flashcards.level_id = levels.level_id
        WHERE 
            flashcards.level_id = ?;
    `;

    const [rows] = await pool.query(query, [levelId]);
    return rows;
};

module.exports = { fetchFlashcardsByCategory, fetchFlashcardsByLevels };
