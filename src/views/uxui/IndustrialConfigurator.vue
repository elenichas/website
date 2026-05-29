<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Industrial Configurator</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Industrial Facility Configurator" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Professional Project</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">UX/UI Designer, Front End Developer</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Stack</span>
          <span class="meta-value">Power Plant Design Automation</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A consultancy project for a major engineering client, turning power plant design knowledge into a structured unit catalog, configurator app, automated layout logic, and validation workflow.
        </p>
      </div>
    </div>

    <!-- Problem Space -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Turning expert workflows into a structured design system</h2>
      <p class="body-text">
        Power plant design relies on specialist knowledge spread across unit specifications, engineering constraints, spatial rules, and network dependencies. The client needed a clearer way to structure that knowledge so teams could configure facilities more consistently and understand the consequences of each design decision.
      </p>
      <p class="body-text">
        The challenge was not only interface design. It was helping the team translate a complex consultancy workflow into consistent data, reusable components, automated checks, and a tool that could also support training and communication.
      </p>
    </section>

    <!-- System Diagram Video -->
    <section class="content-section-wide industrial-media-story industrial-video-only">
      <figure class="image-figure">
        <video :src="diagramVideo" autoplay muted loop playsinline class="content-video">
          Your browser does not support the video tag.
        </video>
      </figure>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
      <h2 class="section-heading">A configurator for units, rules, and design validation</h2>
      <p class="body-text">
          The platform combines a structured unit catalog, configuration interface, network visualization, rule-based validation, and alert system. Users can select plant units, review properties and connection requirements, test layout logic, and understand where a design needs attention.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <video :src="diagramVideo" autoplay muted loop playsinline class="split-image">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <!-- Key Features -->
    <section class="content-section">
      <p class="section-label">System Capabilities</p>
      <h2 class="section-heading">Modular design automation</h2>
      <ul class="simple-list">
        <li><strong>Unit Catalog</strong>  A structured library of power plant units with technical properties, dimensions, and connection requirements</li>
        <li><strong>Network Representation</strong>  Visual mapping of utility networks, pathways, and dependencies between facility components</li>
        <li><strong>Rule-Based Validation</strong>  Automated checks that flag invalid placements, missing connections, and spatial conflicts</li>
        <li><strong>Node-Based Interface</strong>  A relationship model for defining how components connect and depend on one another</li>
        <li><strong>Training Tool</strong>  A clearer way for teams to understand facility logic, unit behavior, and design constraints</li>
        <li><strong>Consistent Data Structure</strong>  Shared data patterns that make components easier to compare, configure, and reuse</li>
      </ul>
    </section>

    <!-- Wireframes Section -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Design Process</p>
        <h2 class="section-heading">From wireframes to implementation</h2>
        <p class="body-text">
          The design process began by mapping the existing engineering workflow into product flows: selecting a facility type, choosing units from a catalog, reviewing properties, defining network relationships, and surfacing validation alerts when rules were broken.
        </p>
      </div>
      <div class="split-media media-container-purple">
        <div class="carousel-wrapper">
                    <v-carousel cycle hide-delimiters interval="6000" show-arrows="hover" height="400" class="wireframe-carousel">
            <v-carousel-item
              v-for="(wireframe, index) in wireframes"
              :key="index"
            >
              <img :src="wireframe.url" :alt="'Wireframe ' + (index + 1)" class="carousel-img" />
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </section>

    <!-- Model Properties -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-purple">
        <img :src="modelPropertiesDetailed" alt="Detailed Model Properties" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Component Details</p>
        <h3 class="section-heading">Comprehensive specifications</h3>
        <p class="body-text">
          Each unit includes the information needed to make configuration decisions: dimensions, technical properties, connection points, compatibility rules, and requirements that affect downstream validation.
        </p>
      </div>
    </section>

    <!-- Node Interface -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Network System</p>
        <h2 class="section-heading">Node-based connectivity</h2>
        <p class="body-text">
          The node-based interface makes hidden dependencies visible. Users can see how facility components relate to one another, where connections are required, and how a change in one unit affects the wider plant system.
        </p>
      </div>
      <div class="split-media media-container-green">
        <img :src="nodeUI" alt="Node Interface" class="split-image" />
      </div>
    </section>

    <!-- Add Model -->
    <section class="content-section-wide industrial-media-story">
      <p class="section-label">Component Selection</p>
      <h2 class="section-heading">Modular catalog integration</h2>
      <p class="body-text">
        The catalog gives teams a consistent way to select and add industrial units, compare component properties, and move from scattered technical references toward a shared design language.
      </p>
      <figure class="image-figure">
        <img :src="addModel" alt="Add Model Interface" class="content-image" />
      </figure>
    </section>

    <!-- Rule Validation -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-yellow">
        <img :src="checkRules" alt="Rule Validation" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Validation</p>
        <h3 class="section-heading">Intelligent rule checking</h3>
        <p class="body-text">
          The system checks configurations against logical and spatial rules and raises alerts when a design breaks technical requirements, helping teams catch issues earlier in the process.
        </p>
      </div>
    </section>

    <!-- Model Properties Overview -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Component Management</p>
        <h2 class="section-heading">Property visualization</h2>
        <p class="body-text">
          Quick access to unit properties helps users understand what they are placing, why it matters, and whether the configuration remains valid as the design changes.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="modelProperties" alt="Model Properties" class="split-image" />
      </div>
    </section>

    <!-- Catalog Comparison -->
    <section class="content-section-wide catalog-system-section">
      <p class="section-label">Catalog System</p>
      <h2 class="section-heading">Component comparison and selection</h2>
      <p class="body-text">
        The catalog interface supports side-by-side comparison so teams can evaluate units by technical specifications, spatial requirements, and compatibility instead of relying on disconnected documents.
      </p>
      <div class="catalog-image-grid">
        <figure class="catalog-figure">
          <img :src="modelCatalogCompare" alt="Catalog Comparison" class="content-image" />
        </figure>
        <figure class="catalog-figure">
          <img :src="modelCatalogDetailed" alt="Detailed Catalog View" class="content-image" />
        </figure>
      </div>
    </section>

        <!-- My Role -->
    <section class="content-section">
      <p class="section-label">My Role</p>
      <h2 class="section-heading">Lead Product Designer</h2>
      <p class="body-text">
        I led the product design work within the consultancy team: workflow mapping, information architecture for the unit catalog, wireframing, high-fidelity UI design, and design system documentation. I worked closely with engineers and developers to translate domain logic into usable screens and validation patterns.
      </p>
    </section>

    <!-- Impact -->
    <section class="content-section">
      <p class="section-label">Impact</p>
      <h2 class="section-heading">Systematizing industrial facility design</h2>
      <p class="body-text">
        The configurator helped move the design process from manual interpretation toward structured automation. By cataloging units, standardizing data, and encoding validation rules, the tool created a more consistent foundation for facility configuration.
      </p>
      <p class="body-text">
        It also acted as a training and communication tool: teams could see how units connect, where rules apply, and why alerts were triggered, making complex plant logic easier to review and explain.
      </p>
    </section>

    <case-study-footer currentRoute="/products/industrial-configurator" />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "IndustrialConfigurator",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  setup() {
    useHead({
      title: "Industrial Facility Configurator — Eleni Chasioti",
      meta: [
        { name: "description", content: "Case study: A consultancy product for power plant design automation, with a unit catalog, configurator, data structure, and validation alerts." },
        { property: "og:title", content: "Industrial Facility Configurator — Eleni Chasioti" },
        { property: "og:description", content: "Systematizing power plant design through structured unit data, configuration workflows, and rule-based validation." },
      ],
    });
  },
  data() {
    return {
      hero: require("@/images/industrial/hero.webp"),
      diagramVideo: require("@/images/industrial/00Diagram.mp4"),
      wireframes: [
        { url: require("@/images/industrial/wireframe01.webp") },
        { url: require("@/images/industrial/wireframe02.webp") },
        { url: require("@/images/industrial/wireframe03.webp") },
        { url: require("@/images/industrial/wireframe04.webp") },
        { url: require("@/images/industrial/wireframe05.webp") },
      ],
      selectFacility: require("@/images/industrial/01SelectFacility.webp"),
      modelPropertiesDetailed: require("@/images/industrial/02ModelPropertiesDetailed.webp"),
      nodeUI: require("@/images/industrial/03NodeUI.webp"),
      addModel: require("@/images/industrial/04AddModel.webp"),
      checkRules: require("@/images/industrial/05CheckRules.webp"),
      modelProperties: require("@/images/industrial/06ModelProperties.webp"),
      modelCatalogCompare: require("@/images/industrial/07ModelCatalogCompare.webp"),
      modelCatalogDetailed: require("@/images/industrial/08ModelCatalogDetailed.webp"),
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

.content-video {
  width: 100%;
  height: auto;
  display: block;
  background: #000;
  border-radius: var(--radius-sm);
}

.industrial-media-story {
  display: grid;
  grid-template-columns: minmax(260px, 0.34fr) minmax(0, 0.66fr);
  gap: var(--space-8);
  align-items: center;
}

.industrial-media-story .image-figure {
  grid-column: 2;
  grid-row: 1 / span 3;
  margin: 0;
}

.industrial-media-story .section-label,
.industrial-media-story .section-heading,
.industrial-media-story .body-text {
  grid-column: 1;
}

.industrial-media-story .section-label {
  justify-self: start;
  align-self: end;
}

.industrial-video-only {
  display: block;
}

.industrial-video-only .image-figure {
  width: 100%;
  aspect-ratio: auto;
  margin: 0;
}

.industrial-video-only .content-video {
  width: 100%;
  height: auto;
}

.catalog-system-section {
  max-width: 1280px;
}

.catalog-system-section .section-label,
.catalog-system-section .section-heading,
.catalog-system-section .body-text {
  max-width: 760px;
}

.catalog-image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
  margin-top: var(--space-6);
}

.catalog-figure {
  aspect-ratio: 16 / 10;
  margin: 0;
  overflow: hidden;
}

.catalog-figure .content-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Carousel Wrapper */
.carousel-wrapper {
  overflow: hidden;
  aspect-ratio: 16 / 10;
  width: 100%;
}

.carousel-wrapper :deep(.v-carousel) {
  border-radius: var(--radius-sm);
}

.wireframe-carousel {
  aspect-ratio: 16 / 10;
}

.wireframe-carousel :deep(.v-carousel__item) {
  aspect-ratio: 16 / 10;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
  max-width: 680px;
  width: 100%;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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

.split-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

.industrial-media-story .image-figure {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.industrial-media-story .content-image,
.industrial-media-story .content-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
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

  .content-section,
  .content-section-wide {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-10);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .split-section {
    padding: 0 var(--space-5);
    margin: var(--space-10) auto;
  }

  .industrial-media-story {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  .industrial-media-story .image-figure,
  .industrial-media-story .section-label,
  .industrial-media-story .section-heading,
  .industrial-media-story .body-text {
    grid-column: 1;
  }

  .industrial-media-story .image-figure {
    grid-row: auto;
  }

  .catalog-image-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  .catalog-figure {
    width: 100%;
    aspect-ratio: 16 / 10;
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
