const pool = require('../config/database.js');

const fetchCategories = async () => {
    const [rows] = await pool.query('SELECT * FROM categories');
    return rows;
};

module.exports = { fetchCategories };
