var express = require('express');
var PDFDocument = require('pdfkit');
var router = express.Router();
var data = require('../data');
var fs = require('fs');
const os = require('os');

router.get('/', function (req, res, next) {
    const filePath = os.tmpdir() + '/';
    const fileName = 'Iurii Logosha CV.pdf';

    var doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath + fileName));

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);

    doc.pipe(res);

    doc.image('public/' + data.image, 75, 30, {width: 120});

    doc.fontSize(16)
        .text(data.title, 200, 30);

    doc.moveDown();

    doc.fontSize(10);
    doc.text(data.positions[data.currentPositionIndex].role + ' at ' + data.companies[data.positions[data.currentPositionIndex].companyId].officialName);

    doc.moveDown();

    doc.text(data.phone)
        .text(data.email);

    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.moveDown();

    doc.fontSize(14).text('Summary', 75)
    .fontSize(12).text(data.summary, 90);

    doc.moveDown();

    doc.fontSize(14).text('Experience', 75)

    .fontSize(12);

    data.positions.forEach(function(position){
        doc.text(position.from + ' - ' + position.to + ', ' + position.role, 90)
            .text(position.description, 90);
        doc.moveDown();
    })
    doc.fontSize(14).text('Education', 75)
        .fontSize(12);
    data.schools.forEach(function(school){
        doc.text(school.from + ' - ' + school.to + ', ' + school.name, 90);
        doc.moveDown();
    })

    doc.end();



});

module.exports = router;
