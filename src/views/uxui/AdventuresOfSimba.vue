<template>
  <app-navbar />
  <main class="case-study simba-case">
    <header class="case-header"><h1 class="case-title">The Adventures of Simba</h1></header>
    <figure class="case-hero">
      <video class="hero-image" src="/media/simba-demo.webm" poster="/images/simba/poster.jpg" data-autoplay autoplay muted loop playsinline controls preload="metadata" disablepictureinpicture disableremoteplayback :aria-label="copy.videoAlt" />
      <figcaption>{{ copy.videoCaption }}</figcaption>
    </figure>
    <div class="case-info">
      <div class="info-meta">
        <div class="meta-block"><span class="meta-label">{{ el ? 'Τύπος' : 'Type' }}</span><span class="meta-value">{{ copy.type }}</span></div>
        <div class="meta-block"><span class="meta-label">{{ el ? 'Ρόλος' : 'Role' }}</span><span class="meta-value">{{ copy.role }}</span></div>
        <div class="meta-block"><span class="meta-label">{{ el ? 'Έτος' : 'Year' }}</span><span class="meta-value">2026</span></div>
        <div class="meta-block"><span class="meta-label">Stack</span><span class="meta-value">GB Studio · Game Boy Color · Codex</span></div>
      </div>
      <div class="info-description"><p class="info-text">{{ copy.intro }}</p><p class="project-status">{{ copy.status }}</p></div>
    </div>
    <case-snapshot page="simba" />
    <section class="content-section"><p class="section-label">{{ copy.originLabel }}</p><h2 class="section-heading">{{ copy.originTitle }}</h2><p class="body-text">{{ copy.origin }}</p></section>
    <section class="showcase-section">
      <div class="showcase-text"><p class="section-label">{{ copy.worldLabel }}</p><h2 class="section-heading">{{ copy.worldTitle }}</h2><p class="body-text">{{ copy.world }}</p></div>
      <figure class="showcase-media"><img src="/images/simba/flat.png" :alt="copy.flatAlt" width="1000" height="384" loading="lazy" decoding="async" /><figcaption>{{ copy.flatCaption }}</figcaption></figure>
    </section>
    <section class="showcase-section showcase-section-reverse">
      <div class="showcase-text"><p class="section-label">{{ copy.characterLabel }}</p><h2 class="section-heading">{{ copy.characterTitle }}</h2><p class="body-text">{{ copy.character }}</p></div>
      <figure class="showcase-media"><img src="/images/simba/character.png" :alt="copy.characterAlt" width="768" height="128" loading="lazy" decoding="async" /><figcaption>{{ copy.characterCaption }}</figcaption></figure>
    </section>
    <section class="content-section"><p class="section-label">{{ copy.systemLabel }}</p><h2 class="section-heading">{{ copy.systemTitle }}</h2><p class="body-text">{{ copy.system }}</p><p class="body-text">{{ copy.learning }}</p></section>
    <section class="content-section"><p class="section-label">{{ copy.scopeLabel }}</p><h2 class="section-heading">{{ copy.scopeTitle }}</h2><p class="body-text">{{ copy.scope }}</p></section>
    <case-study-footer currentRoute="/products/adventures-of-simba" />
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
  videoAlt:'Βίντεο παιχνιδιού: ο Simba πηδά στις πλατφόρμες και μαζεύει λιχουδιές',videoCaption:'Πραγματική εγγραφή του browser preview · χωρίς ήχο.',
  type:'Προσωπικό παιχνίδι',role:'Ιδέα, σχεδιασμός παιχνιδιού και pixel art με τη βοήθεια του Codex',
  intro:'Ένα μικρό παιχνίδι Game Boy Color με πρωταγωνιστή τον γάτο μου, τον Simba, μέσα σε μια pixel εκδοχή του σπιτιού μας.',
  status:'Το παιχνίδι είναι τοπικό. Δημιουργήθηκε ως επεξεργάσιμο project GB Studio και δοκιμάστηκε στο browser preview και σε εξομοιωτή. Το βίντεο δείχνει πραγματικό gameplay, όχι δημόσια φιλοξενία.',
  originLabel:'Αφετηρία',originTitle:'Ένα παιδικό όνειρο, με πρωταγωνιστή τον γάτο μου.',origin:'Πήρα ένα ModRetro Chromatic στο OpenAI DevDay στο Σαν Φρανσίσκο και ήθελα να φτιάξω ένα παιχνίδι γι’ αυτό. Η ιδέα ήταν απλή: ο Simba να απολαμβάνει μια μέρα στο σπίτι, αναζητώντας φαγητό, παιχνίδι, νερό και χάδια. Περιέγραψα την ιστορία και τις αλλαγές στο Codex, χρησιμοποιώντας το plugin ModRetro Chromatic για να δημιουργήσω και να δοκιμάσω το παιχνίδι.',
  worldLabel:'Ο κόσμος',worldTitle:'Το σπίτι γίνεται πίστα.',world:'Οι φωτογραφίες του Simba και του σπιτιού μας επηρέασαν την εμφάνισή του και το σκηνικό: γκρι γούνα, χρυσαφένια μάτια, σκούρος καναπές, παράθυρα με ουρανό, φυτά για άλματα και μια κουζίνα με ψυγείο. Οι χρυσές λιχουδιές, τα ροζ super treats και το μπλε νερό ξεχωρίζουν από τα στοιχεία του φόντου.',flatAlt:'Pixel art του σπιτιού του Simba με παράθυρα, φυτά, καναπέ και κουζίνα',flatCaption:'Το πραγματικό background της πίστας, με παλέτες από το project.',
  characterLabel:'Ο χαρακτήρας',characterTitle:'Μια γάτα με πρόγραμμα: παιχνίδι, φαγητό, ύπνος.',character:'Ο Simba πηδά στις πλατφόρμες, μαζεύει λιχουδιές, βρίσκει το ποντικάκι του και ζητά παιχνίδι από τον μπαμπά και φαγητό από τη μαμά. Μπορεί να ξεκουραστεί σε μαξιλάρια και να βοηθήσει να τακτοποιηθεί η τηλεόραση αν την ρίξει.',characterAlt:'Έξι όψεις του pixel χαρακτήρα Simba με γκρι γούνα και χρυσαφένια μάτια',characterCaption:'Κατευθύνσεις και καρέ του Simba από το πραγματικό sprite sheet.',
  systemLabel:'Σχεδιαστικές αποφάσεις',systemTitle:'Σαφείς ανταμοιβές σε μια μικροσκοπική οθόνη.',system:'Σε οθόνη 160 × 144 pixel, κάθε σύμβολο πρέπει να διαβάζεται γρήγορα. Έδωσα αντίθεση και διακριτική κίνηση στις ανταμοιβές, πρόσθεσα ενδείξεις αλληλεπίδρασης και χώρισα την πρόοδο από τις ανάγκες του Simba. Μίκρυνα τη γραμματοσειρά και έσπασα τους διαλόγους σε σύντομες σελίδες ώστε να χωρούν.',learning:'Η διαδικασία συνδύασε σχεδιασμό χαρακτήρα, pixel art, μηχανισμούς παιχνιδιού και δοκιμές του πραγματικού ROM. Το Codex βοήθησε στην υλοποίηση και στις επαναλήψεις· οι αποφάσεις για την ιστορία, τις αλληλεπιδράσεις και την εμφάνιση ξεκίνησαν από τη δική μου ιδέα και ανατροφοδότηση.',
  scopeLabel:'Κατάσταση',scopeTitle:'Ένα μικρό, ολοκληρωμένο πρωτότυπο.',scope:'Μία πίστα πλατφόρμας και ένα αρχικό δωμάτιο, με συλλεκτικά αντικείμενα, ανάγκες, ανθρώπους, σύντομες αποστολές και μενού. Το παιχνίδι δεν έχει μόνιμη αποθήκευση ή μουσική. Το βίντεο είναι από το browser preview· δεν αποτελεί βίντεο από την οθόνη της φυσικής συσκευής.'
} : {
  videoAlt:'Gameplay recording: Simba jumps between platforms and collects treats',videoCaption:'Real browser-preview gameplay recording · muted.',
  type:'Personal game project',role:'Concept, game design and pixel art with Codex assistance',
  intro:'A small Game Boy Color game starring my cat Simba in a pixel version of our London flat.',
  status:'This is a local game built as an editable GB Studio project and tested in browser preview and an emulator. The recording shows real gameplay; it is not a permanently hosted game.',
  originLabel:'Starting point',originTitle:'A childhood game-making dream, starring my cat.',origin:'I picked up a ModRetro Chromatic at OpenAI DevDay in San Francisco and wanted to make a game for it. The premise was Simba’s ideal day at home: finding food, water, games, cuddles and naps. I described the story and iterated with Codex, using the ModRetro Chromatic plugin to create and test the game.',
  worldLabel:'The world',worldTitle:'Our flat became a platform level.',world:'Photos of Simba and our home shaped the character and setting: grey fur, golden eyes, a charcoal sofa, cloud-filled windows, plants to jump across and a kitchen with an open fridge. Gold treats, pink super treats and blue water stand apart from the background.',flatAlt:'The authored pixel-art flat with windows, plants, sofa and kitchen',flatCaption:'The actual level background, shown with its project palettes.',
  characterLabel:'The character',characterTitle:'Play, eat, nap, repeat.',character:'Simba jumps across furniture, collects treats, finds his toy mouse and asks Dad for games and Mum for snacks. He can recharge at nap spots, and if he knocks over the TV, he gets a chance to help tidy it up.',characterAlt:'Six frames of Simba’s pixel sprite with grey fur and amber eyes',characterCaption:'Directions and frames from Simba’s actual sprite sheet.',
  systemLabel:'Design decisions',systemTitle:'Readable rewards on a tiny screen.',system:'At 160 × 144 pixels, every cue has to earn its place. I gave rewards stronger colours and subtle movement, marked interactions and separated collectible progress from Simba’s needs. I also drew a narrower font and shortened the dialogue into pages that fit the screen.',learning:'The process brought character design, pixel art, game mechanics and real ROM testing together. Codex helped implement and iterate; the story, interactions and visual direction came from my ideas and feedback.',
  scopeLabel:'Status',scopeTitle:'A small playable prototype.',scope:'One platform level plus a home room, with collectibles, needs, family interactions, short quests and a menu. It has no persistent saves or music. The video is from the browser preview, not a recording of the physical device.'
});
useHead(() => ({ meta: [
  { name:'description', content:el.value?'Ένα παιχνίδι Game Boy Color με πρωταγωνιστή τον γάτο μου, τον Simba.':'A Game Boy Color game starring my cat Simba, built with GB Studio and Codex.' },
  { property:'og:title', content:'The Adventures of Simba · Eleni Chasioti' },
  { property:'og:image', content:'/images/simba/poster.jpg' }
]}));
</script>

<style scoped src="../../styles/editorial-case-study.css"></style>
<style scoped>
.simba-case .case-title { white-space: normal; }
.simba-case .case-hero { min-height: 0; }
.simba-case .hero-image { display:block; width:100%; height:auto; min-height:0; max-height:min(72vh,680px); object-fit:contain; background:#141414; }
.simba-case figcaption { margin-top:12px; font-size:.8rem; line-height:1.5; color:var(--color-text-secondary); }
.simba-case .showcase-section { display:flex; align-items:center; gap:var(--space-10); max-width:1400px; margin:var(--space-12) auto; padding:0 var(--space-8); }
.simba-case .showcase-section-reverse { flex-direction:row-reverse; }
.simba-case .showcase-text { flex:0 0 320px; max-width:360px; }
.simba-case .showcase-media { flex:1; min-width:0; margin:0; }
.simba-case .showcase-media img { display:block; width:100%; height:auto; border-radius:var(--radius-sm); image-rendering:pixelated; background:#eee9df; }
.simba-case .project-status { margin-top:1rem; font-size:.85rem; line-height:1.5; color:var(--color-text-secondary); }
@media(max-width:1024px) { .simba-case .showcase-section,.simba-case .showcase-section-reverse { flex-direction:column; align-items:stretch; gap:var(--space-6); } .simba-case .showcase-text { flex:none; max-width:100%; } }
@media(max-width:768px) { .simba-case .case-header { padding:var(--space-8) var(--space-5) 0; } .simba-case .case-hero,.simba-case .content-section,.simba-case .showcase-section { padding-left:var(--space-5); padding-right:var(--space-5); } .simba-case .case-info { grid-template-columns:1fr; gap:var(--space-5); padding:0 var(--space-5); } }
@media(prefers-reduced-motion:reduce) { .simba-case .hero-image { visibility:hidden; } .simba-case .case-hero { background:url('/images/simba/poster.jpg') center / contain no-repeat; min-height: min(60vw,440px); } }
</style>
