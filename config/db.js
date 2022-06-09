const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mad-kudu',
  password: '1934Afed',
});

module.exports = pool.promise();
