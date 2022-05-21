var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json());

const  Sport = require('../models/sport');

router.get('/home', function(req, res, next) { 
    res.end('Welcome to You in Home Page');
});



module.exports = router;