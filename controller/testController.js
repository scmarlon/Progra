var express = require('express');
var router = express.Router();
var testQuery = require('../manager/testQuery');

router.get('/getTest', (req, res) => {
    try {
        //console.log es como un print
        
        testQuery.getPrueba().then(result=>{
            
            res.send(result); //cuandoes un get en ".query" y .body espara las demas para el post ejemplo

        }).catch(err=>{
            res.send(err);
        });

    } catch (err) {
    
        res.send({ response:{data:err}, code: 406 });
    }
});

module.exports = router;
