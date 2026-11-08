<template>
  <div class="sequence-card" role="img" :aria-label="config.description">
    <svg viewBox="0 0 960 660" aria-hidden="true" focusable="false">
      <rect width="960" height="660" :fill="config.background" />
      <text x="44" y="61" class="project-label" :fill="config.ink">{{ config.label }}</text>
      <template v-if="kind === 'ai-sandbox'">
        <rect x="44" y="102" width="284" height="466" rx="12" fill="#fff" />
        <text x="66" y="146" class="subheading">Product decisions</text>
        <text x="66" y="210" class="small">Permissions</text>
        <rect x="66" y="231" width="240" height="47" rx="6" fill="#eee7f5" />
        <text x="66" y="338" class="small">Memory</text>
        <rect x="66" y="359" width="240" height="47" rx="6" fill="#eee7f5" />
        <rect x="350" y="102" width="566" height="466" rx="12" fill="#fff" />
        <text x="380" y="149" class="subheading">Launch review assistant</text>
        <g v-for="(scene, i) in aiScenes" :key="scene.permission" class="sequence-scene" :class="`chapter-${i}`">
          <text x="80" y="262" class="small">{{ scene.permission }}</text>
          <text x="80" y="390" class="small">{{ scene.memory }}</text>
          <rect x="380" y="192" width="506" height="52" rx="6" fill="#f2eef6" />
          <text x="398" y="225" class="small">{{ scene.status }}</text>
          <text x="380" y="296" class="subheading">{{ scene.response }}</text>
          <text x="380" y="336" class="small">{{ scene.detail }}</text>
          <path d="M380 382H858 M380 408H801 M380 434H832" stroke="#d7cedf" stroke-width="9" stroke-linecap="round" />
          <rect x="380" y="477" width="506" height="54" rx="6" :fill="i === 2 ? '#542c7a' : '#eee7f5'" />
          <text x="402" y="512" class="small" :fill="i === 2 ? '#fff' : '#382346'">{{ scene.action }}</text>
        </g>
      </template>
      <template v-else>
        <g v-for="(scene,i) in config.scenes" :key="scene.caption" class="sequence-scene" :class="`chapter-${i}`">
          <template v-if="config.phone">
            <text x="44" y="241" class="headline" :fill="config.ink">{{ scene.title }}</text>
            <text x="44" y="289" class="caption" :fill="config.ink">{{ scene.subtitle }}</text>
            <text x="44" y="370" class="small" :fill="config.ink">{{ scene.caption }}</text>
            <rect x="516" y="99" width="260" height="487" rx="24" :fill="config.ink" />
            <svg x="526" y="109" width="240" height="467" :viewBox="scene.crop" preserveAspectRatio="xMidYMin meet">
              <image :href="config.sheet" width="2048" :height="config.sheetHeight" />
            </svg>
            <g opacity=".45" transform="translate(809 197)">
              <svg width="195" height="345" :viewBox="config.scenes[(i+1)%3].crop" preserveAspectRatio="xMidYMin meet"><image :href="config.sheet" width="2048" :height="config.sheetHeight" /></svg>
            </g>
          </template>
          <template v-else>
            <svg :x="scene.crop ? 166 : 30" y="91" :width="scene.crop ? 628 : 900" height="464" :viewBox="scene.crop || '0 0 960 660'" preserveAspectRatio="xMidYMid meet">
              <image :href="scene.image" :width="scene.crop ? 2048 : 960" :height="scene.crop ? 1144 : 660" preserveAspectRatio="xMidYMid meet" />
            </svg>
            <text x="44" y="591" class="caption" :fill="config.ink">{{ scene.caption }}</text>
          </template>
        </g>
      </template>
    </svg>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { resolveAsset } from '@/assetUrl';
const props = defineProps({ kind: { type: String, required: true } });
const asset = name => resolveAsset(`@/images/${name}`);
const configs = {
  'ai-sandbox': { label:'AI Interface Sandbox', background:'#eae3f2', ink:'#382346', description:'Animated AI Sandbox concept: change read access and memory, then review an edit that needs approval.' },
  filos: { label:'Filos · Shared activities', background:'#eee7f5', ink:'#4e2671', phone:true, sheet:asset('filosPrototypes.webp'), sheetHeight:871, description:'Filos prototype screens: discover activities, review a request and confirm a shared plan.', scenes:[
    { title:'Find your activity.', subtitle:'Connect around everyday plans.', caption:'Discover activities', crop:'953 45 134 289' },
    { title:'Meet your companion.', subtitle:'A request with useful context.', caption:'Review the activity request', crop:'1102 45 134 289' },
    { title:'Make a plan.', subtitle:'Clear confirmation, together.', caption:'Confirm the shared activity', crop:'1393 45 134 289' },
  ] },
  'brew-crumb': { label:'Brew & Crumb · Mobile ordering', background:'#e5eadf', ink:'#15391f', phone:true, sheet:asset('kapihanPrototypes.webp'), sheetHeight:779, description:'Brew and Crumb prototype screens: browse coffee, review the basket and see an order confirmation.', scenes:[
    { title:'Your morning coffee.', subtitle:'Browse the menu at your pace.', caption:'Explore the coffee menu', crop:'591 78 150 321' },
    { title:'Ready when you are.', subtitle:'One basket for your favourites.', caption:'Review the basket', crop:'954 78 150 321' },
    { title:'Coffee, sorted.', subtitle:'A clear end to the order.', caption:'See the order confirmation', crop:'1678 78 150 321' },
  ] },
  arabiya: { label:'Arabiya · Learn through practice', background:'#231a10', ink:'#efc183', description:'Arabiya interface sequence: choose a lesson, study the Arabic alphabet and practise with a quiz.', scenes:[
    { image:asset('language/3SelectLesson.webp'), caption:'Choose a lesson' },
    { image:asset('language/AlphabetStudyMode.webp'), caption:'Study the alphabet' },
    { image:asset('language/AlphabetQuizMode.webp'), caption:'Put it into practice' },
  ] },
  hapi: { label:'Hapi · Modular housing', background:'#f8e7e3', ink:'#503c3c', description:'Hapi design study sequence showing floor plans, exploded modular assemblies and massing rules.', scenes:[
    { image:asset('hapi/carousel0.webp'), caption:'Plan a housing unit' },
    { image:asset('hapi/carousel2.webp'), caption:'Explore the kit of parts' },
    { image:asset('hapi/carousel1.webp'), caption:'Test aggregation rules' },
  ] },
  cricket: { label:'Cricket · Rule-based variation', background:'#fff', ink:'#3d4239', description:'Cricket design outputs: a sequence of three generated housing configurations from the project.', scenes:[
    { image:asset('cricket/modelsrendered.webp'), crop:'700 0 680 500', caption:'Explore an output configuration' },
    { image:asset('cricket/modelsrendered.webp'), crop:'1380 0 668 500', caption:'Compare another variation' },
    { image:asset('cricket/modelsrendered.webp'), crop:'700 590 680 500', caption:'Generate a different arrangement' },
  ] },
};
const config = computed(() => configs[props.kind]);
const aiScenes = [
  { permission:'Chat only', memory:'This chat', status:'Working from your message', response:'A review within reach.', detail:'No workspace files are accessed.', action:'Show suggested launch checks' },
  { permission:'Read workspace', memory:'This chat', status:'Two scoped files available', response:'Show the evidence.', detail:'Sources stay visible and traceable.', action:'Review the source files' },
  { permission:'Propose writes', memory:'Saved preferences', status:'Your approval is required', response:'You stay in control.', detail:'Review the proposed edit before saving.', action:'Review proposed change →' },
];
</script>
<style scoped>
.sequence-card { aspect-ratio:16/11; overflow:hidden; border-radius:8px; }
.sequence-card > svg { width:100%; height:100%; display:block; font-family:Arial,sans-serif; fill:#382346; }
.project-label { font-size:21px; font-weight:500; }
.headline { font-size:36px; font-weight:600; letter-spacing:-.7px; }
.caption { font-size:24px; }
.subheading { font-size:25px; font-weight:600; }
.small { font-size:20px; }
.sequence-scene { animation:sequence-a 12s infinite cubic-bezier(.22,1,.36,1); }
.chapter-1 { animation-name:sequence-b; opacity:0; }
.chapter-2 { animation-name:sequence-c; opacity:0; }
@keyframes sequence-a { 0%,27% { opacity:1; transform:translateY(0); } 32%,96% { opacity:0; transform:translateY(-10px); } 100% { opacity:1; transform:translateY(0); } }
@keyframes sequence-b { 0%,28% { opacity:0; transform:translateY(10px); } 34%,61% { opacity:1; transform:translateY(0); } 66%,100% { opacity:0; transform:translateY(-10px); } }
@keyframes sequence-c { 0%,62% { opacity:0; transform:translateY(10px); } 68%,95% { opacity:1; transform:translateY(0); } 100% { opacity:0; transform:translateY(-10px); } }
@media(prefers-reduced-motion:reduce) {
 .sequence-card .sequence-scene { animation:none; transform:none; }
 .sequence-card :is(.chapter-1,.chapter-2) { opacity:0; }
 .sequence-card .chapter-0 { opacity:1; }
}
</style>
