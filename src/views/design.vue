<template>
  <app-navbar></app-navbar>
  <!-- UX/UI Gallery -->
  <h2 class="gallery-title">UX/UI</h2>
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
  <h2 class="gallery-title">Architecture</h2>
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
          title: "Hapi Project",
          route: "/architecture/hapi-project",
        },
        {
          src: require("@/images/gallery/thesis.png"),
          alt: "Thesis Project",
          title: "Thesis Project",
          route: "/architecture/thesis-project",
        },
        {
          src: require("@/images/gallery/workshop.png"),
          alt: "Workshop Design",
          title: "Workshop Design",
          route: "/architecture/workshop-design",
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
          alt: "Local Bakery App",
          title: "Local Bakery App",
          route: "/uxui/local-bakery-app",
        },
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Animal Shelter Website",
          title: "Animal Shelter Website",
          route: "/uxui/animal-shelter-website",
        },
      ],
    };
  },
};
</script>
<style scoped>
.gallery-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  width: 90%;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.image-wrapper {
  overflow: hidden;
  /* border-radius: 10px; */
  height: 0;
  padding-bottom: 150%;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover img {
  transform: scale(1.2);
}

.image-title {
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 500;
}
</style>
