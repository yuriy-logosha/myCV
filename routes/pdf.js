const express = require('express');
const router = express.Router();
const data = require('../data');
const pdfBuilder = require('../module/pdf-builder');

router.get('/', function (req, res, next) {
    const user = data.find((e)=>{return e.id = "ylogosha"});
    const fileName = user.title + ' CV.pdf';

    res.setHeader('Content-Disposition', 'inline; filename="' + encodeURIComponent(fileName) + '"');
    res.setHeader('Content-Type', 'application/pdf');

    pdfBuilder.build(res, user);

});

module.exports = router;
