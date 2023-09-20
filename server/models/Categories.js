const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '_Welcome@1',
    database: 'flashcarddb',
});

const fetchCategories = async () => {
    const [rows] = await pool.query('SELECT * FROM categories');
    return rows;
};

module.exports = { fetchCategories };
