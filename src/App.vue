<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      caseStudyObserver: null,
    };
  },
  mounted() {
    this.$router.afterEach(() => {
      this.$nextTick(this.prepareEditorialSections);
    });
    this.prepareEditorialSections();
  },
  beforeUnmount() {
    if (this.caseStudyObserver) {
      this.caseStudyObserver.disconnect();
    }
  },
  methods: {
    prepareEditorialSections() {
      if (this.caseStudyObserver) {
        this.caseStudyObserver.disconnect();
      }

      const page = document.querySelector(".case-study");
      if (!page) return;

      if (window.location.pathname.includes("/workshop-design")) {
        page.querySelectorAll("video").forEach((video) => {
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.controls = false;
          video.classList.add("workshop-video-full");
          video.play().catch(() => {});
        });
      }

      const roleByPath = {
        "/products/brew-crumb": "UX/UI Designer",
        "/products/lunar-app": "UX/UI Designer, Front End Developer",
        "/products/industrial-configurator": "UX/UI Designer, Front End Developer",
        "/products/hapi-project": "University Student",
        "/products/workshop-design": "Computational Designer",
        "/products/thesis-project": "University Student",
        "/products/filos-mobile-app": "UX/UI Designer",
        "/products/language-learning-app": "UX/UI Designer, Front End Developer",
        "/products/coach-verification-app": "UX/UI Designer, Front End Developer",
      };

      const role = roleByPath[window.location.pathname];
      if (role) {
        const metaBlocks = [...page.querySelectorAll(".meta-block")];
        const roleBlock =
          metaBlocks.find((block) => block.querySelector(".meta-label")?.textContent.trim() === "Role") ||
          metaBlocks[0];

        if (roleBlock) {
          const label = roleBlock.querySelector(".meta-label");
          const value = roleBlock.querySelector(".meta-value");

          if (label) label.textContent = "Role";
          if (value) value.textContent = role;
        }
      }

      const sections = [
        ...page.querySelectorAll(".case-info, .case-study > section, .case-hero"),
      ];

      sections.forEach((section, index) => {
        const shouldReveal = section.classList.contains("animate-on-scroll");

        section.classList.toggle("editorial-reveal", shouldReveal);
        section.style.setProperty("--reveal-delay", shouldReveal ? "0ms" : "0ms");

        if (section.classList.contains("content-section")) {
          const hasFigure = section.querySelector(".image-figure, .video-figure");
          const hasText = section.querySelector(
            ".section-label, .section-heading, .subsection-heading, .body-text, .simple-list"
          );

          section.classList.toggle("layout-media-only", Boolean(hasFigure && !hasText));
          section.classList.toggle("layout-text-only", Boolean(!hasFigure && hasText));

          if (hasFigure && hasText) {
            section.classList.toggle("layout-text-media", index % 2 === 0);
            section.classList.toggle("layout-media-text", index % 2 !== 0);
          }
        }

        if (section.classList.contains("content-section-wide")) {
          section.classList.add("layout-media-only");
        }

        if (section.classList.contains("split-section-left")) {
          section.classList.add("layout-text-media");
        }

        if (section.classList.contains("split-section-right")) {
          section.classList.add("layout-media-text");
        }
      });

      if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        sections.forEach((section) => section.classList.add("is-visible"));
        return;
      }

      this.caseStudyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              if (this.caseStudyObserver) {
                this.caseStudyObserver.unobserve(entry.target);
              }
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.16,
        }
      );

      sections
        .filter((section) => section.classList.contains("editorial-reveal"))
        .forEach((section) => this.caseStudyObserver.observe(section));
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
