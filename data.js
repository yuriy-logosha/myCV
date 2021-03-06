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
            companyId: 4,
            role: 'Software Developer, SME, Java Expert',
            from: 'June 2020',
            to: 'Now',
            description: 'Design, develop and configure software systems. \n' +
                'Tools: Java 8, 11, Liferay, Spring Boot, Spring Integration, Spring Batch, Spring Security, JavaScript, Vue, Yarn. Openshift. Grafana. Prometheus. Fluentd. Nginx.'
        },
        {
            companyId: 3,
            role: 'Technical Lead, Tech Arch',
            from: 'September 2014',
            to: 'April 2020',
            description: 'Design, develop and configure software systems to meet market and/or client requirements either end-to-end' +
                ' from analysis, design, implementation, quality assurance (including testing), to delivery and maintenance' +
                ' of the software product or system or for a specific phase of the lifecycle.' +
                ' Apply knowledge of technologies,' +
                ' applications, methodologies, processes and tools to support a client, project or entity. \n' +
                'Tools: Java, Kotlin, Apache Kafka, AWS, Azure, GIT, Spring, Spring Boot, Spring Data, JavaScript, jQuery, Maven, Gradle, Docker, TDD, BDD, Unit and Automation tests.' +
                ' Jenkins. BPMN. Apache Tomcat, Jetty, Jboss, Liferay, Node.JS, ReactJS, Angular 5, VUE.JS, Bower, Karma, Cucumber, Bootstrap 4, Kubernetes, Skaffold, CQRS.'
        },
        {
            companyId: 2,
            role: 'Technical Lead, Java Expert',
            from: 'July 2013',
            to: 'September 2014',
            description: 'Engaged in architectural objectives of the project. ' +
                'Provided architecture overview. Presented "to-be" design solutions and POCs. ' +
                'Translate business requirements into functional requirements documentation. ' +
                'Plan team work. Split business requirements into epics and stories. ' +
                'Estimated stories. Planning Poker.' +
                'Organize development and delivery processes. ' +
                'Design API and Facade layers, services layer. ' +
                'Design project structure and maven dependency. ' +
                'Describe solutions with required diagrams: behavioral, dependency, relational and entity diagrams. ' +
                'Produced clean and well documented code. \n\n' +
                'Used technologies: Servlet, Spring MVC, Core, JavaScript, jQuery, Angular. Google Apps API. ' +
                'Write and maintain code documentation. ' +
                'SonarQube for track code and security quality. ' +
                'Apache Maven for to automate CI.'
        },{
            companyId: 2,
            role: 'Business Solutions Architect',
            from: 'September 2012',
            to: 'July 2013',
            description: 'Together with clients discuss future application and process. ' +
                'Deliver solution in an Agile way and iteration based manner (Sprints). ' +
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
                'Migrate legacy solution from Java 5 to Java 6. '+
                'Reorganize JSP structure and JavaScript. ' +
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
                'Automation of activity of commercial and contractual department. \n' +
                'Database development: ' +
                'Plan data structure per module. Create tables, indexes, relations.' +
                'Modeling diagrams and generate SQL with Power Designer. ' +
                'Build reach UI elements and forms. Satisfy client with properly working software. \n' +
                '\n' +
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
            officialName: 'Determine Inc, Odessa, Ukraine',
            contactDetails: {
                website: 'https://www.determine.com',
                email: '',
                phone: ''
            }
        },
        {
            companyId: 3,
            officialName: 'Accenture Inc, Riga, Latvia',
            contactDetails: {
                website: 'https://www.accenture.com/lv-en',
                email: '',
                phone: '+67019700'
            }
        },
        {
            companyId: 4,
            officialName: 'Küehne + Nagel Int. AG, Tallinn, Estonia',
            contactDetails: {
                website: 'https://home.kuehne-nagel.com/',
                email: 'kntll.itc@kuehne-nagel.com',
                phone: ''
            }
        }],
    schools: [
        {
            name: 'Odessa National Polytechnic University, Ukraine',
            from: 'September 2000',
            to: 'Jun 2005',
            graduationLevel: 'Barchelor\'s degree +, EQF Level 6',
            url: 'http://opu.ua/eng',
            logo: 'http://archive.opu.ua/images/logo4.png'
        },
        {
            name: 'Odessa National Maritime University, Ukraine',
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
            name: 'myKN, Liferay Corporate Portal',
            sphere: 'Portal',
            companyId: 4,
            from: 'June 2020',
            to: 'Now',
            describedPeriod: '',
            numberOfMember: 6,
            role: 'Kotlin Developer, Java Expert',
            description: 'Portal on Liferay for internal use. 3 synchronized pods. ~60k active users. 3-10 requests/second. Corporate SSO integration.\n' +
                'ELK stack for search and monitoring. Fluentd and nginx as sidecars. Grafana for alerting.\n' +
                'Responsibility: Design and implement business features. Integrate with existing social services. ' +
                'Build and monitor CI/CD pipeline on Templates.\n\n' +
                'Technologies and Tools: Kotlin, Java, Liferay, Kafka, Gradle, Docker, Jenkins. OpenShift.\n\n' +
                'Released. Pipeline with appox. speed 1 release/day.'
        },{
            name: 'Fairy Services, Canadian Public Transportation System',
            sphere: 'Transportation, Billing',
            companyId: 3,
            from: 'January 2020',
            to: 'April 2020',
            describedPeriod: '4 month',
            numberOfMember: 8,
            role: 'Kotlin Developer, Java Expert, Solutions architect, Team Lead',
            description: 'Public transportation currently operating in datacenters as several different applications while maintainability become complex and'+
                'increasing every iteration. Business decided to move to Cloud and split applications into microservices, micro-applications that responsible only '+
                'for business its providing. Also business wants to handle penalty operations feature and modern way of payments. \n\n' +
                'Technologies and Tools: Kotlin Coroutines, Azure, CosmosDB, Kafka, Kubernetes, CQRS, Event Source, Gradle, Spring Boot/Microservices. \n' +
                'State: In Production, new version in progress'
        },
        {
            name: 'Ericsson, Sweeden. Basic User Identity',
            sphere: 'Telecommunication, Security',
            companyId: 3,
            from: 'August 2019',
            to: 'January 2020',
            describedPeriod: '5 months',
            numberOfMember: 8,
            role: 'Full-Stack Developer, Java Expert, Test Automation SME',
            description: 'When several UI applications using same backend, it needs to identify users making requests. ' +
                'Client has many distributed system\\services that uses the same single app for identify users. ' +
                'OpenIDM solution provide necessary tools to give that flexibility, ' +
                'but it needs to be properly configured and has to be able synchronize data from different LDAP sources in proper moment. Also, caring about security, data ' +
                'needs to be protected from outside. The system needs to be highly available for as external services require it. \n\n' +
                'Technologies and Tools: Java 7, 8, Python, Groovy. \n' +
                'Already released.'
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
            description: 'The company combined streems of data coming from different applications/channels ' +
                'like from mobile devices and WEB application, batch processes into the single, monolithic application ' +
                'that handle all requests and respond in a high speed manner. The system needs to support old ' +
                'legacy mainframe databases and provide services for SAP HANA. ' +
                'One of current challenges is to split monolith into micro-services.' +
                'Mostly it\'s back-end processing service oriented, Weblogic based system. \n\n' +
                'Technologies and Tools: Java 8, Gradle, SOAP, REST, Apache CXF, Spring 4. Vagrant. \n' +
                'Logs produced by slf4j displayed by Splunk.\n' +
                'Currently in Production.'
        },
        {
            name: 'Nordea, Sweeden, Stockholm. Global Fraud Monitoring',
            sphere: 'Banking, Security, Integration',
            companyId: 3,
            from: 'January 2018',
            to: 'July 2018',
            describedPeriod: '6 month',
            numberOfMember: 6,
            role: 'Back-End Java Developer, Full-Stack Developer, Test Automation SME',
            description: 'Automatically block fraud activity using Falcon. ' +
                'Kafka with it\'s topics in a center of big picture. Microservices architecture for transfer and process data. \n' +
                'Team co-located in several locations and following Agile principles and SAFe practices. ' +
                'For support continuously build and deploy the app, have been configured Jenkins jobs with pipelines plugin. ' +
                'Application written on Java using Apache Camel with Spring Boot. \n\n' +
                'Technologies and Tools: Spring integration, Java 8/11, Yaml, Maven, Camel, Kafka, Zookeper, Redis. MapReduce. ' +
                'Hadoop. Mockito. High-Performance, High-Availability, and High-Throughput Processing. \n ' +
                'Automation scripts on Python.\n'+
                'Currently in Production.'
        },
        {
            name: 'OP. Finland, Helsinki. Banking Contract Management for Private Customers',
            sphere: 'Banking, Financial, Documents Management',
            companyId: 3,
            from: 'October 2015',
            to: 'December 2017',
            describedPeriod: '1 year 10 month',
            numberOfMember: 7,
            role: 'Full-Stack Developer',
            description: 'Online service to help clients register their own (small business) organization structure and employees. ' +
                'That`s allow small business generate bills for services provided without leaving online bank application or directly from mobile phone. ' +
                'And allow common clients display unpayed and payed bills directly in bank account and to control it from same applications. ' +
                'As not all employees needs to see everything, the services very flexible with an accesses and privileges. ' +
                'Also this information shared with third party services by providing full REST API and support versioning. Uses Apegee to route and manage access to API.\n' +
                'Architecture & Design: Three tire architecture based on microservices and CQS approach.\n' +
                'REST communication between layers. While internal EJB calls between business layer and components. ' +
                'Component layer (EJB) represented database on JDBC to DB2 same as other databases uses views. ' +
                'While Business and Representation layers handled read and write requests separately. MVC for read and view services. Domain Driven Design for Business layer.\n' +
                'Stored procedures gives low cohesion as not needed to expose DB structure to components. \n' +
                'Technologies and Tools: Java 8, Spring, EJB, DAO, DB2, Maven, Virtualbox.\n' +
                'Currently in production.'
        },
        {
            name: 'OP. Finland, Helsinki. Claims Organizing',
            sphere: 'Banking, Financial',
            companyId: 3,
            from: 'September 2014',
            to: 'October 2015',
            describedPeriod: '1 year, 1 month',
            numberOfMember: 6,
            role: 'Full-Stack Developer',
            description: 'To make internal processes automated OP introduced a system to process claims. ' +
                'Not public services for internal use only. Placed on a corporate Liferay portal using portlets. ' +
                'While the portal itself is public. ' +
                'Clerks wants to see Mainfraim (COBOL) data well organised. ' +
                'The system needs to stay connected to Mainfraim and be highly available and responsible. Also needs ' +
                'to be able to retrieve and filter data, and met NFR for performance and corporate UX standards. \n' +
                'Has been implemented reach filtering functionality using Apache Lucene.\n' +
                'Service has been written on Java 7 for JBoss and Liferay. \n' +
                'Logs collected into Elasticsearch and presented with Kibana. ' +
                'JMeter for load testing and performance analyze. ' +
                'Splunk to visualize produced logs.\n\n' +
                'Technologies and Tools: Java 8, Spring, EJB, DAO, DB2, Servlets, Spring, PowerMock, Maven, Selenium.\n' +
                'Currently in Production.'
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
                'Team produced many client specific configurations for Contract Life Cycle Management application. ' +
                'Integrated Contract Life Cycle Management with electronic signatures services: Ecosign and Docusign.\n\n' +
                'Tools: PowerPoint, Java, Maven, JSON, XML, Javascript, Jenkins, SonarQube, Perforce\n'+
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
            description: 'The idea is to automate configuration process. For that we were needed to broke down the existing process into ' +
                'smaller, better organized modules. One was templates creation another rules maker. Templates were representing each document type.' +
                'The rules needs to be processed in particular moment. The program should be able to generate ' +
                'configuration according to rules. The program should be started as a CLI application but should also ' +
                'support WEB interface UI. \n\n' +
                'Tools: Java, Maven, REST, Mockito, Jenkins, Perforce\n'+
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
                'into a powerful decision-making tool. ' +
                'Developed UI components and web pages using Java 7, HTML5, CSS3 and JavaScript. ' +
                'Plain Java application was made to help business organize signing contracts process. The application ' +
                'was using Java Server Pages to render UI. One of a tasks was to migrate old legacy code ' +
                '(built on legacy Java with generation of HTML code inside) to a modern MVC framework (Java 7 + Servlets + ExtJS). ' +
                'Project has been splitted onto backend (Java + Spring) and frontend on Node JS. \n\n' +
                'Tools: Java, Javascript, Amazon Web Services (s2), HTML, CSS, JSP, Servlet, Jackson, Spring, JSON, XML/XSD, jUnit, Mockito, Jenkins, Selenium. \n'+
                'Currently in production.'
        },
        {
            name: 'Corporate Contract Management',
            sphere: 'Documents Management',
            companyId: 0,
            from: 'October 2005',
            to: 'December 2010',
            describedPeriod: '5 years 2 months',
            numberOfMember: 4,
            role: 'Software Engineer',
            description: 'Application helping to automate creation of electronic agreements process. Tracking active and inactive periods. ' +
                'The template, provided by Users specified in XML file. ' +
                'The application generates documents for sign and to attach it back. ' +
                'User interface have made according to best development practices. \n' +
                'Currently in Production.'
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
                url: 'http://opu.ua/eng/',
                logo: 'http://archive.opu.ua/images/logo4.png'
            }
        ]
    }
];

module.exports = _data;