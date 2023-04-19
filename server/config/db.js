require('dotenv').config()
const mysql = require('mysql2')


// const pool= mysql.createPool({
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     database:process.env.DB_NAME,
//     password:process.env.DB_PASSWORD,
// })

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "dbms_project",
    password: "1231",
})
module.exports = pool.promise()
