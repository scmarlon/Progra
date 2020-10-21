var sql = require('mssql');
const poolConnection = require('../conection/poolConection');

exports.generateIns = async (req) => {
    try {
        //console.log("gg");
        const pool = await poolConnection.getPoolConnection(req); //crea coneccion.
        console.log("pollll");
        const result = await pool.request()
            .input('esquema',sql.VarChar(100),req.esquema)
            .execute('generacion.gen_inserts'); //sql 
        sql.close();
        return result;
    } catch (err) {
        throw err;
    }
}

exports.generateDel = async (req) => {
    try {
        //console.log("gg");
        const pool = await poolConnection.getPoolConnection(req); //crea coneccion.
        console.log("pollll");
        const result = await pool.request()
            .input('esquema',sql.VarChar(100),req.esquema)
            .execute('generacion.gen_delete'); //sql 
        sql.close();
        return result;
    } catch (err) {
        throw err;
    }
}

exports.generateRet = async (req) => {
    try {
        //console.log("gg");
        const pool = await poolConnection.getPoolConnection(req); //crea coneccion.
        console.log("pollll");
        const result = await pool.request()
            .input('esquema',sql.VarChar(100),req.esquema)
            .execute('generacion.gen_retrieve'); //sql 
        sql.close();
        return result;
    } catch (err) {
        throw err;
    }
}