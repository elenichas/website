<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="LingoLeap Language Learning App" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Mobile Learning Platform</p>
      <h1 class="project-title">LingoLeap</h1>
      <p class="project-intro">
        A gamified language learning app that makes mastering new languages engaging, accessible, and effective through adaptive learning and real-world practice.
      </p>
      <div class="project-meta">
        <span class="meta-item">UX/UI Design</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Concept Project</span>
        <span class="meta-divider">·</span>
        <span class="meta-item">Educational Technology</span>
      </div>
    </div>

    <!-- Problem Space -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Making language learning stick</h2>
      <p class="body-text">
        Traditional language learning apps often focus on vocabulary memorization but fail to build real conversational confidence. Users lose motivation when lessons feel disconnected from practical use, and progress tracking doesn't reflect true communication ability.
      </p>
      <p class="body-text">
        Learners need a system that adapts to their pace, provides contextual learning, and creates opportunities for authentic practice.
      </p>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">Adaptive learning through immersion</h2>
        <p class="body-text">
          LingoLeap combines bite-sized lessons, real-world scenarios, AI-powered conversation practice, and community features to build genuine language competency.
        </p>
      </div>
      <div class="split-media media-container-purple">
        <img :src="appInterface" alt="App Interface" class="split-image" />
      </div>
    </section>

    <!-- Key Features -->
    <section class="content-section">
      <p class="section-label">Features</p>
      <h2 class="section-heading">Learning that adapts to you</h2>
      <ul class="simple-list">
        <li><strong>Adaptive Learning Path</strong>  System adjusts difficulty and content based on your progress and learning style</li>
        <li><strong>Real-World Scenarios</strong>  Practice conversations for travel, business, or daily life situations</li>
        <li><strong>AI Conversation Partner</strong>  Voice-based practice with instant feedback on pronunciation and grammar</li>
        <li><strong>Gamified Progress</strong>  Streaks, achievements, and challenges keep motivation high</li>
        <li><strong>Community Practice</strong>  Connect with native speakers for language exchange</li>
        <li><strong>Offline Mode</strong>  Download lessons for learning anywhere, anytime</li>
      </ul>
    </section>

    <!-- Learning Flow -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-green">
        <img :src="learningFlow" alt="Learning Flow" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Experience</p>
        <h3 class="section-heading">Structured yet flexible</h3>
        <p class="body-text">
          Each lesson introduces new concepts through contextual examples, reinforces them with interactive exercises, and applies them in conversation scenarios.
        </p>
      </div>
    </section>

    <!-- Visual Design -->
    <section class="content-section">
      <p class="section-label">Visual Identity</p>
      <h2 class="section-heading">Friendly and encouraging</h2>
      <p class="body-text">
        The visual design uses warm, approachable colors and playful illustrations to reduce anxiety around language learning. Clear typography ensures readability for learners at all levels.
      </p>
      <figure class="image-figure">
        <img :src="visualDesign" alt="Visual Design System" class="content-image" />
      </figure>
    </section>

    <!-- Progress Tracking -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Progress</p>
        <h3 class="section-heading">Meaningful metrics</h3>
        <p class="body-text">
          Track not just lessons completed, but real competency growth across reading, writing, listening, and speaking. Visual progress indicators show improvement over time.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="progressTracking" alt="Progress Tracking" class="split-image" />
      </div>
    </section>

    <!-- Conversation Practice -->
    <section class="content-section">
      <p class="section-label">Practice</p>
      <h2 class="section-heading">AI-powered conversation</h2>
      <p class="body-text">
        The AI conversation partner simulates real interactions, adapting to your skill level and providing constructive feedback. Practice ordering at restaurants, asking for directions, or discussing hobbies in a judgment-free environment.
      </p>
      <figure class="image-figure">
        <img :src="conversationPractice" alt="Conversation Practice Interface" class="content-image" />
      </figure>
    </section>

    <!-- Design Decisions -->
    <section class="content-section">
      <p class="section-label">Design Approach</p>
      <h2 class="section-heading">Building confidence through design</h2>
      <p class="body-text">
        Every design decision focused on reducing learning anxiety and building confidence. Positive reinforcement is emphasized over penalties, mistakes are framed as learning opportunities, and progress is celebrated frequently.
      </p>
      <p class="body-text">
        The interface progressively introduces complexity—beginners see simplified options while advanced learners access detailed grammar explanations and cultural context.
      </p>
    </section>

    <!-- Learning -->
    <section class="content-section">
      <p class="section-label">Reflection</p>
      <h2 class="section-heading">Designing for motivation</h2>
      <p class="body-text">
        This project taught me the importance of understanding user psychology in educational design. Language learning requires sustained motivation, which means the design must balance challenge with encouragement.
      </p>
      <p class="body-text">
        I learned to design feedback systems that feel rewarding without being manipulative, and to create learning pathways that respect different learning styles and goals.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "LanguageLearningApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/gallery/language.png"),
      appInterface: require("@/images/gallery/language.png"),
      learningFlow: require("@/images/gallery/language.png"),
      visualDesign: require("@/images/gallery/language.png"),
      progressTracking: require("@/images/gallery/language.png"),
      conversationPractice: require("@/images/gallery/language.png"),
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
