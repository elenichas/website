<template>
  <article class="project-tile" :class="`project-tile--${size}`">
    <router-link :to="project.route" class="tile-link">
      <gallery-preview class="project-preview" :enabled="motionEnabled">
        <project-motion-card
          v-if="project.slug === 'vinted-bundling' || project.slug === 'plum-pulse'"
          :kind="project.slug === 'vinted-bundling' ? 'vinted' : 'plum'"
        />
        <div v-else-if="project.slug === 'coach'" class="coach-showcase">
          <img class="coach-screen coach-screen-left" src="/media/coach-colors.webp" alt="" width="360" height="778" loading="lazy" decoding="async" />
          <img class="coach-screen coach-screen-right" src="/media/coach-authentication.webp" alt="" width="360" height="778" loading="lazy" decoding="async" />
          <video class="coach-screen coach-screen-main" :src="project.preview" :poster="project.poster" muted loop playsinline preload="none" aria-hidden="true" />
        </div>
        <video
          v-else-if="project.preview"
          class="tile-recording"
          :class="{ 'tile-recording-light': project.light }"
          :src="project.preview"
          :poster="project.poster"
          muted loop playsinline preload="none"
          aria-hidden="true"
        />
        <project-sequence-card v-else :kind="project.slug" />
      </gallery-preview>

      <div class="tile-copy">
        <h3 class="tile-title">
          <span>{{ project.title }}</span>
          <span class="tile-arrow" aria-hidden="true">→</span>
        </h3>
        <p v-if="project.meta" class="tile-meta">{{ project.meta }}</p>
      </div>
    </router-link>
  </article>
</template>

<script>
import GalleryPreview from "./GalleryPreview.vue";
import ProjectMotionCard from "./ProjectMotionCard.vue";
import ProjectSequenceCard from "./ProjectSequenceCard.vue";

export default {
  name: "ProjectTile",
  components: { GalleryPreview, ProjectMotionCard, ProjectSequenceCard },
  props: {
    project: { type: Object, required: true },
    motionEnabled: { type: Boolean, default: true },
    size: { type: String, default: "standard" },
  },
};
</script>

<style scoped>
.project-tile { min-width: 0; }
.tile-link { display: block; color: var(--visual-fg); text-decoration: none; border-radius: 10px; }
.tile-link:focus-visible { outline: 2px solid var(--visual-fg); outline-offset: 6px; }
.project-preview { overflow: hidden; border-radius: 8px; transition: transform 320ms cubic-bezier(.22, 1, .36, 1); }
.tile-link:hover .project-preview { transform: translateY(-3px); }

.tile-recording { display: block; width: 100%; aspect-ratio: 16 / 11; object-fit: contain; background: #18191b; border-radius: 8px; }
.tile-recording-light { background: #fff; }
.coach-showcase { position: relative; aspect-ratio: 16 / 11; overflow: hidden; border-radius: 8px; background: radial-gradient(ellipse at 50% 25%, #f3ece1, #c7b7a2); isolation: isolate; }
.coach-screen { position: absolute; display: block; width: 35%; height: auto; border: 3px solid #29241f; border-radius: 12px; box-shadow: 0 14px 28px #34261935; }
.coach-screen-left { left: 3%; top: 16%; transform: rotate(-9deg); }
.coach-screen-right { right: 3%; top: 13%; transform: rotate(9deg); }
.coach-screen-main { z-index: 1; width: 38%; left: 31%; top: 5%; }

.tile-copy { padding-top: 14px; }
.tile-title { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; margin: 0; font-size: var(--type-md); font-weight: 600; line-height: 1.25; letter-spacing: -.01em; color: var(--visual-fg); }
.tile-arrow { flex: none; transform: translateX(-4px); opacity: .45; transition: transform 200ms ease, opacity 200ms ease; }
.tile-link:is(:hover, :focus-visible) .tile-arrow { transform: none; opacity: 1; }
.tile-meta { margin: 6px 0 0; font-size: var(--type-xs); color: var(--visual-muted); }


@media (prefers-reduced-motion: reduce) {
  .project-preview, .tile-arrow { transition: none; }
  .tile-link:hover .project-preview { transform: none; }
}
</style>
