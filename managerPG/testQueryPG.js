const {Client}  =  require('pg');

var pgconfig = require('../conection/conectPG');


exports.getPruebapg = async (req) => {
    try {
        
        const client = new Client(pgconfig);

        client.connect()
        .then(() => console.log("CONECTADO CORRECTAMENTE"))
        .then(()=>client.query("select nombre()"))
        .then(results =>{
            console.table(results.rows)
            return results;
        })
        .catch(e => console.log(e))
        .finally(() => client.end())

    } catch (err) {
        throw err;
    }
}