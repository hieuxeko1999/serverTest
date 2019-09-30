var express = require('express');
var path = require('path');
var router = express.Router();
var data = require('./data');


var api = express(); // create new server
api.use('/data/v1', router);
var cardInPage = 12;
router.get('/:page', function(req, res, next){
    var page = parseInt(req.params.page) - 1;
    page = (page < 0) ? 0:page;
    
    var start = page * cardInPage;  
    var end = start + cardInPage;
    var pageData = data.slice(start, end);
    res.json(pageData);
})


api.get('/home', function(req, res, next){
    var pathFile = path.join(__dirname, "template.html");
    res.sendFile(pathFile)
})

api.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening at port 3000");
})