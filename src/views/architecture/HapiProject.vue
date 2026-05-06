<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Hapi Project" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Architectural Thesis 2019</p>
      <h1 class="project-title">Hapi</h1>
      <h2 class="project-subtitle">Housing & Automated Production Infrastructure</h2>
      <p class="project-intro">
        Exploring digital possibilities for coexistence in future mega cities through modular, 3D-printed housing.
      </p>
      <div class="project-meta">
        <span class="meta-item">Architectural Thesis</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">2019</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Georgia Strinopoulou, Eleni Chasioti</span>
      </div>
    </div>

    <!-- Research -->
    <section class="content-section">
      <p class="section-label">Research & Concept</p>
      <h2 class="section-heading">Addressing urban housing challenges</h2>
      <p class="body-text">
        The Hapi project delves into the digital possibilities of how people may coexist in future mega cities. It tackles the growing housing shortage in urban centers and emphasizes the need for sustainable, affordable, and adaptable living spaces.
      </p>
      <p class="body-text">
        The project proposes a large-scale, modular structure composed of 3D-printed elements, which are assembled on-site and then elevated to their designated floors. Each home is designed using a unique algorithmic process, tailored to accommodate various family sizes.
      </p>
    </section>

    <!-- Isometric -->
    <section class="content-section">
      <figure class="image-figure">
        <img :src="tall" alt="Isometric architectural view" class="content-image" />
      </figure>
    </section>

    <!-- Technical Studies -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Technical Studies</p>
        <h2 class="section-heading">Modular design and fabrication</h2>
        <p class="body-text">
          The modular approach enabled flexible and scalable housing solutions adaptable to various urban contexts. Shortest path and density studies ensured functional and livable environments for diverse communities.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <div class="carousel-wrapper">
          <v-carousel cycle hide-delimiters show-arrows="hover" height="400">
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
              :src="image.url"
              :alt="'Technical Study ' + (index + 1)"
              cover
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </section>

    <!-- Design Process -->
    <section class="content-section">
      <p class="section-label">Innovation</p>
      <h2 class="section-heading">Smart systems and algorithmic design</h2>
      <p class="body-text">
        The project offers flexible solutions for cohabitation, with options for the connection or expansion of housing units. The homes are equipped with smart sensors and robotic systems to monitor internal conditions, optimizing energy use and promoting efficiency.
      </p>
      <p class="body-text">
        Modular components were analyzed into rulings for fabrication with hotwire cutting techniques, demonstrating advanced fabrication approaches for architectural-scale 3D printing.
      </p>
    </section>

        <!-- Renders -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-green">
        <div class="carousel-wrapper">
          <v-carousel cycle hide-delimiters interval="4000" show-arrows="hover" height="450">
            <v-carousel-item
              v-for="(image, index) in renders"
              :key="index"
              :src="image.url"
              :alt="'Architectural illustration ' + (index + 1)"
              cover
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <div class="split-content">
        <p class="section-label">Visualization</p>
        <h3 class="section-heading">Living in the modular city</h3>
        <p class="body-text">
          Architectural illustrations showcase the potential of modular, algorithmically-designed housing systems to create diverse, adaptable living environments in dense urban contexts.
        </p>
      </div>
    </section>

    <case-study-footer currentRoute="/products/hapi-project" />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";

export default {
  name: "HapiProject",
  components: {
    AppNavbar,
    CaseStudyFooter,
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
}

.meta-divider {
  color: #ccc;
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

.carousel-wrapper {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.carousel-wrapper :deep(.v-carousel) {
  border-radius: 8px;
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
