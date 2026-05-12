<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="page-ribbon" aria-hidden="true">
      <span class="page-ribbon__line page-ribbon__line--blue"></span>
      <span class="page-ribbon__line page-ribbon__line--violet"></span>
      <span class="page-ribbon__line page-ribbon__line--amber"></span>
    </div>

    <div class="container">
      <section class="hero-section">
        <div class="hero-shell">
          <div class="hero-content">
            <div class="content-column anim-fade-in" style="--delay: 0.12s;">
              <p class="hero-kicker">Product design, code, and spatial systems</p>
              <welcome-card></welcome-card>
            </div>

            <div class="avatar-column anim-fade-in" style="--delay: 0.28s;">
              <div class="avatar-wrapper">
                <img :src="avatarSrc" alt="Eleni Chasioti" class="avatar" />
              </div>
            </div>
          </div>

          <div class="hero-monogram" aria-hidden="true">
           
          </div>
        </div>
      </section>

      <section class="featured-section">
        <div class="featured-header scroll-reveal">
          <p class="section-eyebrow">Selected work</p>
          <h2 class="featured-title">Featured Projects</h2>
        </div>

        <!-- Project Cards -->
        <div class="projects-grid">
          <router-link 
            v-for="(project, index) in featuredProjects" 
            :key="index" 
            :to="project.route" 
            class="project-card scroll-reveal"
            :class="{ 'project-card--hero': index === 0 }"
            :style="{ '--delay': (index * 0.12) + 's' }"
          >
            <div class="project-card__image">
              <img :src="project.image" :alt="project.name" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__cta">View Project</span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>{{ project.labels[0] }}</span>
                <span class="project-card__dot">&middot;</span>
                <span>{{ project.labels[1] }}</span>
              </div>
              <h3 class="project-card__title">{{ project.name }}</h3>
              <p class="project-card__desc">{{ project.description }}</p>
            </div>
          </router-link>
        </div>
      </section>

      <section class="stack-section scroll-reveal">
        <div class="stack-header">
          <p class="section-eyebrow">Tools and languages</p>
          <h2 class="stack-title">Technical Stack</h2>
        </div>
        <div class="stack-grid">
          <div 
            v-for="(skill, index) in allSkills" 
            :key="index" 
            class="stack-item"
            :style="{ '--i': index }"
          >
            <div class="stack-icon">
              <img :src="skill.src" :alt="skill.name" />
            </div>
            <span class="stack-name">{{ skill.name }}</span>
          </div>
        </div>
      </section>
    </div>
    
    <app-footer></app-footer>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppFooter from "../components/footer";
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
        document.querySelectorAll('.scroll-reveal').forEach((el) => {
          observer.observe(el);
        });
      });
    },
  },
    data() {
    return {
      avatarSrc: require("@/images/eleniBig.webp"),
      featuredProjects: [
        {
          name: "Vintage Coach Catalog",
          labels: ["Reference Platform", "Authentication System"],
          description: "The definitive digital reference for vintage Coach leather goods, cataloging 778 styles, 104 colors, and 70 catalogs spanning 1975 to 2002, with a built-in serial number decoder for authentication.",
          image: require("@/images/gallery/coachHero.jpg"),
          route: "/products/coach-verification-app",
        },
        {
          name: "Moon Habitat Configurator",
          labels: ["Design Automation", "3D Systems"],
          description: "A parametric design system for configuring modular lunar habitats through optimization algorithms and spatial analysis.",
          image: require("@/images/gallery/moonPixel.webp"),
          route: "/products/lunar-app",
        },
        {
          name: "Arabiya Language App",
          labels: ["Educational Technology", "Full-Stack"],
          description: "An immersive web app for learning Egyptian Arabic with interactive lessons, quizzes, and full bilingual support.",
          image: require("@/images/gallery/language.jpg"),
          route: "/products/language-learning-app",
        },
      ],
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

@keyframes stackSlideIn {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
  opacity: 0;
  animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay, 0s);
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

.scroll-reveal.revealed .stack-item {
  animation: stackSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--i, 0) * 0.055s);
}

.stack-item {
  opacity: 0;
}

.page-layout {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(circle at 10% 0%, rgba(209, 92, 29, 0.22), transparent 24rem),
    radial-gradient(circle at 92% 8%, rgba(41, 113, 255, 0.14), transparent 22rem),
    linear-gradient(180deg, #f8f4ec 0%, var(--color-bg) 44%, #ffffff 100%);
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
}

.page-ribbon {
  position: absolute;
  inset: 8rem -14% auto -14%;
  z-index: 0;
  height: min(1100px, 82%);
  pointer-events: none;
  opacity: 0.72;
}

.page-ribbon__line {
  position: absolute;
  left: -4%;
  width: 120%;
  height: clamp(54px, 6vw, 86px);
  border-radius: 50%;
  filter: blur(0.2px);
  transform: rotate(-5deg);
  animation: ribbonDrift 10s ease-in-out infinite;
}

.page-ribbon__line--blue {
  top: 10%;
  background:
    repeating-linear-gradient(180deg, rgba(65, 109, 255, 0.78) 0 4px, rgba(136, 168, 255, 0.78) 4px 8px, rgba(255, 255, 255, 0.54) 8px 10px);
  box-shadow: 0 0 18px rgba(55, 107, 255, 0.18);
}

.page-ribbon__line--violet {
  top: 34%;
  background:
    repeating-linear-gradient(180deg, rgba(105, 41, 213, 0.72) 0 5px, rgba(207, 74, 230, 0.72) 5px 10px, rgba(255, 255, 255, 0.46) 10px 12px);
  animation-delay: -2.5s;
}

.page-ribbon__line--amber {
  top: 58%;
  background:
    repeating-linear-gradient(180deg, rgba(219, 79, 25, 0.72) 0 5px, rgba(245, 157, 40, 0.72) 5px 10px, rgba(255, 218, 110, 0.56) 10px 12px);
  animation-delay: -5s;
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
  padding: var(--space-10) 0 var(--space-20);
}

.hero-shell {
  position: relative;
  isolation: isolate;
  min-height: clamp(620px, calc(100vh - 120px), 780px);
  overflow: hidden;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 28px;
    background: rgba(255, 255, 255, 0.7);
  /* background:
    linear-gradient(180deg, rgba(250, 250, 246, 0.9) 0%, rgba(238, 236, 228, 0.92) 54%, rgba(229, 177, 166, 0.72) 100%),
    #eeece4; */
  box-shadow: 0 28px 80px rgba(85, 42, 14, 0.14);
}

.hero-shell::before {
  content: "";
  position: absolute;
  inset: auto -12% -22% -12%;
  z-index: -2;
  height: 50%;
  background: white;
  /* background:
    radial-gradient(ellipse at 30% 65%, rgba(210, 93, 36, 0.38), transparent 40%),
    radial-gradient(ellipse at 70% 55%, rgba(219, 70, 160, 0.24), transparent 42%),
    linear-gradient(180deg, rgba(238, 181, 170, 0) 0%, rgba(220, 148, 137, 0.52) 100%); */
}

.hero-content {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
  gap: var(--space-10);
  min-height: clamp(420px, 56vh, 560px);
  padding: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

.content-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 680px;
}

.hero-kicker {
  margin-bottom: var(--space-8);
  color: rgba(17, 17, 17, 0.5);
}

.content-column :deep(.welcome-text) {
  gap: var(--space-4);
}

.content-column :deep(.name) {
  max-width: 9ch;
  font-family: var(--font-sans);
  font-size: clamp(4.1rem, 11vw, 9.25rem);
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
  max-width: 520px;
  color: rgba(17, 17, 17, 0.68);
}

.content-column :deep(.cta-buttons) {
  margin-top: var(--space-4);
}

.content-column :deep(.btn-primary),
.content-column :deep(.btn-secondary) {
  border-radius: var(--radius-full);
  backdrop-filter: var(--glass-blur-sm);
  -webkit-backdrop-filter: var(--glass-blur-sm);
}

.content-column :deep(.btn-primary) {
  background: #111111;
}

.content-column :deep(.btn-secondary) {
  background: rgba(255, 255, 255, 0.46);
}

.avatar-column {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.avatar-wrapper {
  position: relative;
  width: clamp(190px, 24vw, 300px);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 22px 60px rgba(17, 17, 17, 0.14);
}

.avatar-wrapper::after {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 16px;
  pointer-events: none;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.02);
  transition: transform var(--duration-slow) var(--ease-out);
}

.avatar-wrapper:hover .avatar {
  transform: scale(1.035);
}

.hero-monogram {
  position: absolute;
  left: clamp(1.25rem, 4vw, 3.5rem);
  right: clamp(1.25rem, 4vw, 3.5rem);
  bottom: -0.095em;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #ffffff;
  font-size: clamp(10rem, 28vw, 23rem);
  font-weight: 900;
  line-height: 0.78;
  letter-spacing: 0;
  pointer-events: none;
  text-transform: uppercase;
  text-shadow: 0 8px 26px rgba(134, 82, 65, 0.14);
}

/* ===== FEATURED SECTION ===== */
.featured-section {
  padding: 0 0 var(--space-20);
}

.featured-header {
  position: relative;
  z-index: 2;
  margin-bottom: var(--space-6);
  text-align: left;
}

.featured-title {
  max-width: 980px;
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: clamp(3rem, 8vw, 7.8rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: 0;
  text-transform: uppercase;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-8);
}

.project-card {
  position: relative;
  display: grid;
  min-height: 100%;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 18px 46px rgba(17, 17, 17, 0.06);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover,
.project-card:focus-visible {
  transform: translateY(-6px);
  border-color: rgba(17, 17, 17, 0.18);
  box-shadow: 0 26px 70px rgba(17, 17, 17, 0.1);
}

.project-card--hero {
  grid-column: 1 / -1;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
}

.project-card__image {
  position: relative;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  background: var(--color-accent-soft);
}

.project-card--hero .project-card__image {
  aspect-ratio: 1.8 / 1;
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

.project-card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--space-5);
  background: linear-gradient(180deg, transparent 38%, rgba(0, 0, 0, 0.42) 100%);
  opacity: 0;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-card__overlay,
.project-card:focus-visible .project-card__overlay {
  opacity: 1;
}

.project-card__cta {
  color: #111111;
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  padding: 0.62rem 1rem;
  text-transform: uppercase;
}

.project-card__body {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-6);
}

.project-card--hero .project-card__body {
  padding: var(--space-8);
}

.project-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: var(--space-3);
  color: rgba(17, 17, 17, 0.48);
  font-size: 0.64rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  line-height: 1.4;
  text-transform: uppercase;
}

.project-card__dot {
  color: rgba(17, 17, 17, 0.26);
}

.project-card__title {
  margin: 0 0 var(--space-3);
  color: var(--color-text);
  font-size: clamp(1.35rem, 2.3vw, 2.25rem);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 0.98;
}

.project-card__desc {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.92rem;
  line-height: 1.65;
}

/* ===== TECH STACK ===== */
.stack-section {
  padding: var(--space-10) 0 var(--space-6);
  border-top: 1px solid rgba(17, 17, 17, 0.08);
}

.stack-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

.stack-title {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: clamp(1.8rem, 4vw, 3.25rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.95;
  text-transform: uppercase;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  gap: 0.5rem;
}

.stack-item {
  display: flex;
  min-width: 0;
  min-height: 92px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.75rem 0.5rem;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.7);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.stack-item:hover {
  transform: translateY(-3px);
  border-color: rgba(17, 17, 17, 0.22);
  box-shadow: 0 14px 34px rgba(17, 17, 17, 0.07);
}

.stack-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stack-icon img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.stack-name {
  max-width: 100%;
  color: var(--color-text-secondary);
  font-size: 0.7rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0;
  line-height: 1.2;
  overflow-wrap: anywhere;
  text-align: center;
}

.stack-item:hover .stack-name {
  color: var(--color-text);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: minmax(0, 1fr) minmax(180px, 240px);
    gap: var(--space-8);
  }

  .project-card--hero {
    grid-template-columns: 1fr;
  }

  .project-card--hero .project-card__image {
    aspect-ratio: 16 / 9;
  }

  .stack-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-5);
  }

  .hero-section {
    padding: var(--space-6) 0 var(--space-12);
  }

  .hero-shell {
    min-height: 690px;
    border-radius: 22px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    min-height: auto;
    padding: var(--space-8) var(--space-6);
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
    max-width: 8ch;
    font-size: clamp(3.25rem, 16vw, 5.8rem);
  }

  .content-column :deep(.description) {
    font-size: 0.9rem;
  }

  .content-column :deep(.cta-buttons) {
    justify-content: flex-start;
  }

  .avatar-column {
    justify-content: flex-start;
  }

  .avatar-wrapper {
    width: min(58vw, 230px);
  }

  .page-ribbon {
    inset: 7rem -28% auto -28%;
    height: 900px;
  }

  .page-ribbon__line {
    height: 48px;
  }

  .hero-monogram {
    font-size: clamp(8rem, 38vw, 15rem);
  }

  .featured-section {
    padding-bottom: var(--space-12);
  }

  .featured-title {
    font-size: clamp(2.6rem, 13vw, 5rem);
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .project-card--hero {
    grid-column: 1;
  }

  .project-card__body,
  .project-card--hero .project-card__body {
    padding: var(--space-5);
  }

  .project-card__title {
    font-size: 1.35rem;
  }

  .project-card__desc {
    font-size: 0.84rem;
  }

  .stack-header {
    display: block;
  }

  .stack-header .section-eyebrow {
    margin-bottom: var(--space-2);
  }

  .stack-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-4);
  }

  .hero-shell {
    min-height: 660px;
  }

  .hero-content {
    padding: var(--space-6) var(--space-5);
  }

  .hero-kicker {
    margin-bottom: var(--space-5);
  }

  .content-column :deep(.job-title-container) {
    min-height: 2rem;
  }

  .content-column :deep(.description) {
    font-size: 0.8rem;
    line-height: 1.55;
  }

  .content-column :deep(.btn-primary),
  .content-column :deep(.btn-secondary) {
    width: 100%;
    justify-content: center;
  }

  .avatar-wrapper {
    width: min(62vw, 190px);
    border-radius: 18px;
  }

  .page-ribbon {
    inset: 6rem -36% auto -36%;
    height: 820px;
  }

  .hero-monogram {
    left: var(--space-4);
    right: var(--space-4);
    font-size: clamp(6.8rem, 36vw, 10rem);
  }

  .project-card {
    border-radius: 14px;
  }

  .project-card__image,
  .project-card--hero .project-card__image {
    aspect-ratio: 4 / 3;
  }

  .project-card__meta {
    font-size: 0.58rem;
  }

  .stack-section {
    padding-top: var(--space-8);
  }

  .stack-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stack-item {
    min-height: 78px;
    border-radius: 12px;
  }
}
</style>
