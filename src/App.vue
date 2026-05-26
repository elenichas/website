<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      caseStudyObserver: null,
      productLinkClickHandler: null,
    };
  },
  mounted() {
    this.productLinkClickHandler = (event) => {
      const link = event.target.closest?.("a[href*='/products/']");
      if (link) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };
    document.addEventListener("click", this.productLinkClickHandler, true);

    this.$router.afterEach(() => {
      this.forceTopScroll();
      this.$nextTick(() => {
        this.forceTopScroll();
        this.prepareEditorialSections();
      });
    });
    this.prepareEditorialSections();
  },
  beforeUnmount() {
    if (this.caseStudyObserver) {
      this.caseStudyObserver.disconnect();
    }
    if (this.productLinkClickHandler) {
      document.removeEventListener("click", this.productLinkClickHandler, true);
    }
  },
  watch: {
    $route() {
      this.forceTopScroll();
    },
  },
  methods: {
    forceTopScroll() {
      const scrollTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      scrollTop();
      this.$nextTick(() => {
        scrollTop();
        requestAnimationFrame(scrollTop);
        setTimeout(scrollTop, 80);
      });
    },
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

      let sectionNumber = 0;

      sections.forEach((section, index) => {
        section.classList.add("editorial-reveal");
        section.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);

        const isNumberedSection =
          section.classList.contains("content-section") ||
          section.classList.contains("content-section-wide") ||
          section.classList.contains("split-section") ||
          section.classList.contains("showcase-section") ||
          section.classList.contains("tablet-section");

        if (isNumberedSection) {
          sectionNumber += 1;
          const label = section.querySelector(".section-label");
          label?.querySelector(".section-number")?.remove();

          if (label) {
            const number = document.createElement("span");
            number.className = "section-number";
            number.textContent = String(sectionNumber).padStart(2, "0");
            label.prepend(number);
          }
        }

        if (section.classList.contains("case-hero")) {
          section.classList.add("reveal-media");
        }

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
          section.classList.add("reveal-from-left");
        }

        if (section.classList.contains("split-section-right")) {
          section.classList.add("layout-media-text");
          section.classList.add("reveal-from-right");
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
        .forEach((section) => this.caseStudyObserver.observe(section));
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
