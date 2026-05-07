<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Digital Futures Workshop" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Workshop 2020</p>
      <h1 class="project-title">Architectural Geometry & Habitat</h1>
      <h2 class="project-subtitle">Digital Futures Workshop</h2>
      <p class="project-intro">
        Exploring modular voxel-based housing systems with optimization algorithms and robotic fabrication techniques.
      </p>
      <div class="project-meta">
        <span class="meta-item">Computational Designer</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">2020</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Peter Bus, Jackson Bi, Sandro Sanin, Eleni Chasioti</span>
      </div>
    </div>

    <!-- Research -->
    <section class="content-section">
      <p class="section-label">Research & Precedents</p>
      <h2 class="section-heading">Modular housing explorations</h2>
      <p class="body-text">
        The workshop began with a study of existing architectural models like Alvenaria Social Housing and Habitat 67. These served as precedents showing modularity and geometric experimentation. A voxel-based system was used to design different housing units, allowing flexibility in size and configuration.
      </p>
      <p class="body-text">
        Various ways of aggregating these voxels were explored to create efficient and livable structures with plenty of light and air. The team optimized circulation within the habitat using shortest path diagrams and density studies to ensure logical and efficient pathways.
      </p>
    </section>

    <!-- Process -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Design Process</p>
        <h2 class="section-heading">From voxels to assembled units</h2>
        <p class="body-text">
          Different graph-based methods for grouping voxels were tested to create diverse and flexible configurations. The team developed geometric variations for elements like balconies, facades, and rooftops, culminating in exploded diagrams showing how the units could be assembled.
        </p>
      </div>
      <div class="split-media media-container-purple">
        <div class="carousel-wrapper">
          <v-carousel cycle hide-delimiters interval="4000" show-arrows="hover" height="400">
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
              :src="image.url"
              :alt="'Process step ' + (index + 1)"
              cover
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </section>

    <!-- Fabrication -->
    <section class="content-section">
      <p class="section-label">Innovation</p>
      <h2 class="section-heading">Robotic fabrication techniques</h2>
      <p class="body-text">
        Robotic fabrication techniques were explored for constructing these complex geometries. Modular components were analyzed into rulings for fabrication with hotwire cutting techniques. The modular approach enabled flexible and scalable housing solutions adaptable to various urban contexts.
      </p>
      <p class="body-text">
        Shortest path and density studies ensured functional and livable environments with optimal circulation, demonstrating how computational design can address real-world spatial challenges.
      </p>
    </section>

    <!-- Video -->
    <section class="content-section">
      <p class="section-label">Final Assembly</p>
      <h2 class="section-heading">Physical prototype</h2>
      <figure class="video-figure">
        <video controls class="content-video">
          <source src="/vids/habitatVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </figure>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "WorkshopDesign",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/habitat/hero.webp"),
      images: [
        { url: require("@/images/habitat/voxelunits.webp") },
        { url: require("@/images/habitat/unitypes.webp") },
        { url: require("@/images/habitat/siteviewAggregations.webp") },
        { url: require("@/images/habitat/pathAnddensity.webp") },
        { url: require("@/images/habitat/elements.webp") },
        { url: require("@/images/habitat/exploded.webp") },
        { url: require("@/images/habitat/aggregations2.webp") },
        { url: require("@/images/habitat/assembledunits.webp") },
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

/* Video */
.video-figure {
  margin: 3rem 0;
}

.content-video {
  width: 100%;
  height: auto;
  display: block;
  background: #000;
  border-radius: 8px;
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

.split-content {
  flex: 1;
  max-width: 500px;
}

.split-media {
  flex: 1;
  max-width: 600px;
}

/* Media Containers */
.media-container-purple {
  background: #F0E8FF;
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
