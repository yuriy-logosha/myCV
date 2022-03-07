const express = require('express');
const fs = require('fs');

const PizZip = require("pizzip");
const stream = require("stream");
const Docxtemplater = require("docxtemplater");


const path = require("path");

// Load the docx file as binary content
const content = fs.readFileSync(
    path.resolve(__dirname, "../public/d-vizas-anketa_2022_lv-ru.docx"),
    "binary"
);

const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

class DOCDocument extends stream.Readable {
    _read() {} // do nothing, but this method is required by node

}

var _builder = {

    render: function(res, data) {

        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        doc.render(data);

        const buf = doc.getZip().generate({
            type: "nodebuffer",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });

        const s = new DOCDocument();

        s.pipe(res);
        s.push(buf);
        s.push(null);

    }
};

module.exports = _builder;
