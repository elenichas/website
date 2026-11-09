import sharedTranslations, { sharedPatterns } from "./translations/shared.js";
import homeTranslations from "./translations/home.js";
import vintedTranslations, { vintedPatterns } from "./translations/vinted.js";
import aiSandboxTranslations, { aiSandboxPatterns } from "./translations/aiSandbox.js";
import caseStudyExtras from "./translations/caseStudyExtras.js";
import plumPulseTranslations, { plumPulsePatterns } from "./translations/plumPulse.js";

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
    "Vintage Coach collectors and resellers rely on fragmented information spread across forums, social media groups, and personal knowledge. Authentication is hard. Serial number formats changed across three distinct eras, and understanding what a legitimate serial looks like for a specific bag requires cross-referencing multiple data points that didn't exist in one place.":
      "Οι συλλέκτες και resellers vintage Coach βασίζονται σε πληροφορίες που είναι σκόρπιες σε forums, ομάδες social media και προσωπικές σημειώσεις. Ο έλεγχος αυθεντικότητας είναι δύσκολος, γιατί τα serial number formats αλλάζουν ανά εποχή και χρειάζεται σύγκριση πολλών στοιχείων για να καταλάβεις αν μια τσάντα βγάζει νόημα.",
    "A searchable catalog with a serial-number decoder": "Ένας κατάλογος με αναζήτηση και αποκωδικοποιητή serial",
    "I built a web application that structures publicly available catalog data into a searchable, filterable reference with detailed product pages, a color encyclopedia, and an interactive serial number decoder. The app is currently private, with plans to share it publicly.":
      "Έφτιαξα ένα web application που οργανώνει δημόσια διαθέσιμα δεδομένα καταλόγων σε αναζητήσιμη και φιλτραρίσιμη βάση αναφοράς, με αναλυτικές product pages, color encyclopedia και interactive serial number decoder. Προς το παρόν το app είναι ιδιωτικό, με στόχο να γίνει δημόσιο.",
    "778 styles, fully searchable": "778 styles με πλήρη αναζήτηση",
    "The main catalog offers filtering by category, decade, and color with progressive loading. Each bag links to a detail page with dimensions, volume, strap length, production years, and available colorways, making the dataset easier to browse than a static reference list.":
      "Ο βασικός κατάλογος επιτρέπει φιλτράρισμα ανά κατηγορία, δεκαετία και χρώμα. Κάθε τσάντα οδηγεί σε detail page με dimensions, volume, strap length, production years και διαθέσιμα colorways, ώστε το dataset να διαβάζεται πιο εύκολα από μια στατική λίστα.",
    "Phone at the flea market, laptop at home": "Κινητό στο παζάρι, laptop στο σπίτι",
    "The interface adapts from mobile through tablet to desktop. Collectors can reference the catalog at flea markets on their phone or browse the full collection at home on a larger screen.":
      "Το interface προσαρμόζεται από κινητό σε tablet και desktop. Έτσι κάποιος μπορεί να συμβουλευτεί τον κατάλογο σε flea market από το κινητό ή να εξερευνήσει όλη τη συλλογή σε μεγαλύτερη οθόνη.",
    "Live Demo": "Live Demo",
    "Searching, filtering and decoding": "Αναζήτηση, φιλτράρισμα και αποκωδικοποίηση",
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
    "This project combines three things I care about: sustainability, fashion and data. The biggest challenge was turning scraped and publicly available reference material into a structured dataset that could support useful interactions. Designing the decoder taught me how to present complex, multi-format parsing logic in a way that feels simple while remaining transparent about what the system checks and why.":
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
    "For a Western learner, Arabic means a new script written right to left, letters that change shape depending on their position, short vowels written as marks instead of letters, and large differences between dialects. Most resources teach Modern Standard Arabic, which is not what people speak day to day.":
      "Για έναν δυτικό μαθητή, τα αραβικά σημαίνουν νέο αλφάβητο που γράφεται από δεξιά προς τα αριστερά, γράμματα που αλλάζουν μορφή ανάλογα με τη θέση τους, βραχέα φωνήεντα που γράφονται ως σημάδια και όχι ως γράμματα, και μεγάλες διαφορές ανάμεσα στις διαλέκτους. Οι περισσότερες πηγές διδάσκουν Σύγχρονα Πρότυπα Αραβικά, που δεν είναι αυτά που μιλούν οι άνθρωποι στην καθημερινότητα.",
    "I wanted short lessons that deal with one of these problems at a time, and quizzes that tell you straight away whether you got it right.":
      "Ήθελα σύντομα μαθήματα που αντιμετωπίζουν ένα από αυτά τα ζητήματα τη φορά, και κουίζ που σου λένε αμέσως αν απάντησες σωστά.",
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
    "16 common Egyptian Arabic phrases with cultural context and pronunciation guides": "16 συνηθισμένες φράσεις στα αιγυπτιακά αραβικά με πολιτισμικό πλαίσιο και οδηγό προφοράς",
    "Interactive Quizzes": "Interactive Quizzes",
    "Multiple-choice exercises with instant feedback, scoring, and progress tracking across each lesson": "Ασκήσεις πολλαπλής επιλογής με άμεσο feedback, βαθμολογία και παρακολούθηση προόδου",
    "Study then practice": "Μελέτη και μετά εξάσκηση",
    "Each lesson has two phases: a study mode with reference tables, examples and explanations, then quiz exercises on the same material. Learners can switch between the two at any time.":
      "Κάθε μάθημα έχει δύο φάσεις: ένα study mode με πίνακες αναφοράς, παραδείγματα και επεξηγήσεις, και μετά ασκήσεις κουίζ πάνω στο ίδιο υλικό. Ο μαθητής μπορεί να περνά από το ένα στο άλλο οποιαδήποτε στιγμή.",
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
    "The greetings lesson teaches 16 common Egyptian Arabic phrases organized by category: greetings, responses, courtesies, farewells, introductions, and basics. Each phrase includes the Arabic script, transliteration, and meaning, with cultural context explaining Egyptian customs around greetings.":
      "Το μάθημα χαιρετισμών περιλαμβάνει 16 βασικές Egyptian Arabic φράσεις οργανωμένες σε κατηγορίες όπως χαιρετισμοί, απαντήσεις, ευγένειες και συστάσεις. Κάθε φράση έχει αραβική γραφή, transliteration, σημασία και πολιτισμικό πλαίσιο.",
    "Dark glassmorphism with warm tones": "Dark glassmorphism με warm tones",
    "The amber and gold palette comes from desert landscapes, set on a dark background with translucent glass cards. Arabic text uses Noto Sans Arabic for legibility, and colours are defined in oklch() so different hues keep the same perceived brightness.":
      "Η παλέτα σε κεχριμπαρί και χρυσό τόνους προέρχεται από τα τοπία της ερήμου, πάνω σε σκούρο φόντο με ημιδιάφανες γυάλινες κάρτες. Το αραβικό κείμενο χρησιμοποιεί Noto Sans Arabic για αναγνωσιμότητα, και τα χρώματα ορίζονται σε oklch() ώστε διαφορετικές αποχρώσεις να έχουν την ίδια αντιληπτή φωτεινότητα.",
    "Modern web stack": "Modern web stack",
    "Built with Next.js, React, and TypeScript. The UI uses Tailwind CSS with custom components, Radix UI primitives for accessibility, and Lucide icons. The architecture leaves room for bilingual content as the app grows.":
      "Χτισμένο με Next.js, React και TypeScript. Το UI χρησιμοποιεί Tailwind CSS, custom components, Radix UI primitives για accessibility και Lucide icons. Η αρχιτεκτονική αφήνει χώρο για δίγλωσσο περιεχόμενο όσο μεγαλώνει το app.",
    "Sole designer & developer": "Sole designer & developer",
    "End-to-end ownership of product design, UI implementation, lesson structure, quiz logic, and content modeling. The project is intentionally personal, but it uses the same product thinking I would apply to a larger learning platform.":
      "Είχα end-to-end ownership σε product design, UI implementation, δομή μαθημάτων, quiz logic και content modeling. Το project είναι προσωπικό, αλλά χρησιμοποιεί το ίδιο product thinking που θα εφάρμοζα σε μεγαλύτερη learning platform.",
    "Designing for script-based language learning": "Design για εκμάθηση γλώσσας με νέο σύστημα γραφής",
    "This project taught me how to handle bidirectional text (RTL Arabic alongside LTR English/Greek), design quiz systems that provide encouraging feedback without being punitive, and build progressive learning pathways that respect the complexity of a new writing system.":
      "Το project με βοήθησε να δουλέψω με bidirectional text, RTL αραβικά μαζί με LTR αγγλικά/ελληνικά, να σχεδιάσω quiz systems με ενθαρρυντικό feedback και να χτίσω μαθησιακές διαδρομές που σέβονται την πολυπλοκότητα ενός νέου συστήματος γραφής.",
    "I keep adding to the app as my classes continue. Each new lesson with my teacher can become a new study screen or quiz.":
      "Συνεχίζω να προσθέτω υλικό στην εφαρμογή όσο προχωρούν τα μαθήματά μου. Κάθε νέο μάθημα με τη δασκάλα μου μπορεί να γίνει μια νέα οθόνη μελέτης ή ένα νέο κουίζ.",
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
    "Analysis of sunlight and terrain to choose a site and orient the habitat": "Ανάλυση ηλιασμού και εδάφους για την επιλογή θέσης και τον προσανατολισμό του habitat",
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
    "The workflow runs from terrain analysis to final configuration, and any step can be rerun to try another option.":
      "Η ροή ξεκινά από την ανάλυση εδάφους και φτάνει στην τελική διαμόρφωση, και κάθε βήμα μπορεί να επαναληφθεί για να δοκιμαστεί μια άλλη επιλογή.",
    "Module typologies": "Module typologies",
    "A catalog of specialized units designed for different functions within the lunar habitat, each optimized for specific spatial and functional requirements.":
      "Ένας κατάλογος από specialized units για διαφορετικές λειτουργίες μέσα στο lunar habitat, με κάθε module optimized για συγκεκριμένες χωρικές και λειτουργικές απαιτήσεις.",
    "Room organization": "Room organization",
    "Spatial diagrams showing how different functional spaces are organized and connected within the modular system.":
      "Χωρικά diagrams που δείχνουν πώς οργανώνονται και συνδέονται οι λειτουργικοί χώροι μέσα στο modular system.",
    "Interactive System": "Interactive System",
    "Configure it and see the result in 3D": "Διαμόρφωση με άμεσο αποτέλεσμα σε 3D",
    "The 3D environment lets users explore habitat layouts as configurable systems. Module choices, connections, and spatial relationships can be tested visually, making the automation logic easier to understand than through diagrams alone.":
      "Το 3D environment επιτρέπει στους χρήστες να εξερευνούν habitat layouts ως configurable systems. Οι επιλογές modules, οι συνδέσεις και οι χωρικές σχέσεις δοκιμάζονται οπτικά, κάνοντας το automation logic πιο κατανοητό από ένα απλό diagram.",
    "Exploration": "Exploration",
    "Design explorations": "Design explorations",
    "Multiple design iterations exploring different spatial configurations and optimization strategies for the lunar habitat system.":
      "Πολλαπλά design iterations για διαφορετικές χωρικές διατάξεις και optimization strategies στο lunar habitat system.",
    "Design system architecture & 3D interface": "Design system architecture & 3D interface",
    "Within the team, I led the product design for the configurator interface, designed the module catalog system, and developed the interactive 3D viewer. I collaborated with algorithm engineers to connect the interface to the optimization and spatial analysis logic behind the concept.":
      "Μέσα στην ομάδα, ανέλαβα το product design για το configurator interface, σχεδίασα το module catalog system και ανέπτυξα το interactive 3D viewer. Συνεργάστηκα με algorithm engineers για να συνδεθεί το interface με τη λογική optimization και spatial analysis.",
    "What the concept showed": "Τι έδειξε το concept",
    "The lunar scenario gave the conference audience a concrete way into design automation methods. It showed catalogs, rules, optimisation and 3D interaction working together in one product, even though the setting is hypothetical.":
      "Το σενάριο της Σελήνης έδωσε στο κοινό του συνεδρίου έναν συγκεκριμένο τρόπο να κατανοήσει τις μεθόδους design automation. Έδειξε καταλόγους, κανόνες, βελτιστοποίηση και 3D αλληλεπίδραση να λειτουργούν μαζί σε ένα προϊόν, παρότι το πλαίσιο είναι υποθετικό.",
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
    "Visual mapping of utility networks, pathways, and dependencies between facility components": "Visual mapping των δικτύων, διαδρομών και dependencies μεταξύ components",
    "Rule-Based Validation": "Rule-Based Validation",
    "Automated checks that flag invalid placements, missing connections, and spatial conflicts": "Automated checks για μη έγκυρες τοποθετήσεις, missing connections και spatial conflicts",
    "Node-Based Interface": "Node-Based Interface",
    "A relationship model for defining how components connect and depend on one another": "Relationship model που δείχνει πώς τα components συνδέονται και εξαρτώνται μεταξύ τους",
    "Training Tool": "Training Tool",
    "A clearer way for teams to understand facility logic, unit behavior, and design constraints": "Πιο καθαρός τρόπος για να κατανοούν οι ομάδες facility logic, unit behavior και design constraints",
    "Consistent Data Structure": "Consistent Data Structure",
    "Shared data patterns that make components easier to compare, configure, and reuse": "Shared data patterns που κάνουν τα components πιο εύκολα στη σύγκριση, τη διαμόρφωση και την επαναχρησιμοποίηση",
    "From wireframes to implementation": "Από wireframes σε implementation",
    "The design process began by mapping the existing engineering workflow into product flows: selecting a facility type, choosing units from a catalog, reviewing properties, defining network relationships, and surfacing validation alerts when rules were broken.":
      "Το design process ξεκίνησε με mapping του engineering workflow σε product flows: επιλογή facility type, units από catalog, έλεγχος των properties, network relationships και validation alerts όταν κάποιο rule σπάει.",
    "Component Details": "Component Details",
    "What each unit records": "Τι καταγράφει κάθε μονάδα",
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
    "Rules flag broken designs": "Οι κανόνες εντοπίζουν λάθη",
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
    "From manual interpretation to encoded rules": "Από τη χειροκίνητη ερμηνεία σε κωδικοποιημένους κανόνες",
    "The configurator moved facility design from manual interpretation toward structured automation. With units catalogued, data standardised and validation rules encoded, teams configured facilities the same way and checked them against the same rules.":
      "Ο configurator μετέφερε τον σχεδιασμό εγκαταστάσεων από τη χειροκίνητη ερμηνεία σε δομημένο αυτοματισμό. Με καταλογογραφημένες μονάδες, τυποποιημένα δεδομένα και κωδικοποιημένους κανόνες ελέγχου, οι ομάδες διαμόρφωναν τις εγκαταστάσεις με τον ίδιο τρόπο και τις έλεγχαν με τους ίδιους κανόνες.",
    "It also acted as a training and communication tool: teams could see how units connect, where rules apply, and why alerts were triggered, making complex plant logic easier to review and explain.":
      "Λειτούργησε επίσης ως εργαλείο training και communication: οι ομάδες μπορούσαν να δουν πώς συνδέονται units, πού εφαρμόζονται rules και γιατί εμφανίζονται alerts, κάνοντας το plant logic πιο εύκολο να εξηγηθεί.",
  },
  "/products/filos-mobile-app": {
    "Course Project": "Course Project",
    "1 Month (2023)": "1 Month (2023)",
    "A course project exploring how people with disabilities and volunteer activity companions could build trusted connections around shared interests, with control over access needs, communication, boundaries, and safety.":
      "Course project που διερευνά πώς άτομα με αναπηρία και εθελοντές συνοδοί δραστηριοτήτων μπορούν να χτίσουν σχέσεις εμπιστοσύνης γύρω από κοινά ενδιαφέροντα, με έλεγχο στις ανάγκες πρόσβασης, την επικοινωνία, τα όρια και την ασφάλεια.",
    "Barriers to joining in": "Εμπόδια στη συμμετοχή",
    "People with disabilities can face physical, sensory, and social barriers to participation. At the same time, people who want to volunteer may not know what respectful support looks like. So the project designs a whole service, where both people know what to expect and the participant stays in control.":
      "Τα άτομα με αναπηρία μπορεί να συναντούν σωματικά, αισθητηριακά και κοινωνικά εμπόδια στη συμμετοχή. Ταυτόχρονα, όσοι θέλουν να γίνουν εθελοντές μπορεί να μην ξέρουν πώς μοιάζει η υποστήριξη με σεβασμό. Γι' αυτό το project σχεδιάζει μια ολόκληρη υπηρεσία, όπου και οι δύο ξέρουν τι να περιμένουν και ο συμμετέχων έχει τον έλεγχο.",
    "A platform for shared experiences": "Platform για κοινές εμπειρίες",
    "Filos proposes a mobile experience where people choose an activity, decide what information to share, review a potential companion, and agree on a plan together. Access preferences and safety controls are part of the journey from the beginning. The name means \"friendship\" in Greek.":
      "Το Filos προτείνει μια mobile εμπειρία όπου οι άνθρωποι επιλέγουν μια δραστηριότητα, αποφασίζουν ποιες πληροφορίες θα μοιραστούν, βλέπουν έναν πιθανό συνοδό και συμφωνούν μαζί σε ένα σχέδιο. Οι προτιμήσεις πρόσβασης και τα στοιχεία ασφάλειας είναι μέρος της διαδρομής από την αρχή. Το όνομα σημαίνει «φιλία» στα ελληνικά.",
    "Users": "Χρήστες",
    "Designing for diverse needs": "Design για διαφορετικές ανάγκες",
    "As part of the course project, I consulted my sister, a special needs teacher, and had a couple of early feedback sessions with her students. The concept considered a range of access needs, including wheelchair access, blindness, and autism.":
      "Ήταν σημαντικό να καταλάβω τους ανθρώπους που θα χρησιμοποιούσαν το Filos. Για το course project συμβουλεύτηκα την αδερφή μου, special needs teacher, και είχα πρώιμο feedback με μαθητές της. Το concept έλαβε υπόψη διαφορετικές ανάγκες πρόσβασης, όπως πρόσβαση με αμαξίδιο, τύφλωση και αυτισμό.",
    "Use Scenarios": "Σενάρια χρήσης",
    "Two perspectives behind the concept": "Δύο οπτικές πίσω από το concept",
    "Instead of fictional character portraits, the project can be read through two practical situations: someone with special-education experience helping shape safe support, and someone with access needs looking for a respectful way to join everyday activities.":
      "Αντί για fictional personas, το project διαβάζεται μέσα από δύο πρακτικές καταστάσεις: κάποιον με εμπειρία στην ειδική αγωγή που βοηθά να οριστεί ασφαλής υποστήριξη, και κάποιον με ανάγκες πρόσβασης που ψάχνει έναν σεβαστικό τρόπο να συμμετέχει σε καθημερινές δραστηριότητες.",
    "Special-education perspective": "Οπτική ειδικής αγωγής",
    "The advisor who checks whether support is realistic": "Το άτομο που ελέγχει αν η υποστήριξη είναι ρεαλιστική",
    "A special-education professional or student could use Filos to review profiles, clarify access needs, and help volunteers understand what makes an activity safe, respectful, and manageable before a meeting is arranged.":
      "Ένας επαγγελματίας ή σπουδαστής ειδικής αγωγής θα μπορούσε να χρησιμοποιήσει το Filos για να δει profiles, να ξεκαθαρίσει ανάγκες πρόσβασης και να βοηθήσει εθελοντές να καταλάβουν τι κάνει μια δραστηριότητα ασφαλή, σεβαστική και διαχειρίσιμη.",
    "Participant perspective": "Οπτική συμμετέχοντα",
    "The person choosing connection on their own terms": "Το άτομο που επιλέγει σύνδεση με τους δικούς του όρους",
    "A person with a disability could use the app to express preferences, find activities that fit their needs, and decide what information to share before connecting with a volunteer around a simple shared plan.":
      "Ένα άτομο με αναπηρία θα μπορούσε να χρησιμοποιήσει το app για να εκφράσει προτιμήσεις, να βρει δραστηριότητες που ταιριάζουν στις ανάγκες του και να αποφασίσει τι πληροφορία θέλει να μοιραστεί πριν συνδεθεί με εθελοντή.",
    "Design Priorities": "Design Priorities",
    "Making support feel respectful and easy to arrange": "Υποστήριξη με σεβασμό και εύκολη οργάνωση",
    "Access needs first": "Πρώτα οι ανάγκες πρόσβασης",
    "Profiles make practical needs visible early, so activities can be planned around mobility, sensory comfort, communication preferences, or other support requirements.":
      "Τα profiles κάνουν τις πρακτικές ανάγκες ορατές από νωρίς, ώστε οι δραστηριότητες να οργανώνονται γύρω από κινητικότητα, αισθητηριακή άνεση, προτιμήσεις επικοινωνίας ή άλλες ανάγκες υποστήριξης.",
    "Trust before matching": "Trust before matching",
    "The experience focuses on clear expectations, simple choices, and gentle onboarding instead of pushing people quickly into conversations.":
      "Η εμπειρία εστιάζει σε καθαρές προσδοκίες, απλές επιλογές και ήπιο onboarding, αντί να σπρώχνει γρήγορα τους ανθρώπους σε συζητήσεις.",
    "Shared activities": "Κοινές δραστηριότητες",
    "Connection is framed around everyday experiences, helping volunteers and participants start from mutual interests rather than abstract offers of help.":
      "Η σύνδεση χτίζεται γύρω από καθημερινές εμπειρίες, βοηθώντας εθελοντές και συμμετέχοντες να ξεκινούν από κοινά ενδιαφέροντα αντί για γενικές προσφορές βοήθειας.",
    "Screens": "Οθόνες",
    "Key prototype flows": "Key prototype flows",
    "The prototype explores onboarding, profile setup, activity discovery, and connection moments as a lightweight service journey rather than a single matching screen.":
      "Το prototype εξερευνά onboarding, profile setup, ανακάλυψη δραστηριοτήτων και σημεία σύνδεσης ως lightweight service journey, όχι ως ένα απλό matching screen.",
    "Interactive prototype": "Interactive prototype",
    "Designing for accessibility and trust": "Designing for accessibility and trust",
    "I created a visual identity emphasizing inclusivity and trust. The interface uses large controls, clear navigation, high-contrast elements, and simple flows so the concept could be discussed through an accessibility lens from the beginning.":
      "Δημιούργησα visual identity με έμφαση στη συμπερίληψη και την εμπιστοσύνη. Το interface χρησιμοποιεί μεγάλα controls, καθαρή πλοήγηση, υψηλή αντίθεση και απλές ροές, ώστε το concept να συζητηθεί εξαρχής μέσα από accessibility lens.",
    "Responsive System": "Responsive System",
    "A calmer interface across screen sizes": "Πιο ήρεμο interface σε διαφορετικά μεγέθη οθόνης",
    "The responsive layouts keep the same emphasis on legibility, clear hierarchy, and accessible actions, so the concept can be understood across different devices and presentation formats.":
      "Τα responsive layouts κρατούν την έμφαση σε αναγνωσιμότητα, καθαρή ιεραρχία και accessible actions, ώστε το concept να διαβάζεται σωστά σε διαφορετικές συσκευές και presentation formats.",
    "Practicing inclusive design": "Practicing inclusive design",
    "Through this course project, I learned to treat accessibility as a starting point rather than a final checklist. Revisiting the concept also made an important gap visible: an accessible interface is not enough when a service introduces strangers and handles sensitive personal information.":
      "Μέσα από αυτό το course project έμαθα να βλέπω το accessibility ως αφετηρία και όχι ως checklist στο τέλος. Επιστρέφοντας στο concept, φάνηκε και ένα σημαντικό κενό: ένα προσβάσιμο interface δεν αρκεί όταν μια υπηρεσία φέρνει σε επαφή αγνώστους και διαχειρίζεται ευαίσθητα προσωπικά δεδομένα.",
    "The next phase would test the preference, matching, shared-plan, and check-in flows with participants who have different access needs. Success would be measured through perceived control, comprehension of what is shared, confidence before an activity, and whether access preferences were respected.":
      "Η επόμενη φάση θα δοκίμαζε τις ροές προτιμήσεων, αντιστοίχισης, κοινού σχεδίου και check-in με συμμετέχοντες που έχουν διαφορετικές ανάγκες πρόσβασης. Η επιτυχία θα μετριόταν με βάση την αίσθηση ελέγχου, την κατανόηση του τι μοιράζεται, τη σιγουριά πριν από μια δραστηριότητα και το αν τηρήθηκαν οι προτιμήσεις πρόσβασης.",
  },
  "/products/brew-crumb": {
    "A course project for a real high-traffic cafe near my office, exploring how mobile ordering could reduce morning wait times.":
      "Course project για ένα πραγματικό cafe με πολλή κίνηση κοντά στο γραφείο μου, που εξερευνά πώς το mobile ordering μπορεί να μειώσει την πρωινή αναμονή.",
    "Solving the morning rush": "Λύνοντας την πρωινή κίνηση",
    "The cafe had heavy morning traffic from nearby office workers, creating long queues during the commute window. For the course project, I used this real setting as the basis for a mobile ordering concept focused on speed, clarity, and pickup confidence.":
      "Το cafe είχε έντονη πρωινή κίνηση από εργαζόμενους σε κοντινά γραφεία, με μεγάλες ουρές την ώρα της μετακίνησης προς τη δουλειά. Για το course project χρησιμοποίησα αυτό το πραγματικό setting ως βάση για mobile ordering concept με έμφαση στην ταχύτητα, την καθαρότητα και τη σιγουριά στο pickup.",
    "Order ahead, skip the line": "Παραγγελία νωρίτερα, χωρίς ουρά",
    "A mobile app concept enabling preorders, pickup scheduling, and order status updates. Customers can browse the menu, choose a pickup time, and understand when their order is ready without waiting in the full queue.":
      "Mobile app concept για preorders, pickup scheduling και order status updates. Οι πελάτες μπορούν να δουν το menu, να επιλέξουν ώρα pickup και να ξέρουν πότε είναι έτοιμη η παραγγελία χωρίς να περιμένουν στην ουρά.",
    "Process": "Process",
    "From research to prototype": "From research to prototype",
    "I observed the cafe during busy morning periods and translated the patterns into course deliverables: personas, journey maps, wireframes, and a high-fidelity prototype. The main opportunity was reducing uncertainty around ordering time, queue length, and pickup readiness.":
      "Παρατήρησα το cafe σε ώρες έντονης πρωινής κίνησης και μετέτρεψα τα patterns σε course deliverables: personas, journey maps, wireframes και high-fidelity prototype. Η βασική ευκαιρία ήταν να μειωθεί η αβεβαιότητα γύρω από τον χρόνο παραγγελίας, το μήκος της ουράς και την ετοιμότητα για pickup.",
    "Design": "Design",
    "Colour and type": "Χρώμα και τυπογραφία",
    "The palette pairs deep forest green with golden cream. Sansation headings sit over Inter body text, which keeps menu items easy to scan on a phone.":
      "Η παλέτα συνδυάζει βαθύ πράσινο με χρυσαφί κρεμ. Οι τίτλοι είναι σε Sansation και το κείμενο σε Inter, ώστε τα προϊόντα του μενού να διαβάζονται εύκολα στο κινητό.",
    "Design system": "Design system",
    "Course project insights": "Course project insights",
    "Through the Google UX Design curriculum, I practiced research synthesis, persona development, wireframing, and high-fidelity prototyping. Because the project was based on a real cafe but completed as a course exercise, I focused on showing a realistic service concept without overstating production impact.":
      "Μέσα από το Google UX Design curriculum, εξασκήθηκα σε research synthesis, persona development, wireframing και high-fidelity prototyping. Επειδή το project βασίστηκε σε πραγματικό cafe αλλά ήταν άσκηση μαθήματος, εστίασα σε ένα realistic service concept χωρίς να υπερβάλλω για production impact.",
    "The main lesson was that someone ordering on the way to work needs pickup time, price and confirmation visible without scrolling.":
      "Το βασικό συμπέρασμα ήταν ότι κάποιος που παραγγέλνει στον δρόμο για τη δουλειά χρειάζεται να βλέπει την ώρα παραλαβής, την τιμή και την επιβεβαίωση χωρίς scroll.",
  },
  "/products/hapi-project": {
    "Architectural Thesis": "Architectural Thesis",
    "Housing & Automated Production Infrastructure, an architectural thesis exploring modular 3D-printed housing and automated assembly for dense future cities.":
      "Architectural thesis για modular 3D-printed housing και automated assembly σε πυκνές πόλεις του μέλλοντος.",
    "Research & Concept": "Research & Concept",
    "Addressing urban housing challenges": "Προκλήσεις αστικής κατοίκησης",
    "Hapi explored how people might coexist in future megacities where housing demand, construction speed, and adaptability become increasingly urgent. The thesis proposed a modular housing system that could support variation without losing the efficiency of a repeatable construction logic.":
      "Το Hapi εξερεύνησε πώς μπορεί να λειτουργήσει η κατοίκηση σε μελλοντικές megacities, όπου η ζήτηση για κατοικία, η ταχύτητα κατασκευής και η προσαρμοστικότητα γίνονται όλο και πιο πιεστικά. Η thesis πρότεινε ένα modular housing system που υποστηρίζει ποικιλία χωρίς να χάνει την αποδοτικότητα μιας repeatable construction logic.",
    "The project proposes a large-scale structure of 3D-printed elements, assembled on site and lifted into place floor by floor. An algorithm generates each home, so units of different sizes and layouts fit within one shared structural system.":
      "Το project προτείνει μια μεγάλης κλίμακας κατασκευή από 3D-printed στοιχεία, που συναρμολογούνται επί τόπου και ανυψώνονται στη θέση τους όροφο προς όροφο. Κάθε κατοικία παράγεται από έναν αλγόριθμο, ώστε μονάδες διαφορετικού μεγέθους και διάταξης να χωρούν σε ένα κοινό φέρον σύστημα.",
    "Technical Studies": "Technical Studies",
    "Modular design and fabrication": "Modular design and fabrication",
    "The modular approach allowed many housing layouts within one repeatable urban structure. Shortest-path and density studies compared circulation, access and livability across different aggregation options.":
      "Η modular προσέγγιση επέτρεψε πολλές διατάξεις κατοικιών μέσα σε μία επαναλαμβανόμενη αστική δομή. Μελέτες shortest path και πυκνότητας σύγκριναν την κυκλοφορία, την πρόσβαση και την ποιότητα διαβίωσης σε διαφορετικές επιλογές aggregation.",
    "Smart systems and algorithmic design": "Smart systems και algorithmic design",
    "The system supports cohabitation through units that can connect, expand, or adapt over time. Smart sensors and robotic systems were explored as part of the broader infrastructure, connecting the architectural concept to automated production and building management.":
      "Το σύστημα υποστηρίζει cohabitation μέσα από units που μπορούν να συνδέονται, να επεκτείνονται ή να προσαρμόζονται με τον χρόνο. Smart sensors και robotic systems εξερευνήθηκαν ως μέρος της ευρύτερης υποδομής, συνδέοντας το architectural concept με automated production και building management.",
    "The modular components were broken down into ruled surfaces so they could be fabricated by hot-wire cutting.":
      "Τα modular components αναλύθηκαν σε ευθειογενείς επιφάνειες (rulings), ώστε να κατασκευαστούν με κοπή θερμού σύρματος.",
    "Visualization": "Visualization",
    "Living in the modular city": "Κατοίκηση στη modular πόλη",
    "The illustrations show what everyday life could look like in the generated housing, with different unit types side by side in a dense city.":
      "Οι εικονογραφήσεις δείχνουν πώς θα μπορούσε να είναι η καθημερινή ζωή στις κατοικίες που παράγει το σύστημα, με διαφορετικούς τύπους μονάδων δίπλα δίπλα σε μια πυκνή πόλη.",
  },
  "/products/thesis-project": {
    "Master's Thesis": "Master's Thesis",
    "Sole Researcher & Developer": "Sole Researcher & Developer",
    "A Grasshopper plugin and computational framework that uses Wave Function Collapse to generate architectural massing options from encoded 3D tiles.":
      "Grasshopper plugin και computational framework που χρησιμοποιεί Wave Function Collapse για να παράγει architectural massing options από encoded 3D tiles.",
    "Read Full Paper": "Read Full Paper",
    "Research": "Research",
    "Using a game-design algorithm for architecture": "Ένας αλγόριθμος από τα παιχνίδια στην αρχιτεκτονική",
    "The thesis adapts Wave Function Collapse, a procedural generation algorithm common in game design, into a framework that generates early-stage architectural massing studies from encoded tilesets.":
      "Η διπλωματική προσαρμόζει τον Wave Function Collapse, έναν αλγόριθμο procedural generation που χρησιμοποιείται συχνά στα παιχνίδια, σε ένα framework που παράγει αρχικές μελέτες όγκων από κωδικοποιημένα tilesets.",
    "The goal was to automate repetitive massing exploration without removing designer control. Architects can encode key elements into tile rules, then use the system to generate many valid design variations while maintaining constraints around density, direction, and adjacency.":
      "Στόχος ήταν να αυτοματοποιηθεί το repetitive massing exploration χωρίς να χάνεται ο έλεγχος του designer. Οι architects μπορούν να κωδικοποιούν key elements σε tile rules και να παράγουν valid design variations με constraints γύρω από density, direction και adjacency.",
    "Algorithm": "Algorithm",
    "Wave Function Collapse": "Wave Function Collapse",
    "WFC uses a constraint-solving approach, placing tiles only where their rules and relationships are valid. I adapted the logic from a two-dimensional image-generation technique into a three-dimensional architectural workflow, where each tile carries geometric and spatial meaning.":
      "Το WFC χρησιμοποιεί constraint-solving approach, τοποθετώντας tiles μόνο όπου τα rules και relationships είναι valid. Προσάρμοσα τη λογική από 2D image-generation technique σε 3D architectural workflow, όπου κάθε tile έχει γεωμετρική και χωρική σημασία.",
    "Technical Implementation": "Technical Implementation",
    "Platform and approach": "Platform and approach",
    "Built in Rhinoceros 3D with Grasshopper, the plugin uses custom WFC components. Architectural elements are encoded into digital tilesets with unique geometry-based identifiers. A voxel grid breaks input models into individual 3D tiles for processing, and the non-backtracking algorithm restarts quickly on contradictions for improved computational speed.":
      "Χτισμένο σε Rhinoceros 3D με Grasshopper, το plugin χρησιμοποιεί custom WFC components. Τα architectural elements κωδικοποιούνται σε digital tilesets με geometry-based identifiers. Ένα voxel grid σπάει τα input models σε 3D tiles, ενώ ο non-backtracking algorithm κάνει γρήγορο restart σε contradictions.",
    "Users set constraints for density, facade direction and gradient, and the system generates massing of different sizes within those limits.":
      "Ο χρήστης ορίζει περιορισμούς για πυκνότητα, προσανατολισμό όψης και διαβάθμιση, και το σύστημα παράγει όγκους διαφορετικών μεγεθών μέσα σε αυτά τα όρια.",
    "Results": "Results",
    "Flexible design variations": "Flexible design variations",
    "The plugin splits architectural elements into tiles that can be recombined into new forms. WFC only places a tile where its adjacency rules allow it, so every generated design follows the constraints the architect set.":
      "Το plugin χωρίζει τα αρχιτεκτονικά στοιχεία σε tiles που συνδυάζονται ξανά σε νέες μορφές. Ο WFC τοποθετεί ένα tile μόνο εκεί όπου το επιτρέπουν οι κανόνες γειτνίασης, οπότε κάθε σχέδιο τηρεί τους περιορισμούς που όρισε ο αρχιτέκτονας.",
    "Sole researcher & developer": "Sole researcher & developer",
    "This was my individual master's thesis. I developed the theoretical framework, designed the tileset encoding system, implemented the WFC algorithm adaptation in C# for Grasshopper, and conducted the design experiments and evaluations.":
      "Αυτή ήταν η ατομική μου master's thesis. Ανέπτυξα το theoretical framework, σχεδίασα το tileset encoding system, υλοποίησα το WFC adaptation σε C# για Grasshopper και έκανα τα design experiments και evaluations.",
    "Future directions": "Future directions",
    "The thesis showed that procedural generation can take over repetitive massing work and give designers immediate feedback, without overriding their constraints. A next step would be to train a model on past designs so the system can rank options for sustainability and aesthetics.":
      "Η διπλωματική έδειξε ότι το procedural generation μπορεί να αναλάβει την επαναλαμβανόμενη δουλειά των μελετών όγκων και να δίνει άμεση ανατροφοδότηση στον σχεδιαστή, χωρίς να παρακάμπτει τους περιορισμούς του. Ένα επόμενο βήμα θα ήταν να εκπαιδευτεί ένα μοντέλο σε προηγούμενα σχέδια, ώστε το σύστημα να κατατάσσει τις επιλογές ως προς τη βιωσιμότητα και την αισθητική.",
    "Supporting irregular grids would let the tool work on more sites, and a simpler interface would open it to architects with less scripting experience.":
      "Η υποστήριξη irregular grids θα επέτρεπε τη χρήση του εργαλείου σε περισσότερα οικόπεδα, και ένα απλούστερο interface θα το άνοιγε σε αρχιτέκτονες με λιγότερη εμπειρία στο scripting.",
  },
  "/products/workshop-design": {
    "Workshop": "Workshop",
    "Computational Designer": "Computational Designer",
    "A Digital Futures Workshop project exploring voxel-based housing systems, aggregation logic, and robotic fabrication techniques.":
      "Digital Futures Workshop project που εξερευνά voxel-based housing systems, aggregation logic και robotic fabrication techniques.",
    "Research & Precedents": "Research & Precedents",
    "Modular housing explorations": "Modular housing explorations",
    "The workshop began with a study of architectural precedents such as Alvenaria Social Housing and Habitat 67. These references helped frame modularity, aggregation, and geometric experimentation. The team then developed a voxel-based system for generating housing units with flexible size and configuration.":
      "Το workshop ξεκίνησε με μελέτη architectural precedents όπως Alvenaria Social Housing και Habitat 67. Αυτά τα references βοήθησαν να οριστούν modularity, aggregation και geometric experimentation. Η ομάδα ανέπτυξε voxel-based system για housing units με ευέλικτο μέγεθος και configuration.",
    "We explored different ways of aggregating voxels to create efficient, livable structures with access to light, air, and circulation. Shortest path diagrams and density studies helped evaluate how people could move through the habitat and where the system became too dense or disconnected.":
      "Εξερευνήσαμε διαφορετικούς τρόπους aggregation των voxels για αποδοτικές και βιώσιμες structures με πρόσβαση σε φως, αέρα και κυκλοφορία. Shortest path diagrams και density studies βοήθησαν να αξιολογηθεί η κίνηση μέσα στο habitat και πού το σύστημα γινόταν υπερβολικά πυκνό ή αποσυνδεδεμένο.",
    "From voxels to assembled units": "Από voxels σε συναρμολογημένα units",
    "Different graph-based methods for grouping voxels were tested to create diverse configurations. I contributed to the computational design process, visual studies, and assembly logic, helping translate abstract aggregation rules into units, facade variations, balconies, rooftops, and exploded diagrams.":
      "Δοκιμάστηκαν διαφορετικές graph-based methods για grouping voxels και δημιουργία διαφορετικών configurations. Συνέβαλα στο computational design process, visual studies και assembly logic, μεταφράζοντας abstract aggregation rules σε units, facade variations, balconies, rooftops και exploded diagrams.",
    "Robotic fabrication techniques": "Robotic fabrication techniques",
    "We tested robotic fabrication methods for building these geometries. The modular components were broken down into ruled surfaces so they could be fabricated by hot-wire cutting, and the same set of parts could be repeated on different urban sites.":
      "Δοκιμάσαμε μεθόδους robotic fabrication για την κατασκευή αυτών των γεωμετριών. Τα modular components αναλύθηκαν σε ευθειογενείς επιφάνειες (rulings) ώστε να κατασκευαστούν με κοπή θερμού σύρματος, και το ίδιο σύνολο στοιχείων μπορεί να επαναληφθεί σε διαφορετικά αστικά οικόπεδα.",
  },
};

const pageTranslations = {
  ...Object.fromEntries(
    [...new Set([...Object.keys(routeTranslations), ...Object.keys(caseStudyExtras)])].map((path) => [
      path,
      { ...(routeTranslations[path] || {}), ...(caseStudyExtras[path] || {}) },
    ])
  ),
  "/": homeTranslations,
  "/products/vinted-smart-bundling": vintedTranslations,
  "/products/ai-sandbox": aiSandboxTranslations,
  "/products/plum-pulse": plumPulseTranslations,
};

// Messages built from live values. Each pattern has an English and a Greek
// form so text can be switched in both directions.
const patterns = [...sharedPatterns, ...plumPulsePatterns, ...vintedPatterns, ...aiSandboxPatterns];

const TRANSLATED_ATTRIBUTES = ["alt", "aria-label", "placeholder", "title"];

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

const mapCache = new Map();
function getMap(path, locale) {
  const cacheKey = `${locale}:${path}`;
  if (!mapCache.has(cacheKey)) {
    const englishToGreek = {
      ...commonTranslations,
      ...sharedTranslations,
      ...(pageTranslations[path] || {}),
    };
    mapCache.set(
      cacheKey,
      locale === "el"
        ? englishToGreek
        : Object.fromEntries(Object.entries(englishToGreek).map(([english, greek]) => [greek, english]))
    );
  }
  return mapCache.get(cacheKey);
}

function translateString(text, map, locale) {
  const normalized = normalizeText(text);
  if (!normalized) return null;
  if (map[normalized] !== undefined) return map[normalized];
  for (const pattern of patterns) {
    const [from, to] = locale === "el" ? [pattern.en, pattern.el] : [pattern.elMatch, pattern.enReplace];
    if (from.test(normalized)) {
      // Captured values, such as a checklist item, are translated too.
      return normalized.replace(from, (...args) => {
        const groups = args.slice(1, -2);
        return to.replace(/\$(\d)/g, (_, index) => {
          const value = groups[index - 1] ?? "";
          return translateString(value, map, locale) ?? value;
        });
      });
    }
  }
  // Labels built from several values, such as "Home delivery · Under 5 miles",
  // are translated part by part.
  if (normalized.includes(" · ")) {
    const parts = normalized.split(" · ").map((part) => translateString(part, map, locale) ?? part);
    const joined = parts.join(" · ");
    if (joined !== normalized) return joined;
  }
  return null;
}

function translateTextNode(node, map, locale) {
  const parent = node.parentElement;
  if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return;
  const translated = translateString(node.textContent, map, locale);
  if (translated === null) return;
  const leading = node.textContent.match(/^\s*/)?.[0] ?? "";
  const trailing = node.textContent.match(/\s*$/)?.[0] ?? "";
  const next = `${leading}${translated}${trailing}`;
  if (next !== node.textContent) node.textContent = next;
}

function translateAttributes(element, map, locale) {
  TRANSLATED_ATTRIBUTES.forEach((name) => {
    const value = element.getAttribute(name);
    if (!value) return;
    const translated = translateString(value, map, locale);
    if (translated !== null && translated !== value) element.setAttribute(name, translated);
  });
}

function translateTree(root, map, locale) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, map, locale);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  translateAttributes(root, map, locale);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) =>
    node.nodeType === Node.TEXT_NODE ? translateTextNode(node, map, locale) : translateAttributes(node, map, locale)
  );
}

export function translateCaseStudy(root, path, locale) {
  if (!root) return;
  translateTree(root, getMap(path, locale), locale);
}

// Keeps a page translated while it changes: prototype states, opened
// drawers and timers render new English text after the first pass.
let observer = null;
export function watchPage(root, getPath, getLocale) {
  observer?.disconnect();
  observer = new MutationObserver((mutations) => {
    const locale = getLocale();
    const map = getMap(getPath(), locale);
    mutations.forEach((mutation) => {
      if (mutation.type === "characterData") translateTextNode(mutation.target, map, locale);
      else if (mutation.type === "attributes") translateAttributes(mutation.target, map, locale);
      else mutation.addedNodes.forEach((node) => translateTree(node, map, locale));
    });
  });
  observer.observe(root, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: TRANSLATED_ATTRIBUTES,
  });
}

// Translates one string the same way the page does. Used by coverage checks.
export function translateText(text, path, locale = "el") {
  return translateString(text, getMap(path, locale), locale);
}
