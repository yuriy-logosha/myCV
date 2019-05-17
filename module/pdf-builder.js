const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

var _builder = {

    build: function(res, data) {

        const defaultFontSize = 12;
        const defaultSectionFontSize = 14;
        const pageWidth = 470;
        const pageFont = 'Times-Roman';
        const boldFont = 'public/fonts/Times-Roman-Bold.ttf';

        const pageLineConfig = {width: pageWidth, align: 'justify'};
        const doc = new PDFDocument();

        doc.font(pageFont);

        doc.info.Title = data.title + ", Curriculum Vitae";
        doc.info.Subject = "Curriculum Vitae";
        doc.info.Creator = data.title;
        doc.info.Producer = data.title;
        doc.info.Keywords = "CV, Curriculum Vitae, job, resume, java, developer, web, developer, webdev, devops, software, engineer, ylogosha";

        doc.image('public/images/' + data.id + '.jpg', 75, 30, {width: 120});

        doc.fontSize(16)
            .font(boldFont)
            .text(data.title, 200, 30);

        doc.font(pageFont);

        doc.moveDown();

        doc.fontSize(defaultFontSize);

        var currentRole = data.positions[data.currentPositionIndex].role;

        doc.text(currentRole + ((!data.unbranded)?' at ' + data.companies[data.positions[data.currentPositionIndex].companyId].officialName:''));

        doc.moveDown();

        doc
            .text('Location: ' + data.address);
        doc.fontSize(5).moveDown().fontSize(defaultFontSize);

        doc
            .text('Phone: ' + data.phone)
            .text('Email: ' + data.email)
            .text('Skype: ' + data.skype);

        doc.moveDown();

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Summary', 75);
        doc.font(pageFont).fontSize(defaultFontSize).text(data.summary, pageLineConfig);

        doc.moveDown();

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Experience')
            .fontSize(defaultFontSize);

        doc.font(pageFont);
        data.positions.forEach(function(position){
            doc.font(boldFont).text(position.from + ' - ' + position.to + ((!data.unbranded)?', ' + position.role:''));

            doc.font(pageFont).text(position.description, pageLineConfig);

            doc.moveDown();
        });

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Education', 75)
            .fontSize(defaultFontSize);

        doc.font(pageFont);

        data.schools.forEach(function(school){
            doc.text(school.from + ' - ' + school.to + ', ' + school.name);
            doc.text(school.description, pageLineConfig);
            doc.moveDown();
        });

        doc.addPage();

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Projects', 75);

        doc.fontSize(3).moveDown().fontSize(defaultFontSize);

        doc.font(pageFont);

        data.projects.forEach(function(project){
            doc.font(boldFont).text(project.name).fontSize(defaultFontSize);
            doc.fontSize(3).moveDown().fontSize(defaultFontSize);

            doc.font(pageFont).text("Members: " + project.numberOfMember).fontSize(defaultFontSize);
            doc.fontSize(5).moveDown().fontSize(defaultFontSize);

            doc.font(pageFont).text(project.description, pageLineConfig);

            doc.moveDown();
        });

        doc.pipe(res);

        doc.end();

    }
};
module.exports = _builder;
