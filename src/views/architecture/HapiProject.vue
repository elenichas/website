<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Hapi Modular Housing</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Hapi Project" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Architectural Thesis</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Team</span>
          <span class="meta-value">Georgia Strinopoulou, Eleni Chasioti</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Year</span>
          <span class="meta-value">2019</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          Housing &amp; Automated Production Infrastructure, an architectural thesis exploring modular 3D-printed housing and automated assembly for dense future cities.
        </p>
      </div>
    </div>

    <!-- Research -->
    <section class="content-section">
      <p class="section-label">Research & Concept</p>
      <h2 class="section-heading">Addressing urban housing challenges</h2>
      <p class="body-text">
        Hapi explored how people might coexist in future megacities where housing demand, construction speed, and adaptability become increasingly urgent. The thesis proposed a modular housing system that could support variation without losing the efficiency of a repeatable construction logic.
      </p>
      <p class="body-text">
        The project proposes a large-scale structure composed of 3D-printed elements that are assembled on-site and elevated to their designated floors. Each home is generated through an algorithmic process, allowing different unit sizes and configurations to fit within a shared structural system.
      </p>
    </section>

    <!-- Isometric -->
    <section class="content-section">
      <figure class="image-figure">
        <img :src="tall" alt="Isometric architectural view" class="content-image" />
      </figure>
    </section>

    <!-- Technical Studies -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Technical Studies</p>
        <h2 class="section-heading">Modular design and fabrication</h2>
        <p class="body-text">
          The modular approach enabled flexible housing configurations within a scalable urban framework. Shortest path and density studies helped evaluate circulation, access, and livability across different aggregation options.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <div class="carousel-wrapper">
                    <v-carousel cycle hide-delimiters show-arrows="hover" height="400">
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
            >
              <img :src="image.url" :alt="'Technical Study ' + (index + 1)" class="carousel-img" />
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </section>

    <!-- Design Process -->
    <section class="content-section">
      <p class="section-label">Innovation</p>
      <h2 class="section-heading">Smart systems and algorithmic design</h2>
      <p class="body-text">
        The system supports cohabitation through units that can connect, expand, or adapt over time. Smart sensors and robotic systems were explored as part of the broader infrastructure, connecting the architectural concept to automated production and building management.
      </p>
      <p class="body-text">
        Modular components were analyzed into rulings for fabrication with hotwire cutting techniques, demonstrating advanced fabrication approaches for architectural-scale 3D printing.
      </p>
    </section>

        <!-- Renders -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-green">
        <div class="carousel-wrapper">
                    <v-carousel cycle hide-delimiters interval="4000" show-arrows="hover" height="450">
            <v-carousel-item
              v-for="(image, index) in renders"
              :key="index"
            >
              <img :src="image.url" :alt="'Architectural illustration ' + (index + 1)" class="carousel-img" />
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <div class="split-content">
        <p class="section-label">Visualization</p>
        <h3 class="section-heading">Living in the modular city</h3>
        <p class="body-text">
          Architectural illustrations showcase the potential of modular, algorithmically-designed housing systems to create diverse, adaptable living environments in dense urban contexts.
        </p>
      </div>
    </section>

    <case-study-footer currentRoute="/products/hapi-project" />
  </div>
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "@/components/navbar.vue";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";

export default {
  name: "HapiProject",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  data() {
    return {
      tall: resolveAsset("@/images/hapi/iso.webp"),
      hero: resolveAsset("@/images/hapi/hapihero.webp"),
      images: [
        { url: resolveAsset("@/images/hapi/carousel0.webp") },
        { url: resolveAsset("@/images/hapi/carousel1.webp") },
        { url: resolveAsset("@/images/hapi/carousel2.webp") },
      ],
      renders: [
        { url: resolveAsset("@/images/hapi/render1.webp") },
        { url: resolveAsset("@/images/hapi/render2.webp") },
        { url: resolveAsset("@/images/hapi/render3.webp") },
        { url: resolveAsset("@/images/hapi/render4.webp") },
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
  font-size: clamp(3.5rem, 10vw, 8rem);
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

/* ===== IMAGES ===== */
.image-figure {
  margin: var(--space-8) 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
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

.split-section-right .split-content {
  order: 2;
}

.split-section-right .split-media {
  order: 1;
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
.media-container-blue {
  background: rgba(232, 240, 255, 0.5);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container-green {
  background: rgba(223, 245, 212, 0.45);
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
    font-size: clamp(2.5rem, 14vw, 5rem);
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
    font-size: clamp(2.5rem, 13vw, 4rem);
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }
}
</style>
