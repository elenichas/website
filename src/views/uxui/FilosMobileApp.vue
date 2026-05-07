<template>
    <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Filos App" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Google UX Design Course</p>
      <h1 class="project-title">Filos</h1>
      <p class="project-intro">
        Connecting people with and without disabilities through shared activities and meaningful interactions.
      </p>
      <div class="project-meta">
        <span class="meta-item">UX/UI Designer</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">1 Month (2023)</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Course Project</span>
      </div>
    </div>

        <!-- Problem Space -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Breaking down barriers to connection</h2>
      <p class="body-text">
        People with disabilities face physical and social barriers to participation, while those working in disability services lack opportunities for meaningful real-world connections. There's a gap in understanding daily experiences that creates empathy divides.
      </p>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">A platform for shared experiences</h2>
        <p class="body-text">
          Filos enables people with and without disabilities to connect, propose activities, and build genuine relationships through shared experiences. The name means "friendship" in Greek.
        </p>
      </div>
      <div class="split-media media-container-purple">
        <img :src="wireframes" alt="Filos wireframes" class="split-image" />
      </div>
    </section>

        <!-- User Personas -->
    <section class="content-section">
      <p class="section-label">Users</p>
      <h2 class="section-heading">Designing for diverse needs</h2>
      <p class="body-text">
        Understanding the people who would use Filos was essential. I created personas representing both people with disabilities seeking connections and those in disability services looking for meaningful volunteer opportunities.
      </p>
    </section>

        <!-- Figma Prototype -->
    <section class="content-section">
      <p class="section-label">Prototype</p>
      <h2 class="section-heading">Interactive prototype</h2>
      
      <div class="figma-embed-container">
        <iframe
          class="figma-iframe"
          src="https://embed.figma.com/design/YQu3rgFADyaMk5HhHQM4Y8/Filos_App?node-id=22-403&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

        <!-- Visual Design -->
    <section class="content-section">
      <p class="section-label">Visual Identity</p>
      <h2 class="section-heading">Designing for accessibility and trust</h2>
      <p class="body-text">
        I created a visual identity emphasizing inclusivity and trust. The calming purple palette evokes approachability, while every design choice prioritizes accessibility with large buttons, high contrast, and clear navigation.
      </p>
    </section>

        <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">Learning</p>
      <h2 class="section-heading">Practicing inclusive design</h2>
      <p class="body-text">
        Through this course project, I learned to prioritize accessibility from the start not as an afterthought but as a core design principle. I practiced designing for diverse abilities, understanding how design choices impact different user groups, and developed deeper empathy by considering the barriers users face.
      </p>
      <p class="body-text">
        I gained hands-on experience applying WCAG accessibility guidelines and understanding their practical impact on real people's lives.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "FilosMobileApp",
  components: {
    AppNavbar,
  },
    data() {
    return {
      hero: require("@/images/filosHero.webp"),
      wireframes: require("@/images/filosWireframes.webp"),
      figmaSrc: "https://www.figma.com/proto/YQu3rgFADyaMk5HhHQM4Y8/Filos_App?node-id=0-1&t=XXX",
    };
  },
};
</script>

<style scoped>
/* Minimal Editorial Design */

.case-study {
  background: #fff;
  color: #000;
  padding-bottom: 5rem;
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
.media-container-purple {
  background: #F0E8FF;
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

.body-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0 0 1.5rem;
}

/* Simple List */
.simple-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.simple-list li {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 1rem;
  padding-left: 0;
}

.simple-list li strong {
  color: #000;
  font-weight: 600;
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

/* Videos */
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
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
  .content-section {
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
    padding: 3rem 1.5rem;
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

/* Media Containers with Colored Backgrounds */
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

.media-container-purple {
  background: #F0E8FF;
  padding: 3rem;
  border-radius: 24px;
}

.media-container-yellow {
  background: #FFF9E0;
  padding: 3rem;
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