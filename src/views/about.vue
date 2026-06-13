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
                {{ $t("common.downloadResume") }}
                <span class="mdi mdi-download"></span>
              </a>
              <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
                {{ $t("common.getInTouch") }}
                <span class="mdi mdi-arrow-right"></span>
              </a>
            </div>
          </div>

        </div>
      </section>

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

    <section class="experience-section">
      <div class="about-container experience-grid">
        <div class="experience-heading">
          <p class="section-eyebrow">{{ $t("about.experience.eyebrow") }}</p>
        </div>

        <div class="experience-board">
          <div class="timeline-list" role="list">
            <article
              v-for="(item, index) in $t('about.experience.timeline')"
              :key="item.company"
              class="timeline-card"
              :class="{ active: isExperienceExpanded(index) }"
            >
              <button
                class="timeline-trigger"
                type="button"
                :aria-expanded="isExperienceExpanded(index)"
                :aria-controls="experiencePanelId(index)"
                @click="toggleExperience(index)"
              >
                <span class="timeline-year">{{ item.period }}</span>
                <span class="timeline-main">
                  <span class="timeline-role">{{ item.role }}</span>
                  <span class="timeline-company">{{ item.company }} · {{ item.location }}</span>
                </span>
                <span class="timeline-toggle" aria-hidden="true">{{ isExperienceExpanded(index) ? "-" : "+" }}</span>
              </button>

              <transition name="experience-panel">
                <div
                  v-show="isExperienceExpanded(index)"
                  :id="experiencePanelId(index)"
                  class="timeline-detail"
                >
                  <p class="timeline-summary">{{ item.summary }}</p>
                  <div class="timeline-highlights">
                    <p v-for="point in item.points" :key="point" class="timeline-highlight">{{ point }}</p>
                  </div>
                </div>
              </transition>
            </article>
          </div>

          <aside class="experience-side">
            <div class="skill-radar" aria-label="Skill overview">
              <h3>{{ $t("about.experience.skillsTitle") }}</h3>
              <div
                v-for="cluster in $t('about.experience.skills')"
                :key="cluster.title"
                class="skill-cluster"
              >
                <p>{{ cluster.title }}</p>
                <div class="skill-chips">
                  <span v-for="skill in cluster.items" :key="skill">{{ skill }}</span>
                </div>
              </div>
            </div>

            <div class="education-strip">
              <h3>{{ $t("about.experience.educationTitle") }}</h3>
              <article
                v-for="item in $t('about.experience.education')"
                :key="item.degree"
                class="education-item"
              >
                <span>{{ item.year }}</span>
                <div>
                  <h4>{{ item.degree }}</h4>
                  <p>{{ item.school }}</p>
                  <small>{{ item.grade }}</small>
                </div>
              </article>
            </div>
          </aside>
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
    experiencePanelId(index) {
      return `experience-panel-${index}`;
    },
    isExperienceExpanded(index) {
      return this.expandedExperiences.includes(index);
    },
    toggleExperience(index) {
      if (this.isExperienceExpanded(index)) {
        this.expandedExperiences = this.expandedExperiences.filter((item) => item !== index);
      } else {
        this.expandedExperiences = [...this.expandedExperiences, index];
      }
    },
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
      expandedExperiences: [0],
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
  padding: var(--space-8) 0 clamp(1.5rem, 3vw, 3rem);
}

.about-hero__shell {
  position: relative;
  min-height: auto;
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

.about-story {
  background: var(--color-bg);
}

.story-grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(2rem, 7vw, 8rem);
  padding-top: clamp(2.75rem, 5vw, 5rem);
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

.experience-section {
  position: relative;
  background: #111111;
  color: #ffffff;
}

.experience-grid {
  padding-top: clamp(4.5rem, 9vw, 8rem);
  padding-bottom: clamp(4.5rem, 9vw, 8rem);
}

.experience-heading {
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

.experience-heading .section-eyebrow {
  color: rgba(255, 255, 255, 0.56);
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  font-weight: var(--weight-bold);
}

.experience-board {
  display: grid;
  grid-template-columns: minmax(0, 1.28fr) minmax(300px, 0.72fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;
}

.timeline-list {
  position: relative;
  display: grid;
  gap: var(--space-3);
}

.timeline-list::before {
  content: "";
  position: absolute;
  top: 1.1rem;
  bottom: 1.1rem;
  left: 1.05rem;
  width: 1px;
  background: linear-gradient(180deg, #ffffff, rgba(255, 255, 255, 0.14));
}

.timeline-card {
  position: relative;
  padding-left: clamp(2.25rem, 4vw, 3.25rem);
}

.timeline-card::before {
  content: "";
  position: absolute;
  top: 1.16rem;
  left: 0.71rem;
  width: 0.72rem;
  height: 0.72rem;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: var(--radius-full);
  background: #111111;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.22);
  transition:
    background-color var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.timeline-card.active::before {
  background: #ffffff;
  box-shadow: 0 0 0 0.55rem rgba(255, 255, 255, 0.12);
  transform: scale(1.08);
}

.timeline-trigger {
  display: grid;
  grid-template-columns: minmax(8.5rem, 0.3fr) minmax(0, 1fr) auto;
  gap: clamp(0.9rem, 2vw, 1.5rem);
  width: 100%;
  min-height: 5.4rem;
  padding: clamp(1rem, 2.4vw, 1.5rem);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.045);
  color: inherit;
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition:
    background-color var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.timeline-trigger:hover,
.timeline-card.active .timeline-trigger {
  border-color: rgba(255, 255, 255, 0.38);
  background: rgba(255, 255, 255, 0.085);
  transform: translateY(-1px);
}

.timeline-trigger:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}

.timeline-year {
  color: rgba(255, 255, 255, 0.54);
  font-size: 0.74rem;
  font-weight: var(--weight-semibold);
  line-height: 1.35;
  text-transform: uppercase;
}

.timeline-main {
  display: grid;
  gap: 0.35rem;
}

.timeline-role {
  color: #ffffff;
  font-size: clamp(1.12rem, 2vw, 1.7rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.02;
  text-transform: uppercase;
}

.timeline-company {
  color: rgba(255, 255, 255, 0.66);
  font-size: 0.9rem;
  line-height: 1.35;
}

.timeline-toggle {
  display: inline-grid;
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--radius-full);
  place-items: center;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1;
}

.timeline-detail {
  margin-top: var(--space-3);
  padding: clamp(1rem, 2vw, 1.35rem) clamp(1rem, 2.4vw, 1.5rem);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.93);
  color: #111111;
  transform-origin: top;
}

.timeline-summary {
  max-width: 720px;
  margin: 0 0 var(--space-4);
  color: rgba(17, 17, 17, 0.74);
  font-size: clamp(1rem, 1.2vw, 1.12rem);
  line-height: 1.62;
  text-wrap: pretty;
}

.timeline-highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
}

.timeline-highlight {
  min-height: 100%;
  margin: 0;
  padding: 0.82rem 0.9rem;
  border: 1px solid rgba(17, 17, 17, 0.12);
  border-radius: var(--radius-sm);
  background: rgba(17, 17, 17, 0.035);
  color: rgba(17, 17, 17, 0.78);
  font-size: 0.88rem;
  line-height: 1.48;
  text-wrap: pretty;
}

.experience-panel-enter-active,
.experience-panel-leave-active {
  overflow: hidden;
  transition:
    opacity 260ms var(--ease-out),
    transform 260ms var(--ease-out);
}

.experience-panel-enter-from,
.experience-panel-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem) scaleY(0.98);
}

.experience-side {
  position: sticky;
  top: 88px;
  display: grid;
  gap: clamp(1.25rem, 2.6vw, 2rem);
}

.skill-radar,
.education-strip {
  padding: clamp(1.1rem, 2.4vw, 1.6rem);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.06);
}

.skill-radar h3,
.education-strip h3 {
  margin: 0 0 var(--space-5);
  color: #ffffff;
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
}

.skill-cluster {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-4) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.skill-cluster p {
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.76rem;
  font-weight: var(--weight-semibold);
  line-height: 1.3;
  text-transform: uppercase;
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill-chips span {
  display: inline-flex;
  min-height: 1.8rem;
  align-items: center;
  padding: 0.35rem 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.76rem;
  line-height: 1;
}

.education-item {
  display: grid;
  grid-template-columns: 5.2rem minmax(0, 1fr);
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.education-item span {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
  line-height: 1.35;
  text-transform: uppercase;
}

.education-item h4 {
  margin: 0 0 0.35rem;
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: var(--weight-semibold);
  line-height: 1.25;
}

.education-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.86rem;
  line-height: 1.45;
}

.education-item small {
  display: inline-flex;
  margin-top: 0.55rem;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.74rem;
  line-height: 1.3;
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

  .timeline-trigger,
  .timeline-card::before,
  .experience-panel-enter-active,
  .experience-panel-leave-active {
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

  .experience-heading,
  .experience-board {
    grid-template-columns: 1fr;
  }

  .experience-side {
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

  .story-grid {
    padding-top: var(--space-7);
    padding-bottom: var(--space-10);
  }

  .story-section {
    grid-template-columns: 1fr;
  }

  .experience-grid {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }

  .timeline-list::before {
    display: none;
  }

  .timeline-card {
    padding-left: 0;
  }

  .timeline-card::before {
    display: none;
  }

  .timeline-trigger {
    grid-template-columns: 1fr auto;
    gap: var(--space-3);
  }

  .timeline-year {
    grid-column: 1 / -1;
  }

  .timeline-detail {
    margin-top: var(--space-2);
  }

  .timeline-highlights {
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

  .skill-radar,
  .education-strip {
    padding: var(--space-5);
  }

  .education-item {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

}

@media (max-width: 380px) {
  .page-title {
    font-size: clamp(3.1rem, 15vw, 3.8rem);
  }
}
</style>
