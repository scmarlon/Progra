var express = require('express');
var router = express.Router();
var generateQuery = require('../manager/generateQuery');
var generateQueryPG = require('../managerPG/generateQueryPG');


router.post('/inserts', (req, res) => {
    try {
        console.log(req.body);

        if(req.body.tipo == 'mssql'){
            generateQuery.generateIns(req.body).then(result=>{
            
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo
    
            }).catch(err=>{
                res.send(err);
            });
        }
        else{
            generateQueryPG.generateIns(req.body).then(result=>{
            
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo
    
            }).catch(err=>{
                res.send(err);
            });
        }
        
        

    } catch (err) {
    
        res.send({ response:{data:err}, code: 406 });
    }
});

router.post('/delete', (req, res) => {
    try {
        console.log(req.body);

        if(req.body.tipo == 'mssql'){
        
            generateQuery.generateDel(req.body).then(result=>{
                
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo

            }).catch(err=>{
                res.send(err);
            });
        }
        else{
            generateQueryPG.generateDel(req.body).then(result=>{
            
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo
    
            }).catch(err=>{
                res.send(err);
            });
        }

    } catch (err) {
    
        res.send({ response:{data:err}, code: 406 });
    }
});

router.post('/retrieve', (req, res) => {
    try {
        console.log(req.body);
        
        if(req.body.tipo == 'mssql'){
            generateQuery.generateRet(req.body).then(result=>{
                
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo

            }).catch(err=>{
                res.send(err);
            });
        }
        else{
            generateQueryPG.generateRet(req.body).then(result=>{
            
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo
    
            }).catch(err=>{
                res.send(err);
            });
        }

    } catch (err) {
    
        res.send({ response:{data:err}, code: 406 });
    }
});


router.post('/update', (req, res) => {
    try {
        console.log(req.body);
        
        if(req.body.tipo == 'mssql'){
            generateQuery.generateUpd(req.body).then(result=>{
                
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo

            }).catch(err=>{
                res.send(err);
            });
        }
        else{
            generateQueryPG.generateUpd(req.body).then(result=>{
            
                res.send(result.recordset); //cuando es un get en ".query" y .body espara las demas para el post ejemplo
    
            }).catch(err=>{
                res.send(err);
            });
        }

    } catch (err) {
    
        res.send({ response:{data:err}, code: 406 });
    }
});
module.exports = router;