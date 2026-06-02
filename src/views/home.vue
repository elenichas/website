<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <section class="hero-section">
        <div class="hero-shell">
          <div class="hero-monogram" aria-hidden="true">
            <span>ELENI</span>
            <span>CHASIOTI</span>
          </div>

          <div class="hero-content">
            <div class="content-column anim-fade-in" style="--delay: 0.12s;">
              <p class="hero-kicker">{{ $t("home.kicker") }}</p>
              <welcome-card></welcome-card>
            </div>

            <div class="avatar-column anim-fade-in" style="--delay: 0.28s;">
              <div class="avatar-wrapper">
                <img :src="avatarSrc" alt="Portrait of Eleni Chasioti" class="avatar" />
                <div class="avatar-caption">
                  <span>{{ $t("common.portfolio") }}</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="home-marquee" aria-hidden="true">
        <span v-for="item in $t('home.marquee')" :key="item">{{ item }}</span>
      </div>

      <section class="featured-section">
        <div class="featured-bg-title" aria-hidden="true">{{ $t("home.work") }}</div>
        <div class="featured-header scroll-reveal">
          <p class="section-eyebrow">{{ $t("home.selectedWork") }}</p>
          <h2 class="featured-title">{{ $t("home.featuredProjects") }}</h2>
        </div>

        <div class="projects-stack" :aria-label="$t('home.featuredProjectsLabel')">
          <div
            v-for="(project, index) in featuredProjects" 
            :key="index" 
            class="project-card-frame"
            :style="{ '--i': index, '--card-top': (72 + index * 96) + 'px' }"
          >
            <router-link
              :to="project.route"
              class="project-card"
              :aria-label="`${$t('common.viewCaseStudy')}: ${project.name}`"
            >
              <div class="project-card__body">
                <div class="project-card__header">
                  <p class="project-card__index">{{ String(index + 1).padStart(2, '0') }}</p>
                  <h3 class="project-card__title">{{ project.name }}</h3>
                </div>

                <div class="project-card__details">
                  <p class="project-card__desc">{{ project.description }}</p>
                  <ul class="project-card__services" :aria-label="`${project.name}: ${$t('home.capabilitiesLabel')}`">
                    <li v-for="label in project.services" :key="label">{{ label }}</li>
                  </ul>
                </div>

                <span class="project-card__cta">
                  {{ $t("common.viewCaseStudy") }}
                  <span class="mdi mdi-arrow-right" aria-hidden="true"></span>
                </span>
              </div>

              <div class="project-card__image">
                <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <section class="stack-section scroll-reveal">
        <div class="stack-marquee" aria-label="Technical stack">
          <div class="stack-marquee__track">
            <span class="stack-marquee__title">{{ $t("home.technicalStack") }}</span>
            <span v-for="skill in allSkills" :key="`stack-a-${skill.name}`">{{ skill.name }}</span>
            <span class="stack-marquee__title" aria-hidden="true">{{ $t("home.technicalStack") }}</span>
            <span v-for="skill in allSkills" :key="`stack-b-${skill.name}`" aria-hidden="true">{{ skill.name }}</span>
          </div>
        </div>
      </section>
    </div>
    
    <app-footer></app-footer>
  </main>
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "../components/navbar.vue";
import AppFooter from "../components/footer.vue";
import WelcomeCard from "../components/welcomeCard.vue";
import { useHead } from "@vueuse/head";

// Skill icons
import Figma from "@/images/skills/figma.png";
import AdobeXD from "@/images/skills/adobexd.png";
import Photoshop from "@/images/skills/photoshop.png";
import VueJS from "@/images/skills/vue.png";
import ReactJS from "@/images/skills/react.png";
import CSharp from "@/images/skills/csharp.svg";
import HTML5 from "@/images/skills/HTML5.svg";
import CSS3 from "@/images/skills/CSS3.svg";
import Three from "@/images/skills/three.png";

export default {
  name: "Home",
  components: {
    AppNavbar,
    AppFooter,
    WelcomeCard,
  },
  setup() {
    useHead({
      title: "Eleni Chasioti, Product Designer & Engineer",
      meta: [
        { name: "description", content: "Portfolio of Eleni Chasioti, Product Designer & Engineer at Foster + Partners. Designing and building complex digital products at the intersection of spatial computing and user experience." },
        { property: "og:title", content: "Eleni Chasioti, Product Designer & Engineer" },
        { property: "og:description", content: "From lunar habitat configurators to authentication systems , designing and building complex digital products." },
      ],
    });
  },
  mounted() {
    this.initScrollReveal();
  },
  methods: {
    initScrollReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      this.$nextTick(() => {
        document.querySelectorAll('.scroll-reveal, .project-card').forEach((el) => {
          observer.observe(el);
        });
      });
    },
  },
  computed: {
    featuredProjects() {
      const projectCopy = this.$t("home.projects");

      return [
        {
          ...projectCopy.coach,
          image: resolveAsset("@/images/gallery/coachHero.jpg"),
          imageAlt: "Vintage Coach Catalog interface showing searchable bag reference entries",
          route: "/products/coach-verification-app",
        },
        {
          ...projectCopy.moon,
          image: resolveAsset("@/images/gallery/moonPixel.webp"),
          imageAlt: "Moon habitat configurator interface with a modular 3D settlement",
          route: "/products/lunar-app",
        },
        {
          ...projectCopy.language,
          image: resolveAsset("@/images/gallery/language.jpg"),
          imageAlt: "Arabiya language app lesson interface with Arabic learning content",
          route: "/products/language-learning-app",
        },
      ];
    },
  },
    data() {
    return {
      avatarSrc: resolveAsset("@/images/eleniBig.webp"),
      allSkills: [
        { name: "Figma", src: Figma },
        { name: "Adobe XD", src: AdobeXD },
        { name: "Photoshop", src: Photoshop },
        { name: "Vue.js", src: VueJS },
        { name: "React", src: ReactJS },
        { name: "C#", src: CSharp },
        { name: "HTML5", src: HTML5 },
        { name: "CSS3", src: CSS3 },
        { name: "Three.js", src: Three },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== HOME PAGE - Layered Studio ===== */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes stackTicker {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.ribbon {
  animation: ribbonDrift 6s ease-in-out infinite;
  transform-style: preserve-3d; /* Helps with the 3D rotation effect */
}

@keyframes ribbonDrift {
 0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 0.8; /* Keeps it visible during initial expansion */
  }
  100% {
    transform: scale(3); /* Adjust this based on how big you want the ripple */
    opacity: 0;
  }
}

.anim-fade-in {
  opacity: 1;
}

.scroll-reveal {
  opacity: 1;
  transform: none;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: no-preference) {
  .anim-fade-in {
    opacity: 0;
    animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: var(--delay, 0s);
  }

  .scroll-reveal {
    opacity: 0;
    transform: translateY(32px);
    transition:
      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay, 0s);
  }
}

.page-layout {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  background: #ffffff;
}

.container {
  position: relative;
  z-index: 1;
  width: min(100%, 1240px);
  margin: 0 auto;
  padding: 0 var(--space-8);
  flex: 1;
}

.page-layout :deep(.footer) {
  position: relative;
  z-index: 2;
  margin-top: 0;
}

.page-layout :deep(.footer-container) {
  padding-top: clamp(2rem, 4vw, 4rem);
  padding-bottom: clamp(2rem, 4vw, 3.5rem);
}

.section-eyebrow,
.hero-kicker {
  margin: 0;
  color: rgba(17, 17, 17, 0.58);
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
}

/* ===== HERO ===== */
.hero-section {
  padding: var(--space-8) 0 var(--space-8);
}

.hero-shell {
  position: relative;
  isolation: isolate;
  min-height: clamp(560px, calc(100vh - 128px), 720px);
  overflow: hidden;
  border-radius: 0;
  background: #ffffff;
}

.hero-shell::before {
  content: none;
}

.hero-content {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(160px, 240px);
  gap: clamp(2rem, 5vw, 5rem);
  min-height: inherit;
  padding: clamp(2.5rem, 5.5vw, 5rem);
  align-items: end;
}

.content-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 920px;
  padding-top: 0;
}

.hero-kicker {
  margin-bottom: var(--space-8);
  color: rgba(17, 17, 17, 0.5);
}

.content-column :deep(.welcome-text) {
  gap: var(--space-4);
}

.content-column :deep(.name) {
  max-width: 10.6ch;
  font-family: var(--font-sans);
  font-size: clamp(4.5rem, 9vw, 6rem);
  font-style: normal;
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: 0;
  text-transform: uppercase;
}

.content-column :deep(.job-title-container) {
  min-height: 2.75rem;
}

.content-column :deep(.job-title) {
  color: rgba(17, 17, 17, 0.72);
  font-size: clamp(1.05rem, 1.8vw, 1.45rem);
}

.content-column :deep(.description) {
  max-width: 590px;
  color: rgba(17, 17, 17, 0.72);
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  line-height: 1.55;
}

.content-column :deep(.cta-buttons) {
  margin-top: var(--space-4);
}

.content-column :deep(.btn-primary),
.content-column :deep(.btn-secondary) {
  border-radius: var(--radius-full);
}

.content-column :deep(.btn-primary) {
  background: #111111;
}

.content-column :deep(.btn-secondary) {
  background: #ffffff;
}

.content-column :deep(.btn-ghost) {
  margin-left: var(--space-1);
}

.avatar-column {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.avatar-wrapper {
  position: relative;
  width: clamp(150px, 14vw, 220px);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 2px;
  background: transparent;
  box-shadow: none;
  transform: none;
}

.avatar-wrapper::after {
  content: none;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.02);
}

.avatar-caption {
  display: none;
}

.hero-monogram {
  display: none;
}

.home-marquee {
  display: flex;
  gap: clamp(1.5rem, 4vw, 3rem);
  width: auto;
  margin: 0 calc(50% - 50vw + 7px) var(--space-12);
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

.home-marquee span {
  flex: 0 0 auto;
  padding: 1rem 0;
}

/* ===== FEATURED SECTION ===== */
.featured-section {
  position: relative;
  margin: 0 calc(50% - 50vw + 7px);
  padding: var(--space-14) 0 var(--space-16);
  overflow: visible;
  background: #d8d6ce;
  color: #111111;
}

.featured-header {
  position: relative;
  z-index: 2;
  margin-bottom: var(--space-10);
  padding: 0 clamp(1rem, 4vw, 4rem);
  text-align: left;
}

.featured-bg-title {
  position: absolute;
  top: -0.18em;
  left: clamp(8rem, 26vw, 34rem);
  color: rgba(255, 255, 255, 0.34);
  font-size: clamp(8rem, 30vw, 25rem);
  font-weight: 900;
  line-height: 0.8;
  pointer-events: none;
  text-transform: uppercase;
}

.featured-section .section-eyebrow {
  color: rgba(17, 17, 17, 0.54);
}

.featured-title {
  max-width: 1200px;
  margin: 0;
  color: #111111;
  font-family: var(--font-sans);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: 0;
  text-transform: uppercase;
}

.projects-stack {
  --stack-runway: clamp(260px, 24vh, 320px);
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: none;
  margin: 0 auto calc(var(--stack-runway) * -1);
  padding-bottom: var(--stack-runway);
}

.project-card-frame {
  display: contents;
}

.project-card-frame:last-child {
  display: contents;
}

.project-card {
  position: sticky;
  top: var(--card-top, 72px);
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);
  min-height: clamp(560px, 72vh, 760px);
  margin-bottom: clamp(260px, 40vh, 520px);
  overflow: hidden;
  color: #111111;
  text-decoration: none;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 10px;
  background: #f7f7f4;
  box-shadow: 0 18px 45px rgba(17, 17, 17, 0.12);
  transform-origin: center top;
  transition: box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: calc(10 + var(--i));
  will-change: transform;
}

.project-card-frame:last-child .project-card {
  margin-bottom: clamp(260px, 40vh, 520px);
}

.project-card:hover,
.project-card:focus-visible {
  box-shadow: 0 28px 70px rgba(17, 17, 17, 0.18);
}

.project-card__image {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  border-radius: 0 10px 10px 0;
  background: #1d1d1d;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-card__image img,
.project-card:focus-visible .project-card__image img {
  transform: scale(1.045);
}

.project-card__cta {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  color: #111111;
  border-bottom: 1px solid rgba(17, 17, 17, 0.32);
  font-size: 0.78rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.06em;
  padding-bottom: var(--space-1);
  text-transform: uppercase;
  transition:
    border-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);
}

.project-card:hover .project-card__cta,
.project-card:focus-visible .project-card__cta {
  border-color: #111111;
}

.project-card__body {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-8);
  min-width: 0;
  padding: clamp(1rem, 2vw, 2.25rem) clamp(1.25rem, 3vw, 4rem);
}

.project-card__header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: var(--space-5);
}

.project-card__index {
  margin: 0.48em 0 0;
  color: rgba(17, 17, 17, 0.38);
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
}

.project-card__details {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(170px, 240px);
  gap: var(--space-7);
  align-items: end;
}

.project-card__title {
  margin: 0;
  color: #111111;
  font-size: clamp(2.6rem, 6vw, 6rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.86;
  text-align: center;
}

.project-card__desc {
  margin: 0;
  max-width: 760px;
  color: rgba(17, 17, 17, 0.82);
  font-size: clamp(0.96rem, 1.15vw, 1.25rem);
  font-weight: var(--weight-semibold);
  line-height: 1.35;
}

.project-card__services {
  display: grid;
  gap: 0.42rem;
  margin: 0;
  padding: 0;
  color: rgba(17, 17, 17, 0.72);
  font-size: clamp(0.78rem, 0.86vw, 0.95rem);
  font-weight: var(--weight-semibold);
  line-height: 1.2;
  list-style: none;
  text-align: right;
}

/* ===== TECH STACK ===== */
.stack-section {
  position: relative;
  z-index: 20;
  margin: calc(clamp(340px, 32vh, 480px) * -1) calc(50% - 50vw + 7px) 0;
  padding: 0;
  border: 0;
  background: transparent;
  overflow: hidden;
}

.stack-marquee {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: clamp(5.2rem, 12vw, 9.5rem);
  background: #111111;
  color: #ffffff;
  overflow: hidden;
}

.stack-marquee__track {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 4rem);
  width: max-content;
  padding: 0 clamp(1rem, 3vw, 3rem);
  animation: stackTicker 34s linear infinite;
  white-space: nowrap;
}

.stack-marquee__track span {
  display: inline-flex;
  align-items: center;
  min-height: clamp(5.2rem, 12vw, 9.5rem);
  font-size: clamp(2.4rem, 7vw, 6rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.86;
  text-transform: uppercase;
}

.stack-marquee__track span:not(.stack-marquee__title) {
  color: rgba(255, 255, 255, 0.58);
  font-size: clamp(1.7rem, 4.8vw, 4.6rem);
}

.stack-marquee__track span::after {
  content: "/";
  margin-left: clamp(1.5rem, 4vw, 4rem);
  color: rgba(255, 255, 255, 0.24);
  font-weight: 900;
}

.stack-marquee:hover .stack-marquee__track {
  animation-play-state: paused;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: minmax(0, 1fr) minmax(180px, 240px);
    gap: var(--space-8);
  }

  .project-card {
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.8fr);
    min-height: 620px;
  }

  .project-card__details {
    grid-template-columns: 1fr;
  }

  .project-card__services {
    text-align: left;
  }

}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-5);
  }

  .hero-section {
    padding: var(--space-5) 0 var(--space-6);
  }

  .hero-shell {
    min-height: auto;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--space-5);
    min-height: auto;
    padding: var(--space-7) var(--space-6) var(--space-5);
  }

  .content-column {
    text-align: left;
  }

  .content-column :deep(.welcome-card) {
    text-align: left;
  }

  .content-column :deep(.welcome-text) {
    align-items: flex-start;
  }

  .content-column :deep(.name) {
    max-width: 9.8ch;
    font-size: clamp(3.6rem, 16vw, 6rem);
  }

  .content-column :deep(.description) {
    font-size: 0.9rem;
  }

  .content-column :deep(.cta-buttons) {
    justify-content: flex-start;
  }

  .avatar-column {
    justify-content: center;
  }

  .avatar-wrapper {
    width: min(38vw, 150px);
  }

  .home-marquee {
    margin: 0 calc(var(--space-5) * -1) var(--space-10);
  }

  .featured-section {
    margin: 0 calc(var(--space-5) * -1);
    padding: var(--space-10) 0;
  }

  .featured-header {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-6);
  }

  .featured-bg-title {
    top: 0.1rem;
    left: var(--space-5);
    max-width: calc(100vw - (var(--space-5) * 2));
    overflow: hidden;
    font-size: clamp(5.5rem, 27vw, 8rem);
    line-height: 0.82;
  }

  .featured-title {
    font-size: clamp(2.7rem, 12vw, 4.75rem);
  }

  .projects-stack {
    gap: var(--space-6);
    margin: 0;
    padding-bottom: 0;
  }

  .project-card {
    position: relative;
    top: auto;
    grid-template-columns: 1fr;
    min-height: 0;
    margin-bottom: var(--space-6);
    border-radius: 18px;
    opacity: 1;
    transform: none;
    transition:
      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-card.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: no-preference) {
    .project-card {
      opacity: 0;
      transform: translateY(28px);
    }
  }

  .project-card-frame:last-child .project-card {
    margin-bottom: 0;
  }

  .project-card__body {
    min-height: 0;
    gap: var(--space-6);
    padding: var(--space-6);
  }

  .project-card__details {
    gap: var(--space-4);
    align-items: start;
  }

  .project-card__title {
    font-size: clamp(2.1rem, 10vw, 4rem);
    text-align: left;
  }

  .project-card__desc {
    font-size: 0.9rem;
  }

  .project-card__image {
    min-height: 280px;
    aspect-ratio: 4 / 3;
    border-radius: 0 0 18px 18px;
  }

  .stack-section {
    margin: 0 calc(var(--space-5) * -1);
    padding: 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-4);
  }

  .hero-shell {
    min-height: auto;
  }

  .hero-content {
    padding: var(--space-6) var(--space-5) var(--space-4);
  }

  .hero-kicker {
    margin-bottom: var(--space-5);
  }

  .content-column :deep(.job-title-container) {
    min-height: 2rem;
  }

  .content-column :deep(.description) {
    font-size: 0.86rem;
    line-height: 1.55;
  }

  .content-column :deep(.btn-primary),
  .content-column :deep(.btn-secondary) {
    width: 100%;
    justify-content: center;
  }

  .content-column :deep(.btn-ghost) {
    margin-left: 0;
  }

  .avatar-wrapper {
    width: min(40vw, 145px);
  }

  .project-card {
    border-radius: 16px;
  }

  .featured-section {
    margin: 0 calc(var(--space-4) * -1);
  }

  .home-marquee,
  .stack-section {
    margin-left: calc(var(--space-4) * -1);
    margin-right: calc(var(--space-4) * -1);
  }

  .project-card__body {
    padding: var(--space-5);
  }

  .project-card__header {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .project-card__image {
    min-height: 240px;
    aspect-ratio: 4 / 3;
  }

  .project-card__services {
    font-size: 0.74rem;
  }

  .stack-section {
    padding: 0;
  }

  .stack-marquee__track {
    animation-duration: 26s;
  }
}
</style>
