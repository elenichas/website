<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Cricket Plugin</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Cricket Plugin" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Master's Thesis</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">Sole Researcher &amp; Developer</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Institution</span>
          <span class="meta-value">MSc Architectural Computation, UCL</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A computational framework for building massing design using the Wave Function Collapse algorithm, applying gameplay with encoded architectural tilesets.
        </p>
      </div>
    </div>

    <!-- Paper Link -->
    <section class="content-section">
      <a href="https://ucl.academia.edu/EleniChasioti" target="_blank" class="paper-link">
        <span>Read Full Paper</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    </section>

    <!-- Overview -->
    <section class="content-section">
      <p class="section-label">Research</p>
      <h2 class="section-heading">Bridging game design and architecture</h2>
      <p class="body-text">
        This project explores the intersection between architectural computation and procedural content generation, drawing inspiration from game design techniques to revolutionize early-stage architectural massing. The thesis presents a framework for automating the generation of complex building designs using architectural tilesets and the Wave Function Collapse (WFC) algorithm.
      </p>
      <p class="body-text">
        Through a user-friendly computational model, the work offers a practical solution for automating repetitive design tasks while empowering architects to experiment with a variety of design outcomes. The system enables architects to generate massing designs quickly and efficiently by encoding key architectural elements into tilesets, which can be rearranged to create endless design variations.
      </p>
    </section>

    <!-- WFC Algorithm -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Algorithm</p>
        <h2 class="section-heading">Wave Function Collapse</h2>
        <p class="body-text">
          The WFC uses a constraint-solving approach, ensuring that all tiles are placed according to specific design rules and relationships. Originally a pixel-based image generation tool, it's been adapted here for three-dimensional architectural design, maintaining architectural integrity while automating generation.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="wfcdiagram" alt="WFC Diagram" class="split-image" />
      </div>
    </section>

    <!-- Implementation -->
    <section class="content-section">
      <figure class="image-figure">
        <img :src="grasshopper" alt="Grasshopper Implementation" class="content-image" />
      </figure>
      
      <p class="section-label">Technical Implementation</p>
      <h2 class="section-heading">Platform and approach</h2>
      <p class="body-text">
        Built in Rhinoceros 3D with Grasshopper, the plugin uses custom WFC components. Architectural elements are encoded into digital tilesets with unique geometry-based identifiers. A voxel grid breaks input models into individual 3D tiles for processing. The non-backtracking algorithm restarts quickly on contradictions for improved computational speed.
      </p>
      <p class="body-text">
        Users can define constraints for density, facade direction, and gradient control, while the system generates varied sizes while maintaining architectural constraints.
      </p>
    </section>

    <!-- Results -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-green">
        <img :src="segmentation" alt="Tileset Segmentation" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Results</p>
        <h3 class="section-heading">Flexible design variations</h3>
        <p class="body-text">
          Architectural elements are divided into tiles for flexible manipulation and combination into new forms. The WFC algorithm ensures all generated designs adhere to predefined architectural constraints and rules.
        </p>
      </div>
    </section>

    <!-- Models -->
    <section class="content-section">
      <figure class="image-figure">
        <img :src="models1" alt="Generated Models" class="content-image" />
      </figure>
      <figure class="image-figure">
        <img :src="models2" alt="Rendered Models" class="content-image" />
      </figure>
    </section>

        <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">My Role</p>
      <h2 class="section-heading">Sole researcher & developer</h2>
      <p class="body-text">
        Individual master's thesis. I developed the theoretical framework, designed the tileset encoding system, implemented the WFC algorithm adaptation in C# for Grasshopper, and conducted all design experiments and evaluations.
      </p>
    </section>

    <section class="content-section">
      <p class="section-label">Impact</p>
      <h2 class="section-heading">Future directions</h2>
      <p class="body-text">
        This research demonstrated procedural generation's potential to simplify tasks and offer real-time feedback, empowering creative exploration while maintaining constraint control. Machine learning integration could make the system adaptive, learning from designs to optimize for sustainability and aesthetics.
      </p>
      <p class="body-text">
        Extension to irregular grids would expand applicability, while refining the interface for accessibility across technical expertise levels could make this a valuable tool in architectural design's future.
      </p>
    </section>

    <case-study-footer currentRoute="/products/thesis-project" />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";

export default {
  name: "ThesisProject",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  data() {
    return {
      hero: require("@/images/thesis/hero.jpg"),
      grasshopper: require("@/images/cricket/apendix3.jpg"),
      segmentation: require("@/images/cricket/segmentation.jpg"),
      models1: require("@/images/cricket/modelspercentages.jpg"),
      models2: require("@/images/cricket/modelsrendered.jpg"),
      wfcdiagram: require("@/images/cricket/diagram.jpg"),
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

/* Paper Link */
.paper-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-text);
  color: var(--color-bg);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: var(--weight-semibold);
  font-size: 0.875rem;
  transition: opacity 0.2s ease;
}

.paper-link:hover {
  opacity: 0.8;
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

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
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
