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
          <span class="meta-value">Product Design &amp; System Architecture</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Stack</span>
          <span class="meta-value">Design Automation</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A comprehensive web-based platform for a major international client that systematizes the design of industrial facilities through modular components, complex network systems, and intelligent spatial rules.
        </p>
      </div>
    </div>

    <!-- Problem Space -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Systematizing complex industrial design</h2>
      <p class="body-text">
        Designing industrial facilities involves coordinating modular building units, intricate utility networks, and complex spatial relationships. Each facility requires careful consideration of connections between units, compliance with spatial constraints, and validation of technical requirements.
      </p>
      <p class="body-text">
        The client needed a system that could catalog modular components, enforce logical and spatial placement rules, and represent the complex networks required to connect industrial units for fully functional facilities.
      </p>
    </section>

    <!-- System Diagram Video -->
    <section class="content-section">
      <p class="section-label">System Architecture</p>
      <h2 class="section-heading">Understanding the system</h2>
      <p class="body-text">
        The diagram illustrates the comprehensive architecture of the configurator system, showing how modular components, network connections, and validation rules work together to create a cohesive facility design platform.
      </p>
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
        <h2 class="section-heading">Intelligent facility configuration</h2>
        <p class="body-text">
          A sophisticated web platform that combines a modular component catalog, network visualization, rule-based validation, and spatial planning to enable systematic design of industrial facilities.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="selectFacility" alt="Facility Selection Interface" class="split-image" />
      </div>
    </section>

    <!-- Key Features -->
    <section class="content-section">
      <p class="section-label">System Capabilities</p>
      <h2 class="section-heading">Modular design automation</h2>
      <ul class="simple-list">
        <li><strong>Modular Component Catalog</strong>  Comprehensive library of industrial units with technical specifications and connection requirements</li>
        <li><strong>Network System Representation</strong>  Visual mapping of utility networks, pathways, and connections between facility components</li>
        <li><strong>Rule-Based Validation</strong>  Logical and spatial rules ensure proper unit placement and valid facility configurations</li>
        <li><strong>Node-Based Interface</strong>  Intuitive node system for defining relationships and connections between components</li>
        <li><strong>Spatial Constraint Checking</strong>  Automated validation of spatial requirements and clearances</li>
        <li><strong>Component Properties</strong>  Detailed view of technical specifications, dimensions, and connection points for each unit</li>
      </ul>
    </section>

    <!-- Wireframes Section -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Design Process</p>
        <h2 class="section-heading">From wireframes to implementation</h2>
        <p class="body-text">
          The design process began with comprehensive wireframing to map out the complex interactions between facility selection, component cataloging, network visualization, and rule validation.
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
          Each modular component includes detailed technical specifications, dimensions, connection points, and compatibility information for systematic facility design.
        </p>
      </div>
    </section>

    <!-- Node Interface -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Network System</p>
        <h2 class="section-heading">Node-based connectivity</h2>
        <p class="body-text">
          The node-based interface allows users to define complex relationships and connections between facility components, representing the intricate networks required for industrial operations.
        </p>
      </div>
      <div class="split-media media-container-green">
        <img :src="nodeUI" alt="Node Interface" class="split-image" />
      </div>
    </section>

    <!-- Add Model -->
    <section class="content-section">
      <p class="section-label">Component Selection</p>
      <h2 class="section-heading">Modular catalog integration</h2>
      <p class="body-text">
        The modular catalog provides a systematic approach to selecting and adding industrial units to the facility design, with filtering and search capabilities for efficient component discovery.
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
          The system continuously validates configurations against logical and spatial rules, ensuring all placements meet technical requirements and facility standards.
        </p>
      </div>
    </section>

    <!-- Model Properties Overview -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Component Management</p>
        <h2 class="section-heading">Property visualization</h2>
        <p class="body-text">
          Quick access to component properties enables efficient review and modification of facility elements, maintaining design integrity throughout the configuration process.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="modelProperties" alt="Model Properties" class="split-image" />
      </div>
    </section>

    <!-- Catalog Comparison -->
    <section class="content-section">
      <p class="section-label">Catalog System</p>
      <h2 class="section-heading">Component comparison and selection</h2>
      <p class="body-text">
        The catalog interface enables side-by-side comparison of modular components, facilitating informed decisions based on technical specifications, spatial requirements, and compatibility.
      </p>
      <figure class="image-figure">
        <img :src="modelCatalogCompare" alt="Catalog Comparison" class="content-image" />
      </figure>
    </section>

    <!-- Catalog Detailed View -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-purple">
        <img :src="modelCatalogDetailed" alt="Detailed Catalog View" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Detail View</p>
        <h3 class="section-heading">Comprehensive component information</h3>
        <p class="body-text">
          Detailed catalog views provide complete technical documentation, 3D visualizations, and connection specifications for each modular unit.
        </p>
      </div>
    </section>

        <!-- My Role -->
    <section class="content-section">
      <p class="section-label">My Role</p>
      <h2 class="section-heading">Lead Product Designer</h2>
      <p class="body-text">
        I owned the end-to-end UX process: user research with engineering teams, information architecture for the modular catalog, wireframing, high-fidelity UI design, and design system documentation. I worked closely with front-end developers on implementation and iterated based on user testing sessions with facility engineers.
      </p>
    </section>

    <!-- Impact -->
    <section class="content-section">
      <p class="section-label">Impact</p>
      <h2 class="section-heading">Systematizing industrial facility design</h2>
      <p class="body-text">
        The configurator transforms the industrial facility design process from a manual, time-intensive workflow into a systematic, rule-based approach. By cataloging modular components and encoding design expertise into spatial and logical rules, the system ensures consistency and validity across all facility configurations.
      </p>
      <p class="body-text">
        The visual representation of complex networks and connections between industrial units provides unprecedented clarity in facility planning, enabling teams to identify potential issues early and optimize designs before construction begins.
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
        { name: "description", content: "Case study: A web-based configurator for industrial facility design with modular components, network systems, and rule-based validation." },
        { property: "og:title", content: "Industrial Facility Configurator — Eleni Chasioti" },
        { property: "og:description", content: "Systematizing industrial facility design through modular components and intelligent spatial rules." },
      ],
    });
  },
  data() {
    return {
      hero: require("@/images/industrial/hero.png"),
      diagramVideo: require("@/images/industrial/00Diagram.mp4"),
      wireframes: [
        { url: require("@/images/industrial/wireframe01.png") },
        { url: require("@/images/industrial/wireframe02.png") },
        { url: require("@/images/industrial/wireframe03.png") },
        { url: require("@/images/industrial/wireframe04.png") },
        { url: require("@/images/industrial/wireframe05.png") },
      ],
      selectFacility: require("@/images/industrial/01SelectFacility.png"),
      modelPropertiesDetailed: require("@/images/industrial/02ModelPropertiesDetailed.png"),
      nodeUI: require("@/images/industrial/03NodeUI.png"),
      addModel: require("@/images/industrial/04AddModel.png"),
      checkRules: require("@/images/industrial/05CheckRules.png"),
      modelProperties: require("@/images/industrial/06ModelProperties.png"),
      modelCatalogCompare: require("@/images/industrial/07ModelCatalogCompare.png"),
      modelCatalogDetailed: require("@/images/industrial/08ModelCatalogDetailed.png"),
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

.content-section-wide {
  max-width: 1200px;
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

.simple-list li strong {
  color: var(--color-text);
  font-weight: var(--weight-semibold);
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

.content-video {
  width: 100%;
  height: auto;
  display: block;
  background: #000;
  border-radius: var(--radius-sm);
}

/* Carousel Wrapper */
.carousel-wrapper {
  overflow: hidden;
  aspect-ratio: 16 / 10;
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

  .content-section,
  .content-section-wide {
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
