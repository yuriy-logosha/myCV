const express = require('express');
const router = express.Router();
const data = require('../data');
const pdfBuilder = require('../module/pdf-builder');
const os = require('os');

router.get('/', function (req, res, next) {
    const filePath = os.tmpdir() + '/';
    const fileName = data.title + ' CV.pdf';

    res.setHeader('Content-Disposition', 'inline; filename="' + encodeURIComponent(fileName) + '"');
    res.contentType("application/pdf");
    pdfBuilder.build(res, data, filePath, fileName);

});

module.exports = router;
