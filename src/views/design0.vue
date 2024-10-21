<template>
  <app-navbar></app-navbar>
  <!-- UX/UI Gallery -->
  <h2 class="gallery-title">UX/UI Design</h2>
  <div class="gallery-container">
    <div class="gallery-item" v-for="(image, index) in uxuiImages" :key="index">
      <router-link :to="image.route">
        <div class="image-wrapper">
          <img :src="image.src" :alt="image.alt" />
        </div>
        <p class="image-title">{{ image.title }}</p>
      </router-link>
    </div>
  </div>

  <!-- Architecture Gallery -->
  <h2 class="gallery-title">Computational Design</h2>
  <div class="gallery-container">
    <div
      class="gallery-item"
      v-for="(image, index) in architectureImages"
      :key="index"
    >
      <router-link :to="image.route">
        <div class="image-wrapper">
          <img :src="image.src" :alt="image.alt" />
        </div>
        <p class="image-title">{{ image.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";

export default {
  name: "Design",
  components: {
    AppNavbar,
  },
  data() {
    return {
      architectureImages: [
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Hapi Project",
          title: "Hapi Thesis Project",
          route: "/design/hapi-project",
        },
        {
          src: require("@/images/gallery/thesis.png"),
          alt: "Thesis Project",
          title: "Circket Master Thesis Project",
          route: "/design/thesis-project",
        },
        {
          src: require("@/images/gallery/workshop.png"),
          alt: "Workshop Design",
          title: "Digital Features Workshop",
          route: "/design/workshop-design",
        },
      ],
      uxuiImages: [
        {
          src: require("@/images/gallery/filos.png"),
          alt: "Filos Mobile App",
          title: "Filos Mobile App",
          route: "/uxui/filos-mobile-app",
        },
        {
          src: require("@/images/gallery/kapihan.png"),
          alt: "Coffee shop App",
          title: "Coffee shop App",
          route: "/uxui/local-bakery-app",
        },
        {
          src: require("@/images/gallery/wip.png"),
          alt: "Building Configurator App",
          title: "Building Configurator App",
          route: "/uxui/animal-shelter-website",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
