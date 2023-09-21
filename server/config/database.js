const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '_Welcome@1',
    database: 'flashcarddb',
});

module.exports = pool;
