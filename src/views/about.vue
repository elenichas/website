<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <div class="about-content">
        <header class="about-header">
          <h1 class="about-title">Hey, I'm Eleni!</h1>
          <p class="about-lead">Product designer and engineer bridging architecture, design systems, and digital product
            development.</p>
        </header>

        <div class="story-content">
          <section class="story-section">
            <h2>The Journey</h2>
            <p>
              I started in architecture, designing spaces and thinking about how people interact with environments.
              The transition to digital products felt natural! Both require understanding user needs, creating intuitive
              flows, and bringing complex systems to life. The tools changed, but the problem-solving mindset remained.
            </p>
          </section>

          <section class="story-section">
            <h2>What I Do Now</h2>
            <p>
              As a <strong>Design Systems Analyst at Foster + Partners</strong>, I work at the intersection of design
              and engineering,
              creating tools and systems that help creative teams do their best work. From design systems to full web
              applications,
              I design and build solutions that make complex workflows feel effortless.
            </p>
            <p>
              I believe the best products come from designers who can code and developers who truly understand users.
              My approach combines user research, prototyping, and hands-on development with React, TypeScript, and
              Vue.js.
            </p>
          </section>

          <section class="story-section">
            <h2>UXDX USA 2054</h2>
            <p>
              Last year, I attended <strong>UXDX USA 2025</strong> in New York, an incredible conference bringing
              together designers,
              developers, and product managers. It was inspiring to connect with industry leaders, explore emerging
              trends in
              product development, and share ideas about the future of design systems and collaborative workflows.
            </p>
            <p>
              The conference reinforced my belief that the best products emerge when design and engineering work
              seamlessly
              together,something I strive for in every project.
            </p>
          </section>

          <!-- Conference Gallery -->
          <section class="gallery-section">
            <div class="masonry-gallery">
              <div v-for="(item, index) in conferenceImages" :key="index"
                :class="['gallery-item', `size-${item.size}`]">
                <img :src="item.src" :alt="`UXDX Conference ${index + 1}`" />
              </div>
            </div>
          </section>

          <section class="story-section">
            <h2>Beyond the Work</h2>
            <p>
              I've led workshops at The Bartlett School of Architecture, exploring how AI and algorithmic thinking can
              enhance
              creative processes. I'm passionate about sustainable design, scalable systems, and the belief that
              technology
              should amplify human creativity rather than replace it.
            </p>
          </section>

          <section class="story-section">
            <h2>Let's Connect</h2>
            <p>
              I'm always excited to discuss product design, design systems, or the intersection of architecture and
              digital products.
              Let's chat!
            </p>
          </section>
        </div>

        <div class="cta-section">
          <a :href="cvLink" download class="btn-primary cv-download">
            <span class="mdi mdi-download"></span>
            Download Resume
          </a>
          <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";
import SkillSet from "../components/skillSet.vue";
import GithubAccount from "../components/githubAccount.vue";

// Use require if the image is inside the src/assets directory
const imageSrc = require("@/images/avatar.png"); // Use require if it's in the assets folder

// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/EleniChasiotiCV2026.pdf"; // This points to the public folder

export default {
  name: "About",
  components: {
    AppNavbar,
    SkillSet,
    GithubAccount,
  },
  data() {
    return {
      imageSrc,
      cvLink,
      conferenceImages: [
        { src: require('@/images/about/Image (3).jpg'), size: 'large' },
        { src: require('@/images/about/Image (4).jpg'), size: 'medium' },
        { src: require('@/images/about/Image (5).jpg'), size: 'small' },
        { src: require('@/images/about/Image (6).jpg'), size: 'medium' },
        { src: require('@/images/about/Image (7).jpg'), size: 'large' },
        { src: require('@/images/about/Image (8).jpg'), size: 'small' },
        { src: require('@/images/about/Image (9).jpg'), size: 'medium' },
        { src: require('@/images/about/Image (10).jpg'), size: 'small' },
        { src: require('@/images/about/Image (11).jpg'), size: 'large' },
        { src: require('@/images/about/Image (12).jpg'), size: 'medium' },
        { src: require('@/images/about/Image (13).jpg'), size: 'small' },
        { src: require('@/images/about/Image (14).jpg'), size: 'medium' },
        { src: require('@/images/about/Image (15).jpg'), size: 'large' },
        { src: require('@/images/about/Image (16).jpg'), size: 'small' },
        { src: require('@/images/about/Image (17).jpg'), size: 'medium' },
        { src: require('@/images/about/Image (18).jpg'), size: 'small' },
      ],
    };
  },
};
</script>

<style scoped>
/* Modern About Page Layout */
.page-layout {
  min-height: 100vh;
  background: var(--primary-bg);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

/* Header */
.about-header {
  text-align: center;
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--border-light);
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  letter-spacing: -0.02em;
}

.about-lead {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Story Content */
.story-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.story-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.story-section h2 {
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.story-section p {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

.story-section p strong {
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
}

/* CTA Section */
.cta-section {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  align-items: center;
  padding-top: var(--space-xl);
  border-top: 1px solid var(--border-light);
  flex-wrap: wrap;
}

.cv-download {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.cv-download .mdi {
  font-size: 1.125rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: var(--space-lg) var(--space-md);
  }

  .about-header {
    text-align: left;
  }

  .about-lead {
    margin-left: 0;
    margin-right: 0;
  }

  .cta-section {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: var(--space-md) var(--space-sm);
  }

  .story-section p {
    font-size: 1rem;
  }
}

/* Masonry Gallery */
.gallery-section {
  margin: var(--space-xl) 0;
}

.masonry-gallery {
  column-count: 3;
  column-gap: var(--space-md);
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: var(--space-md);
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
}

/* Varying tile sizes */
.gallery-item.size-small {
  height: auto;
}

.gallery-item.size-medium {
  height: auto;
}

.gallery-item.size-large {
  height: auto;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Responsive Masonry */
@media (max-width: 1024px) {
  .masonry-gallery {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .masonry-gallery {
    column-count: 1;
  }
}
</style>
