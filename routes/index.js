var express = require('express');
var data = require('../data');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', data.find((e)=>{return e.id = "ylogosha"}));
});

module.exports = router;
