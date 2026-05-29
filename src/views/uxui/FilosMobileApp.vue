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
          A course project exploring how a mobile app could help people with disabilities and volunteers connect through shared activities, with early input from a special needs teacher and students.
        </p>
      </div>
    </div>

        <!-- Problem Space -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Breaking down barriers to connection</h2>
      <p class="body-text">
        People with disabilities can face physical, sensory, and social barriers to participation, while people who want to support or volunteer often do not know how to build meaningful connections respectfully. The project explored how a digital service could reduce uncertainty, support trust, and make shared activities easier to arrange.
      </p>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">A platform for shared experiences</h2>
        <p class="body-text">
          Filos proposes a mobile experience where people can create profiles, share access needs and preferences, propose activities, and connect around everyday experiences. The name means "friendship" in Greek.
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
        Understanding the people who would use Filos was essential. As part of the course project, I consulted my sister, a special needs teacher, and had a couple of early feedback sessions with her students. The concept considered a range of access needs, including wheelchair access, blindness, and autism.
      </p>
    </section>

    <!-- Use Scenarios -->
    <section class="content-section-wide scenario-section">
      <div class="section-intro">
        <p class="section-label">Use Scenarios</p>
        <h2 class="section-heading">Two perspectives behind the concept</h2>
        <p class="body-text">
          Instead of fictional character portraits, the project can be read through two practical situations: someone with special-education experience helping shape safe support, and someone with access needs looking for a respectful way to join everyday activities.
        </p>
      </div>
      <div class="scenario-grid">
        <article class="scenario-card scenario-card-teacher">
          <div class="scenario-visual" aria-hidden="true">
            <div class="scenario-device">
              <span class="scenario-dot dot-one"></span>
              <span class="scenario-dot dot-two"></span>
              <span class="scenario-dot dot-three"></span>
              <div class="scenario-line line-one"></div>
              <div class="scenario-line line-two"></div>
              <div class="scenario-line line-three"></div>
              <div class="scenario-chip chip-one">Needs</div>
              <div class="scenario-chip chip-two">Plan</div>
            </div>
          </div>
          <div class="scenario-copy">
            <p class="scenario-role">Special-education perspective</p>
            <h3>The advisor who checks whether support is realistic</h3>
            <p>
              A special-education professional or student could use Filos to review profiles, clarify access needs, and help volunteers understand what makes an activity safe, respectful, and manageable before a meeting is arranged.
            </p>
          </div>
        </article>

        <article class="scenario-card scenario-card-user">
          <div class="scenario-visual" aria-hidden="true">
            <div class="scenario-device">
              <span class="scenario-node node-main"></span>
              <span class="scenario-node node-top"></span>
              <span class="scenario-node node-right"></span>
              <span class="scenario-node node-bottom"></span>
              <div class="scenario-route route-one"></div>
              <div class="scenario-route route-two"></div>
              <div class="scenario-route route-three"></div>
              <div class="scenario-chip chip-three">Cafe</div>
              <div class="scenario-chip chip-four">Quiet</div>
            </div>
          </div>
          <div class="scenario-copy">
            <p class="scenario-role">Participant perspective</p>
            <h3>The person choosing connection on their own terms</h3>
            <p>
              A person with a disability could use the app to express preferences, find activities that fit their needs, and decide what information to share before connecting with a volunteer around a simple shared plan.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- Design Priorities -->
    <section class="content-section-wide design-priorities-section">
      <div class="section-intro">
        <p class="section-label">Design Priorities</p>
        <h2 class="section-heading">Making support feel respectful and easy to arrange</h2>
      </div>
      <div class="priority-grid">
        <article class="priority-card">
          <h3>Access needs first</h3>
          <p>Profiles make practical needs visible early, so activities can be planned around mobility, sensory comfort, communication preferences, or other support requirements.</p>
        </article>
        <article class="priority-card">
          <h3>Trust before matching</h3>
          <p>The experience focuses on clear expectations, simple choices, and gentle onboarding instead of pushing people quickly into conversations.</p>
        </article>
        <article class="priority-card">
          <h3>Shared activities</h3>
          <p>Connection is framed around everyday experiences, helping volunteers and participants start from mutual interests rather than abstract offers of help.</p>
        </article>
      </div>
    </section>

    <!-- Prototype Screens -->
    <section class="content-section-wide visual-showcase">
      <div class="section-intro">
        <p class="section-label">Screens</p>
        <h2 class="section-heading">Key prototype flows</h2>
        <p class="body-text">
          The prototype explores onboarding, profile setup, activity discovery, and connection moments as a lightweight service journey rather than a single matching screen.
        </p>
      </div>
      <figure class="wide-image-frame">
        <img :src="prototypes" alt="Filos high fidelity prototype screens" class="wide-image" />
      </figure>
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
        I created a visual identity emphasizing inclusivity and trust. The interface uses large controls, clear navigation, high-contrast elements, and simple flows so the concept could be discussed through an accessibility lens from the beginning.
      </p>
    </section>

    <!-- Responsive Design -->
    <section class="content-section-wide visual-showcase">
      <div class="section-intro">
        <p class="section-label">Responsive System</p>
        <h2 class="section-heading">A calmer interface across screen sizes</h2>
        <p class="body-text">
          The responsive layouts keep the same emphasis on legibility, clear hierarchy, and accessible actions, so the concept can be understood across different devices and presentation formats.
        </p>
      </div>
      <figure class="wide-image-frame">
        <img :src="responsive" alt="Filos responsive interface layouts" class="wide-image" />
      </figure>
    </section>

            <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">Learning</p>
      <h2 class="section-heading">Practicing inclusive design</h2>
      <p class="body-text">
        Through this course project, I learned to treat accessibility as a starting point rather than a final checklist. The concept is still early, but it came from genuine interest and direct conversations that helped me think more carefully about safety, trust, autonomy, and different access needs.
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
      hero: require("@/images/filosHeroProfessional.png"),
      wireframes: require("@/images/filosWireframes.webp"),
      prototypes: require("@/images/filosPrototypes.webp"),
      responsive: require("@/images/filosResponsive.webp"),
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

@keyframes scenarioPulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scaleX(0.74);
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes scenarioFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes scenarioRoute {
  0%,
  100% {
    opacity: 0.35;
    transform: scaleX(0.55);
  }
  50% {
    opacity: 0.9;
    transform: scaleX(1);
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

.content-section-wide {
  max-width: 1180px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.section-intro {
  max-width: 760px;
  margin-bottom: var(--space-6);
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

.scenario-section {
  margin-top: var(--space-4);
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
}

.scenario-card {
  min-height: 560px;
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.58);
  display: grid;
  grid-template-rows: minmax(260px, 1fr) auto;
  gap: var(--space-5);
  overflow: hidden;
}

.scenario-visual {
  min-height: 280px;
  border-radius: var(--radius-sm);
  background:
    linear-gradient(135deg, rgba(240, 232, 255, 0.86), rgba(255, 255, 255, 0.7)),
    radial-gradient(circle at 25% 20%, rgba(117, 83, 173, 0.18), transparent 34%);
  display: grid;
  place-items: center;
}

.scenario-card-user .scenario-visual {
  background:
    linear-gradient(135deg, rgba(239, 247, 244, 0.94), rgba(255, 255, 255, 0.72)),
    radial-gradient(circle at 80% 24%, rgba(52, 124, 105, 0.16), transparent 36%);
}

.scenario-device {
  position: relative;
  width: min(78%, 320px);
  aspect-ratio: 0.78;
  border: 1px solid rgba(70, 50, 100, 0.16);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 24px 60px rgba(38, 31, 52, 0.12);
  animation: scenarioFloat 6s ease-in-out infinite;
}

.scenario-line,
.scenario-route {
  position: absolute;
  left: 18%;
  height: 10px;
  border-radius: 999px;
  background: rgba(86, 57, 135, 0.22);
  transform-origin: left center;
  animation: scenarioPulse 3.8s ease-in-out infinite;
}

.line-one {
  top: 22%;
  width: 58%;
}

.line-two {
  top: 34%;
  width: 44%;
  animation-delay: 0.45s;
}

.line-three {
  top: 46%;
  width: 66%;
  animation-delay: 0.9s;
}

.scenario-dot,
.scenario-node {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #6f44b2;
  box-shadow: 0 0 0 10px rgba(111, 68, 178, 0.09);
}

.dot-one {
  top: 20%;
  left: 10%;
}

.dot-two {
  top: 32%;
  left: 10%;
}

.dot-three {
  top: 44%;
  left: 10%;
}

.scenario-chip {
  position: absolute;
  min-width: 72px;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 10px 26px rgba(38, 31, 52, 0.1);
  color: var(--color-text);
  font-size: 0.75rem;
  font-weight: var(--weight-semibold);
  text-align: center;
}

.chip-one {
  right: 12%;
  bottom: 28%;
}

.chip-two {
  left: 14%;
  bottom: 14%;
}

.node-main {
  top: 45%;
  left: 45%;
  width: 24px;
  height: 24px;
  background: #347c69;
  box-shadow: 0 0 0 12px rgba(52, 124, 105, 0.1);
}

.node-top {
  top: 22%;
  left: 28%;
  background: #8f63c8;
}

.node-right {
  top: 34%;
  right: 18%;
  background: #8f63c8;
}

.node-bottom {
  left: 22%;
  bottom: 20%;
  background: #8f63c8;
}

.scenario-route {
  left: 31%;
  top: 31%;
  width: 34%;
  height: 4px;
  background: rgba(52, 124, 105, 0.35);
  transform: rotate(22deg) scaleX(0.65);
  animation: scenarioRoute 4.2s ease-in-out infinite;
}

.route-two {
  left: 48%;
  top: 46%;
  width: 30%;
  transform: rotate(-22deg) scaleX(0.65);
  animation-delay: 0.5s;
}

.route-three {
  left: 29%;
  top: 57%;
  width: 30%;
  transform: rotate(-46deg) scaleX(0.65);
  animation-delay: 1s;
}

.chip-three {
  right: 10%;
  bottom: 18%;
}

.chip-four {
  left: 12%;
  top: 14%;
}

.scenario-copy {
  max-width: 500px;
}

.scenario-role {
  margin: 0 0 var(--space-2);
  color: var(--color-text-muted);
  font-size: 0.6875rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.scenario-copy h3 {
  margin: 0 0 var(--space-3);
  color: var(--color-text);
  font-size: 1.35rem;
  line-height: 1.25;
}

.scenario-copy p:not(.scenario-role) {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.65;
}

.design-priorities-section {
  margin-top: var(--space-4);
}

.priority-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.priority-card {
  min-height: 260px;
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.52);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.priority-card h3 {
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 0 0 var(--space-3);
  color: var(--color-text);
}

.priority-card p {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--color-text-secondary);
  margin: 0;
}

.wide-image-frame {
  margin: 0;
  padding: var(--space-5);
  border-radius: var(--radius-sm);
  background: rgba(240, 232, 255, 0.45);
}

.wide-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
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

  .content-section-wide {
    padding: 0 var(--space-5);
  }

  .section-intro {
    margin-bottom: var(--space-4);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
  }

  .scenario-card {
    min-height: 0;
    padding: var(--space-4);
    grid-template-rows: auto auto;
  }

  .scenario-visual {
    min-height: 220px;
  }

  .scenario-device {
    width: min(72%, 240px);
  }

  .scenario-copy h3 {
    font-size: 1.2rem;
  }

  .priority-grid {
    grid-template-columns: 1fr;
  }

  .priority-card {
    min-height: 0;
    padding: var(--space-4);
  }

  .priority-card h3 {
    margin-bottom: var(--space-2);
  }

  .wide-image-frame {
    padding: var(--space-3);
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

  .scenario-visual {
    min-height: 190px;
  }

  .scenario-chip {
    min-width: 64px;
    padding: 0.4rem 0.6rem;
    font-size: 0.6875rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scenario-device,
  .scenario-line,
  .scenario-route {
    animation: none;
  }
}
</style>
