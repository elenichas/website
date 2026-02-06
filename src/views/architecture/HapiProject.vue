<template>
  <app-navbar></app-navbar>
  <div class="architecture-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Hapi Project Hero" />
      <div class="hero-overlay">
        <span class="project-tag">Architectural Thesis 2019</span>
      </div>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <h1 class="project-title">Hapi</h1>
      <h2 class="project-subtitle">
        Housing & Automated Production Infrastructure
      </h2>
      <p class="project-tagline">
        Exploring digital possibilities for coexistence in future mega cities through modular, 3D-printed housing
      </p>
      <div class="project-meta">
        <div class="meta-item">
          <span class="meta-label">Type</span>
          <span class="meta-value">Architectural Thesis</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Year</span>
          <span class="meta-value">2019</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Team</span>
          <span class="meta-value">Georgia Strinopoulou, Eleni Chasioti</span>
        </div>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="section-grid">
        <div class="overview-card">
          <h3>🏙️ Urban Challenge</h3>
          <p>
            Addressing the growing housing shortage in urban centers with sustainable, affordable, and adaptable living spaces.
          </p>
        </div>
        <div class="overview-card">
          <h3>🏗️ Approach</h3>
          <p>
            Large-scale modular structure using 3D-printed elements, assembled on-site and elevated to designated floors.
          </p>
        </div>
        <div class="overview-card">
          <h3>🤖 Innovation</h3>
          <p>
            Algorithmic design with smart sensors and robotic systems for monitoring and optimizing energy efficiency.
          </p>
        </div>
      </div>
    </section>

    <!-- Research Section -->
    <section class="research-section">
      <h2 class="section-title">Research & Concept</h2>
      <div class="research-content">
        <p class="research-text">
          The Hapi project delves into the digital possibilities of how people may coexist in future mega cities. 
          It tackles the growing housing shortage in urban centers and emphasizes the need for sustainable, affordable, 
          and adaptable living spaces. The project's goal is to provide solutions to these challenges by proposing a 
          large-scale, modular structure composed of 3D-printed elements, which are assembled on-site and then elevated 
          to their designated floors. Each home is designed using a unique algorithmic process, tailored to accommodate 
          various family sizes. The project offers flexible solutions for cohabitation, with options for the connection 
          or expansion of housing units. Additionally, the homes are equipped with smart sensors and robotic systems to 
          monitor internal conditions, optimizing energy use and promoting efficiency.
        </p>
      </div>
    </section>

    <!-- Isometric Image Section -->
    <section class="showcase-section">
      <div class="large-image-container">
        <img :src="tall" alt="Isometric View" class="showcase-image" />
      </div>
    </section>

    <!-- Technical Studies -->
    <section class="technical-section">
      <h2 class="section-title">Technical Studies</h2>
      <div class="carousel-container">
        <v-carousel cycle hide-delimiters show-arrows="hover" height="auto">
          <v-carousel-item
            v-for="(image, index) in images"
            :key="index"
            :src="image.url"
            :alt="'Technical Study ' + (index + 1)"
            cover
          ></v-carousel-item>
        </v-carousel>
      </div>
    </section>

    <!-- Design Process & Results -->
    <section class="process-section">
      <h2 class="section-title">Design Process & Outcomes</h2>
      <div class="outcomes-grid">
        <div class="outcome-card">
          <div class="outcome-icon">🏗️</div>
          <h4>Innovative Aggregations</h4>
          <p>Modular voxels enabled flexible and scalable housing solutions adaptable to various urban contexts.</p>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">📐</div>
          <h4>Efficiency & Livability</h4>
          <p>Shortest path and density studies ensured functional and livable environments for diverse communities.</p>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">🔧</div>
          <h4>Customization & Adaptation</h4>
          <p>The modular approach allowed for diverse configurations adaptable to various contexts and family needs.</p>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">⚙️</div>
          <h4>Advanced Fabrication</h4>
          <p>Modular components were analyzed into rulings for fabrication with hotwire cutting techniques.</p>
        </div>
      </div>
    </section>

    <!-- Renders Gallery -->
    <section class="renders-section">
      <h2 class="section-title">Visual Renders</h2>
      <div class="carousel-container">
        <v-carousel
          cycle
          hide-delimiters
          interval="4000"
          show-arrows="hover"
          height="auto"
        >
          <v-carousel-item
            v-for="(image, index) in renders"
            :key="index"
            :src="image.url"
            :alt="'Render ' + (index + 1)"
            cover
          ></v-carousel-item>
        </v-carousel>
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
      tall: require("@/images/hapi/iso.png"),
      hero: require("@/images/hapi/hapihero.jpg"),
      images: [
        { url: require("@/images/hapi/carousel0.png") },
        { url: require("@/images/hapi/carousel1.png") },
        { url: require("@/images/hapi/carousel2.png") },
      ],
      renders: [
        { url: require("@/images/hapi/render1.jpg") },
        { url: require("@/images/hapi/render2.jpg") },
        { url: require("@/images/hapi/render3.jpg") },
        { url: require("@/images/hapi/render4.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
/* Architecture Study - Hapi Project */
/* Modern, responsive layout for architectural thesis */

.architecture-study {
  max-width: 87.5rem; /* 1400px */
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
  backdrop-filter: blur(0.625rem); /* 10px */
  color: white;
  padding: 0.625rem 1.25rem; /* 10-20px */
  border-radius: 1.25rem;
  font-size: clamp(0.85rem, 1.7vw, 0.95rem);
  font-weight: 600;
  letter-spacing: 0.03125rem; /* 0.5px */
  text-transform: uppercase;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
}

/* Project Header */
.project-header {
  padding: 0 5%;
  margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
  text-align: center;
}

.project-title {
  font-size: clamp(2.5rem, 6vw, 4rem); /* 40-64px */
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  line-height: 1.1;
  letter-spacing: -0.03125rem; /* -0.5px */
}

.project-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem); /* 20-28px */
  color: #555;
  margin-bottom: 1rem;
  font-weight: 400;
  line-height: 1.3;
}

.project-tagline {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #777;
  max-width: 50rem; /* 800px */
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.project-meta {
  display: flex;
  gap: clamp(2rem, 4vw, 4rem);
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1.5rem;
  border-top: 0.0625rem solid #e0e0e0;
  max-width: 50rem;
  margin: 0 auto;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.meta-label {
  font-size: clamp(0.75rem, 1.5vw, 0.8rem);
  text-transform: uppercase;
  letter-spacing: 0.09375rem; /* 1.5px */
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
  max-width: 56.25rem; /* 900px */
  margin: 0 auto;
}

.research-text {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.8;
  color: #444;
  text-align: justify;
}

/* Showcase Section (Large Image) */
.showcase-section {
  padding: clamp(2rem, 4vw, 3rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.large-image-container {
  max-width: 75rem;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
}

.showcase-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.large-image-container:hover .showcase-image {
  transform: scale(1.02);
}

/* Technical Section */
.technical-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  background: #f5f5f5;
}

/* Process Section */
.process-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16.25rem, 100%), 1fr)); /* 260px */
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

/* Renders Section */
.renders-section {
  padding: clamp(3rem, 6vw, 4rem) 5%;
  margin-bottom: 0;
  background: #1a1a1a;
}

.renders-section .section-title {
  color: #ffffff;
}

/* Carousel Container */
.carousel-container {
  max-width: 75rem;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
}

.carousel-container :deep(.v-carousel) {
  border-radius: 1rem;
}

.carousel-container :deep(.v-carousel-item) {
  background: #2a2a2a;
}

/* Responsive Adjustments */
@media (max-width: 48rem) { /* 768px */
  .project-meta {
    flex-direction: column;
    gap: 1.5rem;
  }

  .section-grid,
  .outcomes-grid {
    grid-template-columns: 1fr;
  }

  .project-header {
    text-align: left;
  }

  .project-tagline {
    text-align: left;
  }

  .meta-item {
    align-items: flex-start;
  }
}
</style>
