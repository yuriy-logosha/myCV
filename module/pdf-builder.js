const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

var _builder = {

    build: function(res, data) {

        const defaultFontSize = 12;
        const defaultSectionFontSize = 14;
        const pageWidth = 470;
        const defaultFont = 'Times-Roman';
        const boldFont = 'public/fonts/Times-Roman-Bold.ttf';

        const pageLineConfig = {width: pageWidth, align: 'justify'};
        const doc = new PDFDocument();

        // doc.on('pageAdded', () =>
        //     //Add page number to the bottom of the every page
        //     doc.fontSize(18).fillColor('deeppink')
        //         .text("10", 10, 10));

        doc.font(defaultFont);

        doc.info.Title = data['title'] || "";
        doc.info.Subject = data['subject'] || "";
        doc.info.Creator = data['creator'] || "";
        doc.info.Producer = data['producer'] || "";
        doc.info.Keywords = data['keywords'] || "";


        // data.rows.forEach(
        //     row => {
        //         doc
        //             .fontSize(row['size'] || data['fontSize'] || defaultFontSize)
        //             .font(row['bold']?boldFont:(row['font'] || defaultFont))
        //             .text(row['value'] + '\n' || "");
        //     //doc.moveDown();
        //     }
        // );

        doc.pipe(res);

        doc.end();
    },

    buildCV: function(res, data) {

        const defaultFontSize = 14;
        const defaultSectionFontSize = 15;
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

        doc.image('public/images/' + data.id + '.jpg', 75, 30, {width: 135});

        doc.fontSize(18)
            .font(boldFont)
            .text(data.title, 220, 30);

        doc.font(pageFont).fontSize(defaultFontSize);

        doc.moveDown();

        doc.font(pageFont).fontSize(defaultFontSize);

        var currentRole = data.positions[data.currentPositionIndex].role;

        doc.text(currentRole + ((!data.unbranded)?' at ' + data.companies[data.positions[data.currentPositionIndex].companyId].officialName:''));

        doc.moveDown();

        doc.text('Location: ' + data.address);
        doc.fontSize(5).moveDown().fontSize(defaultFontSize);

        doc
            .text('Phone: ' + data.phone)
            .text('Email: ' + data.email)
            .text('Skype: ' + data.skype);

        doc.moveDown();

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Summary', 75);

        doc.font(pageFont).fontSize(defaultFontSize);

        doc.moveDown();

        doc.font(pageFont).fontSize(defaultFontSize).text(data.summary, pageLineConfig);

        doc.moveDown();

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Experience');

        doc.font(pageFont).fontSize(defaultFontSize);

        doc.moveDown();

        doc.font(pageFont).fontSize(defaultFontSize);
        data.positions.forEach(function(position){
            doc.font(boldFont).text(position.from + ' - ' + position.to + ', ' + position.role +((!data.unbranded)?' at ' + data.companies[data.positions[data.currentPositionIndex].companyId].officialName:''));
            doc.moveDown();
            doc.font(pageFont).text(position.description, pageLineConfig);

            doc.moveDown();
        });

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Education');

        doc.font(pageFont).fontSize(defaultFontSize);

        doc.moveDown();

        doc.font(pageFont).fontSize(defaultFontSize);

        data.schools.forEach(function(school){
            doc.text(school.from + ' - ' + school.to + ', ' + school.name);
            doc.text(school.graduationLevel, pageLineConfig);
            doc.moveDown();
        });

        doc.addPage();

        doc.font(boldFont)
            .fontSize(defaultSectionFontSize)
            .text('Projects', 75);

        doc.font(pageFont).fontSize(defaultFontSize);

        doc.moveDown();

        doc.font(pageFont);

        data.projects.forEach(function(project){
            doc.font(boldFont).text(project.name).fontSize(defaultFontSize);
            doc.fontSize(3).moveDown().fontSize(defaultFontSize);
            doc.font(boldFont).text(data.companies[project.companyId].officialName + ', ' + project.from + ' - ' + project.to + ', ' + project.describedPeriod).fontSize(defaultFontSize);
            doc.fontSize(3).moveDown().fontSize(defaultFontSize);

            doc.font(pageFont).text("Members: " + project.numberOfMember).fontSize(defaultFontSize);
            doc.fontSize(5).moveDown().fontSize(defaultFontSize);

            doc.font(pageFont).text("Role: " + project.role).fontSize(defaultFontSize);
            doc.fontSize(5).moveDown().fontSize(defaultFontSize);

            doc.font(pageFont).text(project.description, pageLineConfig);

            doc.moveDown();
        });

        // const range = doc.bufferedPageRange(); // => { start: 0, count: 2 }
        // for (i = range.start, end = range.start + range.count, range.start <= end; i < end; i++) {
        //     doc.switchToPage(i);
        //     doc.text(`Page ${i + 1} of ${range.count}`);
        // }


        doc.pipe(res);

        doc.end();
    }
};
module.exports = _builder;
