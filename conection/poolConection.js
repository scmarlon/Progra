const sql = require('mssql');
var sqlconfig = require('./config');


let dbConnPool = null;

const getPoolConnection = (req) => {
    
    if (dbConnPool) return dbConnPool;

        sqlconfig.database= req.BD;
        sqlconfig.password= req.clave;
        sqlconfig.user= req.usuario;
        sqlconfig.server = req.servidor;
    
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