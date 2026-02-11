<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Modular Building System" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Design Exercise</p>
      <h1 class="project-title">Modular Building System</h1>
      <p class="project-intro">
        A node-based 3D building application for creating and managing modular architectural projects.
      </p>
      <div class="project-meta">
        <span class="meta-item">UX Designer</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Concept Sketch</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Workflow & UI</span>
      </div>
    </div>

    <!-- Concept -->
    <section class="content-section">
      <p class="section-label">Concept</p>
      <h2 class="section-heading">Node-based architectural design</h2>
      <p class="body-text">
        Early-stage wireframes exploring a unit-based creation system for modular building design with intuitive node-based workflows. The system provides designers with flexibility and simplicity through visual feedback, performance analytics, and modular customization.
      </p>
    </section>

    <!-- Figma Prototype -->
    <section class="content-section">
      <p class="section-label">Wireframes</p>
      <h2 class="section-heading">High-fidelity prototypes</h2>
      
      <div class="figma-embed-container">
        <iframe
          class="figma-iframe"
          src="https://embed.figma.com/design/ZcTk8BtMkSmaQiSlrK97IJ/Modular-Building-App?node-id=0-1&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Design System -->
    <section class="content-section">
      <p class="section-label">Design Approach</p>
      <h2 class="section-heading">Rapid prototyping with Material Design</h2>
      <p class="body-text">
        I leveraged Google Material Design UI kit for rapid prototyping during this brainstorming exercise. This approach provided consistency, accessibility, and a modern aesthetic while allowing me to focus on workflow and interaction patterns.
      </p>
    </section>

    <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">Learning</p>
      <h2 class="section-heading">Complex workflows and system thinking</h2>
      <p class="body-text">
        Through this exercise, I practiced designing node-based interfaces and understanding how to visualize complex relationships between components. I explored ways to present performance analytics and metrics in an accessible, actionable format.
      </p>
      <p class="body-text">
        The project helped develop my understanding of designing for modular systems and maintaining flexibility in complex applications from project management and module libraries to data inspection and performance evaluation.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "ModularApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/moduleAppHero.png"),
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

/* Figma Embed */
.figma-embed-container {
  width: 100%;
  height: 600px;
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.figma-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive */
@media (max-width: 768px) {
  .project-header,
  .content-section {
    padding: 0 1.5rem;
  }
}
</style>
