<template>
  <div class="portfolio-theme">
    <app-navbar />
    <main class="map-project">
      <header class="map-heading">
        <router-link to="/">← {{ el ? 'Όλα τα έργα' : 'All projects' }}</router-link>
        <h1>Map3D Studio</h1>
        <p>{{ el ? 'Από τον χάρτη σε ένα τρισδιάστατο μοντέλο και στην ανάλυση μιας περιοχής.' : 'From a map boundary to a 3D scene and a clearer picture of a site.' }}</p>
        <a class="launch" :href="liveUrl" target="_blank" rel="noopener noreferrer">{{ el ? 'Άνοιγμα εφαρμογής' : 'Open Map3D Studio' }} ↗</a>
      </header>
      <div class="project-body">
        <figure class="hero"><img src="/images/map3d/athens-boundary.jpg" :alt="el ? 'Επιλογή περιοχής γύρω από τον Παρθενώνα και την Ακρόπολη στην Αθήνα' : 'A rectangular site boundary around the Parthenon and the Acropolis in Athens'"><figcaption>{{ el ? 'Αθήνα · Επιλογή περιοχής γύρω από τον Παρθενώνα και την Ακρόπολη.' : 'Athens · Defining a site around the Parthenon and the Acropolis.' }}</figcaption></figure>
        <section class="overview" aria-labelledby="overview-title">
          <div><h2 id="overview-title">{{ el ? 'Η πρώτη μου συνεισφορά σε open source' : 'My first open-source contribution' }}</h2><p>{{ el ? 'Το Map3D Studio βασίζεται στο αρχικό έργο map3d του Hyeong Jun Huh και των συντελεστών του. Για την πρώτη μου συνεισφορά σε έργο ανοιχτού κώδικα, εργάστηκα στη ροή από τον χάρτη στο 3D, στα εργαλεία εξερεύνησης και στις εξαγωγές για σχεδιαστική εργασία. Έχω ανοίξει pull request για να συνεισφέρω αυτές τις αλλαγές στο αρχικό έργο.' : 'Map3D Studio builds on the original map3d project by Hyeong Jun Huh and its contributors. For my first open-source contribution, I worked on the map-to-3D workflow, exploration tools and exports for further design work. I’ve opened a pull request to contribute these changes back to the original project.' }}</p></div>
          <dl><div><dt>{{ el ? 'Μορφή' : 'Format' }}</dt><dd>{{ el ? 'Εφαρμογή ιστού' : 'Web application' }}</dd></div><div><dt>{{ el ? 'Πεδίο' : 'Focus' }}</dt><dd>{{ el ? 'Χωρικά εργαλεία · Ανάλυση περιοχής' : 'Spatial tools · Site analysis' }}</dd></div><div><dt>{{ el ? 'Δεδομένα' : 'Data' }}</dt><dd>OpenStreetMap</dd></div></dl>
        </section>
        <section class="workflow" aria-labelledby="workflow-title">
          <h2 id="workflow-title">{{ el ? 'Μια περιοχή, τρεις τρόποι εξερεύνησης' : 'One boundary, three ways to explore' }}</h2>
          <article v-for="step in steps" :key="step.title"><h3>{{ step.title }}</h3><p>{{ step.text }}</p></article>
        </section>
        <section class="details" aria-labelledby="contributions-title">
          <h2 id="contributions-title">{{ el ? 'Οι συνεισφορές μου' : 'My contributions' }}</h2>
          <ul><li v-for="contribution in contributions" :key="contribution">{{ contribution }}</li></ul>
          <p>{{ el ? 'Τα αποτελέσματα της ανάλυσης εξαρτώνται από την πληρότητα των εισαγόμενων δεδομένων OpenStreetMap.' : 'The analysis depends on the completeness of the imported OpenStreetMap data.' }}</p>
        </section>
        <div class="project-end"><p>{{ el ? 'Δοκίμασε μια περιοχή που γνωρίζεις.' : 'Explore a place you know.' }}</p><a class="launch" :href="liveUrl" target="_blank" rel="noopener noreferrer">{{ el ? 'Άνοιγμα εφαρμογής' : 'Open the live app' }} ↗</a></div>
      </div>
    </main>
    <app-footer />
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { i18nState } from '../../i18n';
import AppNavbar from '../../components/navbar.vue';
import AppFooter from '../../components/footer.vue';
const liveUrl='https://map3d-studio-eleni.pages.dev/map';
const el=computed(()=>i18nState.locale==='el');
const steps=computed(()=>el.value ? [
 {title:'Εντόπισε και όρισε',text:'Αναζήτηση τοποθεσίας και επιλογή ορίων με ορθογώνιο ή πολύγωνο. Η περιοχή ορίζει το πλαίσιο της διερεύνησης.'},
 {title:'Εξερεύνησε σε 3D',text:'Layers για κτίρια, δρόμους, διαδρομές, συγκοινωνίες, βλάστηση, νερό και χρήσεις γης. Το ανάγλυφο φορτώνεται όταν ζητηθεί.'},
 {title:'Διάβασε την περιοχή',text:'Dashboard για το εμβαδόν, την κάλυψη και τα ύψη κτιρίων, τις χρήσεις γης, το πράσινο, τις μετακινήσεις και τα σημεία ενδιαφέροντος.'}
] : [
 {title:'Find and frame',text:'Search for a location, then draw a rectangle or polygon. The boundary defines the scope of the scene and its analysis.'},
 {title:'Explore in 3D',text:'Scene layers cover buildings, roads, walking and cycling paths, transit, vegetation, water and land use. Terrain can be loaded on demand.'},
 {title:'Read the site',text:'The dashboard brings together site area, building coverage and heights, land-use allocation, landscape, movement and points of interest.'}
]);
const contributions=computed(()=>el.value ? [
 'Επανασχεδιασμός της ροής από τον χάρτη στο 3D, με αναζήτηση τοποθεσίας και ζωντανή προεπισκόπηση σχεδίασης.',
 'Πλευρικό panel με ενεργοποίηση και απενεργοποίηση layers και sublayers, και επιθεώρηση στοιχείων.',
 'Εργαλεία μέτρησης, αναφορές κλίμακας, ισομετρική προβολή και έλεγχοι προσανατολισμού.',
 'Εξαγωγές αρχικών δεδομένων και Rhino 3DM, επιπλέον της αρχικής εξαγωγής OBJ.',
 'Φόρτωση στο παρασκήνιο, αυτόματες επαναλήψεις και σαφέστερη ενημέρωση όταν λείπουν δεδομένα.',
 'Dashboard με μετρικές που βασίζονται στην εισαγόμενη γεωμετρία.'
] : [
 'Redesigned map-to-3D workflow with location search and live drawing previews.',
 'Side panel with toggleable layers and sublayers, with feature inspection.',
 'Measurement tools, scale references, isometric projection and orientation controls.',
 'Raw-data and Rhino 3DM exports, in addition to the original OBJ export.',
 'Background loading, automatic retries and clearer feedback when data is missing.',
 'Dashboard with metrics driven by imported geometry data.'
]);
useHead({title:'Map3D Studio · Eleni Chasioti',meta:[{name:'description',content:'My first open-source contribution: extending map3d with a redesigned workflow, spatial exploration tools, exports and a site dashboard.'}]});
</script>
<style scoped>
.map-project { background:#fff; color:#252525; }
.map-heading { padding:48px max(20px,calc((100vw - 1240px)/2)); background:#f65b32; }
.map-heading > a:first-child { color:#251a25; font-size:13px; text-decoration:none; }
h1 { font-size:clamp(40px,6vw,74px); line-height:1.1; letter-spacing:-.035em; color:#251a25; margin:24px 0 18px; }
.map-heading p { max-width:38ch; font-size:clamp(18px,2vw,25px); line-height:1.5; color:#251a25; margin-bottom:28px; }
.launch { display:inline-block; padding:13px 20px; background:#222; color:#fff; border-radius:6px; text-decoration:none; font-size:14px; }
.launch:hover { background:#363636; }
a:focus-visible { outline:3px solid #653ab0; outline-offset:5px; }
.project-body { max-width:1280px; padding:40px 20px 70px; margin:auto; }
figure { margin:0; }
.hero img { display:block; width:100%; height:auto; border:1px solid #ddd; border-radius:8px; }
figcaption { margin-top:12px; font-size:12px; color:#555; }
h2 { font-size:clamp(26px,3vw,38px); font-weight:600; line-height:1.2; letter-spacing:-.025em; color:#252525; margin:0 0 24px; }
p { font-size:16px; line-height:1.8; color:#505050; max-width:65ch; }
.overview { display:grid; grid-template-columns:1.5fr 1fr; gap:70px; padding:70px 0; }
dl { margin:0; } dl > div { padding:16px 0; border-bottom:1px solid #ddd; } dt { font-size:12px; color:#555; margin-bottom:6px; } dd { margin:0; font-size:15px; }
.workflow { border-top:1px solid #ddd; padding:50px 0; }
.workflow article { display:grid; grid-template-columns:1fr 2fr; gap:35px; padding:22px 0; border-bottom:1px solid #ddd; }
h3 { font-size:21px; font-weight:600; color:#252525; margin:0; }
.workflow p { margin:0; }
.details { padding:30px 0; } .details ul { padding-left:20px; max-width:70ch; margin-bottom:24px; } .details li { padding:7px 0; line-height:1.7; color:#505050; } .details p { margin-bottom:18px; }
.project-end { padding-top:25px; }
@media(max-width:700px){ .overview { grid-template-columns:1fr; gap:24px; padding:40px 0; } .workflow article { grid-template-columns:1fr; gap:10px; } .map-heading { padding:36px 20px; } }
</style>
