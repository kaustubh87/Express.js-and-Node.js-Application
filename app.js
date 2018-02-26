var express = require('express');
var mustache = require('mustache');
var result = mustache.render(" Hi, {{ first }} {{ last }}", {
    first: "Kvin",
    last: "Vin"
});
console.log(result);
var url = require('url');
var parsedUrl = url.parse("http://www.example.com/profile?name=barry");
var app = express();
var port = 4000 || process.env.port;

app.listen(port, function(req,res){
    console.log('Server running at port ' +port);
    console.log('The parsed url is '+ parsedUrl.protocol + " The host is " +parsedUrl.host+ " The query you entered is " +parsedUrl.query);

});