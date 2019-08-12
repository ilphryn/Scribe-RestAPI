'user strict';

let mysql = require('mysql');

// db connection configurations
const db = mysql.createConnection({
    host: 'localhost',
    user: 'scribeapp',
    port: '3306',
    password: 'scribe@PP',
    database: 'scribe'
});

module.exports = db;