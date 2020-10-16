var sql = require('mssql');
const poolConnection = require('../conection/poolConection');


exports.getPrueba = async () => {
    try {
        console.log("gg");
        const pool = await poolConnection.getPoolConnection(); //crea coneccion.
        console.log("pollll");
        const result = await pool.request()
            .execute('getMedidores'); //sql 
        sql.close();
        return result;
    } catch (err) {
        throw err;
    }
}