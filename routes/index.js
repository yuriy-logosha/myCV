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
                    companyId: 3,
                    role: 'Team Lead/Technical Lead',
                    from: 'September 2014',
                    to: 'Present',
                    description: 'Design, develop, and configure software systems to meet market and/or client requirements either end-to-end\n' +
                    ' from analysis, design, implementation, quality assurance (including testing), to delivery and maintenance\n' +
                    ' of the software product or system or for a specific phase of the lifecycle.\n' +
                    ' Apply knowledge of technologies,\n' +
                    ' applications, methodologies, processes and tools to support a client, project or entity.'
                },
                {
                    companyId: 2,
                    role: 'Technical Lead, Java Expert',
                    from: 'July 2013',
                    to: 'September 2014',
                    description: 'Engaged in architectural objectives of the project.\n' +
                    'Building a class diagram and dependency diagram.\n' +
                    'Held meetings with the team.\n' +
                    'Coded in Java. Making JSP. Using Spring MVC, Core. Coding on JavaScript, jQuery. Using Google Apps\n' +
                    ' API.\n' +
                    'Created code and project documentation.'
                },{
                    companyId: 2,
                    role: 'Business Solutions Architect, Java Developer',
                    from: 'September 2012',
                    to: 'July 2013',
                    description: 'Together with clients discuss future application and process.\n' +
                        'Deliver solution in an Agile way and short terms.\n' +
                    'Design a solution. Build a class diagram and dependency diagram.\n' +
                    'Held meetings with the team.\n' +
                    'Develop Tomcat based Java solutions. UI pages written on JSP. Use Spring MVC, Core, Security. JavaScript, jQuery. Google Apps\n' +
                    ' API.\n' +
                    'Created code documentation.'
                },{
                    companyId: 2,
                    role: 'Java Developer',
                    from: 'January 2011',
                    to: 'September 2012',
                    description: 'Develop UI elements and pages using latest HTML/CSS technologies.\n'+
                    'Migrate the user interface from plain JavaScript + HTML to modern framework ExtJS4.\n' +
                    'Cover with UI unit and module tests.\n' +
                    'Used technologies:\n' +
                    'Java, JSP, JavaScript, ExtJS, JSON, AJAX, HTML, CSS, XML.\n' +
                    'Page 2\n' +
                    'Struts, Spring MVC, Hibernate, Ant. JBoss, Tomcat. Oracle. Eclipse.'
                },{
                    companyId: 0,
                    role: 'Software Engineer',
                    from: 'January 2006',
                    to: 'January 2011',
                    description: 'Software development using Java 5 and 6 version, Misrosoft Visual FoxPro 6 to 9, Sybase, T-SQL.\n' +
                    'Automation of activity of commercial and contractual department.\n' +
                    'Database development: DDL. Database Design/Modeling (Power Designer). Building UI (front-end with\n' +
                    ' DML).'
                }
            ],
            companies: [{
                companyId: 0,
                officialName: 'Port of Yuzhny, Ukraine',
                contactDetails: {
                    website: 'http://www.port.yuzhny.odessa.ua',
                    email: 'webmaster@port.yuzhny.odessa.ua',
                    phone: '+380 48 7507582'
                }
            },
                {
                    companyId: 1,
                    officialName: 'Provectus, Inc',
                    contactDetails: {
                        website: '',
                        email: '',
                        phone: ''
                    }
                },
                {
                    companyId: 2,
                    officialName: 'Selectica/Determine, Inc., CA',
                    contactDetails: {
                        website: 'www.determine.com',
                        email: '',
                        phone: ''
                    }
                },
                {
                    companyId: 3,
                    officialName: 'Accenture, Inc., Latvijas Filiale, Riga',
                    contactDetails: {
                        website: 'https://www.accenture.com/lv-en',
                        email: '',
                        phone: '+67019700'
                    }
                }],
            schools: [
                {
                    name: 'Odessa National Polytechnic University',
                    from: 'September 2000',
                    to: 'Jun 2005',
                    graduationLevel: 'Barchelor`s degree +, EQ Level 6',
                    url: 'http://opu.ua/eng',
                    logo: 'http://opu.ua/images/logo4.png'
                },
                {
                    name: 'Odessa National Maritime University',
                    from: 'September 2006',
                    to: 'Jun 2008',
                    graduationLevel: 'Master`s degree, EQF Level 7',
                    url: 'http://www.osmu.odessa.ua/en',
                    logo: 'http://www.osmu.odessa.ua/images/logo_2.jpg'
                }
            ],
            certificates: [
                {
                    title: 'Oracle Certified Associate, Java SE 8 Programmer',
                    issued: '10 Aug 2017',
                    url: 'https://www.youracclaim.com/badges/de3d4e6b-59fd-49d2-a2af-8ccff7c40cf6',
                    logo: '/images/Oracle-Certification-badge_OC-Associate.png'
                },
                {
                    title: 'Scaled Agile Framework® Practitioner (SP) Certification Program',
                    issued: 'Dec 2015',
                    url: 'https://www.linkedin.com/company/2434776/',
                    logo: 'https://media.licdn.com/mpr/mpr/shrink_100_100/p/7/005/049/1fa/0c368ff.png'
                }
            ],
            patents: [
                {
                    title: 'System, method, and software program product for enabling users to create and use rule patterns to generate custom product-configuration rules',
                    issued: 'Issued Feb 24, 2015',
                    url: 'http://www.google.com/patents/US8965831?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNfZbVj7BR8CHqFWn9PEnxA%3D%3D'
                }
            ]



        });
});

module.exports = router;
