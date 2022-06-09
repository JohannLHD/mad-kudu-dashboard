const mysql = require('mysql2');
require('dotenv').config();

console.log(process.env.PASSWORD);
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mad-kudu',
  password: process.env.PASSWORD,
});

module.exports = pool.promise();
