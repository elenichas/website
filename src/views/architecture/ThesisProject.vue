<template>
  <app-navbar></app-navbar>
  <div class="architecture-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Cricket Plugin Hero" />
      <div class="hero-overlay">
        <span class="project-tag">Master's Thesis 2020</span>
      </div>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <h1 class="project-title">Cricket Plugin</h1>
      <h2 class="project-subtitle">
        Gameplay with Encoded Architectural Tilesets
      </h2>
      <p class="project-tagline">
        A Computational Framework for Building Massing Design using the Wave Function Collapse Algorithm
      </p>
      <div class="project-meta">
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-value">Developer</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Duration</span>
          <span class="meta-value">4 Months (2020)</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Institution</span>
          <span class="meta-value">MSc Architectural Computation, UCL</span>
        </div>
      </div>
      <div class="project-links">
        <a
          href="https://ucl.academia.edu/EleniChasioti"
          target="_blank"
          class="paper-link"
        >
          <span>Read Full Paper</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="section-grid">
        <div class="overview-card">
          <h3>🎮 Innovation</h3>
          <p>
            Adapting game design techniques and the Wave Function Collapse algorithm for architectural massing generation.
          </p>
        </div>
        <div class="overview-card">
          <h3>🏗️ Automation</h3>
          <p>
            Procedural content generation to automate repetitive design tasks while maintaining architectural constraints.
          </p>
        </div>
        <div class="overview-card">
          <h3>⚡ Efficiency</h3>
          <p>
            Real-time design variations enabling rapid exploration of complex building configurations.
          </p>
        </div>
      </div>
    </section>

    <!-- Overview Text -->
    <section class="research-section">
      <h2 class="section-title">Project Overview</h2>
      <div class="research-content">
        <p class="research-text">
          This project explores the intersection between architectural computation and procedural content generation, 
          drawing inspiration from game design techniques to revolutionize early-stage architectural massing. The thesis 
          presents a framework for automating the generation of complex building designs using architectural tilesets and 
          the Wave Function Collapse (WFC) algorithm, a powerful tool originally used in game development. Through a 
          user-friendly computational model, my work offers a practical solution for automating repetitive design tasks 
          while empowering architects to experiment with a variety of design outcomes. The system enables architects to 
          generate massing designs quickly and efficiently by encoding key architectural elements into tilesets, which can 
          be rearranged to create endless design variations, all while maintaining crucial architectural constraints.
        </p>
      </div>
    </section>

    <!-- WFC Algorithm Explanation with Diagrams -->
    <section class="algorithm-section">
      <h2 class="section-title">Wave Function Collapse Algorithm</h2>
      <div class="algorithm-content">
        <div class="algorithm-text">
          <div class="contributions-list">
            <div class="contribution-item">
              <div class="contribution-icon">📊</div>
              <div>
                <h4>Procedural Content Generation</h4>
                <p>Leveraging the WFC algorithm to automate the creation of building designs, significantly reducing design time and cost.</p>
              </div>
            </div>
            <div class="contribution-item">
              <div class="contribution-icon">🧩</div>
              <div>
                <h4>Custom Architectural Tilesets</h4>
                <p>Developed a system for encoding 3D architectural elements, allowing for highly flexible design outcomes suited to various project needs.</p>
              </div>
            </div>
            <div class="contribution-item">
              <div class="contribution-icon">⚙️</div>
              <div>
                <h4>Real-Time Design Feedback</h4>
                <p>The computational framework allows designers to see real-time variations, fostering a more dynamic, exploratory design process.</p>
              </div>
            </div>
          </div>
          <div class="algorithm-description">
            <p>
              The core of this work lies in the Wave Function Collapse algorithm, originally a pixel-based image generation 
              tool adapted for three-dimensional architectural design. The WFC uses a constraint-solving approach, ensuring 
              that all tiles are placed according to specific design rules and relationships. The adaptation from game design 
              into architecture enables massing designs to be generated automatically while maintaining architectural integrity.
            </p>
          </div>
        </div>
        <div class="algorithm-visuals">
          <img :src="wfcdiagram" alt="WFC Diagram" class="diagram-image" />
          <img :src="wfc" alt="WFC Tiles" class="diagram-image" />
        </div>
      </div>
    </section>

    <!-- Technical Implementation -->
    <section class="technical-section">
      <h2 class="section-title">Technical Implementation</h2>
      <div class="technical-content">
        <div class="implementation-grid">
          <div class="implementation-card">
            <h4>🎯 Tileset Encoding</h4>
            <p>Architectural elements encoded into digital tilesets with unique geometry-based identifiers.</p>
          </div>
          <div class="implementation-card">
            <h4>📐 Voxel Segmentation</h4>
            <p>Voxel grid breaks input models into individual 3D tiles for processing.</p>
          </div>
          <div class="implementation-card">
            <h4>⚡ Non-Backtracking</h4>
            <p>Algorithm restarts quickly on contradictions for improved computational speed.</p>
          </div>
          <div class="implementation-card">
            <h4>🕹️ User Parameters</h4>
            <p>Define constraints for density, facade direction, and gradient control.</p>
          </div>
          <div class="implementation-card">
            <h4>🔄 Flexible Output</h4>
            <p>Generate varied sizes while maintaining architectural constraints.</p>
          </div>
          <div class="implementation-card">
            <h4>🛠️ Platform</h4>
            <p>Rhinoceros 3D + Grasshopper with custom WFC components.</p>
          </div>
        </div>
        <div class="grasshopper-showcase">
          <img :src="grasshopper" alt="Grasshopper Implementation" class="showcase-image" />
        </div>
      </div>
    </section>

            <!-- Key Features -->
    <section class="features-section">
      <h2 class="section-title">Key Features & Results</h2>
      <div class="feature-showcase">
        <div class="feature-item">
          <h3>Tileset Segmentation</h3>
          <div class="feature-image-container">
            <img :src="segmentation" alt="Segmentation" class="feature-image" />
          </div>
          <p>Architectural elements divided into tiles for flexible manipulation and combination into new forms.</p>
        </div>
        <div class="feature-item">
          <h3>Automated Decision-Making</h3>
          <div class="feature-image-container">
            <img :src="models1" alt="Models" class="feature-image" />
          </div>
          <p>WFC algorithm ensures all generated designs adhere to predefined architectural constraints and rules.</p>
        </div>
        <div class="feature-item">
          <h3>Dynamic Design Options</h3>
          <div class="feature-image-container">
            <img :src="models2" alt="Renders" class="feature-image" />
          </div>
          <p>Explore configurations maximizing density, optimizing flow, or adhering to specific constraints.</p>
        </div>
      </div>
    </section>

    <!-- Reflection -->
    <section class="reflection-section">
      <h2 class="section-title">Reflection & Future Directions</h2>
      <div class="reflection-content">
        <div class="reflection-grid">
          <div class="reflection-card">
            <h4>✅ Achievements</h4>
            <p>Demonstrated procedural generation's potential to simplify tasks and offer real-time feedback, empowering creative exploration while maintaining constraint control.</p>
          </div>
          <div class="reflection-card">
            <h4>🔮 Future Enhancements</h4>
            <p>Machine learning integration could make the system adaptive, learning from designs to optimize for sustainability and aesthetics. Extension to irregular grids would expand applicability.</p>
          </div>
          <div class="reflection-card">
            <h4>🎯 Next Steps</h4>
            <p>Refining the interface for accessibility across technical expertise levels, making this a valuable tool in architectural design's future.</p>
          </div>
        </div>
      </div>
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
/* Copy styles from HapiProject.vue - they share the same architectural design */
/* Import or copy the complete styles from HapiProject.vue */

.architecture-study {
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0;
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  margin-bottom: clamp(2rem, 4vw, 2.5rem);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.hero-overlay {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
}

.project-tag {
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(0.625rem);
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 1.25rem;
  font-size: clamp(0.85rem, 1.7vw, 0.95rem);
  font-weight: 600;
  letter-spacing: 0.03125rem;
  text-transform: uppercase;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
}

/* Project Header */
.project-header {
  padding: 0 5%;
  margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
  text-align: left;
}

.project-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  line-height: 1.1;
  letter-spacing: -0.03125rem;
}

.project-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  color: #555;
  margin-bottom: 1rem;
  font-weight: 400;
  line-height: 1.3;
}

.project-tagline {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #777;
  max-width: 50rem;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
}

.project-meta {
  display: flex;
  gap: clamp(2rem, 4vw, 4rem);
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 1.5rem;
  border-top: 0.0625rem solid #e0e0e0;
  max-width: 50rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

.meta-label {
  font-size: clamp(0.75rem, 1.5vw, 0.8rem);
  text-transform: uppercase;
  letter-spacing: 0.09375rem;
  color: #999;
  font-weight: 600;
}

.meta-value {
  font-size: clamp(0.95rem, 1.9vw, 1.05rem);
  color: #333;
  font-weight: 500;
}

/* Paper Link */
.project-links {
  margin-top: 2rem;
  text-align: left;
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
  font-size: clamp(0.9rem, 1.8vw, 1rem);
}

.paper-link:hover {
  background: #333;
  transform: translateY(-0.125rem);
}

/* Overview Section */
.overview-section {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(3rem, 6vw, 4rem);
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18.75rem, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  max-width: 75rem;
  margin: 0 auto;
}

.overview-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(0.625rem);
  padding: clamp(1.75rem, 3.5vw, 2.25rem);
  border-radius: 1rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.overview-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-0.3125rem);
  border-color: rgba(255, 255, 255, 0.2);
}

.overview-card h3 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
}

.overview-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
}

/* Section Titles */
.section-title {
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  font-weight: 700;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  color: #1a1a1a;
  text-align: center;
  line-height: 1.2;
}

/* Research Section */
.research-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  background: #fafafa;
}

.research-content {
  max-width: 56.25rem;
  margin: 0 auto;
}

.research-text {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.8;
  color: #444;
  text-align: justify;
}

/* Algorithm Section */
.algorithm-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  background: white;
}

.algorithm-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 3rem);
  max-width: 75rem;
  margin: 0 auto;
}

.algorithm-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contributions-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contribution-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contribution-icon {
  font-size: 2rem;
  min-width: 2.5rem;
}

.contribution-item h4 {
  font-size: clamp(1.05rem, 2.1vw, 1.2rem);
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.contribution-item p {
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  color: #666;
  line-height: 1.6;
}

.algorithm-description {
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 0.75rem;
  border-left: 0.25rem solid #1a1a1a;
}

.algorithm-description p {
  font-size: clamp(0.95rem, 1.9vw, 1.05rem);
  line-height: 1.7;
  color: #555;
}

.algorithm-visuals {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.diagram-image {
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}

/* Technical Section */
.technical-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  background: #f5f5f5;
}

.technical-content {
  max-width: 75rem;
  margin: 0 auto;
}

.implementation-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.implementation-card {
  background: white;
  padding: clamp(1.5rem, 3vw, 1.75rem);
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.implementation-card:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.12);
}

.implementation-card h4 {
  font-size: clamp(1.05rem, 2.1vw, 1.15rem);
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.implementation-card p {
  font-size: clamp(0.9rem, 1.8vw, 0.95rem);
  color: #666;
  line-height: 1.6;
}

.grasshopper-showcase {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
}

.showcase-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Features Section */
.features-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.feature-showcase {
  max-width: 75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18.75rem, 100%), 1fr));
  gap: clamp(2rem, 4vw, 3rem);
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item h3 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  color: #1a1a1a;
  font-weight: 600;
  text-align: center;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-image-container {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feature-item p {
  font-size: clamp(0.95rem, 1.9vw, 1.05rem);
  color: #555;
  line-height: 1.7;
  text-align: center;
}

/* Reflection Section */
.reflection-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: 0;
  background: #1a1a1a;
}

.reflection-section .section-title {
  color: #ffffff;
}

.reflection-content {
  max-width: 75rem;
  margin: 0 auto;
}

.reflection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.reflection-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(0.625rem);
  padding: clamp(1.75rem, 3.5vw, 2.25rem);
  border-radius: 1rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.reflection-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-0.3125rem);
}

.reflection-card h4 {
  font-size: clamp(1.15rem, 2.3vw, 1.3rem);
  margin-bottom: 1rem;
  color: #ffffff;
}

.reflection-card p {
  font-size: clamp(0.95rem, 1.9vw, 1.05rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

/* Responsive Adjustments */
@media (max-width: 64rem) {
  .implementation-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 48rem) {
  .project-meta {
    flex-direction: column;
    gap: 1.5rem;
  }

  .algorithm-content {
    grid-template-columns: 1fr;
  }

  .feature-showcase {
    grid-template-columns: 1fr;
  }

  .implementation-grid {
    grid-template-columns: 1fr;
  }

  .section-grid,
  .reflection-grid {
    grid-template-columns: 1fr;
  }
}
</style>
