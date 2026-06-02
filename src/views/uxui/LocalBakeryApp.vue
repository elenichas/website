<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Brew &amp; Crumb</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Brew and Crumb cafe ordering app interface" />
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

    <!-- Perspectives -->
    <section class="content-section-wide bakery-perspectives-section">
      <div class="section-intro">
        <p class="section-label">Perspectives</p>
        <h2 class="section-heading">Two sides of the morning rush</h2>
        <p class="body-text">
          The concept was shaped around a simple service exchange: customers need confidence that ordering ahead will actually save time, while cafe staff need orders to arrive clearly without disrupting the counter workflow.
        </p>
      </div>
      <div class="perspective-grid">
        <article class="perspective-card perspective-card-customer">
          <div class="perspective-visual" aria-hidden="true">
            <div class="perspective-phone">
              <div class="order-card order-card-primary">
                <span class="order-dot"></span>
                <span class="order-line line-wide"></span>
                <span class="order-line line-short"></span>
              </div>
              <div class="pickup-chip">8:35</div>
              <div class="status-bar">
                <span></span>
              </div>
              <div class="coffee-button">Order</div>
            </div>
          </div>
          <div class="perspective-copy">
            <p class="perspective-role">Customer perspective</p>
            <h3>The commuter trying to avoid the queue</h3>
            <p>
              A regular customer wants to choose a drink quickly, set a pickup time, and trust that the order will be ready when they arrive. The app needs to make timing, price, and confirmation feel immediate.
            </p>
          </div>
        </article>

        <article class="perspective-card perspective-card-staff">
          <div class="perspective-visual" aria-hidden="true">
            <div class="perspective-counter">
              <div class="ticket ticket-one">
                <span></span>
                <span></span>
              </div>
              <div class="ticket ticket-two">
                <span></span>
                <span></span>
              </div>
              <div class="ticket ticket-three">
                <span></span>
                <span></span>
              </div>
              <div class="counter-rail"></div>
              <div class="ready-chip">Ready</div>
            </div>
          </div>
          <div class="perspective-copy">
            <p class="perspective-role">Cafe staff perspective</p>
            <h3>The team keeping orders moving</h3>
            <p>
              Staff need preorder details to be easy to scan while they handle walk-in customers. Clear pickup times, item summaries, and ready states help the cafe prepare orders without adding extra confusion.
            </p>
          </div>
        </article>
      </div>
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
        <img loading="lazy" :src="wireframes" alt="Brew & Crumb wireframes" class="showcase-image" />
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
        <img loading="lazy" :src="prototypes" alt="High-fidelity screens" class="showcase-image" />
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
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "@/components/navbar.vue";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";

export default {
  name: "LocalBakeryApp",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  data() {
    return {
      hero: resolveAsset("@/images/kapihanHeroProfessional.png"),
      wireframes: resolveAsset("@/images/kapihanWireframes.webp"),
      prototypes: resolveAsset("@/images/kapihanPrototypes.webp"),
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
  font-size: clamp(3.5rem, 10vw, 6rem);
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

.bakery-perspectives-section {
  max-width: 1240px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
}

.bakery-perspectives-section .section-intro {
  max-width: 760px;
  margin-bottom: var(--space-6);
}

.perspective-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
  width: 100%;
}

.perspective-card {
  width: 100%;
  min-width: 0;
  min-height: 540px;
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.58);
  display: grid;
  grid-template-rows: minmax(260px, 1fr) auto;
  gap: var(--space-5);
  overflow: hidden;
}

.perspective-visual {
  min-height: 280px;
  border-radius: var(--radius-sm);
  background:
    linear-gradient(135deg, rgba(255, 249, 224, 0.9), rgba(255, 255, 255, 0.74)),
    radial-gradient(circle at 18% 20%, rgba(215, 162, 70, 0.18), transparent 34%);
  display: grid;
  place-items: center;
}

.perspective-card-staff .perspective-visual {
  background:
    linear-gradient(135deg, rgba(237, 247, 232, 0.92), rgba(255, 255, 255, 0.75)),
    radial-gradient(circle at 82% 22%, rgba(0, 50, 11, 0.14), transparent 38%);
}

.perspective-phone,
.perspective-counter {
  position: relative;
  width: min(78%, 320px);
  aspect-ratio: 0.78;
  border: 1px solid rgba(0, 50, 11, 0.14);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 24px 60px rgba(30, 24, 16, 0.12);
  animation: bakeryFloat 6s ease-in-out infinite;
}

.order-card,
.ticket {
  position: absolute;
  border-radius: var(--radius-sm);
  background: #fff;
  box-shadow: 0 12px 28px rgba(30, 24, 16, 0.1);
}

.order-card-primary {
  left: 14%;
  right: 14%;
  top: 18%;
  height: 28%;
  padding: 1rem;
}

.order-dot {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #d7a246;
  box-shadow: 0 0 0 10px rgba(215, 162, 70, 0.12);
}

.order-line {
  position: absolute;
  left: 4.5rem;
  height: 9px;
  border-radius: 999px;
  background: rgba(0, 50, 11, 0.18);
  animation: bakeryPulse 3.8s ease-in-out infinite;
}

.line-wide {
  top: 1.3rem;
  width: 42%;
}

.line-short {
  top: 2.35rem;
  width: 28%;
  animation-delay: 0.45s;
}

.pickup-chip,
.coffee-button,
.ready-chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: var(--weight-semibold);
  box-shadow: 0 10px 26px rgba(30, 24, 16, 0.12);
}

.pickup-chip {
  right: 13%;
  top: 50%;
  min-width: 72px;
  padding: 0.55rem 0.75rem;
  background: #fff;
  color: #00320b;
  animation: bakeryPulse 3.8s ease-in-out infinite;
}

.status-bar {
  position: absolute;
  left: 14%;
  right: 14%;
  bottom: 28%;
  height: 10px;
  border-radius: 999px;
  background: rgba(0, 50, 11, 0.12);
  overflow: hidden;
}

.status-bar span {
  display: block;
  width: 64%;
  height: 100%;
  border-radius: inherit;
  background: #00320b;
  animation: bakeryProgress 4.4s ease-in-out infinite;
}

.coffee-button {
  left: 22%;
  right: 22%;
  bottom: 12%;
  padding: 0.65rem 1rem;
  background: #00320b;
  color: #fff;
  font-size: 0.8rem;
}

.perspective-counter {
  border-radius: var(--radius-sm);
}

.ticket {
  left: 13%;
  width: 58%;
  min-height: 56px;
  padding: 0.8rem;
  animation: bakeryTicket 4.8s ease-in-out infinite;
}

.ticket span {
  display: block;
  height: 8px;
  border-radius: 999px;
  background: rgba(0, 50, 11, 0.18);
}

.ticket span + span {
  width: 56%;
  margin-top: 0.55rem;
  background: rgba(215, 162, 70, 0.42);
}

.ticket-one {
  top: 18%;
}

.ticket-two {
  top: 38%;
  animation-delay: 0.35s;
}

.ticket-three {
  top: 58%;
  animation-delay: 0.7s;
}

.counter-rail {
  position: absolute;
  top: 12%;
  right: 18%;
  bottom: 18%;
  width: 4px;
  border-radius: 999px;
  background: rgba(0, 50, 11, 0.16);
}

.ready-chip {
  right: 8%;
  bottom: 12%;
  min-width: 76px;
  padding: 0.55rem 0.8rem;
  background: #00320b;
  color: #fff;
  font-size: 0.78rem;
  animation: bakeryPulse 3.6s ease-in-out infinite;
}

.perspective-copy {
  max-width: 500px;
}

.perspective-role {
  margin: 0 0 var(--space-2);
  color: var(--color-text-muted);
  font-size: 0.7rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.perspective-copy h3 {
  margin: 0 0 var(--space-3);
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: var(--weight-semibold);
  line-height: 1.25;
}

.perspective-copy p:last-child {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.65;
}

@keyframes bakeryFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes bakeryPulse {
  0%, 100% {
    opacity: 0.72;
    transform: scaleX(0.92);
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes bakeryProgress {
  0%, 100% {
    width: 42%;
  }
  50% {
    width: 82%;
  }
}

@keyframes bakeryTicket {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
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

  .bakery-perspectives-section {
    padding: 0 var(--space-5);
    margin: var(--space-10) auto;
  }

  .perspective-grid {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }

  .perspective-card {
    min-height: 0;
    grid-template-rows: auto auto;
  }

  .perspective-visual {
    min-height: 260px;
  }

  .perspective-phone,
  .perspective-counter {
    width: min(78%, 280px);
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

  .perspective-card {
    padding: var(--space-4);
  }

  .perspective-visual {
    min-height: 240px;
  }

  .perspective-copy h3 {
    font-size: 1.1rem;
  }
}
</style>
