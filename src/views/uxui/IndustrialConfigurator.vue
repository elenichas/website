<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Industrial Facility Configurator" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Professional Project</p>
      <h1 class="project-title">Industrial Facility Configurator</h1>
      <p class="project-intro">
        A comprehensive web-based platform for a major international client that systematizes the design of industrial facilities through modular components, complex network systems, and intelligent spatial rules.
      </p>
      <div class="project-meta">
        <span class="meta-item">Product Design & System Architecture</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">International Client</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Design Automation</span>
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
              :src="wireframe.url"
              :alt="'Wireframe ' + (index + 1)"
            ></v-carousel-item>
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
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "IndustrialConfigurator",
  components: {
    AppNavbar,
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
/* Minimal Editorial Design */

.case-study {
  background: #fff;
  color: #000;
  padding-bottom: 3rem;
}

/* Hero */
.hero-section {
  width: 100%;
  margin-bottom: 2.5rem;
}

.hero-image,
.hero-video {
  width: 100%;
  height: auto;
  display: block;
}

.hero-video {
  background: #000;
}

/* Project Header */
.project-header {
  max-width: 760px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.project-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  margin: 0 0 0.75rem;
  font-weight: 500;
}

.project-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 1.5rem;
  color: #000;
}

.project-intro {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
  margin: 0 0 2rem;
}

.project-meta {
  font-size: 0.9375rem;
  color: #666;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.meta-divider {
  color: #ccc;
}

/* Content Sections */
.content-section {
  max-width: 760px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.content-section-wide {
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.section-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.section-heading {
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0 0 1rem;
  color: #000;
  font-family: Georgia, 'Times New Roman', serif;
}

.body-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0 0 1rem;
}

/* Simple List */
.simple-list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0;
}

.simple-list li {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 0.625rem;
  padding-left: 0;
}

.simple-list li strong {
  color: #000;
  font-weight: 600;
}

/* Images */
.image-figure {
  margin: 2rem 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.content-video {
  width: 100%;
  height: auto;
  display: block;
  background: #000;
  border-radius: 8px;
}

/* Wireframe Grid */
.wireframe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.wireframe-grid .image-figure {
  margin: 0;
}

.wireframe-grid .content-image {
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wireframe-grid .content-image:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Carousel Wrapper */
.carousel-wrapper {
  /* border-radius: 8px; */
  overflow: hidden;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); */
  aspect-ratio: 16 / 10;
  /* background: #f8f9fa; */
}

.carousel-wrapper :deep(.v-carousel) {
  border-radius: 8px;
}

.wireframe-carousel {
  aspect-ratio: 16 / 10;
}

.wireframe-carousel :deep(.v-carousel__item) {
  aspect-ratio: 16 / 10;
}

.wireframe-carousel :deep(.v-img) {
  object-fit: contain !important;
}

.wireframe-carousel :deep(.v-img__img) {
  object-fit: contain !important;
}

/* Responsive */
@media (max-width: 768px) {
  .project-header,
  .content-section,
  .content-section-wide {
    padding: 0 1.5rem;
  }
  
    .split-section {
    flex-direction: column;
    padding: 2rem 1.5rem;
    margin: 2rem auto;
  }
  
  .split-content,
  .split-media {
    max-width: 100%;
  }
  
  .wireframe-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Split Sections - Asymmetric Layout */
.split-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
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

/* Media Containers with Colored Backgrounds */
.media-container-blue {
  background: #E8F0FF;
  padding: 2rem;
  border-radius: 24px;
}

.media-container-green {
  background: #DFF5D4;
  padding: 2rem;
  border-radius: 24px;
}

.media-container-purple {
  background: #F0E8FF;
  padding: 2rem;
  border-radius: 24px;
}

.media-container-yellow {
  background: #FFF9E0;
  padding: 2rem;
  border-radius: 24px;
}

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
</style>
