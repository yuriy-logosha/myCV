var express = require('express');
var data = require('../data');
var router = express.Router();

router.route('/:id')
    .get(function (req, res) {
        res.render('index', data.find((e) => {return e.id === req.params.id}));
    });

module.exports = router;