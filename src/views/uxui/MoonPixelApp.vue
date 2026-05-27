<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Moon Habitat Configurator</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Moon Habitat Configurator" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Proof of Concept</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">UX/UI Designer, Front End Developer</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Stack</span>
          <span class="meta-value">3D Environment &amp; Systems</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A professional proof of concept for a conference, applying real design automation methods to a hypothetical lunar habitat scenario.
        </p>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Background</p>
        <h2 class="section-heading">A speculative scenario with real methodology</h2>
        <p class="body-text">
          This was a team exploration into how the same methods used for real-world design automation could be applied to an extreme environment. The lunar setting made the project playful and speculative, but the underlying workflow was grounded in modular systems, spatial constraints, and configuration logic.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="picture1" alt="Lunar habitat visualization" class="split-image" />
      </div>
    </section>

    <!-- System Components -->
    <section class="content-section">
      <p class="section-label">Approach</p>
      <h2 class="section-heading">A modular system for extreme environments</h2>
      <p class="body-text">
        The system combines terrain analysis, modular unit cataloging, network-based connections, and optimization
        algorithms to adapt habitat layouts to spatial constraints. Key elements include:
      </p>
      <ul class="simple-list">
        <li><strong>Terrain Analysis</strong> Systematic analysis of solar terrain conditions to inform site selection
          and orientation</li>
        <li><strong>Module Catalog</strong> Library of modular units with different functions and spatial configurations
        </li>
        <li><strong>Network System</strong> Connection framework linking modules through pathways and infrastructure
        </li>
        <li><strong>Optimization Engine</strong> Algorithms to optimize layouts and adapt designs to spatial constraints
        </li>
        <li><strong>3D Visualization</strong> Interactive 3D environment for exploring and configuring habitat designs
        </li>
        <li><strong>Parametric Control</strong> Design automation through configurable parameters and rules</li>
      </ul>
    </section>

    <!-- System Architecture -->
    <section class="content-section">
      <p class="section-label">System Architecture</p>
      <h2 class="section-heading">From terrain to habitat</h2>
      <p class="body-text">
        The system follows a systematic approach from terrain analysis to final configuration, allowing for iterative
        design exploration and optimization.
      </p>
      <figure class="image-figure">
        <img :src="configuratorDiagram" alt="Configurator System Diagram" class="content-image" />
      </figure>
    </section>

    <!-- Module Typologies - Split Layout -->
    <section class="split-section split-section-right">
      <div class="split-media media-container">
        <img :src="moduleTypologies" alt="Module Typologies" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Catalog</p>
        <h3 class="section-heading">Module typologies</h3>
        <p class="body-text">
          A catalog of specialized units designed for different functions within the lunar habitat, each optimized for
          specific spatial and functional requirements.
        </p>
      </div>
    </section>

    <!-- Room Organization -->
    <section class="content-section">
      <h3 class="subsection-heading">Room organization</h3>
      <p class="body-text">
        Spatial diagrams showing how different functional spaces are organized and connected within the modular system.
      </p>
      <figure class="image-figure">
        <img :src="roomsDiagram" alt="Rooms Diagram" class="content-image" />
      </figure>
    </section>

    <!-- Interactive System -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Interactive System</p>
        <h2 class="section-heading">Real-time configuration and visualization</h2>
        <p class="body-text">
          The 3D environment lets users explore habitat layouts as configurable systems. Module choices, connections, and spatial relationships can be tested visually, making the automation logic easier to understand than through diagrams alone.
        </p>
      </div>
      <div class="split-media media-container-purple">
        <video :src="viewer3D" autoplay muted loop playsinline class="split-video">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <!-- Video Demos -->
    <section class="content-section-wide">
      <div class="video-grid">
        <figure class="video-figure">
          <!-- <figcaption class="video-caption">Configuration Demo</figcaption> -->
          <video :src="demo" autoplay muted loop playsinline class="content-video">
            Your browser does not support the video tag.
          </video>
        </figure>

        <!-- <figure class="video-figure">

          <video :src="solutions" autoplay muted loop playsinline class="content-video">
            Your browser does not support the video tag.
          </video>
        </figure> -->
      </div>
    </section>

    <!-- Design Explorations - Split -->
    <section class="split-section split-section-right">
      <!-- <div class="split-media media-container">
        <img :src="picture2" alt="Design Exploration" class="split-image" />
      </div> -->
      <div class="split-content">
        <p class="section-label">Exploration</p>
        <h3 class="section-heading">Design explorations</h3>
        <p class="body-text">
          Multiple design iterations exploring different spatial configurations and optimization strategies for the
          lunar habitat system.
        </p>
      </div>
    </section>
    <!-- Video Demos -->
    <section class="content-section-wide">
      <div class="video-grid">

        <figure class="video-figure">

          <video :src="solutions" autoplay muted loop playsinline class="content-video">
            Your browser does not support the video tag.
          </video>
        </figure>
      </div>
    </section>
    <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">My Role</p>
      <h2 class="section-heading">Design system architecture & 3D interface</h2>
      <p class="body-text">
        Within the team, I led the product design for the configurator interface, designed the module catalog system,
        and developed the interactive 3D viewer. I collaborated with algorithm engineers to connect the interface to the optimization and spatial analysis logic behind the concept.
      </p>
    </section>

    <section class="content-section">
      <p class="section-label">Impact</p>
      <h2 class="section-heading">Bridging design automation and extreme environments</h2>
      <p class="body-text">
        The project helped communicate design automation methods through a vivid scenario. It showed how catalogs, rules, optimization, and 3D interaction can work together as a product experience, even when the context is hypothetical.
      </p>
    </section>

    <case-study-footer currentRoute="/products/lunar-app" />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "MoonPixelApp",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  setup() {
    useHead({
      title: "Moon Habitat Configurator — Eleni Chasioti",
      meta: [
        { name: "description", content: "Case study: A professional proof of concept applying design automation methods to a hypothetical lunar habitat configurator." },
        { property: "og:title", content: "Moon Habitat Configurator — Eleni Chasioti" },
        { property: "og:description", content: "A conference proof of concept showing how catalogs, rules, optimization, and 3D interaction can support design automation." },
      ],
    });
  },
  props: {},
  data() {
    return {
      hero: require("@/images/moonpixel/hero.webp"),
      configuratorDiagram: require("@/images/moonpixel/ConfiguratorDiagram.webp"),
      moduleTypologies: require("@/images/moonpixel/ModuleTypologies.webp"),
      roomsDiagram: require("@/images/moonpixel/RoomsDiagram.webp"),
      viewer3D: require("@/images/moonpixel/3DViewerVideo.mp4"),
      demo: require("@/images/moonpixel/demoVideo.mp4"),
      solutions: require("@/images/moonpixel/SolutionsVideo.mp4"),
      picture1: require("@/images/moonpixel/Picture1.webp"),
      picture2: require("@/images/moonpixel/Picture2.webp"),
      picture3: require("@/images/moonpixel/Picture3.webp"),
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
  padding-bottom: var(--space-10);
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
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 1;
  letter-spacing: 0;
  color: var(--color-text);
  margin: 0;
  white-space: normal;
  margin-bottom: -0.08em;
}

/* ===== HERO ===== */
.case-hero {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto var(--space-8);
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
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-8);
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
  font-size: clamp(1.35rem, 2.4vw, 2rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 1.32;
  color: var(--color-text);
  letter-spacing: 0;
  margin: 0;
}

/* ===== CONTENT SECTIONS ===== */
.content-section {
  max-width: 860px;
  margin: 0 auto var(--space-10);
  padding: 0 var(--space-8);
}

.content-section-wide {
  max-width: 1280px;
  margin: 0 auto var(--space-10);
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
  font-size: clamp(1.55rem, 2.4vw, 2rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  letter-spacing: 0;
  line-height: 1.22;
  margin: 0 0 var(--space-4);
  color: var(--color-text);
}

.subsection-heading {
  font-family: var(--font-serif);
  font-size: clamp(1.45rem, 2.2vw, 1.8rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  letter-spacing: 0;
  line-height: 1.22;
  margin: var(--space-6) 0 var(--space-3);
  color: var(--color-text);
}

.body-text {
  font-size: 1rem;
  line-height: 1.68;
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4);
}

/* Simple List */
.simple-list {
  list-style: none;
  padding: 0;
  margin: var(--space-5) 0;
}

.simple-list li {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin-bottom: 0.625rem;
  padding-left: 0;
  border: 0;
}

.simple-list li:last-child {
  border: 0;
}

.case-study .simple-list li,
.case-study .simple-list li:last-child {
  border-top: 0;
  border-bottom: 0;
}

.simple-list li strong {
  color: var(--color-text);
  font-weight: var(--weight-semibold);
}

/* ===== IMAGES ===== */
.image-figure {
  margin: var(--space-6) 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== VIDEOS ===== */
.video-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  margin: var(--space-6) 0;
  width: 100%;
}

.video-figure {
  margin: 0;
  width: 100%;
}

.video-caption {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
  font-weight: var(--weight-medium);
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
  gap: var(--space-8);
  max-width: 1200px;
  margin: var(--space-10) auto;
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

.media-container-purple {
  background: rgba(240, 232, 255, 0.45);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container-yellow {
  background: rgba(255, 249, 224, 0.5);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container {
  background: var(--color-accent-soft);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.split-image,
.split-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

.split-video {
  background: #000;
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
    margin-bottom: var(--space-10);
  }

  .info-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .info-text {
    font-size: 1.375rem;
  }

  .content-section,
  .content-section-wide {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-10);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .subsection-heading {
    font-size: 1.125rem;
  }

  .split-section {
    padding: 0 var(--space-5);
    margin: var(--space-10) auto;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .case-title {
    font-size: clamp(2rem, 11vw, 3.5rem);
    white-space: normal;
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }
}
</style>
