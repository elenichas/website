<template>
  <div class="media-carousel" role="region" aria-roledescription="carousel" :aria-label="label">
    <div
      ref="track"
      class="carousel-track"
      :style="trackStyle"
      tabindex="0"
      :aria-label="`${label}, use arrow keys to browse`"
      @scroll.passive="onScroll"
      @keydown.left.prevent="go(index - 1)"
      @keydown.right.prevent="go(index + 1)"
    >
      <figure
        v-for="(image, i) in images"
        :key="image.url"
        class="carousel-slide"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${i + 1} of ${images.length}`"
      >
        <img :src="image.url" :alt="`${altPrefix} ${i + 1}`" :style="{ objectFit: fit }" loading="lazy" decoding="async" />
      </figure>
    </div>
    <div v-if="images.length > 1" class="carousel-controls">
      <button type="button" class="carousel-button" :disabled="index === 0" aria-label="Previous image" @click="go(index - 1)">←</button>
      <span class="carousel-count" aria-live="polite">{{ index + 1 }} / {{ images.length }}</span>
      <button type="button" class="carousel-button" :disabled="index === images.length - 1" aria-label="Next image" @click="go(index + 1)">→</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaCarousel",
  props: {
    images: { type: Array, required: true },
    altPrefix: { type: String, default: "Image" },
    label: { type: String, default: "Image gallery" },
    height: { type: [Number, String], default: null },
    fit: { type: String, default: "cover" },
  },
  data() {
    return { index: 0 };
  },
  computed: {
    trackStyle() {
      return this.height ? { height: `${this.height}px` } : { aspectRatio: "16 / 10" };
    },
  },
  methods: {
    go(target) {
      const next = Math.max(0, Math.min(this.images.length - 1, target));
      const track = this.$refs.track;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({ left: next * track.clientWidth, behavior: reduce ? "auto" : "smooth" });
      this.index = next;
    },
    onScroll() {
      const track = this.$refs.track;
      this.index = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    },
  },
};
</script>

<style scoped>
.media-carousel { position: relative; width: 100%; height: 100%; }
.carousel-track { display: flex; width: 100%; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; border-radius: var(--radius-sm, 6px); }
.carousel-track::-webkit-scrollbar { display: none; }
.carousel-track:focus-visible { outline: 2px solid var(--color-text, currentColor); outline-offset: 4px; }
.carousel-slide { flex: 0 0 100%; height: 100%; margin: 0; scroll-snap-align: start; }
.carousel-slide img { display: block; width: 100%; height: 100%; }
.carousel-controls { display: flex; align-items: center; justify-content: flex-end; gap: 12px; margin-top: 12px; }
.carousel-count { min-width: 48px; text-align: center; font-size: 13px; font-variant-numeric: tabular-nums; color: var(--color-text-secondary, inherit); }
.carousel-button { width: 44px; height: 44px; border: 1px solid var(--color-border, currentColor); border-radius: 50%; background: transparent; color: var(--color-text, inherit); font-size: 16px; cursor: pointer; }
.carousel-button:hover:not(:disabled) { border-color: var(--color-text, currentColor); }
.carousel-button:disabled { opacity: .35; cursor: default; }
.carousel-button:focus-visible { outline: 2px solid var(--color-text, currentColor); outline-offset: 3px; }
</style>
