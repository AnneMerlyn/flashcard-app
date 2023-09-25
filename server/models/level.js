const pool = require('../config/database.js');

const fetchAllLevels = async () => {
    const [rows] = await pool.query('SELECT * FROM levels');

    return rows;
};

module.exports = { fetchAllLevels };
