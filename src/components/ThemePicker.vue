<template>
  <div ref="picker" class="theme-picker" @keydown.esc.stop="close(true)">
    <button ref="trigger" class="theme-trigger" type="button" :aria-expanded="open" :aria-controls="panelId" @click="open = !open">
      <span class="swatches" aria-hidden="true"><i v-for="color in [active.header, ...active.accents.slice(0, 2)]" :key="color" :style="{ background: color }"></i></span>
      <span>{{ greek ? 'Χρώματα' : 'Colours' }}</span><span aria-hidden="true">⌄</span>
    </button>
    <div v-if="open" :id="panelId" class="theme-panel">
      <div class="panel-heading"><strong>{{ greek ? 'Βρες το χρώμα σου' : 'Find your colour' }}</strong><button type="button" class="close" :aria-label="greek ? 'Κλείσιμο χρωμάτων' : 'Close colours'" @click="close(true)">×</button></div>
      <div class="theme-options" role="group" :aria-label="greek ? 'Χρωματικά θέματα' : 'Colour themes'">
        <button v-for="theme in themes" :key="theme.id" type="button" class="theme-option" :aria-pressed="theme.id === themeState.id" @click="setTheme(theme.id)">
          <span class="palette-strip" aria-hidden="true"><i v-for="(color, index) in [theme.header, ...theme.accents]" :key="index" :style="{ background: color }"></i></span>
          <span class="option-name">{{ greek ? theme.el : theme.name }}<span v-if="theme.id === themeState.id" aria-hidden="true">✓</span></span>
        </button>
      </div>
      <button type="button" class="surprise" @click="surprise">{{ greek ? 'Διάλεξε για μένα' : 'Surprise me' }} ↗</button>
      <span class="sr-only" aria-live="polite">{{ greek ? active.el : active.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useId } from 'vue';
import { themes, themeState, setTheme } from '../themes';
import { i18nState } from '../i18n';
const greek = computed(() => i18nState.locale === 'el');
const active = computed(() => themes.find(theme => theme.id === themeState.id));
const open = ref(false);
const picker = ref(null);
const trigger = ref(null);
const panelId = `theme-panel-${useId()}`;
function close(focus = false) { open.value = false; if (focus) trigger.value?.focus(); }
function outside(event) { if (!picker.value?.contains(event.target)) close(); }
function surprise() {
  const options = themes.filter(theme => theme.id !== themeState.id);
  setTheme(options[Math.floor(Math.random() * options.length)].id);
}
onMounted(() => { document.addEventListener('pointerdown', outside); document.addEventListener('focusin', outside); });
onBeforeUnmount(() => { document.removeEventListener('pointerdown', outside); document.removeEventListener('focusin', outside); });
</script>

<style scoped>
.theme-picker { position:relative; color:var(--portfolio-ink, #251a25); }
.sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap; border:0; }
button { font:inherit; cursor:pointer; }
.theme-trigger { display:flex; align-items:center; gap:8px; min-height:42px; padding:8px 12px; border:1px solid currentColor; border-radius:24px; background:#fff; color:inherit; font-size:12px; white-space:nowrap; }
.swatches { display:flex; padding-right:4px; }
.swatches i { width:17px; height:17px; border-radius:50%; border:1px solid #888; margin-right:-4px; transition:transform 180ms ease; }
.theme-trigger:hover .swatches i:first-child { transform:translateX(-2px) rotate(-12deg); }
.theme-trigger:hover .swatches i:last-child { transform:translateX(2px) rotate(12deg); }
.theme-panel { position:absolute; top:calc(100% + 12px); right:0; width:min(340px, calc(100vw - 28px)); padding:16px; background:#fff; color:#222; border:1px solid #ddd; border-radius:16px; box-shadow:0 12px 35px #0002; z-index:110; animation:palette-enter 160ms ease-out; }
.panel-heading { display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; font-size:15px; }
.close { border:0; background:transparent; font-size:23px; width:32px; height:32px; color:#333; }
.theme-options { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.theme-option { padding:7px; background:#fff; border:1px solid #ddd; border-radius:8px; color:#333; text-align:left; }
.theme-option:hover { border-color:#777; }
.theme-option[aria-pressed="true"] { border-color:#222; box-shadow:0 0 0 1px #222; }
.palette-strip { display:flex; height:24px; overflow:hidden; border-radius:4px; border:1px solid #ddd; }
.palette-strip i { flex:1; }.palette-strip i:first-child { flex:2; }
.option-name { display:flex; justify-content:space-between; gap:4px; font-size:11px; margin-top:6px; line-height:1.4; }
.surprise { width:100%; margin-top:12px; padding:10px; border:0; border-radius:7px; background:var(--portfolio-second, #eee); color:var(--portfolio-ink, #222); font-size:13px; }
button:focus-visible { outline:2px solid #222; outline-offset:3px; }
@keyframes palette-enter { from { opacity:0; transform:translateY(-5px); } to { opacity:1; transform:translateY(0); } }
@media(max-width:768px) { .theme-panel { position:fixed; top:72px; right:14px; max-height:calc(100dvh - 88px); overflow:auto; } .theme-trigger { padding:8px; gap:6px; } }
@media(prefers-reduced-motion:reduce) { .theme-panel { animation:none; }.swatches i { transition:none; }.theme-trigger:hover .swatches i { transform:none; } }
</style>
