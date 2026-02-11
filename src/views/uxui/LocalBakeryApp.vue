<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Brew & Crumb App" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Google UX Design Course</p>
      <h1 class="project-title">Brew & Crumb</h1>
      <p class="project-intro">
        A mobile ordering solution to reduce wait times at a local coffee shop.
      </p>
      <div class="project-meta">
        <span class="meta-item">UX/UI Designer</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">1 Month (2023)</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Course Project</span>
      </div>
    </div>

    <!-- Challenge -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Solving the morning rush</h2>
      <p class="body-text">
        Long morning queues at a popular local coffee shop were causing delays for busy professionals and creating lost revenue opportunities. Most customers are office workers with tight schedules, and 85% of daily traffic occurs between 7-9 AM, creating significant bottlenecks.
      </p>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">Order ahead, skip the line</h2>
        <p class="body-text">
          A mobile app enabling preorders, delivery tracking, and merchandise shopping to streamline operations and enhance customer experience. Customers can browse the menu, schedule pickup times, and track their orders in real-time.
        </p>
      </div>
      <div class="split-media media-container-green">
        <img :src="wireframes" alt="Brew & Crumb wireframes" class="split-image" />
      </div>
    </section>

    <!-- Design Process -->
    <section class="content-section">
      <p class="section-label">Process</p>
      <h2 class="section-heading">From research to prototype</h2>
      <p class="body-text">
        I observed shop operations during peak hours and interviewed customers to understand their pain points. Through persona development and user journey mapping, I identified key opportunities for digital intervention—primarily the need for time-saving ordering and delivery tracking features.
      </p>
    </section>

    <!-- Prototypes -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-yellow">
        <img :src="prototypes" alt="High-fidelity screens" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Design</p>
        <h3 class="section-heading">Warm and inviting</h3>
        <p class="body-text">
          I developed a warm, inviting visual language that reflects the cozy atmosphere of a neighborhood coffee shop. The earthy tones and clean typography create an approachable yet modern aesthetic.
        </p>
      </div>
    </section>

    <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">Learning</p>
      <h2 class="section-heading">Course project insights</h2>
      <p class="body-text">
        Through the Google UX Design curriculum, I practiced conducting user research, persona development, wireframing, and high-fidelity prototyping. I learned to work within an existing brand identity while creating a modern digital experience, and developed skills in moving from low-fidelity wireframes to polished prototypes.
      </p>
      <p class="body-text">
        This project reinforced the importance of mobile-first design—balancing constraints with usability and visual appeal.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "LocalBakeryApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/kapihanHero.png"),
      wireframes: require("@/images/kapihanWireframes.png"),
      prototypes: require("@/images/kapihanPrototypes.png"),
      figmaSrc: "https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1",
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
.media-container-green {
  background: #DFF5D4;
  padding: 3rem;
  border-radius: 24px;
}

.media-container-yellow {
  background: #FFF9E0;
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
