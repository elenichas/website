<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Moon Pixel App Hero" />
      <div class="hero-overlay">
        <span class="project-tag">System Design</span>
      </div>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <h1 class="project-title">Moon Habitat Configurator</h1>
      <p class="project-subtitle">
        A parametric design system for configuring modular lunar habitats through optimization algorithms and spatial analysis
      </p>
      <div class="project-meta">
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-value">Design & Development</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Type</span>
          <span class="meta-value">Proof of Concept</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Focus</span>
          <span class="meta-value">3D Environment & Systems</span>
        </div>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="section-grid">
        <div class="overview-card">
          <h3>🎯 Concept</h3>
          <p>
            Exploring how system design and configuration for design automation can be applied to extreme environments like the lunar surface, combining research and modular thinking principles.
          </p>
        </div>
        <div class="overview-card">
          <h3>💡 Approach</h3>
          <p>
            Systematic terrain analysis, modular unit cataloging, network-based connections, and optimization algorithms to adapt designs to spatial constraints of the moon.
          </p>
        </div>
        <div class="overview-card">
          <h3>🚀 Outcome</h3>
          <p>
            A functional proof-of-concept demonstrating parametric design automation in an experimental context, showcasing the potential of computational design in space architecture.
          </p>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="features-section">
      <h2 class="section-title">System Components</h2>
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon"><Moon :size="32" /></span>
          <h4>Terrain Analysis</h4>
          <p>Systematic analysis of solar terrain conditions to inform site selection and orientation</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon"><Box :size="32" /></span>
          <h4>Module Catalog</h4>
          <p>Library of modular units with different functions and spatial configurations</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon"><Network :size="32" /></span>
          <h4>Network System</h4>
          <p>Connection framework linking modules through pathways and infrastructure</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon"><Zap :size="32" /></span>
          <h4>Optimization Engine</h4>
          <p>Algorithms to optimize layouts and adapt designs to spatial constraints</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon"><Layers :size="32" /></span>
          <h4>3D Visualization</h4>
          <p>Interactive 3D environment for exploring and configuring habitat designs</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon"><Settings :size="32" /></span>
          <h4>Parametric Control</h4>
          <p>Design automation through configurable parameters and rules</p>
        </div>
      </div>
    </section>

    <!-- System Architecture -->
    <section class="wireframes-section">
      <h2 class="section-title">System Architecture</h2>
      
      <div class="content-block">
        <h3>Configurator Workflow</h3>
        <p>The system follows a systematic approach from terrain analysis to final configuration, allowing for iterative design exploration and optimization.</p>
        <div class="project-image-container">
          <img :src="configuratorDiagram" alt="Configurator System Diagram" class="project-image" />
        </div>
      </div>

      <div class="content-block">
        <h3>Module Typologies</h3>
        <p>A catalog of specialized units designed for different functions within the lunar habitat, each optimized for specific spatial and functional requirements.</p>
        <div class="project-image-container">
          <img :src="moduleTypologies" alt="Module Typologies" class="project-image" />
        </div>
      </div>

      <div class="content-block">
        <h3>Room Organization</h3>
        <p>Spatial diagrams showing how different functional spaces are organized and connected within the modular system.</p>
        <div class="project-image-container">
          <img :src="roomsDiagram" alt="Rooms Diagram" class="project-image" />
        </div>
      </div>
    </section>

    <!-- Interactive Demonstrations -->
    <section class="design-section">
      <h2 class="section-title">Interactive System</h2>
      <div class="design-content">
        <div class="design-story">
          <p>
            The 3D environment allows for real-time configuration and visualization of lunar habitat layouts. Users can explore different module arrangements, optimize connections, and analyze spatial relationships in an interactive setting.
          </p>
        </div>

        <div class="video-grid">
          <div class="video-container">
            <h4>3D Viewer & Navigation</h4>
            <video :src="viewer3D" controls class="demo-video">
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="video-container">
            <h4>Configuration Demo</h4>
            <video :src="demo" controls class="demo-video">
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="video-container">
            <h4>Optimization Process</h4>
            <video :src="optimization" controls class="demo-video">
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="video-container">
            <h4>Solution Variations</h4>
            <video :src="solutions" controls class="demo-video">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="additional-images">
          <h3>Design Explorations</h3>
          <div class="image-grid">
            <div class="grid-image-container">
              <img :src="picture1" alt="Design Exploration 1" class="grid-image" />
            </div>
            <div class="grid-image-container">
              <img :src="picture2" alt="Design Exploration 2" class="grid-image" />
            </div>
            <div class="grid-image-container">
              <img :src="picture3" alt="Design Exploration 3" class="grid-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learnings & Reflection -->
    <section class="reflection-section">
      <h2 class="section-title">Key Insights & Impact</h2>
      <div class="learnings-grid">
        <div class="learning-card">
          <h4>Design Automation at Scale</h4>
          <p>
            Demonstrated how parametric design systems can handle complex spatial problems in extreme environments, making design automation applicable beyond traditional contexts.
          </p>
        </div>
        <div class="learning-card">
          <h4>Modular System Thinking</h4>
          <p>
            Developed a comprehensive understanding of modular design principles, from unit typology to network connectivity and optimization strategies.
          </p>
        </div>
        <div class="learning-card">
          <h4>3D Environment Development</h4>
          <p>
            Contributed to creating an interactive 3D visualization system that makes complex computational processes accessible and explorable.
          </p>
        </div>
        <div class="learning-card">
          <h4>Interdisciplinary Collaboration</h4>
          <p>
            Bridged design and development roles in a group setting, integrating spatial design thinking with computational implementation.
          </p>
        </div>
      </div>

      <div class="next-steps">
        <h3>Project Context</h3>
        <ul>
          <li>Proof-of-concept from professional experience</li>
          <li>Group project spanning design and development disciplines</li>
          <li>Focus area: 3D environment and interactive system design</li>
          <li>Demonstrates research-driven approach to computational design</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import { Moon, Box, Network, Zap, Layers, Settings } from 'lucide-vue-next';

export default {
  name: "MoonPixelApp",
  components: {
    AppNavbar,
    Moon,
    Box,
    Network,
    Zap,
    Layers,
    Settings,
  },
  props: {},
  data() {
    return {
      hero: require("@/images/moonpixel/hero.jpg"),
      configuratorDiagram: require("@/images/moonpixel/ConfiguratorDiagram.jpg"),
      moduleTypologies: require("@/images/moonpixel/ModuleTypologies.jpg"),
      roomsDiagram: require("@/images/moonpixel/RoomsDiagram.jpg"),
      viewer3D: require("@/images/moonpixel/3DViewer.mp4"),
      demo: require("@/images/moonpixel/demo.mp4"),
      optimization: require("@/images/moonpixel/Optimization.mp4"),
      solutions: require("@/images/moonpixel/Solutions.mp4"),
      picture1: require("@/images/moonpixel/Picture1.png"),
      picture2: require("@/images/moonpixel/Picture2.png"),
      picture3: require("@/images/moonpixel/Picture3.png"),
    };
  },
};
</script>

<style src="@/styles/case-study-common.css"></style>
<style scoped>
/* MoonPixelApp - Custom Theme Colors */

/* Feature cards with border */
.feature-card {
  border: 2px solid #e0e0e0;
}

.feature-card:hover {
  border-color: #6C63FF;
}

/* Benefit icon - brand color */
.benefit-icon {
  color: #6C63FF;
}

/* Color circles with border for light colors */
.color-circle {
  border: 2px solid #e0e0e0;
}

/* Type display - brand color */
.type-display {
  color: #1a1a2e;
}

/* Learning card - brand color border */
.learning-card {
  border-left: 4px solid #6C63FF;
}

.learning-card:hover {
  border-left-color: #FF6584;
}

/* Next steps arrow - brand color */
.next-steps li::before {
  color: #6C63FF;
}

/* Wireframes section background */
.wireframes-section {
  background: #fafafa;
}

/* Lucide icon styling */
.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6C63FF;
}

.inline-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
}

/* Image placeholder */
.image-placeholder {
  background: #f5f5f5;
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 4rem 2rem;
  text-align: center;
  margin: 2rem 0;
}

.placeholder-text {
  color: #999;
  font-size: 1.1rem;
  margin: 0;
}

/* Content blocks for system architecture */
.content-block {
  margin-bottom: 3rem;
}

.content-block h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
}

.content-block p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-image-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Video Grid */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.video-container {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.video-container h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
  padding: 1rem;
  margin: 0;
  background: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
}

.demo-video {
  width: 100%;
  height: auto;
  display: block;
  background: #000;
}

/* Additional Images Section */
.additional-images {
  margin-top: 3rem;
}

.additional-images h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 1.5rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.grid-image-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-image-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.grid-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
  
  .image-grid {
    grid-template-columns: 1fr;
  }
  
  .content-block h3 {
    font-size: 1.25rem;
  }
}
</style>
