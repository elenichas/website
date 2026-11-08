<template>
  <div ref="root" class="gallery-preview" :style="{ '--preview-state': playing ? 'running' : 'paused' }"><slot /></div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
const props = defineProps({ enabled: { type: Boolean, default: true } });
const root = ref(null);
const playing = ref(false);
let observer, preference;
const visible = ref(false);
function sync() {
  playing.value = props.enabled && visible.value && !preference?.matches && !document.hidden;
  root.value?.querySelectorAll('video').forEach(video => {
    if (playing.value) video.play().catch(() => {});
    else video.pause();
  });
}
watch(() => props.enabled, sync);
onMounted(() => {
  preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  observer = new IntersectionObserver(([entry]) => { visible.value = entry.isIntersecting; sync(); }, { threshold: .1 });
  observer.observe(root.value);
  sync();
});
onBeforeUnmount(() => {
  observer?.disconnect();
  preference?.removeEventListener('change', sync);
  document.removeEventListener('visibilitychange', sync);
});
</script>
<style scoped>
.gallery-preview :deep(*) { animation-play-state:var(--preview-state) !important; }
</style>
