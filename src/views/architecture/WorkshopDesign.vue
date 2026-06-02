<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Architectural Geometry</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Voxel housing aggregation study from the Digital Futures Workshop" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Workshop</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">Computational Designer</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Team</span>
          <span class="meta-value">Peter Bus, Jackson Bi, Sandro Sanin, Eleni Chasioti</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A Digital Futures Workshop project exploring voxel-based housing systems, aggregation logic, and robotic fabrication techniques.
        </p>
      </div>
    </div>

    <!-- Research -->
    <section class="content-section">
      <p class="section-label">Research & Precedents</p>
      <h2 class="section-heading">Modular housing explorations</h2>
      <p class="body-text">
        The workshop began with a study of architectural precedents such as Alvenaria Social Housing and Habitat 67. These references helped frame modularity, aggregation, and geometric experimentation. The team then developed a voxel-based system for generating housing units with flexible size and configuration.
      </p>
      <p class="body-text">
        We explored different ways of aggregating voxels to create efficient, livable structures with access to light, air, and circulation. Shortest path diagrams and density studies helped evaluate how people could move through the habitat and where the system became too dense or disconnected.
      </p>
    </section>

    <!-- Process -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Design Process</p>
        <h2 class="section-heading">From voxels to assembled units</h2>
        <p class="body-text">
          Different graph-based methods for grouping voxels were tested to create diverse configurations. I contributed to the computational design process, visual studies, and assembly logic, helping translate abstract aggregation rules into units, facade variations, balconies, rooftops, and exploded diagrams.
        </p>
      </div>
      <div class="split-media media-container-purple">
        <div class="carousel-wrapper">
                    <v-carousel cycle hide-delimiters interval="4000" show-arrows="hover" height="400">
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
            >
              <img loading="lazy" :src="image.url" :alt="'Process step ' + (index + 1)" class="carousel-img" />
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </section>

    <!-- Fabrication -->
    <section class="content-section">
      <p class="section-label">Innovation</p>
      <h2 class="section-heading">Robotic fabrication techniques</h2>
      <p class="body-text">
        Robotic fabrication techniques were explored for constructing these complex geometries. Modular components were analyzed into rulings for fabrication with hotwire cutting techniques. The modular approach enabled flexible and scalable housing solutions adaptable to various urban contexts.
      </p>
      <p class="body-text">
        Shortest path and density studies ensured functional and livable environments with optimal circulation, demonstrating how computational design can address real-world spatial challenges.
      </p>
    </section>

        <!-- Video -->
    <section class="content-section">
      <!-- <p class="section-label">Final Assembly</p>
      <h2 class="section-heading">Physical prototype</h2> -->
      <figure class="video-figure">
        <video preload="metadata" controls class="content-video">
          <source src="/vids/habitatVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </figure>
    </section>

    <case-study-footer currentRoute="/products/workshop-design" />
  </div>
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "@/components/navbar.vue";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";

export default {
  name: "WorkshopDesign",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  data() {
    return {
      hero: resolveAsset("@/images/habitat/hero.webp"),
      images: [
        { url: resolveAsset("@/images/habitat/voxelunits.webp") },
        { url: resolveAsset("@/images/habitat/unitypes.webp") },
        { url: resolveAsset("@/images/habitat/siteviewAggregations.webp") },
        { url: resolveAsset("@/images/habitat/pathAnddensity.webp") },
        { url: resolveAsset("@/images/habitat/elements.webp") },
        { url: resolveAsset("@/images/habitat/exploded.webp") },
        { url: resolveAsset("@/images/habitat/aggregations2.webp") },
        { url: resolveAsset("@/images/habitat/assembledunits.webp") },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== CASE STUDY - Editorial Reveal ===== */

/* Reveal Animation */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-reveal {
  opacity: 0;
  animation: revealUp 0.8s var(--ease-out) forwards;
  animation-delay: var(--delay, 0s);
}

/* Base */
.case-study {
  background: var(--color-bg);
  color: var(--color-text);
  padding-bottom: var(--space-12);
}

/* ===== CINEMATIC HEADER ===== */
.case-header {
  padding: var(--space-16) var(--space-8) 0;
  text-align: center;
  position: relative;
  z-index: 2;
}

.case-title {
  font-family: var(--font-serif);
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin: 0;
  white-space: nowrap;
  margin-bottom: -0.15em;
}

/* ===== HERO ===== */
.case-hero {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== PROJECT INFO - split ===== */
.case-info {
  max-width: 1100px;
  margin: 0 auto var(--space-16);
  padding: 0 var(--space-8);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-12);
  align-items: start;
}

.info-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.meta-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.meta-label {
  font-size: 0.625rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
}

.meta-value {
  font-size: 0.9375rem;
  font-weight: var(--weight-medium);
  color: var(--color-text);
  line-height: 1.4;
}

.info-description {
  padding-top: 0.25rem;
}

.info-text {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 1.35;
  color: var(--color-text);
  letter-spacing: -0.01em;
  margin: 0;
}

/* ===== CONTENT SECTIONS ===== */
.content-section {
  max-width: 760px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.section-label {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  font-weight: var(--weight-semibold);
}

.section-heading {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0 0 var(--space-4);
  color: var(--color-text);
}

.body-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4);
}

/* ===== VIDEO ===== */
.video-figure {
  margin: var(--space-8) 0;
}

.content-video {
  width: 100%;
  height: auto;
  display: block;
  background: #000;
  border-radius: var(--radius-sm);
}

/* ===== SPLIT SECTIONS ===== */
.split-section {
  display: flex;
  align-items: center;
  gap: var(--space-10);
  max-width: 1200px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
}

.split-section-left .split-content {
  order: 1;
}

.split-section-left .split-media {
  order: 2;
}

.split-content {
  flex: 1;
  max-width: 500px;
}

.split-media {
  flex: 1;
  max-width: 600px;
}

/* Media Containers */
.media-container-purple {
  background: rgba(240, 232, 255, 0.45);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

/* Carousel */
.carousel-wrapper {
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.carousel-wrapper :deep(.v-carousel) {
  border-radius: var(--radius-sm);
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .case-info {
    grid-template-columns: 200px 1fr;
    gap: var(--space-8);
  }

  .split-section {
    flex-direction: column;
    gap: var(--space-6);
  }

  .split-content,
  .split-media {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .case-header {
    padding: var(--space-10) var(--space-5) 0;
  }

  .case-title {
    font-size: clamp(2rem, 11vw, 4rem);
    white-space: normal;
    margin-bottom: -0.1em;
  }

  .case-hero {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-8);
  }

  .case-info {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding: 0 var(--space-5);
    margin-bottom: var(--space-12);
  }

  .info-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .info-text {
    font-size: 1.375rem;
  }

  .content-section {
    padding: 0 var(--space-5);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .split-section {
    padding: 0 var(--space-5);
  }
}

@media (max-width: 480px) {
  .case-title {
    font-size: clamp(2rem, 10vw, 3rem);
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }
}
</style>
