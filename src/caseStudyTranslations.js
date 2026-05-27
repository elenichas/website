const commonTranslations = {
  "Type": "Κατηγορία",
  "Role": "Ρόλος",
  "Team": "Ομάδα",
  "Year": "Έτος",
  "Stack": "Stack",
  "Duration": "Διάρκεια",
  "Institution": "Ίδρυμα",
  "Challenge": "Πρόκληση",
  "Solution": "Λύση",
  "Background": "Πλαίσιο",
  "Approach": "Προσέγγιση",
  "Features": "Λειτουργίες",
  "Experience": "Εμπειρία",
  "Practice": "Εξάσκηση",
  "Visual Design": "Visual Design",
  "Visual Language": "Visual Language",
  "Technology": "Technology",
  "Reflection": "Reflection",
  "My Role": "Ο ρόλος μου",
  "Impact": "Impact",
  "Learning": "Learning",
  "Design Process": "Design Process",
  "Innovation": "Innovation",
  "Catalog": "Catalog",
  "Responsive": "Responsive",
  "Authentication": "Authentication",
  "Prototype": "Prototype",
  "Color Palette": "Color Palette",
  "Typography": "Typography",
  "Key Components": "Key Components",
  "Primary Button": "Primary Button",
  "Secondary Button": "Secondary Button",
};

const routeTranslations = {
  "/products/coach-verification-app": {
    "Personal Project": "Personal Project",
    "UX/UI Designer, Front End Developer": "UX/UI Designer, Front End Developer",
    "A personal data product for vintage Coach leather goods, turning catalog data into a searchable reference with 778 styles, 104 colors, and a serial number decoder for authentication research.":
      "Ένα προσωπικό project για vintage Coach bags, με κατάλογο και authentication guide βασισμένα σε ανοιχτά ιστορικά δεδομένα από καταλόγους, serial numbers και εικόνες αναφοράς.",
    "Scattered knowledge, hard-to-check authenticity": "Διάσπαρτη γνώση και δύσκολος έλεγχος αυθεντικότητας",
    "Vintage Coach collectors and resellers rely on fragmented information spread across forums, social media groups, and personal knowledge. Authentication is hard. Serial number formats changed across three distinct eras, and understanding what a legitimate serial looks like for a specific bag requires cross-referencing multiple data points that didn’t exist in one place.":
      "Οι συλλέκτες και resellers vintage Coach βασίζονται σε πληροφορίες που είναι σκόρπιες σε forums, ομάδες social media και προσωπικές σημειώσεις. Ο έλεγχος αυθεντικότητας είναι δύσκολος, γιατί τα serial number formats αλλάζουν ανά εποχή και χρειάζεται σύγκριση πολλών στοιχείων για να καταλάβεις αν μια τσάντα βγάζει νόημα.",
    "A comprehensive digital catalog and authentication tool": "Ένας ψηφιακός κατάλογος και εργαλείο authentication",
    "I built a web application that structures publicly available catalog data into a searchable, filterable reference with detailed product pages, a color encyclopedia, and an interactive serial number decoder. The app is currently private, with plans to share it publicly.":
      "Έφτιαξα ένα web application που οργανώνει δημόσια διαθέσιμα δεδομένα καταλόγων σε αναζητήσιμη και φιλτραρίσιμη βάση αναφοράς, με αναλυτικές product pages, color encyclopedia και interactive serial number decoder. Προς το παρόν το app είναι ιδιωτικό, με στόχο να γίνει δημόσιο.",
    "778 styles, fully searchable": "778 styles με πλήρη αναζήτηση",
    "The main catalog offers filtering by category, decade, and color with progressive loading. Each bag links to a detail page with dimensions, volume, strap length, production years, and available colorways, making the dataset easier to browse than a static reference list.":
      "Ο βασικός κατάλογος επιτρέπει φιλτράρισμα ανά κατηγορία, δεκαετία και χρώμα. Κάθε τσάντα οδηγεί σε detail page με dimensions, volume, strap length, production years και διαθέσιμα colorways, ώστε το dataset να διαβάζεται πιο εύκολα από μια στατική λίστα.",
    "Designed for any device": "Σχεδιασμένο για κάθε συσκευή",
    "The interface adapts from mobile through tablet to desktop. Collectors can reference the catalog at flea markets on their phone or browse the full collection at home on a larger screen.":
      "Το interface προσαρμόζεται από κινητό σε tablet και desktop. Έτσι κάποιος μπορεί να συμβουλευτεί τον κατάλογο σε flea market από το κινητό ή να εξερευνήσει όλη τη συλλογή σε μεγαλύτερη οθόνη.",
    "Live Demo": "Live Demo",
    "Browsing the catalog in action": "Ο κατάλογος σε χρήση",
    "A walkthrough of the app experience, from searching and filtering to viewing product details and decoding serial numbers in real time.":
      "Ένα walkthrough της εμπειρίας, από αναζήτηση και φιλτράρισμα μέχρι product details και real-time serial number decoding.",
    "Color System": "Color System",
    "104 leather colors, visually organized": "104 leather colors, οργανωμένα οπτικά",
    "The color system organizes 104 leather colors from 1981 to 1999 across seven collections. Colors are grouped by visual family using HSL values, and each color expands to show the bags offered in that colorway, filterable by year and decade.":
      "Το color system οργανώνει 104 leather colors από το 1981 έως το 1999 σε επτά συλλογές. Τα χρώματα ομαδοποιούνται οπτικά με HSL values και κάθε χρώμα ανοίγει για να δείξει τις τσάντες που κυκλοφόρησαν σε αυτό, με φίλτρα ανά έτος και δεκαετία.",
    "Decoding serial numbers across three eras": "Serial number decoding σε τρεις περιόδους",
    "The decoder parses all Coach serial formats: pre-1994 numeric-only, 1994–2006 letter-digit-letter + 4-digit style, and 2006–2020 expanded format. It extracts manufacturing month, year, plant code, cross-references the style against the database, and flags mismatches or known counterfeit patterns.":
      "Ο decoder διαβάζει όλα τα βασικά Coach serial formats: pre-1994 numeric-only, 1994-2006 letter-digit-letter + 4-digit style και 2006-2020 expanded format. Εξάγει μήνα, έτος και plant code, συγκρίνει το style με τη database και επισημαίνει ασυμφωνίες ή γνωστά counterfeit patterns.",
    "Turning research into a usable product": "Από έρευνα σε usable product",
    "This project sits at the intersection of my interests in sustainability, fashion, and data. The biggest challenge was turning scraped and publicly available reference material into a structured dataset that could support useful interactions. Designing the decoder taught me how to present complex, multi-format parsing logic in a way that feels simple while remaining transparent about what the system checks and why.":
      "Το project συνδυάζει ενδιαφέροντα γύρω από sustainability, fashion και data. Η βασική πρόκληση ήταν να μετατραπεί δημόσιο υλικό αναφοράς σε structured dataset που να υποστηρίζει χρήσιμες αλληλεπιδράσεις. Ο decoder με βοήθησε να σκεφτώ πώς παρουσιάζεις σύνθετη parsing logic με τρόπο απλό, αλλά και διαφανή για το τι ελέγχει το σύστημα και γιατί.",
  },
  "/products/language-learning-app": {
    "Web Application": "Web Application",
    "Design & Development": "Design & Development",
    "A personal learning app for Egyptian Arabic, built around my own lessons and designed to turn new material into interactive study and practice flows.":
      "Ένα προσωπικό project για εκμάθηση αραβικών, βασισμένο στα δικά μου μαθήματα και σχεδιασμένο ώστε νέο υλικό να γίνεται διαδραστική μελέτη και εξάσκηση.",
    "A personal learning tool": "Ένα προσωπικό εργαλείο μάθησης",
    "I created Arabiya to support my own journey learning Arabic with a teacher. Rather than relying only on generic apps, I wanted a tool that could turn the material from real lessons into structured study screens, quizzes, and repeatable practice.":
      "Δημιούργησα το Arabiya για να υποστηρίξω τη δική μου εκμάθηση αραβικών με δασκάλα. Αντί να βασίζομαι μόνο σε generic apps, ήθελα ένα εργαλείο που μετατρέπει το υλικό πραγματικών μαθημάτων σε δομημένες οθόνες μελέτης, quizzes και επαναλαμβανόμενη εξάσκηση.",
    "Because I am Greek and learning Arabic through English, the app is also an experiment in making the learning path understandable across languages. I plan to keep adding material as the lessons progress.":
      "Επειδή είμαι Ελληνίδα και μαθαίνω αραβικά μέσα από τα αγγλικά, η εφαρμογή είναι και ένας τρόπος να κάνω τη μαθησιακή διαδρομή πιο κατανοητή ανάμεσα σε διαφορετικές γλώσσες. Σκοπεύω να προσθέτω υλικό όσο προχωρούν τα μαθήματα.",
    "Learning a script-based language from scratch": "Μαθαίνοντας μια γλώσσα με νέο σύστημα γραφής από την αρχή",
    "Arabic presents unique challenges for Western learners: an entirely new script written right-to-left, letters that change shape based on position, short vowels represented by diacritics rather than letters, and significant differences between dialects. Most existing resources teach Modern Standard Arabic, which differs greatly from the spoken dialects people actually use.":
      "Τα αραβικά έχουν ιδιαίτερες δυσκολίες για δυτικούς μαθητές: ένα νέο σύστημα γραφής από δεξιά προς τα αριστερά, γράμματα που αλλάζουν μορφή ανάλογα με τη θέση τους, σύντομα φωνήεντα που σημειώνονται με διακριτικά και μεγάλες διαφορές ανά διάλεκτο. Πολλές πηγές διδάσκουν Modern Standard Arabic, που διαφέρει αρκετά από τις ομιλούμενες διαλέκτους.",
    "Learners need a focused, approachable tool that breaks down these complexities into digestible lessons and provides immediate feedback through interactive practice.":
      "Οι μαθητές χρειάζονται ένα εστιασμένο και φιλικό εργαλείο που σπάει αυτή την πολυπλοκότητα σε μικρά μαθήματα και δίνει άμεσο feedback μέσα από διαδραστική εξάσκηση.",
    "Dialect-focused interactive learning": "Διαδραστική μάθηση με έμφαση στη διάλεκτο",
    "Arabiya focuses specifically on Egyptian Arabic, the most widely understood dialect, and guides learners through a structured path: from selecting their native language, to choosing a dialect, to engaging with bite-sized lessons and interactive quizzes.":
      "Το Arabiya εστιάζει στα Egyptian Arabic, μια από τις πιο κατανοητές διαλέκτους, και οδηγεί τον μαθητή σε μια καθαρή διαδρομή: επιλογή μητρικής γλώσσας, επιλογή διαλέκτου, μικρά μαθήματα και interactive quizzes.",
    "Structured lessons with immediate practice": "Δομημένα μαθήματα με άμεση εξάσκηση",
    "Dual-Language Direction": "Dual-Language Direction",
    "English-first interface with Greek support planned as the content and learning material expand": "English-first interface, με υποστήριξη ελληνικών όσο επεκτείνεται το περιεχόμενο",
    "Dialect Selection": "Dialect Selection",
    "Focus on Egyptian Arabic with a framework designed to support Syrian, Lebanese, Gulf, Moroccan, and Iraqi dialects": "Έμφαση στα Egyptian Arabic, με framework που μπορεί να υποστηρίξει και άλλες διαλέκτους",
    "Alphabet Mastery": "Alphabet Mastery",
    "Complete 28-letter reference with all four positional forms (isolated, initial, medial, final) plus letter connection rules": "Οδηγός για τα 28 γράμματα, τις τέσσερις μορφές τους και τους κανόνες σύνδεσης",
    "Vowels & Diacritics": "Vowels & Diacritics",
    "Dedicated lesson for Fatha, Kasra, Damma, and Sukun with explanations of why diacritics matter in Arabic": "Μάθημα για Fatha, Kasra, Damma και Sukun και γιατί τα διακριτικά έχουν σημασία στα αραβικά",
    "Greetings & Phrases": "Greetings & Phrases",
    "16 essential Egyptian Arabic phrases with cultural context and pronunciation guides": "16 βασικές Egyptian Arabic φράσεις με πολιτισμικό πλαίσιο και οδηγούς προφοράς",
    "Interactive Quizzes": "Interactive Quizzes",
    "Multiple-choice exercises with instant feedback, scoring, and progress tracking across each lesson": "Ασκήσεις πολλαπλής επιλογής με άμεσο feedback, βαθμολογία και παρακολούθηση προόδου",
    "Study then practice": "Μελέτη και μετά εξάσκηση",
    "Each lesson follows a two-phase approach: a comprehensive study mode with reference tables, examples, and contextual explanations, followed by multiple quiz exercises that reinforce what was learned. Learners can freely switch between study material and practice.":
      "Κάθε μάθημα έχει δύο φάσεις: study mode με πίνακες αναφοράς, παραδείγματα και επεξηγήσεις, και μετά quiz exercises που ενισχύουν το υλικό. Ο μαθητής μπορεί να μετακινείται ελεύθερα ανάμεσα στη μελέτη και την εξάσκηση.",
    "Alphabet Lesson": "Alphabet Lesson",
    "From individual letters to connected words": "Από γράμματα σε συνδεδεμένες λέξεις",
    "The alphabet lesson provides a complete reference table showing each of the 28 Arabic letters with their name, sound description, and all four positional forms. It explains how letters connect in Arabic script, distinguishing between full connectors and the six right-only connectors (Alif, Dal, Zal, Ra, Zay, Waw).":
      "Το μάθημα του αλφαβήτου δείχνει και τα 28 αραβικά γράμματα με το όνομα, τον ήχο και τις τέσσερις μορφές τους. Εξηγεί πώς συνδέονται τα γράμματα στο αραβικό σύστημα γραφής και ξεχωρίζει τους πλήρεις συνδέσμους από τα έξι γράμματα που συνδέονται μόνο προς τα δεξιά.",
    "Three exercise types per lesson": "Τρεις τύποι ασκήσεων ανά μάθημα",
    "The alphabet quiz includes three distinct exercise types: identifying letter names, matching letters to their sounds, and reading letter combinations that form real Arabic words. Each quiz presents randomized questions with four multiple-choice options and immediate visual feedback.":
      "Το alphabet quiz έχει τρεις τύπους ασκήσεων: αναγνώριση ονομάτων γραμμάτων, αντιστοίχιση με ήχους και ανάγνωση συνδυασμών γραμμάτων που σχηματίζουν πραγματικές αραβικές λέξεις. Κάθε quiz έχει τυχαίες ερωτήσεις και άμεσο visual feedback.",
    "Vowels Lesson": "Vowels Lesson",
    "Understanding Arabic diacritics": "Κατανόηση των αραβικών διακριτικών",
    "Arabic script normally only writes consonants. Short vowels are shown as small marks called harakat. The vowels lesson teaches learners to distinguish Fatha (short 'a'), Kasra (short 'i'), Damma (short 'u'), and Sukun (no vowel), demonstrating how the same consonant produces completely different sounds with each diacritic.":
      "Στο αραβικό σύστημα γραφής συνήθως γράφονται μόνο τα σύμφωνα. Τα σύντομα φωνήεντα εμφανίζονται ως μικρά σημάδια, τα harakat. Το μάθημα για τα φωνήεντα βοηθά τον μαθητή να ξεχωρίζει Fatha, Kasra, Damma και Sukun και να βλέπει πώς το ίδιο σύμφωνο αλλάζει ήχο με κάθε διακριτικό.",
    "Greetings Lesson": "Μάθημα χαιρετισμών",
    "Real Egyptian expressions": "Πραγματικές αιγυπτιακές εκφράσεις",
    "The greetings lesson teaches 16 essential Egyptian Arabic phrases organized by category: greetings, responses, courtesies, farewells, introductions, and basics. Each phrase includes the Arabic script, transliteration, and meaning, with cultural context explaining Egyptian customs around greetings.":
      "Το μάθημα χαιρετισμών περιλαμβάνει 16 βασικές Egyptian Arabic φράσεις οργανωμένες σε κατηγορίες όπως χαιρετισμοί, απαντήσεις, ευγένειες και συστάσεις. Κάθε φράση έχει αραβική γραφή, transliteration, σημασία και πολιτισμικό πλαίσιο.",
    "Dark glassmorphism with warm tones": "Dark glassmorphism με warm tones",
    "The visual identity draws inspiration from desert landscapes with a dark atmospheric background, glassmorphic card elements, and a warm amber/gold color palette. Arabic text is rendered using Noto Sans Arabic for optimal readability, while the modern oklch() color space ensures consistent, vibrant hues throughout the interface.":
      "Το visual identity παίρνει έμπνευση από τοπία ερήμου, με σκούρο ατμοσφαιρικό background, glassmorphic cards και warm amber/gold palette. Το αραβικό κείμενο χρησιμοποιεί Noto Sans Arabic για readability, ενώ το oklch() κρατά τα χρώματα σταθερά και ζωντανά.",
    "Modern web stack": "Modern web stack",
    "Built with Next.js, React, and TypeScript. The UI uses Tailwind CSS with custom components, Radix UI primitives for accessibility, and Lucide icons. The architecture leaves room for bilingual content as the app grows.":
      "Χτισμένο με Next.js, React και TypeScript. Το UI χρησιμοποιεί Tailwind CSS, custom components, Radix UI primitives για accessibility και Lucide icons. Η αρχιτεκτονική αφήνει χώρο για δίγλωσσο περιεχόμενο όσο μεγαλώνει το app.",
    "Sole designer & developer": "Sole designer & developer",
    "End-to-end ownership of product design, UI implementation, lesson structure, quiz logic, and content modeling. The project is intentionally personal, but it uses the same product thinking I would apply to a larger learning platform.":
      "Είχα end-to-end ownership σε product design, UI implementation, δομή μαθημάτων, quiz logic και content modeling. Το project είναι προσωπικό, αλλά χρησιμοποιεί το ίδιο product thinking που θα εφάρμοζα σε μεγαλύτερη learning platform.",
    "Designing for script-based language learning": "Design για εκμάθηση γλώσσας με νέο σύστημα γραφής",
    "This project taught me how to handle bidirectional text (RTL Arabic alongside LTR English/Greek), design quiz systems that provide encouraging feedback without being punitive, and build progressive learning pathways that respect the complexity of a new writing system.":
      "Το project με βοήθησε να δουλέψω με bidirectional text, RTL αραβικά μαζί με LTR αγγλικά/ελληνικά, να σχεδιάσω quiz systems με ενθαρρυντικό feedback και να χτίσω μαθησιακές διαδρομές που σέβονται την πολυπλοκότητα ενός νέου συστήματος γραφής.",
    "Because this is a living project tied to my own language studies, it continues to evolve. Each new lesson with my teacher becomes potential content for the app, keeping both the learning and the development process closely connected.":
      "Επειδή το project συνδέεται με τα δικά μου μαθήματα, συνεχίζει να εξελίσσεται. Κάθε νέο μάθημα με τη δασκάλα μου μπορεί να γίνει περιεχόμενο για το app, κρατώντας τη μάθηση και το development στενά συνδεδεμένα.",
  },
  "/products/lunar-app": {
    "Proof of Concept": "Proof of Concept",
    "3D Environment & Systems": "3D Environment & Systems",
    "A professional proof of concept for a conference, applying real design automation methods to a hypothetical lunar habitat scenario.":
      "Ένα professional proof of concept για συνέδριο, που εφαρμόζει πραγματικές μεθόδους design automation σε ένα υποθετικό lunar habitat scenario.",
    "A speculative scenario with real methodology": "Υποθετικό σενάριο, πραγματική μεθοδολογία",
    "This was a team exploration into how the same methods used for real-world design automation could be applied to an extreme environment. The lunar setting made the project playful and speculative, but the underlying workflow was grounded in modular systems, spatial constraints, and configuration logic.":
      "Ήταν μια ομαδική διερεύνηση του πώς μέθοδοι από πραγματικά design automation workflows μπορούν να εφαρμοστούν σε ένα ακραίο περιβάλλον. Το lunar setting έκανε το project πιο παιγνιώδες και speculative, αλλά η ροή εργασίας βασίστηκε σε modular systems, spatial constraints και configuration logic.",
    "A modular system for extreme environments": "Modular system για ακραία περιβάλλοντα",
    "The system combines terrain analysis, modular unit cataloging, network-based connections, and optimization algorithms to adapt habitat layouts to spatial constraints. Key elements include:":
      "Το σύστημα συνδυάζει terrain analysis, modular unit cataloging, network-based connections και optimization algorithms ώστε τα habitat layouts να προσαρμόζονται σε χωρικούς περιορισμούς. Τα βασικά στοιχεία είναι:",
    "Terrain Analysis": "Terrain Analysis",
    "Systematic analysis of solar terrain conditions to inform site selection and orientation": "Ανάλυση συνθηκών εδάφους για επιλογή θέσης και προσανατολισμό",
    "Module Catalog": "Module Catalog",
    "Library of modular units with different functions and spatial configurations": "Library από modular units με διαφορετικές λειτουργίες και χωρικές διατάξεις",
    "Network System": "Network System",
    "Connection framework linking modules through pathways and infrastructure": "Connection framework που συνδέει modules μέσα από διαδρομές και υποδομές",
    "Optimization Engine": "Optimization Engine",
    "Algorithms to optimize layouts and adapt designs to spatial constraints": "Algorithms που κάνουν optimize layouts και προσαρμόζουν designs σε χωρικούς περιορισμούς",
    "3D Visualization": "3D Visualization",
    "Interactive 3D environment for exploring and configuring habitat designs": "Interactive 3D environment για διερεύνηση και διαμόρφωση habitat designs",
    "Parametric Control": "Parametric Control",
    "Design automation through configurable parameters and rules": "Design automation μέσα από ρυθμιζόμενες παραμέτρους και κανόνες",
    "System Architecture": "System Architecture",
    "From terrain to habitat": "Από το έδαφος στο habitat",
    "The system follows a systematic approach from terrain analysis to final configuration, allowing for iterative design exploration and optimization.":
      "Το σύστημα ακολουθεί μια καθαρή διαδρομή από terrain analysis μέχρι την τελική configuration, υποστηρίζοντας iterative design exploration και optimization.",
    "Module typologies": "Module typologies",
    "A catalog of specialized units designed for different functions within the lunar habitat, each optimized for specific spatial and functional requirements.":
      "Ένας κατάλογος από specialized units για διαφορετικές λειτουργίες μέσα στο lunar habitat, με κάθε module optimized για συγκεκριμένες χωρικές και λειτουργικές απαιτήσεις.",
    "Room organization": "Room organization",
    "Spatial diagrams showing how different functional spaces are organized and connected within the modular system.":
      "Χωρικά diagrams που δείχνουν πώς οργανώνονται και συνδέονται οι λειτουργικοί χώροι μέσα στο modular system.",
    "Interactive System": "Interactive System",
    "Real-time configuration and visualization": "Real-time configuration και visualization",
    "The 3D environment lets users explore habitat layouts as configurable systems. Module choices, connections, and spatial relationships can be tested visually, making the automation logic easier to understand than through diagrams alone.":
      "Το 3D environment επιτρέπει στους χρήστες να εξερευνούν habitat layouts ως configurable systems. Οι επιλογές modules, οι συνδέσεις και οι χωρικές σχέσεις δοκιμάζονται οπτικά, κάνοντας το automation logic πιο κατανοητό από ένα απλό diagram.",
    "Exploration": "Exploration",
    "Design explorations": "Design explorations",
    "Multiple design iterations exploring different spatial configurations and optimization strategies for the lunar habitat system.":
      "Πολλαπλά design iterations για διαφορετικές χωρικές διατάξεις και optimization strategies στο lunar habitat system.",
    "Design system architecture & 3D interface": "Design system architecture & 3D interface",
    "Within the team, I led the product design for the configurator interface, designed the module catalog system, and developed the interactive 3D viewer. I collaborated with algorithm engineers to connect the interface to the optimization and spatial analysis logic behind the concept.":
      "Μέσα στην ομάδα, ανέλαβα το product design για το configurator interface, σχεδίασα το module catalog system και ανέπτυξα το interactive 3D viewer. Συνεργάστηκα με algorithm engineers για να συνδεθεί το interface με τη λογική optimization και spatial analysis.",
    "Bridging design automation and extreme environments": "Design automation σε extreme environments",
    "The project helped communicate design automation methods through a vivid scenario. It showed how catalogs, rules, optimization, and 3D interaction can work together as a product experience, even when the context is hypothetical.":
      "Το project βοήθησε να επικοινωνηθούν μέθοδοι design automation μέσα από ένα ζωντανό σενάριο. Έδειξε πώς κατάλογοι, κανόνες, optimization και 3D interaction μπορούν να λειτουργήσουν μαζί ως product experience, ακόμα και σε υποθετικό πλαίσιο.",
  },
  "/products/industrial-configurator": {
    "Professional Project": "Professional Project",
    "Power Plant Design Automation": "Power Plant Design Automation",
    "A consultancy project for a major engineering client, turning power plant design knowledge into a structured unit catalog, configurator app, automated layout logic, and validation workflow.":
      "Consultancy project για μεγάλο engineering client, που μετέτρεψε γνώση γύρω από power plant design σε structured unit catalog, configurator app, automated layout logic και validation workflow.",
    "Turning expert workflows into a structured design system": "Από εξειδικευμένες ροές εργασίας σε structured design system",
    "Power plant design relies on specialist knowledge spread across unit specifications, engineering constraints, spatial rules, and network dependencies. The client needed a clearer way to structure that knowledge so teams could configure facilities more consistently and understand the consequences of each design decision.":
      "Το power plant design βασίζεται σε εξειδικευμένη γνώση που απλώνεται σε unit specifications, engineering constraints, spatial rules και network dependencies. Ο client χρειαζόταν έναν πιο καθαρό τρόπο να οργανώσει αυτή τη γνώση, ώστε οι ομάδες να διαμορφώνουν facilities με συνέπεια και να καταλαβαίνουν τις συνέπειες κάθε design decision.",
    "The challenge was not only interface design. It was helping the team translate a complex consultancy workflow into consistent data, reusable components, automated checks, and a tool that could also support training and communication.":
      "Η πρόκληση δεν ήταν μόνο το interface design. Ήταν να βοηθηθεί η ομάδα να μεταφράσει ένα σύνθετο consultancy workflow σε consistent data, reusable components, automated checks και ένα εργαλείο που υποστηρίζει training και communication.",
    "A configurator for units, rules, and design validation": "Configurator για units, rules και design validation",
    "The platform combines a structured unit catalog, configuration interface, network visualization, rule-based validation, and alert system. Users can select plant units, review properties and connection requirements, test layout logic, and understand where a design needs attention.":
      "Η platform συνδυάζει structured unit catalog, configuration interface, network visualization, rule-based validation και alert system. Οι χρήστες μπορούν να επιλέγουν plant units, να βλέπουν properties και connection requirements, να δοκιμάζουν layout logic και να εντοπίζουν πού χρειάζεται προσοχή.",
    "System Capabilities": "System Capabilities",
    "Modular design automation": "Modular design automation",
    "Unit Catalog": "Unit Catalog",
    "A structured library of power plant units with technical properties, dimensions, and connection requirements": "Structured library από power plant units με τεχνικά properties, διαστάσεις και connection requirements",
    "Network Representation": "Network Representation",
    "Visual mapping των δικτύων, διαδρομών και dependencies μεταξύ components",
    "Rule-Based Validation": "Rule-Based Validation",
    "Automated checks για μη έγκυρες τοποθετήσεις, missing connections και spatial conflicts",
    "Node-Based Interface": "Node-Based Interface",
    "Relationship model που δείχνει πώς τα components συνδέονται και εξαρτώνται μεταξύ τους",
    "Training Tool": "Training Tool",
    "Πιο καθαρός τρόπος για να κατανοούν οι ομάδες facility logic, unit behavior και design constraints",
    "Consistent Data Structure": "Consistent Data Structure",
    "Shared data patterns that make components easier to compare, configure, and reuse": "Shared data patterns που κάνουν τα components πιο εύκολα στη σύγκριση, τη διαμόρφωση και την επαναχρησιμοποίηση",
    "From wireframes to implementation": "Από wireframes σε implementation",
    "The design process began by mapping the existing engineering workflow into product flows: selecting a facility type, choosing units from a catalog, reviewing properties, defining network relationships, and surfacing validation alerts when rules were broken.":
      "Το design process ξεκίνησε με mapping του engineering workflow σε product flows: επιλογή facility type, units από catalog, έλεγχος των properties, network relationships και validation alerts όταν κάποιο rule σπάει.",
    "Component Details": "Component Details",
    "Comprehensive specifications": "Comprehensive specifications",
    "Each unit includes the information needed to make configuration decisions: dimensions, technical properties, connection points, compatibility rules, and requirements that affect downstream validation.":
      "Κάθε unit περιλαμβάνει την πληροφορία που χρειάζεται για configuration decisions: διαστάσεις, technical properties, connection points, compatibility rules και απαιτήσεις που επηρεάζουν downstream validation.",
    "Network System": "Network System",
    "Node-based connectivity": "Node-based connectivity",
    "The node-based interface makes hidden dependencies visible. Users can see how facility components relate to one another, where connections are required, and how a change in one unit affects the wider plant system.":
      "Το node-based interface κάνει τα hidden dependencies ορατά. Οι χρήστες βλέπουν πώς συνδέονται τα facility components, πού χρειάζονται connections και πώς μια αλλαγή σε ένα unit επηρεάζει το ευρύτερο plant system.",
    "Component Selection": "Component Selection",
    "Modular catalog integration": "Modular catalog integration",
    "The catalog gives teams a consistent way to select and add industrial units, compare component properties, and move from scattered technical references toward a shared design language.":
      "Ο κατάλογος δίνει στις ομάδες έναν consistent τρόπο να επιλέγουν industrial units, να συγκρίνουν component properties και να περνούν από σκόρπιες τεχνικές αναφορές σε shared design language.",
    "Validation": "Validation",
    "Intelligent rule checking": "Intelligent rule checking",
    "The system checks configurations against logical and spatial rules and raises alerts when a design breaks technical requirements, helping teams catch issues earlier in the process.":
      "Το σύστημα ελέγχει configurations απέναντι σε logical και spatial rules και εμφανίζει alerts όταν ένα design σπάει technical requirements, βοηθώντας τις ομάδες να βρίσκουν issues νωρίτερα.",
    "Component Management": "Component Management",
    "Property visualization": "Property visualization",
    "Quick access to unit properties helps users understand what they are placing, why it matters, and whether the configuration remains valid as the design changes.":
      "Γρήγορη πρόσβαση στα unit properties βοηθά τους χρήστες να καταλάβουν τι τοποθετούν, γιατί έχει σημασία και αν το configuration παραμένει valid καθώς αλλάζει το design.",
    "Catalog System": "Catalog System",
    "Component comparison and selection": "Component comparison and selection",
    "The catalog interface supports side-by-side comparison so teams can evaluate units by technical specifications, spatial requirements, and compatibility instead of relying on disconnected documents.":
      "Το catalog interface υποστηρίζει side-by-side comparison, ώστε οι ομάδες να αξιολογούν units με βάση specifications, spatial requirements και compatibility αντί για ασύνδετα έγγραφα.",
    "Lead Product Designer": "Lead Product Designer",
    "I led the product design work within the consultancy team: workflow mapping, information architecture for the unit catalog, wireframing, high-fidelity UI design, and design system documentation. I worked closely with engineers and developers to translate domain logic into usable screens and validation patterns.":
      "Ήμουν lead στο product design μέσα στην consultancy team: workflow mapping, information architecture για τον unit catalog, wireframing, high-fidelity UI και design system documentation. Συνεργάστηκα με engineers και developers για να μεταφράσουμε domain logic σε εύχρηστες οθόνες και validation patterns.",
    "Systematizing industrial facility design": "Systematizing industrial facility design",
    "The configurator helped move the design process from manual interpretation toward structured automation. By cataloging units, standardizing data, and encoding validation rules, the tool created a more consistent foundation for facility configuration.":
      "Ο configurator βοήθησε τη διαδικασία να μετακινηθεί από manual interpretation προς structured automation. Με cataloging units, standardized data και encoded validation rules, το εργαλείο δημιούργησε πιο consistent foundation για facility configuration.",
    "It also acted as a training and communication tool: teams could see how units connect, where rules apply, and why alerts were triggered, making complex plant logic easier to review and explain.":
      "Λειτούργησε επίσης ως εργαλείο training και communication: οι ομάδες μπορούσαν να δουν πώς συνδέονται units, πού εφαρμόζονται rules και γιατί εμφανίζονται alerts, κάνοντας το plant logic πιο εύκολο να εξηγηθεί.",
  },
  "/products/filos-mobile-app": {
    "Course Project": "Course Project",
    "1 Month (2023)": "1 Month (2023)",
    "A course project exploring how a mobile app could help people with disabilities and volunteers connect through shared activities, with early input from a special needs teacher and students.":
      "Course project που εξερευνά πώς ένα mobile app θα μπορούσε να βοηθήσει άτομα με disabilities και volunteers να συνδεθούν μέσα από shared activities, με πρώιμο input από special needs teacher και students.",
    "Breaking down barriers to connection": "Μειώνοντας τα barriers στη σύνδεση",
    "People with disabilities can face physical, sensory, and social barriers to participation, while people who want to support or volunteer often do not know how to build meaningful connections respectfully. The project explored how a digital service could reduce uncertainty, support trust, and make shared activities easier to arrange.":
      "Άτομα με disabilities μπορεί να αντιμετωπίζουν physical, sensory και social barriers στη συμμετοχή, ενώ όσοι θέλουν να βοηθήσουν συχνά δεν ξέρουν πώς να χτίσουν meaningful connections με σεβασμό. Το project εξερεύνησε πώς ένα digital service μπορεί να μειώσει την αβεβαιότητα, να στηρίξει trust και να κάνει shared activities πιο εύκολες.",
    "A platform for shared experiences": "Platform για shared experiences",
    "Filos proposes a mobile experience where people can create profiles, share access needs and preferences, propose activities, and connect around everyday experiences. The name means \"friendship\" in Greek.":
      "Το Filos προτείνει ένα mobile experience όπου οι άνθρωποι δημιουργούν profiles, μοιράζονται access needs και preferences, προτείνουν activities και συνδέονται γύρω από everyday experiences. Το όνομα σημαίνει friendship στα ελληνικά.",
    "Users": "Users",
    "Designing for diverse needs": "Designing for diverse needs",
    "Understanding the people who would use Filos was essential. As part of the course project, I consulted my sister, a special needs teacher, and had a couple of early feedback sessions with her students. The concept considered a range of access needs, including wheelchair access, blindness, and autism.":
      "Ήταν σημαντικό να καταλάβω τους ανθρώπους που θα χρησιμοποιούσαν το Filos. Για το course project συμβουλεύτηκα την αδερφή μου, special needs teacher, και είχα πρώιμο feedback με μαθητές της. Το concept έλαβε υπόψη διαφορετικά access needs, όπως wheelchair access, blindness και autism.",
    "Use Scenarios": "Use Scenarios",
    "Two perspectives behind the concept": "Δύο perspectives πίσω από το concept",
    "Instead of fictional character portraits, the project can be read through two practical situations: someone with special-education experience helping shape safe support, and someone with access needs looking for a respectful way to join everyday activities.":
      "Αντί για fictional personas, το project διαβάζεται μέσα από δύο πρακτικές καταστάσεις: κάποιον με special-education experience που βοηθά να οριστεί safe support, και κάποιον με access needs που ψάχνει respectful τρόπο να συμμετέχει σε everyday activities.",
    "Special-education perspective": "Special-education perspective",
    "The advisor who checks whether support is realistic": "Ο advisor που ελέγχει αν το support είναι realistic",
    "A special-education professional or student could use Filos to review profiles, clarify access needs, and help volunteers understand what makes an activity safe, respectful, and manageable before a meeting is arranged.":
      "Ένας special-education professional ή student θα μπορούσε να χρησιμοποιήσει το Filos για να δει profiles, να ξεκαθαρίσει access needs και να βοηθήσει volunteers να καταλάβουν τι κάνει μια activity safe, respectful και manageable.",
    "Participant perspective": "Participant perspective",
    "The person choosing connection on their own terms": "Το άτομο που επιλέγει connection με τους δικούς του όρους",
    "A person with a disability could use the app to express preferences, find activities that fit their needs, and decide what information to share before connecting with a volunteer around a simple shared plan.":
      "Ένα άτομο με disability θα μπορούσε να χρησιμοποιήσει το app για να εκφράσει preferences, να βρει activities που ταιριάζουν στις ανάγκες του και να αποφασίσει τι πληροφορία θέλει να μοιραστεί πριν συνδεθεί με volunteer.",
    "Design Priorities": "Design Priorities",
    "Making support feel respectful and easy to arrange": "Support που νιώθει respectful και εύκολο να οργανωθεί",
    "Access needs first": "Access needs first",
    "Profiles make practical needs visible early, so activities can be planned around mobility, sensory comfort, communication preferences, or other support requirements.":
      "Τα profiles κάνουν practical needs ορατά από νωρίς, ώστε οι activities να οργανώνονται γύρω από mobility, sensory comfort, communication preferences ή άλλα support requirements.",
    "Trust before matching": "Trust before matching",
    "The experience focuses on clear expectations, simple choices, and gentle onboarding instead of pushing people quickly into conversations.":
      "Η εμπειρία εστιάζει σε clear expectations, simple choices και gentle onboarding, αντί να σπρώχνει γρήγορα τους ανθρώπους σε conversations.",
    "Shared activities": "Shared activities",
    "Connection is framed around everyday experiences, helping volunteers and participants start from mutual interests rather than abstract offers of help.":
      "Το connection χτίζεται γύρω από everyday experiences, βοηθώντας volunteers και participants να ξεκινούν από mutual interests αντί για γενικές προσφορές βοήθειας.",
    "Screens": "Screens",
    "Key prototype flows": "Key prototype flows",
    "The prototype explores onboarding, profile setup, activity discovery, and connection moments as a lightweight service journey rather than a single matching screen.":
      "Το prototype εξερευνά onboarding, profile setup, activity discovery και connection moments ως lightweight service journey, όχι ως ένα απλό matching screen.",
    "Interactive prototype": "Interactive prototype",
    "Designing for accessibility and trust": "Designing for accessibility and trust",
    "I created a visual identity emphasizing inclusivity and trust. The interface uses large controls, clear navigation, high-contrast elements, and simple flows so the concept could be discussed through an accessibility lens from the beginning.":
      "Δημιούργησα visual identity με έμφαση σε inclusivity και trust. Το interface χρησιμοποιεί large controls, clear navigation, high contrast και simple flows, ώστε το concept να συζητηθεί εξαρχής μέσα από accessibility lens.",
    "Responsive System": "Responsive System",
    "A calmer interface across screen sizes": "Calmer interface σε διαφορετικά screen sizes",
    "The responsive layouts keep the same emphasis on legibility, clear hierarchy, and accessible actions, so the concept can be understood across different devices and presentation formats.":
      "Τα responsive layouts κρατούν την έμφαση σε legibility, clear hierarchy και accessible actions, ώστε το concept να διαβάζεται σωστά σε διαφορετικά devices και presentation formats.",
    "Practicing inclusive design": "Practicing inclusive design",
    "Through this course project, I learned to treat accessibility as a starting point rather than a final checklist. The concept is still early, but it came from genuine interest and direct conversations that helped me think more carefully about safety, trust, autonomy, and different access needs.":
      "Μέσα από αυτό το course project έμαθα να βλέπω το accessibility ως starting point, όχι ως checklist στο τέλος. Το concept είναι ακόμα early, αλλά βασίστηκε σε πραγματικό ενδιαφέρον και conversations που με βοήθησαν να σκεφτώ πιο προσεκτικά safety, trust, autonomy και διαφορετικά access needs.",
    "I gained hands-on experience applying WCAG accessibility guidelines and understanding their practical impact on real people's lives.":
      "Απέκτησα hands-on εμπειρία με WCAG accessibility guidelines και καλύτερη κατανόηση του πρακτικού τους impact σε πραγματικές ζωές.",
  },
  "/products/brew-crumb": {
    "A course project for a real high-traffic cafe near my office, exploring how mobile ordering could reduce morning wait times.":
      "Course project για ένα πραγματικό busy cafe κοντά στο γραφείο μου, που εξερευνά πώς το mobile ordering μπορεί να μειώσει το morning waiting time.",
    "Solving the morning rush": "Λύνοντας το morning rush",
    "The cafe had heavy morning traffic from nearby office workers, creating long queues during the commute window. For the course project, I used this real setting as the basis for a mobile ordering concept focused on speed, clarity, and pickup confidence.":
      "Το cafe είχε έντονη πρωινή κίνηση από nearby office workers, με μεγάλες ουρές στο commute window. Για το course project χρησιμοποίησα αυτό το πραγματικό setting ως βάση για mobile ordering concept με έμφαση σε speed, clarity και pickup confidence.",
    "Order ahead, skip the line": "Order ahead, skip the line",
    "A mobile app concept enabling preorders, pickup scheduling, and order status updates. Customers can browse the menu, choose a pickup time, and understand when their order is ready without waiting in the full queue.":
      "Mobile app concept για preorders, pickup scheduling και order status updates. Οι customers μπορούν να δουν το menu, να επιλέξουν pickup time και να ξέρουν πότε είναι έτοιμη η παραγγελία χωρίς να περιμένουν στην ουρά.",
    "Process": "Process",
    "From research to prototype": "From research to prototype",
    "I observed the cafe during busy morning periods and translated the patterns into course deliverables: personas, journey maps, wireframes, and a high-fidelity prototype. The main opportunity was reducing uncertainty around ordering time, queue length, and pickup readiness.":
      "Παρατήρησα το cafe σε busy morning periods και μετέτρεψα τα patterns σε course deliverables: personas, journey maps, wireframes και high-fidelity prototype. Η βασική ευκαιρία ήταν να μειωθεί η αβεβαιότητα γύρω από ordering time, queue length και pickup readiness.",
    "Design": "Design",
    "Warm and inviting": "Warm and inviting",
    "I developed a warm, inviting visual language that reflects the cozy atmosphere of a neighborhood coffee shop. The earthy tones and clean typography create an approachable yet modern aesthetic.":
      "Ανέπτυξα ένα warm και inviting visual language που θυμίζει την cozy ατμόσφαιρα ενός neighborhood coffee shop. Οι earthy tones και το clean typography δημιουργούν approachable αλλά modern αισθητική.",
    "Design system": "Design system",
    "Course project insights": "Course project insights",
    "Through the Google UX Design curriculum, I practiced research synthesis, persona development, wireframing, and high-fidelity prototyping. Because the project was based on a real cafe but completed as a course exercise, I focused on showing a realistic service concept without overstating production impact.":
      "Μέσα από το Google UX Design curriculum, εξασκήθηκα σε research synthesis, persona development, wireframing και high-fidelity prototyping. Επειδή το project βασίστηκε σε πραγματικό cafe αλλά ήταν course exercise, εστίασα σε ένα realistic service concept χωρίς να υπερβάλλω για production impact.",
    "This project reinforced the importance of mobile-first design, balancing constraints with usability and visual appeal.":
      "Το project ενίσχυσε τη σημασία του mobile-first design και της ισορροπίας ανάμεσα σε constraints, usability και visual appeal.",
  },
  "/products/hapi-project": {
    "Architectural Thesis": "Architectural Thesis",
    "Housing & Automated Production Infrastructure, an architectural thesis exploring modular 3D-printed housing and automated assembly for dense future cities.":
      "Architectural thesis για modular 3D-printed housing και automated assembly σε dense future cities.",
    "Research & Concept": "Research & Concept",
    "Addressing urban housing challenges": "Urban housing challenges",
    "Hapi explored how people might coexist in future megacities where housing demand, construction speed, and adaptability become increasingly urgent. The thesis proposed a modular housing system that could support variation without losing the efficiency of a repeatable construction logic.":
      "Το Hapi εξερεύνησε πώς μπορεί να λειτουργήσει η κατοίκηση σε future megacities, όπου housing demand, construction speed και adaptability γίνονται όλο και πιο πιεστικά. Η thesis πρότεινε ένα modular housing system που υποστηρίζει variation χωρίς να χάνει την efficiency μιας repeatable construction logic.",
    "The project proposes a large-scale structure composed of 3D-printed elements that are assembled on-site and elevated to their designated floors. Each home is generated through an algorithmic process, allowing different unit sizes and configurations to fit within a shared structural system.":
      "Το project προτείνει large-scale structure από 3D-printed elements που assembled on-site και ανεβαίνουν στους αντίστοιχους ορόφους. Κάθε home παράγεται με algorithmic process, ώστε διαφορετικά unit sizes και configurations να χωρούν σε κοινό structural system.",
    "Technical Studies": "Technical Studies",
    "Modular design and fabrication": "Modular design and fabrication",
    "The modular approach enabled flexible housing configurations within a scalable urban framework. Shortest path and density studies helped evaluate circulation, access, and livability across different aggregation options.":
      "Το modular approach επέτρεψε flexible housing configurations μέσα σε scalable urban framework. Shortest path και density studies βοήθησαν στην αξιολόγηση circulation, access και livability σε διαφορετικά aggregation options.",
    "Smart systems and algorithmic design": "Smart systems και algorithmic design",
    "The system supports cohabitation through units that can connect, expand, or adapt over time. Smart sensors and robotic systems were explored as part of the broader infrastructure, connecting the architectural concept to automated production and building management.":
      "Το system υποστηρίζει cohabitation μέσα από units που μπορούν να connect, expand ή adapt με τον χρόνο. Smart sensors και robotic systems εξερευνήθηκαν ως μέρος της broader infrastructure, συνδέοντας το architectural concept με automated production και building management.",
    "Modular components were analyzed into rulings for fabrication with hotwire cutting techniques, demonstrating advanced fabrication approaches for architectural-scale 3D printing.":
      "Τα modular components αναλύθηκαν σε rulings για fabrication με hotwire cutting techniques, δείχνοντας advanced fabrication approaches για architectural-scale 3D printing.",
    "Visualization": "Visualization",
    "Living in the modular city": "Living in the modular city",
    "Architectural illustrations showcase the potential of modular, algorithmically-designed housing systems to create diverse, adaptable living environments in dense urban contexts.":
      "Τα architectural illustrations δείχνουν πώς modular, algorithmically-designed housing systems μπορούν να δημιουργήσουν diverse και adaptable living environments σε dense urban contexts.",
  },
  "/products/thesis-project": {
    "Master's Thesis": "Master's Thesis",
    "Sole Researcher & Developer": "Sole Researcher & Developer",
    "A Grasshopper plugin and computational framework that uses Wave Function Collapse to generate architectural massing options from encoded 3D tiles.":
      "Grasshopper plugin και computational framework που χρησιμοποιεί Wave Function Collapse για να παράγει architectural massing options από encoded 3D tiles.",
    "Read Full Paper": "Read Full Paper",
    "Research": "Research",
    "Bridging game design and architecture": "Game design και architecture",
    "This project explores the intersection between architectural computation and procedural content generation. The thesis adapts the Wave Function Collapse algorithm, often used in game design, into a framework for generating early-stage architectural massing studies from encoded tilesets.":
      "Το project εξερευνά το intersection ανάμεσα σε architectural computation και procedural content generation. Η thesis προσαρμόζει τον Wave Function Collapse algorithm, γνωστό από game design, σε framework για early-stage architectural massing studies από encoded tilesets.",
    "The goal was to automate repetitive massing exploration without removing designer control. Architects can encode key elements into tile rules, then use the system to generate many valid design variations while maintaining constraints around density, direction, and adjacency.":
      "Στόχος ήταν να αυτοματοποιηθεί repetitive massing exploration χωρίς να χάνεται designer control. Οι architects μπορούν να encode key elements σε tile rules και να παράγουν valid design variations με constraints γύρω από density, direction και adjacency.",
    "Algorithm": "Algorithm",
    "Wave Function Collapse": "Wave Function Collapse",
    "WFC uses a constraint-solving approach, placing tiles only where their rules and relationships are valid. I adapted the logic from a two-dimensional image-generation technique into a three-dimensional architectural workflow, where each tile carries geometric and spatial meaning.":
      "Το WFC χρησιμοποιεί constraint-solving approach, τοποθετώντας tiles μόνο όπου τα rules και relationships είναι valid. Προσάρμοσα τη λογική από 2D image-generation technique σε 3D architectural workflow, όπου κάθε tile έχει geometric και spatial meaning.",
    "Technical Implementation": "Technical Implementation",
    "Platform and approach": "Platform and approach",
    "Built in Rhinoceros 3D with Grasshopper, the plugin uses custom WFC components. Architectural elements are encoded into digital tilesets with unique geometry-based identifiers. A voxel grid breaks input models into individual 3D tiles for processing, and the non-backtracking algorithm restarts quickly on contradictions for improved computational speed.":
      "Built in Rhinoceros 3D με Grasshopper, το plugin χρησιμοποιεί custom WFC components. Architectural elements encoded σε digital tilesets με geometry-based identifiers. Ένα voxel grid σπάει τα input models σε 3D tiles, ενώ ο non-backtracking algorithm κάνει γρήγορο restart σε contradictions.",
    "Users can define constraints for density, facade direction, and gradient control, while the system generates varied sizes while maintaining architectural constraints.":
      "Οι users ορίζουν constraints για density, facade direction και gradient control, ενώ το system παράγει variations που κρατούν τα architectural constraints.",
    "Results": "Results",
    "Flexible design variations": "Flexible design variations",
    "Architectural elements are divided into tiles for flexible manipulation and combination into new forms. The WFC algorithm ensures all generated designs adhere to predefined architectural constraints and rules.":
      "Τα architectural elements χωρίζονται σε tiles για flexible manipulation και νέους συνδυασμούς. Ο WFC algorithm διασφαλίζει ότι τα generated designs ακολουθούν predefined architectural constraints και rules.",
    "Sole researcher & developer": "Sole researcher & developer",
    "This was my individual master's thesis. I developed the theoretical framework, designed the tileset encoding system, implemented the WFC algorithm adaptation in C# for Grasshopper, and conducted the design experiments and evaluations.":
      "Αυτή ήταν η ατομική μου master's thesis. Ανέπτυξα το theoretical framework, σχεδίασα το tileset encoding system, υλοποίησα το WFC adaptation σε C# για Grasshopper και έκανα τα design experiments και evaluations.",
    "Future directions": "Future directions",
    "This research demonstrated procedural generation's potential to simplify tasks and offer real-time feedback, empowering creative exploration while maintaining constraint control. Machine learning integration could make the system adaptive, learning from designs to optimize for sustainability and aesthetics.":
      "Η research έδειξε τη δυναμική του procedural generation να απλοποιεί tasks και να προσφέρει real-time feedback, ενισχύοντας creative exploration με constraint control. Machine learning integration θα μπορούσε να κάνει το system adaptive και να optimize για sustainability και aesthetics.",
    "Extension to irregular grids would expand applicability, while refining the interface for accessibility across technical expertise levels could make this a valuable tool in architectural design's future.":
      "Η επέκταση σε irregular grids θα άνοιγε το applicability, ενώ ένα πιο accessible interface για διαφορετικά technical expertise levels θα μπορούσε να κάνει το tool χρήσιμο για το μέλλον του architectural design.",
  },
  "/products/workshop-design": {
    "Workshop": "Workshop",
    "Computational Designer": "Computational Designer",
    "A Digital Futures Workshop project exploring voxel-based housing systems, aggregation logic, and robotic fabrication techniques.":
      "Digital Futures Workshop project που εξερευνά voxel-based housing systems, aggregation logic και robotic fabrication techniques.",
    "Research & Precedents": "Research & Precedents",
    "Modular housing explorations": "Modular housing explorations",
    "The workshop began with a study of architectural precedents such as Alvenaria Social Housing and Habitat 67. These references helped frame modularity, aggregation, and geometric experimentation. The team then developed a voxel-based system for generating housing units with flexible size and configuration.":
      "Το workshop ξεκίνησε με μελέτη architectural precedents όπως Alvenaria Social Housing και Habitat 67. Αυτά τα references βοήθησαν να οριστούν modularity, aggregation και geometric experimentation. Η ομάδα ανέπτυξε voxel-based system για housing units με flexible size και configuration.",
    "We explored different ways of aggregating voxels to create efficient, livable structures with access to light, air, and circulation. Shortest path diagrams and density studies helped evaluate how people could move through the habitat and where the system became too dense or disconnected.":
      "Εξερευνήσαμε διαφορετικούς τρόπους aggregation των voxels για efficient και livable structures με access σε light, air και circulation. Shortest path diagrams και density studies βοήθησαν να αξιολογηθεί η κίνηση μέσα στο habitat και πού το system γινόταν υπερβολικά dense ή disconnected.",
    "From voxels to assembled units": "From voxels to assembled units",
    "Different graph-based methods for grouping voxels were tested to create diverse configurations. I contributed to the computational design process, visual studies, and assembly logic, helping translate abstract aggregation rules into units, facade variations, balconies, rooftops, and exploded diagrams.":
      "Δοκιμάστηκαν διαφορετικές graph-based methods για grouping voxels και δημιουργία diverse configurations. Συνέβαλα στο computational design process, visual studies και assembly logic, μεταφράζοντας abstract aggregation rules σε units, facade variations, balconies, rooftops και exploded diagrams.",
    "Robotic fabrication techniques": "Robotic fabrication techniques",
    "Robotic fabrication techniques were explored for constructing these complex geometries. Modular components were analyzed into rulings for fabrication with hotwire cutting techniques. The modular approach enabled flexible and scalable housing solutions adaptable to various urban contexts.":
      "Εξερευνήθηκαν robotic fabrication techniques για την κατασκευή αυτών των complex geometries. Τα modular components αναλύθηκαν σε rulings για hotwire cutting fabrication. Το modular approach υποστήριξε flexible και scalable housing solutions για διαφορετικά urban contexts.",
    "Shortest path and density studies ensured functional and livable environments with optimal circulation, demonstrating how computational design can address real-world spatial challenges.":
      "Shortest path και density studies βοήθησαν στη δημιουργία functional και livable environments με optimal circulation, δείχνοντας πώς το computational design μπορεί να αντιμετωπίσει real-world spatial challenges.",
  },
};

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function replaceTextNode(node, map) {
  const normalized = normalizeText(node.textContent);
  if (!normalized || !map[normalized]) return;

  const leading = node.textContent.match(/^\s*/)?.[0] ?? "";
  const trailing = node.textContent.match(/\s*$/)?.[0] ?? "";
  node.textContent = `${leading}${map[normalized]}${trailing}`;
}

export function translateCaseStudy(root, path, locale) {
  if (!root) return;

  const englishToGreek = {
    ...commonTranslations,
    ...(routeTranslations[path] || {}),
  };
  const map =
    locale === "el"
      ? englishToGreek
      : Object.fromEntries(Object.entries(englishToGreek).map(([english, greek]) => [greek, english]));

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalizeText(node.textContent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  nodes.forEach((node) => replaceTextNode(node, map));
}
