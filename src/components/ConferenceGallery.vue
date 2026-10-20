<template>
  <section id="conferences" class="conferences" aria-labelledby="conferences-title">
    <div class="conference-inner">
      <h2 id="conferences-title">{{ greek ? 'Συνέδρια' : 'Conferences' }}</h2>
      <p class="section-intro">{{ greek ? 'Στιγμές από συναντήσεις γύρω από το design, την τεχνολογία και τα προϊόντα.' : 'Time spent exploring design, technology and product practice beyond my day-to-day work.' }}</p>
      <div class="event-switch" aria-label="Choose conference">
        <button v-for="event in events" :key="event.id" :aria-pressed="selected === event.id" @click="selectEvent(event.id)">{{ event.title }}<span>{{ event.location }}</span></button>
      </div>
      <div class="event-content">
        <div class="event-note">
          <h3>{{ active.title }}</h3>
          <p class="event-meta">{{ active.location }} · {{ active.venue }}<br>{{ active.date }}</p>
          <p>{{ selected === 'ai' ? (greek ? 'Παρακολούθησα το The AI Conference 2026 στο Σαν Φρανσίσκο. Το πρόγραμμα κάλυπτε AI agents, μεγάλα γλωσσικά μοντέλα, υποδομές και εφαρμογές AI.' : 'I attended The AI Conference 2026 in San Francisco. The programme covered AI agents, large language models, infrastructure and applied AI.') : (greek ? 'Το 2025 παρακολούθησα το UXDX USA στη Νέα Υόρκη, μαζί με designers, developers και product managers, με ενδιαφέρον για τα design systems και τη συνεργασία στην ανάπτυξη προϊόντων.' : 'In 2025, I attended UXDX USA in New York, connecting with designers, developers and product managers around design systems and collaborative product development.') }}</p>
          <a :href="active.url" target="_blank" rel="noopener noreferrer">{{ greek ? 'Πληροφορίες συνεδρίου' : 'Conference details' }} ↗</a>
        </div>
        <div class="event-gallery" role="region" :aria-label="`${active.title} photos`">
          <div class="gallery-top"><div><button @click="scrollGallery(-1)" :aria-label="greek ? 'Προηγούμενες φωτογραφίες' : 'Previous photos'">←</button><button @click="scrollGallery(1)" :aria-label="greek ? 'Επόμενες φωτογραφίες' : 'Next photos'">→</button></div></div>
          <div ref="strip" class="photo-strip" :key="selected" tabindex="0" :aria-label="greek ? 'Συλλογή φωτογραφιών' : 'Photo gallery'">
            <button v-for="(photo,index) in images" :key="photo.src" class="photo" @click="openPhoto(index)" :aria-label="`${greek ? 'Άνοιγμα' : 'Enlarge'}: ${photo.alt}`"><img :src="photo.src" :alt="photo.alt" loading="lazy"></button>
          </div>
        </div>
      </div>
    </div>
    <dialog ref="viewer" class="photo-viewer" :aria-label="`${active.title} photo viewer`" @click="closeOnBackdrop" @keydown.left.prevent="move(-1)" @keydown.right.prevent="move(1)">
      <div class="viewer-toolbar"><span>{{ active.title }} · {{ slide+1 }} / {{ images.length }}</span><button @click="viewer.close()">{{ greek ? 'Κλείσιμο' : 'Close' }} ×</button></div>
      <img :src="current.src" :alt="current.alt">
      <div class="viewer-bottom"><button @click="move(-1)" :aria-label="greek ? 'Προηγούμενη φωτογραφία' : 'Previous photo'">←</button><p>{{ current.alt }}</p><button @click="move(1)" :aria-label="greek ? 'Επόμενη φωτογραφία' : 'Next photo'">→</button></div>
    </dialog>
  </section>
</template>
<script setup>
import { computed, ref } from 'vue';
import { i18nState } from '../i18n';
const props=defineProps({uxdxImages:{type:Array,required:true}});
const greek=computed(()=>i18nState.locale==='el');
const selected=ref('ai');
const slide=ref(0);
const events=[{id:'ai',title:'The AI Conference 2026',location:'San Francisco',venue:'Pier 48',date:'29 September–1 October 2026',url:'https://aiconference.com/faq/'},{id:'uxdx',title:'UXDX USA 2025',location:'New York',venue:'New World Stages',date:'12–14 May 2025',url:'https://uxdx.com/usa/2025/'}];
const active=computed(()=>events.find(e=>e.id===selected.value));
const aiPhotos=[
 ['prototyping-talk','A talk on AI tools across research, design and prototyping','Ομιλία για εργαλεία AI στην έρευνα, το design και τα πρωτότυπα'],
 ['robotics-demo','A robotics demo at the Toborlife AI stand','Επίδειξη ρομποτικής στο περίπτερο της Toborlife AI'],
 ['neo4j-demo','A graph-based AI demonstration at the Neo4j stand','Επίδειξη AI με γράφους στο περίπτερο της Neo4j'],
 ['image-generation-talk','A presentation on image generation for game characters','Παρουσίαση για δημιουργία εικόνων χαρακτήρων παιχνιδιών'],
 ['together-ai','Together AI artwork from the conference','Εικονογράφηση της Together AI από το συνέδριο'],
 ['golden-gate-portrait','A moment by the Golden Gate Bridge','Μια στιγμή δίπλα στη γέφυρα Golden Gate'],
 ['san-francisco-waterfront','San Francisco from the waterfront','Το Σαν Φρανσίσκο από την προκυμαία'],
 ['golden-gate','The Golden Gate Bridge','Η γέφυρα Golden Gate']
];
const images=computed(()=>selected.value==='ai' ? [aiPhotos[5],aiPhotos[1],aiPhotos[2],aiPhotos[0],aiPhotos[3],aiPhotos[4],aiPhotos[6],aiPhotos[7]].map(p=>({src:`/images/conferences/ai-2026/${p[0]}.jpg`,alt:p[greek.value?2:1]})) : props.uxdxImages.map((p,i)=>({src:p.src,alt:`UXDX USA 2025 · ${greek.value?'Νέα Υόρκη, φωτογραφία':'New York, photo'} ${i+1}`})));
const strip=ref(null);
const viewer=ref(null);
function scrollGallery(direction){strip.value.scrollBy({left:direction*strip.value.clientWidth*.8,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
function openPhoto(index){slide.value=index;viewer.value.showModal();}
function closeOnBackdrop(event){if(event.target===viewer.value)viewer.value.close();}
const current=computed(()=>images.value[slide.value]);
function selectEvent(id){selected.value=id;slide.value=0;}
function move(delta){slide.value=(slide.value+delta+images.value.length)%images.value.length;}
</script>
<style scoped>
.conferences { background:#ffffff; color:#252525; padding:64px 0; border-top:1px solid #dedede; }
.conference-inner { max-width:1380px; padding:0 32px; margin:auto; }
h2 { font-size:clamp(28px,4vw,40px); font-weight:600; letter-spacing:-.025em; margin:0 0 12px; }
.section-intro { color:#555; font-size:15px; line-height:1.6; max-width:65ch; }
.event-switch { display:flex; gap:28px; margin:28px 0 34px; border-bottom:1px solid #ddd; }
button { cursor:pointer; font:inherit; color:inherit; }
.event-switch button { text-align:left; padding:12px 0 16px; border:0; border-bottom:3px solid transparent; background:transparent; font-size:16px; }
.event-switch button[aria-pressed="true"] { border-bottom-color:#f65b32; }
.event-switch span { display:block; font-size:12px; margin-top:5px; color:#555; }
.event-note { display:grid; grid-template-columns:1fr 1.2fr; gap:8px 60px; margin-bottom:32px; }
h3 { font-size:clamp(23px,3vw,32px); line-height:1.2; font-weight:600; letter-spacing:-.025em; margin:0; grid-column:1; }
.event-note p { font-size:15px; line-height:1.7; margin:0; color:#505050; }
.event-note .event-meta { grid-column:1; grid-row:2; font-size:13px; }
.event-note p:not(.event-meta) { grid-column:2; grid-row:1 / span 2; max-width:60ch; }
.event-note a { grid-column:2; color:#513174; font-size:13px; text-decoration:underline; text-underline-offset:4px; justify-self:start; }
.event-gallery { min-width:0; }
.gallery-top { display:flex; justify-content:flex-end; align-items:center; gap:20px; margin-bottom:14px; font-size:12px; color:#555; }
.gallery-top > div { display:flex; gap:8px; }
.gallery-top button,.viewer-bottom button { border:1px solid #ccc; width:44px; height:44px; border-radius:50%; background:transparent; font-size:22px; }
.photo-strip { display:flex; gap:16px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:0; scrollbar-width:none; }
.photo-strip::-webkit-scrollbar { display:none; }
.photo { flex:0 0 auto; display:block; border:0; padding:0; background:transparent; text-align:left; scroll-snap-align:start; }
.photo img { display:block; height:350px; width:auto; max-width:560px; object-fit:cover; border-radius:6px; }
.photo:hover img { opacity:.9; }
button:focus-visible,a:focus-visible,.photo-strip:focus-visible { outline:2px solid #653ab0; outline-offset:3px; }
.photo-viewer { position:fixed; inset:0; margin:auto; width:min(1100px,94vw); max-height:94dvh; background:#fff; color:#222; border:0; border-radius:8px; padding:20px; }
.photo-viewer::backdrop { background:rgba(0,0,0,.8); }
.viewer-toolbar,.viewer-bottom { display:flex; align-items:center; justify-content:space-between; gap:16px; font-size:13px; }
.viewer-toolbar button { min-height:44px; padding:8px 14px; background:#222; color:white; border:0; border-radius:4px; }
.photo-viewer > img { display:block; width:100%; height:calc(85dvh - 140px); object-fit:contain; margin:14px 0; }
.viewer-bottom p { margin:0; text-align:center; font-size:13px; }
.viewer-bottom button { flex-shrink:0; }
@media(max-width:700px){ .conference-inner { padding:0 20px; } .conferences { padding:40px 0; } .event-note { display:flex; flex-direction:column; gap:12px; } .event-switch { gap:20px; } .event-switch button { flex:1; font-size:14px; } .photo img { height:300px; max-width:80vw; } .photo-strip { gap:12px; } .gallery-top > span { max-width:24ch; line-height:1.5; } .photo-viewer { padding:12px; } }
</style>
