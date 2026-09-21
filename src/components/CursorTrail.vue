<template>
  <div ref="trail" class="cursor-trail" aria-hidden="true">
    <span v-for="(color, index) in colors" :key="color" :style="{ background: color, width: (9 - index) + 'px', height: (9 - index) + 'px' }"></span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const trail = ref(null);
const colors = ["#111111", "#f24e1e", "#ffc436", "#19a979", "#679aff", "#b690f5"];
let frame = 0;
let lastMove = 0;
let target = { x: 0, y: 0 };
let points = [];
let media;
let enabled = false;
function hide() {
  cancelAnimationFrame(frame);
  frame = 0;
  points = [];
  if (trail.value) trail.value.style.opacity = "0";
}
function draw(now) {
  if (!enabled || now - lastMove > 350) { hide(); return; }
  let lead = target;
  Array.from(trail.value.children).forEach((dot, index) => {
    const point = points[index];
    point.x += (lead.x - point.x) * .35;
    point.y += (lead.y - point.y) * .35;
    dot.style.transform = `translate3d(${point.x + 12}px, ${point.y + 14}px, 0)`;
    lead = point;
  });
  trail.value.style.opacity = String(Math.min(1, (350 - (now - lastMove)) / 150));
  frame = requestAnimationFrame(draw);
}
function move(event) {
  if (!enabled || event.pointerType !== "mouse") return;
  target = { x: event.clientX, y: event.clientY };
  if (!points.length) points = colors.map(() => ({ ...target }));
  lastMove = performance.now();
  if (!frame) frame = requestAnimationFrame(draw);
}
function preference() { enabled = media.matches; if (!enabled) hide(); }
onMounted(() => {
  media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
  preference();
  media.addEventListener("change", preference);
  window.addEventListener("pointermove", move, { passive: true });
  window.addEventListener("blur", hide);
  document.documentElement.addEventListener("pointerleave", hide);
});
onBeforeUnmount(() => {
  hide();
  media?.removeEventListener("change", preference);
  window.removeEventListener("pointermove", move);
  window.removeEventListener("blur", hide);
  document.documentElement.removeEventListener("pointerleave", hide);
});
</script>

<style scoped>
.cursor-trail { position: fixed; inset: 0; pointer-events: none; z-index: 200; opacity: 0; overflow: hidden; }
.cursor-trail span { position: absolute; top: 0; left: 0; border-radius: 50%; will-change: transform; }
@media (prefers-reduced-motion: reduce), (pointer: coarse) { .cursor-trail { display: none; } }
</style>
