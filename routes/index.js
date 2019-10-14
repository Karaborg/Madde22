var express = require('express');
var router = express.Router();

var async = require("async");
var request = require('request');
var mongoose = require('mongoose');
var database = require('../core/database.js');
var model = require('../core/Model/model.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/btn1', function (req, res) {
  var params = req.body;
  model.create(params, function (response) {
    res.send(response)
  });
});

module.exports = router;
