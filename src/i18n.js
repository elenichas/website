import { reactive } from "vue";

export const supportedLocales = {
  en: {
    label: "English",
    shortLabel: "EN",
  },
  el: {
    label: "Ελληνικά",
    shortLabel: "EL",
  },
};

const messages = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      engineering: "Engineering",
      craft: "Craft",
      playground: "Playground",
      about: "About",
      letsTalk: "Let's Talk",
      languageLabel: "Language",
      switchToEnglish: "Switch to English",
      switchToGreek: "Switch to Greek",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    common: {
      viewProject: "View Project",
      viewOnGithub: "View on GitHub",
      downloadResume: "Download Resume",
      getInTouch: "Get in Touch",
      explorePlayground: "Explore Playground",
      viewCaseStudy: "View case study",
      portfolio: "Portfolio",
      nextProject: "Next Project",
      allRightsReserved: "All rights reserved.",
    },
    footer: {
      title: "Let's connect",
      text: "I'd love to discuss ideas, share insights, or explore future opportunities.",
      madeWith: "Made with Vue.js and lots of espresso",
    },
    home: {
      kicker: "Product design, code, and spatial systems",
      marquee: ["PRODUCT ENGINEERING", "UX SYSTEMS", "SPATIAL COMPUTING", "FRONT-END DEVELOPMENT"],
      work: "WORK",
      selectedWork: "Selected work",
      featuredProjects: "Featured Projects",
      featuredProjectsLabel: "Featured projects",
      capabilitiesLabel: "Capabilities",
      technicalStack: "Technical Stack",
      roleTitles: ["Product Engineer", "Product Designer", "Front-end Developer"],
      description:
        "From 3D configurators to mobile apps, I design and build complex digital products at the intersection of spatial computing and user experience. From concept to code, I bridge the gap between user needs and technical solutions.",
      projects: {
        coach: {
          name: "Vintage Coach Catalog",
          labels: ["Reference Platform", "Authentication System"],
          services: ["Catalog Architecture", "Serial Decoder", "Image Reference System", "Authentication UX", "Research Database"],
          description:
            "A personal data product for vintage Coach leather goods, turning catalog data into a searchable reference with 778 styles, 104 colors, and a serial number decoder.",
        },
        moon: {
          name: "Moon Habitat Configurator",
          labels: ["Design Automation", "3D Systems"],
          services: ["Parametric Logic", "3D Interaction", "Spatial Analysis", "System Prototyping", "Design Automation"],
          description:
            "A professional proof of concept applying real design automation methods to a hypothetical lunar habitat configurator.",
        },
        language: {
          name: "Arabiya Language App",
          labels: ["Educational Technology", "Full-Stack"],
          services: ["Lesson Design", "Bilingual UI", "Interactive Quizzes", "Progress States", "Full-Stack Build"],
          description:
            "A personal learning app for Egyptian Arabic, built around real lessons and interactive study and practice flows.",
        },
      },
    },
    products: {
      title: "Products",
      subtitle: "Product systems, configurators, and learning tools designed around real workflows",
      systemDesign: "System Design",
      systemDescription: "Complex systems and computational frameworks",
      items: {
        coach: {
          alt: "Coach Bags Verification App",
          title: "Vintage Coach Catalog",
          type: "Authentication System",
          posterTitle: "Coach",
          posterMark: "SERIAL MATCH",
          posterYear: "1975-02",
        },
        industrial: {
          alt: "Industrial Facility 3D Configurator",
          title: "Industrial Facility Configurator",
          type: "Configuration System",
          posterTitle: "Plant",
          posterMark: "VALIDATION",
          posterYear: "3D",
        },
        moon: {
          alt: "Lunar Habitat 3D Configurator",
          title: "Moon Habitat Configurator",
          type: "Design Automation",
          posterTitle: "Lunar",
          posterMark: "HABITAT GRID",
          posterYear: "MOON",
        },
        language: {
          alt: "Arabiya Language Learning App",
          title: "Arabiya Language App",
          type: "Educational Web App",
          posterTitle: "Arabic",
          posterMark: "LESSON MODE",
          posterYear: "ع",
        },
        filos: {
          alt: "Filos Mobile App",
          title: "Filos Inclusive Activity App",
          type: "Inclusive Mobile Concept",
          posterTitle: "Filos",
          posterMark: "ROUTE + CARE",
          posterYear: "MOBILE",
        },
        bakery: {
          alt: "Coffee Shop App",
          title: "Brew & Crumb Mobile App",
          type: "Mobile Ordering Concept",
          posterTitle: "Brew",
          posterMark: "PICKUP READY",
          posterYear: "CAFE",
        },
        hapi: {
          alt: "Hapi Project",
          title: "Hapi Modular Housing System",
          type: "Parametric Modular Design",
          posterTitle: "Hapi",
          posterMark: "MODULAR LOGIC",
          posterYear: "2019",
        },
        thesis: {
          alt: "Thesis Project",
          title: "Cricket WFC Plugin",
          type: "Rule-Based Design",
          posterTitle: "Rules",
          posterMark: "GROWTH SYSTEM",
          posterYear: "MSc",
        },
        workshop: {
          alt: "Workshop Design",
          title: "Digital Futures Workshop",
          type: "Prefabrication and Automation Design",
          posterTitle: "Future",
          posterMark: "FABRICATION",
          posterYear: "2030",
        },
      },
    },
    craft: {
      title: "Craft",
      subtitle: "Selected product work, computational systems, and engineering experiments",
      productEyebrow: "Product work",
      productTitle: "Interfaces for real workflows",
      systemEyebrow: "Spatial and computational systems",
      engineeringEyebrow: "Engineering sketches",
    },
    engineering: {
      title: "Engineering",
      subtitle: "Technical projects, tools, and open-source contributions",
      items: {
        maps: {
          name: "Map Explorations",
          stack: "Data Visualization, Mapping, Creative Coding",
          posterTitle: "Maps",
          posterType: "Data Visualization",
          posterMark: "30 DAY CHALLENGE",
          posterYear: "GEO",
        },
        finance: {
          name: "Financial Management App",
          stack: "React, TypeScript, Chart.js, Bootstrap",
          posterTitle: "Ledger",
          posterType: "React Interface",
          posterMark: "CHART STATES",
          posterYear: "TS",
        },
        api: {
          name: "Book Reviews API",
          stack: "Express.js, Node.js, RESTful APIs",
          posterTitle: "Books",
          posterType: "REST API",
          posterMark: "EXPRESS ROUTES",
          posterYear: "JS",
        },
        search: {
          name: "Search Service",
          stack: "Flask, Python, HTTP APIs, Backend",
          posterTitle: "Search",
          posterType: "Backend Service",
          posterMark: "QUERY ENGINE",
          posterYear: "PY",
        },
        framework: {
          name: "Computational Framework",
          stack: "C#, Rhino, Grasshopper, Algorithm Design",
          posterTitle: "Cricket",
          posterType: "Algorithm Design",
          posterMark: "PARAMETRIC GRAPH",
          posterYear: "C#",
        },
        view: {
          name: "View Analysis Engine",
          stack: "C#, Rhino, Grasshopper, Spatial Computing",
          posterTitle: "Views",
          posterType: "Spatial Computing",
          posterMark: "SIGHTLINES",
          posterYear: "3D",
        },
      },
    },
    about: {
      eyebrow: "About",
      subtitle: "Product designer and engineer building precise, human-centered tools for spatial systems and digital workflows.",
      profile: "Profile",
      profileHeading: "Human interfaces for complex systems.",
      journeyTitle: "The Journey",
      journeyText:
        "I started in architecture, designing spaces and thinking about how people interact with environments. The transition to digital products felt natural. Both require understanding user needs, creating intuitive flows, and bringing complex systems to life. The tools changed, but the problem-solving mindset remained.",
      nowTitle: "What I Do Now",
      nowText:
        "As an Associate Design Systems Analyst at Foster + Partners, I work at the intersection of design and engineering, creating tools and systems that help creative teams do their best work. From design systems to full web applications, I design and build solutions that make complex workflows feel effortless.",
      conferenceTitle: "UXDX USA 2025",
      conferenceText:
        "Last year, I attended UXDX USA 2025 in New York, an incredible conference bringing together designers, developers, and product managers. It was inspiring to connect with industry leaders, explore emerging trends in product development, and share ideas about the future of design systems and collaborative workflows.",
      fieldNotes: "Moments",
      galleryAlt: "UXDX Conference",
      experience: {
        eyebrow: "Experience map",
        skillsTitle: "Core toolkit",
        educationTitle: "Education",
        timeline: [
          {
            period: "Dec 2024 - Present",
            role: "Associate Design Systems Analyst",
            company: "Foster + Partners",
            location: "London, hybrid",
            summary:
              "Designing and building internal tools, marketing platforms, immersive applications, and full-stack web products for creative teams.",
            points: [
              "Own product coordination across supported teams, aligning design intent with technical delivery.",
              "Conduct user research and usability testing to validate product decisions.",
              "Build and maintain React design-system components for consistent product experiences.",
              "Shape product strategy and roadmaps for internal tooling initiatives.",
            ],
          },
          {
            period: "Nov 2020 - Nov 2024",
            role: "Senior Front-End Developer",
            company: "Bryden Wood",
            location: "London, hybrid",
            summary:
              "Led web-based configurators and design tools for the AEC industry, translating complex architectural workflows into usable digital products.",
            points: [
              "Led end-to-end design, development, and testing of configurators and internal tools.",
              "Moved front-end architecture from vanilla JavaScript to Vue.js for better maintainability.",
              "Designed interaction patterns that made technical design workflows easier to use.",
              "Established reusable component guidelines and mentored junior developers.",
            ],
          },
          {
            period: "Sep 2021 - Mar 2022",
            role: "Associate Lecturer",
            company: "Anglia Ruskin University",
            location: "London, hybrid",
            summary:
              "Taught architecture students the essential skills behind design fundamentals, digital tools, and computational workflows.",
            points: [
              "Delivered workshops, lectures, and hands-on learning sessions.",
              "Assessed student work and provided constructive feedback.",
              "Integrated computational design methods into architectural education.",
            ],
          },
          {
            period: "Mar 2019 - Aug 2019",
            role: "Architect",
            company: "Makridis Associates",
            location: "Greece, on-site",
            summary:
              "Worked on hospitality and leisure projects, building the spatial design foundation that still shapes my product thinking.",
            points: [
              "Designed small to mid-scale hospitality and leisure projects.",
              "Produced architectural drawings, 3D visualizations, and client presentations.",
              "Supported design development, technical coordination, and documentation.",
            ],
          },
        ],
        skills: [
          {
            title: "Front-end",
            items: ["React.js", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "SASS"],
          },
          {
            title: "UX/UI",
            items: ["User research", "Personas", "Journey maps", "Wireframes", "Prototypes", "Usability testing"],
          },
          {
            title: "Systems",
            items: ["Design systems", "Component libraries", "Design tokens", "Style guides", "Accessibility"],
          },
          {
            title: "Computational",
            items: ["Grasshopper", "Rhino", "Python", "Algorithmic design", "AEC workflows"],
          },
          {
            title: "Delivery",
            items: ["Agile", "Scrum", "Product coordination", "Roadmaps", "Performance"],
          },
        ],
        education: [
          {
            year: "2019 - 2020",
            degree: "MSc Architectural Computation",
            school: "The Bartlett School of Architecture, UCL",
            grade: "Distinction",
          },
          {
            year: "2013 - 2019",
            degree: "Master of Architecture",
            school: "Aristotle University of Thessaloniki",
            grade: "Distinction",
          },
        ],
      },
    },
    notFound: {
      title: "OOPS! PAGE NOT FOUND",
      message: "Dear friend, get your URL sorted and try again :)",
      metaTitle: "404 - Not Found",
    },
    caseStudy: {
      role: "Role",
      type: "Type",
      team: "Team",
      year: "Year",
      stack: "Stack",
      duration: "Duration",
      nextProjects: [
        ["Vintage Coach Catalog", "Authentication System"],
        ["Industrial Facility Configurator", "Configuration System"],
        ["Moon Habitat Configurator", "Design Automation"],
        ["Arabiya Language App", "Educational Web App"],
        ["Filos Mobile Experience", "Accessible Experience"],
        ["Brew & Crumb", "Product Design"],
        ["Cricket Plugin", "Computational Framework"],
        ["Architectural System", "Parametric Modular Design"],
        ["Digital Futures Workshop", "Prefabrication & Automation"],
      ],
    },
  },
  el: {
    nav: {
      home: "Αρχική",
      products: "Web Applications",
      engineering: "Engineering",
      craft: "Έργα",
      playground: "Εργαστήριο",
      about: "Σχετικά",
      letsTalk: "Ας μιλήσουμε",
      languageLabel: "Γλώσσα",
      switchToEnglish: "Αλλαγή στα αγγλικά",
      switchToGreek: "Αλλαγή στα ελληνικά",
      openMenu: "Άνοιγμα μενού",
      closeMenu: "Κλείσιμο μενού",
    },
    common: {
      viewProject: "Δείτε το έργο",
      viewOnGithub: "Δείτε το στο GitHub",
      downloadResume: "Λήψη βιογραφικού",
      getInTouch: "Επικοινωνία",
      explorePlayground: "Εξερευνήστε το εργαστήριο",
      viewCaseStudy: "Δείτε τη μελέτη περίπτωσης",
      portfolio: "Portfolio",
      nextProject: "Επόμενο έργο",
      allRightsReserved: "Με επιφύλαξη παντός δικαιώματος.",
    },
    footer: {
      title: "Ας μιλήσουμε",
      text: "Θα χαρώ να συζητήσουμε ιδέες, να ανταλλάξουμε σκέψεις ή να δούμε πιθανές συνεργασίες.",
      madeWith: "Φτιαγμένο με Vue.js και πολλούς espresso",
    },
    home: {
      kicker: "Σχεδιασμός προϊόντων, κώδικας και spatial systems",
      marquee: ["PRODUCT ENGINEERING", "UX SYSTEMS", "SPATIAL COMPUTING", "FRONT-END DEVELOPMENT"],
      work: "ΕΡΓΑ",
      selectedWork: "Επιλεγμένα έργα",
      featuredProjects: "Κύρια έργα",
      featuredProjectsLabel: "Κύρια έργα",
      capabilitiesLabel: "Δυνατότητες",
      technicalStack: "Τεχνικές δεξιότητες",
      roleTitles: ["Product Engineer", "Product Designer", "Front-end Developer"],
      description:
        "Σχεδιάζω και υλοποιώ digital products, από 3D configurators μέχρι mobile apps, εκεί όπου συναντιούνται το spatial computing και το user experience. Από την αρχική ιδέα μέχρι τον κώδικα, μεταφράζω πραγματικές ανάγκες χρηστών σε καθαρές τεχνικές λύσεις.",
      projects: {
        coach: {
          name: "Vintage Coach Catalog",
          labels: ["Πλατφόρμα αναφοράς", "Σύστημα αυθεντικοποίησης"],
          services: ["Αρχιτεκτονική καταλόγου", "Αποκωδικοποίηση serial number", "Σύστημα εικόνων αναφοράς", "UX αυθεντικοποίησης", "Βάση έρευνας"],
          description:
            "Ένα προσωπικό project για vintage Coach bags, με κατάλογο και authentication guide βασισμένα σε ανοιχτά ιστορικά δεδομένα από καταλόγους, serial numbers και εικόνες αναφοράς.",
        },
        moon: {
          name: "Moon Habitat Configurator",
          labels: ["Design Automation", "3D Systems"],
          services: ["Παραμετρική λογική", "3D αλληλεπίδραση", "Χωρική ανάλυση", "Πρωτοτυποποίηση συστήματος", "Design automation"],
          description:
            "Ένα professional proof of concept που χρησιμοποιεί πραγματικές μεθόδους design automation μέσα από ένα υποθετικό lunar habitat configurator.",
        },
        language: {
          name: "Arabiya Language App",
          labels: ["Εκπαιδευτική τεχνολογία", "Full-stack"],
          services: ["Σχεδιασμός μαθημάτων", "Δίγλωσσο UI", "Διαδραστικά quiz", "Καταστάσεις προόδου", "Full-stack ανάπτυξη"],
          description:
            "Ένα προσωπικό project για εκμάθηση αραβικών, χτισμένο γύρω από πραγματικά μαθήματα και διαδραστική εξάσκηση.",
        },
      },
    },
    products: {
      title: "Web Applications",
      subtitle: "Product systems, configurators και εργαλεία μάθησης, σχεδιασμένα γύρω από πραγματικές ροές εργασίας",
      systemDesign: "System Design",
      systemDescription: "Σύνθετα συστήματα και computational frameworks",
      items: {
        coach: {
          alt: "Coach bags verification app",
          title: "Vintage Coach Catalog",
          type: "Authentication System",
          posterTitle: "Coach",
          posterMark: "SERIAL MATCH",
          posterYear: "1975-02",
        },
        industrial: {
          alt: "Industrial facility 3D configurator",
          title: "Industrial Facility Configurator",
          type: "Configuration System",
          posterTitle: "Plant",
          posterMark: "VALIDATION",
          posterYear: "3D",
        },
        moon: {
          alt: "Lunar habitat 3D configurator",
          title: "Moon Habitat Configurator",
          type: "Design Automation",
          posterTitle: "Lunar",
          posterMark: "HABITAT GRID",
          posterYear: "MOON",
        },
        language: {
          alt: "Arabiya language learning app",
          title: "Arabiya Language App",
          type: "Educational Web App",
          posterTitle: "Arabic",
          posterMark: "LESSON MODE",
          posterYear: "ع",
        },
        filos: {
          alt: "Filos mobile app",
          title: "Filos Inclusive Activity App",
          type: "Inclusive Mobile Concept",
          posterTitle: "Filos",
          posterMark: "ROUTE + CARE",
          posterYear: "MOBILE",
        },
        bakery: {
          alt: "Coffee shop app",
          title: "Brew & Crumb Mobile App",
          type: "Mobile Ordering Concept",
          posterTitle: "Brew",
          posterMark: "PICKUP READY",
          posterYear: "CAFE",
        },
        hapi: {
          alt: "Hapi Project",
          title: "Hapi Modular Housing System",
          type: "Parametric Modular Design",
          posterTitle: "Hapi",
          posterMark: "MODULAR LOGIC",
          posterYear: "2019",
        },
        thesis: {
          alt: "Thesis Project",
          title: "Cricket WFC Plugin",
          type: "Rule-Based Design",
          posterTitle: "Rules",
          posterMark: "GROWTH SYSTEM",
          posterYear: "MSc",
        },
        workshop: {
          alt: "Workshop Design",
          title: "Digital Futures Workshop",
          type: "Prefabrication and Automation Design",
          posterTitle: "Future",
          posterMark: "FABRICATION",
          posterYear: "2030",
        },
      },
    },
    craft: {
      title: "Craft",
      subtitle: "Selected product work, computational systems και engineering experiments",
      productEyebrow: "Product work",
      productTitle: "Interfaces για πραγματικές ροές εργασίας",
      systemEyebrow: "Spatial και computational systems",
      engineeringEyebrow: "Engineering sketches",
    },
    engineering: {
      title: "Engineering",
      subtitle: "Τεχνικά projects, εργαλεία και open-source contributions",
      items: {
        maps: {
          name: "Map Explorations",
          stack: "Data Visualization, Mapping, Creative Coding",
          posterTitle: "Maps",
          posterType: "Data Visualization",
          posterMark: "30 DAY CHALLENGE",
          posterYear: "GEO",
        },
        finance: {
          name: "Financial Management App",
          stack: "React, TypeScript, Chart.js, Bootstrap",
          posterTitle: "Ledger",
          posterType: "React Interface",
          posterMark: "CHART STATES",
          posterYear: "TS",
        },
        api: {
          name: "Book Reviews API",
          stack: "Express.js, Node.js, RESTful APIs",
          posterTitle: "Books",
          posterType: "REST API",
          posterMark: "EXPRESS ROUTES",
          posterYear: "JS",
        },
        search: {
          name: "Search Service",
          stack: "Flask, Python, HTTP APIs, Backend",
          posterTitle: "Search",
          posterType: "Backend Service",
          posterMark: "QUERY ENGINE",
          posterYear: "PY",
        },
        framework: {
          name: "Computational Framework",
          stack: "C#, Rhino, Grasshopper, Algorithm Design",
          posterTitle: "Cricket",
          posterType: "Algorithm Design",
          posterMark: "PARAMETRIC GRAPH",
          posterYear: "C#",
        },
        view: {
          name: "View Analysis Engine",
          stack: "C#, Rhino, Grasshopper, spatial computing",
          posterTitle: "Views",
          posterType: "Spatial Computing",
          posterMark: "SIGHTLINES",
          posterYear: "3D",
        },
      },
    },
    about: {
      eyebrow: "Σχετικά",
      subtitle: "Product designer και engineer με έμφαση σε human-centered tools για spatial systems και digital workflows.",
      profile: "Προφίλ",
      profileHeading: "Human interfaces for complex systems.",
      journeyTitle: "Η διαδρομή",
      journeyText:
        "Ξεκίνησα από την αρχιτεκτονική, σχεδιάζοντας χώρους και παρατηρώντας πώς οι άνθρωποι κινούνται και αποφασίζουν μέσα σε ένα περιβάλλον. Η μετάβαση στα digital products ήρθε φυσικά: και εκεί χρειάζεται να καταλάβεις τις ανάγκες των χρηστών, να χτίσεις καθαρές ροές και να κάνεις σύνθετα συστήματα πιο κατανοητά. Τα εργαλεία άλλαξαν, αλλά ο τρόπος σκέψης έμεινε ο ίδιος.",
      nowTitle: "Τι κάνω τώρα",
      nowText:
        "Ως Associate Design Systems Analyst στη Foster + Partners, δουλεύω ανάμεσα σε design και engineering, δημιουργώντας εργαλεία και συστήματα για creative teams. Από design systems μέχρι full web applications, σχεδιάζω και υλοποιώ λύσεις που κάνουν απαιτητικές ροές εργασίας πιο καθαρές και εύχρηστες.",
      conferenceTitle: "UXDX USA 2025",
      conferenceText:
        "Πέρυσι συμμετείχα στο UXDX USA 2025 στη Νέα Υόρκη, ένα συνέδριο που φέρνει κοντά designers, developers και product managers. Ήταν πολύτιμο να γνωρίσω ανθρώπους του χώρου, να δω από κοντά νέες κατευθύνσεις στο product development και να συζητήσω για το μέλλον των design systems και της συνεργατικής δουλειάς.",
      fieldNotes: "Moments",
      galleryAlt: "Συνέδριο UXDX",
      experience: {
        eyebrow: "Experience map",
        skillsTitle: "Core toolkit",
        educationTitle: "Εκπαίδευση",
        timeline: [
          {
            period: "Δεκ 2024 - Σήμερα",
            role: "Associate Design Systems Analyst",
            company: "Foster + Partners",
            location: "Λονδίνο, hybrid",
            summary:
              "Σχεδιάζω και υλοποιώ internal tools, marketing platforms, immersive applications και full-stack web products για creative teams.",
            points: [
              "Συντονίζω product work ανάμεσα σε ομάδες, κρατώντας ευθυγραμμισμένα design intent και technical delivery.",
              "Κάνω user research και usability testing για να ελέγχονται οι product αποφάσεις.",
              "Χτίζω και συντηρώ React design-system components για συνεπείς product εμπειρίες.",
              "Συμβάλλω σε product strategy και roadmaps για internal tooling initiatives.",
            ],
          },
          {
            period: "Νοε 2020 - Νοε 2024",
            role: "Senior Front-End Developer",
            company: "Bryden Wood",
            location: "Λονδίνο, hybrid",
            summary:
              "Οδήγησα web-based configurators και design tools για την AEC industry, μεταφράζοντας σύνθετα architectural workflows σε εύχρηστα digital products.",
            points: [
              "Ανέλαβα end-to-end design, development και testing για configurators και internal tools.",
              "Μετέφερα front-end architecture από vanilla JavaScript σε Vue.js για καλύτερη συντηρησιμότητα.",
              "Σχεδίασα interaction patterns που έκαναν τεχνικά design workflows πιο καθαρά.",
              "Έστησα reusable component guidelines και καθοδήγησα junior developers.",
            ],
          },
          {
            period: "Σεπ 2021 - Μαρ 2022",
            role: "Associate Lecturer",
            company: "Anglia Ruskin University",
            location: "Λονδίνο, hybrid",
            summary:
              "Δίδαξα σε φοιτητές αρχιτεκτονικής essential skills γύρω από design fundamentals, digital tools και computational workflows.",
            points: [
              "Παρέδωσα workshops, lectures και hands-on learning sessions.",
              "Αξιολόγησα εργασίες και έδωσα constructive feedback.",
              "Ένταξα computational design methods στην αρχιτεκτονική εκπαίδευση.",
            ],
          },
          {
            period: "Μαρ 2019 - Αυγ 2019",
            role: "Architect",
            company: "Makridis Associates",
            location: "Ελλάδα, on-site",
            summary:
              "Δούλεψα σε hospitality και leisure projects, χτίζοντας τη spatial design βάση που ακόμα επηρεάζει τον τρόπο που σκέφτομαι προϊόντα.",
            points: [
              "Σχεδίασα small to mid-scale hospitality και leisure projects.",
              "Παρήγαγα architectural drawings, 3D visualizations και client presentations.",
              "Στήριξα design development, technical coordination και documentation.",
            ],
          },
        ],
        skills: [
          {
            title: "Front-end",
            items: ["React.js", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "SASS"],
          },
          {
            title: "UX/UI",
            items: ["User research", "Personas", "Journey maps", "Wireframes", "Prototypes", "Usability testing"],
          },
          {
            title: "Systems",
            items: ["Design systems", "Component libraries", "Design tokens", "Style guides", "Accessibility"],
          },
          {
            title: "Computational",
            items: ["Grasshopper", "Rhino", "Python", "Algorithmic design", "AEC workflows"],
          },
          {
            title: "Delivery",
            items: ["Agile", "Scrum", "Product coordination", "Roadmaps", "Performance"],
          },
        ],
        education: [
          {
            year: "2019 - 2020",
            degree: "MSc Architectural Computation",
            school: "The Bartlett School of Architecture, UCL",
            grade: "Distinction",
          },
          {
            year: "2013 - 2019",
            degree: "Master of Architecture",
            school: "Aristotle University of Thessaloniki",
            grade: "Distinction",
          },
        ],
      },
    },
    notFound: {
      title: "ΩΧ! Η ΣΕΛΙΔΑ ΔΕΝ ΒΡΕΘΗΚΕ",
      message: "Κάτι πήγε στραβά με το URL. Έλεγξέ το και δοκίμασε ξανά :)",
      metaTitle: "404 - Δεν βρέθηκε",
    },
    caseStudy: {
      role: "Ρόλος",
      type: "Κατηγορία",
      team: "Ομάδα",
      year: "Έτος",
      stack: "Stack",
      duration: "Διάρκεια",
      nextProjects: [
        ["Vintage Coach Catalog", "Authentication System"],
        ["Industrial Facility Configurator", "Configuration System"],
        ["Moon Habitat Configurator", "Design Automation"],
        ["Arabiya Language App", "Educational Web App"],
        ["Filos Mobile Experience", "Accessible Experience"],
        ["Brew & Crumb", "Product Design"],
        ["Cricket Plugin", "Computational Framework"],
        ["Architectural System", "Parametric Modular Design"],
        ["Digital Futures Workshop", "Prefabrication & Automation"],
      ],
    },
  },
};

const defaultLocale = "en";
const storageKey = "eleni-portfolio-locale";

function getInitialLocale() {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(storageKey);
  return supportedLocales[stored] ? stored : defaultLocale;
}

export const i18nState = reactive({
  locale: getInitialLocale(),
});

function readPath(source, key) {
  return key.split(".").reduce((value, part) => {
    if (value && Object.prototype.hasOwnProperty.call(value, part)) {
      return value[part];
    }
    return undefined;
  }, source);
}

export function t(key) {
  const translated = readPath(messages[i18nState.locale], key);
  if (translated !== undefined) return translated;
  return readPath(messages[defaultLocale], key) ?? key;
}

export function setLocale(locale) {
  i18nState.locale = supportedLocales[locale] ? locale : defaultLocale;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(storageKey, i18nState.locale);
    document.documentElement.lang = i18nState.locale;
  }
}

export default {
  install(app) {
    if (typeof document !== "undefined") {
      document.documentElement.lang = i18nState.locale;
    }

    app.config.globalProperties.$i18n = i18nState;
    app.config.globalProperties.$locales = supportedLocales;
    app.config.globalProperties.$t = t;
    app.config.globalProperties.$setLocale = setLocale;
  },
};
