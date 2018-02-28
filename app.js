var express = require('express');
var mustache = require('mustache');
var logger = require('morgan');
var result = mustache.render(" Hi, {{ first }} {{ last }}", {
    first: "Kvin",
    last: "Vin"
});
console.log(result);
var url = require('url');
var parsedUrl = url.parse("http://www.example.com/profile?name=barry");
var app = express();
var port = 4000 || process.env.port;

app.use(function(request, response, next){
    console.log("In comes a " +request.method + " to" +request.url);
    next();
});

app.use(logger("short"));

app.use(function(request, response, next){
    var minute = new Date().getMinutes();
    if(minute%2 == 0) {
        next();
    }else{
       // response.statusCode(403);
        //response.end("Not Authorized");
    }
});

app.listen(port, function(req,res){
    console.log('Server running at port ' +port);
    console.log('The parsed url is '+ parsedUrl.protocol + " The host is " +parsedUrl.host+ " The query you entered is " +parsedUrl.query);

});

