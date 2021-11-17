// Fake client avec de la fake data
const client = require('./fakeData');

//TODO with PostgresQL
/**
 * npm install pg
 * .env
 ** DATABASE_URL
 */

// const { Pool } = require('pg');

// const client = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });


//TODO with MySQL
/**
 * npm install mysql2
 * .env
 ** DB_HOST
 ** DB_USER
 ** DB_PASSWORD
 ** DB_DATABASE
 */

// const mysql = require('mysql2/promise');

// const client = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

module.exports = client;