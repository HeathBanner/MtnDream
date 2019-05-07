var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var routes = require('./htmlRoutes');

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

routes.home(app);

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});