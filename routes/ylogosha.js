var express = require('express');
var data = require('../data');
var router = express.Router();

router.get('/', function (req, res, next) {
    user = data.find((e) => {return e.id = "ylogosha"});
    user.unbranded = req.query.unbranded !== undefined;
    res.render('index', user);
});

module.exports = router;
