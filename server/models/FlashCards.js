const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '_Welcome@1',
    database: 'flashcarddb',
});

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

module.exports = { fetchFlashcardsByCategory };
