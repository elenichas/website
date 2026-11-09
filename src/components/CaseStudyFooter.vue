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
        { title: "The Adventures of Simba", type: "Personal game · Game Boy Color", route: "/products/adventures-of-simba" },
        { title: "Paper & Parcel", type: "Local AI · Agent workflows", route: "/products/paper-and-parcel" },
        { title: "Plum Pulse", type: "Fintech · Agent UX", route: "/products/plum-pulse" },
        { title: "Vinted Smart Local Bundling", type: "Commerce · Mobile", route: "/products/vinted-smart-bundling" },
        { title: "AI Interface Sandbox", type: "AI UX · Desktop", route: "/products/ai-sandbox" },
        { title: "Industrial Facility Configurator", type: "Enterprise · 3D configurator", route: "/products/industrial-configurator" },
        { title: "Vintage Coach Catalog", type: "Data product", route: "/products/coach-verification-app" },
        { title: "Moon Habitat Configurator", type: "Design automation", route: "/products/lunar-app" },
        { title: "Map3D Studio", type: "Open-source data tools", route: "/products/map3d-studio" },
        { title: "Arabiya Language App", type: "Learning product", route: "/products/language-learning-app" },
        { title: "Filos Inclusive Activity App", type: "Mobile service", route: "/products/filos-mobile-app" },
        { title: "Brew & Crumb", type: "Mobile ordering", route: "/products/brew-crumb" },
        { title: "Digital Futures Workshop", type: "Earlier work · Fabrication", route: "/products/workshop-design" },
        { title: "Cricket WFC Plugin", type: "Earlier work · Computational tool", route: "/products/thesis-project" },
        { title: "Hapi Modular Housing", type: "Earlier work · Architecture", route: "/products/hapi-project" },
      ],
    };
  }
};
</script>
