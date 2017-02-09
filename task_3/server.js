var express = require('express');
var app = express();

app.use(express.static('./'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/get1', function (req, res) {
   // Prepare output in JSON format
   response = "some text 1";
   res.end(JSON.stringify(response));
})

app.get('/get2', function (req, res) {
   // Prepare output in JSON format
   response = "some text 2";
   res.end(JSON.stringify(response));
})

app.get('/get3', function (req, res) {
   // Prepare output in JSON format
   response = "some text 3";
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("http://127.0.0.1:8081/index.htm");

})