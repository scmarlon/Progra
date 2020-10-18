var express = require('express');
var router = express.Router();
var testQuery = require('../manager/testQuery');

router.post('/getTest', (req, res) => {
    try {
        console.log(req.body);
        
        testQuery.getPrueba(req.body).then(result=>{
            
            res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo

        }).catch(err=>{
            res.send(err);
        });

    } catch (err) {
    
        res.send({ response:{data:err}, code: 406 });
    }
});

router.get('/getNombre', (req, res) => {
    try {
        //console.log es como un print
        
        testQuery.getNombre().then(result=>{
            
            res.send(result); //cuando es un get en ".query" y .body espara las demas para el post ejemplo

        }).catch(err=>{
            res.send(err);
        });

    } catch (err) {
    
        res.send({ response:{data:err}, code: 406 });
    }
});

module.exports = router;
