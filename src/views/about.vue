<template>
  <app-navbar></app-navbar>

  <main class="page-layout about-page">
    <section class="about-hero">
      <div class="about-hero__copy about-reveal">
        <p class="section-eyebrow">About</p>
        <h1 class="page-title">Eleni Chasioti</h1>
        <p class="page-subtitle">
          Product designer and engineer building precise, human-centered tools for spatial systems and digital workflows.
        </p>
      </div>

      <div class="about-hero__media about-reveal" aria-label="Conference and design moments">
        <img class="hero-photo hero-photo--primary" :src="conferenceImages[0].src" alt="Eleni at UXDX USA 2025" />
        <img class="hero-photo hero-photo--secondary" :src="conferenceImages[4].src" alt="UXDX conference moment" />
        <div class="hero-note">
          <span>Design systems</span>
          <span>Spatial tools</span>
          <span>Front-end craft</span>
        </div>
      </div>
    </section>

    <div class="about-marquee" aria-hidden="true">
      <span>ARCHITECTURE TO PRODUCT</span>
      <span>UX SYSTEMS</span>
      <span>COMPUTATIONAL DESIGN</span>
      <span>PRODUCT ENGINEERING</span>
    </div>

    <section class="about-glance about-reveal">
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
    </section>

    <section class="about-story">
      <aside class="story-sticky about-reveal">
        <p class="section-eyebrow">Profile</p>
        <h2>Designing where systems meet people.</h2>
        <div class="cta-section">
          <a :href="cvLink" download class="btn-primary cv-download">
            <span class="mdi mdi-download"></span>
            Download Resume
          </a>
          <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
            Get in Touch
          </a>
        </div>
      </aside>

      <div class="story-content">
        <article class="story-section about-reveal">
          <p class="story-index">01</p>
          <div>
            <h3>The Journey</h3>
            <p>
              I started in architecture, designing spaces and thinking about how people interact with environments.
              The transition to digital products felt natural. Both require understanding user needs, creating intuitive
              flows, and bringing complex systems to life. The tools changed, but the problem-solving mindset remained.
            </p>
          </div>
        </article>

        <article class="story-section about-reveal">
          <p class="story-index">02</p>
          <div>
            <h3>What I Do Now</h3>
            <p>
              As a <strong>Design Systems Analyst at Foster + Partners</strong>, I work at the intersection of design
              and engineering, creating tools and systems that help creative teams do their best work. From design systems
              to full web applications, I design and build solutions that make complex workflows feel effortless.
            </p>
          </div>
        </article>

        <article class="story-section about-reveal">
          <p class="story-index">03</p>
          <div>
            <h3>UXDX USA 2025</h3>
            <p>
              Last year, I attended <strong>UXDX USA 2025</strong> in New York, an incredible conference bringing
              together designers, developers, and product managers. It was inspiring to connect with industry leaders,
              explore emerging trends in product development, and share ideas about the future of design systems and
              collaborative workflows.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="gallery-section">
      <div class="gallery-header about-reveal">
        <p class="section-eyebrow">Field Notes</p>
        <h2>UXDX USA 2025</h2>
      </div>

      <div ref="masonryGallery" class="masonry-gallery">
        <figure
          v-for="(item, index) in conferenceImages"
          :key="index"
          :class="['gallery-item', `size-${item.size}`]"
          :style="{ '--i': index }"
        >
          <img :src="item.src" :alt="`UXDX Conference ${index + 1}`" loading="lazy" />
        </figure>
      </div>
    </section>

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
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.$nextTick(() => {
          document.querySelectorAll('.about-reveal, .gallery-item').forEach((el) => {
            el.classList.add('revealed');
          });
        });
        return;
      }

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
        document.querySelectorAll('.about-reveal').forEach((el) => {
          observer.observe(el);
        });

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
.about-page {
  min-height: 100vh;
  overflow: hidden;
  background: #f7f7f4;
  color: #111111;
}

.section-eyebrow {
  margin: 0 0 var(--space-4);
  color: rgba(17, 17, 17, 0.52);
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
}

.about-reveal,
.gallery-item {
  opacity: 0;
  transform: translateY(2.2rem);
  transition:
    opacity 760ms var(--ease-out),
    transform 760ms var(--ease-out);
  transition-delay: calc(var(--i, 0) * 60ms);
}

.about-reveal.revealed,
.gallery-item.revealed {
  opacity: 1;
  transform: translateY(0);
}

.about-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  gap: clamp(2rem, 6vw, 7rem);
  align-items: end;
  max-width: 1500px;
  margin: 0 auto;
  padding: clamp(5.5rem, 10vw, 9rem) clamp(1rem, 4vw, 4rem) clamp(3rem, 6vw, 6rem);
}

.about-hero__copy {
  position: relative;
  z-index: 2;
}

.page-title {
  max-width: 980px;
  margin: 0;
  color: #111111;
  font-family: var(--font-sans);
  font-size: clamp(4rem, 11.5vw, 12rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.84;
  text-transform: uppercase;
}

.page-subtitle {
  max-width: 660px;
  margin: var(--space-6) 0 0;
  color: rgba(17, 17, 17, 0.74);
  font-size: clamp(1.05rem, 1.7vw, 1.45rem);
  font-weight: var(--weight-semibold);
  line-height: 1.42;
}

.about-hero__media {
  position: relative;
  min-height: clamp(430px, 48vw, 680px);
}

.hero-photo {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  background: #111111;
}

.hero-photo--primary {
  right: 0;
  bottom: 0;
  width: min(78%, 430px);
  height: min(82%, 560px);
  z-index: 2;
}

.hero-photo--secondary {
  left: 0;
  top: 0;
  width: min(62%, 360px);
  height: min(52%, 360px);
  filter: saturate(0.9) contrast(1.02);
}

.hero-note {
  position: absolute;
  right: min(52%, 300px);
  bottom: clamp(1rem, 4vw, 3rem);
  z-index: 3;
  display: grid;
  gap: 0.35rem;
  max-width: 220px;
  padding: 1rem;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.84);
  color: rgba(17, 17, 17, 0.74);
  font-size: 0.8rem;
  font-weight: var(--weight-semibold);
  line-height: 1.2;
  text-transform: uppercase;
}

.about-marquee {
  display: flex;
  gap: clamp(1.5rem, 4vw, 3rem);
  width: auto;
  margin: 0 calc(50% - 50vw + 7px);
  padding: 0 clamp(1rem, 4vw, 4rem);
  overflow: hidden;
  border-top: 1px solid rgba(17, 17, 17, 0.1);
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  background: #ffffff;
  color: rgba(17, 17, 17, 0.52);
  font-size: clamp(0.72rem, 1vw, 0.9rem);
  font-weight: var(--weight-semibold);
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
}

.about-marquee span {
  flex: 0 0 auto;
  padding: 1rem 0;
}

.about-glance {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 4rem);
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
}

.glance-item {
  display: grid;
  gap: 0.45rem;
  min-height: 170px;
  padding: clamp(1.25rem, 3vw, 2.5rem);
  border-right: 1px solid rgba(17, 17, 17, 0.1);
  align-content: end;
}

.glance-item:first-child {
  border-left: 1px solid rgba(17, 17, 17, 0.1);
}

.glance-value {
  color: #111111;
  font-size: clamp(1.4rem, 3vw, 3.25rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.95;
  text-transform: uppercase;
}

.glance-label {
  max-width: 250px;
  color: rgba(17, 17, 17, 0.58);
  font-size: 0.8rem;
  font-weight: var(--weight-semibold);
  line-height: 1.35;
  text-transform: uppercase;
}

.about-story {
  display: grid;
  grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(2rem, 7vw, 8rem);
  max-width: 1500px;
  margin: 0 auto;
  padding: clamp(5rem, 10vw, 9rem) clamp(1rem, 4vw, 4rem);
}

.story-sticky {
  position: sticky;
  top: 88px;
  align-self: start;
}

.story-sticky h2 {
  max-width: 570px;
  margin: 0 0 var(--space-8);
  color: #111111;
  font-size: clamp(2.7rem, 6.5vw, 6.5rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.9;
  text-transform: uppercase;
}

.cta-section {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.cta-section .btn-primary,
.cta-section .btn-secondary {
  border-radius: var(--radius-full);
}

.story-content {
  display: grid;
  gap: var(--space-6);
}

.story-section {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(1rem, 3vw, 2.5rem);
  padding: clamp(1.25rem, 3vw, 2.5rem) 0;
  border-top: 1px solid rgba(17, 17, 17, 0.12);
}

.story-section:last-child {
  border-bottom: 1px solid rgba(17, 17, 17, 0.12);
}

.story-index {
  margin: 0.38rem 0 0;
  color: rgba(17, 17, 17, 0.32);
  font-size: 0.78rem;
  font-weight: var(--weight-semibold);
  line-height: 1;
}

.story-section h3 {
  margin: 0 0 var(--space-4);
  color: #111111;
  font-size: clamp(1.7rem, 3.2vw, 3.25rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.96;
  text-transform: uppercase;
}

.story-section p:not(.story-index) {
  max-width: 720px;
  margin: 0;
  color: rgba(17, 17, 17, 0.7);
  font-size: clamp(1rem, 1.25vw, 1.16rem);
  line-height: 1.72;
}

.story-section strong {
  color: #111111;
  font-weight: var(--weight-semibold);
}

.gallery-section {
  position: relative;
  margin: 0 calc(50% - 50vw + 7px);
  padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 4rem) clamp(6rem, 10vw, 9rem);
  background: #d8d6ce;
  color: #111111;
}

.gallery-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
  gap: var(--space-8);
  align-items: end;
  margin: 0 auto var(--space-8);
  max-width: 1500px;
}

.gallery-header h2 {
  grid-column: 1 / -1;
  margin: 0;
  color: #111111;
  font-size: clamp(3.4rem, 10vw, 10rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.82;
  text-transform: uppercase;
}

.masonry-gallery {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-flow: dense;
  gap: clamp(0.75rem, 1.5vw, 1.25rem);
  max-width: 1500px;
  margin: 0 auto;
}

.gallery-item {
  position: relative;
  grid-column: span 3;
  min-height: 240px;
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
  background: #111111;
}

.gallery-item.size-small {
  grid-column: span 3;
  min-height: clamp(220px, 25vw, 360px);
}

.gallery-item.size-medium {
  grid-column: span 4;
  min-height: clamp(300px, 33vw, 500px);
}

.gallery-item.size-large {
  grid-column: span 5;
  min-height: clamp(360px, 43vw, 640px);
}

.gallery-item:nth-child(4n + 2) {
  margin-top: clamp(2rem, 5vw, 5rem);
}

.gallery-item:nth-child(5n) {
  grid-column: span 6;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.92) contrast(1.03);
}

@media (prefers-reduced-motion: reduce) {
  .about-reveal,
  .gallery-item {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

@media (max-width: 1024px) {
  .about-hero,
  .about-story {
    grid-template-columns: 1fr;
  }

  .about-hero__media {
    min-height: 560px;
  }

  .story-sticky {
    position: static;
  }

  .masonry-gallery {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .gallery-item,
  .gallery-item.size-small,
  .gallery-item.size-medium,
  .gallery-item.size-large,
  .gallery-item:nth-child(5n) {
    grid-column: span 3;
  }
}

@media (max-width: 768px) {
  .about-hero {
    padding-top: var(--space-12);
  }

  .about-hero__media {
    min-height: 430px;
  }

  .hero-photo--primary {
    width: 74%;
  }

  .hero-photo--secondary {
    width: 58%;
  }

  .hero-note {
    right: auto;
    left: 0;
    bottom: 1rem;
  }

  .about-glance {
    grid-template-columns: 1fr;
    padding: 0 var(--space-5);
  }

  .glance-item,
  .glance-item:first-child {
    min-height: 130px;
    border-left: 1px solid rgba(17, 17, 17, 0.1);
  }

  .story-section {
    grid-template-columns: 1fr;
  }

  .cta-section {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-section .btn-primary,
  .cta-section .btn-secondary {
    justify-content: center;
  }

  .gallery-header {
    grid-template-columns: 1fr;
  }

  .masonry-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-item,
  .gallery-item.size-small,
  .gallery-item.size-medium,
  .gallery-item.size-large,
  .gallery-item:nth-child(5n) {
    grid-column: span 1;
    min-height: 300px;
  }
}

@media (max-width: 520px) {
  .about-hero,
  .about-story {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }

  .page-title,
  .gallery-header h2,
  .story-sticky h2 {
    font-size: clamp(3.1rem, 18vw, 5.6rem);
  }

  .about-hero__media {
    min-height: 360px;
  }

  .hero-note {
    max-width: 180px;
    font-size: 0.68rem;
  }

  .masonry-gallery {
    grid-template-columns: 1fr;
  }

  .gallery-item,
  .gallery-item.size-small,
  .gallery-item.size-medium,
  .gallery-item.size-large,
  .gallery-item:nth-child(5n) {
    grid-column: span 1;
    min-height: 360px;
    margin-top: 0;
  }
}
</style>
