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
        I observed shop operations during peak hours and interviewed customers to understand their pain points. Through persona development and user journey mapping, I identified key opportunities for digital intervention primarily the need for time-saving ordering and delivery tracking features.
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

    <!-- Visual Design Details -->
    <section class="content-section">
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
  padding-bottom: 3rem;
}

/* Hero */
.hero-section {
  width: 100%;
  margin-bottom: 2.5rem;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Project Header */
.project-header {
  max-width: 760px;
  margin: 0 auto 3rem;
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
  margin: 0 auto 3rem;
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
  margin: 0 0 1rem;
  color: #000;
  font-family: Georgia, 'Times New Roman', serif;
}

.body-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0 0 1rem;
}

/* Split Sections */
.split-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
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
  padding: 2rem;
  border-radius: 24px;
}

.media-container-yellow {
  background: #FFF9E0;
  padding: 2rem;
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
    padding: 2rem 1.5rem;
    margin: 2rem auto;
  }
  
  .split-content,
  .split-media {
    max-width: 100%;
  }
}

/* Style Guide */
.style-guide {
  margin-top: 2rem;
}

.style-block {
  margin-bottom: 2rem;
}

.style-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
}

/* Color Palette */
.color-palette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.color-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.color-swatch {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.color-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.color-name {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #000;
}

.color-code {
  font-size: 0.8125rem;
  color: #666;
  font-family: monospace;
}

/* Typography Samples */
.typography-samples {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.type-sample {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sample-text {
  line-height: 1.4;
}

.sample-meta {
  font-size: 0.8125rem;
  color: #999;
}

/* Components Showcase */
.components-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.component-example {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.component-label {
  font-size: 0.8125rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.sample-button {
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.sample-button:hover {
  transform: translateY(-2px);
}
</style>
