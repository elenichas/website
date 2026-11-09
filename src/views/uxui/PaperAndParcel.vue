<template>
  <app-navbar />
  <main class="case-study parcel-case">
    <header class="case-header"><h1 class="case-title">Paper &amp; Parcel</h1></header>

    <figure id="walkthrough" class="case-hero">
      <video class="hero-image" src="/media/paper-and-parcel-demo.mp4"
        poster="/images/paper-and-parcel/video-poster.jpg" data-autoplay autoplay muted loop playsinline preload="metadata"
        disablepictureinpicture disableremoteplayback tabindex="-1"
        :aria-label="copy.videoLabel" aria-describedby="walkthrough-caption" />
      <figcaption id="walkthrough-caption">{{ copy.videoCaption }}</figcaption>
    </figure>

    <div class="case-info">
      <div class="info-meta">
        <div class="meta-block"><span class="meta-label">{{ el ? 'Τύπος' : 'Type' }}</span><span class="meta-value">{{ copy.type }}</span></div>
        <div class="meta-block"><span class="meta-label">{{ el ? 'Ρόλος' : 'Role' }}</span><span class="meta-value">{{ copy.role }}</span></div>
        <div class="meta-block"><span class="meta-label">{{ el ? 'Έτος' : 'Year' }}</span><span class="meta-value">2026</span></div>
        <div class="meta-block"><span class="meta-label">Stack</span><span class="meta-value">Python, FastAPI, LangChain, LangGraph</span></div>
      </div>
      <div class="info-description">
        <p class="info-text">{{ copy.intro }}</p>
        <div class="project-links">
          <a href="https://github.com/elenichas/paper-and-parcel" target="_blank" rel="noopener noreferrer">{{ copy.sourceLink }} ↗</a>
          <a href="https://github.com/elenichas/paper-and-parcel/blob/main/docs/learning-lab.md" target="_blank" rel="noopener noreferrer">{{ copy.guideLink }} ↗</a>
        </div>
        <p class="project-status">{{ copy.status }}</p>
      </div>
    </div>

    <case-snapshot page="paperAndParcel" />

    <section class="content-section">
      <p class="section-label">{{ copy.startLabel }}</p>
      <h2 class="section-heading">{{ copy.startTitle }}</h2>
      <p class="body-text">{{ copy.startBody }}</p>
      <p class="body-text">{{ copy.designReason }}</p>
    </section>

    <section v-for="(view, index) in copy.views" :key="view.title" class="showcase-section" :class="{ 'showcase-section-reverse': index === 1 }">
      <div class="showcase-text">
        <p class="section-label">{{ view.label }}</p>
        <h2 class="section-heading">{{ view.title }}</h2>
        <p class="body-text">{{ view.text }}</p>
        <p class="view-detail">{{ view.detail }}</p>
      </div>
      <figure class="showcase-media">
        <img :src="view.image" :alt="view.alt" loading="lazy" decoding="async" :width="view.width" :height="view.height" />
        <figcaption>{{ view.caption }}</figcaption>
      </figure>
    </section>

    <section class="content-section">
      <p class="section-label">{{ copy.systemLabel }}</p>
      <h2 class="section-heading">{{ copy.systemTitle }}</h2>
      <p class="body-text">{{ copy.systemBody }}</p>
      <ol class="execution-flow" :aria-label="copy.flowLabel">
        <li v-for="step in copy.flow" :key="step.title"><strong>{{ step.title }}</strong><span>{{ step.text }}</span></li>
      </ol>
      <p class="body-text">{{ copy.dataPath }}</p>
    </section>

    <section class="content-section local-model-section">
      <p class="section-label">{{ copy.modelLabel }}</p>
      <h2 class="section-heading">{{ copy.modelTitle }}</h2>
      <p class="body-text">{{ copy.modelBody }}</p>
      <dl class="stack-details"><div v-for="item in copy.stack" :key="item.title"><dt>{{ item.title }}</dt><dd>{{ item.text }}</dd></div></dl>
    </section>

    <section class="content-section reflection-section">
      <p class="section-label">{{ copy.reflectionLabel }}</p>
      <h2 class="section-heading">{{ copy.reflectionTitle }}</h2>
      <p class="body-text">{{ copy.reflectionBody }}</p>
      <ul class="learning-points body-text"><li v-for="point in copy.learnings" :key="point">{{ point }}</li></ul>
      <p class="scope-note">{{ copy.boundary }}</p>
    </section>
    <case-study-footer currentRoute="/products/paper-and-parcel" />
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { i18nState } from '../../i18n';
import AppNavbar from '../../components/navbar.vue';
import CaseSnapshot from '../../components/CaseSnapshot.vue';
import CaseStudyFooter from '../../components/CaseStudyFooter.vue';
const el = computed(() => i18nState.locale === 'el');
const copy = computed(() => el.value ? {
  videoLabel: 'Paper & Parcel: βίντεο της εφαρμογής, του inspector και του Learning Lab',
  videoCaption: 'Βίντεο χωρίς ήχο · 1:18 · Ερωτήσεις για πωλήσεις, κλήσεις εργαλείων, γραφήματα και Learning Lab.',
  type: 'Ανεξάρτητο εκπαιδευτικό project', role: 'Σχεδιασμός εμπειρίας & full-stack πρωτότυπο',
  intro: 'Ένας τοπικός AI agent για ένα υποθετικό κατάστημα χαρτικών, με ορατή τη διαδρομή από την ερώτηση μέχρι την απάντηση.',
  sourceLink: 'Κώδικας στο GitHub', guideLink: 'Οδηγός Learning Lab', status: 'Τοπική εφαρμογή με υποθετικά δεδομένα. Ο κώδικας είναι δημόσιος· το μοντέλο τρέχει στον δικό μου Mac.',
  startLabel: 'Αφετηρία', startTitle: 'Από το μάθημα σε μια δική μου εφαρμογή.',
  startBody: 'Αφού ολοκλήρωσα το μάθημα της IBM για AI agents στο Coursera, ήθελα να εξασκηθώ πέρα από τα έτοιμα περιβάλλοντα των ασκήσεων. Δημιούργησα ένα υποθετικό κατάστημα, τα δεδομένα του, το backend, τον agent και το frontend, με τη βοήθεια ενός AI coding assistant.',
  designReason: 'Ως designer, ήθελα να καταλάβω πώς ένας agent επιλέγει εργαλεία, χρησιμοποιεί δεδομένα και χειρίζεται αποτυχίες. Αυτή η γνώση με βοηθά να σχεδιάζω πιο σαφείς διεπαφές, με χρήσιμη ενημέρωση και κατάλληλο έλεγχο για τον άνθρωπο.',
  views: [
    {label:'Η εφαρμογή',title:'Ρώτησε για την επιχείρηση.',text:'Το dashboard συγκεντρώνει πωλήσεις, κέρδη, απόθεμα και τιμολόγια. Ο assistant απαντά σε ερωτήσεις πάνω στα ίδια δεδομένα και δημιουργεί γραφήματα από υπολογισμένες τιμές.',detail:'Παράδειγμα: «Ποια ήταν τα έσοδα και τα κέρδη του Οκτωβρίου;»',image:'/images/paper-and-parcel/shop.jpg',alt:'Dashboard Paper & Parcel με σύνοψη πωλήσεων και απάντηση του assistant',width:1632,height:1080,caption:'Η ερώτηση και τα στοιχεία της επιχείρησης παραμένουν στο ίδιο περιβάλλον.'},
    {label:'Agent inspector',title:'Δες τι συνέβη πίσω από την απάντηση.',text:'Ένα ξεχωριστό developer panel ανοίγει δίπλα στην εφαρμογή. Εμφανίζει τα πραγματικά API events, τις κλήσεις εργαλείων, τα ορίσματα, τα αποτελέσματα και τον έλεγχο των δεδομένων.',detail:'Πρόκειται για παρατηρήσιμα events εκτέλεσης, όχι για το εσωτερικό σκεπτικό του μοντέλου.',image:'/images/paper-and-parcel/inspector.jpg',alt:'Πραγματική κλήση aggregate_sales, ορίσματα και επιστρεφόμενα δεδομένα δίπλα στο γράφημα',width:1632,height:1080,caption:'Η απάντηση συνδέεται με τα εργαλεία και τα δεδομένα που τη στηρίζουν.'},
    {label:'Learning Lab',title:'Σύνδεσε τις έννοιες με πραγματική εκτέλεση.',text:'Τρεις διαδρομές εξάσκησης: αναφορά με RunnableSequence και RunnableParallel, agent για read-only SQL και agent για γραφήματα με pandas. Ένα LangGraph workflow εμφανίζει την ενεργή διαδρομή και το αποτέλεσμα ελέγχεται με Pydantic.',detail:'Το περιβάλλον επιτρέπει σύγκριση ανάμεσα στο ορατό αποτέλεσμα, τα events και το δομημένο JSON.',image:'/images/paper-and-parcel/learning-lab.png',alt:'Αναφορά του Learning Lab με έσοδα, κέρδη και ρυθμίσεις του μοντέλου στον inspector',width:2325,height:1344,caption:'Η αναφορά, ο κώδικας και το σύστημα εκτέλεσης γίνονται μέρη του ίδιου μαθήματος.'}
  ],
  systemLabel:'Πώς λειτουργεί',systemTitle:'Μια ερώτηση γίνεται κλήση εργαλείου.',systemBody:'Το μοντέλο επιλέγει ανάμεσα σε συγκεκριμένα εργαλεία. Η Python διαβάζει τα δεδομένα και υπολογίζει τα αποτελέσματα. Το μοντέλο χρησιμοποιεί αυτά τα αποτελέσματα για την απάντηση.',flowLabel:'Ροή ερώτησης και αποτελέσματος',
  flow:[{title:'Ερώτηση',text:'Το FastAPI δέχεται το μήνυμα.'},{title:'Έλεγχος',text:'Δομημένη ταξινόμηση του αιτήματος.'},{title:'Εργαλείο',text:'Ο agent επιλέγει συνάρτηση και ορίσματα.'},{title:'Επικύρωση',text:'Η Python υπολογίζει· το Pydantic ελέγχει τη δομή.'},{title:'Αποτέλεσμα',text:'Το frontend εμφανίζει κείμενο, πίνακα ή γράφημα.'}],
  dataPath:'Τα γραφήματα διαβάζουν CSV μέσω pandas. Ο SQL agent χρησιμοποιεί ένα SQLite αντίγραφο των ίδιων δεδομένων. Το frontend σχεδιάζει τα γραφήματα από ελεγμένο JSON· το μοντέλο δεν επινοεί τις τιμές τους.',
  modelLabel:'Τοπικό μοντέλο',modelTitle:'Το μοντέλο τρέχει στον Mac μου.',modelBody:'Κατέβασα το Qwen3 4B Instruct και το έτρεξα στον M2 Mac μου μέσω Ollama. Η εφαρμογή χρησιμοποιεί τοπικό inference, χωρίς χρεώσεις ανά ερώτηση από κάποιο model API. Το κόστος υπολογισμού παραμένει στη δική μου συσκευή.',
  stack:[{title:'Εμπειρία',text:'HTML, CSS και JavaScript για dashboard, chat, γραφήματα και inspector.'},{title:'Backend & agents',text:'Python και FastAPI, με LangChain για tool calling και LangGraph για το Learning Lab.'},{title:'Δεδομένα & συμβόλαια',text:'CSV fixtures, read-only SQLite, pandas και έλεγχοι Pydantic.'},{title:'Εκτέλεση μοντέλου',text:'Ollama με Qwen3 4B Instruct, τοπικά σε Apple M2 με 16 GB μνήμη.'}],
  reflectionLabel:'Τι έμαθα',reflectionTitle:'Η κατανόηση της τεχνολογίας βελτιώνει τον σχεδιασμό.',reflectionBody:'Το χτίσιμο όλης της διαδρομής ανέδειξε αποφάσεις που δεν φαίνονται σε ένα στατικό mockup: πότε χρειάζεται ενημέρωση προόδου, πώς παρουσιάζονται ελλιπή δεδομένα και ποια στοιχεία βοηθούν στον έλεγχο μιας απάντησης.',
  learnings:['Η διεπαφή διακρίνει ανάμεσα σε εργασία που εκτελείται, ολοκληρωμένο αποτέλεσμα και αποτυχία.','Άσχετες ερωτήσεις οδηγούν σε χρήσιμες, υποστηριζόμενες προτάσεις.','Τα δεδομένα που λείπουν δεν παρουσιάζονται ως μηδενικές πωλήσεις.','Ο έλεγχος JSON και σχήματος δεν εγγυάται την ακρίβεια κάθε πρότασης του μοντέλου.'],
  boundary:'Η εφαρμογή είναι εκπαιδευτικό πρωτότυπο με δεδομένα Οκτωβρίου 2026. Δεν κάνει πληρωμές, δεν στέλνει μηνύματα και δεν αλλάζει εγγραφές. Τα 42 αυτοματοποιημένα tests ελέγχουν υπολογισμούς και συμπεριφορά API· δεν αποτελούν έρευνα χρηστών ή απόδειξη ετοιμότητας για παραγωγή.'
} : {
  videoLabel: 'Paper & Parcel walkthrough: shop assistant, tool inspector and Learning Lab',
  videoCaption: 'Silent walkthrough · 1:18 · Business questions, tool calls, charts and the Learning Lab.',
  type:'Independent learning project',role:'Experience design & full-stack prototyping',
  intro:'A local AI agent for a fictional stationery shop, with a visible path from the question to the answer.',
  sourceLink:'View source on GitHub',guideLink:'Read the Learning Lab guide',status:'A local app with fictional business records. The code is public; the model runs on my Mac.',
  startLabel:'Starting point',startTitle:'From a course to an app of my own.',
  startBody:'After completing IBM’s AI agents course on Coursera, I wanted to practise beyond its sandbox environments. With an AI coding assistant, I built a fictional shop, its data, a backend, an agent and a web frontend, then connected the whole flow.',
  designReason:'As a designer, I wanted to understand how an agent chooses tools, uses data and handles failure. Understanding those mechanics helps me design clearer interfaces, useful feedback and appropriate human control.',
  views:[
    {label:'The shop',title:'Ask about the business.',text:'The dashboard brings together sales, profit, stock and invoices. The assistant answers questions against the same records and returns charts from calculated values.',detail:'Try: “What was our October revenue and profit?”',image:'/images/paper-and-parcel/shop.jpg',alt:'Paper & Parcel dashboard showing shop metrics and a sales, profit and overdue-invoice answer',width:1632,height:1080,caption:'The question and the business records stay in the same workspace.'},
    {label:'Agent inspector',title:'See what happened behind the answer.',text:'A separate developer panel opens beside the app. It shows actual API events, model calls, tool arguments, returned records and validation, while the frontend stays visible.',detail:'These are observable execution events, not the model’s private reasoning.',image:'/images/paper-and-parcel/inspector.jpg',alt:'The aggregate_sales tool call and returned chart data beside the shop’s daily revenue chart',width:1632,height:1080,caption:'Trace the result back to the tools and records that support it.'},
    {label:'Learning Lab',title:'Connect the concepts to real execution.',text:'Three learning paths explore a report built with RunnableSequence and RunnableParallel, a read-only SQL agent, and pandas chart tools. An explicit LangGraph workflow shows the route taken; Pydantic checks the returned structure.',detail:'Compare the visible result with the execution events and structured JSON.',image:'/images/paper-and-parcel/learning-lab.png',alt:'A completed Learning Lab report with sales and profit metrics alongside model settings in the inspector',width:2325,height:1344,caption:'The report, its inputs and the execution become parts of the same lesson.'}
  ],
  systemLabel:'How it works',systemTitle:'A question becomes a tool call.',systemBody:'The model chooses from defined tools. Python reads the records and calculates the results. The model then uses those results to compose its answer.',flowLabel:'Question-to-result workflow',
  flow:[{title:'Question',text:'FastAPI receives the message.'},{title:'Scope',text:'Structured classification checks the request.'},{title:'Tool call',text:'The agent selects a function and arguments.'},{title:'Validation',text:'Python calculates; Pydantic checks the structure.'},{title:'Result',text:'The frontend renders text, a table or a chart.'}],
  dataPath:'Chart tools read CSV files through pandas. The SQL agent queries a SQLite copy of the same records. The frontend draws charts from validated JSON; the model does not invent their plotted values.',
  modelLabel:'Local inference',modelTitle:'The model runs on my Mac.',modelBody:'I downloaded Qwen3 4B Instruct and ran it on my M2 Mac using Ollama. The app calls the local model without per-question fees from a model API. The computing work still happens on my own hardware.',
  stack:[{title:'Experience',text:'HTML, CSS and JavaScript for the dashboard, chat, charts and inspector.'},{title:'Backend & agents',text:'Python and FastAPI, with LangChain tool calling and LangGraph for the Learning Lab.'},{title:'Data & contracts',text:'CSV fixtures, read-only SQLite queries, pandas aggregation and Pydantic validation.'},{title:'Model runtime',text:'Ollama with Qwen3 4B Instruct, running locally on Apple M2 with 16 GB memory.'}],
  reflectionLabel:'What I learned',reflectionTitle:'Understanding the mechanics makes the design more intentional.',reflectionBody:'Building the full path revealed decisions a static mockup would miss: when to show progress, how to explain missing data, and which evidence helps someone check an answer.',
  learnings:['Distinguish work in progress, a completed result and a failed request.','Redirect unrelated questions toward useful questions the assistant can answer.','Explain unavailable records instead of presenting missing data as zero sales.','Treat JSON and schema validation as structural checks, not proof that every model-written sentence is true.'],
  boundary:'This is a learning prototype with October 2026 sample records. It cannot make payments, send messages or modify records. Its 42 automated tests check calculations and API behaviour; they are not user research or evidence of production readiness.'
});
useHead(() => ({meta:[
  {name:'description',content:el.value?'Ένα εκπαιδευτικό project για AI agents: τοπικό Qwen3, πραγματικά εργαλεία, inspector και Learning Lab.':'An independent AI-agent learning project: a local Qwen3 model, a shop dashboard, real tool-call inspection and a LangGraph Learning Lab.'},
  {property:'og:title',content:'Paper & Parcel · Eleni Chasioti'},
  {property:'og:description',content:'Designing and building a local AI agent, with a visible path from question to answer.'},
  {property:'og:image',content:'/images/paper-and-parcel/video-poster.jpg'}
]}));
</script>

<style scoped src="../../styles/editorial-case-study.css"></style>
<style scoped>
.parcel-case .case-title { white-space:normal; }
.parcel-case .case-hero { scroll-margin-top:90px; }
.parcel-case .hero-image { background:#14161b; aspect-ratio:1632 / 1080; min-height:0; object-fit:contain; pointer-events:none; }
.parcel-case video::-webkit-media-controls { display:none !important; }
figcaption { margin-top:14px; color:var(--color-text-secondary); font-size:.8125rem; line-height:1.6; }
.project-links { display:flex; flex-wrap:wrap; gap:12px 24px; margin-top:24px; }
.project-links a:focus-visible { outline:2px solid currentColor; outline-offset:4px; }
.project-links a { min-height:44px; display:inline-flex; align-items:center; font-size:.875rem; color:var(--color-text); text-decoration:underline; text-underline-offset:4px; }
.project-status,.scope-note,.view-detail { font-size:.875rem; line-height:1.7; color:var(--color-text-secondary); }
.project-status { margin-top:12px; max-width:65ch; }
.showcase-section { display:flex; align-items:center; gap:clamp(24px,4vw,64px); max-width:1400px; margin:96px auto; padding:0 32px; }
.showcase-section-reverse { flex-direction:row-reverse; }
.showcase-text { flex:0 0 300px; max-width:360px; }
.showcase-media { flex:1; min-width:0; margin:0; }
.showcase-media img { display:block; width:100%; height:auto; border-radius:var(--radius-sm); }
.execution-flow { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:20px; margin:32px 0; padding:0; list-style:none; counter-reset:steps; }
.execution-flow li { counter-increment:steps; border-top:1px solid var(--color-border-strong); padding-top:16px; }
.execution-flow li::before { content:counter(steps,decimal-leading-zero); display:block; margin-bottom:14px; color:var(--color-text-secondary); font-size:.75rem; }
.execution-flow strong { display:block; font-size:1rem; }
.execution-flow span { display:block; margin-top:8px; color:var(--color-text-secondary); font-size:.875rem; line-height:1.6; }
.stack-details { display:grid; grid-template-columns:1fr 1fr; gap:28px 40px; margin:32px 0 0; }
.stack-details div { border-top:1px solid var(--color-border-strong); padding-top:16px; }
.stack-details dt { font-weight:600; }
.stack-details dd { margin:8px 0 0; font-size:.9375rem; line-height:1.7; color:var(--color-text-secondary); }
.learning-points { padding-left:1.2rem; }.learning-points li { padding-bottom:12px; }
.scope-note { margin-top:32px; border-top:1px solid var(--color-border-strong); padding-top:20px; }
@media(max-width:1024px) { .showcase-section,.showcase-section-reverse { flex-direction:column; align-items:stretch; gap:24px; }.showcase-text { flex:none; max-width:65ch; }.execution-flow { grid-template-columns:repeat(3,minmax(0,1fr)); } }
@media(max-width:600px) {
  .case-header { padding:32px 20px 0; }.case-title { font-size:clamp(2.8rem,12vw,4rem); }
  .case-hero,.content-section,.showcase-section { padding:0 20px; }.case-hero { margin-bottom:40px; }
  .case-info { grid-template-columns:1fr; gap:24px; padding:0 20px; margin-bottom:64px; }
  .info-meta { display:grid; grid-template-columns:1fr 1fr; gap:20px; }.info-text { font-size:1.6rem; }
  .showcase-section { margin:64px auto; }.stack-details { grid-template-columns:1fr; gap:24px; }
  .execution-flow { grid-template-columns:1fr 1fr; }
}
</style>
