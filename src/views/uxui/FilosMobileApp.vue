<template>
    <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Filos</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Filos App" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Course Project</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">UX/UI Designer</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Duration</span>
          <span class="meta-value">1 Month (2023)</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          Connecting people with and without disabilities through shared activities and meaningful interactions.
        </p>
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

    <case-study-footer currentRoute="/products/filos-mobile-app" />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";

export default {
  name: "FilosMobileApp",
  components: {
    AppNavbar,
    CaseStudyFooter,
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
/* ===== CASE STUDY - Editorial Reveal ===== */

/* Reveal Animation */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-reveal {
  opacity: 0;
  animation: revealUp 0.8s var(--ease-out) forwards;
  animation-delay: var(--delay, 0s);
}

/* Base */
.case-study {
  background: var(--color-bg);
  color: var(--color-text);
  padding-bottom: var(--space-12);
}

/* ===== CINEMATIC HEADER ===== */
.case-header {
  padding: var(--space-16) var(--space-8) 0;
  text-align: center;
  position: relative;
  z-index: 2;
}

.case-title {
  font-family: var(--font-serif);
  font-size: clamp(3.5rem, 10vw, 8rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin: 0;
  white-space: nowrap;
  margin-bottom: -0.15em;
}

/* ===== HERO ===== */
.case-hero {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== PROJECT INFO - split ===== */
.case-info {
  max-width: 1100px;
  margin: 0 auto var(--space-16);
  padding: 0 var(--space-8);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-12);
  align-items: start;
}

.info-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.meta-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.meta-label {
  font-size: 0.625rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
}

.meta-value {
  font-size: 0.9375rem;
  font-weight: var(--weight-medium);
  color: var(--color-text);
  line-height: 1.4;
}

.info-description {
  padding-top: 0.25rem;
}

.info-text {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 1.35;
  color: var(--color-text);
  letter-spacing: -0.01em;
  margin: 0;
}

/* ===== CONTENT SECTIONS ===== */
.content-section {
  max-width: 760px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.section-label {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  font-weight: var(--weight-semibold);
}

.section-heading {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0 0 var(--space-4);
  color: var(--color-text);
}

.body-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4);
}

/* Figma Embed */
.figma-embed-container {
  width: 100%;
  height: 600px;
  margin: var(--space-6) 0;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.figma-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* ===== SPLIT SECTIONS ===== */
.split-section {
  display: flex;
  align-items: center;
  gap: var(--space-10);
  max-width: 1200px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
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
  background: rgba(240, 232, 255, 0.45);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .case-info {
    grid-template-columns: 200px 1fr;
    gap: var(--space-8);
  }

  .split-section {
    flex-direction: column;
    gap: var(--space-6);
  }

  .split-content,
  .split-media {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .case-header {
    padding: var(--space-10) var(--space-5) 0;
  }

  .case-title {
    font-size: clamp(2.5rem, 14vw, 5rem);
    margin-bottom: -0.1em;
  }

  .case-hero {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-8);
  }

  .case-info {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding: 0 var(--space-5);
    margin-bottom: var(--space-12);
  }

  .info-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .info-text {
    font-size: 1.375rem;
  }

  .content-section {
    padding: 0 var(--space-5);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .split-section {
    padding: 0 var(--space-5);
  }

  .figma-embed-container {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .case-title {
    font-size: clamp(2.5rem, 13vw, 4rem);
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }
}
</style>