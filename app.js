var express = require('express');
var url = require('url');
var app = express();
var port = 4000 || process.env.port;

app.listen(port, function(req,res){
    console.log('Server running at port ' +port);
});