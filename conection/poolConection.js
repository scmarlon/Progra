const sql = require('mssql');
var sqlconfig = require('./config');
let dbConnPool = null;

const getPoolConnection = () => {
    console.log("ifff");
    if (dbConnPool) return dbConnPool;
    console.log("entro");
    dbConnPool = new Promise((resolve, reject) => {
        const conn = new sql.ConnectionPool(sqlconfig);
        conn.on('close', () => {
            dbConnPool = null;
        });
        conn.connect()
            .then(pool => {
                console.log("SQL connected.");
                return resolve(pool);
            })
            .catch(err => {
                dbConnPool = null;
                return reject(err);
            });
    });
    return dbConnPool;
}
module.exports = { sql, getPoolConnection };