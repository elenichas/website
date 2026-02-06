<template>
  <app-navbar></app-navbar>
  <div class="architecture-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Workshop Hero" />
      <div class="hero-overlay">
        <span class="project-tag">Workshop 2020</span>
      </div>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <h1 class="project-title">Architectural Geometry & Habitat</h1>
      <h2 class="project-subtitle">
        Digital Futures Workshop
      </h2>
      <div class="project-meta">
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-value">Computational Designer</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Year</span>
          <span class="meta-value">2020</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Team</span>
          <span class="meta-value">Peter Bus, Jackson Bi, Sandro Sanin, Eleni Chasioti</span>
        </div>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="section-grid">
        <div class="overview-card">
          <h3>🏛️ Modularity</h3>
          <p>
            Voxel-based system for designing flexible housing units with varied sizes and configurations.
          </p>
        </div>
        <div class="overview-card">
          <h3>🔍 Optimization</h3>
          <p>
            Shortest path diagrams and density studies ensuring efficient circulation and livable environments.
          </p>
        </div>
        <div class="overview-card">
          <h3>🤖 Fabrication</h3>
          <p>
            Robotic fabrication techniques for constructing complex modular geometries.
          </p>
        </div>
      </div>
    </section>

    <!-- Research Section -->
    <section class="research-section">
      <h2 class="section-title">Research & Precedents</h2>
      <div class="research-content">
        <p class="research-text">
          The workshop began with a study of existing architectural models like Alvenaria Social Housing and Habitat 67. 
          These served as precedents showing modularity and geometric experimentation. A voxel-based system was used to 
          design different housing units, allowing flexibility in size and configuration. Various ways of aggregating 
          these voxels were explored to create efficient and livable structures with plenty of light and air.
        </p>
        <p class="research-text">
          The team optimized circulation within the habitat using shortest path diagrams and density studies to ensure 
          logical and efficient pathways. Different graph-based methods for grouping voxels were tested to create diverse 
          and flexible configurations. The team developed geometric variations for elements like balconies, facades, and 
          rooftops, culminating in exploded diagrams showing how the units could be assembled. Finally, robotic fabrication 
          techniques were explored for constructing these complex geometries.
        </p>
      </div>
    </section>

    <!-- Process Gallery -->
    <section class="gallery-section">
      <h2 class="section-title">Design Process Gallery</h2>
      <div class="carousel-container">
        <v-carousel
          cycle
          hide-delimiters
          interval="4000"
          show-arrows="hover"
          height="auto"
        >
          <v-carousel-item
            v-for="(image, index) in images"
            :key="index"
            :src="image.url"
            :alt="'Process Image ' + (index + 1)"
            cover
          ></v-carousel-item>
        </v-carousel>
      </div>
    </section>

    <!-- Results Section -->
    <section class="results-section">
      <h2 class="section-title">Design Outcomes</h2>
      <div class="outcomes-grid">
        <div class="outcome-card">
          <div class="outcome-icon">🏛️</div>
          <h4>Innovative Aggregations</h4>
          <p>Modular voxels enabled flexible and scalable housing solutions adaptable to various contexts.</p>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">📍</div>
          <h4>Efficiency & Livability</h4>
          <p>Shortest path and density studies ensured functional and livable environments with optimal circulation.</p>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">🔧</div>
          <h4>Customization & Adaptation</h4>
          <p>The modular approach allowed for diverse configurations adaptable to various contexts and needs.</p>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">⚙️</div>
          <h4>Advanced Fabrication</h4>
          <p>Modular components analyzed into rulings for fabrication with hotwire cutting techniques.</p>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <h2 class="section-title">Final Assembly</h2>
      <div class="video-container">
        <video controls class="video-player">
          <source src="/vids/habitatVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
const videoSrc = "/vids/habitatVideo.webm";

export default {
  name: "WorkshopDesign",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/habitat/hero.jpg"),
      images: [
        { url: require("@/images/habitat/voxelunits.png") },
        { url: require("@/images/habitat/unitypes.png") },
        { url: require("@/images/habitat/siteviewAggregations.png") },
        { url: require("@/images/habitat/pathAnddensity.png") },
        { url: require("@/images/habitat/elements.png") },
        { url: require("@/images/habitat/exploded.png") },
        { url: require("@/images/habitat/aggregations2.png") },
        { url: require("@/images/habitat/assembledunits.png") },
      ],
    };
  },
};
</script>

<style scoped>
/* Architecture Study - Workshop Design */
/* Uses same design system as HapiProject and ThesisProject */

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
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.3;
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
  margin-bottom: 1.5rem;
}

/* Gallery Section */
.gallery-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  background: #f5f5f5;
}

.carousel-container {
  max-width: 75rem;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
}

.carousel-container :deep(.v-carousel) {
  border-radius: 1rem;
}

.carousel-container :deep(.v-carousel-item) {
  background: #2a2a2a;
}

/* Results Section */
.results-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16.25rem, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  max-width: 75rem;
  margin: 0 auto;
}

.outcome-card {
  background: white;
  padding: clamp(1.75rem, 3.5vw, 2.25rem);
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 0.25rem solid #2a2a2a;
}

.outcome-card:hover {
  transform: translateY(-0.3125rem);
  box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.12);
  border-left-color: #666;
}

.outcome-icon {
  font-size: clamp(2.5rem, 5vw, 3rem);
  margin-bottom: 1rem;
}

.outcome-card h4 {
  font-size: clamp(1.1rem, 2.2vw, 1.25rem);
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  font-weight: 600;
}

.outcome-card p {
  color: #666;
  line-height: 1.6;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
}

/* Video Section */
.video-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: 0;
  background: #1a1a1a;
}

.video-section .section-title {
  color: #ffffff;
}

.video-container {
  max-width: 75rem;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5);
}

.video-player {
  width: 100%;
  display: block;
  background: #000;
}

/* Responsive Adjustments */
@media (max-width: 48rem) {
  .project-meta {
    flex-direction: column;
    gap: 1.5rem;
  }

  .section-grid,
  .outcomes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
