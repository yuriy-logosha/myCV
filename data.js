var express = require('express');

var _data = [{
    id: 'ylogosha',
    title: 'Iurii Logosha',
    currentPositionIndex: 0,
    email: 'yuriy.logosha@gmail.com',
    phone: '+371 27601993',
    skype: 'splayn',
    address: 'Riga, Latvia',
    linkedin: 'https://www.linkedin.com/in/logosha',
    summary: 'I love to develop and ship great Web and Corporate applications that delight users and do it in a polite to a team members manner.',
    positions: [
        {
            companyId: 3,
            role: 'Team Lead/Technical Lead',
            from: 'September 2014',
            to: 'Present',
            description: 'Design, develop, and configure software systems to meet market and/or client requirements either end-to-end' +
            ' from analysis, design, implementation, quality assurance (including testing), to delivery and maintenance' +
            ' of the software product or system or for a specific phase of the lifecycle.' +
            ' Apply knowledge of technologies,' +
            ' applications, methodologies, processes and tools to support a client, project or entity.\n' +
            'Tools: AWS, GIT, Idea, Spring, JavaScript, jQuery, Maven, Docker, TDD, BDD, Unit and integration tests.' +
            ' Jenkins. Apache Tomcat, Jetty, Jboss, Liferay, NPM, Node.JS, ReactJS, Bower, Karma, Cucumber, nginx.'
        },
        {
            companyId: 2,
            role: 'Technical Lead, Java Expert',
            from: 'July 2013',
            to: 'September 2014',
            description: 'Engaged in architectural objectives of the project. ' +
            'Provide architecture overview. Present solutions and POCs. ' +
            'Translate business requirements into functional requirements documentation. ' +
            'Plan team work. Split business requirements into epics. ' +
            'Estimate stories.' +
            'Build development and delivery processes. ' +
            'Design API and Facade layers, services layer. ' +
            'Design project structure and maven dependency. ' +
            'Build required diagrams like behavioral, dependency diagrams and relational, and entity diagrams. ' +
            'Write code using Java. Write JSPs, Servlets and design page hierarchy. \n' +
            'Used technologies: Spring MVC, Core, JavaScript, jQuery, Angular. Google Apps API. ' +
            'Write and maintain code documentation. ' +
            'SonarQube for track code and security quality. ' +
            'Maven for automate builds.'
        },{
            companyId: 2,
            role: 'Business Solutions Architect, Java Developer',
            from: 'September 2012',
            to: 'July 2013',
            description: 'Together with clients discuss future application and process. ' +
            'Deliver solution in an Agile way and short terms. ' +
            'Design a solution. Build a class diagram and dependency diagram. ' +
            'Develop Tomcat based Java solutions.\n' +
            'Tools: Spring MVC, Spring Core, Spring Security. Java, Servlets, JavaScript, jQuery, Bootstrap. Google Apps API. ' +
            'Write and maintain code documentation.'
        },{
            companyId: 2,
            role: 'Java Developer',
            from: 'January 2011',
            to: 'September 2012',
            description: 'Develop UI elements and pages using latest HTML/CSS technologies. '+
            'Migrate the user interface and UX from plain JavaScript & HTML/CSS to modern framework ExtJS4. ' +
            'Migrate legacy solution from Java 5 to Java 6.'+
            'Reorganize JSP structure and JavaScript.\n' +
            'Cover with UI unit and module tests.\n' +
            'Tools: ' +
            'Java, JSP, JavaScript, ExtJS, JSON, AJAX, HTML, CSS, XML. ' +
            'Struts, Spring MVC, Hibernate, Ant. JBoss, Apache Tomcat. Oracle DB. Eclipse. Perforce.'
        },{
            companyId: 0,
            role: 'Software Engineer',
            from: 'January 2006',
            to: 'January 2011',
            description: 'Develop software using Java 5 and 6 versions. ' +
            'Build user forms using Misrosoft Visual FoxPro 6, 7 and 9 versions. ' +
            'Write queries to Sybase database T-SQL language. ' +
            'Automation of activity of commercial and contractual department. ' +
            'Database development: DDL. Database Design/Modeling (Power Designer). ' +
            'Build UI elements and user experience (front-end with DML). \n' +
            'Tools: ' +
            'Java, HTML, Servlets, HTML, CSS, SQL, XML, JSON, nginx. Oracle, Sybase, DB2'
        }
    ],
    companies: [{
        companyId: 0,
        officialName: 'Sea Trade Port of Yuzhny, Ukraine',
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
            officialName: 'Accenture Inc, Latvijas Filiale, Riga',
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
            graduationLevel: 'Barchelor\'s degree +, EQ Level 6',
            url: 'http://opu.ua/eng',
            logo: 'http://opu.ua/images/logo4.png'
        },
        {
            name: 'Odessa National Maritime University',
            from: 'September 2006',
            to: 'Jun 2008',
            graduationLevel: 'Master\'s degree, EQF Level 7',
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
            logo: '/images/safe.png'
        }
    ],
    patents: [
        {
            title: 'System, method, and software program product for enabling users to create and use rule patterns to generate custom product-configuration rules',
            issued: 'Issued Feb 24, 2015',
            url: 'http://www.google.com/patents/US8965831?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNfZbVj7BR8CHqFWn9PEnxA%3D%3D'
        }
    ],
    projects: [
        {
            name: 'Global Fraud Monitoring and Prevention',
            numberOfMember: 6,
            role: 'Back-End Java Developer, Full-Stack Developer',
            description: 'Banking IT security services. Base on Kafka services to prevent fraud user activities. ' +
                'System contains many internal subsystems. One of processes retrieve data from hBase and using needed ' +
                'isolation levels transform into convenient format and send to analysis system.\n' +
                'Kafka with it\'s topics in a center of big picture. Application shoud be fully configurable and should ' +
                'be able to work asynchronously with its nodes but should avoid data duplication. \n' +
                'Team located an several locations support Agile principles and follow SAFe practices. \n' +
                'Project released several times and successfully working on Production. \n' +
                'For support continuously build and deploy the app, configured Jenkins with pipelines plugin. \n' +
                'Application written on Java using Apache Camel. And wrapped with Spring Boot. \n' +
                'Deployment process separated for several common for other connected projects steps. ' +
                'And contains steps: Build, make RPM, deploy, install, configure as a service, run and validate.'
        },
        {
            name: 'Banking Contract Management for Private Customers',
            numberOfMember: 7,
            role: 'Full-Stack Developer',
            description: 'Service to help user register an organization and organization members as an agreement with the Bank. And be able manipulate with an accesses and permissions. Synchronize inputted data with third party system.'
        },
        {
            name: 'Claims Organizing',
            numberOfMember: 6,
            role: 'Full-Stack Developer',
            description: 'Service for internal use. Placed on a corporate Liferay portal using portlets. ' +
                'Clerks wants to see Mainfraim (COBOL) data organised in a way they provided. ' +
                'The system needs to stay connected to Mainfraim and be able to retrieve and filter data ' +
                'and met acceptance criteria for performance and UX. Users wants to be able to filter out some data.' +
                'Application written on Java for JBoss.'
        },
        {
            name: 'Rapid Configuration Framework',
            numberOfMember: 4,
            role: 'Java Developer',
            description: 'Some systems needs to be configured automatically. ' +
                'The program should be able to generate configuration according to rules. The program should be started as a CLI application but should also support WEB interface UI. '
        },
        {
            name: 'Contract Lifecycle Management',
            numberOfMember: 6,
            role: 'UI Developer',
            description: 'Develop UI components and pages using Java, HTML, CSS and Javascript. \n' +
                'Migrate old legacy code to a modern MVC framework. \n'
        },
        {
            name: 'Corporate Contract Management',
            numberOfMember: 4,
            role: 'Software Engineer',
            description: 'The system should be able in a very fast manner give users ability to save clients data in a defined format. The format provided by Users defined in specification. ' +
                'The application should be able to generate documents for signature. UI should be user friendly.'
        }
    ]
},
    {
        id: 'klogosha',
        title: 'Kateryna Logosha',
        email: 'kateryna.logosha@gmail.com',
        phone: '+371',
        skype: 'katerina.skvorcova',
        address: 'Riga, Latvia',
        linkedin: '',
        summary: 'I...',
        schools: [
            {
                name: 'Odessa National Polytechnic University',
                from: 'September 2003',
                to: 'Jun 2007',
                graduationLevel: 'Barchelor\'s degree +, EQ Level 6',
                url: 'http://opu.ua/eng',
                logo: 'http://opu.ua/images/logo4.png'
            }
        ]
    }
];

module.exports = _data;