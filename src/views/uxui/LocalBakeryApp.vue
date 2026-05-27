<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Brew &amp; Crumb</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Brew & Crumb App" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info">
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
          A course project for a real high-traffic cafe near my office, exploring how mobile ordering could reduce morning wait times.
        </p>
      </div>
    </div>

    <!-- Challenge -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Solving the morning rush</h2>
      <p class="body-text">
        The cafe had heavy morning traffic from nearby office workers, creating long queues during the commute window. For the course project, I used this real setting as the basis for a mobile ordering concept focused on speed, clarity, and pickup confidence.
      </p>
    </section>

    <!-- Solution -->
    <section class="content-section-wide bakery-showcase bakery-showcase-left">
      <div class="showcase-copy">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">Order ahead, skip the line</h2>
        <p class="body-text">
          A mobile app concept enabling preorders, pickup scheduling, and order status updates. Customers can browse the menu, choose a pickup time, and understand when their order is ready without waiting in the full queue.
        </p>
      </div>
      <div class="showcase-media media-container-green">
        <img :src="wireframes" alt="Brew & Crumb wireframes" class="showcase-image" />
      </div>
    </section>

    <!-- Design Process -->
    <section class="content-section">
      <p class="section-label">Process</p>
      <h2 class="section-heading">From research to prototype</h2>
      <p class="body-text">
        I observed the cafe during busy morning periods and translated the patterns into course deliverables: personas, journey maps, wireframes, and a high-fidelity prototype. The main opportunity was reducing uncertainty around ordering time, queue length, and pickup readiness.
      </p>
    </section>

    <!-- Prototypes -->
    <section class="content-section-wide bakery-showcase bakery-showcase-right animate-on-scroll reveal-from-left">
      <div class="showcase-copy">
        <p class="section-label">Design</p>
        <h3 class="section-heading">Warm and inviting</h3>
        <p class="body-text">
          I developed a warm, inviting visual language that reflects the cozy atmosphere of a neighborhood coffee shop. The earthy tones and clean typography create an approachable yet modern aesthetic.
        </p>
      </div>
      <div class="showcase-media media-container-yellow">
        <img :src="prototypes" alt="High-fidelity screens" class="showcase-image" />
      </div>
    </section>

    <!-- Visual Design Details -->
    <section class="content-section visual-language-section">
      <p class="section-label">Visual Language</p>
      <h2 class="section-heading">Design system</h2>
      
      <div class="style-guide">
        <!-- Color Palette -->
        <div class="style-block">
          <h4 class="style-heading">Color Palette</h4>
          <div class="color-palette">
            <div class="color-item">
              <div class="color-swatch" style="background: #00320b"></div>
              <div class="color-info">
                <span class="color-name">Deep Forest</span>
                <span class="color-code">#00320b</span>
              </div>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: #d7a246"></div>
              <div class="color-info">
                <span class="color-name">Golden Cream</span>
                <span class="color-code">#d7a246</span>
              </div>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: #f5f5f5"></div>
              <div class="color-info">
                <span class="color-name">Light Background</span>
                <span class="color-code">#f5f5f5</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div class="style-block">
          <h4 class="style-heading">Typography</h4>
          <div class="typography-samples">
            <div class="type-sample">
              <div class="sample-text" style="font-size: 2rem; font-weight: 700; color: #00320b; font-family: 'Sansation', sans-serif;">Fresh Coffee Daily</div>
              <div class="sample-meta">Sansation Bold · 32px</div>
            </div>
            <div class="type-sample">
              <div class="sample-text" style="font-size: 1.25rem; font-weight: 500; color: #d7a246;">Order ahead and skip the line</div>
              <div class="sample-meta">Inter Medium · 20px</div>
            </div>
            <div class="type-sample">
              <div class="sample-text" style="font-size: 1rem; color: #666;">Browse our menu of artisan coffee, fresh pastries, and local merchandise.</div>
              <div class="sample-meta">Inter Regular · 16px</div>
            </div>
          </div>
        </div>

        <!-- UI Components -->
        <div class="style-block">
          <h4 class="style-heading">Key Components</h4>
          <div class="components-showcase">
            <div class="component-example">
              <span class="component-label">Primary Button</span>
              <button class="sample-button primary" style="background: #00320b; color: white; border: none; padding: 0.875rem 1.75rem; border-radius: 2rem; font-weight: 600;">Order Now</button>
            </div>
            <div class="component-example">
              <span class="component-label">Secondary Button</span>
              <button class="sample-button secondary" style="background: transparent; color: #d7a246; border: 2px solid #d7a246; padding: 0.875rem 1.75rem; border-radius: 2rem; font-weight: 600;">View Menu</button>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">Learning</p>
      <h2 class="section-heading">Course project insights</h2>
      <p class="body-text">
        Through the Google UX Design curriculum, I practiced research synthesis, persona development, wireframing, and high-fidelity prototyping. Because the project was based on a real cafe but completed as a course exercise, I focused on showing a realistic service concept without overstating production impact.
      </p>
      <p class="body-text">
        This project reinforced the importance of mobile-first design, balancing constraints with usability and visual appeal.
      </p>
    </section>

    <case-study-footer currentRoute="/products/brew-crumb" />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";

export default {
  name: "LocalBakeryApp",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  data() {
    return {
      hero: require("@/images/kapihanHero.webp"),
      wireframes: require("@/images/kapihanWireframes.webp"),
      prototypes: require("@/images/kapihanPrototypes.webp"),
      figmaSrc: "https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1",
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
  animation: revealUp 1.25s var(--ease-out) forwards;
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
  max-width: 100%;
  overflow-wrap: normal;
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
  max-width: 1240px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
  text-align: left;
}

.case-study .content-section.layout-text-only {
  display: grid;
  place-items: start;
  text-align: left;
}

.content-section .section-label,
.content-section .section-heading,
.content-section .body-text {
  text-align: left;
}

.content-section .body-text,
.case-study .content-section.layout-text-only .body-text {
  max-width: 760px;
  margin-left: 0;
  margin-right: 0;
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
.media-container-green {
  background: rgba(223, 245, 212, 0.45);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container-yellow {
  background: rgba(255, 249, 224, 0.5);
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

/* Full-width product image showcases */
.case-study .bakery-showcase {
  max-width: 1240px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
  display: grid;
  gap: var(--space-5);
  place-items: stretch;
}

.case-study .bakery-showcase .showcase-copy {
  max-width: 520px;
}

.case-study .bakery-showcase-left .showcase-copy {
  justify-self: start;
}

.case-study .bakery-showcase-right .showcase-copy {
  justify-self: start;
  text-align: left;
}

.case-study .bakery-showcase-right .body-text {
  margin-left: 0;
}

.showcase-media {
  width: 100%;
  padding: var(--space-4);
  border-radius: var(--radius-sm);
}

.showcase-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

.case-study .visual-language-section {
  max-width: 960px;
  text-align: left;
  place-items: start;
}

.case-study .visual-language-section .section-heading,
.case-study .visual-language-section .section-label {
  text-align: left;
}

.case-study .visual-language-section .style-guide {
  display: grid;
  justify-items: start;
}

.case-study .visual-language-section .style-block {
  width: min(100%, 760px);
}

.case-study .visual-language-section .style-heading {
  text-align: left;
}

.case-study .visual-language-section .color-palette {
  justify-content: start;
}

.case-study .visual-language-section .color-item,
.case-study .visual-language-section .type-sample,
.case-study .visual-language-section .component-example {
  align-items: flex-start;
  text-align: left;
}

.case-study .visual-language-section .color-info {
  align-items: flex-start;
}

.case-study .visual-language-section .components-showcase {
  justify-content: flex-start;
}

/* Style Guide */
.style-guide {
  margin-top: var(--space-6);
}

.style-block {
  margin-bottom: var(--space-6);
}

.style-heading {
  font-size: 1.125rem;
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

/* Color Palette */
.color-palette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-4);
}

.color-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.color-swatch {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  flex-shrink: 0;
}

.color-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.color-name {
  font-size: 0.875rem;
  font-weight: var(--weight-medium);
  color: var(--color-text);
}

.color-code {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-family: monospace;
}

/* Typography Samples */
.typography-samples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.type-sample {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.sample-text {
  line-height: 1.4;
}

.sample-meta {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

/* Components Showcase */
.components-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.component-example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.component-label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: var(--weight-medium);
}

.sample-button {
  font-family: inherit;
  font-size: 0.9375rem;
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

  .case-study .bakery-showcase {
    padding: 0 var(--space-5);
    margin: var(--space-10) auto;
  }

  .case-study .bakery-showcase-right .showcase-copy,
  .case-study .visual-language-section,
  .case-study .visual-language-section .section-heading,
  .case-study .visual-language-section .section-label,
  .case-study .visual-language-section .style-heading {
    text-align: left;
  }

  .case-study .bakery-showcase-right .showcase-copy,
  .case-study .visual-language-section .style-guide,
  .case-study .visual-language-section .style-block {
    justify-self: stretch;
    justify-items: stretch;
  }

  .case-study .visual-language-section .color-palette,
  .case-study .visual-language-section .components-showcase {
    justify-content: start;
  }

  .case-study .visual-language-section .color-item,
  .case-study .visual-language-section .type-sample,
  .case-study .visual-language-section .component-example,
  .case-study .visual-language-section .color-info {
    align-items: flex-start;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .case-title {
    font-size: clamp(2.5rem, 13vw, 4rem);
    white-space: normal;
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }
}
</style>
