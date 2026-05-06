<template>
  <div class="case-study-footer">
    <next-project
      v-if="nextProject"
      :title="nextProject.title"
      :type="nextProject.type"
      :route="nextProject.route"
    />
    <app-footer />
  </div>
</template>

<script>
import NextProject from "./NextProject.vue";
import AppFooter from "./footer.vue";

export default {
  name: "CaseStudyFooter",
  components: {
    NextProject,
    AppFooter,
  },
  props: {
    currentRoute: {
      type: String,
      required: true,
    },
  },
  computed: {
    nextProject() {
      const currentIndex = this.projects.findIndex(
        (p) => p.route === this.currentRoute
      );
      if (currentIndex === -1) return this.projects[0];
      const nextIndex = (currentIndex + 1) % this.projects.length;
      return this.projects[nextIndex];
    },
  },
  data() {
    return {
      projects: [
        {
          title: "Vintage Coach Catalog",
          type: "Authentication System",
          route: "/products/coach-verification-app",
        },
        {
          title: "Industrial Facility Configurator",
          type: "Configuration System",
          route: "/products/industrial-configurator",
        },
        {
          title: "Moon Habitat Configurator",
          type: "Design Automation",
          route: "/products/lunar-app",
        },
        {
          title: "Arabiya Language App",
          type: "Educational Web App",
          route: "/products/language-learning-app",
        },
        {
          title: "Filos Mobile Experience",
          type: "Accessible Experience",
          route: "/products/filos-mobile-app",
        },
        {
          title: "Brew & Crumb",
          type: "Product Design",
          route: "/products/brew-crumb",
        },
        {
          title: "Cricket Plugin",
          type: "Computational Framework",
          route: "/products/thesis-project",
        },
        {
          title: "Architectural System",
          type: "Parametric Modular Design",
          route: "/products/hapi-project",
        },
        {
          title: "Digital Futures Workshop",
          type: "Prefabrication & Automation",
          route: "/products/workshop-design",
        },
      ],
    };
  },
};
</script>
