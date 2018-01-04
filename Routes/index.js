var express = require('express');
var bodyParser = require('body-parser');

function Routes(app) {
  app.use('/', express.static('./public/'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  app.get('/', function(req,res) {
    res.render('index');
  });
}

module.exports = Routes;