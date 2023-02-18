const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Sagar@154',
    waitForConnections: true,
    connectionLimit: 10,
    database: 'my_db',

})

module.exports = {
    pool,
}