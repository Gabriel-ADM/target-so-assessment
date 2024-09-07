const mysql = require('mysql2');
const env = require('dotenv');

env.config();

console.log(process.env.MYSQL_PASSWORD)

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();


async function queryUsuarios() {
    try {
        const [result] = await pool.query('SELECT * FROM usuarios;');
        return result;
    } catch (err) {
        console.error(err);
    }
}

queryUsuarios(); 