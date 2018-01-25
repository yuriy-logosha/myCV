const express = require('express');
const router = express.Router();
const data = require('../data');
const pdfBuilder = require('../module/pdf-builder');

router.route('/:id')
    .get(function (req, res) {
        const user = data.find((e) => {return e.id === req.params.id});
        const fileName = user.title + ' CV.pdf';

        res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURIComponent(fileName));
        res.contentType("application/pdf");

        pdfBuilder.build(res, user);
    });

module.exports = router;