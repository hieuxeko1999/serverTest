var express = require('express');
var path = require('path');
var router = express.Router();
var data = require('./data');


var api = express(); // create new server
api.use('/data/v1', router);

router.get('/:page', function(req, res, next){
    var page = parseInt(req.params.page)
    var start = page * 10;
    var end = start + 10;
    var pageData = data.slice(start, end);
    res.json(pageData);
})

api.listen(3000, function(){
    console.log("Server is listening at port 3000");
})