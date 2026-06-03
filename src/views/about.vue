<template>
  <app-navbar></app-navbar>

  <main class="page-layout about-page">
    <div class="about-container">
      <section class="about-hero">
        <div class="about-hero__shell">
          <div class="about-hero__copy about-reveal">
            <p class="section-eyebrow">{{ $t("about.eyebrow") }}</p>
            <h1 class="page-title">Eleni Chasioti</h1>
            <p class="page-subtitle">{{ $t("about.subtitle") }}</p>
            <div class="hero-actions">
              <a :href="cvLink" download class="btn-primary cv-download">
                <span class="mdi mdi-download"></span>
                {{ $t("common.downloadResume") }}
              </a>
              <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
                {{ $t("common.getInTouch") }}
              </a>
            </div>
          </div>

        </div>
      </section>

      <section class="about-glance about-reveal">
        <div class="glance-item">
          <span class="glance-value">5+</span>
          <span class="glance-label">{{ $t("about.glanceYears") }}</span>
        </div>
        <div class="glance-item">
          <span class="glance-value">{{ $t("about.glanceRole") }}</span>
          <span class="glance-label">Foster + Partners</span>
        </div>
        <div class="glance-item">
          <span class="glance-value">MSc</span>
          <span class="glance-label">{{ $t("about.glanceEducation") }}</span>
        </div>
      </section>
    </div>

    <div class="about-marquee" aria-hidden="true">
      <span v-for="item in $t('about.marquee')" :key="item">{{ item }}</span>
    </div>

    <section class="about-story">
      <div class="about-container story-grid">
        <aside class="story-sticky about-reveal">
          <p class="section-eyebrow">{{ $t("about.profile") }}</p>
          <h2>{{ $t("about.profileHeading") }}</h2>
        </aside>

        <div class="story-content">
          <article class="story-section about-reveal">
            <p class="story-index">01</p>
            <div>
              <h3>{{ $t("about.journeyTitle") }}</h3>
              <p>{{ $t("about.journeyText") }}</p>
            </div>
          </article>

          <article class="story-section about-reveal">
            <p class="story-index">02</p>
            <div>
              <h3>{{ $t("about.nowTitle") }}</h3>
              <p>{{ $t("about.nowText") }}</p>
            </div>
          </article>

          <article class="story-section about-reveal">
            <p class="story-index">03</p>
            <div>
              <h3>{{ $t("about.conferenceTitle") }}</h3>
              <p>{{ $t("about.conferenceText") }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <div class="about-container">
        <div class="gallery-header about-reveal">
          <p class="section-eyebrow">{{ $t("about.fieldNotes") }}</p>
          <h2>{{ $t("about.conferenceTitle") }}</h2>
        </div>

        <div class="image-carousel about-reveal">
          <div class="carousel-stage">
            <figure
              v-for="(item, index) in conferenceImages"
              :key="index"
              class="carousel-slide"
              :class="{ active: index === currentSlide }"
              :aria-hidden="index !== currentSlide"
            >
              <img :src="item.src" :alt="`${$t('about.galleryAlt')} ${index + 1}`" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  </main>
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "../components/navbar.vue";
import AppFooter from "../components/footer.vue";

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
    this.startCarousel();
  },
  beforeUnmount() {
    this.pauseCarousel();
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
      });
    },
    startCarousel() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || this.carouselTimer) {
        return;
      }

      this.carouselTimer = window.setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.conferenceImages.length;
      }, 3200);
    },
    pauseCarousel() {
      if (this.carouselTimer) {
        window.clearInterval(this.carouselTimer);
        this.carouselTimer = null;
      }
    },
  },
  data() {
    return {
      cvLink,
      currentSlide: 0,
      carouselTimer: null,
      conferenceImages: [
        { src: resolveAsset('@/images/about/Image (3).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (4).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (5).webp'), shape: 'wide' },
        { src: resolveAsset('@/images/about/Image (6).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (7).webp'), shape: 'square' },
        { src: resolveAsset('@/images/about/Image (8).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (9).webp'), shape: 'poster' },
        { src: resolveAsset('@/images/about/Image (10).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (11).webp'), shape: 'wide' },
        { src: resolveAsset('@/images/about/Image (12).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (13).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (14).webp'), shape: 'poster' },
        { src: resolveAsset('@/images/about/Image (15).webp'), shape: 'wide' },
        { src: resolveAsset('@/images/about/Image (17).webp'), shape: 'tall' },
        { src: resolveAsset('@/images/about/Image (18).webp'), shape: 'square' },
      ],
    };
  },
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  overflow: visible;
  background: var(--color-bg);
  color: #111111;
}

.about-container {
  position: relative;
  z-index: 1;
  width: min(100%, 1240px);
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.about-page :deep(.footer) {
  position: relative;
  z-index: 2;
  margin-top: 0;
}

.section-eyebrow {
  margin: 0;
  color: rgba(17, 17, 17, 0.52);
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
}

.about-reveal {
  opacity: 0;
  transform: translateY(2.2rem);
  transition:
    opacity 760ms var(--ease-out),
    transform 760ms var(--ease-out);
  transition-delay: calc(var(--i, 0) * 60ms);
}

.about-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

.about-hero {
  padding: var(--space-8) 0 var(--space-6);
}

.about-hero__shell {
  position: relative;
  min-height: clamp(500px, calc(100vh - 180px), 640px);
  overflow: hidden;
  background: var(--color-bg);
}

.about-hero__copy {
  position: relative;
  z-index: 2;
  max-width: 980px;
  padding: clamp(1.25rem, 2.8vw, 2.4rem) 0;
}

.page-title {
  max-width: 8.8ch;
  margin: var(--space-5) 0 0;
  color: #111111;
  font-family: var(--font-sans);
  font-size: clamp(4.6rem, 10vw, 10.6rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.82;
  text-transform: uppercase;
}

.page-subtitle {
  max-width: 620px;
  margin: clamp(1.5rem, 2.4vw, 2.25rem) 0 0;
  color: rgba(17, 17, 17, 0.74);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: var(--weight-semibold);
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: clamp(1.35rem, 2vw, 1.8rem);
}

.hero-actions .btn-primary,
.hero-actions .btn-secondary {
  border-radius: var(--radius-full);
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
  background: var(--color-bg);
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
  margin: 0 0 var(--space-10);
  overflow: hidden;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 10px;
  background: #f7f7f4;
}

.glance-item {
  display: grid;
  gap: 0.35rem;
  min-height: 108px;
  padding: clamp(0.9rem, 1.8vw, 1.35rem);
  border-right: 1px solid rgba(17, 17, 17, 0.1);
  align-content: end;
}

.glance-item:last-child {
  border-right: 0;
}

.glance-value {
  color: #111111;
  font-size: clamp(1.2rem, 2vw, 2.15rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.95;
  text-transform: uppercase;
}

.glance-label {
  max-width: 250px;
  color: rgba(17, 17, 17, 0.58);
  font-size: 0.74rem;
  font-weight: var(--weight-semibold);
  line-height: 1.35;
  text-transform: uppercase;
}

.about-story {
  background: var(--color-bg);
}

.story-grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(2rem, 7vw, 8rem);
  padding-top: clamp(4.5rem, 9vw, 8rem);
  padding-bottom: clamp(4.5rem, 9vw, 8rem);
}

.story-sticky {
  position: sticky;
  top: 88px;
  align-self: start;
}

.story-sticky h2 {
  max-width: 570px;
  margin: var(--space-5) 0 0;
  color: #111111;
  font-size: clamp(2.6rem, 6vw, 6rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.9;
  text-transform: uppercase;
}

.story-content {
  display: grid;
  gap: 0;
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
  font-size: clamp(1.55rem, 3vw, 3rem);
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
  padding: clamp(4rem, 8vw, 7rem) 0 clamp(5rem, 9vw, 8rem);
  overflow: hidden;
  background: var(--color-bg);
  color: #111111;
}

.gallery-bg-title {
  position: absolute;
  top: -0.12em;
  right: clamp(-1rem, 1vw, 3rem);
  color: rgba(255, 255, 255, 0.32);
  font-size: clamp(8rem, 29vw, 23rem);
  font-weight: 900;
  line-height: 0.82;
  pointer-events: none;
  text-transform: uppercase;
}

.gallery-header {
  margin: 0 auto var(--space-8);
}

.gallery-header h2 {
  max-width: 960px;
  margin: var(--space-4) 0 0;
  color: #111111;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.88;
  text-transform: uppercase;
}

.image-carousel {
  display: grid;
  gap: var(--space-5);
}

.carousel-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0;
  background: #111111;
  box-shadow: 0 22px 54px rgba(17, 17, 17, 0.16);
}

.carousel-slide {
  position: absolute;
  inset: 0;
  margin: 0;
  opacity: 0;
  transform: scale(1.025);
  transition:
    opacity 680ms var(--ease-out),
    transform 1100ms var(--ease-out);
  pointer-events: none;
}

.carousel-slide.active {
  opacity: 1;
  transform: scale(1);
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.92) contrast(1.03);
}

@media (prefers-reduced-motion: reduce) {
  .about-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .carousel-slide {
    transition: none;
  }
}

@media (max-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr;
  }

  .about-hero__shell {
    min-height: auto;
  }

  .story-sticky {
    position: static;
  }

}

@media (max-width: 768px) {
  .about-container {
    padding: 0 var(--space-5);
  }

  .about-hero {
    padding: var(--space-5) 0 var(--space-5);
  }

  .about-hero__copy {
    padding: var(--space-7) 0 0;
  }

  .page-title {
    margin-top: var(--space-5);
    font-size: clamp(3.5rem, 16vw, 6rem);
  }

  .page-subtitle {
    margin-top: var(--space-6);
    margin-bottom: var(--space-6);
    font-size: 0.92rem;
  }

  .hero-actions {
    margin-top: 0;
  }

  .about-glance {
    grid-template-columns: 1fr;
    margin-bottom: var(--space-6);
  }

  .glance-item {
    min-height: 82px;
    padding: var(--space-4) var(--space-5);
    border-right: 0;
    border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  }

  .glance-value {
    font-size: 1.45rem;
  }

  .glance-label {
    font-size: 0.72rem;
    line-height: 1.25;
  }

  .glance-item:last-child {
    border-bottom: 0;
  }

  .about-marquee {
    flex-wrap: wrap;
    gap: 0 var(--space-5);
    margin: 0;
    padding: var(--space-3) var(--space-5);
    overflow: visible;
    white-space: normal;
  }

  .about-marquee span {
    padding: var(--space-2) 0;
  }

  .story-grid {
    padding-top: var(--space-10);
    padding-bottom: var(--space-10);
  }

  .story-section {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .btn-primary,
  .hero-actions .btn-secondary {
    justify-content: center;
  }

  .gallery-section {
    margin: 0 calc(var(--space-5) * -1);
    padding: var(--space-10) 0 var(--space-12);
  }

  .gallery-header {
    margin-bottom: var(--space-6);
  }

  .gallery-header h2 {
    font-size: clamp(2.7rem, 12vw, 4.75rem);
  }

  .image-carousel {
    gap: 0;
  }

  .carousel-stage {
    aspect-ratio: 4 / 5;
  }
}

@media (max-width: 520px) {
  .about-container {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }

  .story-sticky h2 {
    font-size: clamp(2.8rem, 15vw, 4.7rem);
  }

  .gallery-section {
    margin: 0 calc(var(--space-4) * -1);
  }

  .gallery-bg-title {
    font-size: clamp(5.4rem, 27vw, 8rem);
  }

}

@media (max-width: 380px) {
  .page-title {
    font-size: clamp(3.1rem, 15vw, 3.8rem);
  }
}
</style>
