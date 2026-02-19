<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <div class="about-content">
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
          </section>

          <section class="story-section">
            <h2>UXDX USA 2025</h2>
            <p>
              Last year, I attended <strong>UXDX USA 2025</strong> in New York, an incredible conference bringing
              together designers,
              developers, and product managers. It was inspiring to connect with industry leaders, explore emerging
              trends in
              product development, and share ideas about the future of design systems and collaborative workflows.
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
/* Minimal Editorial About Page */
.page-layout {
  min-height: 100vh;
  background: #fff;
}

.container {
  max-width: 760px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Header */
.about-header {
  text-align: center;
  padding-bottom: 3rem;
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.about-lead {
  font-size: 1.25rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

/* Story Content */
.story-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.story-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story-section h2 {
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  color: #000;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1.3;
}

.story-section p {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
}

.story-section p strong {
  color: #000;
  font-weight: 600;
}

/* Gallery Section */
.gallery-section {
  margin: 2rem 0;
}

.masonry-gallery {
  column-count: 3;
  column-gap: 1rem;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

/* CTA Section */
.cta-section {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.875rem 1.75rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.btn-primary {
  background: #1a1a1a;
  color: white;
}

.btn-primary:hover {
  background: #333;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
}

.btn-secondary:hover {
  background: #1a1a1a;
  color: white;
}

.cv-download .mdi {
  font-size: 1.125rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .masonry-gallery {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 4rem 1.5rem;
  }

  .about-header {
    text-align: left;
    padding-bottom: 2rem;
  }

  .masonry-gallery {
    column-count: 1;
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
    padding: 3rem 1.5rem;
  }

  .story-section p {
    font-size: 1rem;
  }
}
</style>
