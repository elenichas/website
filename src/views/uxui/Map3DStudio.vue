<template>
  <app-navbar />
  <main class="case-study map-case">
    <header class="case-header"><h1 class="case-title">Map3D Studio</h1></header>
    <figure class="case-hero">
      <video class="hero-image" src="/media/map3d-preview.mp4" poster="/images/map3d/scene-night.webp" data-autoplay muted loop playsinline preload="metadata" aria-label="Map3D Studio: orbiting the Athens scene" />
    </figure>

    <div class="case-info">
      <div class="info-meta">
        <div class="meta-block"><span class="meta-label">{{ el ? 'Τύπος' : 'Type' }}</span><span class="meta-value">{{ el ? 'Συνεισφορά σε open source' : 'Open-source contribution' }}</span></div>
        <div class="meta-block"><span class="meta-label">{{ el ? 'Ρόλος' : 'Role' }}</span><span class="meta-value">{{ el ? 'Σχεδιασμός ροής, UX engineering' : 'Workflow design, UX engineering' }}</span></div>
        <div class="meta-block"><span class="meta-label">Stack</span><span class="meta-value">React, React Three Fiber, OpenStreetMap</span></div>
      </div>
      <div class="info-description">
        <p class="info-text">{{ el ? 'Μια πιο καθαρή ροή για εξερεύνηση δεδομένων, ανάλυση και εξαγωγές.' : 'A clearer workflow for exploring map data, understanding a site and taking the results further.' }}</p>
        <div class="project-links"><a :href="liveUrl" target="_blank" rel="noopener noreferrer">{{ el ? 'Άνοιγμα εφαρμογής' : 'Open the live app' }} ↗</a><a href="https://github.com/elenichas/map3d" target="_blank" rel="noopener noreferrer">{{ el ? 'Κώδικας στο GitHub' : 'View source on GitHub' }} ↗</a></div>
      </div>
    </div>

    <case-snapshot page="map3d" />

    <section class="content-section">
      <p class="section-label">{{ el ? 'Πρόκληση' : 'Challenge' }}</p>
      <h2 class="section-heading">{{ el ? 'Συνδέοντας την εξερεύνηση με την κατανόηση' : 'Connecting exploration with understanding' }}</h2>
      <p class="body-text">{{ el ? 'Ο σχεδιασμός συνδέει τρία επίπεδα της ίδιας εργασίας: επιλογή δεδομένων, οπτική διερεύνηση και ανάγνωση των αποτελεσμάτων. Στόχος είναι μια συνεχής ροή, με σαφή εργαλεία και ορατή κατάσταση φόρτωσης.' : 'The interface connects three parts of the same task: choosing the data, exploring it visually and reading the results. The design goal is a continuous workflow, with explicit controls, visible loading states and a clear route to export.' }}</p>
      <p class="section-label contribution-label">{{ el ? 'Συνεισφορά' : 'Contribution' }}</p>
      <h2 class="section-heading">{{ el ? 'Η πρώτη μου συνεισφορά σε open source' : 'My first open-source contribution' }}</h2>
      <p class="body-text">{{ el ? 'Το Map3D Studio βασίζεται στο αρχικό έργο map3d του Hyeong Jun Huh και των συντελεστών του. Για την πρώτη μου συνεισφορά σε έργο ανοιχτού κώδικα, εργάστηκα στη ροή από τον χάρτη στο 3D, στα εργαλεία εξερεύνησης και στις εξαγωγές για σχεδιαστική εργασία. Έχω ανοίξει pull request για να συνεισφέρω αυτές τις αλλαγές στο αρχικό έργο.' : 'Map3D Studio builds on the original map3d project by Hyeong Jun Huh and its contributors. For my first open-source contribution, I worked on the map-to-3D workflow, exploration tools and exports for further design work. I’ve opened a pull request to contribute these changes back to the original project.' }}</p>
    </section>

    <section v-for="(step,index) in steps" :key="step.title" class="showcase-section" :class="{'showcase-section-reverse':index === 1}">
      <div class="showcase-text"><p class="section-label">{{ ['Map workflow','Scene workspace','Site analysis'][index] }}</p><h2 class="section-heading">{{ step.title }}</h2><p class="body-text">{{ step.text }}</p></div>
      <figure class="showcase-media"><img :src="step.image" :alt="step.alt" loading="lazy" /><figcaption>{{ step.caption }}</figcaption></figure>
    </section>

    <section class="showcase-section showcase-section-reverse" aria-labelledby="inspection-title">
      <div class="showcase-text">
        <p class="section-label">{{ el ? 'Επιθεώρηση' : 'Feature inspection' }}</p>
        <h2 id="inspection-title" class="section-heading">{{ el ? 'Επίλεξε κτίρια για προεπισκόπηση δεδομένων' : 'Select buildings to preview data' }}</h2>
        <p class="body-text">{{ el ? 'Η επιλογή ενός κτιρίου συνδέει το μοντέλο με τα αρχικά δεδομένα του. Το panel εμφανίζει τα tags του OpenStreetMap, το ύψος και το υλικό, όταν είναι διαθέσιμα.' : 'Selecting a building connects the model to its source data. The inspector reveals OpenStreetMap tags, height and material where available, while the highlight keeps the selected feature in context.' }}</p>
      </div>
      <figure class="showcase-media"><video src="/media/map3d-inspection.mp4" poster="/images/map3d/building-inspector.webp" data-autoplay muted loop playsinline preload="metadata" aria-label="Selecting a Parthenon building part and viewing its source metadata" /><figcaption>{{ el ? 'Επιλογή τμήματος του Παρθενώνα και προβολή των αρχικών tags του.' : 'Select a Parthenon building part, then read its source tags in the building inspector.' }}</figcaption></figure>
    </section>

    <section class="content-section">
      <p class="section-label">{{ el ? 'Υλοποίηση' : 'Implementation' }}</p>
      <h2 class="section-heading">{{ el ? 'Οι συνεισφορές μου' : 'My contributions' }}</h2>
      <ul class="contributions body-text"><li v-for="contribution in contributions" :key="contribution">{{ contribution }}</li></ul>
      <p class="body-text">{{ el ? 'Τα αποτελέσματα της ανάλυσης εξαρτώνται από την πληρότητα των εισαγόμενων δεδομένων OpenStreetMap.' : 'The analysis depends on the completeness of the imported OpenStreetMap data.' }}</p>
      <div class="project-links"><a href="https://github.com/elenichas/map3d" target="_blank" rel="noopener noreferrer">{{ el ? 'Το δικό μου fork' : 'My fork' }} ↗</a><a href="https://github.com/cartesiancs/map3d" target="_blank" rel="noopener noreferrer">{{ el ? 'Αρχικό έργο map3d' : 'Original map3d project' }} ↗</a></div>
    </section>
    <case-study-footer currentRoute="/products/map3d-studio" />
  </main>
</template>

<script setup>
import CaseSnapshot from '@/components/CaseSnapshot.vue';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { i18nState } from '../../i18n';
import AppNavbar from '../../components/navbar.vue';
import CaseStudyFooter from '../../components/CaseStudyFooter.vue';
const liveUrl='https://map3d-studio-eleni.pages.dev/map';
const el=computed(()=>i18nState.locale==='el');
const stepMedia = [
 { image:'/images/map3d/site-boundary.webp', alt:'Athens map with a rectangular site boundary selected around the Acropolis', caption:'Athens · Search, boundary selection and the route into the scene.' },
 { image:'/images/map3d/scene-night.webp', alt:'Map3D Studio in dark theme with a layer panel, camera controls, measurement and export tools', caption:'Scene workspace · Layer visibility, navigation and exports share the same context.' },
 { image:'/images/map3d/site-dashboard.webp', alt:'Site dashboard showing coverage, building heights and data completeness for the selected Athens boundary', caption:'Site dashboard · The same boundary becomes a set of traceable, indicative metrics.' }
];
const steps=computed(()=>(el.value ? [
 {title:'Δημιούργησε τα όρια της περιοχής',text:'Αναζήτηση τοποθεσίας και επιλογή ορίων με ορθογώνιο ή πολύγωνο. Η περιοχή ορίζει το πλαίσιο της διερεύνησης.'},
 {title:'Εξερεύνησε σε 3D',text:'Layers για κτίρια, δρόμους, διαδρομές, συγκοινωνίες, βλάστηση, νερό και χρήσεις γης. Το ανάγλυφο φορτώνεται όταν ζητηθεί.'},
 {title:'Προεπισκόπηση μετρικών περιοχής',text:'Dashboard για το εμβαδόν, την κάλυψη και τα ύψη κτιρίων, τις χρήσεις γης, το πράσινο, τις μετακινήσεις και τα σημεία ενδιαφέροντος.'}
] : [
 {title:'Create a site boundary',text:'Search for a location, then draw a rectangle or polygon. The boundary defines the scope of the scene and its analysis.'},
 {title:'Explore in 3D',text:'Scene layers cover buildings, roads, walking and cycling paths, transit, vegetation, water and land use. Terrain can be loaded on demand.'},
 {title:'Preview site metrics',text:'The dashboard brings together site area, building coverage and heights, land-use allocation, landscape, movement and points of interest.'}
]).map((step,index)=>({...step,...stepMedia[index]})));
const contributions=computed(()=>el.value ? [
 'Επανασχεδιασμός της ροής από τον χάρτη στο 3D, με αναζήτηση τοποθεσίας και ζωντανή προεπισκόπηση σχεδίασης.',
 'Πλευρικό panel με ενεργοποίηση και απενεργοποίηση layers και sublayers, και επιθεώρηση στοιχείων.',
 'Εργαλεία μέτρησης, αναφορές κλίμακας, ισομετρική προβολή και έλεγχοι προσανατολισμού.',
 'Εξαγωγές Rhino 3DM και αρχικών δεδομένων μαζί με GLB και OBJ, με διατήρηση πληροφοριών για περαιτέρω εργασία.',
 'Φόρτωση στο παρασκήνιο, αυτόματες επαναλήψεις και σαφέστερη ενημέρωση όταν λείπουν δεδομένα.',
 'Dashboard με μετρικές που βασίζονται στην εισαγόμενη γεωμετρία.'
] : [
 'Redesigned map-to-3D workflow with location search and live drawing previews.',
 'Side panel with toggleable layers and sublayers, with feature inspection.',
 'Measurement tools, scale references, isometric projection and orientation controls.',
 'Rhino 3DM and raw-data exports alongside GLB and OBJ, preserving useful source context for further work.',
 'Background loading, automatic retries and clearer feedback when data is missing.',
 'Dashboard with metrics driven by imported geometry data.'
]);
useHead({meta:[{name:'description',content:'My first open-source contribution: extending map3d with a redesigned workflow, spatial exploration tools, exports and a site dashboard.'}]});
</script>
<style scoped src="../../styles/editorial-case-study.css"></style>
<style scoped>

.showcase-section { display:flex; align-items:center; gap:var(--space-10); max-width:1400px; margin:var(--space-12) auto; padding:0 var(--space-8); }
.showcase-section-reverse { flex-direction:row-reverse; }
.showcase-text { flex:0 0 320px; max-width:360px; }
.showcase-media { flex:1; min-width:0; margin:0; }
.showcase-media :is(img,video) { display:block; width:100%; height:auto; border-radius:var(--radius-sm); }
video { background:#11152d; }
figcaption { margin-top:12px; font-size:.75rem; line-height:1.5; color:var(--color-text-muted); }
.project-links { display:flex; flex-wrap:wrap; gap:12px 24px; margin-top:var(--space-6); }
.project-links a { font-size:.875rem; color:var(--color-text); text-decoration:underline; text-underline-offset:4px; }
.project-links a:focus-visible { outline:2px solid currentColor; outline-offset:5px; }
.contribution-label { margin-top:2.5rem; }
.contributions { padding-left:1.2rem; }
.contributions li { padding-bottom:.6rem; }
@media(max-width:1024px) { .showcase-section,.showcase-section-reverse { flex-direction:column; align-items:stretch; gap:var(--space-6); } .showcase-text { flex:none; max-width:100%; } }
@media(max-width:768px) {
  .case-header { padding:var(--space-8) var(--space-5) 0; }
  .case-title { white-space:normal; margin-bottom:0; }
  .case-hero,.content-section,.showcase-section { padding:0 var(--space-5); }
  .case-hero { margin-bottom:var(--space-6); }
  .case-info { grid-template-columns:1fr; gap:var(--space-5); padding:0 var(--space-5); margin-bottom:var(--space-10); }
  .info-meta { gap:var(--space-4); }
  .info-text { font-size:1.25rem; line-height:1.28; }
}
</style>
