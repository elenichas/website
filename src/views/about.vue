<template>
  <app-navbar></app-navbar>

    <main class="page-layout">
    <div class="container">
      <div class="about-content">
        <header class="page-header">
          <p class="section-label">About</p>
          <h1 class="page-title">Eleni Chasioti</h1>
          <p class="page-subtitle">
            Product designer and engineer building precise, human-centered tools for spatial systems and digital workflows.
          </p>
        </header>

        <!-- At a Glance -->
        <section class="at-a-glance">
          <div class="glance-grid">
            <div class="glance-item">
              <span class="glance-value">5+</span>
              <span class="glance-label">Years in Design & Engineering</span>
            </div>
            <div class="glance-item">
              <span class="glance-value">Foster + Partners</span>
              <span class="glance-label">Design Systems Analyst</span>
            </div>
            <div class="glance-item">
              <span class="glance-value">MSc</span>
              <span class="glance-label">Architectural Computation, UCL</span>
            </div>
          </div>
        </section>

        <div class="cta-section">
          <a :href="cvLink" download class="btn-primary cv-download">
            <span class="mdi mdi-download"></span>
            Download Resume
          </a>
          <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
            Get in Touch
          </a>
        </div>
        <div class="story-content">
          <section class="story-section">
            <h2>The Journey</h2>
            <p>
              I started in architecture, designing spaces and thinking about how people interact with environments.
              The transition to digital products felt natural. Both require understanding user needs, creating intuitive
              flows, and bringing complex systems to life. The tools changed, but the problem-solving mindset remained.
            </p>
          </section>

          <section class="story-section">
            <h2>What I Do Now</h2>
            <p>
              As a <strong>Design Systems Analyst at Foster + Partners</strong>, I work at the intersection of design
              and engineering, creating tools and systems that help creative teams do their best work. From design systems
              to full web applications, I design and build solutions that make complex workflows feel effortless.
            </p>
          </section>

          <section class="story-section">
            <h2>UXDX USA 2025</h2>
            <p>
              Last year, I attended <strong>UXDX USA 2025</strong> in New York, an incredible conference bringing
              together designers, developers, and product managers. It was inspiring to connect with industry leaders,
              explore emerging trends in product development, and share ideas about the future of design systems and
              collaborative workflows.
            </p>
          </section>

                    <!-- Conference Gallery -->
          <section class="gallery-section">
            <div ref="masonryGallery" class="masonry-gallery">
              <div v-for="(item, index) in conferenceImages" :key="index"
                :class="['gallery-item', `size-${item.size}`]"
                :style="{ '--i': index }">
                <img :src="item.src" :alt="`UXDX Conference ${index + 1}`" loading="lazy" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <app-footer></app-footer>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppFooter from "../components/footer";

// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/EleniChasiotiCV2026.pdf";

export default {
  name: "About",
  components: {
    AppNavbar,
    AppFooter,
  },
  mounted() {
    this.initGalleryReveal();
  },
  methods: {
    initGalleryReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
            this.$nextTick(() => {
        const gallery = this.$refs.masonryGallery;
        if (gallery) {
          gallery.querySelectorAll('.gallery-item').forEach((el) => {
            observer.observe(el);
          });
        }
      });
    },
  },
  data() {
    return {
      cvLink,
      conferenceImages: [
        { src: require('@/images/about/Image (3).webp'), size: 'large' },
        { src: require('@/images/about/Image (4).webp'), size: 'medium' },
        { src: require('@/images/about/Image (5).webp'), size: 'small' },
        { src: require('@/images/about/Image (6).webp'), size: 'medium' },
        { src: require('@/images/about/Image (7).webp'), size: 'large' },
        { src: require('@/images/about/Image (8).webp'), size: 'small' },
        { src: require('@/images/about/Image (9).webp'), size: 'medium' },
        { src: require('@/images/about/Image (10).webp'), size: 'small' },
        { src: require('@/images/about/Image (11).webp'), size: 'large' },
        { src: require('@/images/about/Image (12).webp'), size: 'medium' },
        { src: require('@/images/about/Image (13).webp'), size: 'small' },
        { src: require('@/images/about/Image (14).webp'), size: 'medium' },
        { src: require('@/images/about/Image (15).webp'), size: 'large' },
        { src: require('@/images/about/Image (17).webp'), size: 'medium' },
        { src: require('@/images/about/Image (18).webp'), size: 'small' },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== ABOUT PAGE - Editorial Glass ===== */
.page-layout {
  min-height: 100vh;
  background: var(--color-bg);
}

.container {
  max-width: 760px;
  margin: 0 auto;
  padding: var(--space-20) var(--space-8);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.page-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-8);
}

.page-title {
  font-family: var(--font-sans);
  font-size: clamp(4rem, 9vw, 8rem);
  font-weight: var(--weight-bold);
  font-style: normal;
  color: var(--color-text);
  line-height: 0.95;
  letter-spacing: 0;
  text-transform: uppercase;
}

.page-subtitle {
  max-width: 38rem;
  margin-top: var(--space-5);
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.6;
}

/* At a Glance - subtle elevated card */
.at-a-glance {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-8) 0;
}

.glance-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.glance-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
}

.glance-value {
  font-size: 1.25rem;
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.glance-label {
  font-size: 0.6875rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  letter-spacing: 0.02em;
}

/* Story Content */
.story-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.story-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.story-section h2 {
  font-family: var(--font-sans);
  font-size: 1.75rem;
  font-weight: var(--weight-semibold);
  font-style: normal;
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;
  letter-spacing: 0;
}

.story-section p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin: 0;
}

.story-section p strong {
  color: var(--color-text);
  font-weight: var(--weight-semibold);
}

/* Gallery Section */
.gallery-section {
  margin: var(--space-4) 0;
}

.masonry-gallery {
  column-count: 3;
  column-gap: var(--space-3);
}

/* Gallery item entrance animation */
@keyframes galleryFadeIn {
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: var(--space-3);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  position: relative;

  /* Hidden before reveal */
  opacity: 0;
  transform: translateY(28px) scale(0.97);

  /* Hover transitions (applied after reveal) */
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Staggered entrance on scroll */
.gallery-item.revealed {
  animation: galleryFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--i, 0) * 0.07s);
}

/* Hover: lift + shadow + image zoom */
.gallery-item:hover {
  transform: translateY(-5px) scale(1.015);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-item:hover img {
  transform: scale(1.06);
  filter: brightness(1.04) contrast(1.02);
}

/* Subtle overlay shimmer on hover */
.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.04) 100%
  );
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  border-radius: var(--radius-md);
}

.gallery-item:hover::after {
  opacity: 1;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .gallery-item {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .gallery-item.revealed {
    animation: none;
  }
  .gallery-item img {
    transition: none;
  }
}

/* CTA Section */
.cta-section {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 1024px) {
  .masonry-gallery {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .container {
    padding: var(--space-10) var(--space-5);
  }

  .about-content {
    gap: var(--space-10);
  }

  .page-header {
    padding-bottom: var(--space-6);
  }

  .page-title {
    font-size: clamp(3rem, 14vw, 5rem);
  }

  .at-a-glance {
    padding: var(--space-6) 0;
  }

  .glance-grid {
    gap: var(--space-4);
  }

  .glance-value {
    font-size: 1rem;
  }

  .glance-label {
    font-size: 0.625rem;
  }

  .story-content {
    gap: var(--space-8);
  }

  .masonry-gallery {
    column-count: 2;
  }

  .cta-section {
    flex-direction: column;
    align-items: stretch;
    padding-top: var(--space-8);
  }

  .cta-section .btn-primary,
  .cta-section .btn-secondary {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: var(--space-8) var(--space-4);
  }

  .about-content {
    gap: var(--space-8);
  }

  .at-a-glance {
    padding: var(--space-5) 0;
  }

  .glance-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .glance-item {
    flex-direction: row;
    align-items: baseline;
    gap: 0.5rem;
    text-align: left;
  }

  .glance-value {
    min-width: fit-content;
  }

  .story-content {
    gap: var(--space-6);
  }

  .story-section h2 {
    font-size: 1.375rem;
  }

  .story-section p {
    font-size: 0.9375rem;
  }

  .masonry-gallery {
    column-count: 1;
  }

  .cta-section {
    padding-top: var(--space-6);
  }
}
</style>
