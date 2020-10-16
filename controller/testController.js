var express = require('express');
var router = express.Router();

router.get('/getTest', (req, res) => {
    try {
        //console.log es como un print
        console.log("Hola mundo");
        
        /** 
        reservationQuery.getActiveOrganizers(req.body)
            .then(result => {
                let response = {
                    data: result.recordset
                };
                res.send({response, code: 200 });
            })
            .catch(err => {
                res.send({ response:{data:err}, code: 406 });
            })*/
    } catch (err) {
        res.send({ response:{data:err}, code: 406 });
    }
});

module.exports = router;
