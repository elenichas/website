<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Moon Habitat Configurator" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Proof of Concept</p>
      <h1 class="project-title">Moon Habitat Configurator</h1>
      <p class="project-intro">
        A parametric design system for configuring modular lunar habitats through optimization algorithms and spatial analysis.
      </p>
      <div class="project-meta">
        <span class="meta-item">Design & Development</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Group Project</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">3D Environment & Systems</span>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Background</p>
        <h2 class="section-heading">Designing for extreme environments</h2>
        <p class="body-text">
          This project explores how system design and configuration for design automation can be applied to extreme environments like the lunar surface, combining research and modular thinking principles.
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
        The system combines terrain analysis, modular unit cataloging, network-based connections, and optimization algorithms to adapt designs to spatial constraints. Key elements include:
      </p>
      <ul class="simple-list">
        <li><strong>Terrain Analysis</strong>  Systematic analysis of solar terrain conditions to inform site selection and orientation</li>
        <li><strong>Module Catalog</strong>  Library of modular units with different functions and spatial configurations</li>
        <li><strong>Network System</strong>  Connection framework linking modules through pathways and infrastructure</li>
        <li><strong>Optimization Engine</strong>  Algorithms to optimize layouts and adapt designs to spatial constraints</li>
        <li><strong>3D Visualization</strong>  Interactive 3D environment for exploring and configuring habitat designs</li>
        <li><strong>Parametric Control</strong>  Design automation through configurable parameters and rules</li>
      </ul>
    </section>

    <!-- System Architecture -->
    <section class="content-section">
      <p class="section-label">System Architecture</p>
      <h2 class="section-heading">From terrain to habitat</h2>
      <p class="body-text">
        The system follows a systematic approach from terrain analysis to final configuration, allowing for iterative design exploration and optimization.
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
          A catalog of specialized units designed for different functions within the lunar habitat, each optimized for specific spatial and functional requirements.
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
          The 3D environment allows for real-time configuration and visualization of lunar habitat layouts. Users can explore different module arrangements, optimize connections, and analyze spatial relationships in an interactive setting.
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

        <figure class="video-figure">
          <!-- <figcaption class="video-caption">Solution Variations</figcaption> -->
          <video :src="solutions" autoplay muted loop playsinline class="content-video">
            Your browser does not support the video tag.
          </video>
        </figure>
      </div>
    </section>

    <!-- Design Explorations - Split -->
    <section class="split-section split-section-right">
      <div class="split-media media-container">
        <img :src="picture2" alt="Design Exploration" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Exploration</p>
        <h3 class="section-heading">Design explorations</h3>
        <p class="body-text">
          Multiple design iterations exploring different spatial configurations and optimization strategies for the lunar habitat system.
        </p>
      </div>
    </section>

    <section class="content-section">
      <figure class="image-figure">
        <img :src="picture3" alt="Design Exploration" class="content-image" />
      </figure>
    </section>

    <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">Impact</p>
      <h2 class="section-heading">Bridging design automation and extreme environments</h2>
      <p class="body-text">
        This proof-of-concept from professional experience demonstrated how parametric design systems can handle complex spatial problems in extreme environments, making design automation applicable beyond traditional contexts.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "MoonPixelApp",
  components: {
    AppNavbar,
  },
  props: {},
  data() {
    return {
      hero: require("@/images/moonpixel/hero.jpg"),
      configuratorDiagram: require("@/images/moonpixel/ConfiguratorDiagram.jpg"),
      moduleTypologies: require("@/images/moonpixel/ModuleTypologies.jpg"),
      roomsDiagram: require("@/images/moonpixel/RoomsDiagram.jpg"),
      viewer3D: require("@/images/moonpixel/3DViewerVideo.mp4"),
      demo: require("@/images/moonpixel/demoVideo.mp4"),
      optimization: require("@/images/moonpixel/OptimizationVideo.mp4"),
      solutions: require("@/images/moonpixel/SolutionsVideo.mp4"),
      picture1: require("@/images/moonpixel/Picture1.png"),
      picture2: require("@/images/moonpixel/Picture2.png"),
      picture3: require("@/images/moonpixel/Picture3.png"),
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

.hero-image {
  width: 100%;
  height: auto;
  display: block;
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

.subsection-heading {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 1.5rem 0 0.75rem;
  color: #000;
}

.large-text {
  font-size: 1.375rem;
  line-height: 1.6;
  color: #333;
  margin: 0 0 2rem;
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

/* Videos */
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.video-figure {
  margin: 0;
}

.video-caption {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.content-video {
  width: 100%;
  height: auto;
  display: block;
  background: #000;
  border-radius: 8px;
}

.content-video::-webkit-media-controls {
  opacity: 0;
  transition: opacity 0.3s;
}

.content-video:hover::-webkit-media-controls {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .project-header,
  .content-section,
  .content-section-wide {
    padding: 0 1.5rem;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .section-heading {
    font-size: 1.5rem;
  }
  
  .subsection-heading {
    font-size: 1.25rem;
  }
  
  .large-text {
    font-size: 1.125rem;
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
  
  .video-grid {
    grid-template-columns: 1fr;
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

.split-image,
.split-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.split-video {
  background: #000;
}

.split-video::-webkit-media-controls {
  opacity: 0;
  transition: opacity 0.3s;
}

.split-video:hover::-webkit-media-controls {
  opacity: 1;
}
</style>

