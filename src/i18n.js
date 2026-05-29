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
      about: "About",
      letsTalk: "Let's Talk",
      languageLabel: "Language",
      switchToEnglish: "Switch to English",
      switchToGreek: "Switch to Greek",
    },
    common: {
      viewProject: "View Project",
      viewOnGithub: "View on GitHub",
      downloadResume: "Download Resume",
      getInTouch: "Get in Touch",
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
      marquee: ["ARCHITECTURE TO PRODUCT", "UX SYSTEMS", "COMPUTATIONAL DESIGN", "PRODUCT ENGINEERING"],
      glanceYears: "Years in Design & Engineering",
      glanceRole: "Associate Design Systems Analyst",
      glanceEducation: "Architectural Computation, UCL",
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
      about: "Σχετικά",
      letsTalk: "Ας μιλήσουμε",
      languageLabel: "Γλώσσα",
      switchToEnglish: "Αλλαγή στα αγγλικά",
      switchToGreek: "Αλλαγή στα ελληνικά",
    },
    common: {
      viewProject: "Δείτε το έργο",
      viewOnGithub: "View on GitHub",
      downloadResume: "Download CV",
      getInTouch: "Επικοινωνία",
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
      kicker: "Product design, code και spatial computing",
      marquee: ["PRODUCT ENGINEERING", "UX SYSTEMS", "SPATIAL COMPUTING", "FRONT-END DEVELOPMENT"],
      work: "ΕΡΓΑ",
      selectedWork: "Selected work",
      featuredProjects: "Featured Projects",
      technicalStack: "Technical Stack",
      roleTitles: ["Product Engineer", "Product Designer", "Front-end Developer"],
      description:
        "Σχεδιάζω και υλοποιώ digital products, από 3D configurators μέχρι mobile apps, εκεί όπου συναντιούνται το spatial computing και το user experience. Από την αρχική ιδέα μέχρι τον κώδικα, μεταφράζω πραγματικές ανάγκες χρηστών σε καθαρές τεχνικές λύσεις.",
      projects: {
        coach: {
          name: "Vintage Coach Catalog",
          labels: ["Reference Platform", "Authentication System"],
          services: ["Catalog Architecture", "Serial Decoder", "Reference Image System", "Authentication UX", "Research Database"],
          description:
            "Ένα προσωπικό project για vintage Coach bags, με κατάλογο και authentication guide βασισμένα σε ανοιχτά ιστορικά δεδομένα από καταλόγους, serial numbers και εικόνες αναφοράς.",
        },
        moon: {
          name: "Moon Habitat Configurator",
          labels: ["Design Automation", "3D Systems"],
          services: ["Parametric Logic", "3D Interaction", "Spatial Analysis", "System Prototyping", "Design Automation"],
          description:
            "Ένα professional proof of concept που χρησιμοποιεί πραγματικές μεθόδους design automation μέσα από ένα υποθετικό lunar habitat configurator.",
        },
        language: {
          name: "Arabiya Language App",
          labels: ["Educational Technology", "Full-stack"],
          services: ["Lesson Design", "Bilingual UI", "Interactive Quizzes", "Progress States", "Full-stack Build"],
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
      marquee: ["ARCHITECTURE TO PRODUCT", "UX SYSTEMS", "COMPUTATIONAL DESIGN", "PRODUCT ENGINEERING"],
      glanceYears: "Χρόνια σε Design & Engineering",
      glanceRole: "Associate Design Systems Analyst",
      glanceEducation: "Architectural Computation, UCL",
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
