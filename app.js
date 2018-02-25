var express = require('express');
var url = require('url');
var parsedUrl = url.parse("http://www.example.com/profile?name=barry");
var app = express();
var port = 4000 || process.env.port;

app.listen(port, function(req,res){
    console.log('Server running at port ' +port);
    console.log('The parsed url is '+ parsedUrl.protocol + " The host is " +parsedUrl.host+ " The query you entered is " +parsedUrl.query);

});