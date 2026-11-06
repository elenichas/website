<template>
  <div ref="root" class="project-motion" :class="{ 'is-paused': !visible }" role="img" :aria-label="kind === 'vinted' ? 'Vinted concept animation: a £5 tee, its £7.79 full price, and items from the same seller.' : 'Plum Pulse concept animation: request a payment skip, review the exact payment, then see its verified receipt.'">
    <svg viewBox="0 0 960 660" aria-hidden="true" focusable="false">
      <template v-if="kind === 'vinted'">
        <rect width="960" height="660" fill="#e1eeea" />
        <g fill="#153f3b">
          <text x="48" y="68" class="eyebrow">Vinted · Feature concept</text>
          <text x="48" y="198" class="headline">A nearby find.</text>
          <text x="48" y="250" class="headline">The full picture.</text>
          <g class="scene scene-a"><text x="48" y="320" class="caption">Start with something you love.</text></g>
          <g class="scene scene-b"><text x="48" y="320" class="caption">See every cost, together.</text></g>
          <g class="scene scene-c"><text x="48" y="320" class="caption">More finds. One delivery.</text></g>
          <path d="M48 500H395" stroke="#a8c6bb" />
          <text x="48" y="540" class="footnote">Smart Local Bundling</text>
          <text x="48" y="571" class="small">Illustrative prototype sequence</text>
        </g>
        <rect x="451" y="40" width="462" height="583" rx="18" fill="#fff" />
        <text x="478" y="79" class="brand" fill="#007d82">Vinted</text>
        <text x="886" y="76" class="small" text-anchor="end" fill="#526661">Nora · North London</text>
        <g class="scene scene-a">
          <image :href="tee" x="478" y="100" width="408" height="340" preserveAspectRatio="xMidYMid slice" />
          <text x="478" y="482" class="title">Soft yellow tee</text>
          <text x="478" y="516" class="small">Arket · M · Good condition</text>
          <text x="478" y="576" class="amount">£5.00</text>
          <rect x="691" y="540" width="195" height="48" rx="6" fill="#007d82" />
          <text x="788" y="571" class="button-text" text-anchor="middle">See full price →</text>
        </g>
        <g class="scene scene-b">
          <image :href="tee" x="478" y="104" width="86" height="86" preserveAspectRatio="xMidYMid slice" />
          <text x="584" y="139" class="title">Soft yellow tee</text>
          <text x="584" y="172" class="small">From Nora</text>
          <text x="478" y="246" class="caption">Item</text><text x="886" y="246" class="caption" text-anchor="end">£5.00</text>
          <text x="478" y="296" class="caption">Buyer fee</text><text x="886" y="296" class="caption" text-anchor="end">£0.80</text>
          <text x="478" y="346" class="caption">Delivery</text><text x="886" y="346" class="caption" text-anchor="end">£1.99</text>
          <path d="M478 374H886" stroke="#c7d9d2" />
          <text x="478" y="424" class="title">Full total</text><text x="886" y="427" class="amount" text-anchor="end">£7.79</text>
          <rect x="478" y="480" width="408" height="108" rx="8" fill="#e1eeea" />
          <text x="498" y="518" class="title">Nora has more of your favourites</text>
          <text x="498" y="561" class="caption" fill="#007d82">Explore a bundle →</text>
        </g>
        <g class="scene scene-c">
          <text x="478" y="132" class="title">From the same wardrobe</text>
          <text x="478" y="166" class="small">One seller. Shared delivery.</text>
          <image :href="tee" x="478" y="196" width="196" height="240" preserveAspectRatio="xMidYMid slice" />
          <image :href="jeans" x="690" y="196" width="196" height="240" preserveAspectRatio="xMidYMid slice" />
          <text x="478" y="470" class="small">Soft yellow tee · £5</text>
          <text x="690" y="470" class="small">Straight jeans · £13</text>
          <rect x="478" y="520" width="408" height="68" rx="7" fill="#007d82" />
          <text x="682" y="562" class="button-text" text-anchor="middle">Build your bundle →</text>
        </g>
      </template>
      <template v-else>
        <rect width="960" height="660" fill="#612095" />
        <g fill="#fff">
          <text x="48" y="68" class="eyebrow">Plum Pulse · Agent UX</text>
          <text x="48" y="198" class="headline">Your money.</text>
          <text x="48" y="250" class="headline">Your decision.</text>
          <g class="scene scene-a"><text x="48" y="320" class="caption">Ask for a specific change.</text></g>
          <g class="scene scene-b"><text x="48" y="320" class="caption">Review before you approve.</text></g>
          <g class="scene scene-c"><text x="48" y="320" class="caption">Know exactly what happened.</text></g>
          <path d="M48 500H395" stroke="#ac7dce" />
          <text x="48" y="540" class="footnote">Specific approval. Verified outcome.</text>
          <text x="48" y="571" class="small">Independent concept · Fictional data</text>
        </g>
        <rect x="451" y="40" width="462" height="583" rx="18" fill="#fff" />
        <text x="478" y="82" class="brand" fill="#612095">Pulse</text>
        <text x="886" y="78" class="small" text-anchor="end" fill="#6d557c">Investment assistant</text>
        <rect x="498" y="112" width="388" height="70" rx="8" fill="#f0e8f7" />
        <text x="518" y="155" class="caption" fill="#49265e">Skip my next £75 investment.</text>
        <g class="scene scene-a">
          <circle cx="495" cy="235" r="17" fill="#7521b8" />
          <path d="M485 235h6l4-9 5 18 4-9h5" fill="none" stroke="#fff" stroke-width="2" />
          <text x="528" y="243" class="title">Preparing your review</text>
          <text x="478" y="315" class="caption">Checking the next payment</text>
          <text x="478" y="365" class="caption">Confirming when it resumes</text>
          <rect x="478" y="430" width="408" height="117" rx="8" fill="#f6f2f8" />
          <text x="498" y="478" class="title">Your schedule is unchanged.</text>
          <text x="498" y="516" class="small">You’ll review the details first.</text>
        </g>
        <g class="scene scene-b">
          <text x="478" y="239" class="title">Skip one payment?</text>
          <text x="478" y="299" class="caption">Amount</text><text x="886" y="299" class="title" text-anchor="end">£75.00</text>
          <text x="478" y="345" class="caption">Payment date</text><text x="886" y="345" class="caption" text-anchor="end">8 October</text>
          <text x="478" y="391" class="caption">Resumes</text><text x="886" y="391" class="caption" text-anchor="end">8 November</text>
          <text x="478" y="456" class="small">Only this payment will be skipped.</text>
          <rect class="approval-button" x="478" y="493" width="408" height="65" rx="7" fill="#7521b8" />
          <text x="682" y="533" class="button-text" text-anchor="middle">Confirm skip of £75</text>
          <text x="682" y="595" class="small" text-anchor="middle">Keep payment unchanged</text>
          <path class="demo-pointer" d="M799 538v33l9-9 8 17 7-4-8-16h14z" fill="#251330" stroke="#fff" stroke-width="2" />
        </g>
        <g class="scene scene-c">
          <circle cx="682" cy="260" r="37" fill="#e1f1e7" />
          <path class="receipt-check" d="m665 259 12 12 22-24" fill="none" stroke="#31734e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          <text x="682" y="345" class="amount" text-anchor="middle">One payment skipped</text>
          <text x="682" y="389" class="caption" text-anchor="middle">£75 · 8 October 2026</text>
          <rect x="478" y="438" width="408" height="105" rx="8" fill="#f0e8f7" />
          <text x="682" y="480" class="title" text-anchor="middle">Monthly payments continue</text>
          <text x="682" y="518" class="small" text-anchor="middle">Next £75 investment: 8 November</text>
          <text x="682" y="589" class="small" text-anchor="middle" fill="#31734e">Verified receipt · SKIP-20261008</text>
        </g>
      </template>
      <g :fill="kind === 'vinted' ? '#007d82' : '#e4c6fa'">
        <rect class="progress progress-a" x="48" y="385" width="103" height="4" rx="2" />
        <rect class="progress progress-b" x="170" y="385" width="103" height="4" rx="2" />
        <rect class="progress progress-c" x="292" y="385" width="103" height="4" rx="2" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import tee from '@/images/vinted/products/yellow-b.png';
import jeans from '@/images/vinted/bundles/light-jeans.png';
defineProps({ kind: { type: String, required: true } });
const root = ref(null);
const visible = ref(false);
let observer;
onMounted(() => {
  observer = new IntersectionObserver(([entry]) => { visible.value = entry.isIntersecting; }, { threshold: 0.15 });
  observer.observe(root.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
.project-motion { aspect-ratio:16/11; overflow:hidden; border-radius:8px; }
.project-motion svg { width:100%; height:100%; display:block; font-family:Arial,sans-serif; fill:#26312e; }
.headline { font-size:43px; font-weight:600; letter-spacing:-1.2px; }
.eyebrow { font-size:18px; }
.caption { font-size:22px; }
.title { font-size:23px; font-weight:600; }
.brand { font-size:27px; font-weight:600; }
.amount { font-size:32px; font-weight:600; }
.small { font-size:18px; }
.footnote { font-size:18px; font-weight:600; }
.button-text { fill:#fff; font-size:21px; font-weight:600; }
.scene { animation:chapter-a 12s infinite; }
.scene-b { animation-name:chapter-b; opacity:0; }
.scene-c { animation-name:chapter-c; opacity:0; }
.progress { opacity:.25; animation:progress-a 12s infinite; }
.progress-b { animation-name:progress-b; }
.progress-c { animation-name:progress-c; }
.demo-pointer { animation:approve 12s infinite; }
.receipt-check { stroke-dasharray:55; animation:receipt 12s infinite; }
.is-paused :is(.scene,.progress,.demo-pointer,.receipt-check) { animation-play-state:paused; }
@keyframes chapter-a { 0%,27% { opacity:1; transform:translateY(0); } 31%,96% { opacity:0; transform:translateY(-8px); } 100% { opacity:1; transform:translateY(0); } }
@keyframes chapter-b { 0%,28% { opacity:0; transform:translateY(8px); } 33%,62% { opacity:1; transform:translateY(0); } 66%,100% { opacity:0; transform:translateY(-8px); } }
@keyframes chapter-c { 0%,63% { opacity:0; transform:translateY(8px); } 68%,95% { opacity:1; transform:translateY(0); } 100% { opacity:0; transform:translateY(-8px); } }
@keyframes progress-a { 0%,28% { opacity:1; } 33%,100% { opacity:.25; } }
@keyframes progress-b { 0%,28%,66%,100% { opacity:.25; } 33%,62% { opacity:1; } }
@keyframes progress-c { 0%,63%,100% { opacity:.25; } 68%,95% { opacity:1; } }
@keyframes approve { 0%,46% { opacity:0; transform:translate(32px,35px); } 53%,59% { opacity:1; transform:translate(0,0); } 61%,100% { opacity:0; transform:translate(0,0); } }
@keyframes receipt { 0%,66% { stroke-dashoffset:55; } 73%,100% { stroke-dashoffset:0; } }
@media(prefers-reduced-motion:reduce) {
  .project-motion :is(.scene,.progress,.demo-pointer,.receipt-check) { animation:none; transform:none; }
  .project-motion .scene-a,.project-motion .scene-b,.project-motion .demo-pointer { opacity:0; }
  .project-motion .scene-c { opacity:1; }
}
</style>
