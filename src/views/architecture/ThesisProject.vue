<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Cricket Plugin" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Master's Thesis 2020</p>
      <h1 class="project-title">Cricket Plugin</h1>
      <h2 class="project-subtitle">Gameplay with Encoded Architectural Tilesets</h2>
      <p class="project-intro">
        A computational framework for building massing design using the Wave Function Collapse algorithm.
      </p>
      <div class="project-meta">
        <span class="meta-item">Developer</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">4 Months (2020)</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">MSc Architectural Computation, UCL</span>
      </div>
      <div class="project-links">
        <a href="https://ucl.academia.edu/EleniChasioti" target="_blank" class="paper-link">
          <span>Read Full Paper</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>

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
      <p class="section-label">Impact</p>
      <h2 class="section-heading">Future directions</h2>
      <p class="body-text">
        This research demonstrated procedural generation's potential to simplify tasks and offer real-time feedback, empowering creative exploration while maintaining constraint control. Machine learning integration could make the system adaptive, learning from designs to optimize for sustainability and aesthetics.
      </p>
      <p class="body-text">
        Extension to irregular grids would expand applicability, while refining the interface for accessibility across technical expertise levels could make this a valuable tool in architectural design's future.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "ThesisProject",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/thesis/hero.jpg"),
      grasshopper: require("@/images/cricket/apendix3.jpg"),
      segmentation: require("@/images/cricket/segmentation.jpg"),
      models1: require("@/images/cricket/modelspercentages.jpg"),
      models2: require("@/images/cricket/modelsrendered.jpg"),
      wfc: require("@/images/cricket/wfctiles.jpg"),
      wfcdiagram: require("@/images/cricket/diagram.jpg"),
    };
  },
};
</script>

<style scoped>
/* Minimal Editorial Design */

.case-study {
  background: #fff;
  color: #000;
}

/* Hero */
.hero-section {
  width: 100%;
  margin-bottom: 4rem;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Project Header */
.project-header {
  max-width: 760px;
  margin: 0 auto 5rem;
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
  margin: 0 0 0.75rem;
  color: #000;
}

.project-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #555;
  margin: 0 0 1.5rem;
  line-height: 1.3;
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
  margin-bottom: 2rem;
}

.meta-divider {
  color: #ccc;
}

.project-links {
  margin-top: 2rem;
}

.paper-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #1a1a1a;
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.paper-link:hover {
  background: #333;
  transform: translateY(-2px);
}

/* Content Sections */
.content-section {
  max-width: 760px;
  margin: 0 auto 5rem;
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
  margin: 0 0 1.5rem;
  color: #000;
  font-family: Georgia, 'Times New Roman', serif;
}

.body-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0 0 1.5rem;
}

/* Images */
.image-figure {
  margin: 3rem 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

/* Split Sections */
.split-section {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 5rem auto;
  padding: 4rem 2rem;
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
  background: #E8F0FF;
  padding: 3rem;
  border-radius: 24px;
}

.media-container-green {
  background: #DFF5D4;
  padding: 3rem;
  border-radius: 24px;
}

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Responsive */
@media (max-width: 768px) {
  .project-header,
  .content-section {
    padding: 0 1.5rem;
  }
  
  .split-section {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }
  
  .split-content,
  .split-media {
    max-width: 100%;
  }
}
</style>
