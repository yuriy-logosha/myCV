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
    summary: 'I love to develop and ship great applications that delight customers.',
    positions: [
        {
            companyId: 3,
            role: 'Team Lead, Technical Lead',
            from: 'September 2014',
            to: 'Present',
            description: 'Design, develop and configure software systems to meet market and/or client requirements either end-to-end' +
            ' from analysis, design, implementation, quality assurance (including testing), to delivery and maintenance' +
            ' of the software product or system or for a specific phase of the lifecycle.' +
            ' Apply knowledge of technologies,' +
            ' applications, methodologies, processes and tools to support a client, project or entity.\n\n' +
            'Tools: Java, Apache Kafka, AWS, GIT, Spring, Spring Boot, Spring Data, JavaScript, jQuery, Maven, Docker, TDD, BDD, Unit and Automation tests.' +
            ' Jenkins. Apache Tomcat, Jetty, Jboss, Liferay, Node.JS, ReactJS, Bower, Karma, Cucumber.'
        },
        {
            companyId: 2,
            role: 'Technical Lead, Java Expert',
            from: 'July 2013',
            to: 'September 2014',
            description: 'Engaged in architectural objectives of the project. ' +
            'Provided architecture overview. Presented "to-be" design solutions and POCs. ' +
            'Translate business requirements into functional requirements documentation. ' +
            'Plan team work. Split business requirements into epics. ' +
            'Estimate stories. ' +
            'Build development and delivery processes. ' +
            'Design API and Facade layers, services layer. ' +
            'Design project structure and maven dependency. ' +
            'Describe solutions with required diagrams: behavioral, dependency, relational and entity diagrams. ' +
            'Write clean and powerful code using Java. Write JSPs, Servlets and design page hierarchy. \n\n' +
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
            'Develop Tomcat based Java solutions.\n\n' +
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
            'Cover with UI unit and module tests.\n\n' +
            'Tools: ' +
            'Java, JSP, JavaScript, ExtJS, JSON, AJAX, HTML, CSS, XML. ' +
            'Struts, Spring MVC, Hibernate, Ant. JBoss, Apache Tomcat. Oracle DB. Eclipse. Perforce.'
        },{
            companyId: 0,
            role: 'Software Engineer',
            from: 'January 2006',
            to: 'January 2011',
            description: 'Develop software using Java 5 and 6 versions. \n' +
            'Build user forms using Misrosoft Visual FoxPro 6, 7 and 9 versions. ' +
            'Write queries to Sybase database T-SQL language. ' +
            'Automation of activity of commercial and contractual department. ' +
            'Database development: DDL. ' +
            'Database Design. Modeling with Power Designer. ' +
            'Build reach UI elements. Sutisfy client with properly working software. \n\n' +
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
            officialName: 'Selectica\\Determine Inc, CA',
            contactDetails: {
                website: 'www.determine.com',
                email: '',
                phone: ''
            }
        },
        {
            companyId: 3,
            officialName: 'Accenture Inc, Riga',
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
            graduationLevel: 'Barchelor\'s degree +, EQF Level 6',
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
            name: 'Ericsson, Sweeden. Basic User Identity',
            sphere: 'Telecommunication, Security',
            companyId: 3,
            from: 'September 2018',
            to: 'now',
            describedPeriod: '3 months',
            numberOfMember: 8,
            role: 'Full-Stack Developer, Java Expert, Test Automation SME',
            description: 'When several UI applications using same backend, it needs to identify users making requests. ' +
                'Client has many distributed system\\services that uses the same single app for identify users. ' +
                'OpenIDM solution provide necessary tools to give that flexibility, ' +
                'but it needs to be properly configured and has to be able synchronize data from different LDAP sources in proper moment. Also, caring about security, data ' +
                'needs to be protected from outside. The system needs to be highly available for as external services always require it. \n\n' +
                'Technologies\\Tools: Java 7, 8, Python, Groovy. \n' +
                'State: In Production, maintainability pending'
        },
        {
            name: 'Telenor, Norway, Oslo. Customer Orders System',
            sphere: 'Telecommunication',
            companyId: 3,
            from: 'July 2018',
            to: 'July 2019',
            describedPeriod: '1 year',
            numberOfMember: 35,
            role: 'Solution Architect, Full-Stack Developer, Test Automation SME',
            description: 'The company willing to combine different data coming from different applications/channels ' +
                'like from mobile devices and WEB application, batch processes into single communication point application ' +
                'that will handle all requests and respond in a high speed manner. The system needs to support old ' +
                'legacy mainframe databases and provide services for SAP HANA. ' +
                'Mostly it\'s back-end processing service oriented, Weblogic based system. \n\n' +
                'Technologies\\Tools: Java 8, Gradle, SOAP, REST, Apache CXF, Spring 4. Vagrant. \n' +
                'Currently in Production.'
        },
        {
            name: 'Nordea, Sweeden, Stokholm. Global Fraud Monitoring',
            sphere: 'Banking, Security, Integration',
            companyId: 3,
            from: 'January 2018',
            to: 'July 2018',
            describedPeriod: '6 months',
            numberOfMember: 6,
            role: 'Back-End Java Developer, Full-Stack Developer, Test Automation SME',
            description: 'General idea is to prevent fraud user activities. Take analysis system and send all processing data into it.\n' +
                'Kafka with it\'s topics in a center of big picture. Microservices are fully configurable and ' +
                'are able to work asynchronously with its nodes, but should prevent also data duplication when same data sending from different threads. \n' +
                'Team located an several locations support Agile principles and follow SAFe practices. \n' +
                'Project released and on Production. \n\n' +
                'For support continuously build and deploy the app, have configured Jenkins jobs with pipelines plugin. \n' +
                'Application written on Java using Apache Camel. And wrapped with Spring Boot. \n' +
                'And contains steps: Build, make RPM, deploy, install, configure as a service, run and validate. \n\n' +
                'Technologies\\Tools: Java 8, Maven, Apache Kafka, Apache Camel, Redis. MapReduce. Hadoop. Mockito.\n'+
                'Currently in Production.'
        },
        {
            name: 'OP. Finland, Helsinki. Banking Contract Management for Private Customers',
            sphere: 'Banking, Financial, Documents Management',
            companyId: 3,
            from: ' October 2015',
            to: 'December 2017',
            describedPeriod: '1 year 10 months',
            numberOfMember: 7,
            role: 'Full-Stack Developer',
            description: 'Service to help users register own organization and employees, and to sign agreements with the Bank. ' +
                'And to be able manipulate with an accesses and permissions. Also this information shared with third party services by ' +
                'REST API.'
        },
        {
            name: 'OP. Finland, Helsinki. Claims Organizing',
            sphere: 'Banking, Financial',
            companyId: 3,
            from: 'September 2014',
            to: ' October 2015',
            describedPeriod: '1 year, 1 month',
            numberOfMember: 6,
            role: 'Full-Stack Developer',
            description: 'Service for internal use. Placed on a corporate Liferay portal using portlets. ' +
                'Clerks wants to see Mainfraim (COBOL) data well organised. ' +
                'The system needs to stay connected to Mainfraim and be highly available and responsible, and needs ' +
                'to be able to retrieve and filter data, and met acceptance criteria for performance and UX. \n' +
                'Has been implemented reach filtering functionality.\n' +
                'Service has been written on Java 7 for JBoss and Liferay. DB2, Servlets, Spring, PowerMock, Maven'
        },
        {
            name: 'Contract Lifecycle Management, Custom Services',
            sphere: 'Documents Management',
            companyId: 2,
            from: 'July 2013',
            to: 'September 2014',
            describedPeriod: '1 year 1 month',
            numberOfMember: 6,
            role: 'Solution Architect, SME, Team Lead',
            description: 'Lead a team of 6 engineers distributed geographically. \n' +
                'Direct, review, and approve features design and changes. Architected solutions for Contract Management Application. ' +
                'Team produced many client specific configurations for CLM.' +
                'Integrated Contract Life Cycle Management with Ecosign and Docusign.\n\n' +
                'Tools: PowerPoint, Java, JSON, XML, Javascript, Jenkins, SonarQube, GIT\n'+
                'Currently in Production.'
        },
        {
            name: 'Rapid Configuration Framework, R&D',
            sphere: 'Documents Management, Public, Financial',
            companyId: 2,
            from: 'July 2013',
            to: 'July 2012',
            describedPeriod: '1 year',
            numberOfMember: 4,
            role: 'Senior Java Developer',
            description: 'CLM need to be configured automatically and people only need to write a templates with rules. ' +
                'The rules needs to be processed in particular moment. The program should be able to generate ' +
                'configuration according to rules. The program should be started as a CLI application but should also ' +
                'support WEB interface UI. \n\n' +
                'Tools: Java, Maven, REST, Mockito, Jenkins, GIT\n'+
                'Current state: In production.'
        },
        {
            name: 'Contract Lifecycle Management, R&D Department',
            sphere: 'Documents Management',
            companyId: 2,
            from: 'January 2010',
            to: 'July 2012',
            describedPeriod: '2 year 7 month',
            numberOfMember: 6,
            role: 'UI Developer, Senior Java Developer',
            description: 'Contracts aren’t static documents. They’re leverageable assets your organization uses to minimize risk, ' +
                'maximize opportunities, achieve compliance and generate revenue. Modular, cloud-based Contract Management ' +
                'on the Determine Cloud Platform makes them fast to create, with self-service and collaborative features that ' +
                'simplify day-to-day searching, authoring and contract administration. Verified, real-time data on the Determine Core ' +
                'gives all users, from procurement to legal to sales, the visibility and insights to turn every contract ' +
                'into a powerful decision-making tool. \n' +
                'Developed UI components and web pages using Java 6 and 7, HTML4/5, CSS2/3 and Javascript. ' +
                'Plain Java application was made to help business organize signing contracts process. The app ' +
                'was using Java Server Pages to render UI. One of a task was to migrate old legacy code ' +
                '(built on Java 5 + HTML generation inside) to a modern MVC framework (Java 7 + Servlets + ExtJS). ' +
                'Project has been splitted onto backend (Java + Spring) and frontend on Node JS. \n\n' +
                'Tools: Java, Javascript, Amazon Web Services (s2), Spring, JSON, XML\\XSD, jUnit, Mockito, Jenkins.\n'+
                'Currently in production.'
        },
        {
            name: 'Corporate Contract Management',
            sphere: 'Documents Management',
            companyId: 3,
            from: 'October 2005',
            to: 'December 2010',
            describedPeriod: '5 years 2 months',
            numberOfMember: 4,
            role: 'Software Engineer',
            description: 'Helping to create electronic agreements. Tracking active and inactive periods. The format provided by Users defined in XML. ' +
                'The application generates documents for sign and to attach it back. User interface was made according best development practices.'
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