const express = require('express');
const router = express.Router();
const data = require('../data');
const pdfBuilder = require('../module/pdf-builder');

router.route('/:id').get(function (req, res) {
    const d = data.find((e) => {return e.id === req.params.id});
    d.unbranded = req.query.unbranded !== undefined;
    const fileName = d.title + ' CV.pdf';

    res.setHeader('Content-Disposition', 'inline; filename="' + encodeURIComponent(fileName) + '"');
    res.setHeader('Content-Type', 'application/pdf');

    pdfBuilder.buildCV(res, d);

});


router.route('/editor').get(function (req, res) {
    res.render('editor');

});

router.route('/editor').post(function (req, res) {
    const fileName = 'pdf.pdf';

    res.setHeader('Content-Disposition', 'inline; filename="' + encodeURIComponent(fileName) + '"');
    res.setHeader('Content-Type', 'application/download');


    let data = {
        title: 'Title',
        fontSize: 12,
        font: "Times-Roman",
        rows: []};

    let parsed = JSON.parse(req.body.pdf);

    let n = 0;
    parsed.ops.forEach((item, idx, arr) => {
        if(item.insert.includes('\n')) {
            let txt = item.insert.split('\n');
            if(n === 2) {
                txt.shift();
            } else {
                txt.pop();
            }
            if(arr.length - 1 === idx) {
                txt.pop();
            }

            data.rows = data.rows.concat(txt.map(el => {
                return {value: el, bold: item['attributes']?true:false};
            }));
            n = 1;
        } else {

            let row = {value: item.insert, bold: item['attributes']?true:false};
            if(arr.length - 1 > idx) {
                data.rows.push(row);
            }
            n = 2;
        }
    });

    pdfBuilder.build(res, data);

});

function processText(txt, _bold, idx, len, data) {
    let row = {value: txt, bold: _bold};
    if(arr.length - 1 > idx) {
        data.rows.push(row);
    }
}


// router.route('/').get(function (req, res) {
//     const fileName = 'pdf.pdf';
//
//     res.setHeader('Content-Disposition', 'inline; filename="' + encodeURIComponent(fileName) + '"');
//     res.setHeader('Content-Type', 'application/pdf');
//
//     let data = {
//         title: 'Title',
//         fontSize: 12,
//         font: "Times-Roman",
//         rows: [
//             {value: "Row 1", font: "", size: 12},
//             {value: "Row 2", font: "", size: 12},
//             {value: "Row 3", font: "", size: 12}
//         ]};
//
//     pdfBuilder.build(res, data);
//
// });


module.exports = router;
