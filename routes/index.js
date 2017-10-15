var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',
        {
            image: '/images/my-picture.jpg',
            title: 'Iurii Logosha',
            currentPositionIndex: 0,
            email: 'yuriy.logosha@gmail.com',
            phone: '+371 27601993',
            linkedin: 'https://www.linkedin.com/in/logosha',
            summary: 'I love to develop & ship great Web applications that delight users.',
            positions: [
                {
                    company: 'Accenture',
                    role: 'Team Lead/Technical Lead',
                    from: 'September 2014',
                    to: 'Present',
                    description: 'Design, develop, and configure software systems to meet market and/or client requirements either end-to-end\n' +
                    ' from analysis, design, implementation, quality assurance (including testing), to delivery and maintenance\n' +
                    ' of the software product or system or for a specific phase of the lifecycle. Apply knowledge of technologies,\n' +
                    ' applications, methodologies, processes and tools to support a client, project or entity.'
                },
                {
                    company: 'Selectica/Determine',
                    role: 'Technical Lead',
                    from: 'July 2013',
                    to: 'September 2014',
                    description: 'Engaged in architectural objectives of the project.\n' +
                    'Building a class diagram and dependency diagram.\n' +
                    'Held meetings with the team.\n' +
                    'Coded in Java. Making JSP. Using Spring MVC, Core. Coding on JavaScript, jQuery. Using Google Apps\n' +
                    ' API.\n' +
                    'Created code documentation, Wiki pages.'
                },{
                    company: 'Selectica/Determine',
                    role: 'Business Solutions Architect',
                    from: 'September 2012',
                    to: 'July 2013',
                    description: 'Engaged in architectural objectives of the project.\n' +
                    'Building a class diagram and dependency diagram.\n' +
                    'Held meetings with the team.\n' +
                    'Coded in Java. Making JSP. Using Spring MVC, Core. Coding on JavaScript, jQuery. Using Google Apps\n' +
                    ' API.\n' +
                    'Created code documentation, Wiki pages.'
                },{
                    company: 'Provectus, Inc',
                    role: 'Java Developer',
                    from: 'January 2011',
                    to: 'September 2012',
                    description: 'Developing UI elements. Migrating the user interface from JavaScript and HTML to ExtJS4.\n' +
                    'Bug hunting/fixing. Refactoring.\n' +
                    'Used technologies:\n' +
                    'Java, JSP, JavaScript, ExtJS, JSON, AJAX, HTML, CSS, XML.\n' +
                    'Page 2\n' +
                    'Struts, Spring MVC, Hibernate, Ant. JBoss, Tomcat. Oracle. Eclipse.'
                },{
                    company: 'Sea Traid Port of Yuzhny',
                    role: 'Software Engineer',
                    from: 'January 2006',
                    to: 'January 2011',
                    description: 'Software development using Java, Visual FoxPro, Sybase, T-SQL.\n' +
                    'Automation of activity of commercial and contractual department.\n' +
                    'Database development: DDL. Database Design/Modeling (Power Designer). Building UI (front-end with\n' +
                    ' DML).'
                }
            ],
            schools: [
                {
                    name: 'Odessa National Polytechnic University',
                    from: 'September 2000',
                    to: 'Jun 2005',
                    graduationLevel: 'Specialist',
                    url: 'http://opu.ua/eng',
                    logo: 'http://opu.ua/images/logo4.png'
                }
            ],
            certificates: [
                {
                    title: 'Oracle Certified Associate, Java SE 8 Programmer',
                    issued: '10 Aug 2017',
                    url: 'https://www.youracclaim.com/badges/de3d4e6b-59fd-49d2-a2af-8ccff7c40cf6',
                    logo: '/images/Oracle-Certification-badge_OC-Associate.png'
                }
            ]



        });
});

module.exports = router;
