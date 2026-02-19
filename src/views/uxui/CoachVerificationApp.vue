<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Coach Authenticity Verifier" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Authentication System</p>
      <h1 class="project-title">Coach Authenticity Verifier</h1>
      <p class="project-intro">
        A mobile authentication system empowering consumers and retailers to verify the authenticity of Coach luxury bags through AI-powered analysis.
      </p>
      <div class="project-meta">
        <span class="meta-item">Product Design & UX</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Concept Project</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">AI & Computer Vision</span>
      </div>
    </div>

    <!-- Problem Space -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Fighting counterfeit luxury goods</h2>
      <p class="body-text">
        The luxury goods market faces a significant counterfeit problem, with fake products becoming increasingly sophisticated. Consumers purchasing pre-owned Coach bags online or through resellers struggle to verify authenticity, risking money on fake products.
      </p>
      <p class="body-text">
        Traditional authentication requires expert knowledge and physical inspection, making it inaccessible for most buyers and slow for retailers managing inventory.
      </p>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">AI-powered instant verification</h2>
        <p class="body-text">
          A mobile app that uses computer vision and machine learning to analyze bag details, comparing them against authenticated Coach products to provide instant verification results.
        </p>
      </div>
      <div class="split-media media-container-yellow">
        <img :src="appInterface" alt="App Interface" class="split-image" />
      </div>
    </section>

    <!-- Key Features -->
    <section class="content-section">
      <p class="section-label">Features</p>
      <h2 class="section-heading">Comprehensive authentication system</h2>
      <ul class="simple-list">
        <li><strong>Photo Analysis</strong> — Snap photos of key bag details for AI-powered authenticity checking</li>
        <li><strong>Serial Number Verification</strong> — Database lookup cross-references serial numbers with official Coach records</li>
        <li><strong>Material Analysis</strong> — Computer vision evaluates leather quality, stitching, and hardware details</li>
        <li><strong>Authentication Report</strong> — Detailed breakdown of verification results with confidence scores</li>
        <li><strong>Expert Review</strong> — Option to escalate uncertain cases to human authenticators</li>
        <li><strong>History Tracking</strong> — Save verification history and access past authentication reports</li>
      </ul>
    </section>

    <!-- Verification Process -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-purple">
        <img :src="verificationFlow" alt="Verification Flow" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Process</p>
        <h3 class="section-heading">Simple, guided verification</h3>
        <p class="body-text">
          Users are guided to photograph specific areas: serial number, hardware, stitching, logo, interior lining, and overall construction. The app provides real-time feedback on photo quality.
        </p>
      </div>
    </section>

    <!-- Visual System -->
    <section class="content-section">
      <p class="section-label">Visual Design</p>
      <h2 class="section-heading">Professional and trustworthy</h2>
      <p class="body-text">
        The visual identity conveys trust and sophistication, matching Coach's luxury brand positioning. A clean interface with premium typography ensures the app feels reliable and professional.
      </p>
      <figure class="image-figure">
        <img :src="visualDesign" alt="Visual Design System" class="content-image" />
      </figure>
    </section>

    <!-- AI Analysis -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Technology</p>
        <h3 class="section-heading">Machine learning detection</h3>
        <p class="body-text">
          The system analyzes stitching patterns, hardware quality, leather texture, logo placement, and serial number formats using trained neural networks to identify counterfeit indicators.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="aiAnalysis" alt="AI Analysis Process" class="split-image" />
      </div>
    </section>

    <!-- Results & Reports -->
    <section class="content-section">
      <p class="section-label">Results</p>
      <h2 class="section-heading">Clear, actionable outcomes</h2>
      <p class="body-text">
        Results are presented in three categories: Authentic, Likely Counterfeit, or Uncertain. Each result includes detailed explanations of factors analyzed, confidence scores, and recommended next steps.
      </p>
      <figure class="image-figure">
        <img :src="resultScreens" alt="Result Screens" class="content-image" />
      </figure>
    </section>

    <!-- User Types -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-green">
        <img :src="userTypes" alt="Different User Types" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Users</p>
        <h3 class="section-heading">Designed for multiple audiences</h3>
        <p class="body-text">
          The app serves individual buyers verifying online purchases, resale shops authenticating inventory, and collectors managing their collections.
        </p>
      </div>
    </section>

    <!-- Design Decisions -->
    <section class="content-section">
      <p class="section-label">Design Approach</p>
      <h2 class="section-heading">Building confidence in AI results</h2>
      <p class="body-text">
        A key challenge was helping users trust AI-generated results. The design makes the verification process transparent, showing what the system analyzes and why. Clear confidence indicators help users understand result reliability.
      </p>
      <p class="body-text">
        Photo guidance was critical—the system needs quality images to work effectively. Interactive overlays and real-time feedback ensure users capture the right shots from the correct angles.
      </p>
    </section>

    <!-- Impact -->
    <section class="content-section">
      <p class="section-label">Impact</p>
      <h2 class="section-heading">Democratizing authentication</h2>
      <p class="body-text">
        By making authentication accessible through a mobile app, the system empowers buyers to make informed decisions and reduces the market for counterfeit goods. Retailers gain a scalable solution for verifying inventory authenticity.
      </p>
      <p class="body-text">
        The technology demonstrates how AI can solve real-world problems in product verification while maintaining trust through transparent, explainable results.
      </p>
    </section>

    <!-- Learning -->
    <section class="content-section">
      <p class="section-label">Reflection</p>
      <h2 class="section-heading">Designing for AI transparency</h2>
      <p class="body-text">
        This project taught me the importance of explaining AI decisions to users. Rather than presenting verification as a black box, the design reveals the process, helping users understand and trust the results.
      </p>
      <p class="body-text">
        I learned to balance automation with human expertise, designing escalation paths for cases where AI confidence is low, ensuring users always have recourse to human verification when needed.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "CoachVerificationApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/gallery/coach.png"),
      appInterface: require("@/images/gallery/coach.png"),
      verificationFlow: require("@/images/gallery/coach.png"),
      visualDesign: require("@/images/gallery/coach.png"),
      aiAnalysis: require("@/images/gallery/coach.png"),
      resultScreens: require("@/images/gallery/coach.png"),
      userTypes: require("@/images/gallery/coach.png"),
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

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
</style>
