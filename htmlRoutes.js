var express = require('express');
var app = express();
var path = require('path');

module.exports = {
    home: function(app) {
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, "/index.html"));
        })
    }
}